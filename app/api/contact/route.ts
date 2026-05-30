import { NextResponse } from "next/server";
import { z } from "zod";
import { getResend } from "@/lib/resend";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(120),
  email: z.string().trim().email("Enter a valid email address").max(160).optional().or(z.literal("")),
  phone: z.string().trim().min(7, "Phone number is required").max(60),
  companyName: z.string().trim().max(160).optional().default(""),
  projectType: z.string().trim().min(2, "Project type is required").max(100),
  message: z.string().trim().min(12, "Tell us a little more about the project").max(3000),
  website: z.string().trim().max(0).optional().default("")
});

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid form submission." },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const supabase = getSupabaseAdmin();
    const resend = getResend();

    const { error } = await supabase.from("contact_messages").insert({
      full_name: data.fullName,
      email: data.email || null,
      phone: data.phone,
      company_name: data.companyName || null,
      project_type: data.projectType,
      message: data.message
    });

    if (error) {
      console.error("Supabase contact insert failed", error);
      return NextResponse.json(
        { ok: false, message: "We could not save your message. Please try again." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "SouthAxis Website <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `New SouthAxis enquiry: ${data.projectType}`,
      ...(data.email ? { replyTo: data.email } : {}),
      text: [
        "New SouthAxis Infrastructure enquiry",
        "",
        `Name: ${data.fullName}`,
        `Email: ${data.email || "Not provided"}`,
        `Phone: ${data.phone}`,
        `Company: ${data.companyName || "Not provided"}`,
        `Project type: ${data.projectType}`,
        "",
        data.message
      ].join("\n")
    });

    return NextResponse.json({ ok: true, message: "Thanks. Your enquiry has been sent." });
  } catch (error) {
    console.error("Contact route failed", error);
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again shortly." },
      { status: 500 }
    );
  }
}
