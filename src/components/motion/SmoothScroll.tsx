"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

/** Pause or resume page scrolling, e.g. while a pop-up or the phone menu is open. */
export function lockScroll(locked: boolean) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  window.dispatchEvent(new CustomEvent("scroll-lock", { detail: locked }));
}

/** Space left above an element scrolled to from code, so the pinned header doesn't cover it. */
const HEADER_OFFSET = 96;

/**
 * Bring an element's top into view below the pinned header: smoothly through Lenis when it's
 * running, otherwise with the browser's own scroll (instant for reduced motion).
 */
export function scrollToElement(element: HTMLElement) {
  const handled = !window.dispatchEvent(new CustomEvent("scroll-to", { detail: element, cancelable: true }));
  if (handled) return;
  const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top, behavior: smooth ? "smooth" : "auto" });
}

/**
 * Site-wide smooth scrolling (Lenis), driven by GSAP's ticker so scroll-linked animations
 * stay in sync. Skipped entirely for visitors who prefer reduced motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.15, anchors: { offset: -80 } });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onLock = (event: Event) => ((event as CustomEvent<boolean>).detail ? lenis.stop() : lenis.start());
    window.addEventListener("scroll-lock", onLock);
    const onScrollTo = (event: Event) => {
      event.preventDefault();
      lenis.scrollTo((event as CustomEvent<HTMLElement>).detail, { offset: -HEADER_OFFSET });
    };
    window.addEventListener("scroll-to", onScrollTo);

    return () => {
      window.removeEventListener("scroll-lock", onLock);
      window.removeEventListener("scroll-to", onScrollTo);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
