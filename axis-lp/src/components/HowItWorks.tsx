"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const PhoneMockup = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative w-full aspect-[9/19] rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-3 shadow-2xl overflow-hidden mx-auto ${className}`}
    style={{
      background: "linear-gradient(145deg, #1a1a1a, #000000)",
      boxShadow:
        "0 20px 50px -10px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.1)",
    }}
  >
    <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 pointer-events-none" />
    <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-6 sm:h-7 bg-black rounded-full z-30 flex items-center justify-center border border-white/5">
      <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-[#111] rounded-full" />
    </div>
    <div className="h-full w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-black relative border border-white/5 flex flex-col">
      {children}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.1)_0%,transparent_30%,transparent_60%,rgba(255,255,255,0.05)_100%)] pointer-events-none z-20 mix-blend-overlay" />
    </div>
  </div>
);

const steps = [
  {
    id: "discover",
    number: "1",
    title: "Browse Indices",
    desc: "Explore community-built index funds. Find strategies that match your thesis — AI tokens, DePIN, blue chips, and more.",
    video: "/videos/discover.mp4",
  },
  {
    id: "invest",
    number: "2",
    title: "Invest in One Click",
    desc: "Get full exposure with a single transaction. Axis routes your entry optimally across all tokens in one block.",
    video: "/videos/invest.mp4",
  },
  {
    id: "create",
    number: "3",
    title: "Create Your Own Fund",
    desc: "Build your own index fund. Define the tokens, set the weights, and launch it for anyone to invest in.",
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
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative z-10 bg-black/80 backdrop-blur-xl"
    >
      {/* Mobile layout */}
      <div className="lg:hidden flex flex-col gap-16 py-20 px-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center gap-8"
          >
            <div className="space-y-4">
              <span className="text-[#D97706] text-lg font-normal font-mono">
                /{step.number}
              </span>
              <h3 className="text-5xl font-serif font-normal text-white">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
            <div className="w-[240px]">
              <PhoneMockup>
                <video
                  src={step.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </PhoneMockup>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block h-[300vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-2 gap-20 items-center px-12">
            <div className="h-[300px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="w-16 h-16 rounded-full border border-[#D97706]/30 text-[#D97706] text-2xl font-normal flex items-center justify-center mb-8">
                    {steps[activeStep].number}
                  </div>
                  <h3 className="text-8xl font-serif font-normal mb-6 text-white">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-xl text-white/60 max-w-md">
                    {steps[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-end">
              <div className="w-[320px]">
                <PhoneMockup>
                  <AnimatePresence mode="wait">
                    <motion.video
                      key={activeStep}
                      src={steps[activeStep].video}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </PhoneMockup>
              </div>
            </div>
          </div>

          <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {steps.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: i === activeStep ? 32 : 8,
                  backgroundColor:
                    i === activeStep ? "#D97706" : "rgba(255,255,255,0.2)",
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
