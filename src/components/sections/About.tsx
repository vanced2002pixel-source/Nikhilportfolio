import { motion } from "framer-motion";
import { Check } from "lucide-react";

const achievements = [
  { title: "Best Video Editor", meta: "Navrang Film Festival" },
  { title: "Organising Team", meta: "Drishyam 4.0" },
  { title: "India Film Project 2025", meta: "Participant" },
  { title: "Editor — Times Internet", meta: "Currently interning" },
  { title: "Motion Graphics & Broadcast Edits", meta: "Self-taught · Production ready" },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 md:grid-cols-2">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-scarlet">
            <span className="h-px w-8 bg-scarlet" /> About
          </div>
          <h2 className="font-display text-5xl text-creme sm:text-6xl">
            A storyteller who
            <br />
            cuts like a filmmaker.
          </h2>
          <div className="mt-8 space-y-5 text-creme/70">
            <p>
              I'm Nikhil Pandey — a video editor and motion graphics artist with broadcast
              experience at Times Internet.
            </p>
            <p>
              My work sits between two languages: the urgency of the newsroom and the patience of
              cinema. I edit news packages, music videos, documentaries and short films — and I'm
              comfortable shipping under a deadline that has a clock on it.
            </p>
            <p>
              If you're a news channel, agency or production house looking for a fast, story-first
              editor — I'd love to talk.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.25em] text-creme/70">
            {["Broadcast Ready", "Fast Turnaround", "Story First", "Social + News"].map((t) => (
              <span key={t} className="rounded-full border border-creme/15 px-3 py-1.5">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-3 top-2 h-full w-px bg-creme/10" />
          <ul className="space-y-7">
            {achievements.map((a, i) => (
              <motion.li
                key={a.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12"
              >
                <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-scarlet/40 bg-ink">
                  <Check className="h-3.5 w-3.5 text-scarlet" />
                </span>
                <div className="font-display text-xl text-creme">{a.title}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-creme/50">{a.meta}</div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
