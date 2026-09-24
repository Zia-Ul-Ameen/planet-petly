import { neon } from "@neondatabase/serverless";

const getDatabaseUrl = () => {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL environment variable is required");
  return url;
};

// ─── Insert a new enquiry, returns the inserted row id ────────────────────────
export async function insertEnquiry({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message?: string;
}): Promise<{ success: boolean; id?: number; error?: unknown }> {
  try {
    const sql = neon(getDatabaseUrl());

    await sql`
      CREATE TABLE IF NOT EXISTS enquiries (
        id            SERIAL PRIMARY KEY,
        name          VARCHAR(255) NOT NULL,
        email         VARCHAR(255) NOT NULL,
        message       TEXT,
        created_at    TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        email_sent    BOOLEAN DEFAULT FALSE,
        email_attempts INTEGER DEFAULT 0
      );
    `;

    const result = await sql`
      INSERT INTO enquiries (name, email, message, email_sent, email_attempts)
      VALUES (${name}, ${email}, ${message || ""}, FALSE, 0)
      RETURNING id;
    `;

    return { success: true, id: result[0]?.id };
  } catch (error) {
    console.error("Failed to insert enquiry:", error);
    return { success: false, error };
  }
}

// ─── Mark email as successfully sent ─────────────────────────────────────────
export async function markEmailSent(id: number): Promise<void> {
  try {
    const sql = neon(getDatabaseUrl());
    await sql`
      UPDATE enquiries
      SET email_sent = TRUE, email_attempts = email_attempts + 1
      WHERE id = ${id};
    `;
  } catch (error) {
    console.error(`Failed to mark email sent for id=${id}:`, error);
  }
}

// ─── Increment attempt counter on failure ─────────────────────────────────────
export async function markEmailFailed(id: number): Promise<void> {
  try {
    const sql = neon(getDatabaseUrl());
    await sql`
      UPDATE enquiries
      SET email_attempts = email_attempts + 1
      WHERE id = ${id};
    `;
  } catch (error) {
    console.error(`Failed to mark email failed for id=${id}:`, error);
  }
}

// ─── Get enquiries that need email retry (failed, < 3 attempts) ───────────────
export async function getPendingEmailEnquiries(): Promise<
  { id: number; name: string; email: string; message: string }[]
> {
  try {
    const sql = neon(getDatabaseUrl());
    const rows = await sql`
      SELECT id, name, email, message
      FROM enquiries
      WHERE email_sent = FALSE
        AND email_attempts < 3
      ORDER BY id ASC
      LIMIT 10;
    `;
    return rows as { id: number; name: string; email: string; message: string }[];
  } catch (error) {
    console.error("Failed to fetch pending email enquiries:", error);
    return [];
  }
}
