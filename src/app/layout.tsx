import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://stratarouter.com'),
  title: {
    default: 'StrataRouter — Lightning-Fast Semantic Routing for AI',
    template: '%s | StrataRouter',
  },
  description:
    'StrataRouter is a high-performance semantic routing engine for AI applications. 20× faster, 33× less memory, 95.4% accuracy. Built in Rust with Python bindings.',
  keywords: [
    'semantic routing', 'AI routing', 'LLM routing', 'agent orchestration',
    'intent classification', 'LangChain', 'LangGraph', 'CrewAI', 'AutoGen',
    'Rust', 'Python', 'HNSW', 'BM25', 'semantic search', 'AI infrastructure',
  ],
  authors:   [{ name: 'Inteleion', url: 'https://inteleion.com' }],
  creator:   'Inteleion',
  publisher: 'Inteleion',
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://stratarouter.com',
    siteName:    'StrataRouter',
    title:       'StrataRouter — Lightning-Fast Semantic Routing for AI',
    description: '20× faster. 95.4% accuracy. 64 MB memory. The routing infrastructure elite AI teams rely on.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'StrataRouter — Lightning-Fast Semantic Routing for AI' }],
  },
  twitter: {
    card:        'summary_large_image',
    site:        '@stratarouter',
    title:       'StrataRouter — Lightning-Fast Semantic Routing for AI',
    description: '20× faster, 33× less memory, 95.4% accuracy. The semantic router AI teams trust.',
    images:      ['/og-image.svg'],
  },
  robots: {
    index:     true,
    follow:    true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple:    [{ url: '/favicon.svg' }],
    other:    [{ rel: 'mask-icon', url: '/favicon.svg', color: '#2563eb' }],
  },
  manifest:   '/site.webmanifest',
  alternates: { canonical: 'https://stratarouter.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:ital,opsz,wght@0,6..30,300;0,6..30,400;0,6..30,500;0,6..30,600;0,6..30,700;0,6..30,800;1,6..30,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon"             href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon"             href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
