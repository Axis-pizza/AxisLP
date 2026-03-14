"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-[#FCD34D]" />,
    title: "One-Click Diversification",
    desc: "Mint an index token and get exposure to an entire strategy in a single transaction. No manual swaps across multiple DEXs.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#FCD34D]" />,
    title: "Fully Permissionless",
    desc: "Anyone can create and launch an index fund onchain. No gatekeepers, no applications — define your weights and go live instantly.",
  },
  {
    icon: <ArrowRight className="w-6 h-6 text-[#FCD34D]" />,
    title: "Automatic Rebalancing",
    desc: "Set your rules once and the protocol handles the rest. Built on Solana for the speed and low costs that frequent rebalancing demands.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function WhyAxis() {
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 bg-black/60 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
          Why <span className="text-gold-gradient italic">Axis</span>?
        </h2>
        <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
          Index funds changed traditional finance. Axis brings that same power
          onchain — permissionless, automated, and built on Solana.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="card-glass p-8 flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#D97706]/10 border border-[#D97706]/20 flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-serif font-bold text-white">
              {feature.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
