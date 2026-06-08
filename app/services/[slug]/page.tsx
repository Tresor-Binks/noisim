import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Car, Zap, Settings, Shield, Monitor, Heart,
  ArrowLeft, ArrowRight, CheckCircle, TrendingUp,
  Lightbulb, ChevronDown, ChevronRight,
} from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { CTASection } from '@/components/sections/CTASection'
import { services } from '@/data/services'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car, Zap, Settings, Shield, Monitor, Heart,
}

const serviceColors: Record<string, { bg: string; text: string; border: string }> = {
  'mobilite-transport-infrastructures':        { bg: 'bg-sky-50',    text: 'text-sky-600',    border: 'border-sky-200' },
  'energie-electricite-industrielle':          { bg: 'bg-amber-50',  text: 'text-amber-600',  border: 'border-amber-200' },
  'automatisation-regulation-robotique':       { bg: 'bg-primary/8', text: 'text-primary',    border: 'border-primary/30' },
  'securite-electronique-protection-incendie': { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200' },
  'solutions-numeriques-gestion-actifs':       { bg: 'bg-teal-50',   text: 'text-teal-600',   border: 'border-teal-200' },
  'ingenierie-technologies-biomedicales':      { bg: 'bg-rose-50',   text: 'text-rose-600',   border: 'border-rose-200' },
}

const subServices: Record<string, { label: string; desc: string }[]> = {
  'mobilite-transport-infrastructures': [
    { label: 'Systèmes de Péage', desc: 'Installation et configuration de solutions complètes de péage automatisé multi-voies.' },
    { label: 'Systèmes de Pesage', desc: 'Déploiement et étalonnage certifié de ponts-bascules et pesage dynamique.' },
    { label: 'Gestion de Parking', desc: 'Systèmes automatisés de contrôle et de guidage pour espaces de stationnement.' },
  ],
  'energie-electricite-industrielle': [
    { label: 'Énergies Renouvelables', desc: 'Conception et installation de systèmes photovoltaïques autonomes et hybrides.' },
    { label: 'Électricité Industrielle', desc: 'Courant fort/faible, câblage d\'armoires et alimentation d\'équipements lourds.' },
    { label: 'Électricité Bâtiment', desc: 'Installations électriques complètes pour complexes résidentiels et tertiaires.' },
  ],
  'automatisation-regulation-robotique': [
    { label: 'Automatisme & Régulation', desc: 'Programmation de systèmes industriels PLC/DCS et boucles de régulation de processus.' },
    { label: 'Instrumentation', desc: 'Installation et étalonnage de capteurs, actionneurs et vannes automatiques.' },
    { label: 'Maintenance Industrielle', desc: 'Maintenance préventive et curative pour garantir le zéro arrêt sur vos sites.' },
  ],
  'securite-electronique-protection-incendie': [
    { label: 'Vidéosurveillance & Anti-Intrusion', desc: 'Systèmes de caméras intelligentes et barrières de détection périmétrique.' },
    { label: 'Contrôle d\'Accès & Visiteurs', desc: 'Gestion des flux de personnel, badges et systèmes de présence.' },
    { label: 'Sécurité Incendie', desc: 'Systèmes de détection précoce et alarme incendie conformes aux normes.' },
  ],
  'solutions-numeriques-gestion-actifs': [
    { label: 'Développement Logiciel', desc: 'Création d\'applications métiers, d\'IHM et de solutions sur mesure.' },
    { label: 'Gestion de Flotte', desc: 'Géolocalisation et suivi en temps réel de vos véhicules et actifs mobiles.' },
    { label: 'Réseaux Informatiques', desc: 'Architecture, câblage structuré et sécurisation des infrastructures réseau.' },
  ],
  'ingenierie-technologies-biomedicales': [
    { label: 'Fourniture et Installation d\'équipements Médicaux', desc: 'Mise en service et vérification des conditions d\'utilisation des dispositifs médicaux.' },
    { label: 'Étalonnage Métrologique', desc: 'Étalonnage certifié IEC 62353 des appareils de mesure médicaux.' },
    { label: 'Maintenance Biomédicale', desc: 'Contrats de maintenance préventive et corrective multi-marques.' },
  ],
}

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} | Services NOISIM`,
    description: service.shortDescription,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const Icon = iconMap[service.icon] || Settings
  const colors = serviceColors[service.slug] ?? { bg: 'bg-primary/8', text: 'text-primary', border: 'border-primary/30' }
  const subs = subServices[service.slug] ?? []
  const idx = services.findIndex((s) => s.slug === slug)
  const prev = services[idx - 1]
  const next = services[idx + 1]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: { '@type': 'Organization', name: 'NOISIM', url: 'https://noisim.com' },
    areaServed: 'Afrique centrale',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)', backgroundSize: '64px 64px' }} aria-hidden />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" aria-hidden />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/services" className="hover:text-primary transition-colors flex items-center gap-1.5">
                <ArrowLeft className="w-4 h-4" /> Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-gray-300 truncate">{service.title}</span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-4 mb-7">
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center opacity-90`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <span className="text-primary/50 text-xs font-bold uppercase tracking-[0.2em]">Pôle 0{idx + 1} / 06</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-5">{service.title}</h1>

              {/* Sub-services */}
              <div className="flex flex-wrap gap-2 mb-6">
                {subs.map((sub) => (
                  <span key={sub.label} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-gray-200 text-xs font-medium px-3 py-1.5 rounded-full">
                    <span className="w-1 h-1 bg-primary rounded-full" />{sub.label}
                  </span>
                ))}
              </div>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">Demander un devis <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/realisations" className="btn-outline-white">Voir les réalisations</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-7">
                <p className="text-xs font-bold text-primary uppercase tracking-[0.18em] mb-5">Bénéfices clés</p>
                <ul className="space-y-4">
                  {service.benefits.map((b) => (
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

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Notre approche</span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-4xl font-black text-secondary">Notre processus d&apos;intervention</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" aria-hidden />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {service.process.map((step, i) => (
                <AnimatedSection key={step.step} delay={i * 100}>
                  <div className="flex flex-col items-center text-center group">
                    <div className={`relative z-10 w-20 h-20 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center mb-5 shadow-sm group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,184,196,0.2)] transition-all duration-300`}>
                      <div className={`absolute inset-2 rounded-full ${colors.bg} opacity-60`} />
                      <span className={`relative text-xl font-black ${colors.text}`}>{String(step.step).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-bold text-secondary text-base mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES / BENEFITS ──────────────────────────────── */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Applications</p>
                  <h2 className="text-2xl font-bold text-secondary">Cas d&apos;usage typiques</h2>
                </div>
              </div>
              <div className="space-y-3">
                {service.useCases.map((uc, i) => (
                  <div key={uc} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:border-primary/25 transition-colors duration-200">
                    <span className={`w-7 h-7 ${colors.bg} ${colors.text} rounded-lg flex items-center justify-center text-xs font-black shrink-0`}>{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{uc}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-green-600 uppercase tracking-[0.15em]">Résultats</p>
                  <h2 className="text-2xl font-bold text-secondary">Ce que vous y gagnez</h2>
                </div>
              </div>
              <div className="space-y-3">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 hover:border-green-200 transition-colors duration-200">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── STATS DARK STRIP ──────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-secondary to-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { v: '3+', l: 'Années d\'expertise', s: 'sur le terrain africain' },
              { v: '6', l: 'Secteurs d\'activités', s: 'multi-technologies' },
              { v: '100%', l: 'Satisfaction client', s: 'sur tous les projets' },
              { v: '< 2h', l: 'Temps d\'intervention', s: 'sur sites critiques' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.l} delay={i * 80}>
                <div className="text-center py-8 px-6">
                  <div className="text-3xl font-black text-primary mb-1">{stat.v}</div>
                  <div className="text-white text-sm font-semibold mb-1">{stat.l}</div>
                  <div className="text-gray-500 text-xs">{stat.s}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">FAQ</span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-4xl font-black text-secondary">Questions fréquentes</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {service.faq.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <details className="group bg-surface border border-gray-100 rounded-2xl overflow-hidden hover:border-primary/20 transition-colors duration-200">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-semibold text-secondary group-open:text-primary transition-colors duration-200">
                    <span>{item.question}</span>
                    <ChevronDown className="w-5 h-5 text-primary shrink-0 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gray-100 mb-4" />
                    <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── NAVIGATOR ─────────────────────────────────────────── */}
      <section className="py-12 bg-surface border-t border-gray-100">
        <div className="container-custom">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-6 text-center">Autres pôles</p>
          <div className="flex items-center justify-between gap-4">
            {prev ? (
              <Link href={`/services/${prev.slug}`} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 hover:border-primary/40 hover:shadow-card transition-all duration-200 group max-w-xs">
                <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Précédent</p>
                  <p className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors leading-tight">{prev.title.split(',')[0]}</p>
                </div>
              </Link>
            ) : <div />}
            <Link href="/services" className="text-sm text-gray-500 hover:text-primary transition-colors font-medium hidden sm:block">Tous les services</Link>
            {next ? (
              <Link href={`/services/${next.slug}`} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 hover:border-primary/40 hover:shadow-card transition-all duration-200 group max-w-xs text-right">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Suivant</p>
                  <p className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors leading-tight">{next.title.split(',')[0]}</p>
                </div>
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
