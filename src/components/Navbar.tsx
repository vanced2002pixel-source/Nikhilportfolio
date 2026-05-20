import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Showreel", href: "#showreel" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#work");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => document.querySelector(l.href) as HTMLElement | null);
      const y = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(links[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-5"
    >
      <nav
        className={`glass-nav ease-cinema flex w-full max-w-6xl items-center justify-between rounded-full px-4 transition-all duration-500 sm:px-6 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <a href="#top" className="font-display text-base tracking-tight text-creme sm:text-lg">
          NIKHIL<span className="text-scarlet">.</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href} className="relative">
              <a
                href={l.href}
                className="ease-cinema relative px-3 py-2 text-xs uppercase tracking-[0.18em] text-creme/80 transition-colors hover:text-creme"
              >
                {l.label}
                {active === l.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-scarlet"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          data-magnetic
          className="ease-cinema hidden rounded-full bg-scarlet px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-creme transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Hire
        </a>
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden text-creme"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass-panel fixed inset-0 z-[60] flex flex-col p-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg text-creme">
                NIKHIL<span className="text-scarlet">.</span>
              </span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-creme">
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="mt-12 flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl text-creme"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
