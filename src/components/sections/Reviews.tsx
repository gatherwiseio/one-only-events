import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { reviews } from "@/content/site";

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="scroll-mt-6 bg-surface-alt px-gutter py-section">
      <SectionHeading id="reviews-title" title={reviews.title} label={reviews.label} />
      <div className="mx-auto mt-group grid max-w-content grid-cols-1 gap-6 lg:grid-cols-3">
        {reviews.items.map((review) => (
          <figure key={review.name} className="row-span-2 grid grid-rows-subgrid gap-y-8 bg-surface px-6 py-10 sm:px-8">
            <blockquote className="text-quote">“{review.quote}”</blockquote>
            <figcaption className="flex flex-col gap-1 self-end border-t border-line pt-5">
              <span className="font-display text-card-title font-normal uppercase">{review.name}</span>
              <span className="font-display text-label font-medium uppercase text-accent">
                {review.source} · {review.date}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-2">
        {reviews.links.map((link) => (
          <Button key={link.href} href={link.href} external>
            {link.label}
          </Button>
        ))}
      </div>
    </section>
  );
}
