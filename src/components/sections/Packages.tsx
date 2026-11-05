"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { lockScroll } from "@/components/motion/SmoothScroll";
import { SectionHeading } from "@/components/SectionHeading";
import { packages, servicesPage } from "@/content/site";

/**
 * Service packages: one card per package (clean photo, name, price, then who it suits as a short
 * lead into the description) and a centered gold "What's included" link that opens a pop-up with
 * the full list and the pink "Learn more".
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
      <div className="mx-auto mt-group grid max-w-content grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.items.map((pkg, i) => (
          <article
            key={pkg.id}
            id={pkg.id}
            aria-labelledby={`${pkg.id}-name`}
            className="row-span-6 grid grid-rows-subgrid gap-y-0 border border-line bg-card"
          >
            <div className="relative aspect-4/3 overflow-hidden">
              <Image src={pkg.image.src} alt={pkg.image.alt} fill sizes="(width >= 64rem) 30vw, (width >= 48rem) 45vw, 100vw" className="object-cover" />
            </div>
            <h3 id={`${pkg.id}-name`} className="px-6 pt-6 font-display text-card-title font-medium uppercase sm:px-7">
              {pkg.name}
            </h3>
            <p className="px-6 pt-1 font-display text-price font-medium text-accent sm:px-7">{pkg.price}</p>
            <p className="px-6 pt-5 text-body-sm font-semibold sm:px-7">{pkg.tag}</p>
            <p className="px-6 pt-1 text-body-sm text-ink-muted sm:px-7">{pkg.description}</p>
            <div className="flex justify-center px-6 pt-4 pb-5 sm:px-7">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-haspopup="dialog"
                className="link-sweep py-3 font-display text-label font-semibold uppercase text-accent-label"
              >
                {packages.includedLabel}
              </button>
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
        className="m-auto max-h-(--dialog-max-h) w-(--dialog-w) overflow-y-auto overscroll-contain bg-surface p-0 font-display text-ink backdrop:bg-ink/60"
      >
        {item ? (
          <div className="flex flex-col">
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-surface py-4 pr-3 pl-6">
              <div className="flex flex-col gap-1 pt-1">
                <h3 id="package-dialog-title" className="text-card-title font-medium uppercase">
                  {item.name}
                </h3>
                <p className="text-price font-medium text-accent">{item.priceDetail ?? item.price}</p>
              </div>
              <button type="button" onClick={close} aria-label="Close" className="inline-flex size-tap flex-none items-center justify-center text-ink hover:text-accent">
                <X size={22} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col gap-5 px-6 py-6">
              <p className="text-body-sm font-medium text-ink-muted">{item.bestFor}</p>
              <ul className="flex flex-col gap-3">
                {item.inclusions.map((inclusion) => (
                  <li key={inclusion} className="flex gap-3 text-body-sm">
                    <span className="mt-2.5 size-1.5 flex-none rounded-full bg-accent-label" aria-hidden="true" />
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
