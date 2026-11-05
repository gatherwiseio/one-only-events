"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/components/useReducedMotion";
import { hero } from "@/content/site";

const SLIDE_MS = 6000;

export function Hero() {
  const slides = hero.slides;
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [reducedMotion, count]);

  return (
    <section
      id="hero"
      aria-label="Weddings planned by One & Only Events"
      className="relative flex h-(--hero-h) flex-col justify-end overflow-hidden bg-photo-fallback text-on-photo"
    >
      {slides.map((slide, i) => (
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
            className={`object-cover ${i === index ? "animate-hero-zoom" : ""}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-(image:--scrim-hero)" aria-hidden="true" />

      <div className="relative flex max-w-hero-copy flex-col gap-3 px-gutter pb-24 md:pb-12">
        <p className="font-display text-label font-medium uppercase">{hero.label}</p>
        <h1 className="font-display text-hero font-light uppercase">{hero.title}</h1>
      </div>

      <a
        href={hero.scrollCue.href}
        className="absolute bottom-6 left-1/2 flex h-16 w-tap -translate-x-1/2 justify-center md:bottom-12 md:left-auto md:right-gutter md:translate-x-0"
      >
        <span className="sr-only">{hero.scrollCue.label}</span>
        <span className="relative h-full w-px overflow-hidden bg-on-photo/35" aria-hidden="true">
          <span className="absolute inset-x-0 top-0 h-1/3 animate-scroll-cue bg-on-photo" />
        </span>
      </a>
    </section>
  );
}
