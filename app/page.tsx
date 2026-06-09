import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SectorsSection } from '@/components/sections/SectorsSection'
import { CEOWordSection } from '@/components/sections/CEOWordSection'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'NOISIM | Automatisation Industrielle & Transformation Digitale',
  description: 'NOISIM accompagne les entreprises dans leur transformation industrielle grâce à l\'automatisation, l\'intelligence artificielle et les technologies numériques. Expert en Industrie 4.0.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <SectorsSection />
      <CEOWordSection />
      <CTASection />
    </>
  )
}