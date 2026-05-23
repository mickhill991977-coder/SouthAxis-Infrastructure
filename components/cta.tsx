import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-y border-axis-gold/30 bg-axis-black noise">
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-[0.06]">
        <Logo className="h-[38rem] w-[38rem]" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-7 px-6 py-20 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-axis-goldSoft">Ready to mobilise</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-black uppercase leading-none text-white md:text-6xl">
            Talk to SouthAxis about your next ground package.
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 border border-axis-gold bg-axis-gold px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-axis-black shadow-gold hover:-translate-y-1 hover:bg-axis-goldSoft"
        >
          Contact us <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
