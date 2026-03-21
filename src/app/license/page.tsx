import React from "react";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "License – Axis",
  description: "License information for the Axis protocol and platform.",
  openGraph: {
    title: "License – Axis",
    description: "License information for the Axis protocol and platform.",
    url: "https://axis-protocol.xyz/license",
  },
  twitter: {
    title: "License – Axis",
    description: "License information for the Axis protocol and platform.",
  },
};

export default function License() {
  return (
    <main className="bg-[#050505] text-[#E7E5E4] font-serif min-h-screen px-6 py-12 md:py-20 selection:bg-gold selection:text-black">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-white/40 hover:text-gold transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs uppercase tracking-widest font-bold">Back to Home</span>
        </a>

        <div className="space-y-12">
          <h1 className="text-4xl md:text-6xl font-black text-gold tracking-tight mb-10">License</h1>
          
          <p className="text-white/70 leading-relaxed">
            This page describes licensing for the Axis dApp and the assets shipped with it. If you are looking for legal terms, see <a href="/terms" className="text-gold hover:underline">Terms</a>.
          </p>

          {/* App license */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">App license</h2>
            <p className="text-white/70 leading-relaxed">
              Unless otherwise noted, Axis is © 2026 Axis. All rights reserved. You may access and use the dApp for personal use. You may not redistribute or sell the dApp interface or its original artwork without permission.
            </p>
          </section>

          {/* Third-party asset licenses */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Third-party asset licenses</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Some assets and libraries are used under the following licenses:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/60 font-mono text-sm">
              <li>
                <span className="text-white">Lucide React</span> (ISC License): Open source icon library.
              </li>
              <li>
                <span className="text-white">Next.js</span> (MIT License): React framework.
              </li>
              <li>
                <span className="text-white">Tailwind CSS</span> (MIT License): Utility-first CSS framework.
              </li>
              <li>
                <span className="text-white">Framer Motion</span> (MIT License): Animation library.
              </li>
            </ul>
          </section>

          {/* Open-source software */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Open-source software</h2>
            <p className="text-white/70 leading-relaxed">
              The app uses open-source libraries from the React and Solana ecosystems, each under its own license.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
            <p className="text-white/70 leading-relaxed">
              Questions? Email <a href="mailto:muse@axis-protocol.xyz" className="text-gold hover:underline">muse@axis-protocol.xyz</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}