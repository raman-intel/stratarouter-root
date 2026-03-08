/**
 * StrataRouter — Icon Generator
 * Generates all required favicon and app icon PNGs from favicon.svg
 *
 * Usage:
 *   npm install sharp --save-dev
 *   node scripts/generate-icons.js
 */

const path = require('path')
const fs   = require('fs')

// ── SVG source ────────────────────────────────────────────────────
const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="8" fill="url(#g)"/>
  <path d="M16 7L9 16h6l-1 9 8-9h-6l1-9z" fill="white" stroke="white" stroke-width="0.5" stroke-linejoin="round"/>
</svg>`

// ── OG image SVG (1200×630) ───────────────────────────────────────
const OG_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" fill="none">
  <rect width="1200" height="630" fill="#05050a"/>
  <!-- Grid lines -->
  <line x1="0" y1="0" x2="1200" y2="0" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
  <line x1="0" y1="315" x2="1200" y2="315" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
  <!-- Glow orbs -->
  <circle cx="200" cy="200" r="300" fill="rgba(37,99,235,0.08)"/>
  <circle cx="1000" cy="430" r="250" fill="rgba(6,182,212,0.06)"/>
  <!-- Logo icon -->
  <rect x="92" y="200" width="80" height="80" rx="20" fill="url(#grad)"/>
  <path d="M132 218L113 240h15l-2.5 22.5 20-22.5h-15l2.5-22.5z" fill="white" stroke="white" stroke-width="1" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <!-- Title text (SVG text fallback — real OG images use real fonts) -->
  <text x="196" y="258" font-family="system-ui,sans-serif" font-size="52" font-weight="800" fill="white" letter-spacing="-1">StrataRouter</text>
  <text x="92" y="330" font-family="system-ui,sans-serif" font-size="24" fill="rgba(148,163,184,1)">Production-grade semantic routing for AI applications</text>
  <text x="92" y="480" font-family="system-ui,sans-serif" font-size="20" fill="rgba(96,165,250,1)">8.7ms P99  ·  18K req/s  ·  95.4% accuracy  ·  MIT Licensed</text>
</svg>`

// ── Sizes to generate ─────────────────────────────────────────────
const ICONS = [
  { name: 'favicon-16x16.png',          size: 16  },
  { name: 'favicon-32x32.png',          size: 32  },
  { name: 'apple-touch-icon.png',       size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
]

const PUBLIC = path.join(__dirname, '..', 'public')

async function main() {
  let sharp
  try {
    sharp = require('sharp')
  } catch {
    console.error('\n❌  sharp not found. Install it first:\n\n    npm install sharp --save-dev\n')
    process.exit(1)
  }

  console.log('\n🎨  Generating icons for StrataRouter...\n')

  const svgBuf = Buffer.from(SVG)
  const ogBuf  = Buffer.from(OG_SVG)

  for (const { name, size } of ICONS) {
    const dest = path.join(PUBLIC, name)
    await sharp(svgBuf).resize(size, size).png().toFile(dest)
    console.log(`  ✓  ${name.padEnd(34)} ${size}×${size}`)
  }

  // OG image
  const ogDest = path.join(PUBLIC, 'og-image.png')
  await sharp(ogBuf).resize(1200, 630).png().toFile(ogDest)
  console.log(`  ✓  og-image.png                    1200×630`)

  // Update site.webmanifest
  const manifest = {
    name: 'StrataRouter',
    short_name: 'StrataRouter',
    description: 'Production-grade semantic routing for AI applications',
    start_url: '/',
    display: 'standalone',
    background_color: '#05050a',
    theme_color: '#2563eb',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
  fs.writeFileSync(path.join(PUBLIC, 'site.webmanifest'), JSON.stringify(manifest, null, 2))
  console.log(`  ✓  site.webmanifest                updated`)

  console.log('\n✅  All icons generated successfully!\n')
  console.log('   Next steps:')
  console.log('   1. Check /public for the generated files')
  console.log('   2. Run `npm run build` and verify in browser\n')
}

main().catch(err => {
  console.error('\n❌  Error:', err.message)
  process.exit(1)
})
