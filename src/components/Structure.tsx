"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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

type Pillar = {
  index: string;
  title: string;
  program: string;
  tagline: string;
};

const PILLARS: Pillar[] = [
  {
    index: "01",
    title: "Vault",
    program: "axis-vault",
    tagline: "Holds the basket. Mints the ETF.",
  },
  {
    index: "02",
    title: "Auction",
    program: "pfda-amm-3",
    tagline: "Clears every batch at one fair price.",
  },
  {
    index: "03",
    title: "Reference",
    program: "axis-g3m",
    tagline: "The continuous-time baseline we beat.",
  },
];

export default function Structure() {
  return (
    <section
      id="structure"
      className="relative z-10 py-32 sm:py-40 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white leading-[0.95] tracking-tight mb-16"
        >
          Three programs.
        </motion.h2>

        {/* Typographic spec-sheet rows */}
        <div className="border-t border-white/10">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.program}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="group grid grid-cols-12 gap-4 sm:gap-8 items-center py-10 sm:py-14 border-b border-white/10 transition-colors hover:bg-[#C77D36]/[0.02]"
            >
              {/* Big index */}
              <div className="col-span-2 sm:col-span-2">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gold-gradient leading-none block">
                  {p.index}
                </span>
              </div>

              {/* Title + program code */}
              <div className="col-span-10 sm:col-span-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-white leading-tight mb-2">
                  {p.title}
                </h3>
                <code className="text-[#C77D36]/80 text-xs sm:text-sm font-mono tracking-wide">
                  {p.program}
                </code>
              </div>

              {/* Tagline */}
              <div className="col-span-12 sm:col-span-6 sm:text-right">
                <p className="text-white/55 text-base sm:text-lg font-serif italic leading-relaxed">
                  {p.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
