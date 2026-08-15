import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { contactDetails } from "@/lib/content";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b border-axis-gold/25 bg-axis-black noise">
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="relative mx-auto flex min-h-[60vh] max-w-4xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-axis-goldSoft">
          Error 404
        </p>
        <h1 className="font-display mt-5 text-5xl font-black uppercase leading-none text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-axis-silver sm:text-lg sm:leading-8">
          The page you requested is not available. Return to SouthAxis Infrastructure or speak
          directly with the team about your groundworks enquiry.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-axis-gold bg-axis-gold px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-axis-black"
          >
            Back to homepage <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center border border-white/25 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white hover:border-axis-gold hover:text-axis-goldSoft"
          >
            Contact SouthAxis
          </Link>
          <a
            href={contactDetails.phoneHref}
            className="inline-flex min-h-12 items-center justify-center border border-white/25 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white hover:border-axis-gold hover:text-axis-goldSoft"
          >
            Call {contactDetails.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
