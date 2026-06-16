import express from "express";
import cors from "cors";
import { saveContactMessage } from "../src/lib/contact";
import type { Request, Response } from "express";

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const { name, email, phone, subject, message } = req.body ?? {};


    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await saveContactMessage({
      name: String(name),
      email: String(email),
      phone: String(phone),
      subject: subject ? String(subject) : "",
      message: String(message),
    });

    return res.status(200).json({ ok: true, id: result?.id ?? result });
  } catch (err) {
    console.error("/api/contact error:", err);
    return res.status(500).json({ error: "Failed to save contact message" });
  }
});

const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
  console.log(`Contact API server listening on http://localhost:${port}`);
});


