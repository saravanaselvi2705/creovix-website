"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { HeroBackground } from "./HeroBackground";
import { HeroLogos } from "./HeroLogos";
import { useContactModal } from "@/components/ui/contact-modal";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { openModal } = useContactModal();

  // Mouse move handler for smooth ambient light parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Variants for staggered entrance animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[85vh] w-full flex flex-col justify-between overflow-hidden bg-[#09090b] text-white pt-28 sm:pt-36 pb-12 sm:pb-16"
    >
      {/* 1. HERO DYNAMIC BACKGROUND WITH SUBTLE GRADIENTS & LIGHTING */}
      <HeroBackground mouseX={mouseX} mouseY={mouseY} />

      {/* MAIN CONTAINER */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 w-full flex flex-col items-center justify-between flex-grow">
        {/* 2. TOP HERO HEADER SECTION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8 my-auto"
        >
          {/* Small Pill Badge */}
          <motion.div variants={itemFadeUp} className="inline-flex justify-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-purple-500/30 bg-[#121218]/90 px-4 py-1.5 text-xs text-zinc-200 backdrop-blur-xl shadow-lg shadow-purple-950/40 hover:border-purple-500/60 transition-colors">
              <Image
                src="/logo.png"
                alt="Creovix Stack Logo"
                width={18}
                height={18}
                className="object-contain"
              />
              <span className="font-semibold text-purple-300">Creovix Stack</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300 font-light">Digital Solutions That Scale</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemFadeUp}
            className="font-heading text-3.5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] max-w-5xl mx-auto"
          >
            Transforming Business Ideas into{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-sm">
              Powerful Digital Solutions
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemFadeUp}
            className="text-sm sm:text-base md:text-lg text-zinc-300/90 max-w-3xl mx-auto font-light leading-relaxed px-2"
          >
            We build modern websites, SaaS platforms, CRM systems, and custom web applications that turn business ideas into scalable digital products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemFadeUp}
            className="pt-4 flex flex-wrap justify-center items-center gap-4"
          >
            <a
              href="#featured-projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 shadow-xl shadow-purple-950/60 hover:shadow-purple-700/60 hover:scale-105"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={() => openModal("Start Your Project")}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#121218]/80 px-7 py-3.5 text-xs sm:text-sm font-semibold text-zinc-200 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#181824] hover:text-white"
            >
              <span>Start Your Project</span>
            </button>
          </motion.div>
        </motion.div>

        {/* 3. BOTTOM TRUSTED TECHNOLOGY LOGOS MARQUEE */}
        <div className="w-full mt-12 sm:mt-16 pt-8 border-t border-white/5">
          <HeroLogos />
        </div>
      </div>
    </section>
  );
}


