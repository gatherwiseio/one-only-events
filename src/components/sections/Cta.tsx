import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { cta } from "@/content/site";

/**
 * Inquiry call to action: a scenic photo with the text on a solid cream panel, never on the photo.
 * From md the photo fills the band and the panel sits on it at the left; on phones the photo
 * sits above the panel.
 */
export function Cta() {
  return (
    <section id="inquire" aria-labelledby="inquire-title" className="relative isolate overflow-hidden md:px-gutter md:py-16">
      <div className="relative aspect-4/3 md:absolute md:inset-0 md:-z-10 md:aspect-auto">
        <Image src={cta.image.src} alt={cta.image.alt} fill sizes="100vw" className="object-cover" />
      </div>
      <div className="mx-auto max-w-wide">
        <div className="flex flex-col items-start gap-5 bg-surface px-gutter py-12 md:max-w-xl md:p-10">
          <SectionHeading id="inquire-title" title={cta.title} label={cta.label} align="start" />
          <p className="text-body">{cta.body}</p>
          <Button href={cta.primary.href} live={cta.primary.live} variant="primary" className="mt-2">
            {cta.primary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
