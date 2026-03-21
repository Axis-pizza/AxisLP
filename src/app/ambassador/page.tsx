"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Zap, ShieldCheck,
  MessageCircle, Star, Shield, Users, ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* -------------------------------------------------------------------------- */
/* HERO SECTION                                                                 */
/* -------------------------------------------------------------------------- */
const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(120,53,15,0.35),transparent_65%)] pointer-events-none" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(217,119,6,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(217,119,6,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.95] tracking-tight mb-7"
      >
        Axis Ambassador Program
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl sm:text-2xl font-serif text-white/40 mb-6"
      >
        Join the Inner Circle.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-sm sm:text-base text-white/55 max-w-2xl mx-auto leading-relaxed mb-12"
      >
        Axis is not just a protocol. It&apos;s a movement to democratize onchain ETFs.
        <br />
        We&apos;re not looking for mercenaries chasing rewards — we&apos;re seeking{" "}
        <em className="text-white/80">co-conspirators</em> to build the product with us.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="https://form.typeform.com/to/T6nexEaq"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#78350F] to-[#D97706] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-[0_0_50px_rgba(217,119,6,0.35)]"
        >
          Apply Now <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
    >
      <span className="text-[9px] uppercase tracking-widest font-bold">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
      />
    </motion.div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* THE VISION SECTION                                                           */
