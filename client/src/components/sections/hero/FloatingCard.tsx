"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface FloatingCardData {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  badge?: string;
  desktopPositionClass: string; // Tailored absolute position around the laptop
  floatDelay: number;
  floatDuration: number;
  rotation: number;
}

interface FloatingCardProps {
  card: FloatingCardData;
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
}

export function FloatingCard({ card, mouseX, mouseY }: FloatingCardProps) {
  const Icon = card.icon;

  // Subtle mouse parallax movement per card
  const parallaxX = useTransform(mouseX || new MotionValue(0), [-0.5, 0.5], [-12, 12]);
  const parallaxY = useTransform(mouseY || new MotionValue(0), [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      style={{
        x: parallaxX,
        y: parallaxY,
        rotate: card.rotation,
      }}
      animate={{
        y: [0, -12, 0],
        rotate: [card.rotation, card.rotation + 1.5, card.rotation],
      }}
      transition={{
        duration: card.floatDuration,
        delay: card.floatDelay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`group ${card.desktopPositionClass} z-20 transition-all duration-300 hover:z-40`}
    >
      {/* Ambient Purple Glow on Hover */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/40 to-indigo-600/40 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      {/* Glassmorphic Card Body */}
      <div className="relative flex items-center gap-3.5 rounded-2xl border border-white/10 bg-[#121218]/75 p-3.5 sm:p-4 backdrop-blur-xl shadow-xl shadow-black/50 transition-all duration-300 group-hover:border-purple-500/50 group-hover:bg-[#161622]/90 group-hover:scale-105">
        {/* Icon Container with Purple Glow */}
        <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-950/40 text-purple-300 shadow-inner group-hover:border-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
          <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
        </div>

        {/* Text Details */}
        <div className="flex flex-col pr-1">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
              {card.title}
            </span>
            {card.badge && (
              <span className="rounded-full border border-purple-500/30 bg-purple-950/60 px-2 py-0.5 text-[9px] font-mono font-medium text-purple-300">
                {card.badge}
              </span>
            )}
          </div>
          <span className="text-[11px] font-light text-zinc-400 leading-snug">
            {card.subtitle}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
