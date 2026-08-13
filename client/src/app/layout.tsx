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
  title: "Creovix Stack | Full-Stack Development & Digital Solutions",
  description: "Creovix Stack builds modern websites, SaaS platforms, CRM systems, business applications, and custom digital solutions using modern full-stack technologies.",
  keywords: ["Creovix Stack", "Full-Stack Development", "SaaS Platforms", "CRM Systems", "React", "TypeScript", "Node.js", "Next.js", "MERN Stack", "Digital Solutions"],
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
