import Link from "next/link";
import { navItems } from "@/lib/content";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-axis-gold/20 bg-axis-black/78 backdrop-blur-xl">
      <div className="relative mx-auto flex h-24 w-full min-w-0 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center">
          <Logo priority className="h-14 w-28 object-cover object-center transition group-hover:opacity-[0.85] sm:h-16 sm:w-32 md:h-20 md:w-40" />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
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
          className="ml-auto hidden border border-axis-gold bg-axis-gold/10 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-axis-goldSoft hover:bg-axis-gold hover:text-axis-black lg:inline-flex"
        >
          Request a quote
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
