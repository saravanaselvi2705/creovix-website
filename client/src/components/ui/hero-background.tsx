"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/hero/hero-1.png",
  "/hero/hero-2.png",
  "/hero/hero-3.webp",
  "/hero/hero-4.webp",
];

export default function HeroBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: 0.65,
            scale: 1.05,
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.8, ease: "easeInOut" },
            scale: { duration: 6, ease: "linear" },
          }}
        >
          <Image
            src={images[index]}
            alt="Creovix Portfolio Preview"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-top opacity-80"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
