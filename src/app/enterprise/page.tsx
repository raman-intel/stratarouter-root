import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Shield, Users, BarChart2, Lock,
  BookOpen, CheckCircle2, Mail
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enterprise',
  description: 'StrataRouter Enterprise — governance, compliance, multi-tenancy, and dedicated support for AI at scale.',
}

const pillars = [
  {
    icon: Shield,
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.08)',
    border: 'rgba(37,99,235,0.18)',
    title: 'Multi-Agent Consensus',
    desc: 'Every high-stakes AI decision goes through a configurable quorum of agents before execution — Byzantine fault-tolerant and fully audited.',
    points: [
      'Quorum-based voting (configurable threshold)',
      'Byzantine fault tolerance',
      'Complete voting audit trail',
      'Proposal lifecycle management',
      'Configurable approval thresholds',
    ],
  },
  {
    icon: BarChart2,
    color: '#0891b2',
    bg: 'rgba(8,145,178,0.08)',
    border: 'rgba(8,145,178,0.18)',
    title: 'Immutable Audit Trails',
    desc: 'SHA-256 hash-chained transaction logs with built-in tamper detection. Export-ready for SOC 2, HIPAA, and ISO 27001 audits.',
    points: [
      'Immutable append-only transaction log',
      'SHA-256 cryptographic hash chains',
      'Tamper detection on every entry',
      'Export for SOC 2 / HIPAA / ISO 27001',
      '50,000 log writes/sec throughput',
    ],
  },
  {
    icon: Lock,
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.18)',
    title: 'Policy-Driven Access Control',
    desc: 'Role-based and attribute-based access control. Enforce policies across tools, models, budgets, and time windows with millisecond latency.',
    points: [
      'RBAC + ABAC policy engine',
      'Per-route cost and budget limits',
      'Time-window enforcement',
      'Tool access allowlists',
      'Multi-factor policy evaluation',
    ],
  },
  {
    icon: Users,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.18)',
    title: 'Multi-Tenancy at Scale',
    desc: 'Complete data isolation with per-tenant quotas, cost caps, and model allowlists. Real-time usage tracking and automated enforcement.',
    points: [
      'Complete data isolation per tenant',
      'Per-tenant resource quotas',
      'Daily cost caps and budgets',
      'Model and route allowlists',
      'Real-time usage dashboard',
    ],
  },
]

const metrics = [
  { v: '< 2ms',   l: 'Consensus latency',    color: '#2563eb' },
  { v: '10K/s',   l: 'Consensus throughput',  color: '#0891b2' },
  { v: '< 0.1ms', l: 'Audit log write',       color: '#059669' },
  { v: '50K/s',   l: 'Log throughput',        color: '#7c3aed' },
  { v: '95.8%',   l: 'Test coverage',         color: '#d97706' },
  { v: '55',      l: 'Tests passing',          color: '#059669' },
]

