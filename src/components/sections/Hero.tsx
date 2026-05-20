import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* gradient orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -right-40 top-1/3 h-[55vw] w-[55vw] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--scarlet) 45%, transparent), transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      {/* timeline ruler */}
      <div className="pointer-events-none absolute inset-x-0 bottom-24 h-12 opacity-40">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="h-full w-full">
          {Array.from({ length: 60 }).map((_, i) => (
            <line
              key={i}
              x1={i * 20}
              y1="0"
              x2={i * 20}
              y2={i % 5 === 0 ? 24 : 12}
              stroke="var(--creme)"
              strokeOpacity={i % 5 === 0 ? 0.5 : 0.2}
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-creme/15 bg-creme/[0.03] px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-creme/80"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-scarlet/70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-scarlet" />
          </span>
          Currently editing · Broadcast ready
        </motion.div>

        <h1 className="font-display text-balance text-[12vw] font-medium leading-[0.95] tracking-tight text-creme sm:text-[9vw] lg:text-[8rem]">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="block overflow-hidden"
          >
            <span className="block">Nikhil Pandey</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-1 block text-scarlet glitch"
            style={{
              textShadow:
                "2px 0 0 color-mix(in oklab, var(--scarlet) 50%, transparent), -2px 0 0 color-mix(in oklab, var(--creme) 30%, transparent)",
            }}
          >
            Video Editor.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-8 max-w-xl text-base text-creme/70 sm:text-lg"
        >
          Video Editing + Motion Graphics. Cinematic edits for news channels, agencies and broadcast
          teams. Currently interning at <span className="text-creme">Times Internet</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#showreel"
            data-magnetic
            className="ease-cinema group inline-flex items-center gap-3 rounded-full bg-scarlet px-6 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-creme transition-all hover:scale-[1.03] hover:scarlet-glow"
          >
            <Play className="h-4 w-4" fill="currentColor" /> Watch Showreel
          </a>
          <a
            href="#contact"
            data-magnetic
            className="ease-cinema group inline-flex items-center gap-3 rounded-full border border-creme/25 px-6 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-creme transition-all hover:border-creme/60"
          >
            Contact for News Channels{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-creme/10 pt-6 text-creme/70 sm:gap-10"
        >
          {[
            ["Premiere Pro", "Primary NLE"],
            ["After Effects", "Motion / VFX"],
            ["Broadcast", "News-ready"],
          ].map(([a, b]) => (
            <div key={a}>
              <div className="font-display text-sm text-creme sm:text-base">{a}</div>
              <div className="text-[10px] uppercase tracking-[0.2em]">{b}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-creme/40">
        Scroll
      </div>
    </section>
  );
}
