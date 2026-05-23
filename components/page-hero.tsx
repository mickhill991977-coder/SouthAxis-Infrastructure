type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
};

export function PageHero({ eyebrow, title, body, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[26rem] overflow-hidden border-b border-axis-gold/25 bg-axis-black cinematic-overlay noise sm:min-h-[32rem] md:min-h-[58vh]">
      {image ? (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      ) : null}
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="relative z-10 mx-auto flex min-h-[26rem] max-w-7xl items-end px-4 py-14 sm:min-h-[32rem] sm:px-6 sm:py-16 md:min-h-[58vh] md:py-20 lg:px-8">
        <div className="max-w-full">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-axis-goldSoft sm:text-sm sm:tracking-[0.28em]">{eyebrow}</p>
          <h1 className="font-display mt-5 max-w-5xl text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-7xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-axis-silver sm:mt-6 sm:text-lg sm:leading-8">{body}</p>
        </div>
      </div>
    </section>
  );
}
