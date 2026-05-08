"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Structure from "@/components/Structure";
import Mechanism from "@/components/Mechanism";
import Economics from "@/components/Economics";
import Roadmap from "@/components/Roadmap";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Divider = () => (
  <div className="w-full max-w-[1200px] mx-auto px-6">
    <div className="h-px bg-gradient-to-r from-transparent via-[#D97706]/20 to-transparent" />
  </div>
);

export default function AxisLandingPage() {
  return (
    <main className="bg-[#0a0a0a] text-[#e5e5e5] font-sans w-full min-h-screen relative">
      <Navbar />
      <div className="relative z-10 flex flex-col">
        <Hero />
        <Divider />
        <HowItWorks />
        <Divider />
        <Structure />
        <Divider />
        <Mechanism />
        <Divider />
        <Economics />
        <Divider />
        <Roadmap />
        <Divider />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
