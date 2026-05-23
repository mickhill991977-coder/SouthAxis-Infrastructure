import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Quote, ShieldCheck } from "lucide-react";
import { AnimatedStats } from "@/components/animated-stats";
import { CTA } from "@/components/cta";
import { Logo } from "@/components/logo";
import { SectionHeading } from "@/components/section-heading";
import { capabilityIcons, imageSet, projects, services, testimonials } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-6rem)] overflow-hidden border-b border-axis-gold/25 bg-axis-black cinematic-overlay noise">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageSet.hero})` }} />
        <div className="absolute inset-0 industrial-grid opacity-[0.18]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-axis-black to-transparent" />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div className="reveal-up">
            <div className="mb-7 inline-flex border border-axis-gold/50 bg-axis-black/55 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-axis-goldSoft backdrop-blur">
              Groundworks for serious construction
            </div>
            <h1 className="font-display max-w-5xl text-6xl font-black uppercase leading-[0.86] text-white md:text-8xl lg:text-9xl">
              <span className="steel-text">Groundworks.</span>
              <br />
              Infrastructure.
              <br />
              <span className="gold-text">Future.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-axis-silver md:text-xl">
              Professional groundwork and infrastructure solutions for commercial developments,
              construction sites and residential projects.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-axis-gold bg-axis-gold px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-axis-black shadow-gold hover:-translate-y-1 hover:bg-axis-goldSoft"
              >
                Request a Quote <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 border border-white/25 bg-axis-black/45 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur hover:-translate-y-1 hover:border-axis-gold hover:text-axis-goldSoft"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="gold-frame hidden bg-axis-black/72 p-5 backdrop-blur-xl lg:block">
            <div className="relative aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageSet.excavator})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-axis-black via-axis-black/35 to-transparent" />
              <Logo className="absolute left-6 top-6 h-32 w-32 object-cover object-center" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-axis-goldSoft">SouthAxis command panel</p>
                <h2 className="font-display mt-3 text-4xl font-black uppercase leading-none text-white">Built below ground. Trusted above it.</h2>
                <div className="mt-6 grid gap-3">
                  {capabilityIcons.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 border border-white/10 bg-axis-black/70 px-4 py-3 text-sm font-bold uppercase tracking-wide text-axis-silver">
                      <item.icon size={18} className="text-axis-gold" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <AnimatedStats />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Core capability"
          title="A sharper standard for groundwork delivery"
          body="Commercial contractors and private clients need the same thing from the ground up: disciplined teams, clear sequencing and durable work that keeps the programme moving."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Link
              href="/services"
              key={service.title}
              className="group metal-panel overflow-hidden hover:-translate-y-1 hover:border-axis-gold/60"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-axis-black via-axis-black/45 to-transparent" />
                <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center border border-axis-gold bg-axis-black/75 text-axis-gold">
                  <service.icon size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl font-black uppercase text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-axis-muted">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-axis-charcoal/80 noise">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <SplitPanel
            title="Commercial developments"
            image={imageSet.concrete}
            points={["Developer infrastructure packages", "Principal contractor support", "Drainage, foundations and external works"]}
          />
          <SplitPanel
            title="Residential projects"
            image={imageSet.residential}
            points={["Extensions and private plots", "Driveways and drainage", "Clean, controlled domestic working"]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Project showcase" title="Cinematic site work. Measurable outcomes." />
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-axis-goldSoft">
            Full gallery <ArrowRight size={17} />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {projects.map((project) => (
            <Link key={project.title} href="/projects" className="group relative min-h-[420px] overflow-hidden border border-white/10 bg-axis-black">
              <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${project.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-axis-black via-axis-black/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-axis-goldSoft">{project.type}</p>
                <h3 className="font-display mt-3 text-3xl font-black uppercase leading-none text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-axis-silver">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-axis-gold/25 bg-axis-black py-20 noise">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Client confidence" title="Built for the pressure of live sites" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="metal-panel p-7">
                <Quote className="text-axis-gold" size={30} />
                <p className="mt-6 text-lg leading-8 text-axis-silver">{testimonial.quote}</p>
                <div className="mt-8 border-l border-axis-gold pl-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-wide text-axis-muted">{testimonial.company}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="gold-frame grid overflow-hidden bg-axis-black lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative min-h-[420px]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageSet.team})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-axis-black via-transparent to-transparent" />
          </div>
          <div className="p-8 md:p-12">
            <ShieldCheck className="text-axis-gold" size={42} />
            <h2 className="font-display mt-6 text-5xl font-black uppercase leading-none text-white">Site discipline with premium finish.</h2>
            <p className="mt-6 text-lg leading-8 text-axis-muted">
              SouthAxis is designed for clients who expect more than plant and labour. We bring structure, communication and a high-standard visual finish to the work that usually disappears below the surface.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Commercial", "Residential", "Drainage", "Foundations", "External works"].map((tag) => (
                <span key={tag} className="border border-axis-gold/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-axis-goldSoft">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function SplitPanel({ title, image, points }: { title: string; image: string; points: string[] }) {
  return (
    <article className="relative min-h-[520px] overflow-hidden bg-axis-black">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-axis-black via-axis-black/55 to-axis-black/10" />
      <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-8 md:p-10">
        <Building2 className="text-axis-gold" size={34} />
        <h2 className="font-display mt-5 text-5xl font-black uppercase leading-none text-white">{title}</h2>
        <div className="mt-8 grid gap-3">
          {points.map((point) => (
            <div key={point} className="flex items-center gap-3 text-axis-silver">
              <CheckCircle2 size={18} className="text-axis-gold" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
