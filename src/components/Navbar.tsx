"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "How it Works", id: "how-it-works" },
  { name: "Structure", id: "structure" },
  { name: "Mechanism", id: "mechanism" },
  { name: "Economics", id: "economics" },
  { name: "Roadmap", id: "roadmap" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = "/#" + id;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const goHome = () => {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    } else {
      scrollTo("hero");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-black/10 border-b border-white/5">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <button
          onClick={goHome}
          className="hover:opacity-80 transition-opacity"
        >
          <img src="/logo.svg" alt="Axis" className="h-12 w-auto" />
        </button>

        <div className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-white/50 hover:text-white transition-colors"
            >
              {item.name}
            </button>
          ))}
          <a
            href="/mcp"
            className="text-sm font-medium text-white/50 hover:text-white transition-colors"
          >
            AI Agent
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://axs.pizza"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-liquid-glass !py-2 !px-6 !text-xs"
          >
            Launch App
          </a>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-6 flex flex-col gap-1">
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  className="text-left text-lg font-serif text-white/70 py-3 border-b border-white/5"
                  onClick={() => {
                    scrollTo(item.id);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/mcp"
                className="text-left text-lg font-serif text-white/70 py-3 border-b border-white/5"
              >
                AI Agent
              </a>
              <a
                href="https://axs.pizza"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 btn-liquid-glass self-start"
              >
                Launch App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
