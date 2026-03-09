'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Github, ExternalLink, ChevronDown, Zap } from 'lucide-react'

const navLinks = [
  {
    label: 'Product',
    children: [
      { label: 'Core Engine',   href: '/#features',     desc: 'Hybrid semantic routing in Rust' },
      { label: 'Runtime',       href: '/#features',     desc: 'TCFP execution with semantic caching' },
      { label: 'Architecture',  href: '/#architecture', desc: '3-layer platform overview' },
      { label: 'Benchmarks',    href: '/#benchmarks',   desc: 'Performance vs alternatives' },
    ],
  },
  {
    label: 'Developers',
    children: [
      { label: 'Documentation', href: 'https://docs.stratarouter.com',                              desc: 'Full API reference & guides',  external: true },
      { label: 'Quick Start',   href: 'https://docs.stratarouter.com',                              desc: '5-min tutorial',               external: true },
      { label: 'Integrations',  href: '/#integrations',                                             desc: 'LangChain, CrewAI, AutoGen & more' },
      { label: 'Changelog',     href: 'https://github.com/ai-deeptech/stratarouter/releases',       desc: "What's new in v2.1",           external: true },
      { label: 'GitHub',        href: 'https://github.com/ai-deeptech/stratarouter',                desc: 'Open source core',             external: true },
    ],
  },
  { label: 'Pricing',    href: '/pricing' },
  { label: 'Enterprise', href: '/enterprise' },
  { label: 'Blog',       href: '/blog' },
  { label: 'About',      href: '/about' },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {/* Top accent line (only when not scrolled) */}
        {!scrolled && (
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, #2563eb, #0891b2, #7c3aed)', opacity: 0.65 }}
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[64px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center shrink-0 group transition-opacity duration-200 hover:opacity-85">
              <img
                src="/logo-dark.svg"
                alt="StrataRouter"
                height={34}
                className="h-[34px] w-auto"
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                  >
                    <button className="btn-ghost flex items-center gap-1 text-[13.5px] font-semibold text-slate-600 hover:text-slate-900 px-3 py-2">
                      {link.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50">
                        <div
                          className="min-w-[270px] p-2 rounded-2xl border bg-white overflow-hidden"
                          style={{
                            borderColor: 'rgba(15,23,42,0.09)',
                            boxShadow: '0 4px 8px rgba(15,23,42,0.06), 0 20px 64px rgba(15,23,42,0.12), 0 0 0 1px rgba(15,23,42,0.05)',
                          }}
                        >
                          <div
                            className="h-[1.5px] rounded-full mb-2 mx-1"
                            style={{ background: 'linear-gradient(90deg, #2563eb, #0891b2)' }}
                          />
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              target={'external' in child && child.external ? '_blank' : undefined}
                              rel={'external' in child && child.external ? 'noopener noreferrer' : undefined}
                              className="flex items-start gap-3 px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex-1">
                                <div className="text-[13px] font-semibold text-slate-700 group-hover/item:text-slate-900 flex items-center gap-1.5 transition-colors">
                                  {child.label}
                                  {'external' in child && child.external && (
                                    <ExternalLink size={10} className="opacity-35 shrink-0" />
                                  )}
                                </div>
                                <div className="text-[11.5px] text-slate-400 mt-0.5 font-medium">{child.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href!}
                    className="btn-ghost text-[13.5px] font-semibold text-slate-600 hover:text-slate-900 px-3 py-2"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://github.com/ai-deeptech/stratarouter"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center gap-1.5 text-[13px] text-slate-500 hover:text-slate-800 px-2.5"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <Link href="/pricing"    className="btn-secondary text-[13px] py-2 px-4">Get Started</Link>
              <Link href="/enterprise" className="btn-primary   text-[13px] py-2 px-4">Enterprise</Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-900/25 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-full max-w-[340px] bg-white border-l border-slate-100 overflow-y-auto shadow-2xl">

            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 h-[64px] border-b border-slate-100">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <img
                  src="/logo-dark.svg"
                  alt="StrataRouter"
                  height={30}
                  className="h-[30px] w-auto"
                />
              </Link>
              <button
                className="p-2 text-slate-500 hover:text-slate-800 rounded-xl hover:bg-slate-50 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                <X size={19} />
              </button>
            </div>

            {/* Drawer nav */}
            <div className="px-3 py-5 space-y-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <div className="px-3 py-2 text-[10.5px] font-bold uppercase tracking-[0.15em] text-slate-400 mt-3">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        target={'external' in child && child.external ? '_blank' : undefined}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl text-[13.5px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span>{child.label}</span>
                        {'external' in child && child.external && (
                          <ExternalLink size={11} className="opacity-30" />
                        )}
                      </Link>
                    ))}
                    <div className="my-2 mx-3 border-t border-slate-100" />
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href!}
                    className="block px-3 py-2.5 rounded-xl text-[13.5px] font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Drawer CTAs */}
            <div className="px-4 pb-8 space-y-2.5 mt-2">
              <Link
                href="/pricing"
                className="btn-primary w-full justify-center text-[14px]"
                onClick={() => setMobileOpen(false)}
              >
                <Zap size={14} />
                Get Started Free
              </Link>
              <Link
                href="/enterprise"
                className="btn-secondary w-full justify-center text-[14px]"
                onClick={() => setMobileOpen(false)}
              >
                Enterprise
              </Link>
              <a
                href="https://github.com/ai-deeptech/stratarouter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-[13px] font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                <Github size={15} />
                View on GitHub
              </a>
              <a
                href="mailto:support@stratarouter.com"
                className="block text-center text-[11.5px] text-slate-400 hover:text-slate-600 transition-colors mt-2"
              >
                support@stratarouter.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
