"use client";

import React from "react";
import { Github, FileText } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 relative z-10 px-6 border-t border-white/[0.04] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <img src="/logo.png" alt="Axis" className="h-8 w-auto opacity-60" />
          <div className="flex gap-5">
            <a href="https://x.com/Axis_pizza" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-[#D97706] transition-colors">
              <XIcon className="w-4 h-4" />
            </a>
            <a href="https://github.com/Axis-pizza/Axis_MVP" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-[#D97706] transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://muse-7.gitbook.io/axis/product-docs" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-[#D97706] transition-colors">
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/[0.04]">
          <div className="flex flex-wrap justify-center gap-5 text-[11px] text-white/20 font-medium">
            <a href="/privacy" className="hover:text-[#D97706] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[#D97706] transition-colors">Terms</a>
            <a href="/license" className="hover:text-[#D97706] transition-colors">License</a>
            <a href="/copyright" className="hover:text-[#D97706] transition-colors">Copyright</a>
          </div>
          <p className="text-[11px] text-white/15 font-mono">&copy; 2026 Axis</p>
        </div>
      </div>
    </footer>
  );
}
