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

const token = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

/**
 * Recent weddings mosaic: photos sit in place with gentle parallax, and the section shifts from
 * sand to near-black as the photos scroll into view. Reduced motion: still photos, dark section.
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

          const section = root.current?.closest("section");
          if (section) {
            gsap.fromTo(
              section,
              {
                "--section-bg": token("--color-surface-alt"),
                "--section-fg": token("--color-ink"),
                "--section-label": token("--color-accent-label"),
                "--section-muted": token("--color-ink-muted"),
              },
              {
                "--section-bg": token("--color-gallery"),
                "--section-fg": token("--color-on-panel"),
                "--section-label": token("--color-accent-on-dark"),
                "--section-muted": token("--color-on-panel-muted"),
                ease: "none",
                scrollTrigger: { trigger: root.current, start: "top 85%", end: "top 30%", scrub: true },
              },
            );
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
