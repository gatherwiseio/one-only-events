import Link from "next/link";
import { business } from "@/content/site";

type Tone = "light" | "ink" | "dark" | "panel";

const toneClass: Record<Tone, string> = {
  light: "text-brand",
  ink: "text-ink",
  dark: "text-on-photo",
  panel: "text-on-panel",
};

/** The ONE & ONLY wordmark (vector), with the business name kept as real text for screen readers. */
export function Wordmark({ tone = "light" }: { tone?: Tone }) {
  return (
    <span translate="no" className={toneClass[tone]}>
      <span className="wordmark" aria-hidden="true" />
      <span className="sr-only">{business.name}</span>
    </span>
  );
}

export function Logo({ tone = "light" }: { tone?: Tone }) {
  return (
    <Link href="/" className="inline-flex min-h-tap items-center">
      <Wordmark tone={tone} />
      <span className="sr-only">, home</span>
    </Link>
  );
}
