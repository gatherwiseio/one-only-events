import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/content/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-6 px-gutter py-section">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
        <div className="relative mx-auto aspect-4/5 w-full max-w-sm md:col-span-5 md:max-w-none lg:col-span-4 lg:col-start-2">
          <Image src={about.image.src} alt={about.image.alt} fill sizes="(width >= 48rem) 35vw, 90vw" className="object-cover" />
        </div>
        <div className="flex flex-col gap-6 md:col-span-7 lg:col-span-6 lg:col-start-7">
          <SectionHeading id="about-title" title={about.title} label={about.label} align="start" />
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body">
              {paragraph}
            </p>
          ))}
          <Button href={about.link.href} live={about.link.live} className="self-start">
            {about.link.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
