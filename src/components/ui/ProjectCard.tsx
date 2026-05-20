import { motion } from "framer-motion";
import { Play } from "lucide-react";

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  span?: "tall" | "wide" | "default";
};

export function ProjectCard({ p, index }: { p: Project; index: number }) {
  const span = "aspect-[4/5]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-creme/10 bg-card ${span}`}
      data-magnetic
    >
      <img
        src={p.image}
        alt={p.title}
        loading="lazy"
        decoding="async"
        className="ease-cinema absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10 opacity-90 transition-opacity duration-500 group-hover:opacity-95" />
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow:
            "inset 0 0 0 1px color-mix(in oklab, var(--scarlet) 70%, transparent), inset 0 0 60px color-mix(in oklab, var(--scarlet) 25%, transparent)",
        }}
      />

      {/* play icon */}
      <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-scarlet/0 backdrop-blur transition-all duration-500 group-hover:bg-scarlet">
        <Play
          className="h-4 w-4 text-creme opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          fill="currentColor"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <div className="mb-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-scarlet">
          <span className="h-px w-6 bg-scarlet" /> {p.category}
        </div>
        <h3 className="font-display text-2xl text-creme sm:text-3xl">{p.title}</h3>
        <p className="mt-2 max-w-md text-sm text-creme/70">{p.description}</p>

        {/* scrub bar */}
        <div className="mt-4 h-px w-full bg-creme/10">
          <div className="ease-cinema h-px w-0 bg-scarlet transition-all duration-700 group-hover:w-full" />
        </div>
      </div>
    </motion.article>
  );
}
