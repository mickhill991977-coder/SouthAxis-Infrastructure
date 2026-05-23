type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-sm uppercase tracking-[0.22em] text-axis-goldSoft">{eyebrow}</p>
      <h2 className="font-display mt-4 text-4xl font-black uppercase leading-none text-white md:text-6xl">{title}</h2>
      {body ? <p className="mt-5 text-lg leading-8 text-axis-muted">{body}</p> : null}
    </div>
  );
}
