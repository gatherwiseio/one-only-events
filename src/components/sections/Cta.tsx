import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { cta } from "@/content/site";

/**
 * Inquiry call to action: the scenic photo runs full width and the text sits on it at the left,
 * aligned to the content column. From md a soft gradient darkens only the text side
 * (--scrim-side), so the rest of the photo stays clear; on phones the text spans the photo, so
 * the whole photo is evenly dimmed. The photo is framed low (50% 85%) so the arch and Mokoliʻi
 * show, and runs 12% wider than the section from the left edge, which moves the arch right of
 * the text and into the middle of the open photo.
 */
export function Cta() {
  return (
    <section id="inquire" aria-labelledby="inquire-title" className="relative isolate overflow-hidden px-gutter py-20 text-on-photo md:py-28">
      <div className="absolute inset-y-0 left-0 -z-20 w-[112%]">
        <Image src={cta.image.src} alt={cta.image.alt} fill sizes="112vw" className="object-cover object-[50%_85%]" />
      </div>
      <div className="absolute inset-0 -z-10 bg-(image:--scrim-cta) md:bg-(image:--scrim-side)" aria-hidden="true" />
      <div className="mx-auto max-w-content">
        <div className="flex max-w-md flex-col items-start gap-5">
          <SectionHeading id="inquire-title" title={cta.title} label={cta.label} align="start" tone="dark" labelColor="light-gold" />
          <p className="text-body">{cta.body}</p>
          <Button href={cta.primary.href} live={cta.primary.live} variant="primary" className="mt-2">
            {cta.primary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
