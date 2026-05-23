import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { imageSet } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact SouthAxis Infrastructure about commercial or residential groundwork projects."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Bring SouthAxis into the programme early"
        body="Share your site requirements, package scope or residential groundwork enquiry. We will respond with the next practical step."
        image={imageSet.roadworks}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.42fr_0.58fr] lg:gap-10 lg:px-8 lg:py-20">
        <aside className="gold-frame h-fit overflow-hidden bg-axis-black">
          <div className="relative h-56 sm:h-72">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageSet.team})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-axis-black to-transparent" />
          </div>
          <div className="p-5 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-axis-goldSoft sm:text-sm sm:tracking-[0.24em]">Project enquiries</p>
            <h2 className="font-display mt-4 text-3xl font-black uppercase leading-none text-white sm:text-4xl">
              Commercial, contractor and homeowner enquiries.
            </h2>
            <p className="mt-5 text-base leading-7 text-axis-muted sm:mt-6">
              Include location, timescale, drawings or scope details where possible. For active sites, mention access constraints,
              drainage requirements and programme milestones.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-axis-silver">
              <span className="flex gap-3"><Phone size={18} className="shrink-0 text-axis-gold" /> 0121 000 0000</span>
              <span className="flex gap-3"><Mail size={18} className="shrink-0 text-axis-gold" /> enquiries@southaxis.co.uk</span>
              <span className="flex gap-3"><MapPin size={18} className="shrink-0 text-axis-gold" /> Projects across the United Kingdom</span>
              <span className="flex gap-3"><Clock size={18} className="shrink-0 text-axis-gold" /> Fast response for live opportunities</span>
            </div>
          </div>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
