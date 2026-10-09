import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "465", 10),
  secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports like 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const FROM = process.env.SMTP_FROM || '"AiTechPulze" <info@aitechpulze.com>';

export async function sendMail(opts) {
  console.log(`[Email Attempt] Sending to: ${opts.to}, Subject: ${opts.subject}`);
  try {
    const info = await transporter.sendMail({ from: FROM, ...opts });
    console.log(`[Email Success] Sent to ${opts.to}, MessageID: ${info.messageId}`);
    return info;
  } catch (err) {
    console.error(`[Email Failed] Could not send to ${opts.to}:`, err);
    throw err;
  }
}

// Escape user input before putting it in HTML emails.
export const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
