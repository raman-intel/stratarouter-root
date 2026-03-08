import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'StrataRouter Privacy Policy — how we collect, use, and protect your data.',
}

const EFFECTIVE = 'February 1, 2026'

const sections = [
  {
    title: '1. Overview',
    body: `StrataRouter ("we", "us", "our") is operated by Inteleion. This Privacy Policy explains what data we collect when you use stratarouter.com (the "Site"), how we use it, and your rights over that data. We take privacy seriously: the StrataRouter Core library collects no telemetry and makes no network calls by default.`,
  },
  {
    title: '2. Information We Collect',
    body: `We may collect the following categories of information:\n\n**Website analytics** — anonymised page-view data (pages visited, referrer, country-level location) collected via self-hosted or privacy-respecting analytics tools. No fingerprinting.\n\n**Contact & email** — if you email us at support@stratarouter.com, we retain your email address and message content to respond to you.\n\n**Purchase & billing data** — if you subscribe to a paid plan, payment is processed by a third-party processor (e.g. Stripe). We do not store raw card numbers.\n\n**Self-hosted telemetry (opt-in only)** — the Runtime and Enterprise tiers can emit optional diagnostic metrics. This feature is disabled by default and must be explicitly enabled in configuration.`,
  },
  {
    title: '3. How We Use Your Information',
    body: `We use the information we collect to:\n• Operate and improve the Site and product\n• Respond to support requests\n• Process payments and manage subscriptions\n• Send product update emails (only if you have opted in)\n• Comply with legal obligations\n\nWe do not sell your data. We do not share it with advertisers.`,
  },
  {
    title: '4. Cookies',
    body: `The Site uses minimal cookies. Strictly necessary cookies support session management. Analytics cookies (if used) are non-identifying. You can disable cookies in your browser without losing core functionality.`,
  },
  {
    title: '5. Data Retention',
    body: `Contact enquiries are retained for up to 3 years for support continuity. Analytics data is retained for 13 months before automatic deletion. Billing records are retained as required by applicable law (typically 7 years).`,
  },
  {
    title: '6. Third-Party Services',
    body: `We may use the following categories of third-party providers:\n• **Payment processing** — Stripe (PCI DSS compliant)\n• **Email delivery** — a transactional email provider\n• **Hosting** — Vercel (CDN, edge infrastructure)\n\nEach provider is bound by their own privacy policy and, where applicable, our data processing agreements.`,
  },
  {
    title: '7. Your Rights',
    body: `Depending on your jurisdiction, you may have rights including:\n• Access to your personal data\n• Correction of inaccurate data\n• Deletion ("right to be forgotten")\n• Portability of your data\n• Objection to or restriction of processing\n\nTo exercise any of these rights, email support@stratarouter.com. We will respond within 30 days.`,
  },
  {
    title: '8. Security',
    body: `We use industry-standard security measures including TLS encryption in transit, access controls, and regular security reviews. No method of transmission over the internet is 100% secure; we cannot guarantee absolute security.`,
  },
  {
    title: '9. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. The "Effective date" at the top of this page will reflect the most recent revision. Continued use of the Site after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '10. Contact',
    body: `If you have any questions about this policy, please contact us at:\n\nsupport@stratarouter.com\nInteleion · inteleion.com`,
  },
]

export default function PrivacyPage() {
  return (
    <section
      className="relative pt-32 pb-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}
    >
      <div className="absolute inset-0 bg-grid" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="badge badge-blue mb-5">Legal</span>
          <h1
            className="text-3xl sm:text-4xl font-black text-slate-900 mb-3 tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Privacy Policy
          </h1>
          <p
            className="text-[13.5px] text-slate-500"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Effective date: {EFFECTIVE} · Built by Inteleion (operator of StrataRouter)
          </p>
        </div>

        {/* Content */}
        <div className="glass-card p-8 sm:p-10 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2
                className="text-[17px] font-bold text-slate-900 mb-3 tracking-tight"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {section.title}
              </h2>
              <div
                className="text-[14px] text-slate-500 leading-relaxed whitespace-pre-line"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {section.body.split(/\*\*([^*]+)\*\*/g).map((part, i) =>
                  i % 2 === 1
                    ? <strong key={i} className="text-slate-800 font-semibold">{part}</strong>
                    : <span key={i}>{part}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
