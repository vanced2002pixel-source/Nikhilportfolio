import { ProgressRing } from "../ui/ProgressRing";

const skills = [
  { label: "Premiere Pro", value: 95 },
  { label: "After Effects", value: 85 },
  { label: "Motion Graphics", value: 90 },
  { label: "Photoshop", value: 80 },
  { label: "Blender", value: 60 },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-scarlet">
              <span className="h-px w-8 bg-scarlet" /> Toolkit
            </div>
            <h2 className="font-display text-5xl text-creme sm:text-6xl">The edit suite.</h2>
          </div>
          <p className="max-w-md text-sm text-creme/60">
            From cold-open promos to long-form documentary — built on industry-standard software
            with a motion-design backbone.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((s) => (
            <ProgressRing key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
