"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

const projectTypes = [
  "Commercial groundworks",
  "Foundations",
  "Drainage",
  "External works",
  "Site preparation",
  "Residential groundwork",
  "Other"
];

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "loading", message: "" });

    const formData = new FormData(event.currentTarget);
    const body = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      const result = (await response.json()) as { ok: boolean; message: string };

      if (!response.ok || !result.ok) {
        setState({ status: "error", message: result.message || "Please check the form and try again." });
        return;
      }

      event.currentTarget.reset();
      setState({ status: "success", message: result.message });
    } catch {
      setState({ status: "error", message: "The form could not be submitted. Please try again." });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="metal-panel p-5 sm:p-6 md:p-9">
      <input className="hidden" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="mb-8 border-l border-axis-gold pl-5">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-axis-goldSoft sm:text-sm sm:tracking-[0.24em]">Start the conversation</p>
        <h2 className="font-display mt-3 text-3xl font-black uppercase leading-none text-white sm:text-4xl">Request a quote</h2>
      </div>
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        <Field label="Full name" name="fullName" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Company name" name="companyName" />
        <label className="md:col-span-2">
          <span className="text-xs font-black uppercase tracking-[0.14em] text-axis-silver sm:tracking-[0.2em]">Project type</span>
          <select
            name="projectType"
            required
            className="mt-2 min-h-12 w-full border-axis-gold/30 bg-axis-black px-4 py-4 text-base text-white shadow-none focus:border-axis-gold focus:ring-axis-gold"
            defaultValue=""
          >
            <option value="" disabled>
              Select project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="md:col-span-2">
          <span className="text-xs font-black uppercase tracking-[0.14em] text-axis-silver sm:tracking-[0.2em]">Message</span>
          <textarea
            name="message"
            required
            rows={7}
            className="mt-2 min-h-40 w-full border-axis-gold/30 bg-axis-black px-4 py-4 text-base text-white shadow-none focus:border-axis-gold focus:ring-axis-gold"
            placeholder="Tell us about the site, package scope, location and programme."
          />
        </label>
      </div>
      {state.message ? (
        <div
          className={`mt-5 border px-4 py-3 text-sm ${
            state.status === "success"
              ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
              : "border-red-400/40 bg-red-400/10 text-red-200"
          }`}
          role="status"
        >
          {state.message}
        </div>
      ) : null}
      <button
        type="submit"
        disabled={state.status === "loading"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 border border-axis-gold bg-axis-gold px-5 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-axis-black shadow-gold hover:-translate-y-1 hover:bg-axis-goldSoft disabled:cursor-not-allowed disabled:opacity-70 sm:px-6 sm:tracking-[0.18em]"
      >
        {state.status === "loading" ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
        Send enquiry
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label>
      <span className="text-xs font-black uppercase tracking-[0.14em] text-axis-silver sm:tracking-[0.2em]">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 min-h-12 w-full border-axis-gold/30 bg-axis-black px-4 py-4 text-base text-white shadow-none focus:border-axis-gold focus:ring-axis-gold"
      />
    </label>
  );
}
