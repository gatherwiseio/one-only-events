import { Button } from "@/components/Button";
import { WeddingsMosaic } from "@/components/motion/WeddingsMosaic";
import { SectionHeading } from "@/components/SectionHeading";
import { weddings } from "@/content/site";

export function RecentWeddings() {
  return (
    <section
      id="weddings"
      aria-labelledby="weddings-title"
      className="weddings-tone scroll-mt-20 overflow-hidden bg-(--section-bg) px-gutter py-section text-(--section-fg)"
    >
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 text-center">
        <SectionHeading id="weddings-title" title={weddings.title} label={weddings.label} tone="inherit" />
        <p className="max-w-copy text-body text-(--section-muted)">{weddings.intro}</p>
      </div>
      <WeddingsMosaic photos={weddings.photos} />
      <div className="mt-group text-center md:mt-24">
        <Button href={weddings.link.href} live={weddings.link.live} tone="current">
          {weddings.link.label}
        </Button>
      </div>
    </section>
  );
}
