import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Axis AI Agent – MCP Server",
  description: "Create on-chain ETF vaults on Solana directly from your AI agent using the Axis MCP Server.",
  openGraph: {
    title: "Axis AI Agent – MCP Server",
    description: "Create on-chain ETF vaults on Solana directly from your AI agent using the Axis MCP Server.",
    url: "https://axis-protocol.xyz/mcp",
  },
  twitter: {
    title: "Axis AI Agent – MCP Server",
    description: "Create on-chain ETF vaults on Solana directly from your AI agent using the Axis MCP Server.",
  },
};

export default function MCPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}