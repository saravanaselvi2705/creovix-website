"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
    "/hero/hero-1.webp",
    "/hero/hero-2.webp",
    "/hero/hero-3.webp",
    "/hero/hero-4.webp",
    "/hero/hero-5.webp",
    "/hero/hero-6.webp",
];

export default function HeroBackground() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                        opacity: 1,
                        scale: 1.08,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 1.2 },
                        scale: { duration: 5, ease: "linear" },
                    }}
                >
                    <Image
                        src={images[index]}
                        alt="Creovix Hero"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}