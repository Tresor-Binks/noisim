import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Factory, Droplets, Car, Heart, Building2, Landmark, ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, Lightbulb, TrendingUp, ChevronRight, Wrench } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { CTASection } from '@/components/sections/CTASection'
import { sectors } from '@/data/sectors'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory, Droplets, Car, Heart, Building2, Landmark,
}

const sectorColors: Record<string, { bg: string; text: string; border: string }> = {
  'industries-production':              { bg: 'bg-sky-50',    text: 'text-sky-600',    border: 'border-sky-200' },
  'petrole-gaz-energie':               { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
  'infrastructures-urbaines-transport': { bg: 'bg-primary/8', text: 'text-primary',    border: 'border-primary/30' },
  'sante-biomédical':                  { bg: 'bg-rose-50',   text: 'text-rose-600',   border: 'border-rose-200' },
  'batiment-tertiaire':                { bg: 'bg-amber-50',  text: 'text-amber-600',  border: 'border-amber-200' },
  'institutions-administrations':       { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200' },
}

/* Lien secteur → slug service */
const sectorToServiceLinks: Record<string, { label: string; slug: string }[]> = {
  'industries-production':              [{ label: 'Automatisation & Régulation', slug: 'automatisation-regulation-robotique' }, { label: 'Sécurité Électronique', slug: 'securite-electronique-protection-incendie' }, { label: 'Énergie & Électricité', slug: 'energie-electricite-industrielle' }],
  'petrole-gaz-energie':               [{ label: 'Automatisation & Instrumentation', slug: 'automatisation-regulation-robotique' }, { label: 'Sécurité & Protection Incendie', slug: 'securite-electronique-protection-incendie' }, { label: 'Énergie & Électricité', slug: 'energie-electricite-industrielle' }],
  'infrastructures-urbaines-transport': [{ label: 'Mobilité & Transport', slug: 'mobilite-transport-infrastructures' }, { label: 'Solutions Numériques', slug: 'solutions-numeriques-gestion-actifs' }],
  'sante-biomédical':                  [{ label: 'Technologies Biomédicales', slug: 'ingenierie-technologies-biomedicales' }, { label: 'Sécurité Électronique', slug: 'securite-electronique-protection-incendie' }, { label: 'Énergie & Électricité', slug: 'energie-electricite-industrielle' }],
  'batiment-tertiaire':                [{ label: 'Énergie & Électricité', slug: 'energie-electricite-industrielle' }, { label: 'Sécurité Électronique', slug: 'securite-electronique-protection-incendie' }, { label: 'Solutions Numériques', slug: 'solutions-numeriques-gestion-actifs' }],
  'institutions-administrations':       [{ label: 'Sécurité Électronique', slug: 'securite-electronique-protection-incendie' }, { label: 'Solutions Numériques', slug: 'solutions-numeriques-gestion-actifs' }, { label: 'Énergie & Électricité', slug: 'energie-electricite-industrielle' }],
}

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const sector = sectors.find((s) => s.slug === slug)
  if (!sector) return {}
  return {
    title: `${sector.title} | Secteurs NOISIM`,
    description: sector.description,
  }
}

export default async function SectorDetailPage({ params }: Props) {
  const { slug } = await params
  const sector = sectors.find((s) => s.slug === slug)
  if (!sector) notFound()

  const Icon = iconMap[sector.icon] || Factory
  const colors = sectorColors[sector.slug] ?? { bg: 'bg-primary/8', text: 'text-primary', border: 'border-primary/30' }
  const idx = sectors.findIndex((s) => s.slug === slug)
  const prev = sectors[idx - 1]
  const next = sectors[idx + 1]
  const relatedServices = sectorToServiceLinks[sector.slug] ?? []

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)', backgroundSize: '64px 64px' }} aria-hidden />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" aria-hidden />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/secteurs" className="hover:text-primary transition-colors flex items-center gap-1.5"><ArrowLeft className="w-4 h-4" />Secteurs</Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-gray-300">{sector.title}</span>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-4 mb-7">
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center opacity-90`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <span className="text-primary/50 text-xs font-bold uppercase tracking-[0.2em]">Secteur 0{idx + 1} / 0{sectors.length}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-6">{sector.title}</h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">{sector.description}</p>
              <div className="flex gap-4">
                <Link href="/contact" className="btn-primary">Discuter de votre projet <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/services" className="btn-outline-white">Nos services</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-7">
                <p className="text-xs font-bold text-primary uppercase tracking-[0.18em] mb-5">Bénéfices dans ce secteur</p>
                <ul className="space-y-4">
                  {sector.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-200 text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES / SOLUTIONS ─────────────────────────────── */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-[0.15em]">Enjeux sectoriels</p>
                  <h2 className="text-2xl font-bold text-secondary">Les défis de votre secteur</h2>
                </div>
              </div>
              <div className="space-y-3">
                {sector.challenges.map((c, i) => (
                  <div key={c} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:border-amber-200 transition-colors duration-200">
                    <span className="w-7 h-7 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center text-xs font-black shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{c}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Réponses NOISIM</p>
                  <h2 className="text-2xl font-bold text-secondary">Nos solutions dans ce secteur</h2>
                </div>
              </div>
              <div className="space-y-3">
                {sector.solutions.map((sol, i) => (
                  <div key={sol} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:border-primary/30 transition-colors duration-200">
                    <span className={`w-7 h-7 ${colors.bg} ${colors.text} rounded-lg flex items-center justify-center text-xs font-black shrink-0`}>{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{sol}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── RESULTS DARK ──────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-secondary to-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden />
        <div className="container-custom relative z-10">
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Résultats concrets</span>
            </div>
            <h2 className="text-4xl font-black text-white max-w-xl">Ce que NOISIM vous apporte dans ce secteur</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {sector.benefits.map((b, i) => (
              <AnimatedSection key={b} delay={i * 80}>
                <div className="flex items-start gap-4 bg-white/[0.06] border border-white/8 rounded-xl p-5 hover:bg-white/[0.09] hover:border-primary/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">{b}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Cas d&apos;usage</span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-4xl font-black text-secondary">Applications concrètes</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sector.useCases.map((uc, i) => (
              <AnimatedSection key={uc} delay={i * 100}>
                <div className={`group bg-surface border-2 ${colors.border} rounded-2xl p-6 text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1`}>
                  <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">{uc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ──────────────────────────────────── */}
      <section className="section-padding bg-surface">
        <div className="container-custom max-w-3xl">
          <AnimatedSection className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Services NOISIM associés</span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl font-black text-secondary mb-3">Les pôles que nous déployons ici</h2>
            <p className="text-gray-500 text-sm">Cliquez sur un pôle pour découvrir ses prestations détaillées.</p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedServices.map((rs, i) => (
              <AnimatedSection key={rs.slug} delay={i * 80}>
                <Link href={`/services/${rs.slug}`} className="inline-flex items-center gap-2.5 bg-white border border-gray-200 text-gray-700 font-semibold text-sm px-5 py-3 rounded-xl hover:border-primary/40 hover:text-primary hover:shadow-card transition-all duration-200 group">
                  <Wrench className="w-4 h-4 text-primary" />
                  {rs.label}
                  <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── NAVIGATOR ─────────────────────────────────────────── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container-custom">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-6 text-center">Autres secteurs</p>
          <div className="flex items-center justify-between gap-4">
            {prev ? (
              <Link href={`/secteurs/${prev.slug}`} className="flex items-center gap-3 bg-surface border border-gray-200 rounded-xl px-5 py-3 hover:border-primary/40 hover:shadow-card transition-all duration-200 group max-w-xs">
                <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors shrink-0" />
                <div><p className="text-[10px] text-gray-400 uppercase tracking-widest">Précédent</p><p className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors leading-tight">{prev.title}</p></div>
              </Link>
            ) : <div />}
            <Link href="/secteurs" className="text-sm text-gray-500 hover:text-primary transition-colors font-medium hidden sm:block">Tous les secteurs</Link>
            {next ? (
              <Link href={`/secteurs/${next.slug}`} className="flex items-center gap-3 bg-surface border border-gray-200 rounded-xl px-5 py-3 hover:border-primary/40 hover:shadow-card transition-all duration-200 group max-w-xs text-right">
                <div><p className="text-[10px] text-gray-400 uppercase tracking-widest">Suivant</p><p className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors leading-tight">{next.title}</p></div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors shrink-0" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
