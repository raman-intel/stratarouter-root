import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Engineering insights, product updates, and deep-dives on AI routing, semantic search, and production ML infrastructure.',
}

const posts = [
  {
    slug: 'why-rust-for-semantic-routing',
    date: 'February 18, 2026',
    readTime: '8 min read',
    tag: 'Engineering',
    tagColor: '#2563eb',
    tagBg: 'rgba(37,99,235,0.08)',
    tagBorder: 'rgba(37,99,235,0.18)',
    title: 'Why We Chose Rust for the StrataRouter Core',
    excerpt:
      "We benchmarked Python, Go, and Rust for the hot path in semantic routing. Rust won by a factor of 20× on P99 latency. Here's exactly what we found — including the surprising places where Python overhead shows up.",
    featured: true,
  },
  {
    slug: 'semantic-caching-deep-dive',
    date: 'January 30, 2026',
    readTime: '11 min read',
    tag: 'Performance',
    tagColor: '#059669',
    tagBg: 'rgba(5,150,105,0.08)',
    tagBorder: 'rgba(5,150,105,0.18)',
    title: "Inside StrataRouter's Semantic Cache: 85%+ Hit Rates in Production",
    excerpt:
      'Most semantic caches fail in production because they use exact hash matching. We use blake3 hashes combined with configurable semantic similarity thresholds. Here\'s the full design and the production numbers.',
    featured: false,
  },
  {
    slug: 'hnsw-index-explained',
    date: 'January 12, 2026',
    readTime: '14 min read',
    tag: 'Deep Dive',
    tagColor: '#7c3aed',
    tagBg: 'rgba(124,58,237,0.08)',
    tagBorder: 'rgba(124,58,237,0.18)',
    title: 'HNSW Indexing for Real-Time Semantic Routing: A Production Guide',
    excerpt:
      'Hierarchical Navigable Small World graphs give us O(log n) approximate nearest-neighbor search. We explain the algorithm from scratch, walk through our SIMD-accelerated implementation, and share the tuning parameters that matter most.',
    featured: false,
  },
  {
    slug: 'enterprise-governance-soc2',
    date: 'December 20, 2025',
    readTime: '9 min read',
    tag: 'Enterprise',
    tagColor: '#d97706',
    tagBg: 'rgba(217,119,6,0.08)',
    tagBorder: 'rgba(217,119,6,0.18)',
    title: 'Building SOC 2-Ready AI Infrastructure with StrataRouter Enterprise',
    excerpt:
      "Enterprise AI teams face a growing compliance burden. We designed StrataRouter's audit trail module from the ground up for SOC 2, HIPAA, and ISO 27001. This post walks through the cryptographic design and what auditors actually check for.",
    featured: false,
  },
  {
    slug: 'langchain-integration-guide',
    date: 'November 28, 2025',
    readTime: '6 min read',
    tag: 'Tutorial',
    tagColor: '#0891b2',
    tagBg: 'rgba(8,145,178,0.08)',
    tagBorder: 'rgba(8,145,178,0.18)',
    title: 'Integrating StrataRouter with LangChain in 5 Lines of Code',
    excerpt:
      'A step-by-step guide to adding StrataRouter to your LangChain application, including Chain, Retriever, and LCEL patterns. With working code you can run immediately.',
    featured: false,
  },
  {
    slug: 'v21-release-notes',
    date: 'February 1, 2026',
    readTime: '5 min read',
    tag: 'Release',
    tagColor: '#059669',
    tagBg: 'rgba(5,150,105,0.08)',
    tagBorder: 'rgba(5,150,105,0.18)',
    title: 'StrataRouter v2.1 — GPT-5, Claude 4.5 Sonnet & OpenTelemetry 2.0',
    excerpt:
      'v2.1 ships with support for GPT-5, Claude 4.5 Sonnet, Gemini 3.1, OpenTelemetry 2.0 distributed tracing, and 12 new accuracy improvements. Full changelog and migration notes.',
    featured: false,
  },
]

const GITHUB_BLOG_BASE = 'https://github.com/agentdyne9/SRouter2'

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)!
  const rest = posts.filter((p) => !p.featured)

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)' }}
      >
        <div className="absolute inset-0 bg-grid" />
        <div className="gradient-mesh" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-blue mb-5">Blog</span>
          <h1
            className="font-black text-slate-900 mb-5 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Engineering & product insights
          </h1>
          <p
            className="text-[18px] text-slate-500 leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Deep dives on AI routing, semantic search, production ML, and how we build StrataRouter.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href={GITHUB_BLOG_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-8 sm:p-10 relative overflow-hidden group block"
            style={{ borderColor: 'rgba(37,99,235,0.15)' }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: 'linear-gradient(90deg, #2563eb, #0891b2)' }}
            />
            <div className="flex items-center gap-3 mb-4">
              <span
                className="badge text-[10px]"
                style={{ color: featured.tagColor, background: featured.tagBg, border: `1px solid ${featured.tagBorder}` }}
              >
                <Tag size={9} />
                {featured.tag}
              </span>
              <span className="badge badge-amber text-[10px]">Featured</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-700 transition-colors"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {featured.title}
            </h2>
            <p
              className="text-[14.5px] text-slate-500 leading-relaxed mb-6 max-w-2xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-4 text-[12.5px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {featured.readTime}
              </span>
              <span>{featured.date}</span>
              <span className="link-arrow ml-auto text-[13px]">
                Read post
                <ArrowRight size={13} />
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Post grid */}
      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <a
                key={post.slug}
                href={GITHUB_BLOG_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex flex-col group"
              >
                <span
                  className="badge text-[10px] mb-4 self-start"
                  style={{ color: post.tagColor, background: post.tagBg, border: `1px solid ${post.tagBorder}` }}
                >
                  <Tag size={9} />
                  {post.tag}
                </span>
                <h3
                  className="text-[15px] font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-blue-700 transition-colors flex-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-[13px] text-slate-500 leading-relaxed mb-5 line-clamp-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-[11.5px] text-slate-400 mt-auto">
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                  <span className="ml-auto">{post.date}</span>
                  <ArrowRight
                    size={11}
                    className="opacity-0 group-hover:opacity-60 -translate-x-1 group-hover:translate-x-0 transition-all"
                  />
                </div>
              </a>
            ))}
          </div>

          <p className="text-center text-[13px] text-slate-400 mt-14">
            More posts coming soon.{' '}
            <a
              href="mailto:support@stratarouter.com"
              className="text-blue-600 hover:text-blue-700 transition-colors font-semibold"
            >
              Subscribe for updates
            </a>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
