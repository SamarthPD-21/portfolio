import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samarth Deshpande | Software Developer",
  description:
    "Samarth Deshpande — Software Developer & CS student at BITS Pilani. Full-stack development, AI/ML, and modern web experiences.",
  keywords:
    "Samarth Deshpande, software developer, full-stack, React, Next.js, AI, BITS Pilani, portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
