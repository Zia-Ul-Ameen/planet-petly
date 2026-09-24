import { neon } from "@neondatabase/serverless";

export async function insertEnquiry({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message?: string;
}) {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    console.warn("DATABASE_URL is not defined. Skipping database insertion.");
    return { success: false, reason: "DATABASE_URL_NOT_CONFIGURED" };
  }

  try {
    const sql = neon(databaseUrl);

    // Ensure the enquiries table exists in Neon PostgreSQL
    await sql`
      CREATE TABLE IF NOT EXISTS enquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Insert the submission record
    const result = await sql`
      INSERT INTO enquiries (name, email, message)
      VALUES (${name}, ${email}, ${message || ""})
      RETURNING id, created_at;
    `;

    return { success: true, data: result[0] };
  } catch (error) {
    console.error("Failed to insert enquiry into Neon DB:", error);
    return { success: false, error };
  }
}
