"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { HeroParticles } from "./HeroParticles";

interface HeroBackgroundProps {
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
}

export function HeroBackground({ mouseX, mouseY }: HeroBackgroundProps) {
  // Optional mouse shift for ambient glow
  const glowX = useTransform(mouseX || new MotionValue(0), [-0.5, 0.5], [-30, 30]);
  const glowY = useTransform(mouseY || new MotionValue(0), [-0.5, 0.5], [-20, 20]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#09090b] pointer-events-none select-none">
      {/* 1. Base Dark Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#120a21] via-[#09090b] to-[#040406]" />

      {/* 2. Animated Purple Ambient Glow Blobs */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] sm:w-[900px] sm:h-[600px] bg-gradient-to-tr from-purple-700/30 via-indigo-600/20 to-purple-500/25 blur-[140px] rounded-full pointer-events-none z-0"
      />

      {/* Secondary Soft Ambient Blob */}
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[400px] bg-purple-900/20 blur-[130px] rounded-full pointer-events-none z-0"
      />

      {/* 3. Subtle Tech Grid Pattern with Radial Mask */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.18]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 80%)",
        }}
      />

      {/* 4. Fine Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.035] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* 5. Moving Ambient Particles */}
      <HeroParticles />

      {/* 6. Subtle Edge Vignette Fade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-[#09090b]" />
    </div>
  );
}
