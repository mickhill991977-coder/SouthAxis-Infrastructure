import Link from "next/link";
import { Hammer } from "lucide-react";
import { navItems } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-axis-black/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center border border-axis-gold bg-axis-gold/10 text-axis-gold">
            <Hammer size={22} />
          </span>
          <span>
            <span className="block text-lg font-black uppercase leading-none text-white">SouthAxis</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-axis-goldSoft">Infrastructure</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold uppercase tracking-wide text-axis-silver transition hover:text-axis-goldSoft">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden border border-axis-gold px-4 py-2 text-sm font-bold uppercase tracking-wide text-axis-goldSoft transition hover:bg-axis-gold hover:text-axis-black sm:inline-flex"
        >
          Quote
        </Link>
      </div>
    </header>
  );
}
