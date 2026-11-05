import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { process } from "@/content/site";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="scroll-mt-20 bg-surface-alt px-gutter py-section">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-10 lg:col-span-7">
          <SectionHeading id="process-title" title={process.title} label={process.label} align="start" />
          <ol className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {process.steps.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-2">
                <p className="font-display text-label font-medium uppercase text-accent-label" aria-hidden="true">
                  Step {i + 1}
                </p>
                <h3 className="font-display text-card-title font-normal uppercase">{step.title}</h3>
                <p className="text-body-sm">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative mx-auto aspect-4/5 w-full max-w-sm lg:col-span-4 lg:col-start-9 lg:max-w-none">
          <Image src={process.image.src} alt={process.image.alt} fill sizes="(width >= 64rem) 35vw, 90vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
