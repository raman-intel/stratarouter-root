'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    value: 8.7, suffix: 'ms', decimals: 1,
    label: 'P99 Latency',
    sub: '20× faster than semantic-router',
    color: '#2563eb',
  },
  {
    value: 18, suffix: 'K/s', decimals: 0,
    label: 'Throughput',
    sub: '40× higher request rate',
    color: '#0891b2',
  },
  {
    value: 95.4, suffix: '%', decimals: 1,
    label: 'Routing Accuracy',
    sub: '+12.7 pts over nearest rival',
    color: '#059669',
  },
  {
    value: 64, suffix: 'MB', decimals: 0,
    label: 'Base Memory',
    sub: '33× less than alternatives',
    color: '#7c3aed',
  },
  {
    value: 6, suffix: '+', decimals: 0,
    label: 'Framework Integrations',
    sub: 'LangChain, CrewAI, AutoGen & more',
    color: '#d97706',
  },
]

function useCountUp(target: number, decimals: number, duration: number, active: boolean) {
  const [current, setCurrent] = useState(0)
  const rafRef = useRef<number>()
  const startRef = useRef<number>()

  useEffect(() => {
    if (!active) return
    startRef.current = undefined
    const step = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      const elapsed = ts - startRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(parseFloat((target * eased).toFixed(decimals)))
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [active, target, duration, decimals])

  return current
}

function StatCard({ stat, index, visible }: { stat: typeof stats[0]; index: number; visible: boolean }) {
  const count = useCountUp(stat.value, stat.decimals, 1800, visible)

  return (
    <div
      className="flex flex-col items-center text-center px-4"
      style={{
        transitionDelay: `${index * 90}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
      }}
    >
      <div
        className="text-[clamp(2.2rem,3.5vw,3rem)] font-black tracking-[-0.04em] leading-none mb-2"
        style={{ color: stat.color, fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        {stat.decimals > 0 ? count.toFixed(stat.decimals) : Math.round(count)}
        <span className="text-[0.55em] font-bold">{stat.suffix}</span>
      </div>
      <div className="text-[13.5px] font-semibold text-slate-800 mb-1">{stat.label}</div>
      <div className="text-[12px] text-slate-500 leading-snug max-w-[130px]">{stat.sub}</div>
    </div>
  )
}

export default function StatsBar() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-0 overflow-hidden">
      <div className="section-divider" />

      {/* Light blue-tinted background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #f8fafc 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
            Independently verified benchmarks
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            The numbers that define the category
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-10">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} visible={visible} />
          ))}
        </div>

        {/* Dividers — desktop */}
        {[20, 40, 60, 80].map((pct) => (
          <div key={pct} className="hidden lg:block absolute h-10 w-px bg-slate-200"
            style={{ left: `${pct}%`, top: '57%' }} />
        ))}

        <p className="text-center text-[11.5px] text-slate-400 mt-12">
          AWS c5.4xlarge · 1M queries · 100-route index · all-MiniLM-L6-v2 · January 2026
        </p>
      </div>

      <div className="section-divider" />
    </section>
  )
}
