import React from "react";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy – Axis",
  description: "Learn how Axis handles your data and protects your privacy.",
  openGraph: {
    title: "Privacy Policy – Axis",
    description: "Learn how Axis handles your data and protects your privacy.",
    url: "https://axis-protocol.xyz/privacy",
  },
  twitter: {
    title: "Privacy Policy – Axis",
    description: "Learn how Axis handles your data and protects your privacy.",
  },
};

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-6xl font-black text-gold tracking-tight mb-10">Privacy Policy</h1>
          
          <p className="text-white/70 leading-relaxed">
            Axis is a decentralized application (dApp). You can interact with the protocol by connecting your wallet without creating a traditional account.
          </p>

          {/* What we collect */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">What we collect</h2>
            <ul className="list-disc pl-5 space-y-4 text-white/70">
              <li>
                <strong className="text-gold">Public Blockchain Data:</strong> Your wallet address and transaction history are public information on the Solana blockchain. We do not control this data.
              </li>
              <li>
                <strong className="text-gold">Wallet Features (Optional):</strong> If you choose to connect a wallet, the wallet app you use handles approvals and signing. We may view your public key (wallet address) to check balances or index ownership.
              </li>
              <li>
                <strong className="text-gold">Backend Requests:</strong> When you use our interface, our API may receive basic request metadata (such as IP address and user-agent) as part of normal server logs for reliability and abuse prevention.
              </li>
            </ul>
          </section>

          {/* What we do not collect */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">What we do not collect</h2>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>We do not ask for or store seed phrases.</li>
              <li>We do not request private keys.</li>
              <li>We do not sell personal information.</li>
            </ul>
          </section>

          {/* Transaction Data */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Transaction Data</h2>
            <p className="text-white/70 leading-relaxed">
              When you submit a transaction (e.g., creating an index), the transaction details and your signature are broadcast to the Solana network. This information is immutable and public.
            </p>
          </section>

          {/* Data retention */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Data retention</h2>
            <p className="text-white/70 leading-relaxed">
              Local settings may be stored on your device. Server logs, if collected, are retained for a limited period for reliability and security purposes.
            </p>
          </section>

          {/* Changes */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Changes</h2>
            <p className="text-white/70 leading-relaxed">
              We may update this Privacy Policy from time to time. The effective date at the top will reflect the latest version.
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