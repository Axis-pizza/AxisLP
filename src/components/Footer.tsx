"use client";

import React from "react";
import { Github, FileText } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 relative z-10 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-serif font-normal mb-8 tracking-tighter text-white/80">
        <img src="/logo.svg" alt="Axis" className="h-20 w-auto" />
        </h2>
        <div className="flex gap-8 md:gap-12 mb-12">
          <a
            href="https://x.com/Axis_pizza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-[#D97706] transition-all hover:scale-110"
          >
            <XIcon className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://github.com/Axis-pizza/Axis_MVP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-[#D97706] transition-all hover:scale-110"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://muse-7.gitbook.io/axis/product-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-[#D97706] transition-all hover:scale-110"
          >
            <FileText className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 text-[10px] md:text-xs uppercase tracking-widest font-bold text-white/30">
          <a
            href="/privacy"
            className="hover:text-[#D97706] transition-colors"
          >
            Privacy
          </a>
          <a href="/terms" className="hover:text-[#D97706] transition-colors">
            Terms
          </a>
          <a
            href="/license"
            className="hover:text-[#D97706] transition-colors"
          >
            License
          </a>
          <a
            href="/copyright"
            className="hover:text-[#D97706] transition-colors"
          >
            Copyright
          </a>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 opacity-30 text-[10px] uppercase tracking-widest font-bold text-center md:text-left border-t border-white/5 pt-8 mt-4">
          <p className="font-mono">&copy; 2026 AXIS</p>
          <p>Built for the Sovereign Individual</p>
        </div>
      </div>
    </footer>
  );
}
