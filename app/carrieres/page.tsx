import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MapPin, Briefcase, Clock, ArrowRight, ChevronRight,
  Rocket, Users, BookOpen, TrendingUp,
  Server, GraduationCap, FileText,
} from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Carrières | Rejoindre NOISIM — Ingénieurs & Techniciens',
  description:
    'Rejoignez NOISIM et participez à la transformation industrielle de l\'Afrique. Découvrez nos offres d\'emploi pour ingénieurs, techniciens et développeurs.',
}

export interface JobOffer {
  id: number
  title: string
  department: string
  location: string
  type: string
  level: string
  description: string
  requirements: string[]
  benefits: string[]
  documents: { key: string; label: string }[]
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export const offers: JobOffer[] = [
  {
    id: 1,
    title: 'Technicien Systèmes & Réseaux',
    department: 'Infrastructure IT',
    location: 'Burkina Faso',
    type: 'CDD',
    level: 'Bac+3',
    description:
      'Dans le cadre du développement de nos activités, nous recherchons un Technicien Systèmes & Réseaux chargé de participer à l\'installation, la maintenance et l\'administration des infrastructures informatiques de nos clients et de l\'entreprise.',
    requirements: [
      'Bac+3 en Informatique, Réseaux ou Systèmes',
      'Bonne connaissance de Windows Server et des réseaux TCP/IP',
      'Maîtrise des outils bureautiques et des environnements Microsoft',
      'Capacité à diagnostiquer et résoudre les incidents techniques',
      'Rigueur, autonomie et sens du service',
    ],
    benefits: ['Contrat CDD', 'Formation continue', 'Projets innovants', 'Évolution professionnelle'],
    documents: [
      { key: 'cv',            label: 'CV à jour' },
      { key: 'lettre',        label: 'Lettre de motivation' },
      { key: 'diplome',       label: 'Diplôme Bac+3 (ou attestation)' },
      { key: 'piece_identite',label: 'Pièce d\'identité' },
    ],
    icon: Server,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    title: 'Technicien Systèmes & Réseaux (Stage)',
    department: 'Infrastructure IT',
    location: 'Burkina Faso',
    type: 'Stage',
    level: 'Débutant · Bac+3',
    description:
      'Nous recherchons un stagiaire Technicien Systèmes & Réseaux souhaitant développer ses compétences au sein d\'une équipe expérimentée. Le candidat participera aux opérations de support, de maintenance et de déploiement des solutions informatiques.',
    requirements: [
      'Bac+3 en Informatique, Réseaux ou domaine équivalent',
      'Jeune diplômé ou étudiant en fin de cycle',
      'Connaissances de base en réseaux et systèmes',
      'Motivation à apprendre et à évoluer rapidement',
      'Bon esprit d\'équipe et sens de l\'organisation',
    ],
    benefits: ['Stage encadré', 'Montée en compétences', 'Accompagnement technique', 'Possibilité d\'embauche'],
    documents: [
      { key: 'cv',              label: 'CV à jour' },
      { key: 'lettre',          label: 'Lettre de motivation' },
      { key: 'convention_stage',label: 'Convention de stage (établissement)' },
      { key: 'releve_notes',    label: 'Dernier relevé de notes' },
    ],
    icon: GraduationCap,
    color: 'bg-emerald-100 text-emerald-600',
  },
]

const values = [
  { icon: Rocket,     title: 'Impact réel',          desc: 'Vos projets transforment des infrastructures concrètes — routes, hôpitaux, industries.' },
  { icon: BookOpen,   title: 'Montée en compétence',  desc: 'Budget formation, certifications constructeurs, accompagnement par des seniors.' },
  { icon: Users,      title: 'Équipe soudée',         desc: 'Une culture de terrain, de partage et d\'entraide entre profils complémentaires.' },
  { icon: TrendingUp, title: 'Évolution rapide',      desc: 'Structure à taille humaine : vos performances sont vues et récompensées.' },
]

export default function CarrieresPage() {
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
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Carrières</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Construisez l&apos;industrie{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                africaine de demain
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Chez NOISIM, chaque ingénieur, technicien et développeur contribue directement
              à des projets qui transforment des infrastructures réelles.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            tag="Pourquoi NOISIM"
            title="Ce que vous y trouverez"
            description="Nous ne recrutons pas pour remplir des cases. Nous cherchons des personnes engagées qui veulent construire quelque chose de concret."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 80}>
                <div className="group card text-center hover:-translate-y-1">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <v.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-secondary text-lg mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFERS ────────────────────────────────────────────── */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            tag="Offres d'emploi"
            title={`${offers.length} poste${offers.length > 1 ? 's' : ''} ouvert${offers.length > 1 ? 's' : ''}`}
            description="Toutes nos offres sont basées en Afrique. Nous privilégions les profils locaux et la montée en compétence sur place."
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {offers.map((offer, i) => {
              const Icon = offer.icon
              /* URL vers /contact avec paramètres préremplis + docs requis */
              const params = new URLSearchParams({
                sujet: 'Recrutement / Candidature',
                poste: offer.title,
                docs: offer.documents.map((d) => d.key).join(','),
              })

              return (
                <AnimatedSection key={offer.id} delay={i * 70}>
                  <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">

                    {/* Header */}
                    <div className="p-6 pb-4 border-b border-gray-50">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${offer.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex gap-2 flex-wrap justify-end">
                          <span className="text-xs font-bold bg-secondary/8 text-secondary px-2.5 py-1 rounded-full">
                            {offer.type}
                          </span>
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${offer.color}`}>
                            {offer.level}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-secondary mb-1 group-hover:text-primary transition-colors duration-200">
                        {offer.title}
                      </h3>
                      <p className="text-primary text-xs font-semibold uppercase tracking-wide mb-3">
                        {offer.department}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />{offer.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                          <Briefcase className="w-3.5 h-3.5 text-gray-400" />{offer.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />{offer.level}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{offer.description}</p>

                      {/* Requirements */}
                      <div className="mb-5">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                          Profil recherché
                        </p>
                        <ul className="space-y-2">
                          {offer.requirements.map((req) => (
                            <li key={req} className="flex items-start gap-2 text-xs text-gray-600">
                              <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Documents requis */}
                      <div className="mb-5 bg-primary/4 border border-primary/15 rounded-xl p-4">
                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5" />
                          Documents à fournir
                        </p>
                        <ul className="space-y-1.5">
                          {offer.documents.map((doc) => (
                            <li key={doc.key} className="flex items-center gap-2 text-xs text-gray-600">
                              <span className="w-4 h-4 bg-primary/15 rounded-full flex items-center justify-center shrink-0">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                              </span>
                              {doc.label}{' '}
                              <span className="text-gray-400 font-medium">(PDF)</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="flex flex-wrap gap-2 mb-5 flex-1 content-start">
                        {offer.benefits.map((b) => (
                          <span key={b} className="text-[10px] font-semibold bg-primary/8 text-primary px-2.5 py-1 rounded-full">
                            {b}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link
                        href={`/contact?${params.toString()}`}
                        className="btn-primary w-full justify-center text-sm"
                      >
                        Postuler à cette offre
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SPONTANEOUS ───────────────────────────────────────── */}
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
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Candidature spontanée</span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-4xl font-black text-white mb-4">
              Votre profil ne figure pas dans les offres ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Nous sommes toujours à la recherche de talents motivés. Envoyez-nous votre CV
              et dites-nous en quoi vous pouvez contribuer à la mission de NOISIM.
            </p>
            <Link
              href={`/contact?sujet=Recrutement+%2F+Candidature&poste=Candidature+spontan%C3%A9e&docs=cv,lettre`}
              className="btn-white inline-flex text-base"
            >
              Envoyer une candidature spontanée
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  )
}