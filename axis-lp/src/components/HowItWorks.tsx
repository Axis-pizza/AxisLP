"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const PhoneMockup = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`relative w-full aspect-[9/19] rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-3 overflow-hidden mx-auto ${className}`}
    style={{ background: "#111", boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}
  >
    <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-6 sm:h-7 bg-black rounded-full z-30 flex items-center justify-center">
      <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-[#1a1a1a] rounded-full" />
    </div>
    <div className="h-full w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-black relative flex flex-col">
      {children}
    </div>
  </div>
);

const steps = [
  {
    id: "discover",
    number: "01",
    title: "Browse Indices",
    desc: "Explore community-built index funds. Find strategies that match your thesis.",
    video: "/videos/discover.mp4",
  },
  {
    id: "invest",
    number: "02",
    title: "Invest in One Click",
    desc: "Get full exposure with a single transaction. Routed optimally in one block.",
    video: "/videos/invest.mp4",
  },
  {
    id: "create",
    number: "03",
    title: "Create Your Fund",
    desc: "Define the tokens, set the weights, launch it for anyone to invest in.",
    video: "/videos/create.mp4",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.3) setActiveStep(0);
    else if (latest < 0.7) setActiveStep(1);
    else setActiveStep(2);
  });

  return (
    <section id="how-it-works" ref={containerRef} className="relative z-10 bg-[#0a0a0a]">
      {/* Mobile */}
      <div className="lg:hidden flex flex-col gap-16 py-20 px-6">
        <div>
          <p className="text-[#FCD34D] text-xs font-bold uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-[-0.03em]">Three steps. That&apos;s it.</h2>
        </div>
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center gap-6">
            <div className="space-y-3">
              <span className="text-[#FCD34D] text-sm font-bold font-mono">{step.number}</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{step.title}</h3>
              <p className="text-white/40 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
            <div className="w-[260px] sm:w-[280px]">
              <PhoneMockup>
                <video src={step.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </PhoneMockup>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden lg:block h-[300vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="max-w-[1200px] w-full mx-auto grid grid-cols-2 gap-20 items-center px-12">
            <div className="h-[300px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <span className="text-[#FCD34D] text-sm font-bold font-mono mb-4">{steps[activeStep].number}</span>
                  <h3 className="text-5xl xl:text-6xl font-black mb-4 text-white tracking-[-0.03em]">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-lg xl:text-xl text-white/40 max-w-md">{steps[activeStep].desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-end">
              <div className="w-[300px] xl:w-[340px]">
                <PhoneMockup>
                  <AnimatePresence mode="wait">
                    <motion.video
                      key={activeStep}
                      src={steps[activeStep].video}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      autoPlay loop muted playsInline
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </PhoneMockup>
              </div>
            </div>
          </div>

          <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {steps.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: i === activeStep ? 28 : 6,
                  backgroundColor: i === activeStep ? "#FCD34D" : "rgba(255,255,255,0.1)",
                }}
                className="w-1 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
