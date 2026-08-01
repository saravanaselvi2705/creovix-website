"use client";

import React from "react";

interface MarqueeItem {
  name: string;
  category: string;
}

interface InfiniteMarqueeProps {
  items: MarqueeItem[];
}

export function InfiniteMarquee({ items }: InfiniteMarqueeProps) {
  // Duplicate array 4 times for seamless continuous marquee loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Gradient Mask Fades on Edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#08080c] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#08080c] to-transparent" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#111116] px-5 py-2.5 text-xs font-semibold text-zinc-300 hover:border-purple-500/50 hover:bg-purple-950/30 hover:text-white transition-all shadow-sm shrink-0"
          >
            <span className="h-2 w-2 rounded-full bg-purple-400 shadow-sm shadow-purple-500/50" />
            <span className="text-white font-medium">{item.name}</span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase font-normal">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
