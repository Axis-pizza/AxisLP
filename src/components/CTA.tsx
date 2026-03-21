"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 px-6 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D97706]/5 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-white mb-6 leading-tight">
          Ready to build the{" "}
          <span className="text-gold-gradient italic">future of indexing</span>?
        </h2>
        <p className="text-white/50 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Whether you&apos;re an investor looking for exposure or a strategist
          ready to launch your own fund — Axis is built for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://axs.pizza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider border border-[#D97706]/40 text-[#FCD34D] hover:bg-[#D97706]/10 transition-all"
          >
            Launch App
          </a>
          <a
            href="https://muse-7.gitbook.io/axis/product-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all"
          >
            Read the Docs
          </a>
        </div>
      </motion.div>
    </section>
  );
}
