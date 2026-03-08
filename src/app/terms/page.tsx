import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'StrataRouter Terms of Service — the rules and rights that govern your use of stratarouter.com and StrataRouter products.',
}

const EFFECTIVE = 'February 1, 2026'

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing or using stratarouter.com (the "Site") or any StrataRouter software products (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Service.`,
  },
  {
    title: '2. The Service',
    body: `StrataRouter is developed and operated by Inteleion. The Service includes:\n• The StrataRouter Core open-source library (MIT licensed)\n• The StrataRouter Runtime execution platform\n• The StrataRouter Enterprise governance platform\n• This website and associated documentation\n\nThe Core library is governed by the MIT License. For the Core, the MIT License terms take precedence over these Terms where they conflict.`,
  },
  {
    title: '3. Accounts & Subscriptions',
    body: `Paid tiers (Runtime, Enterprise) require an account. You are responsible for maintaining the security of your credentials. You agree to provide accurate billing information. Subscription fees are billed in advance on the cycle selected at purchase and are non-refundable except as required by law or explicitly stated in writing.`,
  },
  {
    title: '4. Acceptable Use',
    body: `You agree not to use the Service to:\n• Violate any applicable law or regulation\n• Infringe intellectual property rights of others\n• Transmit malware, exploits, or malicious content\n• Attempt to gain unauthorised access to any system\n• Reverse-engineer proprietary components of the Runtime or Enterprise tiers (the Core is open source under MIT)\n• Resell or sublicense the Service without written permission`,
  },
  {
    title: '5. Intellectual Property',
    body: `**Open-source (Core)** — StrataRouter Core is released under the MIT License. You are free to use, copy, modify, merge, publish, distribute, sublicense, and sell copies.\n\n**Proprietary (Runtime & Enterprise)** — The Runtime and Enterprise tiers contain proprietary components. You are granted a limited, non-exclusive, non-transferable licence to use these components within the scope of your subscription.\n\n**Trademarks** — "StrataRouter" and the StrataRouter logo are trademarks of Inteleion. You may not use them without prior written consent.`,
  },
  {
    title: '6. Data & Privacy',
    body: `Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. The StrataRouter Core library does not collect telemetry by default. Optional telemetry in Runtime/Enterprise requires explicit configuration.`,
  },
  {
    title: '7. Disclaimer of Warranties',
    body: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.`,
  },
  {
    title: '8. Limitation of Liability',
    body: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, INTELEION SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL CUMULATIVE LIABILITY SHALL NOT EXCEED THE FEES YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM.`,
  },
  {
    title: '9. Termination',
    body: `We may terminate or suspend your access to the Service at any time, with or without notice, for conduct that we determine violates these Terms or is harmful to other users, Inteleion, or third parties. Upon termination, your right to use the Service ceases immediately.`,
  },
  {
    title: '10. Changes to Terms',
    body: `We reserve the right to modify these Terms at any time. The "Effective date" at the top of this page will reflect the most recent revision. Material changes will be communicated via email or prominent notice on the Site. Continued use after changes constitutes acceptance.`,
  },
  {
    title: '11. Governing Law',
    body: `These Terms shall be governed by the laws of the jurisdiction in which Inteleion is registered, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration or the competent courts of that jurisdiction.`,
  },
  {
    title: '12. Contact',
    body: `Questions about these Terms? Contact us at:\n\nsupport@stratarouter.com\nInteleion · inteleion.com`,
  },
]

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p
            className="text-[13.5px] text-slate-500"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Effective date: {EFFECTIVE} · Operated by Inteleion
          </p>
        </div>

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
