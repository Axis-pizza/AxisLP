import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Axis – Your Idea, Your ETF",
  description:
    "The first onchain index funds. Build, manage, and scale your on-chain index fund in seconds.",
  icons: {
    icon: "/icon.jpg",
  },
  metadataBase: new URL("https://axis-protocol.xyz"),
  openGraph: {
    title: "Axis – Your Idea, Your ETF",
    description:
      "The first onchain index funds. Build, manage, and scale your on-chain index fund in seconds.",
    url: "https://axis-protocol.xyz",
    siteName: "Axis",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Axis – The first onchain index funds",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axis – Your Idea, Your ETF",
    description:
      "The first onchain index funds. Build, manage, and scale your on-chain index fund in seconds.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
