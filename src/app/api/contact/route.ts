import { NextResponse, after } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/schemas";
import {
  insertEnquiry,
  markEmailSent,
  markEmailFailed,
  getPendingEmailEnquiries,
} from "@/lib/db";

// ─── SMTP transporter (connection pool, reused across requests) ───────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT || 465),
  secure: Number(process.env.SMTP_PORT || 465) === 465,
  auth: {
    user: process.env.SMTP_USER || "admin@adrarecom.com",
    pass: process.env.SMTP_PASS || "wkhj sneq wmeh ymgx",
  },
  pool: true,
  maxConnections: 3,
});

const FROM_EMAIL = process.env.SMTP_USER || "admin@adrarecom.com";
const TO_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || FROM_EMAIL;

// ─── Helper: send email for a single enquiry and update DB ───────────────────
async function sendEnquiryEmail(enquiry: {
  id: number;
  name: string;
  email: string;
  message: string;
}) {
  const { id, name, email, message } = enquiry;
  try {
    await transporter.sendMail({
      from: `"Planet Petly Website" <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: `New Contact Form Submission: ${name}`,
      text: `You have received a new message.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message || "No message provided"}\n`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #2a7dc9; padding: 20px; color: #fff;">
            <h2 style="margin: 0; font-size: 20px;">New Contact Form Submission</h2>
          </div>
          <div style="padding: 24px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f8f9fa; border-left: 4px solid #2a7dc9; padding: 12px 16px; margin-top: 8px; border-radius: 4px;">
              ${(message || "No message provided").replace(/\n/g, "<br/>")}
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
    const body = await request.json();

    // 1. Validate payload
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const errorMessage = parsed.error.issues.map((i) => i.message).join(", ");
      return NextResponse.json(
        { status: "error", message: errorMessage || "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    // 2. Save to DB immediately
    const dbResult = await insertEnquiry({ name, email, message });

    if (!dbResult.success) {
      return NextResponse.json(
        { status: "error", message: "Failed to save your message. Please try again." },
        { status: 500 }
      );
    }

    // 3. Respond to the user immediately — no waiting for email!
    const response = NextResponse.json({
      status: "success",
      message: "Message sent successfully",
      db_saved: true,
    });

    // 4. After response is sent: send this email + retry any previously failed ones.
    //    `after()` runs after the response is flushed — user never waits for it.
    after(async () => {
      // Retry previously failed emails first
      const pending = await getPendingEmailEnquiries();
      for (const enquiry of pending) {
        // Don't duplicate-send the one we just inserted (it's in the pending list too)
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
      { status: "error", message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
