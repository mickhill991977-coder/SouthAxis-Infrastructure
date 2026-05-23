import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Groundworks, foundations, drainage, external works and infrastructure packages."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Groundwork packages planned for pace, access and precision"
        body="From site preparation through to drainage, foundations and external works, SouthAxis delivers robust packages for commercial and residential construction."
      />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading eyebrow="What we deliver" title="Integrated groundwork capability" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="metal-panel p-7">
              <div className="flex items-start gap-5">
                <div className="border border-axis-gold/60 bg-axis-gold/10 p-3 text-axis-gold">
                  <service.icon size={26} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                  <p className="mt-3 leading-7 text-axis-muted">{service.description}</p>
                  <ul className="mt-5 grid gap-2 text-sm text-axis-silver">
                    {service.points.map((point) => (
                      <li key={point} className="border-l border-axis-gold/60 pl-3">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
