import { Building2, Clock, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { contactDetails, imageSet } from "@/lib/content";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { BUSINESS, LEGAL_NAME } from "@/lib/site";

const title = "Contact Groundworks Contractors in Portsmouth";
const description =
  "Contact SouthAxis Infrastructure Ltd in Portsmouth, Hampshire about commercial or residential groundworks, foundations, drainage and infrastructure packages. Call 07385 616316.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path: "/contact", name: title, description }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: title,
            description,
            mainEntity: {
              "@type": "Organization",
              name: LEGAL_NAME,
              telephone: BUSINESS.phoneTel,
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS.streetAddress,
                addressLocality: BUSINESS.addressLocality,
                addressRegion: BUSINESS.addressRegion,
                postalCode: BUSINESS.postalCode,
                addressCountry: BUSINESS.addressCountry,
              },
            },
          },
        ]}
      />
      <PageHero
        eyebrow="Contact us"
        title="Bring SouthAxis into the programme early"
        body="Share your Portsmouth, Hampshire or South Coast site requirements, package scope or residential groundwork enquiry. We will respond with the next practical step."
        image={imageSet.formation}
        imageAlt="Construction formation ready for a SouthAxis groundworks enquiry"
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.42fr_0.58fr] lg:gap-10 lg:px-8 lg:py-20">
        <aside className="gold-frame h-fit overflow-hidden bg-axis-black">
          <div className="relative h-56 sm:h-72">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${imageSet.commercial})` }}
              role="img"
              aria-label="Commercial groundworks site representing SouthAxis project enquiries"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-axis-black to-transparent" />
          </div>
          <div className="p-5 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-axis-goldSoft sm:text-sm sm:tracking-[0.24em]">
              Project enquiries
            </p>
            <h2 className="font-display mt-4 text-3xl font-black uppercase leading-none text-white sm:text-4xl">
              Commercial, contractor and homeowner enquiries.
            </h2>
            <p className="mt-5 text-base leading-7 text-axis-muted sm:mt-6">
              Include location, timescale, drawings or scope details where possible. For active
              sites, mention access constraints, drainage requirements and programme milestones.
            </p>
            <address className="mt-8 grid gap-4 text-sm not-italic text-axis-silver">
              <p className="font-semibold text-white">{LEGAL_NAME}</p>
              <a
                href={contactDetails.phoneHref}
                className="flex gap-3 text-axis-silver hover:text-axis-goldSoft"
              >
                <Phone size={18} className="shrink-0 text-axis-gold" aria-hidden="true" />
                <span>{contactDetails.phone}</span>
              </a>
              <p className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-axis-gold" aria-hidden="true" />
                <span>
                  {BUSINESS.streetAddress}
                  <br />
                  {BUSINESS.addressLocality}
                  <br />
                  {BUSINESS.addressRegion}
                  <br />
                  {BUSINESS.addressCountryName}
                  <br />
                  {BUSINESS.postalCode}
                </span>
              </p>
              <p className="flex gap-3">
                <Building2 size={18} className="shrink-0 text-axis-gold" aria-hidden="true" />
                <span>Company No: {contactDetails.companyNo}</span>
              </p>
              <p className="flex gap-3">
                <Clock size={18} className="shrink-0 text-axis-gold" aria-hidden="true" />
                <span>Fast response for live opportunities</span>
              </p>
            </address>
          </div>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
