"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { NavLink } from "@/components/NavLink";
import { contactPage, pages } from "@/content/site";

/**
 * Site header. With `overlayId`, it sits clear and white over that element (the hero) and
 * scrolls away with it; once the element has fully left the screen, the header slides back
 * in from the top, pinned, solid and black. Without `overlayId` it's always pinned.
 */
export function Header({ overlayId }: { overlayId?: string }) {
  const [pinned, setPinned] = useState(!overlayId);

  useEffect(() => {
    const target = overlayId ? document.getElementById(overlayId) : null;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setPinned(!entry.isIntersecting));
    observer.observe(target);
    return () => observer.disconnect();
  }, [overlayId]);

  return (
    <header
      className={`inset-x-0 top-0 z-30 px-gutter py-2 md:py-3 ${
        pinned
          ? `fixed border-b border-line bg-surface/95 text-ink backdrop-blur-sm ${overlayId ? "animate-header-in" : ""}`
          : "absolute text-on-photo"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-6">
        <Logo tone={pinned ? "ink" : "dark"} />
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-8 font-display text-label font-medium uppercase">
            {pages.map((page) => (
              <li key={page.href}>
                <NavLink
                  page={page}
                  className={
                    page.href !== contactPage.href
                      ? "inline-flex min-h-tap items-center"
                      : `inline-flex min-h-tap items-center border px-4 transition-colors duration-300 ease-soft ${
                          pinned
                            ? "border-primary text-primary hover:bg-primary hover:text-on-photo"
                            : "border-on-photo text-on-photo hover:bg-on-photo hover:text-ink"
                        }`
                  }
                />
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu tone={pinned ? "light" : "dark"} />
      </div>
    </header>
  );
}
