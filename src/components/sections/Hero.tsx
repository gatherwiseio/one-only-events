"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { useReducedMotion } from "@/components/useReducedMotion";
import { hero } from "@/content/site";

const SLIDE_MS = 6000;

export function Hero() {
  const slides = hero.slides;
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const reducedMotion = useReducedMotion();
  const paused = userPaused ?? reducedMotion;

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [paused, count, index]);

  const go = (next: number) => setIndex((next + count) % count);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Weddings planned by One & Only Events"
      className="relative flex h-(--hero-h) flex-col overflow-hidden bg-photo-fallback text-on-photo"
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

      <Header overlay />

      <div className="relative mt-auto flex max-w-hero-copy flex-col gap-3 px-gutter pb-8">
        <p className="font-display text-label font-medium uppercase">{hero.label}</p>
        <h1 className="font-display text-hero font-light uppercase">{hero.title}</h1>
        <Button href={hero.link.href} tone="dark" className="self-start">
          {hero.link.label}
        </Button>
      </div>

      <div className="relative flex flex-wrap items-center justify-between gap-x-4 border-t border-on-photo/30 px-gutter py-1 font-display text-label font-medium uppercase">
        <p className="basis-full pt-3 text-on-photo-muted md:flex-1 md:basis-0 md:pt-0">
          <span className="tabular-nums">
            {index + 1} / {count}
          </span>{" "}
          · {slides[index].caption}
        </p>
        <div className="flex items-center">
          <button type="button" onClick={() => go(index - 1)} aria-label="Previous photo" className="inline-flex size-tap items-center justify-center text-on-photo">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M11 3.5L5.5 9l5.5 5.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setUserPaused(!paused)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="inline-flex size-tap items-center justify-center text-on-photo"
          >
            {paused ? (
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M3 1.5v11l9-5.5z" fill="currentColor" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M3.5 1.5v11M10.5 1.5v11" stroke="currentColor" strokeWidth="2" />
              </svg>
            )}
          </button>
          <button type="button" onClick={() => go(index + 1)} aria-label="Next photo" className="inline-flex size-tap items-center justify-center text-on-photo">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M7 3.5L12.5 9 7 14.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
        <a href="#weddings" className="py-3 text-right font-semibold text-on-photo underline underline-offset-6 md:flex-1 md:basis-0">
          <span className="hidden sm:inline">{hero.scroll.lead} </span>
          {hero.scroll.word} <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
