import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { imageSet, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Project Showcase",
  description: "Premium commercial infrastructure and residential groundworks project examples."
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project showcase"
        title="Dark gallery. Heavy groundwork. Clean outcomes."
        body="A high-level view of the project environments SouthAxis is built to support, from commercial enabling works to residential foundations and drainage renewals."
        image={imageSet.concrete}
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group metal-panel overflow-hidden hover:-translate-y-1 hover:border-axis-gold/60">
              <div className="relative h-[320px] overflow-hidden sm:h-[380px] lg:h-[420px]">
                <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${project.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-axis-black via-axis-black/45 to-transparent" />
                <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center border border-axis-gold bg-axis-black/75 text-axis-gold sm:right-5 sm:top-5">
                  <ArrowUpRight size={22} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-axis-goldSoft sm:tracking-[0.24em]">{project.type}</p>
                  <h2 className="font-display mt-3 text-3xl font-black uppercase leading-none text-white sm:text-4xl md:text-5xl">{project.title}</h2>
                </div>
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-axis-silver">
                  <MapPin size={17} className="shrink-0 text-axis-gold" />
                  {project.location}
                </div>
                <p className="mt-5 text-base leading-7 text-axis-muted sm:text-lg sm:leading-8">{project.description}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="border border-axis-gold/20 bg-axis-black/60 p-4">
                      <div className="font-display text-2xl font-black text-axis-goldSoft">{metric.value}</div>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-axis-muted">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
