"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, MessageSquare, ArrowUpRight, Sparkles, X } from "lucide-react";
import Image from "next/image";

export function FloatingSocial() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-72 rounded-xl border border-purple-500/30 bg-[#111827]/95 p-4 shadow-2xl backdrop-blur-xl purple-glow-sm"
          >
            <div className="flex items-center justify-between border-b border-purple-900/40 pb-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/LOgo.png"
                  alt="Creovix Stack Logo"
                  width={24}
                  height={24}
                  className="rounded-full object-contain"
                />
                <span className="font-heading text-xs font-bold text-white tracking-wide">
                  Connect with Creovix
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close social panel"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href="https://www.instagram.com/creovix.stack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-purple-500/20 bg-purple-950/30 p-2.5 text-xs text-purple-200 hover:bg-purple-900/40 hover:border-purple-400 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-purple-600 via-pink-600 to-yellow-500 text-white shadow-md">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Instagram</p>
                    <p className="text-[10px] text-gray-400">@creovix.stack</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://stackpilot-ai-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-purple-500/20 bg-purple-950/30 p-2.5 text-xs text-purple-200 hover:bg-purple-900/40 hover:border-purple-400 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-purple-600 text-white shadow-md">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">StackPilot Platform</p>
                    <p className="text-[10px] text-purple-300">Flagship SaaS</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white shadow-lg purple-glow hover:shadow-purple-500/50 transition-all"
        aria-label="Toggle social and links menu"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <div className="relative">
            <Instagram className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-300"></span>
            </span>
          </div>
        )}
      </motion.button>
    </div>
  );
}
