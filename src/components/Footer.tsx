import Link from 'next/link'
import { Github, Mail, ArrowUpRight, ExternalLink } from 'lucide-react'

type FooterLink = { label: string; href: string; external?: boolean }

const footerLinks: Record<string, FooterLink[]> = {
  Product: [
    { label: 'Core Engine',           href: '/#features' },
    { label: 'Runtime',               href: '/#features' },
    { label: 'Enterprise',            href: '/enterprise' },
    { label: 'Pricing',               href: '/pricing' },
    { label: 'Changelog',             href: 'https://github.com/agentdyne9/SRouter2/releases', external: true },
  ],
  Developers: [
    { label: 'Documentation',         href: 'https://github.com/agentdyne9/SRouter2#readme',      external: true },
    { label: 'Quick Start',           href: 'https://github.com/agentdyne9/SRouter2#quickstart',  external: true },
    { label: 'API Reference',         href: 'https://github.com/agentdyne9/SRouter2',             external: true },
    { label: 'GitHub',                href: 'https://github.com/agentdyne9/SRouter2',             external: true },
    { label: 'PyPI Package',          href: 'https://pypi.org/project/stratarouter',              external: true },
  ],
  'Use Cases': [
    { label: 'Agent Orchestration',   href: '/#use-cases' },
    { label: 'Multi-Model LLM',       href: '/#use-cases' },
    { label: 'RAG Optimization',      href: '/#use-cases' },
    { label: 'Customer Support',      href: '/#use-cases' },
    { label: 'Intent Classification', href: '/#use-cases' },
  ],
  Company: [
    { label: 'About',                 href: '/about' },
    { label: 'Inteleion.com',         href: 'https://inteleion.com',  external: true },
    { label: 'Blog',                  href: '/blog' },
    { label: 'Contact',               href: '/contact' },
    { label: 'Privacy Policy',        href: '/privacy' },
    { label: 'Terms of Service',      href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: '#ffffff',
        borderTop: '1px solid rgba(15,23,42,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-6 gap-10">

          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center mb-5 transition-opacity hover:opacity-85">
              <img
                src="/logo-color.svg"
                alt="StrataRouter"
                height={34}
                className="h-[34px] w-auto"
              />
            </Link>

            <p
              className="text-[13.5px] text-slate-500 leading-relaxed mb-6 max-w-[260px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Production-grade semantic routing for AI applications.
              20× faster, 33× less memory, 95.4% accuracy.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 mb-6">
              <a
                href="https://github.com/agentdyne9/SRouter2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:bg-slate-50 transition-all"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href="mailto:support@stratarouter.com"
                className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:bg-slate-50 transition-all"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>

            {/* Built by */}
            <div
              className="p-4 rounded-xl border bg-slate-50"
              style={{ borderColor: 'rgba(15,23,42,0.08)' }}
            >
              <div className="text-[10.5px] text-slate-400 uppercase tracking-[0.1em] font-semibold mb-1.5">
                Built by
              </div>
              <a
                href="https://inteleion.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13.5px] font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
              >
                Inteleion.com
                <ArrowUpRight size={12} className="opacity-50" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-[13px] text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {link.label}
                      {link.external && (
                        <ExternalLink size={10} className="opacity-35 shrink-0" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider" />

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div
            className="text-[12px] text-slate-400 text-center sm:text-left"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} StrataRouter by{' '}
            <a
              href="https://inteleion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-700 transition-colors"
            >
              Inteleion
            </a>
            . All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[12px] text-slate-400">
            <Link href="/privacy" className="hover:text-slate-700 transition-colors">Privacy</Link>
            <Link href="/terms"   className="hover:text-slate-700 transition-colors">Terms</Link>
            <a
              href="mailto:support@stratarouter.com"
              className="hover:text-slate-700 transition-colors"
            >
              support@stratarouter.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
