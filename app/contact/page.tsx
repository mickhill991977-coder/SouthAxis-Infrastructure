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
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.42fr_0.58fr] lg:px-8">
        <aside className="gold-frame h-fit overflow-hidden bg-axis-black">
          <div className="relative h-72">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageSet.team})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-axis-black to-transparent" />
          </div>
          <div className="p-7">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-axis-goldSoft">Project enquiries</p>
            <h2 className="font-display mt-4 text-4xl font-black uppercase leading-none text-white">
              Commercial, contractor and homeowner enquiries.
            </h2>
            <p className="mt-6 leading-7 text-axis-muted">
              Include location, timescale, drawings or scope details where possible. For active sites, mention access constraints,
              drainage requirements and programme milestones.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-axis-silver">
              <span className="flex gap-3"><Phone size={18} className="text-axis-gold" /> 0121 000 0000</span>
              <span className="flex gap-3"><Mail size={18} className="text-axis-gold" /> enquiries@southaxis.co.uk</span>
              <span className="flex gap-3"><MapPin size={18} className="text-axis-gold" /> Projects across the United Kingdom</span>
              <span className="flex gap-3"><Clock size={18} className="text-axis-gold" /> Fast response for live opportunities</span>
            </div>
          </div>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
