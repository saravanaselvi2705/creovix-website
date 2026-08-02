"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden bg-[#09090b]">
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <Image
                    src="/hero-bg.png"
                    alt="Creovix Hero Background"
                    fill
                    priority
                    unoptimized
                    sizes="100vw"
                    className="object-cover object-center opacity-90"
                />
            </motion.div>
        </div>
    );
}