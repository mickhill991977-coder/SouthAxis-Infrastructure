type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
};

export function PageHero({ eyebrow, title, body, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[58vh] overflow-hidden border-b border-axis-gold/25 bg-axis-black cinematic-overlay noise">
      {image ? (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      ) : null}
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-7xl items-end px-6 py-20 lg:px-8">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.28em] text-axis-goldSoft">{eyebrow}</p>
          <h1 className="font-display mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.95] text-white md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-axis-silver">{body}</p>
        </div>
      </div>
    </section>
  );
}
