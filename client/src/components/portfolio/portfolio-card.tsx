"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface CardProps {
  title: string;
  metric: string;
  tags: string[];
  slug: string;
  imageUrl: string;
  description?: string;
  status?: string;
  liveUrl?: string;
}

export function PortfolioCard({
  title,
  metric,
  tags,
  slug,
  imageUrl,
  description,
  status,
  liveUrl,
}: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-purple-900/30 bg-[#111827]/80 p-5 glass-card-hover transition-all duration-300"
    >
      <div>
        {/* Responsive Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-purple-950/40 border border-purple-900/30">
          <Image
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(max-w-7xl) 100vw, (max-w-1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-purple-600 px-2.5 py-1 text-[10px] font-bold text-white rounded-full shadow-md purple-glow-sm">
            {metric}
          </div>
          {status && (
            <div className="absolute top-3 left-3 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-full backdrop-blur-sm">
              {status}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="mt-4">
          <h3 className="font-heading text-base font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
            {title}
          </h3>

          {description && (
            <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed line-clamp-2">
              {description}
            </p>
          )}

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
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="mt-5 pt-4 border-t border-purple-900/30 flex items-center justify-between gap-3 relative z-10">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/80 border border-purple-500/40 text-purple-200 text-xs font-semibold hover:bg-purple-600 hover:text-white transition-all shadow-sm"
          >
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            <span>View Live Website</span>
          </a>
        ) : (
          <Link
            href={`/portfolio/${slug}`}
            className="inline-flex items-center text-xs font-semibold text-purple-300 hover:text-white transition-colors"
          >
            View Case Study →
          </Link>
        )}

        {slug && liveUrl && (
          <Link
            href={`/portfolio/${slug}`}
            className="text-[11px] font-medium text-zinc-400 hover:text-purple-300 transition-colors"
          >
            Case Study Details →
          </Link>
        )}
      </div>

      {!liveUrl && (
        <Link href={`/portfolio/${slug}`} className="absolute inset-0" aria-label={`Read case study: ${title}`} />
      )}
    </motion.div>
  );
}
