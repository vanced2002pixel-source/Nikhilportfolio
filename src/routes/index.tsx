import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { GrainOverlay } from "@/components/GrainOverlay";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Work } from "@/components/sections/Work";
import { Showreel } from "@/components/sections/Showreel";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikhil Pandey — Video Editor & Motion Graphics Artist" },
      {
        name: "description",
        content:
          "Cinematic video editor & motion graphics artist. Broadcast-ready edits for news channels, agencies and production houses. Currently at Times Internet.",
      },
      { property: "og:title", content: "Nikhil Pandey — Video Editor & Motion Graphics Artist" },
      {
        property: "og:description",
        content:
          "Cinematic editorial portfolio — newsroom edits, music videos and motion graphics.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-ink text-creme">
      <SmoothScroll />
      <GrainOverlay />
      <CustomCursor />
      <Navbar />
      <Hero />
      <TrustStrip />
      <Work />
      <Showreel />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <Toaster theme="dark" position="bottom-center" />
    </main>
  );
}
