"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface SectionCarouselProps {
  children: React.ReactNode[];
  autoplayDelay?: number;
  className?: string;
  slideClassName?: string;
}

export function SectionCarousel({
  children,
  autoplayDelay = 4000,
  className = "",
  slideClassName = "flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 pl-4",
}: SectionCarouselProps) {
  const [autoplay] = useState(() =>
    Autoplay({ delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
    },
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Viewport */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex -ml-4">
          {children.map((child, idx) => (
            <div key={idx} className={slideClassName}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="h-full"
              >
                {child}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls Bar */}
      <div className="mt-8 flex items-center justify-between">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-8 bg-purple-500 shadow-md shadow-purple-500/50"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#111116] text-zinc-300 hover:border-purple-500/50 hover:bg-purple-600 hover:text-white transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#111116] text-zinc-300 hover:border-purple-500/50 hover:bg-purple-600 hover:text-white transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
