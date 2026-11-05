"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import type { MosaicPhoto } from "@/content/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Each frame drifts at its own speed (px, desktop only) and each photo drifts inside its frame
// (percent of its height), so the mosaic feels like moving pictures as you scroll.
const frameShift = { a: 15, b: 40, c: 70 } as const;
const photoDrift = { a: 3, b: 5, c: 7 } as const;

/**
 * Recent weddings mosaic: photos sit in place with gentle parallax, and the section cuts from
 * sand to near-black as its title comes into view (and back when scrolling up).
 * Reduced motion: still photos, dark section.
 */
export function WeddingsMosaic({ photos }: { photos: MosaicPhoto[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        { motion: "(prefers-reduced-motion: no-preference)", desktop: "(width >= 48rem)" },
        (context) => {
          const { motion, desktop } = context.conditions as { motion: boolean; desktop: boolean };
          if (!motion) return;

          // Sand-to-dark switch, keyed off the section title rather than the photos: the title's
          // distance below the section top is the same fixed padding at every width, while the
          // photos sit a variable distance further down (the intro wraps to many more lines on
          // phones). So the cut always lands while the title is still in the bottom 15% of the
          // screen, before anyone is reading it, on short and tall viewports alike. The colors
          // change in one frame (see .weddings-tone in globals.css), so there is no half state.
          const section = root.current?.closest("section");
          const title = section?.querySelector("h2");
          if (section && title) {
            const setLight = (light: boolean) => section.classList.toggle("is-light", light);
            setLight(true);
            ScrollTrigger.create({
              trigger: title,
              start: "top 85%",
              onEnter: () => setLight(false),
              onLeaveBack: () => setLight(true),
              // Loading, resizing or jumping straight to a point below the switch: match the scroll position
              onRefresh: (self) => setLight(self.scroll() < self.start),
            });
          }

          gsap.utils.toArray<HTMLElement>("[data-tile]").forEach((tile) => {
            const speed = tile.dataset.speed as keyof typeof frameShift;
            const scroll = { trigger: tile, start: "top bottom", end: "bottom top", scrub: true };

            if (desktop) {
              gsap.fromTo(tile, { y: frameShift[speed] }, { y: -frameShift[speed], ease: "none", scrollTrigger: scroll });
            }

            const img = tile.querySelector("img");
            if (img) {
              const drift = photoDrift[speed];
              gsap.fromTo(
                img,
                { yPercent: -drift, scale: 1 + drift / 40 },
                { yPercent: drift, scale: 1 + drift / 40, ease: "none", scrollTrigger: scroll },
              );
            }
          });

          return () => section?.classList.remove("is-light");
        },
      );
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className="mosaic mx-auto mt-group max-w-wide">
      {photos.map((photo, i) => (
        <div key={photo.src} data-tile data-speed={photo.speed} className={`relative overflow-hidden ${photo.ratio}`}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={i === 0 || i === 6 ? "(width >= 48rem) 60vw, 100vw" : "(width >= 48rem) 35vw, 50vw"}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
