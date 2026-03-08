import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Zap, ArrowRight, Shield, Server, Building2, HelpCircle } from 'lucide-react'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'StrataRouter pricing — start free with the Core library, scale with Runtime, or go all-in with Enterprise governance.',
}

const plans = [
  {
    name: 'Core',
    icon: Zap,
    iconColor: '#2563eb',
    iconBg: 'rgba(37,99,235,0.08)',
    iconBorder: 'rgba(37,99,235,0.18)',
    badge: 'Free Forever',
    badgeColor: 'badge-green',
    price: 'Free',
    period: '',
    desc: 'The full routing engine, open source, zero restrictions.',
    cta: { label: 'Install Now', href: 'https://pypi.org/project/stratarouter', external: true },
    highlight: false,
    features: [
      'Hybrid scoring (dense + sparse + rules)',
      'HNSW index with SIMD acceleration',
      'BM25 keyword scoring',
      'Isotonic confidence calibration',
      'HuggingFace & OpenAI encoders',
      'LangChain, LangGraph integrations',
      'CrewAI & AutoGen integrations',
      'OpenAI Assistants integration',
      'Google Vertex AI integration',
      'MIT License — keep all your code',
      'Python 3.8+ & Rust crate',
      'Community support',
    ],
  },
  {
    name: 'Runtime',
    icon: Server,
    iconColor: '#0891b2',
    iconBg: 'rgba(8,145,178,0.08)',
    iconBorder: 'rgba(8,145,178,0.18)',
    badge: 'Most Popular',
    badgeColor: 'badge-blue',
    price: '$49',
    period: '/month',
    desc: 'Production execution with caching, observability, and workflow support.',
    cta: { label: 'Start Free Trial', href: '/contact', external: false },
    highlight: true,
    features: [
      'Everything in Core',
      'TCFP workflow execution engine',
      'Semantic cache (85%+ hit rate)',
      'Batch deduplication',
      'State snapshots & checkpoint recovery',
      'REST API (Axum)',
      'PostgreSQL state persistence',
      'Prometheus metrics',
      'OpenTelemetry 2.0 tracing',
      'Docker & docker-compose',
      '10 concurrent executions',
      '1,000 daily executions',
      '24 GB RAM / 4 vCPU limit',
      'Email support (48h)',
    ],
  },
  {
    name: 'Enterprise',
    icon: Building2,
    iconColor: '#7c3aed',
    iconBg: 'rgba(124,58,237,0.08)',
    iconBorder: 'rgba(124,58,237,0.18)',
    badge: 'Custom Scale',
    badgeColor: 'badge-violet',
    price: 'Custom',
    period: '',
    desc: 'Full governance platform — compliance, multi-tenancy, dedicated support.',
    cta: { label: 'Contact Sales', href: '/enterprise', external: false },
    highlight: false,
    features: [
      'Everything in Runtime',
      'Multi-agent consensus engine',
      'Immutable SHA-256 audit trail',
      'Multi-tenancy with per-tenant quotas',
      'RBAC + ABAC policy engine',
      'Idempotency manager',
      'SOC 2 Type II compliance',
      'HIPAA compliance',
      'ISO 27001 ready',
      'SSO / SAML',
      'Unlimited executions',
      'Custom resource limits',
      'SLA guarantee (99.9%)',
      'Dedicated Slack channel',
      'Onboarding & integration support',
    ],
  },
]

