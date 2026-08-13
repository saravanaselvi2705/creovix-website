"use client";

import React from "react";

interface TechLogo {
  name: string;
  category: string;
  svg: React.ReactNode;
}

export function HeroLogos() {
  const logos: TechLogo[] = [
    {
      name: "React",
      category: "Frontend Framework",
      svg: (
        <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" opacity="0.3" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      category: "Fullstack Framework",
      svg: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="black" stroke="white" strokeWidth="1.5" />
          <path d="M14.5 9v6M9.5 9v6l5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      category: "Type-Safe Code",
      svg: (
        <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#3178C6" />
          <path d="M11 9H7v2h2v6h2V9zm4 0h-3v2h3v1.5h-3V15h3v2h-5V9h5z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      category: "Backend Engine",
      svg: (
        <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3.5 7v10l8.5 5 8.5-5V7L12 2zm0 2.3l6.5 3.8v7.6L12 19.5 5.5 15.7V8.1L12 4.3z" fill="#5FA04E" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "Design System",
      svg: (
        <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6c-3.3 0-5.5 1.6-6.6 4.9 1.1-1.1 2.4-1.5 3.9-1.1 1.5.4 2.4 1.9 3.1 3.5 1.2 2.7 2.8 4.7 6.6 4.7 3.3 0 5.5-1.6 6.6-4.9-1.1 1.1-2.4 1.5-3.9 1.1-1.5-.4-2.4-1.9-3.1-3.5-1.2-2.7-2.8-4.7-6.6-4.7z" fill="#38BDF8" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      category: "NoSQL Database",
      svg: (
        <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2s-5 6.5-5 11c0 3.3 2.7 6 5 6s5-2.7 5-6c0-4.5-5-11-5-11zm0 15c-1.1 0-2-.9-2-2 0-2 2-5 2-5s2 3 2 5c0 1.1-.9 2-2 2z" fill="#13AA52" />
        </svg>
      ),
    },
    {
      name: "Firebase",
      category: "Cloud Services",
      svg: (
        <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.89 15.672L6.255 2.276a.71.71 0 011.314-.143l2.42 4.673L3.89 15.672zM13.6 7.625l-2.072-3.953a.71.71 0 00-1.264 0l-7.79 14.28 10.985-6.287a.71.71 0 00.141-.04zM20.11 17.952L17.26 3.65a.71.71 0 00-1.297-.22L3.89 15.672l12.782 7.304a1.42 1.42 0 001.408.006l2.03-1.157a1.42 1.42 0 000-2.469z" fill="#FFCA28" />
        </svg>
      ),
    },
    {
      name: "AWS",
      category: "Cloud Infrastructure",
      svg: (
        <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.7 15.2c-1.9 0-3.4-.8-3.4-2.8 0-2.3 2.1-3 4.2-3.1v-.2c0-.7-.4-1.2-1.5-1.2-1 0-2.1.3-2.9.8l-.5-1.4c1-.6 2.4-.9 3.8-.9 2.5 0 3.3 1.3 3.3 3.4v4.5H8.3v-.8c-.5.6-1.1.8-1.6.8zm.3-1.4c.9 0 1.5-.6 1.5-1.5v-.8c-1.4.1-2.7.4-2.7 1.6 0 .7.5 1 1.2 1z" fill="#FF9900" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      category: "Edge Deployment",
      svg: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L24 22H0L12 1z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Stripe",
      category: "Global Payments",
      svg: (
        <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.9 10.3c0-.7-.6-1-1.6-1-1.4 0-3.2.4-4.5 1.1l-.7-2.6c1.5-.7 3.5-1.1 5.3-1.1 3.5 0 5.4 1.7 5.4 4.5 0 4.4-6.1 4.6-6.1 7 0 .8.7 1.1 1.8 1.1 1.7 0 3.6-.6 5-1.3l.7 2.6c-1.6.8-3.7 1.3-5.7 1.3-3.7 0-5.7-1.8-5.7-4.5 0-4.6 6.1-4.8 6.1-7.1z" fill="#635BFF" />
        </svg>
      ),
    },
  ];

  // Quadruple items for infinite smooth marquee
  const marqueeItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden pt-12 pb-6 select-none">
      <div className="text-center mb-6">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400">
          POWERED BY ENTERPRISE-GRADE TECHNOLOGIES
        </p>
      </div>

      {/* Edge Gradient Mask Overlays */}
      <div className="pointer-events-none absolute left-0 top-12 z-20 h-full w-24 sm:w-36 bg-gradient-to-r from-[#09090b] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-12 z-20 h-full w-24 sm:w-36 bg-gradient-to-l from-[#09090b] to-transparent" />

      {/* Continuous Marquee Track */}
      <div className="flex w-max animate-marquee gap-3.5 sm:gap-4 hover:[animation-play-state:paused] py-2">
        {marqueeItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#121218]/80 px-4 sm:px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-950/30 hover:scale-105 shadow-md shrink-0"
          >
            <div className="flex items-center justify-center group-hover:rotate-6 transition-transform">
              {item.svg}
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                {item.name}
              </span>
              <span className="text-[9px] font-mono text-zinc-400 group-hover:text-purple-300 font-light uppercase">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
