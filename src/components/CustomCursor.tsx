import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;
    setEnabled(true);

    let x = window.innerWidth / 2,
      y = window.innerHeight / 2;
    let rx = x,
      ry = y;
    let hover = false;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      hover = !!t.closest("a, button, [data-magnetic], input, textarea, label");
    };

    let raf = 0;
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      if (ringRef.current) {
        const s = hover ? 2.2 : 1;
        ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0) scale(${s})`;
        ringRef.current.style.opacity = hover ? "1" : "0.55";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={ringRef}
        className="desktop-cursor pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border border-scarlet/70 mix-blend-difference ease-cinema transition-[transform,opacity] duration-200"
        aria-hidden
      />
      <div
        ref={dotRef}
        className="desktop-cursor pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-scarlet"
        aria-hidden
      />
    </>
  );
}
