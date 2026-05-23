import { Resend } from "resend";

let resend: Resend | null = null;

export function getResend() {
  if (resend) {
    return resend;
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    throw new Error("Resend environment variables are not configured.");
  }

  resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
}
