import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/content/site";

const speedClass = { a: "parallax-a", b: "parallax-b", c: "parallax-c" } as const;

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 overflow-hidden px-gutter py-section">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:items-start">
        <div className="about-mosaic mx-auto w-full max-w-lg lg:col-span-6 lg:max-w-none">
          {about.photos.map((photo, i) => (
            <div key={photo.src} className={`${speedClass[photo.speed]} ${i > 0 ? "ring-8 ring-surface" : ""}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={i === 0 ? "(width >= 64rem) 35vw, 70vw" : "(width >= 64rem) 25vw, 50vw"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 lg:col-span-6 lg:pl-6">
          <SectionHeading id="about-title" title={about.title} label={about.label} align="start" />
          <p className="text-quote">{about.lead}</p>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body">
              {paragraph}
            </p>
          ))}
          <Button href={about.link.href} live={about.link.live} tone="pink" className="self-start">
            {about.link.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
