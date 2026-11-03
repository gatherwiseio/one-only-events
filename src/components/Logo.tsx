import Link from "next/link";
import { business } from "@/content/site";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link
      href="/"
      translate="no"
      className={`inline-flex min-h-tap items-center font-display text-wordmark font-medium uppercase ${tone === "dark" ? "text-on-photo" : "text-ink"}`}
    >
      {business.shortName}
      <span className="sr-only"> Events, home</span>
    </Link>
  );
}
