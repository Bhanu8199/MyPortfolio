
import sql from "./db";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
}

export async function saveContactMessage(data: ContactFormData) {
  console.log("saveContactMessage payload:", data);

  try {
    // Insert only columns that are guaranteed to exist.
    // Current DB schema in Neon appears to be missing `subject`.
    const result = await sql`
      INSERT INTO contact_messages (name, email, phone, message, created_at)
      VALUES (${data.name}, ${data.email}, ${data.phone}, ${data.message}, NOW())
      RETURNING id
    `;
    return result[0];

  } catch (error) {
    console.error("Error saving contact message:", error);
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to save contact message: ${message}`);
  }
}

