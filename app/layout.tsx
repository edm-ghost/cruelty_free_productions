import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SPECTRA | Premium EDM Ghost Production",
  description:
    "Studio-quality EDM ghost production — fully exclusive tracks delivered in 14 days. Future Bass, Techno, Progressive House, and more. 500+ tracks delivered.",
  keywords: [
    "ghost production",
    "EDM producer",
    "buy beats",
    "music production",
    "future bass",
    "techno",
    "progressive house",
  ],
  openGraph: {
    title: "SPECTRA | Premium EDM Ghost Production",
    description:
      "Studio-quality ghost production for EDM artists. 500+ tracks delivered. 100% exclusive rights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${inter.variable} antialiased bg-[#080808] text-[#f0f0f0]`}
      >
        {children}
      </body>
    </html>
  );
}
