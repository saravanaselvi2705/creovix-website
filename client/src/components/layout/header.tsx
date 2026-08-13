"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Instagram, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { useContactModal } from "@/components/ui/contact-modal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Who We Are", href: "#who-we-are" },
    { name: "Featured Projects", href: "#featured-projects" },
    { name: "StackPilot", href: "#stackpilot" },
    { name: "Industries", href: "#industries" },
    { name: "Why Us", href: "#why-us" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-white/10 bg-[#09090b]/90 backdrop-blur-md py-3"
          : "bg-[#09090b] py-4 border-b border-white/5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#121217] p-1 border border-white/10 group-hover:border-purple-500/50 transition-all overflow-hidden">
            <Image
              src="/logo.png"
              alt="Creovix Stack Logo"
              width={32}
              height={32}
              className="object-contain filter drop-shadow"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
              Creovix<span className="text-purple-400"> Stack</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links with subtle hover underline */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-zinc-300">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative py-1 hover:text-white transition-colors group"
            >
              <span>{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Right Side: WhatsApp + Instagram + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/918075995734"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/30 rounded-lg border border-emerald-500/20 transition-all"
            title="Chat on WhatsApp (+91 8075995734)"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>

          <a
            href="https://www.instagram.com/creovix.stack"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-all"
            title="Follow us on Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>

          <button
            onClick={() => openModal("Book Discovery Call")}
            className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-2 text-xs font-semibold text-white hover:bg-purple-500 transition-all shadow-md shadow-purple-900/40 hover:shadow-purple-700/50"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden p-2 text-zinc-300 hover:text-white rounded-lg border border-white/10 bg-[#121217]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#09090b] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-zinc-300">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-1 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://wa.me/918075995734"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-950/30 py-2.5 text-xs font-semibold text-emerald-300"
            >
              <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
              <span>WhatsApp (+91 8075995734)</span>
            </a>

            <a
              href="https://www.instagram.com/creovix.stack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#121217] py-2.5 text-xs font-semibold text-zinc-300"
            >
              <Instagram className="h-4 w-4 text-purple-400" />
              <span>@creovix.stack</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                openModal("Get Free Consultation");
              }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-purple-500 transition-all"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

