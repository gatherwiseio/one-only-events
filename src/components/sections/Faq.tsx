import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { faq } from "@/content/site";

/**
 * FAQs: title and a short intro on the left, the questions on the right (half the width from lg).
 * Each answer opens and closes in place with native <details>, so it works without JavaScript.
 */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-20 bg-surface-alt px-gutter py-section-sm">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading id="faq-title" title={faq.title} label={faq.label} align="start" />
          <p className="max-w-copy text-body">{faq.intro}</p>
        </div>
        <div className="border-t border-line">
          {faq.items.map((item) => (
            <details key={item.question} className="faq group border-b border-line">
              <summary className="flex min-h-tap cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-card-title font-medium uppercase text-ink transition-colors duration-300 ease-soft hover:text-accent [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus size={20} strokeWidth={1.5} aria-hidden="true" className="flex-none text-accent transition-transform duration-300 ease-soft group-open:rotate-45" />
              </summary>
              <p className="pb-6 text-body text-ink-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
