"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Logo } from "@/components/Logo";
import { lockScroll } from "@/components/motion/SmoothScroll";
import { NavLink } from "@/components/NavLink";
import { business, pages } from "@/content/site";

/** Phone menu: a button that opens a full-screen overlay, rendered at the end of <body>. */
export function MobileMenu({ tone }: { tone: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    lockScroll(true);
    const opener = openRef.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      lockScroll(false);
      opener?.focus();
    };
  }, [open]);

  const iconButton = "-mr-2.5 inline-flex size-tap flex-none items-center justify-center";

  return (
    <div className="md:hidden">
      <button
        ref={openRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className={`${iconButton} ${tone === "dark" ? "text-on-photo" : "text-ink"}`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="sr-only">Menu</span>
      </button>

      {open
        ? createPortal(
            <div
              id="mobile-menu"
              data-lenis-prevent
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-surface px-gutter pb-10"
            >
              {/* Same padding and sizes as the page header, so the logo and button don't move */}
              <div className="flex items-center justify-between gap-6 py-2">
                <Logo tone="ink" />
                <button ref={closeRef} type="button" onClick={() => setOpen(false)} className={`${iconButton} text-ink`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <nav aria-label="Main" className="mt-6">
                <ul className="flex flex-col border-t border-line">
                  {pages.map((page) => (
                    <li key={page.href} className="border-b border-line">
                      <NavLink
                        page={page}
                        onClick={() => setOpen(false)}
                        className="flex min-h-tap items-center py-4 font-display text-title font-normal uppercase text-ink"
                      />
                    </li>
                  ))}
                </ul>
              </nav>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block self-start py-3 pt-10 font-display text-label font-semibold uppercase link-beam text-accent"
              >
                Instagram {business.instagramHandle}
              </a>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
