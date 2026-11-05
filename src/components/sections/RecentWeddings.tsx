import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { weddings } from "@/content/site";

/**
 * Dark gallery section. On desktop it pins while the photos fly in and settle into the
 * collage; on phones each photo rises in as it scrolls into view. All motion is CSS
 * (scroll-driven animations in globals.css) and switches off for reduced motion.
 */
export function RecentWeddings() {
  return (
    <section id="weddings" aria-labelledby="weddings-title" className="weddings relative scroll-mt-20 bg-panel text-on-panel">
      <div className="weddings-stage flex flex-col justify-center overflow-hidden px-gutter py-section md:pt-24 md:pb-10">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 text-center">
          <SectionHeading id="weddings-title" title={weddings.title} label={weddings.label} tone="inherit" />
          <p className="max-w-copy text-body">{weddings.intro}</p>
        </div>
        <div className="wcollage mx-auto mt-10 w-full">
          {weddings.photos.map((photo, i) => (
            <div key={photo.src} className={`${photo.ratio} md:aspect-auto`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={i === 0 || i >= 5 ? "(width >= 48rem) 40vw, 100vw" : "(width >= 48rem) 28vw, 50vw"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href={weddings.link.href} live={weddings.link.live} tone="current">
            {weddings.link.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
