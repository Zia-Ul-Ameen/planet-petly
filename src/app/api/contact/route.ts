import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/schemas";
import { insertEnquiry } from "@/lib/db";

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

    // 2. Insert into Neon Database (non-blocking / error-tolerant)
    let dbSuccess = false;
    try {
      const dbResult = await insertEnquiry({ name, email, message });
      dbSuccess = dbResult.success;
    } catch (dbErr) {
      console.error("Database save failed:", dbErr);
    }

    // 3. Send email via SMTP (Nodemailer / Gmail)
    let emailNotified = false;
    let emailError: string | null = null;

    const smtpUser = process.env.SMTP_USER || "admin@adrarecom.com";
    const smtpPass = process.env.SMTP_PASS || "wkhj sneq wmeh ymgx";
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || smtpUser;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465, // true for 465, false for other ports
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Planet Petly Website" <${smtpUser}>`,
          to: receiverEmail,
          replyTo: `"${name}" <${email}>`,
          subject: `New Contact Form Submission: ${name}`,
          text: `You have received a new message from your website contact form.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message || "No message provided"}\n`,
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

        emailNotified = true;
      } catch (err: any) {
        console.error("Failed to send email:", err);
        emailError = err.message || "Failed to send email";
      }
    } else {
      emailError = "SMTP credentials are not configured";
    }

    return NextResponse.json({
      status: "success",
      message: "Message sent successfully",
      db_saved: dbSuccess,
      email_notified: emailNotified,
      email_error: emailError,
    });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { status: "error", message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
