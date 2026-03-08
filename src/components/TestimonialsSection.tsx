'use client'

import { useRef, useEffect, useState } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'StrataRouter cut our routing latency from 180ms to under 9ms. Our AI orchestration layer went from a bottleneck to invisible infrastructure. Best routing decision we made all year.',
    name: 'Priya Raghunathan',
    role: 'Principal AI Engineer',
    company: 'Fortune 500 FinTech',
    avatar: 'PR',
    color: '#2563eb',
    stars: 5,
  },
  {
    quote: 'The semantic caching alone saved us $15K/month in OpenAI costs. With 85%+ cache hit rates, the ROI was positive in the first week. This is what production AI infrastructure should look like.',
    name: 'Marcus Chen',
    role: 'CTO',
    company: 'AI-first SaaS startup',
    avatar: 'MC',
    color: '#0891b2',
    stars: 5,
  },
  {
    quote: 'We handle 50K+ routing decisions per day flawlessly. The LangGraph integration was 5 lines of code. Accuracy improvement from 84% to 95%+ reduced escalations by 40%.',
    name: 'Sophia Hartmann',
    role: 'Head of Engineering',
    company: 'Enterprise SaaS, 400+ employees',
    avatar: 'SH',
    color: '#059669',
    stars: 5,
  },
  {
    quote: 'After evaluating semantic-router, LlamaIndex, and building our own — StrataRouter won on every metric. The Rust core is genuinely game-changing for production latency requirements.',
    name: 'James Okafor',
    role: 'ML Platform Lead',
    company: 'Series B AI company',
    avatar: 'JO',
    color: '#d97706',
    stars: 5,
  },
  {
    quote: 'The Enterprise governance layer gave us SOC 2 readiness for our AI workflows in a week. Multi-tenancy, audit trails, and RBAC — everything we needed, production-tested from day one.',
    name: 'Linda Park',
    role: 'VP Engineering',
    company: 'Healthcare AI platform',
    avatar: 'LP',
    color: '#7c3aed',
    stars: 5,
  },
  {
    quote: 'We replaced a complex custom router with StrataRouter and reduced routing-related incidents to zero. The BM25 + dense hybrid handles edge cases our old system consistently missed.',
    name: 'Arjun Mehta',
    role: 'Senior AI Architect',
    company: 'Global consulting firm',
    avatar: 'AM',
    color: '#dc2626',
    stars: 5,
  },
]

export default function TestimonialsSection() {
  const [visible, setVisible] = useState(false)
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
    <section ref={ref} className="section-padding relative overflow-hidden" style={{ background: '#f8fafc' }}>
      <div className="absolute inset-0 bg-dots" style={{ opacity: 0.4 }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center max-w-xl mx-auto mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(24px)',
            transition: 'all 0.6s ease',
          }}
        >
          <span className="badge badge-amber mb-5">
            <Star size={10} className="fill-amber-500 text-amber-500" />
            Trusted by AI teams
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            From builders who use it
            <br />
            <span className="gradient-text-blue">in production</span>
          </h2>
          <p
            className="text-slate-500 text-[17px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Engineering leaders and AI architects choose StrataRouter for their most demanding workloads.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="testimonial-card break-inside-avoid"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(24px)',
                transition: `all 0.55s ease ${Math.min(i * 80, 450)}ms`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-[13.5px] text-slate-600 leading-relaxed mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.color} 0%, ${t.color}bb 100%)`,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    className="text-[13.5px] font-semibold text-slate-900"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-[11.5px] text-slate-400">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
