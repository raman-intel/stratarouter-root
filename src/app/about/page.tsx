import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Cpu, Github, Mail, ExternalLink } from 'lucide-react'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind StrataRouter — built by Inteleion to solve the hardest problems in production AI routing.',
}

const timeline = [
  {
    date: 'Q1 2024',
    title: 'The problem we had to solve',
    desc: "We were building AI pipelines and kept hitting the same wall: existing semantic routers were too slow, too memory-hungry, and too inaccurate for production use. semantic-router's 178ms P99 was killing user experience. We decided to build the router we wished existed.",
  },
  {
    date: 'Q3 2024',
    title: 'Rust core, Python heart',
    desc: 'After extensive benchmarking, the decision was clear: the routing engine had to be Rust. We built a custom HNSW index with SIMD-accelerated cosine similarity and wrapped it in clean Python bindings via PyO3. 8.7ms P99. 18,000 req/s. The gap was real.',
  },
  {
    date: 'Q4 2024',
    title: 'Runtime and Enterprise',
    desc: 'Teams started asking for more: execution workflows, semantic caching, governance for regulated industries. We built the TCFP Runtime engine and the Enterprise governance layer — multi-agent consensus, immutable audit trails, multi-tenancy.',
  },
  {
    date: 'Feb 2026',
    title: 'v2.1 — the ecosystem expands',
    desc: 'GPT-5, Claude 4.5, and Gemini 3.1 support. 95.4% routing accuracy. OpenTelemetry 2.0. Framework integrations for the entire LLM ecosystem. StrataRouter has become the routing infrastructure layer that AI teams build on.',
  },
]

const values = [
  {
    icon: Zap,
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.08)',
    border: 'rgba(37,99,235,0.15)',
    title: 'Performance is a feature',
    desc: "Every millisecond matters in production. We don't accept 'fast enough' — we benchmark obsessively and publish the results.",
  },
  {
    icon: Shield,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.15)',
    title: 'Open source at the core',
    desc: 'The routing engine is MIT licensed and always will be. Enterprise features pay for continued open source development.',
  },
  {
    icon: Cpu,
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.15)',
    title: 'Google-standard quality',
    desc: '95.8% test coverage, comprehensive benchmarks, and thoughtful API design. We ship software we would bet our own systems on.',
  },
]

export default function AboutPage() {
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
          <span className="badge badge-blue mb-5">About</span>
          <h1
            className="font-black text-slate-900 mb-5 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Built to solve a real problem
            <br />
            <span className="gradient-text-blue">in production AI</span>
          </h1>
          <p
            className="text-[18px] text-slate-500 leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            StrataRouter was created by{' '}
            <a
              href="https://inteleion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-900 transition-colors underline underline-offset-2"
            >
              Inteleion
            </a>{' '}
            when we couldn&apos;t find a semantic router fast enough, accurate enough,
            or light enough to run in production at scale.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="glass-card p-7">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: v.bg, border: `1px solid ${v.border}` }}
                  >
                    <Icon size={20} style={{ color: v.color }} />
                  </div>
                  <h3 className="text-[16px] font-bold text-slate-900 mb-2 tracking-tight">{v.title}</h3>
                  <p
                    className="text-[13.5px] text-slate-500 leading-relaxed"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {v.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16" style={{ background: '#f8fafc' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl font-black text-slate-900 tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              The story so far
            </h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-[100px] top-3 bottom-3 w-px hidden sm:block"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(37,99,235,0.25) 20%, rgba(37,99,235,0.25) 80%, transparent)' }}
            />
            <div className="space-y-8">
              {timeline.map((t) => (
                <div key={t.date} className="sm:flex gap-8 items-start">
                  <div className="hidden sm:block w-[100px] shrink-0 text-right pt-1">
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">{t.date}</span>
                  </div>
                  <div className="hidden sm:flex items-start pt-1">
                    <div
                      className="w-3 h-3 rounded-full shrink-0 relative z-10"
                      style={{ background: '#2563eb', boxShadow: '0 0 10px rgba(37,99,235,0.35)', marginLeft: '-6px' }}
                    />
                  </div>
                  <div className="flex-1 glass-card p-6">
                    <div className="sm:hidden text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-2">{t.date}</div>
                    <h3 className="text-[15px] font-bold text-slate-900 mb-2 tracking-tight">{t.title}</h3>
                    <p
                      className="text-[13.5px] text-slate-500 leading-relaxed"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="glass-card p-8 sm:p-10 text-center"
            style={{ borderColor: 'rgba(37,99,235,0.12)' }}
          >
            <h2
              className="text-2xl font-black text-slate-900 mb-3 tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Built by Inteleion
            </h2>
            <p
              className="text-[14.5px] text-slate-500 leading-relaxed mb-6 max-w-xl mx-auto"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Inteleion builds infrastructure for the AI era. StrataRouter is our
              open-core product for intelligent query routing and AI agent orchestration.
              We&apos;re a small team with a big commitment to correctness and performance.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://inteleion.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[13.5px] px-5 py-2.5"
              >
                Visit Inteleion.com
                <ExternalLink size={13} />
              </a>
              <a
                href="https://github.com/agentdyne9/SRouter2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[13.5px] px-5 py-2.5"
              >
                <Github size={14} />
                View on GitHub
              </a>
              <a
                href="mailto:support@stratarouter.com"
                className="btn-secondary text-[13.5px] px-5 py-2.5"
              >
                <Mail size={14} />
                Contact us
              </a>
            </div>
            <p className="text-[12px] text-slate-400 mt-5">support@stratarouter.com</p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
