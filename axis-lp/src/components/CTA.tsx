"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#D97706]/[0.06] blur-[120px] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-[-0.03em]">
          Start building.
        </h2>
        <p className="text-white/40 text-base mb-8 max-w-md mx-auto">
          Whether you&apos;re investing or creating — Axis is permissionless and live on Solana.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://axs.pizza"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Launch App
          </a>
          <a
            href="https://muse-7.gitbook.io/axis/product-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Read Docs
          </a>
        </div>
      </motion.div>
    </section>
  );
}
