"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { lockScroll } from "@/components/motion/SmoothScroll";
import { SectionHeading } from "@/components/SectionHeading";
import { packages, servicesPage } from "@/content/site";

/**
 * Service packages: an editorial snapshot of each package (photo, name, price, one line), with
 * "What's included" opening a pop-up of the full list and a pink "Learn more" to the Services page.
 */
export function Packages() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const item = active === null ? null : packages.items[active];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || active === null || dialog.open) return;
    dialog.showModal();
    lockScroll(true);
  }, [active]);

  const close = () => dialogRef.current?.close();

  return (
    <section id="packages" aria-labelledby="packages-title" className="scroll-mt-20 bg-surface px-gutter py-section">
      <SectionHeading id="packages-title" title={packages.title} label={packages.label} />
      <div className="mx-auto mt-group grid max-w-content grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {packages.items.map((pkg, i) => (
          <article key={pkg.id} id={pkg.id} aria-labelledby={`${pkg.id}-name`} className="group row-span-5 grid grid-rows-subgrid gap-y-4">
            <div className="relative mb-2 aspect-4/5 overflow-hidden">
              <Image
                src={pkg.image.src}
                alt={pkg.image.alt}
                fill
                sizes="(width >= 64rem) 30vw, (width >= 48rem) 45vw, 100vw"
                className="object-cover transition-transform duration-700 ease-soft group-hover:scale-103"
              />
            </div>
            <h3 id={`${pkg.id}-name`} className="font-display text-card-title font-normal uppercase">
              {pkg.name}
            </h3>
            <p className="font-display text-price font-medium text-accent">{pkg.price}</p>
            <p className="text-body">{pkg.description}</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 self-end pt-2">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-haspopup="dialog"
                className="py-3 font-display text-label font-semibold uppercase text-accent underline decoration-1 underline-offset-6 transition-colors duration-300 ease-soft hover:text-accent-deep"
              >
                {packages.includedLabel}
              </button>
              <Button href={`${servicesPage.href}#${pkg.id}`} live={servicesPage.live} variant="primary" tone="pink">
                {packages.learnMoreLabel}
              </Button>
            </div>
          </article>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        data-lenis-prevent
        aria-labelledby="package-dialog-title"
        onClose={() => {
          setActive(null);
          lockScroll(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        className="m-auto max-h-(--dialog-max-h) w-(--dialog-w) overflow-y-auto overscroll-contain bg-surface p-0 text-ink backdrop:bg-ink/60"
      >
        {item ? (
          <div className="flex flex-col">
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-surface px-6 py-5">
              <div className="flex flex-col gap-1">
                <h3 id="package-dialog-title" className="font-display text-card-title font-normal uppercase">
                  {item.name}
                </h3>
                <p className="font-display text-price font-medium text-accent">{item.priceDetail ?? item.price}</p>
              </div>
              <button
                type="button"
                onClick={close}
                className="inline-flex min-h-tap flex-none items-center border border-ink px-4 font-display text-label font-medium uppercase text-ink"
              >
                Close
              </button>
            </div>
            <div className="flex flex-col gap-5 px-6 py-6">
              <p className="text-body-sm italic text-ink-muted">{item.bestFor}</p>
              <ul className="flex flex-col gap-3">
                {item.inclusions.map((inclusion) => (
                  <li key={inclusion} className="flex gap-3 text-body">
                    <span className="mt-3 size-1.5 flex-none rounded-full bg-accent-label" aria-hidden="true" />
                    <span>{inclusion}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5 border-t border-line px-6 py-6">
              <p className="text-body-sm text-ink-muted">{packages.note}</p>
              <Button href={`${servicesPage.href}#${item.id}`} live={servicesPage.live} variant="primary" tone="pink" className="self-start">
                {packages.learnMoreLabel}
              </Button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
