"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/content";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="shrink-0 lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-12 w-12 shrink-0 items-center justify-center border border-axis-gold bg-axis-gold/10 text-axis-gold shadow-gold"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open ? (
        <div className="fixed left-4 right-4 top-[5.75rem] z-50 border border-axis-gold/35 bg-axis-black/95 p-4 shadow-gold backdrop-blur-xl sm:left-6 sm:right-6">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border border-white/10 px-4 text-sm font-black uppercase tracking-[0.16em] text-axis-silver hover:border-axis-gold hover:text-axis-goldSoft"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-12 items-center justify-center border border-axis-gold bg-axis-gold px-4 text-sm font-black uppercase tracking-[0.16em] text-axis-black"
            >
              Request a quote
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
