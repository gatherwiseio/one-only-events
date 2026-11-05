import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "link";
type Tone = "light" | "dark" | "pink" | "current";

const base = "font-display uppercase text-label transition-colors duration-300 ease-soft";

const primary = "fill-sweep [--sweep-fill:var(--color-primary-hover)] inline-flex items-center justify-center min-h-button px-8 bg-primary font-medium text-on-photo";
const secondary = "inline-flex items-center justify-center min-h-tap px-5 border border-accent font-medium text-accent hover:bg-accent hover:text-on-photo";

const styles: Record<Variant, Record<Tone, string>> = {
  primary: {
    light: primary,
    dark: primary,
    pink: primary,
    current: primary,
  },
  secondary: {
    light: secondary,
    dark: "inline-flex items-center justify-center min-h-tap px-5 border border-on-photo font-medium text-on-photo hover:bg-on-photo hover:text-ink",
    pink: "fill-sweep [--sweep-fill:var(--color-primary)] inline-flex items-center justify-center min-h-button px-6 border border-primary font-medium text-primary hover:text-on-photo",
    current: secondary,
  },
  link: {
    light: "link-beam inline-block py-3 font-semibold text-accent",
    dark: "link-beam inline-block py-3 font-semibold text-on-photo",
    pink: "link-beam inline-block py-3 font-semibold text-pink",
    current: "link-beam inline-block py-3 font-semibold text-current",
  },
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  /** A page that isn't built yet keeps its look but isn't clickable. */
  live?: boolean;
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "link", tone = "light", live = true, external = false, className = "" }: Props) {
  const classes = `${base} ${styles[variant][tone]} ${className}`;

  if (!live) {
    return (
      <span className={`${classes} cursor-default`} aria-disabled="true" title="Coming soon">
        {children}
      </span>
    );
  }
  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
