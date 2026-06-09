import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { Shield, Eye, Lock, Trash2, Mail, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | NOISIM',
  description: 'Politique de confidentialité de NOISIM — collecte, traitement et protection de vos données personnelles conformément au RGPD.',
  robots: { index: false, follow: false },
}

const highlights = [
  { icon: Shield,  title: 'Données protégées',     desc: 'Vos données ne sont jamais vendues ni cédées à des tiers.' },
  { icon: Eye,     title: 'Transparence totale',    desc: 'Vous savez exactement quelles données nous collectons et pourquoi.' },
  { icon: Lock,    title: 'Sécurité renforcée',     desc: 'Accès limité aux seuls collaborateurs habilités de NOISIM.' },
  { icon: Trash2,  title: 'Droit à l\'effacement',  desc: 'Vous pouvez demander la suppression de vos données à tout moment.' },
]

const sections = [
  {
    title: '1. Identité du responsable de traitement',
    content: [
      'Le responsable du traitement des données personnelles collectées sur le site noisim.com est :',
      '**NOISIM** — Avenue Charles de Gaulle, Pointe-Noire, République du Congo',
      '**Email :** contact@noisim.com | **Tél. :** +242 06 123 45 67',
      '**Directeur Général :** Melchisedek Nganga',
    ],
  },
  {
    title: '2. Données collectées',
    content: [
      'NOISIM collecte uniquement les données strictement nécessaires aux finalités décrites ci-après. Ces données sont collectées dans les cas suivants :',
      '**Formulaire de contact :** nom, prénom, email, téléphone (optionnel), entreprise (optionnel), sujet et message.',
      '**Formulaire de candidature :** nom, prénom, email, téléphone, poste visé, CV et lettre de motivation.',
      '**Navigation sur le site :** données de connexion (adresse IP, navigateur, pages visitées) via des outils d\'analyse d\'audience anonymisés.',
      'Aucune donnée sensible (santé, opinions politiques, religion, etc.) n\'est collectée via ces formulaires.',
    ],
  },
  {
    title: '3. Finalités du traitement',
    content: [
      'Les données collectées sont traitées pour les finalités suivantes :',
      '**Traitement des demandes de contact :** répondre à vos questions, établir des devis et assurer le suivi commercial.',
      '**Gestion des candidatures :** évaluer les candidatures reçues et contacter les candidats.',
      '**Amélioration du site :** analyser les statistiques de navigation pour améliorer l\'expérience utilisateur.',
      '**Obligations légales :** respecter les obligations légales et réglementaires applicables.',
    ],
  },
  {
    title: '4. Base légale des traitements',
    content: [
      '**Consentement :** pour l\'envoi de communications marketing (si applicable).',
      '**Intérêt légitime :** pour la gestion des demandes de contact et l\'amélioration du site.',
      '**Exécution d\'un contrat :** pour le traitement des missions et prestations commandées.',
      '**Obligation légale :** pour les traitements imposés par la loi (conservation des factures, etc.).',
    ],
  },
  {
    title: '5. Durée de conservation',
    content: [
      '**Données de contact :** conservées 3 ans à compter du dernier contact, sauf demande de suppression anticipée.',
      '**Données de candidature :** conservées 2 ans après la dernière interaction, sauf opposition.',
      '**Données de navigation :** conservées 13 mois maximum (données anonymisées après 25 mois).',
      '**Données contractuelles :** conservées 10 ans conformément aux obligations légales comptables.',
    ],
  },
  {
    title: '6. Destinataires des données',
    content: [
      'Vos données personnelles sont destinées aux équipes internes habilitées de NOISIM (commercial, technique, RH selon les cas).',
      'Elles peuvent être transmises à des sous-traitants techniques strictement mandatés pour l\'hébergement du site (Vercel Inc.) et l\'envoi d\'emails transactionnels, dans le cadre de contrats garantissant un niveau de protection équivalent.',
      '**Vos données ne sont jamais vendues, louées ou cédées à des tiers à des fins commerciales.**',
    ],
  },
  {
    title: '7. Vos droits',
    content: [
      'Conformément aux réglementations applicables sur la protection des données, vous disposez des droits suivants :',
      '**Droit d\'accès :** obtenir une copie des données personnelles vous concernant.',
      '**Droit de rectification :** faire corriger des données inexactes ou incomplètes.',
      '**Droit à l\'effacement :** demander la suppression de vos données (« droit à l\'oubli »).',
      '**Droit à la limitation :** demander la suspension du traitement de vos données.',
      '**Droit d\'opposition :** vous opposer au traitement de vos données pour des motifs légitimes.',
      '**Droit à la portabilité :** recevoir vos données dans un format structuré et lisible par machine.',
      'Pour exercer l\'un de ces droits, adressez votre demande par email à **contact@noisim.com** en indiquant votre nom, prénom et l\'objet précis de votre demande. Nous nous engageons à vous répondre dans un délai d\'un mois.',
    ],
  },
  {
    title: '8. Cookies et traceurs',
    content: [
      'Le site noisim.com utilise un nombre limité de cookies nécessaires à son bon fonctionnement :',
      '**Cookies techniques :** indispensables à la navigation (session, sécurité). Aucun consentement requis.',
      '**Cookies analytiques :** mesure anonymisée de l\'audience du site. Ces cookies ne collectent aucune donnée personnelle identifiable.',
      'Aucun cookie publicitaire ou de tracking commercial n\'est déposé sur ce site.',
      'Vous pouvez configurer votre navigateur pour refuser ou supprimer les cookies à tout moment.',
    ],
  },
  {
    title: '9. Sécurité des données',
    content: [
      'NOISIM met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction :',
      '**Chiffrement HTTPS** sur l\'ensemble du site.',
      '**Accès restreint** aux seuls collaborateurs habilités.',
      '**Hébergement sécurisé** chez Vercel avec infrastructure certifiée ISO 27001.',
      '**Politique de mot de passe** et authentification forte sur les outils internes.',
    ],
  },
  {
    title: '10. Modifications de la politique',
    content: [
      'NOISIM se réserve le droit de modifier la présente politique de confidentialité à tout moment, notamment pour se conformer à d\'éventuelles évolutions réglementaires.',
      'Toute modification substantielle sera signalée sur cette page avec la date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.',
      'La version en vigueur est celle affichée sur le site à la date de votre consultation.',
    ],
  },
  {
    title: '11. Contact & réclamations',
    content: [
      'Pour toute question relative à cette politique ou pour exercer vos droits, contactez-nous :',
      '**Email :** contact@noisim.com',
      '**Courrier :** NOISIM — À l\'attention du Responsable des données, Avenue Charles de Gaulle, Pointe-Noire, République du Congo',
      'Si vous estimez que vos droits ne sont pas respectés, vous avez la possibilité de saisir l\'autorité de protection des données compétente dans votre pays de résidence.',
    ],
  },
]

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 bg-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }}
          aria-hidden
        />
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                Protection des données
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-gray-400 text-sm">
              Dernière mise à jour : janvier 2025
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 70}>
                <div className="flex items-start gap-4 p-5 bg-surface rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <h.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm mb-1">{h.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="pt-14 pb-0 bg-surface">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 flex items-start gap-4">
              <Globe className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm leading-relaxed">
                Chez NOISIM, la protection de votre vie privée est une priorité. Cette politique
                décrit de manière transparente quelles données nous collectons, pourquoi nous les
                utilisons et comment nous les protégeons, conformément aux réglementations
                applicables en matière de protection des données personnelles.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-surface">
        <div className="container-custom max-w-3xl">
          <div className="space-y-6">
            {sections.map((sec, i) => (
              <AnimatedSection key={sec.title} delay={i * 50}>
                <div className="bg-white border border-gray-100 rounded-2xl p-7">
                  <h2 className="text-lg font-black text-secondary mb-5 pb-4 border-b border-gray-100">
                    {sec.title}
                  </h2>
                  <div className="space-y-3">
                    {sec.content.map((line, j) => (
                      <p
                        key={j}
                        className="text-gray-600 text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: line.replace(
                            /\*\*(.+?)\*\*/g,
                            '<strong class="text-secondary font-semibold">$1</strong>'
                          ),
                        }}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact block */}
          <AnimatedSection delay={600}>
            <div className="mt-10 bg-gradient-to-br from-secondary to-dark rounded-2xl p-7 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
                aria-hidden
              />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <p className="text-white font-bold mb-1">Une question sur vos données ?</p>
                  <p className="text-gray-400 text-sm">Notre équipe vous répond sous 48h ouvrées.</p>
                </div>
                <Link
                  href="mailto:contact@noisim.com"
                  className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-5 py-3 rounded-xl hover:bg-primary-600 transition-colors shrink-0"
                >
                  <Mail className="w-4 h-4" />
                  contact@noisim.com
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Back link */}
          <AnimatedSection delay={700} className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
            >
              ← Retour à l&apos;accueil
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}