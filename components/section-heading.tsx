type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-axis-goldSoft sm:text-sm sm:tracking-[0.22em]">{eyebrow}</p>
      <h2 className="font-display mt-4 text-3xl font-black uppercase leading-none text-white sm:text-4xl md:text-6xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-7 text-axis-muted sm:text-lg sm:leading-8">{body}</p> : null}
    </div>
  );
}
