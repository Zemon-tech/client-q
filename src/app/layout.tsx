import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  // Include light to extra-bold to match headings that use font-light/medium/bold
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Confidence Collection — Confidence Coaching, Interviews, Communication, Workshops",
  description:
    "Personalized coaching and workshops by Confidence Collection. Master interview prep, communication, public speaking, and personal branding. Programs for students, professionals, and institutions.",
  openGraph: {
    title:
      "Confidence Collection — Confidence Coaching, Interviews, Communication, Workshops",
    description:
      "Personalized coaching and workshops by Confidence Collection. Master interview prep, communication, public speaking, and personal branding. Programs for students, professionals, and institutions.",
    images: [
      {
        url: "/og-placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Confidence Collection",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased min-h-screen flex flex-col`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
