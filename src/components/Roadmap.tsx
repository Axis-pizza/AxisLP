"use client";

import { motion } from "framer-motion";

type Phase = {
  quarter: string;
  title: string;
  body: string;
  active?: boolean;
};

const PHASES: Phase[] = [
  {
    quarter: "Q2 2026",
    title: "Mainnet closed beta",
    body: "Invite-only. First devnet users move to mainnet.",
    active: true,
  },
  {
    quarter: "Q3 2026",
    title: "Public launch",
    body: "Permissionless ETF creation. Mobile and web go live.",
  },
  {
    quarter: "Q4 2026",
    title: "Asset class expansion",
    body: "LSTs, RWAs, and yield-bearing primitives.",
  },
  {
    quarter: "2027",
    title: "Creator economy",
    body: "Creators become asset managers. Capital follows narrative.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative z-10 py-32 sm:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white leading-[0.95] tracking-tight mb-20"
        >
          Roadmap.
        </motion.h2>

        {/* ── Desktop: horizontal timeline ─────────────────────────── */}
        <div className="hidden md:block relative">
          {/* Connector line */}
          <div
            aria-hidden
            className="absolute top-[18px] left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(199,125,54,0.6) 0%, rgba(199,125,54,0.4) 25%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,0.05) 100%)",
            }}
          />

          {/* Animated progress overlay (pulses on the active node) */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[18px] left-0 h-px origin-left"
            style={{
              width: `${100 / PHASES.length / 2}%`,
              background:
                "linear-gradient(90deg, rgba(199,125,54,0.9), rgba(244,223,190,1))",
              boxShadow: "0 0 12px rgba(199,125,54,0.6)",
            }}
          />

          <div className="grid grid-cols-4 gap-8 relative">
            {PHASES.map((p, i) => (
              <motion.div
                key={p.quarter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pt-12"
              >
                {/* Node */}
                <div className="absolute top-0 left-0 flex items-center justify-center">
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center backdrop-blur-sm ${
                      p.active
                        ? "border-[#C77D36] bg-[#C77D36]/15 shadow-[0_0_30px_rgba(199,125,54,0.5)]"
                        : "border-white/15 bg-black/60"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        p.active
                          ? "bg-[#C77D36] animate-pulse"
                          : "bg-white/25"
                      }`}
                    />
                  </div>
                </div>

                <p className="text-[10px] tracking-[0.4em] uppercase text-[#C77D36]/80 font-mono mb-3">
                  {p.quarter}
                </p>
                <h3 className="text-xl lg:text-2xl font-serif font-normal text-white mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-white/50 text-sm font-serif leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical timeline ────────────────────────────── */}
        <div className="md:hidden relative">
          <div
            aria-hidden
            className="absolute left-[14px] top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(180deg, rgba(199,125,54,0.6) 0%, rgba(255,255,255,0.1) 100%)",
            }}
          />
          <div className="space-y-12">
            {PHASES.map((p, i) => (
              <motion.div
                key={p.quarter}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1 flex items-center justify-center">
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center ${
                      p.active
                        ? "border-[#C77D36] bg-[#C77D36]/15 shadow-[0_0_20px_rgba(199,125,54,0.4)]"
                        : "border-white/15 bg-black/60"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        p.active
                          ? "bg-[#C77D36] animate-pulse"
                          : "bg-white/25"
                      }`}
                    />
                  </div>
                </div>

                <p className="text-[10px] tracking-[0.4em] uppercase text-[#C77D36]/80 font-mono mb-2">
                  {p.quarter}
                </p>
                <h3 className="text-2xl font-serif font-normal text-white mb-2 leading-tight">
                  {p.title}
                </h3>
                <p className="text-white/50 text-sm font-serif leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
