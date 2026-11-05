"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/useReducedMotion";
import { hero } from "@/content/site";

const SLIDE_MS = 6000;

export function Hero() {
  const slides = hero.slides;
  const count = slides.length;
  const [index, setIndex] = useState(0);
  // Only the first photo loads with the page; the rest join once it has finished loading, so
  // they don't compete with it (it's the page's largest paint).
  const [rest, setRest] = useState(false);
  const reducedMotion = useReducedMotion();
  // The slideshow and scroll cue pause while the hero is off screen
  const root = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const show = () => setRest(true);
    if (document.readyState === "complete") show();
    else window.addEventListener("load", show, { once: true });
    return () => window.removeEventListener("load", show);
  }, []);

  useEffect(() => {
    if (reducedMotion || !rest || !visible) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [reducedMotion, rest, visible, count]);

  return (
    <section
      ref={root}
      id="hero"
      data-offscreen={visible ? undefined : ""}
      aria-label="Weddings planned by One & Only Events"
      className="relative flex h-(--hero-h) flex-col justify-end overflow-hidden bg-photo-fallback text-on-photo"
    >
      {slides.slice(0, rest ? count : 1).map((slide, i) => (
        <div
          key={slide.src}
          className={`slide-fade absolute inset-0 ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            preload={i === 0}
            className={`object-cover ${slide.focus === "upper" ? "focus-upper" : ""} ${i === index ? "animate-hero-zoom" : ""}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-(image:--scrim-hero)" aria-hidden="true" />

      <div className="relative px-gutter pb-12 md:pb-14">
        <div className="mx-auto max-w-content">
          <div className="flex max-w-hero-copy gap-4 md:gap-6">
            <a href={hero.scrollCue.href} className="-ml-3 flex w-6 flex-none justify-center">
              <span className="sr-only">{hero.scrollCue.label}</span>
              <span className="relative h-full w-px overflow-hidden bg-on-photo/35" aria-hidden="true">
                <span className="absolute inset-x-0 top-0 h-1/3 animate-scroll-cue bg-pink" />
              </span>
            </a>
            <div className="flex flex-col gap-3">
              <p className="font-display text-label font-medium uppercase">{hero.label}</p>
              <h1 className="font-display text-hero font-normal uppercase">{hero.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
