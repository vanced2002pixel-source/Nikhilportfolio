import { ProjectCard, type Project } from "../ui/ProjectCard";
import rang from "@/assets/rang-lahore-de.jpg";
import blood from "@/assets/blood-on-brush.jpg";
import freedom from "@/assets/freedom-speech.jpg";
import patrakarita from "@/assets/patrakarita.jpg";
import times from "@/assets/times-internship.jpg";

const projects: Project[] = [
  {
    title: "Rang Lahore De",
    category: "Music Video",
    description: "Cinematic music video for the School of Journalism & Mass Communication.",
    image: rang,
  },
  {
    title: "Blood on Brush",
    category: "Short Film",
    description: "Dark editorial short — color grade and rhythm-driven cuts.",
    image: blood,
  },
  {
    title: "Times Internet",
    category: "Internship · Newsroom",
    description: "Daily broadcast edits, social cutdowns and motion lower-thirds.",
    image: times,
  },
  {
    title: "Freedom of Speech",
    category: "Documentary",
    description: "A reflective piece on press freedom and modern journalism.",
    image: freedom,
  },
  {
    title: "Patrakarita: Ek Zimmedari",
    category: "Editorial",
    description: "Long-form journalism piece on the responsibility of reporting.",
    image: patrakarita,
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-scarlet">
              <span className="h-px w-8 bg-scarlet" /> Selected Work
            </div>
            <h2 className="font-display text-5xl text-creme sm:text-6xl">
              Cuts that move
              <br />
              the newsroom.
            </h2>
          </div>
          <p className="max-w-md text-sm text-creme/60">
            A reel of editorial, music and broadcast projects — built for pace, story and the way
            audiences actually watch news today.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
