import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { imageSet, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Premium groundworks, foundations, drainage, external works and infrastructure packages."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Infrastructure packages with presence and precision"
        body="Every service is planned around access, sequence, inspection, handover and the commercial reality of construction sites."
        image={imageSet.excavator}
      />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group gold-frame grid overflow-hidden bg-axis-black lg:grid-cols-[0.48fr_0.52fr]"
            >
              <div className={`relative min-h-[440px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-axis-black via-axis-black/45 to-transparent" />
                <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center border border-axis-gold bg-axis-black/80 text-axis-gold backdrop-blur">
                  <service.icon size={32} />
                </div>
              </div>
              <div className="relative overflow-hidden p-8 md:p-12">
                <div className="absolute right-0 top-0 h-full w-28 skew-x-[-14deg] border-l border-axis-gold/25 bg-axis-gold/5" />
                <p className="font-mono text-sm uppercase tracking-[0.25em] text-axis-goldSoft">0{index + 1} / Capability</p>
                <h2 className="font-display mt-5 text-5xl font-black uppercase leading-none text-white md:text-7xl">{service.title}</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-axis-silver">{service.description}</p>
                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-axis-silver">
                      <CheckCircle2 size={18} className="text-axis-gold" />
                      {point}
                    </div>
                  ))}
                </div>
                <a href="/contact" className="mt-9 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-axis-goldSoft">
                  Scope this service <ArrowRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
