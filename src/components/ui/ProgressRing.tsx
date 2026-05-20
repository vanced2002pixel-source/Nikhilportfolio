import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ProgressRing({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const r = 52;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;

  return (
    <div
      ref={ref}
      className="glass-panel ease-cinema group flex flex-col items-center gap-4 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:scarlet-glow"
    >
      <div className="relative h-32 w-32">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle
            cx="60"
            cy="60"
            r={r}
            stroke="currentColor"
            strokeWidth="4"
            className="text-creme/10"
            fill="none"
          />
          <motion.circle
            cx="60"
            cy="60"
            r={r}
            stroke="var(--scarlet)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              filter: "drop-shadow(0 0 12px color-mix(in oklab, var(--scarlet) 60%, transparent))",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display text-2xl text-creme">
          {value}%
        </div>
      </div>
      <div className="text-xs uppercase tracking-[0.22em] text-creme/70">{label}</div>
    </div>
  );
}
