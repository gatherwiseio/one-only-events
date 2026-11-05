import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { weddings } from "@/content/site";

const speedClass = { a: "parallax-a", b: "parallax-b", c: "parallax-c" } as const;

export function RecentWeddings() {
  return (
    <section id="weddings" aria-labelledby="weddings-title" className="scroll-mt-20 overflow-hidden px-gutter pt-section pb-section md:pb-48">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 text-center">
        <SectionHeading id="weddings-title" title={weddings.title} label={weddings.label} />
        <p className="max-w-copy text-body">{weddings.intro}</p>
      </div>
      <div className="mosaic mx-auto mt-group max-w-wide">
        {weddings.photos.map((photo, i) => (
          <div key={photo.src} className={`relative ${photo.ratio} ${speedClass[photo.speed]}`}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={i === 0 || i === 6 ? "(width >= 48rem) 60vw, 100vw" : "(width >= 48rem) 35vw, 50vw"}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="mt-group text-center md:mt-40">
        <Button href={weddings.link.href} live={weddings.link.live}>
          {weddings.link.label}
        </Button>
      </div>
    </section>
  );
}
