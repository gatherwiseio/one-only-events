import { business } from "@/content/site";

/** One thin white stripe, as wide as the header: copyright on the left, Instagram on the right. */
export function Footer() {
  return (
    <footer className="bg-card px-gutter py-3">
      <div className="flex items-center justify-between gap-6">
        <p className="font-display text-label font-medium uppercase text-ink-muted">
          © {business.copyrightYear} {business.name}
        </p>
        <a
          href={business.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram ${business.instagramHandle}`}
          className="-mr-2.5 inline-flex size-tap flex-none items-center justify-center text-ink transition-colors duration-300 ease-soft hover:text-primary"
        >
          {/* lucide-react no longer ships brand icons, so the Instagram glyph is drawn here in its style */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4.25" />
            <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
