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
const frameShift = { a: 30, b: 90, c: 160 } as const;
const photoDrift = { a: 6, b: 10, c: 14 } as const;

/** Recent weddings mosaic: photos sit in place; parallax only. Reduced motion: still. */
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
                { yPercent: -drift, scale: 1 + drift / 50 },
                { yPercent: drift, scale: 1 + drift / 50, ease: "none", scrollTrigger: scroll },
              );
            }
          });
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
