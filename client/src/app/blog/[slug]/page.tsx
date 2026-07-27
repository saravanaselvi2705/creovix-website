import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPostData {
  title: string;
  category: string;
  date: string;
  readTime: string;
  contentHtml: React.ReactNode;
}

const postsMap: Record<string, BlogPostData> = {
  "swapping-builders-for-nextjs": {
    title: "Why We Swapped Web Builders for Next.js 15 Static Generation",
    category: "Web Engineering",
    date: "July 12, 2026",
    readTime: "5 min read",
    contentHtml: (
      <div className="flex flex-col gap-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
        <p>
          Visual page builders (like Elementor, Divi, or Wix) have made website creation accessible to many. However, they come with a significant cost: code bloat. Visual builders typically wrap simple layout elements in heavy nested div trees and load large CSS/JS packages on page render, slowing down load speeds.
        </p>
        <h3 className="font-heading text-base font-bold text-white mt-4">The Performance Cost of Builders</h3>
        <p>
          When a browser requests a page built with a traditional visual builder, it must download and parse megabytes of redundant styles and scripting files before rendering the layout. This delay directly impacts your page speed metrics, lowering visitor conversion rates and search rankings.
        </p>
        <h3 className="font-heading text-base font-bold text-white mt-4">The Next.js 15 Alternative</h3>
        <p>
          Next.js 15 resolves these performance issues by compiling code during build steps (Static Site Generation). When a visitor requests a page, the edge CDN delivers a pre-compiled HTML file, loading the layout in under 1 second.
        </p>
        <div className="rounded-xl border border-purple-500/30 bg-[#111827] p-4 font-mono text-xs text-purple-300">
          {`// Next.js static data fetching example
export async function getStaticProps() {
  const res = await fetch('https://api.creovixstack.com/projects');
  const projects = await res.json();
  return { props: { projects } };
}`}
        </div>
        <p>
          By migrating to Next.js, Creovix Stack clients see their page loading times drop below 1.2 seconds, resulting in vastly superior search visibility and increased lead conversions.
        </p>
      </div>
    ),
  },
  "local-business-seo-checklist": {
    title: "The Local Business SEO Audit Checklist for 2026",
    category: "Search SEO",
    date: "July 08, 2026",
    readTime: "7 min read",
    contentHtml: (
      <div className="flex flex-col gap-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
        <p>
          Local search optimization is one of the most effective ways for businesses to connect with nearby customers. This guide details how to tune your website code and local listings for search results.
        </p>
        <h3 className="font-heading text-base font-bold text-white mt-4">1. Technical Schema Markup (JSON-LD)</h3>
        <p>
          Search engines use structured data to identify your business hours, locations, and services. Injecting JSON-LD script blocks directly into page headers makes this information clear to crawlers.
        </p>
        <div className="rounded-xl border border-purple-500/30 bg-[#111827] p-4 font-mono text-xs text-purple-300">
          {`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Creovix Stack Client",
  "telephone": "+918123456789",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Main Business St",
    "addressLocality": "Coimbatore"
  }
}
</script>`}
        </div>
        <h3 className="font-heading text-base font-bold text-white mt-4">2. Google Business Profile Optimization</h3>
        <p>
          Ensure your Business Profile details match your website exactly. Keep phone numbers, address layouts, and trading hours consistent to build trust with search engines.
        </p>
        <h3 className="font-heading text-base font-bold text-white mt-4">3. Core Web Vitals Speed Tuning</h3>
        <p>
          Google prioritizes mobile speed when ranking local sites. Optimizing images, minifying scripts, and utilizing caching plans are critical steps to improve search placement.
        </p>
      </div>
    ),
  },
  "manual-vs-automated-testing-strategy": {
    title: "Manual vs Automated Software Testing: A Balanced QA Strategy",
    category: "Quality Assurance",
    date: "June 28, 2026",
    readTime: "6 min read",
    contentHtml: (
      <div className="flex flex-col gap-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
        <p>
          A common mistake product managers make is relying entirely on manual QA testing or trying to automate every single flow. Both approaches have limitations. A balanced QA strategy combines the strengths of both.
        </p>
        <h3 className="font-heading text-base font-bold text-white mt-4">When to Use Automated Testing</h3>
        <p>
          Automation excels at verifying repetitive, high-volume tasks. Automated regressions ensure checkout forms, authentication flows, and API responses function correctly after code updates.
        </p>
        <div className="rounded-xl border border-purple-500/30 bg-[#111827] p-4 font-mono text-xs text-purple-300">
          {`// Playwright test configuration example
import { test, expect } from '@playwright/test';

test('Lead Form Submission Test', async ({ page }) => {
  await page.goto('http://localhost:3000/contact');
  await page.fill('input[name="name"]', 'Sarah');
  await page.click('button[type="submit"]');
  await expect(page.locator('.success-msg')).toBeVisible();
});`}
        </div>
        <h3 className="font-heading text-base font-bold text-white mt-4">When to Use Manual Testing</h3>
        <p>
          Manual testing is crucial for evaluating visual design, UI layouts, navigation flows, and usability across different device sizes.
        </p>
      </div>
    ),
  },
  "securing-mern-stack-api-rules": {
    title: "Securing MERN Stack Apps: Essential API Validation Rules",
    category: "Web Engineering",
    date: "June 15, 2026",
    readTime: "8 min read",
    contentHtml: (
      <div className="flex flex-col gap-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
        <p>
          Building a MERN stack application requires careful attention to security. This guide outlines key security rules to protect your backend API endpoints.
        </p>
        <h3 className="font-heading text-base font-bold text-white mt-4">1. Validate Inputs Using Zod</h3>
        <p>
          Always validate client data before database insertion. Zod allows you to define type-safe schemas that reject invalid inputs, protecting your backend.
        </p>
        <div className="rounded-xl border border-purple-500/30 bg-[#111827] p-4 font-mono text-xs text-purple-300">
          {`import { z } from 'zod';

const LeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectDetails: z.string().min(20)
});`}
        </div>
        <h3 className="font-heading text-base font-bold text-white mt-4">2. Store JWT Credentials in HttpOnly Cookies</h3>
        <p>
          Avoid storing tokens in local storage, which is vulnerable to XSS attacks. Store JWT credentials in HttpOnly, secure cookies.
        </p>
      </div>
    ),
  },
};

export async function generateStaticParams() {
  return [
    { slug: "swapping-builders-for-nextjs" },
    { slug: "local-business-seo-checklist" },
    { slug: "manual-vs-automated-testing-strategy" },
    { slug: "securing-mern-stack-api-rules" },
  ];
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = postsMap[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#06060A] text-white flex flex-col justify-between selection:bg-purple-600/30 selection:text-purple-300">
      <Header />

      <main className="flex-grow py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tech Articles
          </Link>

          <div className="border-b border-purple-900/30 pb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl font-extrabold text-white mt-3 leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-xs text-purple-300 font-semibold uppercase">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-purple-400" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-purple-400" /> {post.readTime}
              </span>
            </div>
          </div>

          <article className="mt-12">
            {post.contentHtml}
          </article>

          <div className="mt-16 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-[#111827] via-[#1E1B4B] to-[#111827] p-8 text-center purple-glow-sm">
            <h3 className="font-heading text-xl font-bold text-white">
              Need Custom Software Engineered?
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-xs sm:text-sm text-gray-300 font-light">
              Schedule a discovery call with Creovix Stack.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/contact">
                <Button variant="primary" size="md" className="gap-2 font-semibold">
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
