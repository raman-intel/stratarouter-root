'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Github, Copy, Check, Zap, ChevronRight } from 'lucide-react'

const CODE_LINES = [
  { text: 'from stratarouter import Router, Route', type: 'import' },
  { text: '', type: 'blank' },
  { text: '# Initialize with any embedding model', type: 'comment' },
  { text: 'router = Router(encoder="all-MiniLM-L6-v2")', type: 'code' },
  { text: '', type: 'blank' },
  { text: '# Define intelligent routes', type: 'comment' },
  { text: 'router.add(Route(', type: 'code' },
  { text: '    id="billing",', type: 'code' },
  { text: '    description="Billing and payment questions",', type: 'string' },
  { text: '    keywords=["invoice", "billing", "refund"]', type: 'array' },
  { text: '))', type: 'code' },
  { text: '', type: 'blank' },
  { text: 'router.build_index()  # O(n log n) HNSW', type: 'comment' },
  { text: '', type: 'blank' },
  { text: '# Route queries — blazing fast', type: 'comment' },
  { text: 'result = router.route("I need my April invoice")', type: 'code' },
  { text: '', type: 'blank' },
  { text: 'print(result.route_id)    # → "billing"', type: 'result' },
  { text: 'print(result.confidence)  # → 0.94', type: 'result' },
  { text: 'print(result.latency_ms)  # → 1.8ms ⚡', type: 'result' },
]

function renderLine(line: { text: string; type: string }) {
  if (!line.text) return <>&nbsp;</>
  switch (line.type) {
    case 'import':
      return (
        <>
          <span className="token-keyword">from</span>
          <span className="text-slate-300"> stratarouter </span>
          <span className="token-keyword">import</span>
          <span className="token-class"> Router, Route</span>
        </>
      )
    case 'comment':
      return <span className="token-comment">{line.text}</span>
    case 'result':
      return (
        <>
          <span className="token-function">print</span>
          <span className="token-punctuation">(</span>
          <span className="text-slate-300">{line.text.split('(')[1].split(')')[0]}</span>
          <span className="token-punctuation">)</span>
          <span className="token-comment">  {line.text.split(')')[1]}</span>
        </>
      )
    case 'string':
      return (
        <>
          <span className="text-slate-500">{'    '}description=</span>
          <span className="token-string">&quot;Billing and payment questions&quot;</span>
          <span className="text-slate-500">,</span>
        </>
      )
    case 'array':
      return (
        <>
          <span className="text-slate-500">{'    '}keywords=</span>
          <span className="token-punctuation">[</span>
          <span className="token-string">&quot;invoice&quot;</span>
          <span className="token-punctuation">, </span>
          <span className="token-string">&quot;billing&quot;</span>
          <span className="token-punctuation">, </span>
          <span className="token-string">&quot;refund&quot;</span>
          <span className="token-punctuation">]</span>
        </>
      )
    default:
      return <span className="text-slate-300">{line.text}</span>
  }
}

const METRICS = [
  { value: '8.7ms', label: 'P99 Latency',  sub: '20× faster', color: '#2563eb' },
  { value: '18K/s', label: 'Throughput',   sub: '40× higher', color: '#0891b2' },
  { value: '95.4%', label: 'Accuracy',     sub: '+12.7 pts',  color: '#059669' },
]

const TRUST = [
  { dot: '#059669', label: 'MIT Licensed' },
  { dot: '#2563eb', label: 'Python 3.8+' },
  { dot: '#d97706', label: 'Rust 1.70+' },
  { dot: '#7c3aed', label: 'SOC 2 Ready' },
]

