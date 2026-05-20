import { Counter } from "../ui/Counter";
import timesLogo from "@/assets/times-internet.jpg";
import kvsLogo from "@/assets/kvs-logo.png";

export function TrustStrip() {
  const items = [
    { value: 5, suffix: "+", label: "Projects Delivered" },
    { value: 2, suffix: "+", label: "Awards" },
    { value: 24, suffix: "h", label: "Turnaround" },
    { value: 100, suffix: "%", label: "Broadcast Ready" },
  ];
  return (
    <section className="relative border-y border-creme/10 py-14">
      {/* ticker */}
      <div className="mb-10 overflow-hidden">
        <div className="ticker-track flex w-max gap-12 whitespace-nowrap text-xs uppercase tracking-[0.3em] text-creme/40">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              "Broadcast Ready",
              "Fast Turnaround",
              "Professional Workflow",
              "Optimized for Social + News",
              "India Film Project 2025",
              "Times Internet",
            ].map((t, i) => (
              <span key={`${k}-${i}`} className="inline-flex items-center gap-12">
                {t} <span className="h-1 w-1 rounded-full bg-scarlet" />
              </span>
            )),
          )}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 sm:px-8 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="border-l border-creme/10 pl-5">
            <div className="font-display text-4xl text-creme sm:text-5xl">
              <Counter to={it.value} suffix={it.suffix} />
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-creme/60">
              {it.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-8 px-5 opacity-70 sm:px-8">
        <div className="text-[10px] uppercase tracking-[0.3em] text-creme/50">Trusted by</div>
        <div className="flex flex-wrap items-center gap-8">
          <img
            src={timesLogo}
            alt="Times Internet"
            className="h-9 w-9 rounded object-cover"
            loading="lazy"
          />
          <span className="font-display text-lg text-creme">Times Internet</span>
          <span className="h-4 w-px bg-creme/20" />
          <img src={kvsLogo} alt="KVS" loading="lazy" decoding="async" className="h-9 w-auto object-contain" />
          <span className="font-display text-lg text-creme">India Film Project</span>
          <span className="h-4 w-px bg-creme/20" />
          <span className="font-display text-lg text-creme">Navrang FF</span>
        </div>
      </div>
    </section>
  );
}
