"use client";

import { Star } from "@phosphor-icons/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { scrollToElement } from "@/components/motion/SmoothScroll";
import { SectionHeading } from "@/components/SectionHeading";
import { reviews } from "@/content/site";

/** How far (px) a drag or swipe has to travel before it changes the review. */
const SWIPE_PX = 60;

/**
 * Kind words: one full review at a time on a white card. Five filled stars and the previous/next
 * arrows sit at the top, so the arrows stay put while reviews of different lengths change the
 * card's height; dots under the card jump to any review and scroll back up to its start. The card can be dragged with a mouse or
 * swiped on touch screens, and follows the pointer a little while it moves.
 */
export function Reviews() {
  const items = reviews.items;
  const count = items.length;
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const start = useRef<number | null>(null);
  const card = useRef<HTMLDivElement>(null);
  const review = items[index];

  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  /** Dots sit below long reviews, so picking one also scrolls back up to the start of the card. */
  const show = (i: number) => {
    setIndex(i);
    if (card.current) scrollToElement(card.current);
  };

  const endDrag = (x: number) => {
    if (start.current === null) return;
    const dx = x - start.current;
    start.current = null;
    setDragX(0);
    if (Math.abs(dx) > SWIPE_PX) go(dx < 0 ? 1 : -1);
  };

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="scroll-mt-20 bg-surface px-gutter py-section">
      <SectionHeading id="reviews-title" title={reviews.title} label={reviews.label} />
      <div
        ref={card}
        className="mx-auto mt-group max-w-review cursor-grab touch-pan-y border border-line bg-card px-6 py-8 select-none active:cursor-grabbing sm:px-12 sm:py-12"
        role="group"
        aria-roledescription="carousel"
        aria-label={reviews.title}
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("button")) return;
          start.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (start.current !== null) setDragX(event.clientX - start.current);
        }}
        onPointerUp={(event) => endDrag(event.clientX)}
        onPointerCancel={() => {
          start.current = null;
          setDragX(0);
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
        <figure
          key={index}
          aria-live="polite"
          className="mt-8 flex animate-fade-in flex-col gap-8"
          style={{ transform: dragX ? `translateX(${dragX * 0.25}px)` : undefined }}
        >
          <blockquote className="text-quote">“{review.quote}”</blockquote>
          <figcaption className="border-t border-line pt-5 font-display text-card-title font-medium uppercase">
            {review.name}
            <span className="ml-3 text-label text-accent">{review.date}</span>
          </figcaption>
        </figure>
      </div>
      <div className="mt-3 flex justify-center">
        {items.map((item, i) => (
          <button
            key={item.name}
            type="button"
            onClick={() => show(i)}
            aria-label={`${reviews.dotLabel} ${i + 1}: ${item.name}`}
            aria-current={i === index ? "true" : undefined}
            className="group inline-flex size-6 items-center justify-center"
          >
            <span
              className={`size-2 rounded-full transition-colors duration-300 ease-soft ${
                i === index ? "bg-primary" : "bg-accent-label group-hover:bg-accent"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
