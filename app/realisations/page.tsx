import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Monitor, Globe, Smartphone,
  CreditCard, Tag, TrendingUp, ChevronRight,
} from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { CTASection } from '@/components/sections/CTASection'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Nos Réalisations | NOISIM — Toll Control System',
  description:
    'Découvrez le Toll Control System (TCS), la solution propriétaire NOISIM pour la gestion automatisée des péages : application desktop, web et mobile.',
  openGraph: {
    title: 'Réalisations NOISIM | Toll Control System',
    description:
      'TCS — une plateforme complète pour moderniser les péages : supervision direction, gestion personnel, expérience usager, passages automatisés RFID et tags véhicules.',
  },
}

const tcsApps = [
  {
    icon: Monitor,
    label: 'Application Desktop',
    target: 'Direction',
    description: 'Contrôle total : supervision multi-sites, finances, rapports, paramétrage tarifaire et gestion des abonnements.',
    color: 'bg-sky-50 text-sky-600 border-sky-100',
    dot: 'bg-sky-500',
  },
  {
    icon: Globe,
    label: 'Application Web',
    target: 'Personnel péage',
    description: 'Tableau de bord opérationnel temps réel : flux de passages, alertes, gestion des incidents et suivi des recettes.',
    color: 'bg-primary/8 text-primary border-primary/20',
    dot: 'bg-primary',
  },
  {
    icon: Smartphone,
    label: 'Application Mobile',
    target: 'Usagers',
    description: 'Consultation du solde carte, gestion de l\'abonnement, historique des passages et paiement dématérialisé.',
    color: 'bg-violet-50 text-violet-600 border-violet-100',
    dot: 'bg-violet-500',
  },
]

const tcsModes = [
  {
    icon: CreditCard,
    title: 'Carte Prépayée',
    description:
      'L\'usager charge sa carte RFID/NFC en prépayé. À chaque passage, il badge sur le lecteur — si le solde est suffisant, la barrière s\'ouvre automatiquement. Aucun personnel nécessaire.',
    steps: ['Rechargement carte (mobile ou guichet)', 'Badgeage sur le lecteur RFID/NFC', 'Déduction automatique du solde', 'Barrière ouverte en < 5 secondes'],
    color: 'border-sky-200 bg-sky-50/50',
    iconColor: 'bg-sky-100 text-sky-600',
    numColor: 'bg-sky-100 text-sky-700',
  },
  {
    icon: Tag,
    title: 'Abonnement + Tag Véhicule',
    description:
      'Un tag électronique est apposé sur le pare-brise ou la plaque du véhicule. Le système de reconnaissance identifie automatiquement le véhicule et vérifie l\'abonnement actif pour ouvrir la barrière.',
    steps: ['Souscription à un abonnement (mensuel / annuel)', 'Pose du tag sur le véhicule', 'Reconnaissance automatique à l\'approche', 'Passage fluidifié si abonnement actif'],
    color: 'border-primary/20 bg-primary/[0.03]',
    iconColor: 'bg-primary/10 text-primary',
    numColor: 'bg-primary/10 text-primary',
  },
]

export default function RealisationsPage() {
  const project = projects[0]

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 bg-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }}
          aria-hidden
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" aria-hidden />

        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                Nos Réalisations
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Des solutions qui{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                transforment le terrain
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Chaque réalisation NOISIM est le fruit d&apos;une analyse terrain rigoureuse,
              d&apos;une ingénierie maîtrisée et d&apos;un engagement total envers le résultat.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FEATURED — TCS OVERVIEW CARD ─────────────────────── */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            tag="Produit phare"
            title="Notre première réalisation majeure"
            description="Conçu, développé et déployé par les équipes NOISIM — le Toll Control System redéfinit la gestion des infrastructures de péage en Afrique."
            className="mb-14"
          />

          {/* Main TCS card */}
          <AnimatedSection>
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">

              {/* Top band */}
              <div className="bg-gradient-to-r from-secondary to-dark px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '32px 32px' }} aria-hidden />
                <div className="relative z-10">
                  <span className="bg-primary/20 border border-primary/30 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                    Produit propriétaire NOISIM
                  </span>
                  <h2 className="text-2xl font-black text-white">Toll Control System</h2>
                  <p className="text-primary font-bold tracking-wider text-sm">TCS</p>
                </div>
                <div className="relative z-10 flex items-center gap-3">
                  {tcsApps.map((app) => (
                    <div key={app.label} className="flex flex-col items-center gap-1.5">
                      <div className="w-10 h-10 bg-white/10 border border-white/15 rounded-xl flex items-center justify-center">
                        <app.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-[9px] text-gray-400 font-medium text-center leading-tight">{app.target}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl text-base">
                  {project.context}
                </p>

                {/* 3 apps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                  {tcsApps.map((app, i) => (
                    <AnimatedSection key={app.label} delay={i * 80}>
                      <div className={`border rounded-2xl p-5 h-full ${app.color}`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${app.color}`}>
                          <app.icon className="w-5 h-5" />
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-secondary text-sm">{app.label}</h3>
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${app.dot}`} />
                        </div>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-3">
                          {app.target}
                        </p>
                        <p className="text-gray-600 text-xs leading-relaxed">{app.description}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                {/* Key results strip */}
                <div className="bg-surface rounded-2xl border border-gray-100 p-5 mb-8">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Résultats clés</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {project.results.map((r) => (
                      <div key={r} className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs leading-relaxed">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-primary/8 text-primary px-3 py-1.5 rounded-lg font-medium border border-primary/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/realisations/${project.slug}`}
                  className="btn-primary inline-flex"
                >
                  Voir l&apos;étude de cas complète
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PASSAGE MODES ─────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            tag="Modes de passage"
            title="Deux modes 100 % sans contact"
            description="Le TCS élimine le passage en cabine. Deux technologies complémentaires couvrent tous les profils d'usagers."
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tcsModes.map((mode, i) => (
              <AnimatedSection key={mode.title} delay={i * 120}>
                <div className={`border-2 rounded-3xl p-8 h-full ${mode.color}`}>
                  {/* Icon + title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${mode.iconColor}`}>
                      <mode.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-secondary">{mode.title}</h3>
                      <p className="text-xs text-gray-400 font-medium mt-0.5">Mode de passage automatisé</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-7 text-sm">{mode.description}</p>

                  {/* Steps */}
                  <div className="space-y-3">
                    {mode.steps.map((step, j) => (
                      <div key={step} className="flex items-start gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5 ${mode.numColor}`}>
                          {j + 1}
                        </span>
                        <span className="text-gray-700 text-sm leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMING SOON STRIP ─────────────────────────────────── */}
      <section className="py-16 bg-surface border-y border-gray-100">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-0.5 bg-primary/40" />
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
                Bientôt disponible
              </span>
              <span className="w-8 h-0.5 bg-primary/40" />
            </div>
            <h2 className="text-3xl font-black text-secondary mb-4">
              De nouvelles réalisations arrivent
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              NOISIM est actuellement en mission sur plusieurs projets stratégiques.
              Nos prochaines études de cas seront publiées au fil des déploiements.
            </p>
            <Link href="/contact" className="btn-secondary inline-flex">
              Discuter de votre projet
              <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  )
}
