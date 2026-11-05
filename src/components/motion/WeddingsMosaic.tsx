"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import type { MosaicPhoto } from "@/content/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// How far each photo drifts inside its frame while it crosses the screen (percent of its height)
const drift = { a: 6, b: 10, c: 14 } as const;

/**
 * Recent weddings mosaic. Each photo starts out of place and snaps into its spot as it
 * scrolls into view, then drifts gently inside its frame. Reduced motion: static mosaic.
 */
export function WeddingsMosaic({ photos }: { photos: MosaicPhoto[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-tile]").forEach((tile, i) => {
          gsap.from(tile, {
            y: 120,
            scale: 0.88,
            autoAlpha: 0,
            clipPath: "inset(12% 8% 12% 8%)",
            duration: 1.1,
            ease: "expo.out",
            delay: (i % 2) * 0.08,
            scrollTrigger: { trigger: tile, start: "top 90%", once: true },
          });

          const img = tile.querySelector("img");
          const amount = Number(tile.dataset.drift);
          if (img) {
            gsap.fromTo(
              img,
              { yPercent: -amount, scale: 1 + amount / 50 },
              {
                yPercent: amount,
                ease: "none",
                scrollTrigger: { trigger: tile, start: "top bottom", end: "bottom top", scrub: true },
              },
            );
          }
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} className="mosaic mx-auto mt-group max-w-wide">
      {photos.map((photo, i) => (
        <div key={photo.src} data-tile data-drift={drift[photo.speed]} className={`relative overflow-hidden ${photo.ratio}`}>
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
