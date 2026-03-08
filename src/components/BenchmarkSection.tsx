'use client'

import { useEffect, useRef, useState } from 'react'
import { TrendingDown, TrendingUp, CheckCircle2, XCircle } from 'lucide-react'

const benchmarks = [
  { metric: 'P99 Latency',  sr: '8.7ms',    sem: '178ms',    llm: '245ms',   imp: '20–28×',    lower: true },
  { metric: 'Throughput',   sr: '18,000/s', sem: '450/s',    llm: '380/s',   imp: '40–47×',    lower: false },
  { metric: 'Memory',       sr: '64 MB',    sem: '2,100 MB', llm: '3,200 MB',imp: '33–50×',    lower: true },
  { metric: 'Accuracy',     sr: '95.4%',    sem: '84.7%',    llm: '82.3%',   imp: '+10–13 pts', lower: false },
  { metric: 'Cold Start',   sr: '< 50ms',   sem: '1,200ms',  llm: '2,000ms', imp: '24–40×',    lower: true },
]

const barData = [
  {
    label: 'Routing Speed',
    unit: 'req/s (higher = better)',
    bars: [
      { name: 'StrataRouter',    value: 18000, pct: 100, color: '#2563eb' },
      { name: 'semantic-router', value: 450,   pct: 2.5, color: '#cbd5e1' },
      { name: 'LlamaIndex',      value: 380,   pct: 2.1, color: '#e2e8f0' },
    ],
    format: (v: number) => v >= 1000 ? `${(v/1000).toFixed(0)}K/s` : `${v}/s`,
  },
  {
    label: 'P99 Latency',
    unit: 'ms (lower = better)',
    bars: [
      { name: 'StrataRouter',    value: 8.7,  pct: 3.5,  color: '#2563eb' },
      { name: 'semantic-router', value: 178,  pct: 72.6, color: '#cbd5e1' },
      { name: 'LlamaIndex',      value: 245,  pct: 100,  color: '#e2e8f0' },
    ],
    format: (v: number) => `${v}ms`,
    invert: true,
  },
  {
    label: 'Memory Usage',
    unit: 'MB (lower = better)',
    bars: [
      { name: 'StrataRouter',    value: 64,   pct: 2,    color: '#2563eb' },
      { name: 'semantic-router', value: 2100, pct: 65.6, color: '#cbd5e1' },
      { name: 'LlamaIndex',      value: 3200, pct: 100,  color: '#e2e8f0' },
    ],
    format: (v: number) => v >= 1000 ? `${(v/1000).toFixed(1)} GB` : `${v} MB`,
    invert: true,
  },
  {
    label: 'Routing Accuracy',
    unit: '% (higher = better)',
    bars: [
      { name: 'StrataRouter',    value: 95.4, pct: 100,  color: '#059669' },
      { name: 'semantic-router', value: 84.7, pct: 88.8, color: '#cbd5e1' },
      { name: 'LlamaIndex',      value: 82.3, pct: 86.3, color: '#e2e8f0' },
    ],
    format: (v: number) => `${v}%`,
  },
]

const featureCompare = [
  { name: 'Rust Core',            sr: true,  sem: false, llm: false },
  { name: 'Hybrid BM25 + Dense',  sr: true,  sem: false, llm: false },
  { name: 'HNSW Index',           sr: true,  sem: true,  llm: false },
  { name: 'Isotonic Calibration', sr: true,  sem: false, llm: false },
  { name: 'Semantic Cache',       sr: true,  sem: false, llm: true  },
  { name: 'TCFP Workflow Engine', sr: true,  sem: false, llm: false },
  { name: 'Enterprise Governance',sr: true,  sem: false, llm: false },
  { name: 'SOC 2 / HIPAA Ready',  sr: true,  sem: false, llm: false },
  { name: 'Multi-Tenancy',        sr: true,  sem: false, llm: false },
  { name: 'LangChain Integration',sr: true,  sem: true,  llm: true  },
  { name: 'OpenTelemetry',        sr: true,  sem: false, llm: false },
  { name: 'Freemium Tier',        sr: true,  sem: true,  llm: false },
]

function Tick({ yes }: { yes: boolean }) {
  return yes
    ? <CheckCircle2 size={17} className="check-yes mx-auto" />
    : <XCircle size={17} className="check-no opacity-25 mx-auto" />
}

function AnimatedBar({
  bar,
  animate,
  invert = false,
  format,
}: {
  bar: (typeof barData)[0]['bars'][0]
  animate: boolean
  invert?: boolean
  format: (v: number) => string
}) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!animate) return
    const t = setTimeout(() => setWidth(bar.pct), 80)
    return () => clearTimeout(t)
  }, [animate, bar.pct])

  const isTop = bar.name === 'StrataRouter'

  return (
    <div className="flex items-center gap-3">
      <span className="text-[12px] text-slate-400 w-28 shrink-0 text-right">{bar.name}</span>
      <div
        className="flex-1 h-7 rounded-lg overflow-hidden relative"
        style={{ background: 'rgba(15,23,42,0.05)' }}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-lg flex items-center px-2.5 transition-all"
          style={{
            width: `${width}%`,
            background: isTop
              ? 'linear-gradient(90deg, #1d4ed8, #2563eb)'
              : bar.color,
            transitionDuration: '0.9s',
            transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
            boxShadow: isTop ? '0 2px 8px rgba(37,99,235,0.2)' : 'none',
          }}
        >
          {width > 15 && (
            <span
              className="text-[11px] font-bold whitespace-nowrap"
              style={{ color: isTop ? '#fff' : '#94a3b8' }}
            >
              {format(bar.value)}
            </span>
          )}
        </div>
        {width <= 15 && (
          <span
            className="absolute top-1/2 -translate-y-1/2 text-[11px] font-bold whitespace-nowrap"
            style={{
              left: `max(${width}% + 6px, 2px)`,
              color: isTop ? '#2563eb' : '#94a3b8',
            }}
          >
            {format(bar.value)}
          </span>
        )}
      </div>
    </div>
  )
}

