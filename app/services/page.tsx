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
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 sm:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group gold-frame grid overflow-hidden bg-axis-black lg:grid-cols-[0.48fr_0.52fr]"
            >
              <div className={`relative min-h-[260px] sm:min-h-[340px] lg:min-h-[440px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-axis-black via-axis-black/45 to-transparent" />
                <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center border border-axis-gold bg-axis-black/80 text-axis-gold backdrop-blur sm:left-6 sm:top-6 sm:h-16 sm:w-16">
                  <service.icon size={28} />
                </div>
              </div>
              <div className="relative overflow-hidden p-5 sm:p-8 md:p-12">
                <div className="absolute right-0 top-0 hidden h-full w-28 skew-x-[-14deg] border-l border-axis-gold/25 bg-axis-gold/5 sm:block" />
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-axis-goldSoft sm:text-sm sm:tracking-[0.25em]">0{index + 1} / Capability</p>
                <h2 className="font-display mt-5 text-4xl font-black uppercase leading-none text-white sm:text-5xl md:text-7xl">{service.title}</h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-axis-silver sm:mt-6 sm:text-lg sm:leading-8">{service.description}</p>
                <div className="mt-7 grid gap-3 sm:mt-9 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <div key={point} className="flex min-h-12 items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-axis-silver">
                      <CheckCircle2 size={18} className="shrink-0 text-axis-gold" />
                      {point}
                    </div>
                  ))}
                </div>
                <a href="/contact" className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-axis-goldSoft sm:mt-9 sm:tracking-[0.2em]">
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
