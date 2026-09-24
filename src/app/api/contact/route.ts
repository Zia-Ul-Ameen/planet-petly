import { NextResponse, after } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/schemas";
import {
  insertEnquiry,
  markEmailSent,
  markEmailFailed,
  getPendingEmailEnquiries,
} from "@/lib/db";

// ─── Helper: sanitize user input for use in HTML email ───────────────────────
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// ─── SMTP transporter — credentials must come from env vars only ──────────────
function getTransporter() {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 465);

  if (!smtpUser || !smtpPass) {
    throw new Error("SMTP_USER and SMTP_PASS environment variables are required");
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
    pool: true,
    maxConnections: 3,
  });
}

const FROM_EMAIL = process.env.SMTP_USER;
const TO_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;

// ─── Simple in-memory rate limiter (per serverless instance) ─────────────────
// Limits each IP to 3 submissions per 10 minutes.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
}

// ─── Helper: send email for a single enquiry ─────────────────────────────────
async function sendEnquiryEmail(enquiry: {
  id: number;
  name: string;
  email: string;
  message: string;
}) {
  const { id, name, email, message } = enquiry;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message || "No message provided").replace(/\n/g, "<br/>");

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"Planet Petly Website" <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: `"${safeName}" <${email}>`,
      subject: `New Contact Form Submission: ${safeName}`,
      text: `New message from website.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message || "No message provided"}\n`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #2a7dc9; padding: 20px; color: #fff;">
            <h2 style="margin: 0; font-size: 20px;">New Contact Form Submission</h2>
          </div>
          <div style="padding: 24px;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f8f9fa; border-left: 4px solid #2a7dc9; padding: 12px 16px; margin-top: 8px; border-radius: 4px;">
              ${safeMessage}
            </div>
          </div>
          <div style="background-color: #f1f3f5; padding: 12px 24px; font-size: 12px; color: #6c757d; text-align: center;">
            Sent from Planet Petly Website Contact Form
          </div>
        </div>
      `,
    });
    await markEmailSent(id);
    console.log(`[email] ✓ Sent for enquiry id=${id}`);
  } catch (err) {
    await markEmailFailed(id);
    console.error(`[email] ✗ Failed for enquiry id=${id}:`, err);
  }
}

// ─── POST handler ─────────────────────────────────────────────────────────────
export async function POST(request: Request) {
  try {
    // 1. Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { status: "error", message: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    // 2. Validate payload
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const errorMessage = parsed.error.issues.map((i) => i.message).join(", ");
      return NextResponse.json(
        { status: "error", message: errorMessage || "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    // 3. Save to DB immediately
    const dbResult = await insertEnquiry({ name, email, message });

    if (!dbResult.success) {
      return NextResponse.json(
        { status: "error", message: "Failed to save your message. Please try again." },
        { status: 500 }
      );
    }

    // 4. Respond to the user immediately — no waiting for email!
    const response = NextResponse.json({
      status: "success",
      message: "Message sent successfully",
      db_saved: true,
    });

    // 5. After response is sent: send this email + retry any previously failed ones.
    after(async () => {
      // Retry previously failed emails first
      const pending = await getPendingEmailEnquiries();
      for (const enquiry of pending) {
        if (enquiry.id !== dbResult.id) {
          console.log(`[email] Retrying failed email for enquiry id=${enquiry.id}`);
          await sendEnquiryEmail(enquiry);
        }
      }

      // Send for the current submission
      if (dbResult.id) {
        await sendEnquiryEmail({ id: dbResult.id, name, email, message: message || "" });
      }
    });

    return response;
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
}
