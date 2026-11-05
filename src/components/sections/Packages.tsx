"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { packages, servicesPage } from "@/content/site";

export function Packages() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <section id="packages" aria-labelledby="packages-title" className="scroll-mt-20 bg-surface-alt px-gutter py-section">
      <SectionHeading id="packages-title" title={packages.title} label={packages.label} />
      <div className="mx-auto mt-group grid max-w-content grid-cols-1 gap-6 lg:grid-cols-3">
        {packages.items.map((item) => {
          const isOpen = !!open[item.id];
          const shown = isOpen ? item.inclusions : item.highlights.map((k) => item.inclusions[k]);
          const listId = `${item.id}-inclusions`;
          return (
            <article
              key={item.id}
              aria-labelledby={`${item.id}-name`}
              className="row-span-6 grid grid-rows-subgrid gap-y-4 bg-surface px-6 pt-10 pb-8 sm:px-8"
            >
              <h3 id={`${item.id}-name`} className="font-display text-card-title font-normal uppercase">
                {item.name}
              </h3>
              <p className="font-display text-price font-medium text-accent">{item.price}</p>
              <p className="text-body">{item.description}</p>
              <p className="text-body-sm italic text-ink-muted">{item.bestFor}</p>
              <ul id={listId} className="flex flex-col gap-3 border-t border-line pt-5">
                {shown.map((inclusion) => (
                  <li key={inclusion} className="flex gap-3 text-body-sm">
                    <span className="mt-2.5 size-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
                    <span>{inclusion}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center justify-between gap-3 self-end pt-2">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={listId}
                  onClick={() => setOpen({ ...open, [item.id]: !isOpen })}
                  className="inline-flex min-h-tap items-center border border-accent px-4 font-display text-label font-medium uppercase text-accent transition-colors duration-300 ease-soft hover:bg-accent hover:text-on-photo"
                >
                  {isOpen ? "− Show less" : `+ See all ${item.inclusions.length} inclusions`}
                </button>
                <Button href={`${servicesPage.href}#${item.id}`} live={servicesPage.live}>
                  Learn more
                </Button>
              </div>
            </article>
          );
        })}
      </div>
      <p className="mx-auto mt-10 max-w-copy text-center text-body-sm text-ink-muted">{packages.note}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        <Button href={packages.primary.href} live={packages.primary.live} variant="primary">
          {packages.primary.label}
        </Button>
        <Button href={packages.secondary.href} live={packages.secondary.live}>
          {packages.secondary.label}
        </Button>
      </div>
    </section>
  );
}
