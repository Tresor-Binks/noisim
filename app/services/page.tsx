import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Car, Zap, Settings, Shield, Monitor, Heart,
  ArrowRight, CheckCircle, ChevronRight,
} from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { CTASection } from '@/components/sections/CTASection'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Nos Services | NOISIM — 6 pôles d\'expertise technologique',
  description:
    'Mobilité & Transport, Énergie, Automatisation, Sécurité, Solutions Numériques, Biomédical — les 6 pôles d\'expertise de NOISIM au service des industries africaines.',
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car, Zap, Settings, Shield, Monitor, Heart,
}

const serviceColors: Record<string, { bg: string; text: string; hover: string; bar: string; num: string }> = {
  'mobilite-transport-infrastructures':        { bg: 'bg-sky-50',    text: 'text-sky-600',    hover: 'group-hover:border-sky-200',    bar: 'bg-sky-500',    num: 'text-sky-100' },
  'energie-electricite-industrielle':          { bg: 'bg-amber-50',  text: 'text-amber-600',  hover: 'group-hover:border-amber-200',  bar: 'bg-amber-500',  num: 'text-amber-100' },
  'automatisation-regulation-robotique':       { bg: 'bg-primary/8', text: 'text-primary',    hover: 'group-hover:border-primary/30', bar: 'bg-primary',    num: 'text-primary/10' },
  'securite-electronique-protection-incendie': { bg: 'bg-violet-50', text: 'text-violet-600', hover: 'group-hover:border-violet-200', bar: 'bg-violet-500', num: 'text-violet-100' },
  'solutions-numeriques-gestion-actifs':       { bg: 'bg-teal-50',   text: 'text-teal-600',   hover: 'group-hover:border-teal-200',   bar: 'bg-teal-500',   num: 'text-teal-100' },
  'ingenierie-technologies-biomedicales':      { bg: 'bg-rose-50',   text: 'text-rose-600',   hover: 'group-hover:border-rose-200',   bar: 'bg-rose-500',   num: 'text-rose-100' },
}

/* Sub-services par pôle */
const subServices: Record<string, string[]> = {
  'mobilite-transport-infrastructures':        ['Systèmes de Péage', 'Systèmes de Pesage', 'Gestion de Parking'],
  'energie-electricite-industrielle':          ['Énergies Renouvelables (Solaire)', 'Électricité Industrielle', 'Électricité Bâtiment'],
  'automatisation-regulation-robotique':       ['Automatisme & Régulation', 'Instrumentation', 'Maintenance Industrielle'],
  'securite-electronique-protection-incendie': ['Vidéosurveillance & Anti-Intrusion', 'Contrôle d\'Accès', 'Sécurité Incendie'],
  'solutions-numeriques-gestion-actifs':       ['Développement Logiciel', 'Gestion de Flotte', 'Réseaux Informatiques'],
  'ingenierie-technologies-biomedicales':      ['Installation Équipements Médicaux', 'Étalonnage Métrologique', 'Maintenance Biomédicale'],
}

