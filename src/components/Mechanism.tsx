"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Activity, Cpu, ArrowRight, Network } from "lucide-react";

import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

type Phase = "accumulate" | "compete" | "execute" | "route";

const CycleAnimation = () => {
  const [phase, setPhase] = useState<Phase>("accumulate");

  useEffect(() => {
    const cycle = async () => {
      setPhase("accumulate");
      await new Promise((r) => setTimeout(r, 3500));
      setPhase("compete");
      await new Promise((r) => setTimeout(r, 3000));
      setPhase("execute");
      await new Promise((r) => setTimeout(r, 3000));
      setPhase("route");
      await new Promise((r) => setTimeout(r, 4000));
      cycle();
    };
    cycle();
  }, []);

  return (
    <div className="card-glass relative w-full h-[400px] sm:h-[480px] md:h-[500px] flex flex-col items-center justify-center p-5 sm:p-8 overflow-hidden rounded-2xl border border-white/5 bg-black/40 backdrop-blur-md">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-[#D97706]/10 rounded-full blur-[80px]" />
      </div>

      <AnimatePresence mode="wait">
        {/* ================= PHASE 1: ACCUMULATE ================= */}
        {phase === "accumulate" && (
          <motion.div
            key="accumulate"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
            className="flex flex-col items-center w-full max-w-lg z-10"
          >
            <h3 className="text-[#D97706] text-xs tracking-widest uppercase mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
              Phase 1: Accumulate
            </h3>

            <div className="w-full flex flex-col gap-6">
              {/* Slot Counter */}
              <div className="flex flex-col items-center mb-2">
                <span className={`text-white/40 text-sm mb-2 ${lora.className}`}>10-Slot Window</span>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#D97706]/70"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "linear" }}
                  />
                </div>
              </div>

              <div className="flex justify-between items-end h-24 gap-4">
                {/* User Intents Stack */}
                <div className="flex-1 flex flex-col justify-end gap-1 items-center">
                  <span className={`text-white/40 text-xs mb-2 ${lora.className}`}>User Intents</span>
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.5 }}
                      className="w-16 h-3 bg-white/10 rounded-sm border border-white/5"
                    />
                  ))}
                </div>

                {/* Basket Drift Meter */}
                <div className="flex-1 flex flex-col items-center">
                  <span className={`text-white/40 text-xs mb-2 ${lora.className}`}>Basket Drift</span>
                  <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 relative overflow-hidden flex items-end justify-center pb-2">
                    <motion.div
                      initial={{ height: "10%" }}
                      animate={{ height: "80%" }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                      className="w-6 bg-gradient-to-t from-transparent to-[#FCD34D]/50 rounded-t-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ================= PHASE 2: COMPETE ================= */}
        {phase === "compete" && (
          <motion.div
            key="compete"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20, filter: "blur(5px)" }}
            className="flex flex-col items-center w-full z-10"
          >
            <h3 className="text-[#D97706] text-xs tracking-widest uppercase mb-8 flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#D97706]" />
              Phase 2: Jito Bundle Competition
            </h3>

            <div className="flex justify-center gap-4 w-full">
              {[
                { bid: "0.25 SOL", edge: "Low", delay: 0 },
                { bid: "0.40 SOL", edge: "Mid", delay: 0.3 },
                { bid: "0.85 SOL", edge: "Optimal", delay: 0.6, win: true },
              ].map((bundle, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: bundle.delay }}
                  className={`relative p-4 rounded-xl border flex flex-col items-center w-28 sm:w-32 ${
                    bundle.win
                      ? "border-[#D97706]/50 bg-gradient-to-b from-[#78350F]/20 to-transparent shadow-[0_0_30px_rgba(217,119,6,0.15)]"
                      : "border-white/5 bg-white/[0.02]"
                  }`}
                >
                  <Layers className={`w-6 h-6 mb-3 ${bundle.win ? "text-[#D97706]" : "text-white/20"}`} />
                  <span className={`text-sm text-white mb-1 ${lora.className}`}>{bundle.bid}</span>
                  <span className="text-[10px] text-white/30 uppercase tracking-widest">{bundle.edge} edge</span>
                  
                  {bundle.win && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="absolute -top-3 bg-[#D97706]/20 border border-[#D97706]/50 text-[#FCD34D] text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full"
                    >
                      Winning Bundle
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className={`text-white/40 text-sm mt-8 text-center ${lora.className}`}
            >
              Batch boundary reached.<br/>Sealed-bid equivalent auction resolves.
            </motion.p>
          </motion.div>
        )}

        {/* ================= PHASE 3: EXECUTE ================= */}
        {phase === "execute" && (
          <motion.div
            key="execute"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
            className="flex flex-col items-center z-10"
          >
            <h3 className="text-[#D97706] text-xs tracking-widest uppercase mb-8 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#D97706]" />
              Phase 3: ClearBatch Execution
            </h3>

            <div className="relative flex flex-col items-center justify-center mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                className="w-32 h-32 rounded-full border border-dashed border-[#D97706]/30 flex items-center justify-center absolute"
              />
              <div className="w-24 h-24 rounded-full bg-[#78350F]/20 border border-[#D97706]/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(217,119,6,0.2)]">
                <span className={`text-2xl text-white ${lora.className}`}>O(1)</span>
              </div>
            </div>

            <h4 className={`text-xl text-white mb-3 ${lora.className}`}>State Transition</h4>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2">
                <span className="text-white/40 text-[10px] uppercase tracking-widest">Compute</span>
                <span className="text-[#FCD34D] text-sm font-mono">~38,000 CU</span>
              </div>
              <span className={`text-white/40 text-sm mt-2 ${lora.className}`}>Single aggregated execution</span>
            </div>
          </motion.div>
        )}

        {/* ================= PHASE 4: ROUTE VALUE ================= */}
        {phase === "route" && (
          <motion.div
            key="route"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(5px)" }}
            className="flex flex-col items-center w-full z-10"
          >
            <h3 className="text-[#D97706] text-xs tracking-widest uppercase mb-8 flex items-center gap-2">
              <Network className="w-4 h-4 text-[#D97706]" />
              Phase 4: Value Routing
            </h3>

            <div className="flex flex-col items-center w-full max-w-sm gap-4">
              <div className="w-full text-center pb-4 border-b border-white/10 relative">
                <span className={`text-white text-lg ${lora.className}`}>Gross Extraction Opportunity</span>
                <motion.div 
                  initial={{ height: 0 }} 
                  animate={{ height: 20 }} 
                  className="w-px bg-white/20 absolute -bottom-5 left-1/2 -translate-x-1/2" 
                />
              </div>

              <div className="flex justify-between w-full mt-4">
                {/* Searcher / Validator */}
                <div className="flex flex-col gap-3 w-[45%]">
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 border border-white/5 rounded-lg p-3 text-center"
                  >
                    <span className="text-white/30 text-[10px] uppercase tracking-widest block mb-1">Searcher</span>
                    <span className={`text-white/60 text-sm ${lora.className}`}>Edge</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.4 }}
                    className="bg-white/5 border border-white/5 rounded-lg p-3 text-center"
                  >
                    <span className="text-white/30 text-[10px] uppercase tracking-widest block mb-1">Validator</span>
                    <span className={`text-white/60 text-sm ${lora.className}`}>Tip Leakage</span>
                  </motion.div>
                </div>

                {/* Protocol Internalized (Highlighted) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="w-[50%] bg-gradient-to-b from-[#78350F]/30 to-black border border-[#D97706]/40 rounded-xl p-4 flex flex-col justify-center items-center shadow-[0_0_30px_rgba(217,119,6,0.15)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#D97706_0%,transparent_70%)] opacity-20 pointer-events-none" />
                  <span className="text-[#D97706] text-[10px] uppercase tracking-widest text-center mb-2">Protocol & LP</span>
                  <span className={`text-white text-lg text-center leading-tight ${lora.className}`}>
                    Internalized<br/>Value
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar (Bottom) */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-white/5 w-full">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-[#D97706] to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 13.5, ease: "linear", repeat: Infinity }} // Total cycle time (3.5+3+3+4)
        />
      </div>
    </div>
  );
};

export default function Mechanism() {
  return (
    <section id="mechanism" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-center lg:text-left space-y-6">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-white ${lora.className}`}>
            Don&apos;t pay for <br />
            <span className="text-white/40">rebalancing.</span> <br />
            <span className="text-white">Get paid for it.</span>
          </h2>
          <p className={`text-lg text-white/50 leading-relaxed max-w-md mx-auto lg:mx-0 ${lora.className}`}>
            Axis batches ETF flow every 10 slots, auctions batch-clearing rights through Jito bundle competition, and executes an O(1) ClearBatch. Instead of leaking value entirely to external extraction paths, the protocol internalizes part of that value for LPs and creators.
          </p>
        </div>
        <div className="w-full">
          <CycleAnimation />
        </div>
      </div>
    </section>
  );
}