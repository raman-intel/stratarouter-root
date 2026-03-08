'use client'

import { useState, useRef, useEffect } from 'react'
import { Bot, GitBranch, Database, Headphones, ChevronRight } from 'lucide-react'

const useCases = [
  {
    id: 'agent',
    icon: Bot,
    color: '#2563eb',
    title: 'AI Agent Orchestration',
    desc: 'Route user queries to specialized agents based on semantic intent. Replace brittle keyword rules with intelligent semantic understanding that improves with usage.',
    code: `from stratarouter import Router, Route

router = Router(encoder="all-MiniLM-L6-v2")

# Specialized agent routes
router.add(Route("billing",
    description="Payment and invoices",
    examples=["refund", "invoice", "charge"]))

router.add(Route("technical",
    description="Product bugs and errors",
    examples=["crash", "error", "not working"]))

router.add(Route("sales",
    description="Pricing and upgrades",
    examples=["pricing", "plan", "upgrade"]))

router.build_index()

# Intelligent routing in real-time
result = router.route("My payment failed last night")
# → Route: billing  |  Confidence: 0.94  |  1.8ms ⚡`,
  },
  {
    id: 'multimodel',
    icon: GitBranch,
    color: '#0891b2',
    title: 'Multi-Model LLM Routing',
    desc: 'Direct queries to the optimal model based on complexity, cost, privacy, and capability. Cut inference costs by 60% while improving quality on each task type.',
    code: `from stratarouter import Router, Route
from stratarouter.integrations.langchain import StrataRouterChain

router = Router()

router.add(Route("gpt5",
    description="Complex reasoning, deep analysis"))
router.add(Route("claude",
    description="Long-form writing and code review"))
router.add(Route("gemini",
    description="Multimodal and real-time data"))
router.add(Route("local",
    description="Privacy-sensitive queries"))

router.build_index()

result = router.route("Analyze this 50-page financial report")
# → claude  |  Confidence: 0.91  |  2.1ms ⚡`,
  },
  {
    id: 'rag',
    icon: Database,
    color: '#059669',
    title: 'RAG Pipeline Optimization',
    desc: 'Select the best retrieval strategy dynamically. Route to semantic search, keyword search, or hybrid based on query type — maximizing recall without sacrificing precision.',
    code: `from stratarouter import Router, Route
from stratarouter.integrations.langchain import StrataRouterRetriever

router = Router()

router.add(Route("semantic",
    description="Conceptual and abstract queries"))
router.add(Route("keyword",
    description="Exact term and product lookups"))
router.add(Route("hybrid",
    description="Mixed intent, complex queries"))
router.add(Route("sql",
    description="Structured data questions"))

router.build_index()

result = router.route("How does transformer attention work?")
# → semantic  |  Confidence: 0.97  |  1.2ms ⚡`,
  },
  {
    id: 'support',
    icon: Headphones,
    color: '#7c3aed',
    title: 'Customer Support Triage',
    desc: 'Automatically classify and route support tickets to the right team in real-time. Reduce first-response time and improve resolution accuracy across every channel.',
    code: `from stratarouter import Router, Route
from stratarouter.integrations.autogen import StrataRouterGroupChat

router = Router()

router.add(Route("billing",
    examples=["refund", "invoice", "charge"]))
router.add(Route("outage",
    examples=["down", "broken", "not working"]))
router.add(Route("account",
    examples=["password", "login", "access"]))
router.add(Route("feature",
    examples=["how to", "feature request"]))

router.build_index()

result = router.route("I was charged twice for my subscription")
# → billing  |  Confidence: 0.96  |  1.5ms ⚡`,
  },
]

