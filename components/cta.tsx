import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="border-t border-axis-gold/30 bg-axis-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-16 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-axis-goldSoft">Ready to mobilise</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-white">Talk to SouthAxis about your next ground package.</h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 border border-axis-gold bg-axis-gold px-6 py-3 font-bold uppercase tracking-wide text-axis-black transition hover:bg-axis-goldSoft"
        >
          Contact us <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
