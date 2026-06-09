import type { Metadata } from 'next'
import { CTASection } from '@/components/sections/CTASection'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { AboutMissionVision } from '@/components/sections/about/AboutMissionVision'
import { AboutValues } from '@/components/sections/about/AboutValues'
import { AboutTimeline } from '@/components/sections/about/AboutTimeline'
import { AboutTeam } from '@/components/sections/about/AboutTeam'
import { AboutPartners } from '@/components/sections/about/AboutPartners'
import { AboutWhyUs } from '@/components/sections/about/AboutWhyUs'

export const metadata: Metadata = {
  title: 'À Propos | NOISIM — Mission, Vision & Équipe',
  description:
    "Découvrez NOISIM : notre mission d'accélérer la transformation industrielle africaine, notre équipe d'experts et les valeurs qui guident chacun de nos projets.",
  openGraph: {
    title: 'À Propos de NOISIM | Leader en Automatisation Industrielle',
    description:
      "Fondée au Congo en 2015, NOISIM accompagne les industriels dans leur transformation digitale avec rigueur, innovation et engagement.",
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMissionVision />
      <AboutValues />
      <AboutTimeline />
      <AboutTeam />
      <AboutWhyUs />
      <CTASection />
    </>
  )
}
