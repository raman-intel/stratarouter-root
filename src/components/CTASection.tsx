'use client'

import Link from 'next/link'
import { ArrowRight, Github, BookOpen, Mail, Zap, Copy, Check } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function CTASection() {
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText('pip install stratarouter')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={ref} className="relative section-padding overflow-hidden cta-bg">
      {/* Subtle inner light */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at center top, rgba(255,255,255,0.12) 0%, transparent 70%)',
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))' }}
      />

      <div
        className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(32px)',
          transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.1em]"
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
            Free forever for the Core library
          </span>
        </div>

        {/* Headline */}
        <h2
          className="font-black tracking-[-0.04em] leading-[1.04] mb-5 text-white"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontFamily: "'Bricolage Grotesque', sans-serif",
          }}
        >
          Route smarter.
          <br />
          Ship faster.
        </h2>

        <p
          className="text-[17px] sm:text-[18px] leading-relaxed mb-10 max-w-lg mx-auto"
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Join leading AI teams using StrataRouter to power intelligent,
          production-grade routing. Up and running in 5 minutes.
        </p>

        {/* pip install */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl"
            style={{
              background: 'rgba(0,0,0,0.25)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span
              className="font-mono text-[13px]"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >$</span>
            <code
              className="font-mono text-[14px] text-white tracking-tight"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              pip install stratarouter
            </code>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md transition-all"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              aria-label="Copy"
            >
              {copied
                ? <Check size={13} style={{ color: '#6ee7b7' }} />
                : <Copy size={13} />
              }
            </button>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center mb-14">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-bold transition-all"
            style={{
              background: '#ffffff',
              color: '#1e40af',
              boxShadow: '0 2px 8px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.15)',
            }}
          >
            Get Started Free
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://github.com/agentdyne9/SRouter2#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-[15px] font-semibold transition-all"
            style={{
              background: 'rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.9)',
              border: '1px solid rgba(255,255,255,0.22)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <BookOpen size={16} />
            Read the Docs
          </a>
          <a
            href="https://github.com/agentdyne9/SRouter2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold transition-all"
            style={{
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            <Github size={16} />
            Star on GitHub
          </a>
        </div>

        {/* Quick stat row */}
        <div
          className="grid grid-cols-3 gap-6 pt-10 mx-auto max-w-xl"
          style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
        >
          {[
            { v: '< 5 min', l: 'Time to first route' },
            { v: 'MIT',     l: 'Core license' },
            { v: '95.4%',  l: 'Out-of-box accuracy' },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div
                className="font-black mb-1 tracking-tight text-white"
                style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                }}
              >
                {s.v}
              </div>
              <div
                className="text-[11.5px] font-medium"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise strip */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-[13px]"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          <span>Need enterprise governance?</span>
          <Link
            href="/enterprise"
            className="inline-flex items-center gap-1.5 font-bold transition-colors"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            Talk to our team
            <ArrowRight size={13} />
          </Link>
          <span className="hidden sm:inline" style={{ opacity: 0.3 }}>·</span>
          <a
            href="mailto:support@stratarouter.com"
            className="flex items-center gap-1.5 transition-colors"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            <Mail size={13} />
            support@stratarouter.com
          </a>
        </div>
      </div>
    </section>
  )
}
