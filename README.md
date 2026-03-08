# StrataRouter Product Site

> **stratarouter.com** — Official product site for StrataRouter, built with Next.js 14.

## Stack

| Layer         | Tech                                    |
|---------------|-----------------------------------------|
| Framework     | Next.js 14 (App Router)                 |
| Language      | TypeScript                              |
| Styling       | Tailwind CSS v3                         |
| Animations    | CSS animations + Framer Motion (ready)  |
| Icons         | Lucide React                            |
| Fonts         | Inter + JetBrains Mono (Google Fonts)   |
| Deploy        | Vercel                                  |

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build & Deploy

```bash
npm run build   # production build
npm run start   # local production preview
```

### Deploy to Vercel

```bash
npx vercel        # first time
npx vercel --prod # production deploy
```

Or connect the GitHub repo to Vercel for automatic deploys.

## Pages

| Route        | Description                        |
|--------------|------------------------------------|
| `/`          | Homepage — Hero, features, benchmarks, integrations, testimonials, CTA |
| `/pricing`   | Pricing — 3 tiers + FAQ + limits table |
| `/enterprise`| Enterprise — Governance, compliance, RBAC |
| `/about`     | About — Company, values, timeline  |
| `/docs`      | → Redirects to docs.stratarouter.com |

## Key Design Choices

- **Dark-first** design system built entirely in CSS custom properties
- **Glass-card** components with backdrop-filter blur
- **Gradient mesh** animated backgrounds
- **Noise texture** overlay for depth
- **HNSW-style grid** background texture
- **Intersection Observer** for scroll-triggered animations
- **Syntax-highlighted code blocks** without heavy deps (inline coloring)
- **Fully responsive** — mobile, tablet, desktop
- **Accessible** — focus rings, ARIA labels, semantic HTML

## Structure

```
src/
├── app/
│   ├── layout.tsx          — Root layout (Navbar + Footer + metadata)
│   ├── page.tsx            — Homepage
│   ├── globals.css         — Global design system
│   ├── pricing/page.tsx    — Pricing page
│   ├── enterprise/page.tsx — Enterprise page
│   └── about/page.tsx      — About page
├── components/
│   ├── Navbar.tsx          — Sticky navbar with dropdowns
│   ├── Footer.tsx          — Full footer with link grid
│   ├── HeroSection.tsx     — Animated hero with code demo
│   ├── StatsBar.tsx        — Animated performance stats
│   ├── FeaturesSection.tsx — 12-feature glass-card grid
│   ├── BenchmarkSection.tsx— Performance + feature comparison tables
│   ├── UseCasesSection.tsx — Tabbed use case code demo
│   ├── IntegrationsSection.tsx — Integration logos + install CLI
│   ├── TestimonialsSection.tsx — Masonry testimonial grid
│   └── CTASection.tsx      — Final CTA section
└── lib/
    └── utils.ts            — cn() utility + formatNumber
```

## Contact

- **Email**: support@stratarouter.com  
- **Parent company**: [inteleion.com](https://inteleion.com)
- **Docs**: [docs.stratarouter.com](https://docs.stratarouter.com)
