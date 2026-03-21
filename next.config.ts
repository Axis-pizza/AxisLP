import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  // ← これを追加 (静的エクスポート)
  images: {
    unoptimized: true, // ← これを追加 (Cloudflare Pages用)
  },
};

export default nextConfig;