import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Creovix Stack | Premium Custom Web Development & Software Testing Agency",
  description: "We build fast, bespoke Next.js & MERN web applications, premium custom WordPress sites, automated software testing pipelines, and data-driven local SEO campaigns.",
  keywords: ["Next.js 15", "MERN Stack", "Custom Web Development", "Software Testing", "Local SEO", "WordPress Agency"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
