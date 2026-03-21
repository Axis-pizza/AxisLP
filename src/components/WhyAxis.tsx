"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "One-Click Portfolios",
    desc: "Pick a strategy. Deposit SOL. You're done. The protocol handles routing across every token in the basket in a single transaction.",
  },
  {
    number: "02",
    title: "Fully Permissionless",
    desc: "No applications. No gatekeepers. Define your token weights, set a name, and your fund is live onchain for anyone to invest in.",
  },
  {
    number: "03",
    title: "Auto Rebalancing",
    desc: "Set your target allocations once. The protocol rebalances on Solana — fast enough and cheap enough to do it properly.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function WhyAxis() {
  return (
    <section className="relative z-10 py-32 sm:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal text-white leading-[0.95] tracking-tight">
            Why{" "}
            <span className="text-gold-gradient italic">Axis</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="py-10 md:py-12 px-0 md:px-8 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 last:border-b-0"
            >
              <span className="text-[#D97706] text-sm font-mono mb-6 block">
                {feature.number}
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-white mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
