import Link from "next/link";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-axis-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-xl font-black uppercase text-white">SouthAxis Infrastructure</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-axis-muted">
            Groundworks, foundations, drainage, external works and site preparation for developers, contractors and homeowners.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 md:justify-end">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-axis-silver hover:text-axis-goldSoft">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs uppercase tracking-wide text-axis-muted">
        Copyright {new Date().getFullYear()} SouthAxis Infrastructure. All rights reserved.
      </div>
    </footer>
  );
}
