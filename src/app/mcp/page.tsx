"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal, Bot, Zap, Code, ShieldCheck, 
  MessageSquare, Network, Layers, Copy, Check
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ▼ Loraフォントをインポート（レギュラーウェイトのみに限定）
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

/* -------------------------------------------------------------------------- */
/* HERO SECTION                                                                 */
/* -------------------------------------------------------------------------- */
const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npx axis-mcp@latest");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#D97706]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-[#78350F]/15 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-10">
       
        {/* ▼ font-bold を削除 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D97706]/30 bg-[#D97706]/10 text-[#D97706] text-xs uppercase tracking-widest mb-6"
        >
          <Bot className="w-4 h-4" />
          Model Context Protocol
        </motion.div>

        {/* ▼ font-bold を削除し、Loraを適用 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`text-5xl sm:text-6xl md:text-7xl leading-[1.1] tracking-tight mb-7 text-white ${lora.className}`}
        >
          Axis AI Agent
        </motion.h1>

        {/* ▼ Loraを適用 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed ${lora.className}`}
        >
          Create on-chain ETF vaults on Solana — directly from your AI agent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-black/60 border border-white/10 rounded-2xl p-2 flex items-center justify-between backdrop-blur-md shadow-[0_0_40px_rgba(217,119,6,0.15)] hover:shadow-[0_0_60px_rgba(217,119,6,0.25)] transition-shadow duration-500">
            <div className="flex items-center gap-3 px-4 overflow-x-auto">
              <Terminal className="w-5 h-5 text-white/40 flex-shrink-0" />
              <code className="text-sm sm:text-base font-mono text-white/80 whitespace-nowrap">
                <span className="text-[#D97706]">npx</span> axis-mcp@latest
              </code>
            </div>
            <button
              onClick={copyToClipboard}
              className="bg-white/5 hover:bg-white/10 text-white p-3 rounded-xl transition-all border border-white/5 flex-shrink-0"
            >
              {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
          <p className="text-white/40 text-sm mt-4">
            Runs setup wizard, registers with Claude Code, and launches instantly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* WHAT IT DOES (SUB-AGENTS)                                                    */
/* -------------------------------------------------------------------------- */
const UnderTheHood = () => {
  const agents = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Sub-agent A: Market Data",
      desc: "Scans for pump.fun graduated tokens and pulls real-time DexScreener market data to find highly liquid candidates.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Sub-agent B: Narratives",
      desc: "Analyzes social signals from X and the broader web to gauge narrative strength, momentum, and community mindshare.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Sub-agent C: Validation",
      desc: "Cross-references DexScreener trending charts to validate momentum and confirm the token's current market viability.",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-black/30 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D97706] text-[10px] uppercase tracking-widest"
          >
            Under The Hood
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl sm:text-5xl mt-4 mb-6 text-white ${lora.className}`}
          >
            Tell Claude what you want.<br />It handles the rest.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            "Create an ETF of AI agent tokens on Solana" or "Build a meme coin index focused on pump.fun graduates". The MCP spawns 3 parallel sub-agents to research, score, and propose the perfect vault.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="card-glass p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-[#78350F]/20 border border-[#D97706]/20 flex items-center justify-center text-[#D97706] mb-6">
                {agent.icon}
              </div>
              <h3 className={`text-xl text-white mb-3 ${lora.className}`}>{agent.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{agent.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* COMMANDS & FEATURES                                                          */
/* -------------------------------------------------------------------------- */
const CommandsAndFeatures = () => {
  const commands = [
    {
      cmd: '"Create an ETF for [theme]"',
      action: "Research → score → propose → deploy",
    },
    {
      cmd: '"Show my vaults"',
      action: "List all vaults you've created with TVL and composition",
    },
    {
      cmd: '"Set up Axis"',
      action: "Register or update your Solana wallet address",
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#D97706] text-[10px] uppercase tracking-widest mb-4 block">
            Capabilities
          </span>
          <h2 className={`text-3xl sm:text-4xl text-white mb-6 ${lora.className}`}>
            Scored across 5 dimensions. <br />Deployed permissionlessly.
          </h2>
          <p className="text-white/50 leading-relaxed mb-8">
            Every candidate token is rigorously scored across <span className="text-white/80">concept fit, narrative strength, momentum, liquidity, and graduation status</span>. Once the AI proposes a weighted composition and you approve, it deploys the vault directly on-chain via Axis Protocol.
          </p>

          <div className="space-y-4">
            {commands.map((c, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <code className="text-[#D97706] font-mono text-sm">{c.cmd}</code>
                <span className="text-white/40 text-sm flex-shrink-0">{c.action}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-glass p-8"
        >
          <h3 className={`text-lg text-white mb-6 flex items-center gap-2 ${lora.className}`}>
            <Code className="w-5 h-5 text-[#D97706]" /> Manual Setup
          </h3>
          <p className="text-sm text-white/50 mb-4">
            For Claude Desktop, Cursor, or Windsurf, add this to your MCP config file:
          </p>
          <div className="bg-black/80 border border-white/10 rounded-xl p-4 overflow-x-auto relative">
            <pre className="text-sm text-white/70 font-mono">
{`{
  "mcpServers": {
    "axis": {
      "command": "npx",
      "args": ["axis-mcp@latest"]
    }
  }
}`}
            </pre>
          </div>
          <div className="mt-6 space-y-2">
            <p className="text-xs text-white/40"><span className="text-white/70">Claude Desktop:</span> <code>~/.claude/claude_desktop_config.json</code></p>
            <p className="text-xs text-white/40"><span className="text-white/70">Cursor / Windsurf:</span> See editor's MCP settings</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* MAIN PAGE                                                                    */
/* -------------------------------------------------------------------------- */
export default function MCPPage() {
  return (
    <main className="bg-[#050505] text-[#E7E5E4] font-sans w-full min-h-screen relative selection:bg-[#D97706] selection:text-black">
      {/* Background grain */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,53,15,0.1),transparent_70%)]" />

      <Navbar />

      <div className="relative z-10 flex flex-col">
        <Hero />
        <UnderTheHood />
        <CommandsAndFeatures />
      </div>

      <Footer />
    </main>
  );
}