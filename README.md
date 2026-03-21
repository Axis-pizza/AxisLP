# Axis Landing Page

The official landing page for [Axis Protocol](https://axis-protocol.xyz) — the first on-chain index funds on Solana.

**Live:** [axis-protocol.xyz](https://axis-protocol.xyz)

## Overview

Axis lets you discover, create, and invest in on-chain index funds (ETFs) on Solana. This landing page introduces the protocol with:

- **Hero** — 3D coin swarm animation (Three.js) with "Your Idea. Your ETF." headline
- **Why Axis** — Clean editorial grid explaining one-click portfolios, permissionless creation, auto rebalancing
- **How It Works** — Scroll-driven walkthrough with phone mockup videos (Discover → Invest → Create)
- **Mechanism** — Animated auction cycle showing the License Auction value capture system
- **CTA** — Launch app + docs links
- **Ambassador** — Ambassador program page

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| 3D | Three.js + React Three Fiber |
| Font | Lora (Google Fonts) |
| Deploy | Cloudflare Pages |

## Getting Started

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build

# Preview build
npx serve out
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout (Lora font, metadata)
│   ├── globals.css        # Theme, glass effects, animations
│   ├── ambassador/        # Ambassador program
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── license/           # License
│   └── copyright/         # Copyright
├── components/
│   ├── Hero.tsx           # 3D coin swarm + headline
│   ├── WhyAxis.tsx        # Feature grid
│   ├── HowItWorks.tsx     # Scroll-driven walkthrough
│   ├── Mechanism.tsx      # Auction cycle animation
│   ├── CTA.tsx            # Call to action
│   ├── Navbar.tsx         # Fixed nav with mobile menu
│   └── Footer.tsx         # Links + legal
└── public/
    ├── logo.png           # Axis logo (white)
    ├── icon.jpg           # Axis icon (dark bg)
    ├── og-image.png       # Open Graph image
    └── videos/            # How It Works demo videos
```

## Design System

- **Background:** `#050505` (obsidian black)
- **Accent:** `#D97706` (gold)
- **Font:** Lora Regular (serif) — unified across all text
- **Glass cards:** `backdrop-filter: blur(24px)` with copper-gold gradient borders
- **Animations:** Spring physics via Framer Motion

## Deployment

Deployed to Cloudflare Pages:

```bash
npm run build
npx wrangler pages deploy out
```

Build command: `npm run build`
Output directory: `out`

## Related

- [Axis MVP (Web App)](https://github.com/Axis-pizza/Axis_MVP) — Main web application
- [Axis Mobile](https://github.com/Axis-pizza/axis-mobile) — Solana Seeker mobile app
- [App](https://axs.pizza) — Live web app
- [Docs](https://muse-7.gitbook.io/axis/product-docs) — Product documentation

## License

Proprietary — Axis Protocol
