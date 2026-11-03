import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { cta } from "@/content/site";

export function Cta() {
  return (
    <section id="inquire" aria-labelledby="inquire-title" className="relative isolate overflow-hidden px-gutter py-section text-on-photo">
      <Image src={cta.image.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-(image:--scrim-cta)" aria-hidden="true" />
      <div className="mx-auto flex max-w-copy flex-col items-center gap-6 py-10 text-center">
        <SectionHeading id="inquire-title" title={cta.title} label={cta.label} tone="dark" />
        <p className="text-body">{cta.body}</p>
        <Button href={cta.primary.href} live={cta.primary.live} variant="primary" tone="dark" className="mt-2">
          {cta.primary.label}
        </Button>
      </div>
    </section>
  );
}
