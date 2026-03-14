"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck } from "lucide-react";

const AuctionCycleAnimation = () => {
  const [phase, setPhase] = useState<"bid" | "win" | "yield">("bid");

  useEffect(() => {
    const cycle = async () => {
      setPhase("bid");
      await new Promise((r) => setTimeout(r, 3500));
      setPhase("win");
      await new Promise((r) => setTimeout(r, 2000));
      setPhase("yield");
      await new Promise((r) => setTimeout(r, 3500));
      cycle();
    };
    cycle();
  }, []);

  return (
    <div className="card-glass relative w-full h-[380px] sm:h-[480px] md:h-[500px] flex flex-col items-center justify-center p-5 sm:p-8 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,119,6,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(217,119,6,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      <AnimatePresence mode="wait">
        {phase === "bid" && (
          <motion.div
            key="bid"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            className="flex flex-col items-center w-full max-w-lg z-10"
          >
            <h3 className="text-gold-gradient text-xs font-bold tracking-widest uppercase mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse shadow-[0_0_10px_#D97706]" />{" "}
              Phase 1: Auction
            </h3>
            <div className="relative w-full h-40 flex items-end justify-center gap-4">
              {[
                { h: "40%", val: "10 SOL", delay: 0 },
                { h: "60%", val: "12 SOL", delay: 1 },
                { h: "85%", val: "15 SOL", delay: 2, win: true },
              ].map((bot, i) => (
                <motion.div
                  key={i}
                  initial={{ height: "0%", opacity: 0 }}
                  animate={{ height: bot.h, opacity: 1 }}
                  transition={{ delay: bot.delay * 0.5, type: "spring" }}
                  className={`w-14 md:w-16 rounded-t-lg relative flex justify-center backdrop-blur-sm border-t border-l border-r border-white/10 ${
                    bot.win
                      ? "bg-gradient-to-t from-[#78350F] to-[#D97706] shadow-[0_0_40px_rgba(217,119,6,0.5)] z-10"
                      : "bg-white/5"
                  }`}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -25 }}
                    transition={{ delay: bot.delay * 0.5 + 0.3 }}
                    className={`absolute -top-8 text-xs font-bold font-sans whitespace-nowrap ${
                      bot.win ? "text-[#FCD34D]" : "text-white/40"
                    }`}
                  >
                    {bot.val}
                  </motion.span>
                  {bot.win && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2 }}
                      className="absolute -top-16 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg"
                    >
                      WINNER
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {phase === "win" && (
          <motion.div
            key="win"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center z-10"
          >
            <div className="w-24 h-24 rounded-full border border-[#D97706]/30 bg-[#78350F]/10 flex items-center justify-center relative mb-6 shadow-[0_0_30px_rgba(217,119,6,0.2)]">
              <ShieldCheck className="w-10 h-10 text-[#D97706]" />
              <div className="absolute inset-0 border border-[#D97706]/50 rounded-full animate-ping opacity-50" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-2">
              License Minted
            </h3>
            <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-lg border border-[#D97706]/20 shadow-inner">
              <span className="text-white/40 text-xs uppercase tracking-wider">
                Fee Rate
              </span>
              <span className="text-[#FCD34D] font-sans text-xl font-bold">
                0.00%
              </span>
            </div>
          </motion.div>
        )}

        {phase === "yield" && (
          <motion.div
            key="yield"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center w-full z-10"
          >
            <h3 className="text-emerald-400 text-sm font-bold tracking-widest uppercase mb-8 flex items-center gap-2">
              <Zap size={14} className="fill-emerald-400" /> Phase 2: Value
              Capture
            </h3>
            <div className="flex gap-6 items-center justify-center w-full px-4">
              <motion.div className="w-28 sm:w-36 p-4 rounded-xl border border-white/5 bg-white/5 flex flex-col items-center opacity-50 grayscale">
                <span className="text-white/40 text-xs font-bold mb-2 uppercase">
                  Legacy AMM
                </span>
                <span className="text-xl sm:text-2xl font-sans font-bold text-white">
                  -13.7%
                </span>
              </motion.div>

              <ArrowRight className="text-white/20 w-6 h-6" />

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="w-36 sm:w-48 p-5 rounded-xl border border-[#D97706]/50 bg-gradient-to-b from-[#78350F]/20 to-black flex flex-col items-center shadow-[0_0_50px_rgba(217,119,6,0.15)]"
              >
                <span className="text-[#D97706] text-xs font-bold mb-2 uppercase">
                  Axis
                </span>
                <motion.span
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.4 }}
                  className="text-3xl sm:text-5xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#FCD34D] drop-shadow-lg"
                >
                  +4.1%
                </motion.span>
                <span className="text-xs text-[#D97706]/80 mt-2 font-mono">
                  Real Yield APR
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 h-[2px] bg-white/5 w-full">
        <motion.div
          className="h-full bg-[#D97706] box-shadow-[0_0_10px_#D97706]"
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 9, ease: "linear", repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default function Mechanism() {
  return (
    <section id="mechanism" className="relative py-20 sm:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white">
            Don&apos;t pay for <br />
            <span className="text-white/40">rebalancing.</span> <br />
            <span className="text-gold-gradient italic">Get paid for it.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-md mx-auto lg:mx-0">
            Traditional AMMs leak value to arbitrage bots. Axis internalizes
            this leakage through a{" "}
            <strong className="text-white">License Auction</strong>, turning
            loss into yield for fund creators and LPs.
          </p>
        </div>
        <div className="w-full">
          <AuctionCycleAnimation />
        </div>
      </div>
    </section>
  );
}
