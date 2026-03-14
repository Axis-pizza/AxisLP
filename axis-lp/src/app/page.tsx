"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyAxis from "@/components/WhyAxis";
import HowItWorks from "@/components/HowItWorks";
import Mechanism from "@/components/Mechanism";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function AxisLandingPage() {
  return (
    <main className="bg-[#050505] text-[#E7E5E4] font-sans w-full min-h-screen relative selection:bg-[#D97706] selection:text-black">
      <Navbar />

      <div className="relative z-10 flex flex-col">
        <Hero />
        <WhyAxis />
        <HowItWorks />
        <Mechanism />
        <CTA />
      </div>

      <Footer />
    </main>
  );
}
