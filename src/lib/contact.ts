import sql from './db';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function saveContactMessage(data: ContactFormData) {
  try {
    const result = await sql`
      INSERT INTO contact_messages (name, email, subject, message, created_at)
      VALUES (${data.name}, ${data.email}, ${data.subject}, ${data.message}, NOW())
      RETURNING id
    `;
    return result[0];
  } catch (error) {
    console.error('Error saving contact message:', error);
    throw new Error('Failed to save contact message');
  }
}
