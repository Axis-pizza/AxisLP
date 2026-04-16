"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const VsRow = ({
  good,
  text,
}: {
  good: boolean;
  text: string;
}) => (
  <div className="flex items-center gap-2 py-2 border-b border-white/5 last:border-b-0">
    {good ? (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#D97706]" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" />
        <path d="M3.5 7l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ) : (
      <svg className="w-3.5 h-3.5 shrink-0 text-white/20" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" />
        <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )}
    <span className={`text-xs font-mono leading-relaxed ${good ? "text-white/70" : "text-white/25"}`}>
      {text}
    </span>
  </div>
);

export default function WhyAxis() {
  return (
    <section className="relative z-10 py-32 sm:py-40 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal text-white leading-[0.95] tracking-tight">
            Why{" "}
            <span className="text-gold-gradient">Axis</span>
          </h2>
        </motion.div>

        {/* Top two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">

          {/* Card 1 — For Investors */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="py-10 md:py-12 md:pr-12 border-b md:border-b-0 md:border-r border-white/10"
          >
            
            <h3 className="text-3xl sm:text-4xl font-normal text-white mb-4 leading-tight">
              No hidden{" "}
              <span className="text-gold-gradient italic">slippage tax</span>
            </h3>
            <p className="text-white/40 text-sm font-mono leading-relaxed mb-6">
              Most index protocols route rebalances through external DEXs — where MEV bots
              capture the spread. Axis internalizes it. Our PropAMM batches orders every 10
              slots, so the price you see is the price you get.
            </p>
            <div className="flex gap-6">
              <div className="flex-1">
                <p className="text-[10px] tracking-widest uppercase text-white/25 mb-2">Others</p>
                <VsRow good={false} text="MEV lost to external bots" />
                <VsRow good={false} text="Slippage unpredictable" />
              </div>
              <div className="w-px bg-white/10 self-stretch" />
              <div className="flex-1">
                <p className="text-[10px] tracking-widest uppercase text-[#D97706] mb-2">Axis</p>
                <VsRow good={true} text="MEV flows back to LPs" />
                <VsRow good={true} text="~2x lower slippage vs G3M" />
              </div>
            </div>
          </motion.div>

          {/* Card 2 — For Creators */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="py-10 md:py-12 md:pl-12 border-b border-white/10"
          >
            <h3 className="text-3xl sm:text-4xl font-normal text-white mb-4 leading-tight">
              Launch an ETF{" "}
              <span className="text-gold-gradient italic">in 1 minutes</span>
            </h3>
            <p className="text-white/40 text-sm font-mono leading-relaxed mb-8">
              No applications, no gatekeepers, no dev team. Define weights, pick a name, go
              live. Axis is the pump.fun moment for on-chain funds — permissionless by design,
              narrative-native by default.
            </p>
            <div className="flex gap-10">
              <div>
                <p className="text-4xl sm:text-5xl font-normal text-gold-gradient leading-none tracking-tight mb-1">
                  2K+
                </p>
                <p className="text-[11px] font-mono tracking-wider uppercase text-white/35">
                  ETFs on devnet
                </p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-normal text-gold-gradient leading-none tracking-tight mb-1">
                  350+
                </p>
                <p className="text-[11px] font-mono tracking-wider uppercase text-white/35">
                  Organic users
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width bottom card */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="py-10 md:py-14 border-b border-white/10"
        >
          <div className="md:flex md:items-start md:gap-16">
            <h3 className="text-3xl sm:text-4xl font-normal text-white mb-4 md:mb-0 leading-tight md:w-2/5 shrink-0">
              Rebalancing that runs{" "}
              <span className="text-gold-gradient italic">inside the protocol</span>
              {" "}— not through it
            </h3>
            <p className="text-white/40 text-sm font-mono leading-relaxed">
              Every rebalance executes via our PFDA-3 batch auction at fixed ~38K compute
              units. No external routing, no oracle dependency at execution time. Solana-native,
              O(1) clearance, deterministic settlement. This isn't a wrapper over existing
              DEXs — it's a new execution layer built specifically for basket assets.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
