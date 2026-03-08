'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Cpu, Layers, Shield, Zap, Database, Activity } from 'lucide-react'

const layers = [
  {
    id: 'core',
    label: 'Layer 1',
    name: 'StrataRouter Core',
    sub: 'Python Library · MIT License',
    color: '#2563eb',
    glow: 'rgba(37,99,235,0.14)',
    border: 'rgba(37,99,235,0.28)',
    bg: 'rgba(37,99,235,0.04)',
    icon: Zap,
    features: ['HNSW Index', 'BM25 Scoring', 'Hybrid Routing', 'PyO3 Bindings'],
    stat: '< 2ms routing',
  },
  {
    id: 'runtime',
    label: 'Layer 2',
    name: 'StrataRouter Runtime',
    sub: 'Execution Engine · Rust/Axum',
    color: '#0891b2',
    glow: 'rgba(8,145,178,0.14)',
    border: 'rgba(8,145,178,0.28)',
    bg: 'rgba(8,145,178,0.04)',
    icon: Cpu,
    features: ['TCFP Workflows', 'Semantic Cache', 'Batch Dedup', 'REST API'],
    stat: '10K exec/day free',
  },
  {
    id: 'enterprise',
    label: 'Layer 3',
    name: 'StrataRouter Enterprise',
    sub: 'Governance Platform · Rust',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.14)',
    border: 'rgba(124,58,237,0.28)',
    bg: 'rgba(124,58,237,0.04)',
    icon: Shield,
    features: ['Multi-Agent Consensus', 'Audit Trails', 'RBAC/ABAC', 'Multi-Tenancy'],
    stat: 'SOC2 · HIPAA · ISO',
  },
]

const rightNodes = [
  { icon: Database, label: 'PostgreSQL',   sub: 'State persistence',       color: '#2563eb' },
  { icon: Activity, label: 'Prometheus',   sub: 'Metrics & alerts',         color: '#059669' },
  { icon: Layers,   label: 'OpenTelemetry',sub: 'Distributed tracing',      color: '#7c3aed' },
]

export default function ArchitectureSection() {
  const [visible, setVisible] = useState(false)
  const [activeLayer, setActiveLayer] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="architecture" ref={ref} className="section-padding relative overflow-hidden section-blue-tint">
      <div className="absolute inset-0 bg-dots opacity-[0.35]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(24px)',
            transition: 'all 0.6s ease',
          }}
        >
          <span className="badge badge-blue mb-5">Architecture</span>
          <h2
            className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Three layers.
            <span className="gradient-text-blue"> One platform.</span>
          </h2>
          <p className="text-slate-500 text-[17px] leading-relaxed">
            Start with the free Core, add production execution with Runtime, scale
            to enterprise governance — each layer independently deployable.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_260px] gap-8 lg:gap-12 items-start">

          {/* Layer stack */}
          <div className="space-y-3">
            {layers.map((layer, i) => {
              const Icon = layer.icon
              const isActive = activeLayer === layer.id
              return (
                <div
                  key={layer.id}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className="relative rounded-2xl border cursor-default transition-all duration-300 bg-white"
                  style={{
                    borderColor: isActive ? layer.border : 'rgba(15,23,42,0.09)',
                    background: isActive ? layer.bg : '#ffffff',
                    boxShadow: isActive
                      ? `0 0 0 1px ${layer.border}, 0 8px 32px rgba(15,23,42,0.08), 0 0 48px -8px ${layer.glow}`
                      : 'var(--shadow-card)',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'none' : 'translateY(24px)',
                    transition: `all 0.3s ease, opacity 0.55s ease ${i * 120}ms, transform 0.55s ease ${i * 120}ms`,
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full transition-opacity duration-300"
                    style={{ background: layer.color, opacity: isActive ? 1 : 0.3 }}
                  />

                  <div className="p-5 pl-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: `${layer.color}12`, border: `1px solid ${layer.color}25` }}
                        >
                          <Icon size={18} style={{ color: layer.color }} />
                        </div>
                        <div>
                          <span className="text-[10.5px] font-bold uppercase tracking-[0.1em]" style={{ color: layer.color }}>
                            {layer.label}
                          </span>
                          <h3 className="text-[15px] font-bold text-slate-900 leading-tight">{layer.name}</h3>
                        </div>
                      </div>
                      <span
                        className="text-[11px] font-bold px-2.5 py-1 rounded-lg"
                        style={{ color: layer.color, background: `${layer.color}10`, border: `1px solid ${layer.color}20` }}
                      >
                        {layer.stat}
                      </span>
                    </div>

                    <p className="text-[12px] text-slate-400 mb-3 ml-12">{layer.sub}</p>

                    <div className="flex flex-wrap gap-2 ml-12">
                      {layer.features.map((f) => (
                        <span
                          key={f}
                          className="text-[11.5px] px-2.5 py-1 rounded-lg font-medium text-slate-600 border border-slate-200 bg-slate-50"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Center connector */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-4 pt-16">
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-300 to-slate-200" />
              <ArrowRight size={14} className="rotate-90 text-slate-300" />
              <div className="text-[9px] uppercase tracking-widest font-bold text-center whitespace-nowrap text-slate-400">
                Data Flow
              </div>
              <ArrowRight size={14} className="rotate-90 text-slate-300" />
              <div className="w-px h-16 bg-gradient-to-b from-slate-200 to-transparent" />
            </div>
          </div>

          {/* Right: Infrastructure nodes */}
          <div
            className="space-y-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(24px)',
              transition: 'all 0.7s ease 0.4s',
            }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">Infrastructure</p>
            {rightNodes.map((node) => {
              const Icon = node.icon
              return (
                <div
                  key={node.label}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all cursor-default"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${node.color}10`, border: `1px solid ${node.color}20` }}
                  >
                    <Icon size={15} style={{ color: node.color }} />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-slate-800">{node.label}</div>
                    <div className="text-[11px] text-slate-400">{node.sub}</div>
                  </div>
                </div>
              )
            })}

            {/* LLM providers */}
            <div className="mt-4 p-4 rounded-xl border border-slate-200 bg-white">
              <p className="text-[10.5px] uppercase tracking-[0.12em] font-bold text-slate-400 mb-3">LLM Providers</p>
              <div className="grid grid-cols-2 gap-1.5">
                {['🧠 GPT-5', '🔮 Claude 4.5', '🌐 Gemini 3.1', '🏠 Local Models'].map((m) => (
                  <span key={m} className="text-[11.5px] text-slate-500 font-medium">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div
          className="mt-16 grid sm:grid-cols-3 gap-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(24px)',
            transition: 'all 0.6s ease 0.55s',
          }}
        >
          {[
            { step: '01', title: 'Query arrives',    desc: 'Your application sends a natural-language query to the router.' },
            { step: '02', title: 'Hybrid scoring',   desc: 'Core scores via dense embeddings + BM25 + rules in under 2ms.' },
            { step: '03', title: 'Routed & executed',desc: 'Runtime executes the matched handler with caching and observability.' },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span
                className="text-[36px] font-black leading-none shrink-0 text-slate-100"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {s.step}
              </span>
              <div>
                <h4 className="text-[14px] font-bold text-slate-900 mb-1">{s.title}</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
