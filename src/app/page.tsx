import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import FeaturesSection from '@/components/FeaturesSection'
import ArchitectureSection from '@/components/ArchitectureSection'
import BenchmarkSection from '@/components/BenchmarkSection'
import UseCasesSection from '@/components/UseCasesSection'
import IntegrationsSection from '@/components/IntegrationsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'StrataRouter — Lightning-Fast Semantic Routing for AI',
  description:
    '20× faster, 33× less memory, 95.4% accuracy. The semantic routing engine that elite AI teams build on. Built in Rust with Python bindings.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <ArchitectureSection />
      <BenchmarkSection />
      <UseCasesSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