export default function ServicesPage() {
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
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Nos Services</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              6 pôles d&apos;expertise,{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                une seule exigence
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl mb-10">
              Ingénierie logicielle, technologies de pointe et interventions techniques terrain —
              NOISIM combine ces trois dimensions pour offrir des solutions globales et durables.
            </p>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => {
                const Icon = iconMap[s.icon] || Settings
                return (
                  <Link key={s.slug} href={`#${s.slug}`} className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/15 text-gray-300 text-xs font-medium px-3.5 py-1.5 rounded-full hover:bg-primary/20 hover:border-primary/40 hover:text-white transition-all duration-200">
                    <Icon className="w-3.5 h-3.5" />
                    {s.title.split(' ')[0]}…
                  </Link>
                )
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────── */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            tag="Nos 6 pôles d'expertise"
            title="Une réponse technologique globale"
            description="Chaque pôle regroupe des compétences complémentaires pour couvrir l'intégralité des besoins de nos clients, de la conception à la maintenance."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Settings
              const colors = serviceColors[service.slug] ?? { bg: 'bg-primary/8', text: 'text-primary', hover: 'group-hover:border-primary/30', bar: 'bg-primary', num: 'text-primary/10' }
              const subs = subServices[service.slug] ?? []
              return (
                <AnimatedSection key={service.id} delay={i * 80}>
                  <div id={service.slug}>
                    <Link href={`/services/${service.slug}`} className={`group relative bg-white border border-gray-100 rounded-2xl p-7 flex flex-col h-full overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ${colors.hover}`}>
                      <span className={`absolute top-4 right-5 text-7xl font-black select-none leading-none pointer-events-none ${colors.num}`} aria-hidden>{String(i + 1).padStart(2, '0')}</span>

                      <div className={`relative z-10 w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>

                      <h2 className="relative z-10 text-lg font-bold text-secondary mb-3 leading-snug">{service.title}</h2>
                      <p className="relative z-10 text-gray-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-2">{service.shortDescription}</p>

                      {/* Sub-services pills */}
                      <div className="relative z-10 flex flex-wrap gap-1.5 mb-5">
                        {subs.map((sub) => (
                          <span key={sub} className={`text-[10px] font-semibold px-2 py-1 rounded-md ${colors.bg} ${colors.text}`}>{sub}</span>
                        ))}
                      </div>

                      <div className={`relative z-10 h-0.5 w-8 ${colors.bar} rounded-full group-hover:w-full transition-all duration-500 mb-4`} />
                      <div className={`relative z-10 flex items-center gap-1.5 ${colors.text} text-sm font-semibold group-hover:gap-2.5 transition-all duration-200`}>
                        Découvrir ce pôle <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DEEP-DIVE ALTERNATING ─────────────────────────────── */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom space-y-24">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Settings
            const colors = serviceColors[service.slug] ?? { bg: 'bg-primary/8', text: 'text-primary', hover: '', bar: 'bg-primary', num: '' }
            const subs = subServices[service.slug] ?? []
            const isEven = i % 2 === 1
            return (
              <AnimatedSection key={service.id} delay={100}>
                <div id={`detail-${service.slug}`} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:[direction:rtl]' : ''}`}>
                  {/* Text */}
                  <div className={isEven ? 'lg:[direction:ltr]' : ''}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-11 h-11 ${colors.bg} rounded-xl flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-[0.18em] ${colors.text}`}>Pôle 0{i + 1}</span>
                    </div>
                    <h2 className="text-3xl font-black text-secondary mb-3 leading-tight">{service.title}</h2>

                    {/* Sub-services */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {subs.map((sub) => (
                        <span key={sub} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${colors.bg} ${colors.text} border-current/20`}>{sub}</span>
                      ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className={`w-4 h-4 ${colors.text} shrink-0 mt-0.5`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/services/${service.slug}`} className="btn-primary inline-flex">
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? 'lg:[direction:ltr]' : ''}>
                    <div className="bg-gradient-to-br from-secondary to-dark rounded-2xl p-8 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '32px 32px' }} aria-hidden />
                      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden />
                      <div className="relative z-10">
                        <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 opacity-90`}>
                          <Icon className={`w-7 h-7 ${colors.text}`} />
                        </div>
                        <p className="text-xs font-bold text-primary uppercase tracking-[0.18em] mb-4">Cas d&apos;usage</p>
                        <div className="space-y-3">
                          {service.useCases.map((uc, j) => (
                            <div key={uc} className="flex items-start gap-3">
                              <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">{j + 1}</span>
                              <span className="text-gray-300 text-sm leading-relaxed">{uc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {i < services.length - 1 && <div className="border-b border-gray-100 mt-0" />}
              </AnimatedSection>
            )
          })}
        </div>
      </section>

      {/* ── QUICK NAV ─────────────────────────────────────────── */}
      <section className="py-10 bg-surface border-y border-gray-100">
        <div className="container-custom">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-5 text-center">Accès direct</p>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Settings
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full hover:border-primary hover:text-primary transition-all duration-200">
                  <Icon className="w-4 h-4" />
                  {s.title.split(',')[0].split('&')[0].trim()}
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
