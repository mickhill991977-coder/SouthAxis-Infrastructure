import { NextResponse } from "next/server";
import { z } from "zod";
import { getContactMailbox, getResend } from "@/lib/resend";
import { isRateLimited } from "@/lib/rate-limit";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(120),
  email: z.string().trim().email("Enter a valid email address").max(160).optional().or(z.literal("")),
  phone: z.string().trim().min(7, "Phone number is required").max(60),
  companyName: z.string().trim().max(160).optional().default(""),
  projectType: z.string().trim().min(2, "Project type is required").max(100),
  message: z.string().trim().min(12, "Tell us a little more about the project").max(3000),
  website: z.string().max(200).optional().default("")
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  try {
    if (isRateLimited(`contact:${clientKey(request)}`)) {
      return NextResponse.json(
        {
          ok: false,
          message: "We couldn't send your enquiry. Please try again or call 07385 616316."
        },
        { status: 429 }
      );
    }

    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid form submission." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Honeypot: pretend success so bots do not learn the trap.
    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json({
        ok: true,
        message: "Thanks — your enquiry has been sent. The SouthAxis team will be in touch."
      });
    }

    const submittedAt = new Date();
    const submittedLabel = submittedAt.toLocaleString("en-GB", {
      timeZone: "Europe/London",
      dateStyle: "medium",
      timeStyle: "short"
    });

    let archived = false;
    try {
      const supabase = getSupabaseAdmin();
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
      } else {
        archived = true;
      }
    } catch (error) {
      console.error("Supabase contact archive unavailable", error);
    }

    try {
      const resend = getResend();
      const { to, from } = getContactMailbox();
      const safe = {
        fullName: escapeHtml(data.fullName),
        email: escapeHtml(data.email || "Not provided"),
        phone: escapeHtml(data.phone),
        companyName: escapeHtml(data.companyName || "Not provided"),
        projectType: escapeHtml(data.projectType),
        message: escapeHtml(data.message).replaceAll("\n", "<br />"),
        submittedLabel: escapeHtml(submittedLabel)
      };

      const { error: emailError } = await resend.emails.send({
        from,
        to,
        subject: `New SouthAxis enquiry – ${data.projectType} – ${data.fullName}`,
        ...(data.email ? { replyTo: data.email } : {}),
        text: [
          "New SouthAxis Infrastructure enquiry",
          "",
          `Submitted: ${submittedLabel}`,
          `Name: ${data.fullName}`,
          `Email: ${data.email || "Not provided"}`,
          `Phone: ${data.phone}`,
          `Company: ${data.companyName || "Not provided"}`,
          `Project type: ${data.projectType}`,
          "",
          data.message,
          "",
          archived ? "Archive: saved to Supabase contact_messages." : "Archive: Supabase save skipped or failed."
        ].join("\n"),
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;">
            <h2 style="margin:0 0 12px;">New SouthAxis Infrastructure enquiry</h2>
            <p style="margin:0 0 16px;"><strong>Submitted:</strong> ${safe.submittedLabel}</p>
            <table style="border-collapse:collapse;width:100%;max-width:640px;">
              <tr><td style="padding:6px 0;width:140px;"><strong>Name</strong></td><td>${safe.fullName}</td></tr>
              <tr><td style="padding:6px 0;"><strong>Email</strong></td><td>${safe.email}</td></tr>
              <tr><td style="padding:6px 0;"><strong>Phone</strong></td><td>${safe.phone}</td></tr>
              <tr><td style="padding:6px 0;"><strong>Company</strong></td><td>${safe.companyName}</td></tr>
              <tr><td style="padding:6px 0;"><strong>Project type</strong></td><td>${safe.projectType}</td></tr>
            </table>
            <p style="margin:18px 0 6px;"><strong>Message</strong></p>
            <p style="margin:0;white-space:pre-wrap;">${safe.message}</p>
          </div>
        `
      });

      if (emailError) {
        console.error("Resend contact email failed", emailError);
        return NextResponse.json(
          {
            ok: false,
            message: "We couldn't send your enquiry. Please try again or call 07385 616316."
          },
          { status: 502 }
        );
      }
    } catch (error) {
      console.error("Resend contact delivery unavailable", error);
      return NextResponse.json(
        {
          ok: false,
          message: "We couldn't send your enquiry. Please try again or call 07385 616316."
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Thanks — your enquiry has been sent. The SouthAxis team will be in touch."
    });
  } catch (error) {
    console.error("Contact route failed", error);
    return NextResponse.json(
      {
        ok: false,
        message: "We couldn't send your enquiry. Please try again or call 07385 616316."
      },
      { status: 500 }
    );
  }
}
