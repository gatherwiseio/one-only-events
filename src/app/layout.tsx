import type { Metadata, Viewport } from "next";
import { Lora, Montserrat } from "next/font/google";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { business, seo } from "@/content/site";
import "lenis/dist/lenis.css";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: seo.shareTitle,
    description: seo.shareDescription,
    siteName: business.name,
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.shareTitle,
    description: seo.shareDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#fffef9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lora.variable} antialiased`}>
      <body className="min-h-full">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
