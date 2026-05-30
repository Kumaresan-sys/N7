import type { Metadata } from "next";
import { Archivo, Chivo_Mono, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/lib/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
  weight: "500",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

import { ScrollAnimations, HeroAnimations } from "@/lib/animations";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${chivoMono.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          <ScrollAnimations />
          <HeroAnimations />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
