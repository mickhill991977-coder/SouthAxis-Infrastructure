import Link from "next/link";
import { navItems } from "@/lib/content";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-axis-gold/20 bg-axis-black/78 backdrop-blur-xl">
      <div className="mx-auto flex min-h-24 max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href="/" className="group flex items-center">
          <Logo priority className="h-16 w-32 object-cover object-center transition group-hover:opacity-[0.85] md:h-20 md:w-40" />
        </Link>
        <nav className="order-3 flex w-full items-center justify-between gap-4 overflow-x-auto border-t border-white/10 pt-4 lg:order-none lg:w-auto lg:justify-start lg:border-t-0 lg:pt-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-xs font-black uppercase tracking-[0.22em] text-axis-silver"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-axis-gold transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden border border-axis-gold bg-axis-gold/10 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-axis-goldSoft hover:bg-axis-gold hover:text-axis-black md:inline-flex"
        >
          Request a quote
        </Link>
      </div>
    </header>
  );
}
