/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: false,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // /docs → GitHub README (docs.stratarouter.com does not yet exist)
      {
        source: '/docs',
        destination: 'https://github.com/agentdyne9/SRouter2#readme',
        permanent: false,
      },
      {
        source: '/docs/:path*',
        destination: 'https://github.com/agentdyne9/SRouter2#readme',
        permanent: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/agentdyne9/SRouter2',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
