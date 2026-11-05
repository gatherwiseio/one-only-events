import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { cta } from "@/content/site";

/**
 * Inquiry call to action: text on the cream page beside a scenic photo, never on it.
 * From md, two halves with the photo running to the right edge; on phones, photo then text.
 */
export function Cta() {
  return (
    <section id="inquire" aria-labelledby="inquire-title" className="grid grid-cols-1 bg-surface md:grid-cols-2">
      <div className="flex flex-col items-start justify-center gap-5 px-gutter py-14 md:order-first md:py-16 lg:pr-16 lg:pl-[max(var(--spacing-gutter),calc((100vw_-_var(--container-content))_/_2))]">
        <SectionHeading id="inquire-title" title={cta.title} label={cta.label} align="start" />
        <p className="max-w-copy text-body">{cta.body}</p>
        <Button href={cta.primary.href} live={cta.primary.live} variant="primary" className="mt-2">
          {cta.primary.label}
        </Button>
      </div>
      <div className="relative order-first aspect-4/3 md:aspect-auto md:min-h-120">
        <Image src={cta.image.src} alt={cta.image.alt} fill sizes="(width >= 48rem) 50vw, 100vw" className="object-cover" />
      </div>
    </section>
  );
}
