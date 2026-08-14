import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creovix Stack | B2B Full-Stack Software Studio & AI Automation",
  description: "Creovix Stack builds high-ROI web applications, SaaS platforms, enterprise CRMs, and automated workflow systems designed for business outcome acceleration and lead generation.",
  keywords: ["Creovix Stack", "B2B Software Studio", "Full-Stack Development", "SaaS Platforms", "CRM Systems", "React", "TypeScript", "Node.js", "Next.js", "AI Automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-[#09090b] text-zinc-100 selection:bg-purple-900/50 selection:text-purple-200">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
