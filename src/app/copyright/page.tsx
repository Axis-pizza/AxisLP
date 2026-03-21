import React from "react";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Copyright – Axis",
  description: "Copyright information for the Axis protocol and platform.",
  openGraph: {
    title: "Copyright – Axis",
    description: "Copyright information for the Axis protocol and platform.",
    url: "https://axis-protocol.xyz/copyright",
  },
  twitter: {
    title: "Copyright – Axis",
    description: "Copyright information for the Axis protocol and platform.",
  },
};

export default function Copyright() {
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
          <h1 className="text-4xl md:text-6xl font-black text-gold tracking-tight mb-10">Copyright</h1>
          
          {/* Main Copyright */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Axis</h2>
            <p className="text-white/70 leading-relaxed">
              Axis is an independent project. Unless otherwise noted, the dApp code, website, and original artwork/audio are © 2026 Axis. All rights reserved.
            </p>
          </section>

          {/* Third-party assets */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Third-party assets</h2>
            <p className="text-white/70 leading-relaxed">
              Some fonts and libraries are provided under permissive licenses. See <a href="/license" className="text-gold hover:underline">License</a> for details and license texts.
            </p>
          </section>

          {/* Trademarks */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Trademarks</h2>
            <p className="text-white/70 leading-relaxed">
              All trademarks and registered trademarks are the property of their respective owners.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
            <p className="text-white/70 leading-relaxed">
              Questions or takedown requests? Email <a href="mailto:muse@axis-protocol.xyz" className="text-gold hover:underline">muse@axis-protocol.xyz</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}