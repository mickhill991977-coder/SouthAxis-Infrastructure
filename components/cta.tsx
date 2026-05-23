import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-y border-axis-gold/30 bg-axis-black noise">
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 opacity-[0.06] sm:block">
        <Logo className="h-[38rem] w-[38rem]" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-7 px-4 py-14 sm:px-6 sm:py-16 md:flex-row md:items-center md:justify-between lg:px-8 lg:py-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-axis-goldSoft sm:text-sm sm:tracking-[0.22em]">Ready to mobilise</p>
          <h2 className="font-display mt-3 max-w-3xl text-3xl font-black uppercase leading-none text-white sm:text-4xl md:text-6xl">
            Talk to SouthAxis about your next ground package.
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 border border-axis-gold bg-axis-gold px-5 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-axis-black shadow-gold hover:-translate-y-1 hover:bg-axis-goldSoft sm:w-auto sm:px-7 sm:tracking-[0.18em]"
        >
          Contact us <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
