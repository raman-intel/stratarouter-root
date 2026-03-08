'use client'

import { useEffect, useRef, useState } from 'react'
import { Copy, Check } from 'lucide-react'

const integrations = [
  { name: 'LangChain',    emoji: '🦜', desc: 'Chain, Retriever, LCEL', tier: 'popular' },
  { name: 'LangGraph',    emoji: '🕸️', desc: 'Graph routing nodes',    tier: 'popular' },
  { name: 'CrewAI',       emoji: '🤖', desc: 'Routed agent workflows',  tier: 'popular' },
  { name: 'AutoGen',      emoji: '⚡', desc: 'Group chat router',       tier: 'popular' },
  { name: 'OpenAI',       emoji: '🧠', desc: 'GPT-5 Assistants',        tier: 'provider' },
  { name: 'Anthropic',    emoji: '🔮', desc: 'Claude 4.5 Sonnet',       tier: 'provider' },
  { name: 'Google',       emoji: '🌐', desc: 'Vertex AI agents',        tier: 'provider' },
  { name: 'Hugging Face', emoji: '🤗', desc: 'Any SBERT model',         tier: 'provider' },
  { name: 'Docker',       emoji: '🐳', desc: 'One-line deploy',         tier: 'infra' },
  { name: 'Kubernetes',   emoji: '☸️', desc: 'Helm chart ready',        tier: 'infra' },
  { name: 'Prometheus',   emoji: '📊', desc: 'Metrics & alerting',      tier: 'infra' },
  { name: 'PostgreSQL',   emoji: '🐘', desc: 'State persistence',       tier: 'infra' },
]

const installs = [
  { label: 'Core (free)', cmd: 'pip install stratarouter' },
  { label: 'OpenAI',      cmd: 'pip install "stratarouter[openai]"' },
  { label: 'All extras',  cmd: 'pip install "stratarouter[all]"' },
  { label: 'Rust crate',  cmd: 'cargo add stratarouter-core' },
  { label: 'Docker',      cmd: 'docker pull stratarouter/runtime:latest' },
]

const MARQUEE_ITEMS = [...integrations, ...integrations]

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex gap-3 overflow-hidden">
      <div
        className="flex gap-3 shrink-0"
        style={{ animation: `marquee-scroll${reverse ? '-rev' : ''} 35s linear infinite` }}
      >
        {MARQUEE_ITEMS.map((integ, i) => (
          <div
            key={`${integ.name}-${i}`}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white shrink-0 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
          >
            <span className="text-[20px]">{integ.emoji}</span>
            <div>
              <div className="text-[12.5px] font-semibold text-slate-800 leading-tight">{integ.name}</div>
              <div className="text-[10.5px] text-slate-400 leading-tight">{integ.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex gap-3 shrink-0"
        aria-hidden
        style={{ animation: `marquee-scroll${reverse ? '-rev' : ''} 35s linear infinite` }}
      >
        {MARQUEE_ITEMS.map((integ, i) => (
          <div
            key={`${integ.name}-${i}-b`}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white shrink-0 shadow-sm"
          >
            <span className="text-[20px]">{integ.emoji}</span>
            <div>
              <div className="text-[12.5px] font-semibold text-slate-800 leading-tight">{integ.name}</div>
              <div className="text-[10.5px] text-slate-400 leading-tight">{integ.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function IntegrationsSection() {
  const [activeInstall, setActiveInstall] = useState(0)
  const [copied, setCopied] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.06 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(installs[activeInstall].cmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const baseAnim = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(24px)',
    transition: `all 0.6s ease ${delay}s`,
  })

  return (
    <section ref={ref} id="integrations" className="section-padding relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14" style={baseAnim(0)}>
          <span className="badge badge-violet mb-5">Integrations</span>
          <h2
            className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Works with your
            <span className="gradient-text-brand"> entire AI stack</span>
          </h2>
          <p
            className="text-slate-500 text-[17px] leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Native integrations for every major framework, LLM provider, and infrastructure tool.
            Drop in StrataRouter without rewriting your pipeline.
          </p>
        </div>

        {/* Marquee rows */}
        <div
          className="relative mb-14 overflow-hidden"
          style={{
            ...baseAnim(0.12),
            maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        >
          <div className="space-y-3">
            <MarqueeRow />
            <MarqueeRow reverse />
          </div>
        </div>

        {/* Install panel */}
        <div className="max-w-2xl mx-auto" style={baseAnim(0.24)}>
          <div className="glass-card overflow-hidden">
            <div
              className="h-[2px]"
              style={{ background: 'linear-gradient(90deg, #7c3aed, #2563eb, #0891b2)' }}
            />

            {/* Tab pills */}
            <div className="flex gap-1 p-3 border-b border-slate-100 overflow-x-auto scrollbar-hide">
              {installs.map((inst, i) => (
                <button
                  key={inst.label}
                  onClick={() => setActiveInstall(i)}
                  className="px-3 py-1.5 rounded-lg text-[12px] font-semibold whitespace-nowrap transition-all"
                  style={{
                    background: activeInstall === i ? '#2563eb' : 'transparent',
                    color: activeInstall === i ? '#fff' : 'rgb(100,116,139)',
                    boxShadow: activeInstall === i ? '0 2px 8px rgba(37,99,235,0.25)' : 'none',
                  }}
                >
                  {inst.label}
                </button>
              ))}
            </div>

            {/* Command row */}
            <div className="flex items-center gap-3 px-5 py-4 bg-slate-950">
              <span
                className="font-mono text-[13px] select-none shrink-0"
                style={{ color: 'rgba(148,163,184,0.5)' }}
              >$</span>
              <code
                className="flex-1 font-mono text-[13.5px] text-cyan-400 tracking-tight"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {installs[activeInstall].cmd}
              </code>
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg text-[12px] font-semibold border border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20 hover:bg-white/5 transition-all flex items-center gap-1.5"
              >
                {copied
                  ? <><Check size={11} className="text-emerald-400" /> Copied</>
                  : <><Copy size={11} /> Copy</>
                }
              </button>
            </div>
          </div>

          <p className="text-center text-[12px] text-slate-400 mt-4">
            Python 3.8+ · MIT License · Rust 1.70+ · Docker available
          </p>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  )
}
