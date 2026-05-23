import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Project Showcase",
  description: "Selected commercial infrastructure and residential groundworks project examples."
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project showcase"
        title="Infrastructure groundwork with evidence behind the promise"
        body="A snapshot of the project types SouthAxis is structured to support, from large enabling works to exacting residential foundations."
      />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading eyebrow="Selected works" title="Built around programme certainty" />
        <div className="mt-12 grid gap-6">
          {projects.map((project, index) => (
            <article key={project.title} className="metal-panel grid overflow-hidden lg:grid-cols-[0.42fr_0.58fr]">
              <div className="bg-grid bg-[length:28px_28px] p-8">
                <p className="font-mono text-sm uppercase tracking-wide text-axis-goldSoft">
                  0{index + 1} / {project.sector}
                </p>
                <h2 className="mt-5 text-3xl font-black uppercase text-white">{project.title}</h2>
              </div>
              <div className="p-8">
                <p className="text-lg leading-8 text-axis-silver">{project.summary}</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="border border-white/10 p-4">
                      <div className="font-mono text-xl font-bold text-axis-gold">{metric.value}</div>
                      <p className="mt-2 text-sm uppercase tracking-wide text-axis-muted">{metric.label}</p>
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
