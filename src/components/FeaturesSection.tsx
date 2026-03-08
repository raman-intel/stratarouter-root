'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Zap, Brain, Cpu, Plug, Shield, BarChart2,
  RefreshCw, Layers, GitMerge, Lock, Server, Activity
} from 'lucide-react'

const features = [
  {
    icon: Zap, color: 'blue', accent: '#2563eb',
    title: 'Blazing Fast Routing',
    desc: '8.7ms P99 with 18,000 req/s throughput. SIMD-accelerated cosine similarity via Rust HNSW index. Zero-overhead Python bindings via PyO3.',
    tag: 'Performance',
  },
  {
    icon: Brain, color: 'cyan', accent: '#0891b2',
    title: 'Hybrid Scoring Engine',
    desc: 'Combines dense semantic embeddings (HNSW), sparse BM25 keyword scoring, and rule-based patterns. Isotonic regression calibrates confidence for reliable decisions.',
    tag: 'Intelligence',
  },
  {
    icon: Cpu, color: 'violet', accent: '#7c3aed',
    title: 'Rust Core, Python API',
    desc: 'The routing engine is Rust — maximum performance, memory safety, zero GC pauses. A clean Pythonic API means zero friction for ML teams. Cargo crate also ships.',
    tag: 'Architecture',
  },
  {
    icon: Plug, color: 'green', accent: '#059669',
    title: 'Deep Framework Support',
    desc: 'First-class integrations for LangChain, LangGraph, CrewAI, AutoGen, OpenAI Assistants, and Google Vertex AI. Drop-in in 5 lines of code.',
    tag: 'Ecosystem',
  },
  {
    icon: RefreshCw, color: 'amber', accent: '#d97706',
    title: 'Semantic Caching',
    desc: '85%+ cache hit rate cuts LLM cost by 70–80%. Mandatory gate checks prevent incorrect cache reuse. Deterministic blake3 hash keys for reproducible results.',
    tag: 'Cost Savings',
  },
  {
    icon: Layers, color: 'cyan', accent: '#0891b2',
    title: 'TCFP Workflow Engine',
    desc: 'Runtime executes Typed Compositional Flow Protocol workflows with full isolation. Batch deduplication, state snapshots, and checkpoint recovery built in.',
    tag: 'Runtime',
  },
  {
    icon: Shield, color: 'violet', accent: '#7c3aed',
    title: 'Enterprise Governance',
    desc: 'Multi-agent consensus with quorum voting. SHA-256 hash chains create immutable audit trails. SOC 2, HIPAA, ISO 27001 compliant out of the box.',
    tag: 'Compliance',
  },
  {
    icon: Lock, color: 'rose', accent: '#e11d48',
    title: 'Multi-Tenancy & RBAC',
    desc: 'Complete tenant isolation with per-tenant quotas, cost caps, and model allowlists. Role-based and attribute-based access control. Idempotency prevents duplicate calls.',
    tag: 'Security',
  },
  {
    icon: Activity, color: 'green', accent: '#059669',
    title: 'Full Observability',
    desc: 'Prometheus metrics, OpenTelemetry 2.0 distributed tracing, structured logging. Health endpoints, cost tracking, and latency monitoring out of the box.',
    tag: 'Observability',
  },
  {
    icon: GitMerge, color: 'amber', accent: '#d97706',
    title: 'Multi-Model Routing',
    desc: 'Route to GPT-5, Claude 4.5, Gemini 3.1, or local models based on complexity, cost, latency, and capability. Reduce inference spend by up to 60%.',
    tag: 'LLM Routing',
  },
  {
    icon: Server, color: 'blue', accent: '#2563eb',
    title: 'Production Deployment',
    desc: 'Production Docker images, Helm charts for Kubernetes, docker-compose for local. Freemium resource limits (4 vCPU / 24 GB / 10 concurrent) enforced automatically.',
    tag: 'Deployment',
  },
  {
    icon: BarChart2, color: 'rose', accent: '#e11d48',
    title: '95.8% Test Coverage',
    desc: 'Google-standard code quality, 55 tests, 95.8% coverage. Full CI/CD, automated benchmarks, and property-based testing ensure correctness in production.',
    tag: 'Quality',
  },
]

export default function FeaturesSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.04 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="features" className="section-padding relative overflow-hidden section-white">
      <div className="absolute inset-0 bg-grid opacity-[0.3]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <span className="badge badge-cyan mb-5">Full-Stack AI Infrastructure</span>
          <h2
            className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Purpose-built for
            <br />
            <span className="gradient-text-brand">production AI systems</span>
          </h2>
          <p className="text-slate-500 text-[17px] leading-relaxed">
            From raw routing throughput to enterprise governance — StrataRouter covers
            the complete infrastructure stack for intelligent AI applications.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="glass-card glow-border group p-6 cursor-default"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.55s ease, transform 0.55s ease`,
                  transitionDelay: `${Math.min(i * 55, 500)}ms`,
                }}
              >
                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`feature-icon-wrap ${f.color} !mb-0`}
                  >
                    <Icon size={20} style={{ color: f.accent }} />
                  </div>
                  <span
                    className="text-[10.5px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-lg"
                    style={{ color: f.accent, background: `${f.accent}12`, border: `1px solid ${f.accent}22` }}
                  >
                    {f.tag}
                  </span>
                </div>

                <h3 className="text-[15px] font-bold text-slate-900 mb-2.5 group-hover:text-blue-700 transition-colors">
                  {f.title}
                </h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
