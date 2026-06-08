import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, CheckCircle, TrendingUp,
  Monitor, Globe, Smartphone, CreditCard, Tag,
  ChevronRight, Zap, Shield, Users, BarChart3,
  AlertCircle, Lightbulb, Wallet,
} from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { CTASection } from '@/components/sections/CTASection'
import { projects } from '@/data/projects'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} | Réalisation NOISIM`,
    description: project.context.slice(0, 160),
    openGraph: {
      title: `${project.title} — NOISIM`,
      description: project.context.slice(0, 160),
    },
  }
}

/* ─── TCS-specific content ─────────────────────────────────────── */

const apps = [
  {
    icon: Monitor,
    title: 'Application Desktop',
    badge: 'Direction & Administration',
    badgeColor: 'bg-sky-100 text-sky-700',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    border: 'border-sky-100 hover:border-sky-300',
    description:
      'Outil de pilotage stratégique réservé à la direction. Elle centralise toutes les données de tous les sites de péage en un seul tableau de bord.',
    features: [
      'Supervision temps réel de tous les postes de péage',
      'Reporting financier automatisé (quotidien, hebdomadaire, mensuel)',
      'Paramétrage des tarifs, créneaux et règles métier',
      'Gestion des abonnements et des cartes prépayées',
      'Alertes et notifications sur incidents critiques',
      'Export comptable et intégration ERP',
    ],
  },
  {
    icon: Globe,
    title: 'Application Web',
    badge: 'Personnel d\'exploitation',
    badgeColor: 'bg-primary/10 text-primary',
    iconBg: 'bg-primary/8',
    iconColor: 'text-primary',
    border: 'border-primary/15 hover:border-primary/40',
    description:
      'Interface opérationnelle accessible depuis n\'importe quel navigateur, dédiée aux agents sur le terrain et aux superviseurs de poste.',
    features: [
      'Vue en temps réel du flux de passages',
      'Gestion manuelle des incidents et exceptions',
      'Consultation des logs de transactions',
      'Gestion des accès temporaires et visiteurs',
      'Signalement d\'incident et communication interne',
      'Tableau de bord de caisse et de recettes du poste',
    ],
  },
  {
    icon: Smartphone,
    title: 'Application Mobile',
    badge: 'Usagers finaux',
    badgeColor: 'bg-violet-100 text-violet-700',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    border: 'border-violet-100 hover:border-violet-300',
    description:
      'Application grand public disponible sur iOS et Android. Elle donne à chaque usager une maîtrise totale de ses accès et paiements.',
    features: [
      'Consultation du solde carte prépayée en temps réel',
      'Rechargement de carte par mobile money ou carte bancaire',
      'Gestion et renouvellement des abonnements',
      'Historique complet des passages avec horodatage',
      'Notifications de solde bas et fin d\'abonnement',
      'Déclaration d\'incidents et assistance en ligne',
    ],
  },
]

const modes = [
  {
    icon: CreditCard,
    title: 'Passage par Carte Prépayée',
    subtitle: 'Badgeage RFID / NFC',
    color: 'from-sky-500 to-sky-700',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-700',
    num: 'bg-sky-100 text-sky-700',
    description:
      'L\'usager se procure une carte RFID/NFC et la crédite du montant souhaité via l\'application mobile ou un point de rechargement. À chaque passage, il approche sa carte du lecteur. Si le solde est suffisant, la barrière s\'ouvre en moins de 5 secondes. Aucun personnel n\'intervient.',
    steps: [
      { label: 'Obtention & rechargement', detail: 'Carte disponible en point de vente ou via l\'app. Rechargement mobile money ou carte bancaire.' },
      { label: 'Approche du poste', detail: 'L\'usager arrive à la barrière et présente sa carte au lecteur RFID/NFC.' },
      { label: 'Vérification instantanée', detail: 'Le système vérifie le solde en temps réel.' },
      { label: 'Passage automatique', detail: 'Si solde suffisant, barrière ouverte < 5s. Déduction automatique du montant.' },
    ],
  },
  {
    icon: Tag,
    title: 'Passage par Abonnement',
    subtitle: 'Tag véhicule à reconnaissance automatique',
    color: 'from-primary to-secondary',
    bg: 'bg-primary/5',
    border: 'border-primary/20',
    text: 'text-primary',
    num: 'bg-primary/10 text-primary',
    description:
      'Un tag électronique est apposé sur le pare-brise ou intégré dans la plaque d\'immatriculation du véhicule. Le lecteur de poste identifie le tag à distance, vérifie l\'état de l\'abonnement en temps réel et commande l\'ouverture de la barrière sans aucune intervention de l\'usager.',
    steps: [
      { label: 'Souscription à l\'abonnement', detail: 'L\'usager choisit son formule (mensuel, trimestriel, annuel) et un tag est associé à son véhicule.' },
      { label: 'Pose du tag véhicule', detail: 'Le tag est installé sur le pare-brise ou la plaque du véhicule lors de la souscription.' },
      { label: 'Reconnaissance à l\'approche', detail: 'Le lecteur identifie automatiquement le tag à l\'approche du véhicule.' },
      { label: 'Vérification abonnement', detail: 'Si l\'abonnement est actif, la barrière s\'ouvre automatiquement — sans ralentir.' },
    ],
  },
  {
  title: "Paiement Physique Sécurisé",
  subtitle: "Mode manuel assisté avec traçabilité complète",
  description:
    "Mode de passage classique permettant le paiement en espèces ou par terminal bancaire, avec enregistrement automatique pour garantir la traçabilité et la sécurité des transactions.",
  icon: Wallet,
  color: "from-gray-700 to-gray-900",
  border: "border-gray-300",
  bg: "bg-white",
  num: "bg-gray-900 text-white",

  steps: [
    {
      label: "Arrivée au poste",
      detail:
        "Le véhicule se présente à la cabine équipée d’un agent ou d’un terminal hybride.",
    },
    {
      label: "Paiement physique",
      detail:
        "Le conducteur effectue le règlement en espèces ou via terminal de paiement.",
    },
    {
      label: "Validation système",
      detail:
        "Le système enregistre la transaction et autorise automatiquement le passage.",
    },
    {
      label: "Reçu sécurisé",
      detail:
        "Un reçu papier ou électronique est généré pour assurer la traçabilité.",
    },
  ],
}
]

const benefits = [
  { icon: Zap, title: 'Fluidité maximale', desc: 'Moins de 5 secondes de temps de passage. Fini les files d\'attente aux barrières.', value: '< 5s', unit: 'par passage' },
  { icon: Shield, title: 'Zéro fraude', desc: 'Les transactions 100 % automatisées et tracées éliminent toute possibilité de fraude humaine.', value: '0', unit: 'fraude possible' },
  { icon: Users, title: 'Moins de personnel', desc: 'Les cabines fonctionnent sans agent permanent. Personnel réduit à la supervision et à la maintenance.', value: '−70%', unit: 'coûts de personnel' },
  { icon: BarChart3, title: 'Pilotage en temps réel', desc: 'La direction dispose d\'une vue instantanée sur les recettes, les flux et les incidents.', value: '24/7', unit: 'visibilité temps réel' },
]

/* ─── Component ─────────────────────────────────────────────────── */

export default async function RealisationDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const isTCS = project.slug === 'toll-control-system'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: project.title,
    description: project.context,
    brand: { '@type': 'Brand', name: 'NOISIM' },
    manufacturer: { '@type': 'Organization', name: 'NOISIM', url: 'https://noisim.com' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-0 bg-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }}
          aria-hidden
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[130px] pointer-events-none -translate-y-1/3 translate-x-1/3" aria-hidden />

        <div className="container-custom relative z-10">
          <AnimatedSection>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/realisations" className="hover:text-primary transition-colors flex items-center gap-1.5">
                <ArrowLeft className="w-4 h-4" /> Réalisations
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-gray-300">{project.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-end pb-0">
              {/* Left */}
              <div className="pb-16">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-primary/20 border border-primary/30 text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {project.sector}
                  </span>
                  <span className="bg-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full">
                    Produit propriétaire
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight mb-3">
                  Toll Control System
                </h1>
                <p className="text-primary font-black text-2xl tracking-[0.15em] mb-6">TCS</p>
                <p className="text-gray-300 text-lg leading-relaxed max-w-lg mb-8">
                  La plateforme intégrée NOISIM pour moderniser la gestion des péages — de la supervision stratégique au passage automatique des usagers.
                </p>

                {/* App badges */}
                <div className="flex flex-wrap gap-3">
                  {apps.map((app) => (
                    <div key={app.title} className="flex items-center gap-2 bg-white/[0.07] border border-white/12 rounded-xl px-3 py-2">
                      <app.icon className="w-4 h-4 text-primary" />
                      <span className="text-white text-xs font-medium">{app.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — hero visual */}
              <div className="hidden lg:flex items-center justify-center pb-0">
                <div className="relative w-full max-w-sm">
                  {/* Central logo */}
                  <div className="w-40 h-40 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full border border-primary/30 flex items-center justify-center mx-auto shadow-[0_0_60px_rgba(0,184,196,0.2)] mb-0">
                    <div className="text-center">
                      <p className="text-white font-black text-3xl leading-none">TCS</p>
                      <p className="text-primary text-[10px] font-bold tracking-[0.2em] mt-1">NOISIM</p>
                    </div>
                  </div>
                  {/* Orbiting app icons */}
                  {apps.map((app, i) => {
                    const angles = [-60, 60, 180]
                    const angle = angles[i] * (Math.PI / 180)
                    const r = 110
                    const x = 50 + (r / 1.6) * Math.cos(angle)
                    const y = 50 + (r / 2.2) * Math.sin(angle)
                    return (
                      <div
                        key={app.title}
                        className="absolute w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center"
                        style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
                      >
                        <app.icon className="w-6 h-6 text-primary" />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom gradient fade */}
        <div className="h-16 bg-gradient-to-b from-transparent to-surface" />
      </section>

      {/* ── PROBLEM / SOLUTION ────────────────────────────────── */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-[0.15em]">Problématique</p>
                  <h2 className="text-2xl font-bold text-secondary leading-tight">Le constat sur le terrain</h2>
                </div>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="text-gray-700 leading-relaxed">{project.problem}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Solution NOISIM</p>
                  <h2 className="text-2xl font-bold text-secondary leading-tight">Notre réponse technologique</h2>
                </div>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="text-gray-700 leading-relaxed">{project.solution}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 3 APPLICATIONS ────────────────────────────────────── */}
      {isTCS && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Architecture applicative</span>
                <span className="w-8 h-0.5 bg-primary" />
              </div>
              <h2 className="text-4xl font-black text-secondary leading-tight mb-4">
                Trois applications, un écosystème unifié
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                Chaque acteur du péage dispose d&apos;un outil taillé pour ses besoins — connectés en temps réel sur une infrastructure partagée.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
              {apps.map((app, i) => (
                <AnimatedSection key={app.title} delay={i * 100}>
                  <div className={`bg-surface border-2 rounded-3xl p-7 h-full flex flex-col hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${app.border}`}>

                    {/* Icon + badge */}
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-14 h-14 ${app.iconBg} rounded-2xl flex items-center justify-center`}>
                        <app.icon className={`w-7 h-7 ${app.iconColor}`} />
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${app.badgeColor}`}>
                        {app.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-secondary mb-4">{app.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{app.description}</p>

                    {/* Features */}
                    <ul className="space-y-2.5">
                      {app.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${app.iconColor}`} />
                          <span className="text-gray-700 text-xs leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PASSAGE MODES ─────────────────────────────────────── */}
{isTCS && (
  <section className="section-padding bg-surface">
    <div className="container-custom">
      <AnimatedSection className="text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-primary" />
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
            Modes de passage
          </span>
          <span className="w-8 h-0.5 bg-primary" />
        </div>

        <h2 className="text-4xl font-black text-secondary leading-tight mb-4">
          Trois modes, zéro rupture de service
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
          Le TCS combine automatisation et accessibilité pour garantir un passage fluide, sécurisé et continu dans toutes les conditions.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {modes.map((mode, i) => (
          <AnimatedSection key={mode.title} delay={i * 120}>
            <div className={`border-2 rounded-3xl overflow-hidden h-full ${mode.border}`}>

              {/* Header */}
              <div className={`bg-gradient-to-r ${mode.color} p-6 flex items-center gap-4`}>
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center">
                  <mode.icon className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-black text-white leading-tight">
                    {mode.title}
                  </h3>
                  <p className="text-white/70 text-xs font-medium mt-0.5">
                    {mode.subtitle}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className={`p-7 ${mode.bg}`}>
                <p className="text-gray-700 text-sm leading-relaxed mb-7">
                  {mode.description}
                </p>

                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Étapes du passage
                </p>

                <div className="space-y-4">
                  {mode.steps.map((step, j) => (
                    <div key={step.label} className="flex items-start gap-4">
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5 ${mode.num}`}
                      >
                        {j + 1}
                      </span>

                      <div>
                        <p className="font-semibold text-secondary text-sm">
                          {step.label}
                        </p>
                        <p className="text-gray-500 text-xs leading-relaxed mt-0.5">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
)}

      {/* ── BENEFITS ──────────────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-secondary to-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none" aria-hidden />

        <div className="container-custom relative z-10">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Bénéfices</span>
            </div>
            <h2 className="text-4xl font-black text-white leading-tight max-w-xl">
              Ce que le TCS change concrètement
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 80}>
                <div className="bg-white/[0.06] border border-white/8 rounded-2xl p-6 hover:bg-white/[0.09] hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-5">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-black text-primary mb-1">{b.value}</div>
                  <div className="text-xs text-gray-400 mb-3">{b.unit}</div>
                  <h3 className="font-bold text-white text-sm mb-2">{b.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Results list */}
          <AnimatedSection delay={400}>
            <div className="bg-white/[0.05] border border-white/8 rounded-2xl p-7">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Résultats obtenus</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.results.map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-gray-200 text-sm leading-relaxed">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <AnimatedSection className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Stack technologique</span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl font-black text-secondary leading-tight">
              Technologies utilisées
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 bg-surface border border-gray-200 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-xl hover:border-primary/30 hover:text-primary transition-all duration-200"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA SIMILAIRE ─────────────────────────────────────── */}
      <section className="py-16 bg-surface border-t border-gray-100">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-black text-secondary mb-4">
              Vous gérez un poste de péage ou une infrastructure similaire ?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Le TCS est déployable en quelques semaines sur tout type de site. Nos équipes
              réalisent un audit gratuit et vous proposent une configuration adaptée à votre contexte.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Demander une démonstration
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services/mobilite-infrastructures-urbaines" className="btn-secondary">
                Voir le service Mobilité
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  )
}