/* -------------------------------------------------------------------------- */
const Vision = () => {
  const pillars = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "Social",
      title: "Anyone Creates. Anyone Follows.",
      desc: "Axis transforms complex ETF creation into a social experience. Build your index, share your thesis, and grow a following. All on-chain.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      label: "On-Chain",
      title: "Radical Transparency.",
      desc: "Every position, every rebalance, every fee — permanently recorded on-chain. Maximum mainnet performance with zero trust required.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: "Seamless",
      title: "Asset Management, Daily.",
      desc: "A single swipe transforms how you manage wealth. Axis makes investing feel as natural as scrolling your feed.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D97706] text-[10px] font-bold uppercase tracking-widest"
          >
            The Vision
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mt-4 mb-6 text-white"
          >
            Why Axis?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg font-serif max-w-xl mx-auto"
          >
            The &ldquo;Tinder UI × ETF Factory&rdquo; revolution, explained.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="card-glass p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-[#78350F]/20 border border-[#D97706]/20 flex items-center justify-center text-[#D97706] mb-6">
                {p.icon}
              </div>
              <span className="text-[#D97706]/50 text-[9px] uppercase tracking-widest font-bold mb-2 block">
                {p.label}
              </span>
              <h3 className="text-xl font-serif font-bold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* THE ALPHA (PERKS) SECTION                                                    */
/* -------------------------------------------------------------------------- */
const Perks = () => {
  const perks = [
    {
      icon: <MessageCircle className="w-7 h-7" />,
      title: "Alpha Telegram",
      desc: "A direct line with the Axis Team. Get behind-the-scenes development updates at the speed of thought — before anyone else on the planet.",
      tag: "Exclusive Access",
    },
    {
      icon: <Star className="w-7 h-7" />,
      title: "Founder Access",
      desc: "Direct feedback rights on the product roadmap. Your voice shapes what Axis becomes. This isn't a suggestion box. It's co-authorship.",
      tag: "Roadmap Power",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Early Beta",
      desc: "Priority testing rights for new features and new assets, before public launch. Be the first to discover what's next and set the meta.",
      tag: "First Mover",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "In-app Status",
      desc: "A glowing Verified / Founding badge on your Axis profile. Signal your place in the genesis cohort — a permanent mark of origin.",
      tag: "Identity",
    },
  ];

  return (
    <section id="perks" className="relative py-24 sm:py-32 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D97706] text-[10px] font-bold uppercase tracking-widest"
          >
            The Alpha
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mt-4 mb-6 text-white"
          >
            Your Unfair Advantage.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-xl mx-auto leading-relaxed"
          >
            We&apos;re not leading with financial rewards. We&apos;re offering something rarer:{" "}
            <em className="text-white/70">rare experiences and exclusive access.</em>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass p-8 hover:scale-[1.015] transition-transform cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#78350F]/30 to-[#D97706]/10 border border-[#D97706]/20 flex items-center justify-center text-[#D97706]">
                  {perk.icon}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest bg-[#D97706]/10 text-[#D97706]/70 border border-[#D97706]/20 px-3 py-1 rounded-full">
                  {perk.tag}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3">{perk.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* THE TIERS SECTION                                                            */
/* -------------------------------------------------------------------------- */
const Tiers = () => (
  <section className="relative py-24 sm:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#D97706] text-[10px] font-bold uppercase tracking-widest"
        >
          The Tiers
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mt-4 text-white"
        >
          Two Roles. One Mission.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tier 1 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-glass p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 text-sm font-bold font-mono">
              T1
            </div>
            <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
              Entry Level
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-1">Verified</h3>
          <h4 className="text-3xl sm:text-4xl font-serif font-bold text-gold-gradient mb-10">
            Strategist
          </h4>

          <div className="space-y-6">
            <div>
              <p className="text-[9px] uppercase tracking-widest font-bold text-[#D97706]/50 mb-3">
                Requirements
              </p>
              <ul className="space-y-2">
                {[
                  "Create and share ETFs on Axis",
                  "Consistently spread the word across socials",
                ].map((req) => (
                  <li key={req} className="flex items-start gap-2 text-sm text-white/55">
                    <ChevronRight className="w-4 h-4 text-white/20 mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest font-bold text-[#D97706]/50 mb-3">
                Perks
              </p>
              <ul className="space-y-2">
                {["Official Verified badge on your profile", "Fee discount on the platform"].map(
                  (perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-white/55">
                      <ChevronRight className="w-4 h-4 text-[#D97706] mt-0.5 flex-shrink-0" />
                      {perk}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Tier 2 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-glass p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-56 h-56 bg-[#D97706]/6 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full border border-[#D97706]/40 bg-[#78350F]/20 flex items-center justify-center text-[#D97706] text-sm font-bold font-mono">
              T2
            </div>
            <span className="text-[#D97706]/50 text-[10px] uppercase tracking-widest font-bold">
              Core Member
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-1">Founding</h3>
          <h4 className="text-3xl sm:text-4xl font-serif font-bold text-gold-gradient mb-10">
            Maker
          </h4>

          <div className="space-y-6">
            <div>
              <p className="text-[9px] uppercase tracking-widest font-bold text-[#D97706]/50 mb-3">
                Requirements
              </p>
              <ul className="space-y-2">
                {[
                  "Share deep insight-driven visions on X",
                  "Actively contribute ideas to the product",
                ].map((req) => (
                  <li key={req} className="flex items-start gap-2 text-sm text-white/55">
                    <ChevronRight className="w-4 h-4 text-white/20 mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest font-bold text-[#D97706]/50 mb-3">
                Perks
              </p>
              <ul className="space-y-2">
                {[
                  "Exclusive Alpha Telegram invitation",
                  "Recognized as a strategic partner of Axis",
                  "Founding badge — permanent proof of genesis",
                ].map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-white/70">
                    <ChevronRight className="w-4 h-4 text-[#D97706] mt-0.5 flex-shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* HOW TO JOIN SECTION                                                          */
/* -------------------------------------------------------------------------- */
const HowToJoin = () => {
  const steps = [
    {
      mission: "01",
      title: "Build & Share",
      tag: "On Axis + X",
      desc: "Create an ETF on Axis and post your intent on X. What's your thesis? What market truth are you encoding on-chain?",
      href: "https://axs.pizza",
      cta: "Open App",
    },
    {
      mission: "02",
      title: "Voice the Vision",
      tag: "On X",
      desc: "Post on X in your own words about the future Axis envisions. We want your perspective — raw, unfiltered, and authentic.",
      href: "https://x.com",
      cta: "Post on X",
    },
    {
      mission: "03",
      title: "The Vibe Check",
      tag: "Application Form",
      desc: "Fill out the application form with your enthusiasm. This is where we learn who you really are and what drives you.",
      href: "https://form.typeform.com/to/T6nexEaq",
      cta: "Apply Now",
    },
  ];

  return (
    <section id="apply" className="relative py-24 sm:py-32 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D97706] text-[10px] font-bold uppercase tracking-widest"
          >
            Three Steps to Join
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mt-4 text-white"
          >
            Your Path In.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.mission}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(100%+1px)] w-8 h-px bg-gradient-to-r from-[#D97706]/25 to-transparent z-10" />
              )}

              <div className="card-glass p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#D97706]/25 text-[9px] font-bold uppercase tracking-widest font-mono">
                    Mission
                  </span>
                  <span className="text-3xl font-bold font-mono text-gold-gradient leading-none">
                    {step.mission}
                  </span>
                </div>
                <span className="inline-block self-start text-[9px] font-bold uppercase tracking-widest bg-[#D97706]/10 text-[#D97706]/60 border border-[#D97706]/15 px-2.5 py-1 rounded-full mb-5">
                  {step.tag}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6 flex-1">{step.desc}</p>
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#D97706] text-sm font-bold hover:gap-3 transition-all self-start"
                >
                  {step.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/30 text-xs uppercase tracking-widest font-bold mb-6">
            Ready to apply?
          </p>
          <a
            href="https://form.typeform.com/to/T6nexEaq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#78350F] to-[#D97706] text-white font-bold text-sm uppercase tracking-widest px-10 py-5 rounded-full hover:opacity-90 transition-all shadow-[0_0_60px_rgba(217,119,6,0.4)]"
          >
            Submit Your Application <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* DISCLAIMER SECTION                                                           */
/* -------------------------------------------------------------------------- */
const Disclaimer = () => (
  <section className="relative py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border border-white/8 rounded-2xl p-8 sm:p-12 text-center bg-white/[0.02] backdrop-blur-sm"
      >
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6">
          <Shield className="w-5 h-5 text-white/25" />
        </div>
        <h3 className="text-lg font-serif font-bold text-white/70 mb-4">
          A Note on Who We&apos;re Looking For
        </h3>
        <p className="text-sm text-white/40 leading-relaxed">
          We respectfully ask that you refrain from applying if your primary motivation is
          financial reward or airdrop anticipation. We are seeking partners who{" "}
          <strong className="text-white/60">genuinely love the Axis product</strong> and want to
          grow with us — people who would use and evangelize Axis regardless of any incentive. If
          that&apos;s you, we want to meet you.
        </p>
      </motion.div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* MAIN PAGE                                                                    */
/* -------------------------------------------------------------------------- */
export default function AmbassadorPage() {
  return (
    <main className="bg-[#050505] text-[#E7E5E4] font-sans w-full min-h-screen relative selection:bg-[#D97706] selection:text-black">
      {/* Background grain */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,53,15,0.15),transparent_70%)]" />

      <Navbar />

      <div className="relative z-10 flex flex-col">
        <Hero />
        <Vision />
        <Perks />
        <Tiers />
        <HowToJoin />
        <Disclaimer />
      </div>

      <Footer />
    </main>
  );
}
