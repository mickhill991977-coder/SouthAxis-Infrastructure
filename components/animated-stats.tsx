import { stats } from "@/lib/content";

export function AnimatedStats() {
  return (
    <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={stat.label} className="bg-axis-black/90 p-5 sm:p-6 md:p-8">
          <div className="font-display text-3xl font-black uppercase leading-none text-white sm:text-4xl md:text-5xl">
            <span className="gold-text">{stat.value}</span>
          </div>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-axis-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
