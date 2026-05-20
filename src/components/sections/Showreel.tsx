import { useState } from "react";
import { Play } from "lucide-react";
import rang from "@/assets/rang-lahore-de.jpg";
import blood from "@/assets/blood-on-brush.jpg";
import freedom from "@/assets/freedom-speech.jpg";
import times from "@/assets/times-internship.jpg";
import { motion } from "framer-motion";

const reels = [
  {
    id: "rang",
    title: "Rang Lahore Da",
    subtitle: "Featured Reel",
    link: "https://www.youtube.com/watch?si=hrVoi1dijbSpkD_K&v=5SGY8RRfEbU&feature=youtu.be",
    src: rang,
    alt: "Rang Lahore Da thumbnail",
  },
  {
    id: "blood",
    title: "Blood on Brush",
    subtitle: "Reels Collection",
    link: "https://drive.google.com/drive/folders/1KyqSS1JUOiIkRlSCIm9aRMnMtVQOK_7N",
    src: blood,
    alt: "Blood on Brush thumbnail",
  },
  {
    id: "freedom",
    title: "Freedom Speech",
    subtitle: "Full Showreel",
    link: "https://drive.google.com/file/d/1xjI6OY9rowGoo1WZ6zidAlyFGVp452Oj/view",
    src: freedom,
    alt: "Freedom Speech thumbnail",
  },
  {
    id: "times",
    title: "Times of Internet",
    subtitle: "YouTube Feature",
    link: "https://www.youtube.com/watch?v=3NTQl3L-Ydw",
    src: times,
    alt: "Times of Internet thumbnail",
  },
];

export function Showreel() {
  const [selectedReel, setSelectedReel] = useState(reels[0]);

  return (
    <section id="showreel" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-scarlet">
              <span className="h-px w-8 bg-scarlet" /> Showreel · 2026
            </div>
            <h2 className="font-display text-5xl text-creme sm:text-6xl">Press play.</h2>
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-creme/50">
            02:48 · Edited in Premiere Pro
          </div>
        </div>

        <motion.a
          href={selectedReel.link}
          target="_blank"
          rel="noreferrer noopener"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative block aspect-video overflow-hidden rounded-3xl border border-creme/10"
          data-magnetic
          aria-label={`Watch ${selectedReel.title}`}
        >
          <img
            src={selectedReel.src}
            alt={selectedReel.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/40 via-ink/20 to-ink/60" />
          <span
            aria-hidden
            className="ease-cinema absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-scarlet text-creme transition-all duration-500 group-hover:h-28 group-hover:w-28 group-hover:scarlet-glow sm:h-32 sm:w-32"
          >
            <Play className="ml-1 h-10 w-10" fill="currentColor" />
          </span>
          <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-creme">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-creme/60">
                {selectedReel.subtitle}
              </div>
              <div className="font-display text-2xl sm:text-3xl">{selectedReel.title}</div>
            </div>
            <div className="hidden h-1 w-40 bg-creme/15 sm:block">
              <div className="h-1 w-1/3 bg-scarlet" />
            </div>
          </div>
        </motion.a>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={reel.link}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setSelectedReel(reel)}
              aria-pressed={selectedReel.id === reel.id}
              aria-label={`Open ${reel.title}`}
              className={`ease-cinema group relative aspect-video overflow-hidden rounded-xl border transition-transform duration-300 hover:-translate-y-1 hover:scarlet-glow ${
                selectedReel.id === reel.id ? "border-scarlet shadow-[0_0_28px_rgba(236,97,108,0.2)]" : "border-creme/10"
              }`}
            >
              <img
                src={reel.src}
                loading="lazy"
                decoding="async"
                alt={reel.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 transition-opacity group-hover:opacity-100">
                <Play className="h-6 w-6 text-scarlet" fill="currentColor" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
