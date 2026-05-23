type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-sm uppercase tracking-[0.22em] text-axis-goldSoft">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white md:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-lg leading-8 text-axis-muted">{body}</p> : null}
    </div>
  );
}
