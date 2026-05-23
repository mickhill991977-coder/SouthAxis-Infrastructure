type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-axis-black">
      <div className="absolute inset-0 bg-grid bg-[length:38px_38px] opacity-25" />
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-axis-gold to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="font-mono text-sm uppercase tracking-[0.24em] text-axis-goldSoft">{eyebrow}</p>
        <h1 className="mt-5 max-w-5xl text-4xl font-black uppercase leading-tight text-white md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-axis-silver">{body}</p>
      </div>
    </section>
  );
}
