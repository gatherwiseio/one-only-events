import type { Metadata, Viewport } from "next";
import { Lora, Montserrat } from "next/font/google";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { seo } from "@/content/site";
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
  title: seo.title,
  description: seo.description,
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
