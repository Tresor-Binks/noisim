import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

export const metadata: Metadata = {
  title: 'Mentions Légales | NOISIM',
  description: 'Mentions légales du site NOISIM — éditeur, hébergeur, propriété intellectuelle et responsabilité.',
  robots: { index: false, follow: false },
}

const sections = [
  {
    title: '1. Éditeur du site',
    content: [
      'Le site **noisim.com** est édité par la société **NOISIM**, entreprise spécialisée dans l\'ingénierie des systèmes automatisés et l\'intégration de solutions technologiques avancées.',
      '**Dénomination sociale :** NOISIM',
      '**Siège social :** Avenue Alfred Raoul, Immeuble la loya, Pointe-Noire, Congo',
      '**Téléphone :** +242 06 761 21 21',
      '**Email :** contact@noisim.com',
      '**Directeur de la publication :** Melchisedek Nganga, Fondateur & Directeur Général',
    ],
  },
  {
    title: '2. Hébergeur',
    content: [
      'Le site est hébergé par :',
      '**Honstinger.**',
      'Hostinger operations, UABŠvitrigailos str. 34,Vilnius 03230, Lituanie',
      'Site web : hostinger.com',
    ],
  },
  {
    title: '3. Propriété intellectuelle',
    content: [
      'L\'ensemble des contenus présents sur le site noisim.com (textes, images, graphismes, logos, icônes, sons, logiciels, etc.) sont la propriété exclusive de NOISIM ou de ses partenaires, et sont protégés par les lois congolaises et internationales relatives à la propriété intellectuelle.',
      'Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit, est interdite sans l\'autorisation préalable et écrite de NOISIM.',
      'Toute exploitation non autorisée du site ou de l\'un des éléments qu\'il contient sera considérée comme constitutive d\'une contrefaçon et poursuivie conformément aux dispositions des textes en vigueur.',
    ],
  },
  {
    title: '4. Liens hypertextes',
    content: [
      '**Liens sortants :** NOISIM ne peut être tenu responsable du contenu des sites tiers vers lesquels des liens hypertextes sont établis depuis noisim.com. Ces liens sont fournis à titre informatif uniquement.',
      '**Liens entrants :** Tout site souhaitant établir un lien vers noisim.com doit en demander l\'autorisation préalable par email à contact@noisim.com. NOISIM se réserve le droit de refuser cette autorisation sans avoir à en justifier les raisons.',
    ],
  },
  {
    title: '5. Responsabilité',
    content: [
      'NOISIM s\'efforce d\'assurer l\'exactitude et la mise à jour des informations diffusées sur le site. Toutefois, NOISIM ne peut garantir l\'exactitude, la précision ou l\'exhaustivité des informations mises à disposition.',
      'NOISIM décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site, ainsi que pour tous dommages résultant d\'une intrusion frauduleuse d\'un tiers ayant entraîné une modification des informations mises à disposition.',
      'NOISIM se réserve le droit de modifier, corriger et mettre à jour le contenu du site à tout moment et sans préavis.',
    ],
  },
  {
    title: '6. Droit applicable',
    content: [
      'Le présent site et ses mentions légales sont soumis au droit congolais. En cas de litige, les tribunaux compétents de Pointe-Noire (République du Congo) seront seuls habilités à en connaître.',
    ],
  },
  {
    title: '7. Contact',
    content: [
      'Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :',
      '**Par email :** contact@noisim.com',
      '**Par courrier :** NOISIM — Avenue Charles de Gaulle, Pointe-Noire, République du Congo',
    ],
  },
]

export default function MentionsLegalesPage() {
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
                Informations légales
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Mentions légales
            </h1>
            <p className="text-gray-400 text-sm">
              Dernière mise à jour : janvier 2025
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-surface">
        <div className="container-custom max-w-3xl">
          <div className="space-y-10">
            {sections.map((sec, i) => (
              <AnimatedSection key={sec.title} delay={i * 60}>
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

          {/* Back link */}
          <AnimatedSection delay={400} className="mt-10 text-center">
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