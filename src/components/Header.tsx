import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { NavLink } from "@/components/NavLink";
import { pages } from "@/content/site";

/** Site header. `overlay` places it over the hero photo in white. */
export function Header({ overlay = false }: { overlay?: boolean }) {
  const tone = overlay ? "dark" : "light";
  return (
    <header className={`${overlay ? "absolute inset-x-0 top-0 z-20" : "relative"} px-gutter pt-6 md:pt-8`}>
      <div className="flex items-center justify-between gap-6">
        <Logo tone={tone} />
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-8 font-display text-label font-medium uppercase">
            {pages.map((page) => (
              <li key={page.href}>
                <NavLink page={page} className={`inline-flex min-h-tap items-center ${overlay ? "text-on-photo" : "text-ink"}`} />
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu tone={tone} />
      </div>
    </header>
  );
}
