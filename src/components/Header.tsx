"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { NavLink } from "@/components/NavLink";
import { pages } from "@/content/site";

/**
 * Sticky site header. With `overlayId`, it sits clear and white over that element (the hero)
 * and turns solid with black type once the element has scrolled out from under it.
 */
export function Header({ overlayId }: { overlayId?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [overHero, setOverHero] = useState(Boolean(overlayId));

  useEffect(() => {
    const target = overlayId ? document.getElementById(overlayId) : null;
    const header = ref.current;
    if (!target || !header) return;
    const observer = new IntersectionObserver(([entry]) => setOverHero(entry.isIntersecting), {
      rootMargin: `-${header.offsetHeight}px 0px 0px 0px`,
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, [overlayId]);

  const solid = !overHero;

  return (
    <header
      ref={ref}
      className={`fixed inset-x-0 top-0 z-30 px-gutter py-2 transition-colors duration-300 ease-soft md:py-3 ${
        solid ? "border-b border-line bg-surface/95 text-ink backdrop-blur-sm" : "border-b border-transparent text-on-photo"
      }`}
    >
      <div className="flex items-center justify-between gap-6">
        <Logo tone={solid ? "ink" : "dark"} />
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-8 font-display text-label font-medium uppercase">
            {pages.map((page) => (
              <li key={page.href}>
                <NavLink page={page} className="inline-flex min-h-tap items-center" />
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu tone={solid ? "light" : "dark"} />
      </div>
    </header>
  );
}
