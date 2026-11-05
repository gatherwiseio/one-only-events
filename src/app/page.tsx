import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Cta } from "@/components/sections/Cta";
import { Hero } from "@/components/sections/Hero";
import { Packages } from "@/components/sections/Packages";
import { Process } from "@/components/sections/Process";
import { RecentWeddings } from "@/components/sections/RecentWeddings";
import { Reviews } from "@/components/sections/Reviews";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-surface focus:px-4 focus:py-3 focus:font-display focus:text-label focus:uppercase focus:text-ink"
      >
        Skip to content
      </a>
      <Header overlayId="hero" />
      <Hero />
      <main id="main">
        <About />
        <RecentWeddings />
        <Packages />
        <Process />
        <Reviews />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
