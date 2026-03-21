import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ambassador Program – Axis",
  description: "Join the Axis Ambassador Program. Help grow the first onchain index fund protocol and earn rewards.",
  openGraph: {
    title: "Ambassador Program – Axis",
    description: "Join the Axis Ambassador Program. Help grow the first onchain index fund protocol and earn rewards.",
    url: "https://axis-protocol.xyz/ambassador",
  },
  twitter: {
    title: "Ambassador Program – Axis",
    description: "Join the Axis Ambassador Program. Help grow the first onchain index fund protocol and earn rewards.",
  },
};

export default function AmbassadorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
