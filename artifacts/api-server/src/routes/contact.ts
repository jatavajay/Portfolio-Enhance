import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body as {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  if (!name || !email || !subject || !message) {
    res.status(400).json({ success: false, error: "All fields are required." });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jatavajay09@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <jatavajay09@gmail.com>`,
      to: "jatavajay09@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6d28d9;">New message from your portfolio</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; width: 80px;">Name</td><td style="padding: 8px;">${name}</td></tr>
            <tr style="background:#f9fafb;"><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Subject</td><td style="padding: 8px;">${subject}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f9fafb; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 24px;">Sent via your portfolio contact form. Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    req.log.error(err, "Failed to send contact email");
    res.status(500).json({ success: false, error: "Failed to send email. Please try again." });
  }
});

export default router;