export default function EnterprisePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)' }}
      >
        <div className="absolute inset-0 bg-grid" />
        <div className="gradient-mesh" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(124,58,237,0.06) 0%, transparent 60%)' }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-violet mb-5">Enterprise</span>
          <h1
            className="font-black text-slate-900 mb-6 tracking-tight leading-[1.06]"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)', fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            AI governance built for
            <br />
            <span className="gradient-text-brand">regulated industries</span>
          </h1>
          <p
            className="text-[18px] text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            SOC 2, HIPAA, and ISO 27001 ready governance infrastructure.
            Multi-agent consensus, cryptographic audit trails, and full tenant isolation —
            production-tested at 10,000 operations/second.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@stratarouter.com" className="btn-primary text-[15px] px-8 py-3.5">
              Talk to Sales
              <ArrowRight size={16} />
            </a>
            <Link href="/pricing" className="btn-secondary text-[15px] px-8 py-3.5">
              Compare Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Performance metrics */}
      <section className="py-16" style={{ background: '#f8fafc' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-10">
            <p
              className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-10"
            >
              Enterprise performance benchmarks
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              {metrics.map((m) => (
                <div key={m.l} className="text-center">
                  <div
                    className="text-[2rem] sm:text-[2.2rem] font-black mb-1 tracking-tight"
                    style={{
                      color: m.color,
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                    }}
                  >
                    {m.v}
                  </div>
                  <div className="text-[11.5px] text-slate-500">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-pillar features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2
              className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Five modules.
              <span className="gradient-text-blue"> Zero compromises.</span>
            </h2>
            <p
              className="text-slate-500 text-[17px] leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              4,102 lines of production-quality Rust. 95.8% test coverage.
              Google-standard code quality. Deployable today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="glass-card glow-border p-8">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: p.bg, border: `1px solid ${p.border}` }}
                  >
                    <Icon size={21} style={{ color: p.color }} />
                  </div>
                  <h3 className="text-[18px] font-bold text-slate-900 mb-2 tracking-tight">{p.title}</h3>
                  <p
                    className="text-[13.5px] text-slate-500 leading-relaxed mb-5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {p.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-[13px]">
                        <CheckCircle2 size={14} className="check-yes mt-0.5 shrink-0" />
                        <span
                          className="text-slate-600"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Idempotency highlight */}
      <section className="pb-20" style={{ background: '#f8fafc' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div
            className="glass-card p-8 sm:p-10 relative overflow-hidden"
            style={{
              borderColor: 'rgba(217,119,6,0.2)',
              boxShadow: '0 0 0 1px rgba(217,119,6,0.06), 0 4px 24px rgba(217,119,6,0.06), 0 16px 48px rgba(15,23,42,0.06)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: 'linear-gradient(90deg, #d97706, #fbbf24, transparent)' }}
            />
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="badge badge-amber mb-4">Idempotency Manager</span>
                <h3
                  className="text-2xl font-black text-slate-900 mb-3 tracking-tight"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Never pay twice
                  <br />
                  for the same call.
                </h3>
                <p
                  className="text-slate-500 text-[14px] leading-relaxed"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  The Idempotency Manager detects duplicate requests using semantic equivalence — not just exact matching.
                  Prevents costly repeated LLM calls, financial transactions, and agent actions.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { metric: 'Duplicate detection speed',  value: '< 0.5ms' },
                  { metric: 'Throughput',                  value: '20,000/sec' },
                  { metric: 'Duplicate prevention rate',  value: '99.9%' },
                  { metric: 'Cross-tenant isolation',     value: '✓ Full' },
                ].map((s) => (
                  <div
                    key={s.metric}
                    className="flex items-center justify-between py-2.5"
                    style={{ borderBottom: '1px solid rgba(15,23,42,0.06)' }}
                  >
                    <span
                      className="text-[13px] text-slate-500"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {s.metric}
                    </span>
                    <span className="text-[13px] font-bold text-amber-600">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance badges */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-8">
            Compliance certification-ready
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'SOC 2 Type II', color: '#7c3aed' },
              { label: 'HIPAA',         color: '#059669' },
              { label: 'ISO 27001',     color: '#2563eb' },
              { label: 'GDPR-ready',    color: '#d97706' },
              { label: 'FedRAMP-ready', color: '#dc2626' },
            ].map((cert) => (
              <span
                key={cert.label}
                className="flex items-center gap-2 py-2 px-4 rounded-xl text-[13px] font-semibold"
                style={{
                  color: cert.color,
                  background: `${cert.color}10`,
                  border: `1px solid ${cert.color}25`,
                }}
              >
                <Shield size={12} />
                {cert.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA contact */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div
            className="glass-card p-10 sm:p-12 text-center relative overflow-hidden"
            style={{
              borderColor: 'rgba(124,58,237,0.15)',
            }}
          >
            <div
              className="absolute top-0 left-8 right-8 h-[2px]"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(37,99,235,0.4), transparent)' }}
            />

            <div className="relative">
              <h2
                className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Ready for enterprise AI?
              </h2>
              <p
                className="text-slate-500 mb-8 text-[14.5px] leading-relaxed"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Our solutions team will scope the right architecture for your workload,
                compliance requirements, and scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
                <a
                  href="mailto:support@stratarouter.com"
                  className="btn-primary px-8 py-3.5 text-[14px]"
                >
                  <Mail size={15} />
                  Contact Sales
                </a>
                <a
                  href="https://docs.stratarouter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-8 py-3.5 text-[14px]"
                >
                  <BookOpen size={15} />
                  Enterprise Docs
                </a>
              </div>
              <p className="text-[12px] text-slate-400 mt-6">
                support@stratarouter.com · Response within 1 business day
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
