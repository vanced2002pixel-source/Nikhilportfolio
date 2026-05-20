import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-creme/10 py-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 sm:px-8">
        <div>
          <div className="font-display text-xl text-creme">
            NIKHIL<span className="text-scarlet">.</span>
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-creme/40">
            Made for Broadcast · © {new Date().getFullYear()}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-creme/80">
          <a
            href="mailto:pandeynikhil606@gmail.com"
            data-magnetic
            className="ease-cinema inline-flex items-center gap-2 hover:text-scarlet"
          >
            <Mail className="h-4 w-4 text-scarlet" /> pandeynikhil606@gmail.com
          </a>
          <span className="hidden h-4 w-px bg-creme/15 sm:block" />
          <a
            href="tel:+918595838403"
            data-magnetic
            className="ease-cinema inline-flex items-center gap-2 hover:text-scarlet"
          >
            <Phone className="h-4 w-4 text-scarlet" /> +91 85958 38403
          </a>
        </div>
      </div>
    </footer>
  );
}
