"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  metric: string;
  tags: string[];
  slug: string;
  imageUrl: string;
}

export function PortfolioCard({ title, metric, tags, slug, imageUrl }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-xl border border-purple-900/30 bg-[#111827]/80 p-4 glass-card-hover"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-purple-950/40 border border-purple-900/30">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-w-7xl) 100vw, (max-w-1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-purple-600 px-2.5 py-1 text-[10px] font-bold text-white rounded-full shadow-md purple-glow-sm">
          {metric}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-heading text-base font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] uppercase tracking-wider text-purple-200 bg-purple-950/60 border border-purple-500/20 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/portfolio/${slug}`} className="absolute inset-0" aria-label={`Read case study: ${title}`} />
      </div>
    </motion.div>
  );
}
