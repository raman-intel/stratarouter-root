import type { Metadata } from 'next'
import { Mail, Github, BookOpen, Building2, Zap } from 'lucide-react'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the StrataRouter team — sales, support, partnerships, and technical help.',
}

const channels = [
  {
    icon: Mail,
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.08)',
    border: 'rgba(37,99,235,0.15)',
    title: 'General & Support',
    desc: 'Questions about the product, billing, or technical issues.',
    action: 'support@stratarouter.com',
    href: 'mailto:support@stratarouter.com',
    label: 'Send an email',
    sla: 'Response within 48 hours',
  },
  {
    icon: Building2,
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.15)',
    title: 'Enterprise Sales',
    desc: 'Custom pricing, compliance requirements, dedicated onboarding.',
    action: 'support@stratarouter.com',
    href: 'mailto:support@stratarouter.com?subject=Enterprise%20Inquiry',
    label: 'Talk to sales',
    sla: 'Response within 1 business day',
  },
  {
    icon: Github,
    color: '#0f172a',
    bg: 'rgba(15,23,42,0.05)',
    border: 'rgba(15,23,42,0.12)',
    title: 'Open Source & Bugs',
    desc: 'Bug reports, feature requests, and open-source contributions.',
    action: 'github.com/ai-deeptech/stratarouter',
    href: 'https://github.com/ai-deeptech/stratarouter/issues',
    label: 'Open an issue',
    sla: 'Community-monitored',
  },
  {
    icon: BookOpen,
    color: '#0891b2',
    bg: 'rgba(8,145,178,0.08)',
    border: 'rgba(8,145,178,0.15)',
    title: 'Documentation',
    desc: 'API reference, tutorials, integration guides, and examples.',
    action: 'docs.stratarouter.com',
    href: 'https://docs.stratarouter.com',
    label: 'Browse the docs',
    sla: 'Always available',
  },
]

export default function ContactPage() {
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
          <span className="badge badge-blue mb-5">Contact</span>
          <h1
            className="font-black text-slate-900 mb-5 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            We&apos;re here to help
          </h1>
          <p
            className="text-[18px] text-slate-500 leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Whether you&apos;re evaluating StrataRouter, debugging an integration, or
            looking for enterprise pricing — get in touch and we&apos;ll respond fast.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-5">
            {channels.map((ch) => {
              const Icon = ch.icon
              return (
                <div key={ch.title} className="glass-card p-7 flex flex-col">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 shrink-0"
                    style={{ background: ch.bg, border: `1px solid ${ch.border}` }}
                  >
                    <Icon size={20} style={{ color: ch.color }} />
                  </div>
                  <h3 className="text-[16px] font-bold text-slate-900 mb-2 tracking-tight">{ch.title}</h3>
                  <p
                    className="text-[13.5px] text-slate-500 leading-relaxed mb-5 flex-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {ch.desc}
                  </p>
                  <a
                    href={ch.href}
                    target={ch.href.startsWith('http') ? '_blank' : undefined}
                    rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="btn-secondary text-[13.5px] px-5 py-2.5 justify-center"
                  >
                    {ch.label}
                  </a>
                  <p className="text-[11.5px] text-slate-400 text-center mt-3">{ch.sla}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick info strip */}
      <section className="pb-24" style={{ background: '#f8fafc' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <div
            className="glass-card p-8 text-center"
            style={{ borderColor: 'rgba(37,99,235,0.12)' }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
              style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)' }}
            >
              <Zap size={19} style={{ color: '#2563eb' }} />
            </div>
            <h2
              className="text-xl font-black text-slate-900 mb-2 tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Just need a quick answer?
            </h2>
            <p
              className="text-[14px] text-slate-500 mb-5 leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Check the docs first — most questions are already answered with working code examples.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://docs.stratarouter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-[13.5px] px-5 py-2.5"
              >
                5-Minute Quickstart
              </a>
              <a
                href="https://docs.stratarouter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[13.5px] px-5 py-2.5"
              >
                Read the Docs
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
