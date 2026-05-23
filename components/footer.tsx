import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { footerServices, navItems } from "@/lib/content";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-axis-gold/25 bg-axis-black noise">
      <div className="absolute inset-0 industrial-grid opacity-[0.15]" />
      <div className="absolute right-8 top-8 hidden opacity-[0.035] sm:block">
        <Logo className="h-[40rem] w-[40rem]" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-9 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.8fr] lg:gap-10 lg:px-8">
        <div className="pr-8">
          <Logo className="h-32 w-32 object-cover object-center sm:h-40 sm:w-40" />
          <p className="mt-6 max-w-md text-sm leading-7 text-axis-muted">
            Premium groundworks, foundations, drainage, external works and site preparation for major construction projects and exacting private clients.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {[Linkedin, Instagram, Facebook].map((Icon, index) => (
              <a key={index} href="#" aria-label="Social profile" className="flex h-12 w-12 items-center justify-center border border-axis-gold/40 text-axis-gold hover:bg-axis-gold hover:text-axis-black">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl font-black uppercase text-white">Quick links</h2>
          <nav className="mt-6 grid gap-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="flex min-h-10 items-center text-sm font-semibold text-axis-silver hover:text-axis-goldSoft">
              {item.label}
            </Link>
          ))}
          </nav>
        </div>
        <div>
          <h2 className="font-display text-2xl font-black uppercase text-white">Services</h2>
          <div className="mt-6 grid gap-3">
            {footerServices.map((service) => (
              <span key={service} className="text-sm leading-6 text-axis-silver">{service}</span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl font-black uppercase text-white">Contact</h2>
          <div className="mt-6 grid gap-4 text-sm text-axis-silver">
            <span className="flex gap-3 leading-6"><Phone size={17} className="shrink-0 text-axis-gold" /> 0121 000 0000</span>
            <span className="flex gap-3 leading-6"><Mail size={17} className="shrink-0 text-axis-gold" /> enquiries@southaxis.co.uk</span>
            <span className="flex gap-3 leading-6"><MapPin size={17} className="shrink-0 text-axis-gold" /> United Kingdom</span>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-4 py-5 text-center text-[0.68rem] uppercase leading-5 tracking-[0.12em] text-axis-muted sm:px-6 sm:text-xs sm:tracking-[0.18em]">
        Copyright {new Date().getFullYear()} SouthAxis Infrastructure. All rights reserved.
      </div>
    </footer>
  );
}
