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

  const buttonTone = tone === "dark" ? "border-on-photo text-on-photo" : "border-ink text-ink";

  return (
    <div className="md:hidden">
      <button
        ref={openRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className={`inline-flex size-tap items-center justify-center border font-display text-label font-medium uppercase xs:size-auto xs:min-h-tap xs:px-4 ${buttonTone}`}
      >
        <svg className="xs:hidden" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="sr-only xs:not-sr-only">Menu</span>
      </button>

      {open
        ? createPortal(
            <div
              id="mobile-menu"
              data-lenis-prevent
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-surface px-gutter pt-6 pb-10"
            >
              <div className="flex items-center justify-between gap-6">
                <Logo />
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex size-tap items-center justify-center border border-ink font-display text-label font-medium uppercase text-ink xs:size-auto xs:min-h-tap xs:px-4"
                >
                  <svg className="xs:hidden" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                    <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span className="sr-only xs:not-sr-only">Close</span>
                </button>
              </div>
              <nav aria-label="Main" className="mt-group">
                <ul className="flex flex-col">
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
                className="mt-auto inline-block self-start py-3 pt-10 font-display text-label font-semibold uppercase link-sweep text-accent"
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
