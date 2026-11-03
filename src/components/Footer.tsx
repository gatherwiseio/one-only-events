import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import { business, pages, reviews } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-panel px-gutter pt-group pb-10 text-on-panel">
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="flex max-w-copy flex-col gap-3">
            <Logo tone="dark" />
            <p className="text-body-sm text-on-panel-muted">
              {business.tagline} Wedding planning and design throughout&nbsp;{business.place}.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 font-display text-label font-medium uppercase">
              {pages.map((page) => (
                <li key={page.href}>
                  <NavLink page={page} className="inline-flex min-h-tap items-center text-on-panel" />
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex flex-col font-display text-label font-semibold uppercase">
            <li>
              <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-tap items-center text-accent-on-dark underline underline-offset-6">
                Instagram
              </a>
            </li>
            {reviews.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-tap items-center text-accent-on-dark underline underline-offset-6">
                  {link.label.replace("Read reviews on ", "")}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="border-t border-on-panel/20 pt-6 font-display text-label font-medium uppercase text-on-panel-muted">
          © {business.copyrightYear} {business.name}
        </p>
      </div>
    </footer>
  );
}
