import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact SouthAxis Infrastructure about commercial or residential groundwork projects."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Bring SouthAxis into the conversation early"
        body="Share your site requirements, package scope or residential groundwork enquiry and the team will respond with the next practical step."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.42fr_0.58fr] lg:px-8">
        <aside className="metal-panel h-fit p-7">
          <p className="font-mono text-sm uppercase tracking-wide text-axis-goldSoft">Project enquiries</p>
          <h2 className="mt-4 text-3xl font-bold text-white">Commercial, contractor and homeowner enquiries welcome.</h2>
          <div className="mt-8 grid gap-5 text-axis-silver">
            <p className="leading-7">
              Include location, timescale, drawings or scope details where possible. For active sites,
              mention access constraints, drainage requirements and any programme milestones.
            </p>
            <div className="border-l border-axis-gold pl-4">
              <p className="text-sm uppercase tracking-wide text-axis-muted">Coverage</p>
              <p className="mt-1 font-semibold text-white">Groundworks, drainage, foundations and external works</p>
            </div>
          </div>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
