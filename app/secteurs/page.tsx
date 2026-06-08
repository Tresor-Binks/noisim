import type { Metadata } from 'next'
import Link from 'next/link'
import { Factory, Droplets, Car, Heart, Building2, Landmark, ArrowRight, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { CTASection } from '@/components/sections/CTASection'
import { sectors } from '@/data/sectors'

export const metadata: Metadata = {
  title: 'Secteurs d\'activité | NOISIM — Marchés & Industries cibles',
  description: 'NOISIM intervient dans 6 marchés clés : Industries, Pétrole & Gaz, Infrastructures urbaines, Santé, Bâtiment tertiaire et Institutions. Découvrez nos expertises par secteur.',
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory, Droplets, Car, Heart, Building2, Landmark,
}

const sectorColors: Record<string, { bg: string; text: string; hover: string; num: string }> = {
  'industries-production':              { bg: 'bg-sky-50',    text: 'text-sky-600',    hover: 'group-hover:border-sky-200',    num: 'text-sky-100' },
  'petrole-gaz-energie':               { bg: 'bg-orange-50', text: 'text-orange-600', hover: 'group-hover:border-orange-200', num: 'text-orange-100' },
  'infrastructures-urbaines-transport': { bg: 'bg-primary/8', text: 'text-primary',    hover: 'group-hover:border-primary/30', num: 'text-primary/10' },
  'sante-biomédical':                  { bg: 'bg-rose-50',   text: 'text-rose-600',   hover: 'group-hover:border-rose-200',   num: 'text-rose-100' },
  'batiment-tertiaire':                { bg: 'bg-amber-50',  text: 'text-amber-600',  hover: 'group-hover:border-amber-200',  num: 'text-amber-100' },
  'institutions-administrations':       { bg: 'bg-violet-50', text: 'text-violet-600', hover: 'group-hover:border-violet-200', num: 'text-violet-100' },
}

/* Services NOISIM qui s'appliquent par secteur */
const sectorServices: Record<string, string[]> = {
  'industries-production':              ['Automatisation & Régulation', 'Instrumentation', 'Maintenance Industrielle', 'Sécurité Électronique', 'Électricité Industrielle'],
  'petrole-gaz-energie':               ['Instrumentation & I&E', 'Étalonnage Métrologique', 'Maintenance Industrielle', 'Sécurité Incendie & Gaz', 'Électricité ATEX'],
  'infrastructures-urbaines-transport': ['Systèmes de Péage', 'Systèmes de Pesage', 'Gestion de Parking', 'Solutions Numériques', 'Gestion de Flotte'],
  'sante-biomédical':                  ['Installation Biomédicale', 'Étalonnage Médical', 'Maintenance Biomédicale', 'Sécurité Électronique', 'Électricité Bâtiment'],
  'batiment-tertiaire':                ['Électricité Bâtiment', 'Énergies Renouvelables', 'Vidéosurveillance', 'Contrôle d\'Accès', 'Réseaux Informatiques'],
  'institutions-administrations':       ['Contrôle d\'Accès', 'Vidéosurveillance', 'Développement Logiciel', 'Réseaux Informatiques', 'Systèmes Solaires'],
}

export default function SecteursPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)', backgroundSize: '64px 64px' }} aria-hidden />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" aria-hidden />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Secteurs d&apos;activité</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Les marchés que{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">nous servons</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl mb-8">
              Nos 6 pôles de services s&apos;appliquent à des secteurs précis, chacun avec ses contraintes et ses exigences. Retrouvez ici comment NOISIM répond aux défis de votre industrie.
            </p>
            {/* Services vs Secteurs note */}
            <div className="inline-flex items-start gap-3 bg-white/[0.06] border border-white/10 rounded-xl p-4 max-w-lg">
              <span className="text-primary text-lg font-black mt-0.5 shrink-0">→</span>
              <p className="text-gray-400 text-xs leading-relaxed">
                <span className="text-white font-semibold">Vous cherchez nos services ?</span> Les secteurs décrivent les marchés où nous intervenons. Nos prestations techniques sont présentées dans{' '}
                <Link href="/services" className="text-primary hover:underline font-medium">la page Services</Link>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SECTORS GRID ──────────────────────────────────────── */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            tag="6 marchés cibles"
            title="Une expertise adaptée à chaque secteur"
            description="Chaque secteur a ses contraintes réglementaires, techniques et opérationnelles. Nos équipes les connaissent et y déploient les bonnes compétences."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {sectors.map((sector, i) => {
              const Icon = iconMap[sector.icon] || Factory
              const colors = sectorColors[sector.slug] ?? { bg: 'bg-primary/8', text: 'text-primary', hover: 'group-hover:border-primary/30', num: 'text-primary/10' }
              const srvcs = sectorServices[sector.slug] ?? []
              return (
                <AnimatedSection key={sector.id} delay={i * 80}>
                  <Link href={`/secteurs/${sector.slug}`} className={`group relative bg-white border border-gray-100 rounded-2xl p-7 flex flex-col h-full overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${colors.hover}`}>
                    <span className={`absolute top-4 right-5 text-7xl font-black select-none leading-none pointer-events-none ${colors.num}`} aria-hidden>{String(i + 1).padStart(2, '0')}</span>

                    <div className={`relative z-10 w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>

                    <h2 className="relative z-10 text-xl font-bold text-secondary mb-3 leading-snug">{sector.title}</h2>
                    <p className="relative z-10 text-gray-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">{sector.description}</p>

                    {/* Services applicable */}
                    <div className="relative z-10 mb-5">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Services NOISIM déployés</p>
                      <div className="flex flex-wrap gap-1.5">
                        {srvcs.map((s) => (
                          <span key={s} className={`text-[10px] font-medium px-2 py-0.5 rounded ${colors.bg} ${colors.text}`}>{s}</span>
                        ))}
                      </div>
                    </div>

                    <div className={`relative z-10 flex items-center gap-1.5 ${colors.text} text-sm font-semibold group-hover:gap-2.5 transition-all duration-200`}>
                      Explorer ce secteur <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES LINK BAND ────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-secondary to-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden />
        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Nos prestations techniques</span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-4xl font-black text-white mb-4">Découvrez nos 6 pôles de services</h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto mb-8">
              Vous êtes dans l&apos;un de ces secteurs ? Consultez nos pôles d&apos;expertise pour découvrir précisément les prestations que nous pouvons déployer chez vous.
            </p>
            <Link href="/services" className="btn-primary inline-flex text-base">
              Voir tous nos services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── QUICK NAV ─────────────────────────────────────────── */}
      <section className="py-10 bg-surface border-y border-gray-100">
        <div className="container-custom">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-5 text-center">Navigation rapide</p>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((s) => {
              const Icon = iconMap[s.icon] || Factory
              return (
                <Link key={s.slug} href={`/secteurs/${s.slug}`} className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full hover:border-primary hover:text-primary transition-all duration-200">
                  <Icon className="w-4 h-4" />
                  {s.title}
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
