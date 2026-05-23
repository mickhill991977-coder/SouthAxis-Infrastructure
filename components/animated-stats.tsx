"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

export function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCell key={stat.label} active={visible} index={index} {...stat} />
      ))}
    </div>
  );
}

function StatCell({
  value,
  suffix,
  label,
  active,
  index
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  index: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      return;
    }

    const duration = 1200 + index * 120;
    const startedAt = performance.now();
    let frame = 0;

    function tick(now: number) {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, index, value]);

  return (
    <div className="bg-axis-black/90 p-5 sm:p-6 md:p-8">
      <div className="font-display text-3xl font-black text-white sm:text-4xl md:text-5xl">
        <span className="gold-text">{count}</span>
        <span className="ml-1 text-axis-goldSoft">{suffix}</span>
      </div>
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-axis-muted">{label}</p>
    </div>
  );
}
