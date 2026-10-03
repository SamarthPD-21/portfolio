import type { Metadata, Viewport } from "next";
import { Lato, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Self-hosted at build time: no render-blocking request to Google on first load.
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Samarth Deshpande | Software Developer",
  description:
    "Samarth Deshpande — Software Developer & CS student at BITS Pilani. Full-stack development, AI/ML, and modern web experiences.",
  keywords:
    "Samarth Deshpande, software developer, full-stack, React, Next.js, AI, BITS Pilani, portfolio",
  openGraph: {
    title: "Samarth Deshpande | Software Developer",
    description:
      "Full-stack apps, AI-powered tools & modern web experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1c2e57",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Hero illustrations and the heading font live on this origin */}
        <link rel="preconnect" href="https://code-master.be" crossOrigin="" />
        <link
          rel="preload"
          href="https://code-master.be/fonts/Bushcraft.otf"
          as="font"
          type="font/otf"
          crossOrigin=""
        />
        {/* Scroll-reveal content is hidden until JS runs; show it without JS */}
        <noscript>
          <style>{`[class*="anim-"],[class*="animation--"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