const faq = [
  {
    q: 'Is the Core library really free?',
    a: 'Yes — the Core semantic routing engine is MIT licensed and free forever. No usage limits, no hidden fees, no telemetry. You own it.',
  },
  {
    q: 'What counts as a "concurrent execution" in Runtime?',
    a: 'A concurrent execution is an active TCFP workflow being processed at the same point in time. The freemium tier allows up to 10 simultaneous and 1,000 daily executions.',
  },
  {
    q: 'Can I self-host Runtime or Enterprise?',
    a: 'Yes — both Runtime and Enterprise ship as Docker images and Helm charts for Kubernetes. Run the full stack on your own infrastructure with no call-home.',
  },
  {
    q: 'Is my data sent to StrataRouter servers?',
    a: 'No. StrataRouter processes all queries locally. No telemetry is collected by default. Enterprise customers can deploy fully air-gapped.',
  },
  {
    q: 'How do you handle SOC 2 / HIPAA for Enterprise?',
    a: "The Enterprise tier includes an immutable SHA-256 hash-chained transaction log, cryptographic tamper detection, full access control, and audit export — all the building blocks for compliance certification.",
  },
  {
    q: 'Academic or open-source discounts?',
    a: 'Yes, reach out at support@stratarouter.com. We actively support the community.',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)' }}>
        <div className="absolute inset-0 bg-grid" />
        <div className="gradient-mesh" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-blue mb-5">Pricing</span>
          <h1
            className="font-black text-slate-900 mb-5 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Simple, honest pricing
          </h1>
          <p
            className="text-[18px] text-slate-500 leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Start free with the full routing engine.
            Pay only when you need execution infrastructure.
            No vendor lock-in. No hidden fees.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-28 -mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {plans.map((plan) => {
              const Icon = plan.icon
              return (
                <div
                  key={plan.name}
                  className={`pricing-card ${plan.highlight ? 'featured' : ''}`}
                >
              
                  {/* Plan header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: plan.iconBg, border: `1px solid ${plan.iconBorder}` }}
                      >
                        <Icon size={19} style={{ color: plan.iconColor }} />
                      </div>
                      <div className="text-[15px] font-bold text-slate-900">{plan.name}</div>
                    </div>
                    <span className={`badge ${plan.badgeColor} text-[10px]`}>{plan.badge}</span>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <span
                      className="text-[2.4rem] font-black tracking-tight text-slate-900"
                      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-[14px] text-slate-400 ml-1">{plan.period}</span>
                    )}
                    {plan.price === 'Free' && (
                      <span className="text-[13px] text-slate-400 ml-2">forever</span>
                    )}
                  </div>

                  <p
                    className="text-[13.5px] text-slate-500 leading-relaxed mb-6"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {plan.desc}
                  </p>

                  {/* CTA */}
                  {plan.highlight ? (
                    <Link href={plan.cta.href} className="btn-primary w-full justify-center mb-6 text-[14px]">
                      {plan.cta.label}
                      <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <Link
                      href={plan.cta.href}
                      target={plan.cta.external ? '_blank' : undefined}
                      className="btn-secondary w-full justify-center mb-6 text-[14px]"
                    >
                      {plan.cta.label}
                    </Link>
                  )}

                  <div className="section-divider mb-6" />

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px]">
                        <Check size={14} className="check-yes mt-0.5 shrink-0" />
                        <span
                          className="text-slate-600"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {f}
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

      {/* Runtime limits table */}
      <section className="pb-28" style={{ background: '#f8fafc' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-8">
            <h2
              className="text-2xl font-black text-slate-900 mb-2 tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Runtime Free Tier Limits
            </h2>
            <p
              className="text-[13.5px] text-slate-500"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Automatically enforced — no surprise bills.
            </p>
          </div>
          <div className="glass-card overflow-hidden">
            <div
              className="h-[2px]"
              style={{ background: 'linear-gradient(90deg, #2563eb, #0891b2)' }}
            />
            <table className="benchmark-table w-full">
              <thead>
                <tr>
                  <th>Resource</th>
                  <th>Free Limit</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Concurrent Executions', '10',         'Unlimited'],
                  ['CPU Cores',             '4 vCPU',     'Custom'],
                  ['Memory',                '24 GB',      'Custom'],
                  ['Workflows per Tenant',  '100',        'Unlimited'],
                  ['Daily Executions',      '1,000',      'Unlimited'],
                  ['Workflow Steps',        '1,000',      'Unlimited'],
                  ['Execution Duration',    '1 hour',     'Custom'],
                  ['API Rate Limit',        '60 req/min', 'Custom'],
                ].map(([res, free, ent]) => (
                  <tr key={res}>
                    <td
                      className="font-medium text-slate-700"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {res}
                    </td>
                    <td className="font-semibold" style={{ color: '#2563eb' }}>{free}</td>
                    <td className="text-slate-500">{ent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl font-black text-slate-900 text-center mb-10 tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faq.map((item) => (
              <div key={item.q} className="glass-card p-6">
                <h3 className="text-[14px] font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <HelpCircle size={14} className="text-blue-500 mt-0.5 shrink-0" />
                  {item.q}
                </h3>
                <p
                  className="text-[13.5px] text-slate-500 leading-relaxed pl-5"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-[13px] text-slate-500">
            Still have questions?{' '}
            <a
              href="mailto:support@stratarouter.com"
              className="text-blue-600 hover:text-blue-700 transition-colors font-semibold"
            >
              Email us at support@stratarouter.com
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
