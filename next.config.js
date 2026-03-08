/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── Static export for Cloudflare Pages ──────────────────────────
  output: 'export',
  trailingSlash: true,

  reactStrictMode: true,

  // Image optimisation must be disabled for static export
  // (no Next.js server available at runtime on Cloudflare Pages)
  images: {
    unoptimized: true,
  },

  // headers() and redirects() are NOT supported with output:'export'.
  // Security headers → handled by public/_headers
  // Redirects        → handled by public/_redirects
}

module.exports = nextConfig
