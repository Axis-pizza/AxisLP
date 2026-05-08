"use client";

import { motion, Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/* Per-character ink-bleed reveal                                              */
/* -------------------------------------------------------------------------- */
const lineVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.028 },
  },
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function InkLine({
  text,
  delay = 0,
  className,
  charClassName,
}: {
  text: string;
  delay?: number;
  className?: string;
  charClassName?: string;
}) {
  return (
    <motion.span
      aria-label={text}
      className={className}
      variants={lineVariants}
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: delay, staggerChildren: 0.028 }}
    >
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          aria-hidden
          variants={charVariants}
          className={`inline-block ${charClassName ?? ""}`}
          style={{ whiteSpace: "pre" }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO SECTION — Text-focused Old-world painted-canvas treatment             */
/* -------------------------------------------------------------------------- */
export default function Hero() {
  // Total time the headline takes to type in: delay + (chars × stagger) + char duration tail
  const HEADLINE_LEAD_DELAY = 0.9; // wait for the loading bar to draw in
  const LINE_1 = "You have a thesis,";
  const LINE_2 = "So why don’t you have a token for it?";
  const LINE_2_DELAY =
    HEADLINE_LEAD_DELAY + LINE_1.length * 0.028 + 0.15;
  const SUBTITLE_DELAY =
    LINE_2_DELAY + LINE_2.length * 0.028 + 0.25;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* ── Painted-canvas backdrop ─────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 35%, rgba(199,125,54,0.22), transparent 70%), radial-gradient(ellipse 60% 50% at 50% 90%, rgba(107,55,22,0.25), transparent 70%), linear-gradient(180deg, #050302 0%, #020201 100%)",
          }}
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="paperGrain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.78  0 0 0 0 0.49  0 0 0 0 0.21  0 0 0 0.6 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#paperGrain)" />
        </svg>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 45%, transparent 30%, rgba(0,0,0,0.55) 80%, rgba(0,0,0,0.85) 100%)",
          }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        {/* Loading bar — thin gilded line that draws in first */}
        <motion.div
          aria-hidden
          className="relative h-px overflow-hidden mb-12 w-32 sm:w-48"
        >
          <motion.div
            initial={{ scaleX: 0, opacity: 0.9 }}
            animate={{ scaleX: 1, opacity: [0.9, 1, 0.45] }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              opacity: { duration: 1.4, times: [0, 0.6, 1] },
            }}
            className="origin-left h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(244,223,190,0.8) 30%, rgba(199,125,54,0.9) 65%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* Headline — letter-by-letter ink reveal */}
        <h1
          className="font-serif font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.05] tracking-[-0.025em] text-white"
          style={{
            textShadow:
              "0 1px 0 rgba(255,255,255,0.10), 0 0 40px rgba(255,255,255,0.08)",
          }}
        >
          <InkLine
            text={LINE_1}
            delay={HEADLINE_LEAD_DELAY}
            className="block"
          />
          <InkLine
            text={LINE_2}
            delay={LINE_2_DELAY}
            className="block mt-4 text-white/90"
          />
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: SUBTITLE_DELAY,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 font-serif text-xl sm:text-2xl md:text-3xl text-white/60 tracking-wide max-w-3xl"
        >
          The first onchain index funds — mint your conviction in seconds.
        </motion.p>

        {/* Divider ornament — fades in with subtle ❦ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: SUBTITLE_DELAY + 0.3, duration: 0.9 }}
          className="flex items-center gap-4 my-12 text-white/40 justify-center w-full"
          aria-hidden
        >
          
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: SUBTITLE_DELAY + 0.5,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <a
            href="https://axs.pizza"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-liquid-glass px-10 py-4 text-lg"
          >
            Launch App
          </a>
        </motion.div>
      </div>

      {/* Soft fade into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#020201] pointer-events-none z-10" />
    </section>
  );
}
