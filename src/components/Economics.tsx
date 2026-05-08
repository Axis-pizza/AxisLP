"use client";

import { motion } from "framer-motion";

type Card = {
  metric: string;
  title: string;
  body: string;
};

const CARDS: Card[] = [
  {
    metric: "±5%",
    title: "Oracle bounded",
    body: "Clearing is clamped within a Switchboard corridor. No participant moves the price outside the band.",
  },
  {
    metric: "Jito",
    title: "MEV internalized",
    body: "Searcher bids flow to the protocol treasury — not to validators. The auction redirects extraction.",
  },
  {
    metric: "30 bps",
    title: "Fees locked",
    body: "Hardcoded at creation. No instruction exists to raise them on existing holders.",
  },
  {
    metric: "Safe",
    title: "Inflation-proof",
    body: "MIN_FIRST_DEPOSIT and locked liquidity neutralize the donation attack at the program level.",
  },
];

export default function Economics() {
  return (
    <section id="economics" className="relative z-10 py-32 sm:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white leading-[0.95] tracking-tight mb-20"
        >
          Built to not leak.
        </motion.h2>

        {/* Alternating big-stat rows */}
        <div className="space-y-20 sm:space-y-28">
          {CARDS.map((c, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${
                  reversed ? "md:flex-row-reverse" : "md:flex-row"
                } md:items-center gap-8 sm:gap-12 md:gap-20`}
              >
                {/* Massive metric */}
                <div className="md:flex-1 relative">
                  <p
                    className="font-serif text-gold-gradient leading-[0.85] tracking-tight"
                    style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
                  >
                    {c.metric}
                  </p>
                  {/* Subtle glow under the metric */}
                  <div
                    className="absolute -inset-8 -z-10 blur-3xl opacity-40 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 50% 60% at 50% 60%, rgba(199,125,54,0.45), transparent 70%)",
                    }}
                  />
                </div>

                {/* Title + body */}
                <div className="md:flex-1 max-w-md">
                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-white leading-tight mb-3">
                    {c.title}
                  </h3>
                  <p className="text-white/50 text-sm sm:text-base font-serif leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
