import Link from "next/link";
import type { PageLink } from "@/content/site";

/** A main-nav link. Pages that aren't live yet keep their look but aren't clickable. */
export function NavLink({ page, className = "", onClick }: { page: PageLink; className?: string; onClick?: () => void }) {
  if (!page.live) {
    return (
      <span className={`${className} cursor-default`} aria-disabled="true" title="Coming soon">
        {page.label}
      </span>
    );
  }
  return (
    <Link href={page.href} className={className} onClick={onClick}>
      {page.label}
    </Link>
  );
}
