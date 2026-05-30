import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Quote, ShieldCheck } from "lucide-react";
import { AnimatedStats } from "@/components/animated-stats";
import { CTA } from "@/components/cta";
import { Logo } from "@/components/logo";
import { SectionHeading } from "@/components/section-heading";
import { capabilityIcons, contactDetails, imageSet, projects, services, testimonials } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-6rem)] overflow-hidden border-b border-axis-gold/25 bg-axis-black cinematic-overlay noise md:min-h-[calc(100vh-6rem)]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageSet.hero})` }} />
        <div className="absolute inset-0 industrial-grid opacity-[0.18]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-axis-black to-transparent" />
        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:min-h-[calc(100vh-6rem)] lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
          <div className="reveal-up w-[19.3rem] max-w-full min-[390px]:w-[20.2rem] min-[430px]:w-[22.5rem] sm:w-auto sm:max-w-none">
            <div className="mb-5 inline-flex max-w-full border border-axis-gold/50 bg-axis-black/55 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.14em] text-axis-goldSoft backdrop-blur sm:mb-7 sm:px-4 sm:text-xs sm:tracking-[0.22em]">
              Groundworks for serious construction
            </div>
            <h1 className="font-display max-w-full whitespace-normal break-normal text-[2.65rem] font-black uppercase leading-none tracking-tight text-white min-[390px]:text-5xl sm:max-w-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <span className="steel-text whitespace-nowrap break-normal">Groundworks.</span>
              <br />
              <span className="whitespace-nowrap break-normal">Infrastructure.</span>
              <br />
              <span className="gold-text whitespace-nowrap break-normal">Future.</span>
            </h1>
            <p className="mt-6 max-w-full text-base leading-7 text-axis-silver sm:mt-8 sm:max-w-2xl sm:text-lg sm:leading-8 md:text-xl">
              Professional groundwork and infrastructure solutions for commercial developments,
              construction sites and residential projects.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                href={contactDetails.phoneHref}
                className="inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 border border-axis-gold bg-axis-gold px-5 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-axis-black shadow-gold hover:-translate-y-1 hover:bg-axis-goldSoft sm:w-auto sm:px-7 sm:tracking-[0.18em]"
              >
                Call {contactDetails.phone} <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 border border-white/25 bg-axis-black/45 px-5 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-white backdrop-blur hover:-translate-y-1 hover:border-axis-gold hover:text-axis-goldSoft sm:w-auto sm:px-7 sm:tracking-[0.18em]"
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

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <AnimatedStats />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading
          eyebrow="Core capability"
          title="A sharper standard for groundwork delivery"
          body="Commercial contractors and private clients need the same thing from the ground up: disciplined teams, clear sequencing and durable work that keeps the programme moving."
        />
        <div className="mt-8 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Link
              href="/services"
              key={service.title}
              className="group metal-panel overflow-hidden hover:-translate-y-1 hover:border-axis-gold/60"
            >
              <div className="relative h-52 overflow-hidden sm:h-56">
                <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-axis-black via-axis-black/45 to-transparent" />
                <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center border border-axis-gold bg-axis-black/75 text-axis-gold">
                  <service.icon size={24} />
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-2xl font-black uppercase text-white sm:text-3xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-axis-muted sm:text-base">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-axis-charcoal/80 noise">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
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

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Project showcase" title="Cinematic site work. Measurable outcomes." />
          <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-axis-goldSoft sm:tracking-[0.18em]">
            Full gallery <ArrowRight size={17} />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <Link key={project.title} href="/projects" className="group relative min-h-[330px] overflow-hidden border border-white/10 bg-axis-black sm:min-h-[380px] lg:min-h-[420px]">
              <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${project.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-axis-black via-axis-black/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-axis-goldSoft">{project.type}</p>
                <h3 className="font-display mt-3 text-2xl font-black uppercase leading-none text-white sm:text-3xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-axis-silver">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-axis-gold/25 bg-axis-black py-12 noise sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Client confidence" title="Built for the pressure of live sites" />
          <div className="mt-8 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="metal-panel p-5 sm:p-7">
                <Quote className="text-axis-gold" size={30} />
                <p className="mt-5 text-base leading-8 text-axis-silver sm:mt-6 sm:text-lg">{testimonial.quote}</p>
                <div className="mt-8 border-l border-axis-gold pl-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-wide text-axis-muted">{testimonial.company}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="gold-frame grid overflow-hidden bg-axis-black lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageSet.team})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-axis-black via-transparent to-transparent" />
          </div>
          <div className="p-5 sm:p-8 md:p-12">
            <ShieldCheck className="text-axis-gold" size={42} />
            <h2 className="font-display mt-6 text-3xl font-black uppercase leading-none text-white sm:text-5xl">Site discipline with premium finish.</h2>
            <p className="mt-5 text-base leading-7 text-axis-muted sm:mt-6 sm:text-lg sm:leading-8">
              SouthAxis is designed for clients who expect more than plant and labour. We bring structure, communication and a high-standard visual finish to the work that usually disappears below the surface.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Commercial", "Residential", "Drainage", "Foundations", "External works"].map((tag) => (
                <span key={tag} className="border border-axis-gold/35 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-axis-goldSoft sm:px-4 sm:tracking-[0.18em]">{tag}</span>
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
    <article className="relative min-h-[360px] overflow-hidden bg-axis-black sm:min-h-[440px] lg:min-h-[520px]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-axis-black via-axis-black/55 to-axis-black/10" />
      <div className="relative z-10 flex min-h-[360px] flex-col justify-end p-5 sm:min-h-[440px] sm:p-8 md:p-10 lg:min-h-[520px]">
        <Building2 className="text-axis-gold" size={34} />
        <h2 className="font-display mt-5 text-3xl font-black uppercase leading-none text-white sm:text-5xl">{title}</h2>
        <div className="mt-6 grid gap-3 sm:mt-8">
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