export default function BenchmarkSection() {
  const [tab, setTab]         = useState<'perf' | 'features'>('perf')
  const [visible, setVisible] = useState(false)
  const [barsGo, setBarsGo]   = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          setTimeout(() => setBarsGo(true), 350)
          observer.disconnect()
        }
      },
      { threshold: 0.06 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const baseAnim = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(24px)',
    transition: 'all 0.6s ease',
  }

  return (
    <section
      ref={ref}
      id="benchmarks"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #f8fafc 100%)' }}
    >
      <div className="absolute inset-0 bg-grid" style={{ opacity: 0.5 }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12" style={baseAnim}>
          <span className="badge badge-blue mb-5">Benchmarks</span>
          <h2
            className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            The performance gap is
            <span className="gradient-text-blue"> undeniable</span>
          </h2>
          <p
            className="text-slate-500 text-[17px] leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Independently verified benchmarks across leading semantic routing libraries.
            StrataRouter wins on every dimension that matters in production.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-1 p-1 rounded-xl border border-slate-200 bg-white shadow-sm">
            {(['perf', 'features'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-5 py-2 rounded-lg text-[13.5px] font-semibold transition-all"
                style={{
                  background: tab === t ? '#2563eb' : 'transparent',
                  color: tab === t ? '#fff' : 'rgb(100,116,139)',
                  boxShadow: tab === t ? '0 2px 10px rgba(37,99,235,0.28)' : 'none',
                }}
              >
                {t === 'perf' ? 'Performance' : 'Features'}
              </button>
            ))}
          </div>
        </div>

        {tab === 'perf' ? (
          <div className="space-y-6" style={{ ...baseAnim, transitionDelay: '0.15s' }}>
            {/* Visual bar charts */}
            <div className="grid sm:grid-cols-2 gap-4">
              {barData.map((group, gi) => (
                <div
                  key={group.label}
                  className="glass-card p-5"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'none' : 'translateY(20px)',
                    transition: `all 0.55s ease ${0.1 + gi * 0.08}s`,
                  }}
                >
                  <div className="mb-4">
                    <div className="text-[14px] font-bold text-slate-900 mb-0.5">{group.label}</div>
                    <div className="text-[11px] text-slate-400">{group.unit}</div>
                  </div>
                  <div className="space-y-3">
                    {group.bars.map((bar) => (
                      <AnimatedBar
                        key={bar.name}
                        bar={bar}
                        animate={barsGo}
                        invert={group.invert}
                        format={group.format}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed table */}
            <div className="glass-card overflow-hidden" style={{ ...baseAnim, transitionDelay: '0.35s' }}>
              <div
                className="h-[3px]"
                style={{ background: 'linear-gradient(90deg, #2563eb, #0891b2, #7c3aed)' }}
              />
              <div className="overflow-x-auto">
                <table className="benchmark-table w-full">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                          StrataRouter
                        </span>
                      </th>
                      <th>semantic-router</th>
                      <th>LlamaIndex</th>
                      <th>Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchmarks.map((row) => (
                      <tr key={row.metric}>
                        <td className="font-semibold text-slate-800">{row.metric}</td>
                        <td><span className="font-bold text-blue-600">{row.sr}</span></td>
                        <td className="text-slate-400">{row.sem}</td>
                        <td className="text-slate-400">{row.llm}</td>
                        <td>
                          <span
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11.5px] font-bold"
                            style={{
                              background: 'rgba(5,150,105,0.08)',
                              border: '1px solid rgba(5,150,105,0.18)',
                              color: '#059669',
                            }}
                          >
                            {row.lower ? <TrendingDown size={11} /> : <TrendingUp size={11} />}
                            {row.imp}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-3 border-t border-slate-100 text-[11.5px] text-slate-400">
                AWS c5.4xlarge (16 vCPU, 32 GB RAM) · 1 million queries · 100-route index · all-MiniLM-L6-v2 · January 2026
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-card overflow-hidden" style={{ ...baseAnim, transitionDelay: '0.15s' }}>
            <div
              className="h-[3px]"
              style={{ background: 'linear-gradient(90deg, #2563eb, #0891b2, #7c3aed)' }}
            />
            <div className="overflow-x-auto">
              <table className="benchmark-table w-full">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                        StrataRouter
                      </span>
                    </th>
                    <th>semantic-router</th>
                    <th>LlamaIndex Router</th>
                  </tr>
                </thead>
                <tbody>
                  {featureCompare.map((row) => (
                    <tr key={row.name}>
                      <td className="font-medium text-slate-700">{row.name}</td>
                      <td className="text-center"><Tick yes={row.sr} /></td>
                      <td className="text-center"><Tick yes={row.sem} /></td>
                      <td className="text-center"><Tick yes={row.llm} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
