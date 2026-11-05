"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * Section titles inside <main> rise into view line by line from behind a mask as they scroll
 * in. The text stays real HTML (SplitText keeps an accessible label). Reduced motion: no effect.
 */
export function TitleReveals() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("main h2").forEach((title) => {
        SplitText.create(title, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 110,
              duration: 1,
              ease: "expo.out",
              stagger: 0.08,
              scrollTrigger: { trigger: title, start: "top 88%", once: true },
            }),
        });
      });
    });
    return () => mm.revert();
  });

  return null;
}
