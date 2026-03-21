import React from "react";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service – Axis",
  description: "Read the Axis Terms of Service governing your use of the platform.",
  openGraph: {
    title: "Terms of Service – Axis",
    description: "Read the Axis Terms of Service governing your use of the platform.",
    url: "https://axis-protocol.xyz/terms",
  },
  twitter: {
    title: "Terms of Service – Axis",
    description: "Read the Axis Terms of Service governing your use of the platform.",
  },
};

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-6xl font-black text-gold tracking-tight mb-10">Terms of Service</h1>
          
          <p className="text-white/70 leading-relaxed">
            These Terms govern your use of Axis (the &quot;App&quot;) and this website (the &quot;Site&quot;). By using the App or Site, you agree to these Terms.
          </p>

          {/* Interface to Protocol */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Interface to Protocol</h2>
            <p className="text-white/70 leading-relaxed">
              The App provides a user interface to interact with the Axis protocol on the Solana blockchain. Any wallet features, yield generation, or index creation are dependent on the underlying blockchain state and may be unavailable from time to time.
            </p>
          </section>

          {/* No custody */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">No custody</h2>
            <p className="text-white/70 leading-relaxed">
              Wallet interactions are performed through your chosen wallet provider (e.g., Phantom, Solflare). We do not custody your assets, do not receive your private keys, and do not request seed phrases. You retain full control over your funds at all times.
            </p>
          </section>

          {/* Transaction Simulations */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Transaction Signing</h2>
            <p className="text-white/70 leading-relaxed">
              The App may construct transactions for you to review and submit with your wallet (e.g., creating an index or swapping tokens). You are responsible for verifying transaction details and simulation results before signing and submitting them to the network.
            </p>
          </section>

          {/* Acceptable use */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Acceptable use</h2>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>Do not attempt to disrupt the service or abuse API endpoints.</li>
              <li>Do not use the App or Site for unlawful activity, including money laundering or financing terrorism.</li>
            </ul>
          </section>

          {/* Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Disclaimer</h2>
            <p className="text-white/70 leading-relaxed">
              The App and Site are provided &quot;as is&quot; without warranties of any kind. To the maximum extent permitted by law, we disclaim all warranties, express or implied.
            </p>
          </section>

          {/* Limitation of liability */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Limitation of liability</h2>
            <p className="text-white/70 leading-relaxed">
              To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of the App or Site.
            </p>
          </section>

          {/* Changes */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Changes</h2>
            <p className="text-white/70 leading-relaxed">
              We may update these Terms from time to time. The effective date at the top will reflect the latest version.
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