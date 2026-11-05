import { pullQuote } from "@/content/site";

/** A pull quote in Sunny's own words, between About and Recent weddings. */
export function PullQuote() {
  return (
    <section aria-label={`A quote from ${pullQuote.name}`} className="px-gutter pb-section">
      <figure className="mx-auto flex max-w-content flex-col gap-6 border-t border-line pt-14">
        <svg width="40" height="32" viewBox="0 0 40 32" aria-hidden="true" className="text-pink">
          <path d="M0 32V18C0 8 5 2 15 0l2 4c-6 2-9 6-9 12h8v16H0Zm22 0V18c0-10 5-16 15-18l2 4c-6 2-9 6-9 12h8v16H22Z" fill="currentColor" />
        </svg>
        <blockquote className="max-w-4xl font-body text-[clamp(1.5rem,1.1rem+1.6vw,2.5rem)] leading-snug text-ink">{pullQuote.quote}</blockquote>
        <figcaption className="font-display text-label font-medium uppercase text-accent-label">
          {pullQuote.name} · {pullQuote.role}
        </figcaption>
      </figure>
    </section>
  );
}
