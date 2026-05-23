import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, HardHat, Ruler } from "lucide-react";
import { CTA } from "@/components/cta";
import { SectionHeading } from "@/components/section-heading";
import { services, stats, featuredProjects } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-axis-black">
        <div className="absolute inset-0 bg-grid bg-[length:42px_42px] opacity-25" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 skew-x-[-10deg] border-l border-axis-gold/40 bg-steel lg:block" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 border border-axis-gold/50 bg-axis-gold/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-axis-goldSoft">
              Civil groundwork specialists
            </div>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-normal text-white md:text-7xl">
              SouthAxis Infrastructure
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-axis-silver">
              Premium groundworks, foundations, drainage, external works and site preparation
              for construction sites that need disciplined delivery from first cut to final handover.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-axis-gold bg-axis-gold px-6 py-3 font-bold uppercase tracking-wide text-axis-black transition hover:bg-axis-goldSoft"
              >
                Discuss a project <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-3 font-bold uppercase tracking-wide text-white transition hover:border-axis-gold hover:text-axis-goldSoft"
              >
                View showcase
              </Link>
            </div>
          </div>
          <div className="metal-panel shadow-gold">
            <div className="grid grid-cols-2 border-b border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="border-r border-white/10 p-6 last:border-r-0">
                  <div className="font-mono text-3xl font-bold text-axis-goldSoft">{stat.value}</div>
                  <p className="mt-2 text-sm uppercase tracking-wide text-axis-muted">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="p-6">
              <div className="aspect-[4/3] border border-axis-gold/40 bg-[url('/site-grid.svg')] bg-cover bg-center" />
              <div className="mt-6 grid gap-3 text-sm text-axis-silver">
                {["Commercial enabling works", "Complex drainage packages", "Residential foundation delivery"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-axis-gold" size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Core capability"
          title="Built for demanding construction programmes"
          body="SouthAxis supports developers, principal contractors and private clients with ground packages that are planned, sequenced and executed with control."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <article key={service.title} className="metal-panel p-6">
              <service.icon className="text-axis-gold" size={28} />
              <h3 className="mt-5 text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-axis-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-axis-charcoal/80">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-3 lg:px-8">
          {[
            { icon: HardHat, title: "Site-ready teams", body: "Experienced supervisors, operators and labour support for active construction environments." },
            { icon: Ruler, title: "Controlled delivery", body: "Clear scope definition, programme alignment and quality checkpoints across every package." },
            { icon: Building2, title: "Commercial mindset", body: "A contractor-first approach shaped around risk, access, sequencing and handover." }
          ].map((item) => (
            <div key={item.title} className="border-l-2 border-axis-gold pl-6">
              <item.icon className="text-axis-goldSoft" size={28} />
              <h3 className="mt-5 text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-axis-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading eyebrow="Project showcase" title="Ground packages with a sharp operational edge" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.title} className="metal-panel overflow-hidden">
              <div className="h-2 bg-axis-gold" />
              <div className="p-6">
                <p className="font-mono text-sm uppercase tracking-wide text-axis-goldSoft">{project.sector}</p>
                <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-axis-muted">{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