function renderCodeLine(line: string) {
  if (!line.trim()) return <>&nbsp;</>
  if (line.trim().startsWith('#')) return <span className="token-comment">{line}</span>
  if (line.includes('→')) return <span className="text-cyan-400 font-semibold">{line}</span>

  return (
    <>
      {line.split(/(\b(?:from|import|as|def|return)\b|"[^"]*"|'[^']*')/g).map((part, j) => {
        if (/^(from|import|as|def|return)$/.test(part)) return <span key={j} className="token-keyword">{part}</span>
        if (/^["']/.test(part)) return <span key={j} className="token-string">{part}</span>
        return <span key={j} className="text-slate-300">{part}</span>
      })}
    </>
  )
}

export default function UseCasesSection() {
  const [active, setActive] = useState(0)
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

  const uc = useCases[active]
  const Icon = uc.icon

  return (
    <section
      ref={ref}
      id="use-cases"
      className="section-padding relative overflow-hidden"
      style={{ background: '#ffffff' }}
    >
      <div className="absolute inset-0 bg-grid" style={{ opacity: 0.4 }} />
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(24px)',
            transition: 'all 0.6s ease',
          }}
        >
          <span className="badge badge-green mb-5">Use Cases</span>
          <h2
            className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            The routing layer for
            <span className="gradient-text-brand"> every AI app</span>
          </h2>
          <p
            className="text-slate-500 text-[17px] leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            From chatbots to enterprise orchestration, StrataRouter adapts to your exact workflow.
          </p>
        </div>

        <div
          className="grid lg:grid-cols-5 gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(24px)',
            transition: 'all 0.6s ease 0.15s',
          }}
        >
          {/* Sidebar tabs */}
          <div className="lg:col-span-2">
            {/* Mobile: scrollable row */}
            <div className="flex lg:hidden gap-2 overflow-x-auto scrollbar-hide pb-2">
              {useCases.map((uc, i) => {
                const TabIcon = uc.icon
                return (
                  <button
                    key={uc.id}
                    onClick={() => setActive(i)}
                    className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border text-[13px] font-semibold whitespace-nowrap transition-all"
                    style={{
                      borderColor: active === i ? uc.color + '40' : 'rgba(15,23,42,0.08)',
                      background: active === i ? uc.color + '0d' : 'transparent',
                      color: active === i ? uc.color : '#64748b',
                    }}
                  >
                    <TabIcon size={14} />
                    {uc.title.split(' ')[0]}
                  </button>
                )
              })}
            </div>

            {/* Desktop: vertical list */}
            <div className="hidden lg:flex flex-col gap-2">
              {useCases.map((uc, i) => {
                const TabIcon = uc.icon
                const isActive = active === i
                return (
                  <button
                    key={uc.id}
                    onClick={() => setActive(i)}
                    className="use-case-tab text-left"
                    style={{
                      borderColor: isActive ? uc.color + '40' : 'transparent',
                      background: isActive ? uc.color + '0a' : 'transparent',
                    }}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          background: isActive ? uc.color + '15' : 'rgba(15,23,42,0.05)',
                          border: `1px solid ${isActive ? uc.color + '30' : 'rgba(15,23,42,0.08)'}`,
                        }}
                      >
                        <TabIcon size={13} style={{ color: isActive ? uc.color : '#64748b' }} />
                      </div>
                      <span
                        className={`text-[14px] font-semibold ${isActive ? 'text-slate-900' : 'text-slate-500'}`}
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {uc.title}
                      </span>
                      {isActive && <ChevronRight size={14} className="ml-auto text-slate-400" />}
                    </div>
                    <p
                      className={`text-[12.5px] leading-relaxed ${isActive ? 'text-slate-500' : 'text-slate-400'}`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", paddingLeft: '36px' }}
                    >
                      {uc.desc}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Code panel */}
          <div className="lg:col-span-3">
            <div className="code-block h-full">
              {/* Chrome */}
              <div className="code-header">
                <div className="code-dot bg-[#ff5f57]" />
                <div className="code-dot bg-[#ffbd2e]" />
                <div className="code-dot bg-[#28c840]" />
                <div className="flex items-center gap-2 ml-3" style={{ color: uc.color }}>
                  <Icon size={12} />
                  <span className="text-[12px] font-semibold">{uc.title}</span>
                </div>
              </div>

              {/* Code body */}
              <div className="code-body">
                <pre className="text-[12.5px] leading-[1.78] overflow-x-auto">
                  {uc.code.split('\n').map((line, i) => (
                    <span key={i} className="block">{renderCodeLine(line)}</span>
                  ))}
                </pre>
              </div>

              {/* Output bar */}
              <div className="px-5 py-3 border-t border-white/[0.055] bg-white/[0.012] text-[11.5px] font-mono flex items-center gap-2">
                <span className="text-slate-600">→</span>
                <span style={{ color: uc.color }}>Routed successfully</span>
                <span className="text-slate-600 ml-auto">avg 1.8ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  )
}
