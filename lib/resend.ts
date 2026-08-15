import { Resend } from "resend";

let resend: Resend | null = null;

export function getResend() {
  if (resend) {
    return resend;
  }

  if (!process.env.RESEND_API_KEY) {
    throw new Error("Resend API key is not configured.");
  }

  resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
}

export function getContactMailbox() {
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!to) {
    throw new Error("CONTACT_TO_EMAIL is not configured.");
  }

  if (!from) {
    throw new Error("CONTACT_FROM_EMAIL is not configured.");
  }

  return { to, from };
}
