import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Wordmark } from "@/components/Logo";
import { business, comingSoon } from "@/content/site";

export const metadata: Metadata = {
  title: `Coming soon | ${business.name}`,
  robots: { index: false, follow: false },
  alternates: { canonical: "/coming-soon" },
};

export default function ComingSoon() {
  return (
    <main className="relative isolate flex min-h-svh flex-col overflow-hidden bg-photo-fallback px-gutter py-10 text-on-photo">
      <Image src={comingSoon.image.src} alt={comingSoon.image.alt} fill preload sizes="100vw" className="-z-20 animate-hero-zoom object-cover" />
      <div className="absolute inset-0 -z-10 bg-(image:--scrim-cta)" aria-hidden="true" />
      <Wordmark tone="dark" />
      <div className="my-auto flex max-w-copy flex-col gap-5 py-16">
        <p className="font-display text-label font-medium uppercase">{comingSoon.label}</p>
        <h1 className="font-display text-display-xl font-normal uppercase">{comingSoon.title}</h1>
        <p className="font-display text-card-title font-medium uppercase">{comingSoon.date}</p>
        <p className="text-body">{comingSoon.body}</p>
        <Button href={business.instagram} external tone="dark" className="self-start">
          Instagram {business.instagramHandle}
        </Button>
      </div>
      <p className="font-display text-label font-medium uppercase text-on-photo-muted">{business.tagline}</p>
    </main>
  );
}