export default function HeroSection() {
  const [copied, setCopied] = useState(false)
  const [visible, setVisible] = useState(false)
  const [codeVisible, setCodeVisible] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 80)
    const t2 = setTimeout(() => setCodeVisible(true), 360)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden hero-bg">

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Soft blue orb — top-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 900,
          height: 900,
          top: '-300px',
          left: '-200px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 65%)',
          filter: 'blur(60px)',
          animation: 'hero-orb-1 18s ease-in-out infinite',
        }}
      />
      {/* Soft cyan orb — bottom-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          bottom: '-200px',
          right: '-150px',
          background: 'radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 65%)',
          filter: 'blur(60px)',
          animation: 'hero-orb-2 22s ease-in-out infinite',
        }}
      />
      {/* Soft violet — center right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          top: '30%',
          right: '8%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)',
          filter: 'blur(80px)',
          animation: 'hero-orb-3 26s ease-in-out infinite',
        }}
      />

      {/* Announcement pill */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div className="flex justify-center">
          <a
            href="https://github.com/agentdyne9/SRouter2/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-slate-600 font-semibold">v2.1 — GPT-5 &amp; Claude 4.5 Sonnet support now live</span>
            <ChevronRight size={11} className="text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        <div className="grid lg:grid-cols-[1fr_1.08fr] gap-12 xl:gap-20 items-center">

          {/* ── Left column ───────────────────────────── */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
            }}
          >
            {/* Category label */}
            <div className="flex items-center gap-2 mb-6">
              <span className="badge badge-blue">
                <Zap size={9} className="text-blue-600" />
                Semantic Routing Engine
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-black leading-[1.02] tracking-[-0.04em] mb-6 text-slate-900"
              style={{
                fontSize: 'clamp(2.6rem, 5.5vw, 4.6rem)',
                fontFamily: "'Bricolage Grotesque', sans-serif",
              }}
            >
              Semantic routing
              <br />
              for{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 50%, #7c3aed 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradient-shift 5s ease infinite',
                }}
              >
                production AI.
              </span>
            </h1>

            <p
              className="text-[17px] sm:text-[18px] text-slate-500 leading-[1.7] mb-8 max-w-[480px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Route AI queries with{' '}
              <span className="text-slate-800 font-semibold">20× faster</span> latency,{' '}
              <span className="text-slate-800 font-semibold">95.4% accuracy</span>, and{' '}
              <span className="text-slate-800 font-semibold">33× less memory</span>.
              Rust core. Python-first API. Enterprise governance built in.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/pricing" className="btn-primary text-[15px] px-7 py-3.5">
                Start for free
                <ArrowRight size={15} />
              </Link>
              <a
                href="https://github.com/agentdyne9/SRouter2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[15px] px-7 py-3.5"
              >
                Read the docs
              </a>
              <a
                href="https://github.com/agentdyne9/SRouter2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-[15px] px-4 py-3.5 text-slate-600"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>

            {/* pip install pill */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm mb-8 hover:border-slate-300 hover:shadow-md transition-all">
              <span className="text-slate-400 font-mono text-[12px] select-none">$</span>
              <code
                className="font-mono text-[13.5px] text-blue-600 tracking-tight"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                pip install stratarouter
              </code>
              <button
                onClick={() => handleCopy('pip install stratarouter')}
                className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all ml-1"
                aria-label="Copy"
              >
                {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
              </button>
            </div>

            {/* Metric chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="metric-chip"
                  style={{ minWidth: 90 }}
                >
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{m.label}</span>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="font-black text-[22px] tracking-tight leading-none"
                      style={{ color: m.color, fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                      {m.value}
                    </span>
                    <span className="text-[11px] text-slate-400 font-semibold">{m.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-5 text-[12px] text-slate-400 font-semibold">
              {TRUST.map((t) => (
                <span key={t.label} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.dot }} />
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right column — Code demo ───────────────── */}
          <div
            style={{
              opacity: codeVisible ? 1 : 0,
              transform: codeVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div className="relative">
              {/* Ambient glow behind code block */}
              <div
                className="absolute -inset-6 rounded-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />

              <div className="code-block relative">
                {/* Window chrome */}
                <div className="code-header">
                  <div className="code-dot bg-[#ff5f57]" />
                  <div className="code-dot bg-[#ffbd2e]" />
                  <div className="code-dot bg-[#28c840]" />
                  <span className="text-slate-500 text-xs ml-3 font-medium">quickstart.py</span>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/25 text-[10px] text-emerald-400 font-bold">
                      Python 3.11
                    </span>
                    <button
                      onClick={() => handleCopy(CODE_LINES.map(l => l.text).join('\n'))}
                      className="p-1.5 rounded-md text-slate-500 hover:text-slate-200 hover:bg-white/[0.08] transition-all"
                      aria-label="Copy code"
                    >
                      {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    </button>
                  </div>
                </div>

                {/* Code body */}
                <div className="code-body">
                  <pre className="text-[13px] leading-[1.78]">
                    {CODE_LINES.map((line, i) => (
                      <span key={i} className="block">
                        {renderLine(line)}
                      </span>
                    ))}
                  </pre>
                </div>

                {/* Output footer */}
                <div className="px-6 py-3 border-t border-white/[0.055] bg-white/[0.018]">
                  <div className="flex items-center gap-2 text-[11.5px] font-mono flex-wrap">
                    <span className="text-slate-600">Output:</span>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 font-semibold">route: billing</span>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 font-semibold">conf: 0.94</span>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 font-semibold">
                      <Zap size={10} />
                      1.8ms
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Below-code integrations hint */}
            <div className="mt-5 flex items-center justify-end gap-3 flex-wrap">
              <span className="text-xs text-slate-400 font-semibold">Works with</span>
              {['🦜 LangChain', '🕸️ LangGraph', '🤖 CrewAI', '⚡ AutoGen'].map((f) => (
                <span
                  key={f}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold text-slate-500 border border-slate-200 bg-white hover:border-slate-300 hover:text-slate-700 transition-colors shadow-sm"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 pointer-events-none">
        <div className="w-[22px] h-[36px] rounded-full border border-slate-300 flex items-start justify-center pt-2">
          <div className="w-[3px] h-[8px] rounded-full bg-slate-400 animate-bounce-soft" />
        </div>
      </div>
    </section>
  )
}
