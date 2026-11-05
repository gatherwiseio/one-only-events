"use client";

import { Star } from "@phosphor-icons/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { reviews } from "@/content/site";

const SWIPE_PX = 50;

/**
 * Kind words: one full review at a time on a white card. Five filled stars and the previous/next
 * controls sit at the top, so the arrows stay put while reviews of different lengths change the
 * card's height below them. Swipe also works on touch screens.
 */
export function Reviews() {
  const items = reviews.items;
  const count = items.length;
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const review = items[index];

  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="scroll-mt-20 bg-surface px-gutter py-section">
      <SectionHeading id="reviews-title" title={reviews.title} label={reviews.label} />
      <div
        className="mx-auto mt-group max-w-review border border-line bg-card px-6 py-8 sm:px-12 sm:py-12"
        role="group"
        aria-roledescription="carousel"
        aria-label={reviews.title}
        onTouchStart={(event) => {
          touchX.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchX.current === null) return;
          const dx = event.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > SWIPE_PX) go(dx < 0 ? 1 : -1);
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
          <div className="flex gap-1 text-accent-label" role="img" aria-label={reviews.starsLabel}>
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} size={22} weight="fill" aria-hidden="true" />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <p className="font-display text-label font-medium whitespace-nowrap tabular-nums text-ink-muted" aria-hidden="true">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={reviews.previousLabel}
              className="inline-flex size-tap items-center justify-center border border-primary text-primary transition-colors duration-300 ease-soft hover:bg-primary hover:text-on-photo"
            >
              <ChevronLeft size={20} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={reviews.nextLabel}
              className="inline-flex size-tap items-center justify-center border border-primary text-primary transition-colors duration-300 ease-soft hover:bg-primary hover:text-on-photo"
            >
              <ChevronRight size={20} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
        <figure key={index} aria-live="polite" className="mt-8 flex animate-fade-in flex-col gap-8">
          <blockquote className="text-quote">“{review.quote}”</blockquote>
          <figcaption className="flex flex-col gap-1 border-t border-line pt-5">
            <span className="font-display text-card-title font-medium uppercase">{review.name}</span>
            <span className="font-display text-label font-medium uppercase text-accent">
              {review.source} · {review.date}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
