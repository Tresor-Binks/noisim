import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionHeader } from '@/components/shared/SectionHeader'

const milestones = [
  {
    year: '2015',
    quarter: 'Fondation',
    title: 'La naissance de NOISIM',
    description:
      'Créée à Pointe-Noire par deux ingénieurs industriels, NOISIM démarre avec une conviction : les industries africaines méritent un accès aux mêmes technologies que les leaders mondiaux.',
    highlight: 'Premier bureau, 3 collaborateurs',
    side: 'left',
  },
  {
    year: '2017',
    quarter: 'Croissance',
    title: 'Premier projet majeur d\u2019automatisation',
    description:
      'Automatisation complète d\u2019une ligne de production cimentière. Résultats : +22 points de disponibilité, -18% de consommation énergétique. Le modèle NOISIM est validé.',
    highlight: 'ROI client atteint en 22 mois',
    side: 'right',
  },
  {
    year: '2019',
    quarter: 'Expansion',
    title: 'Rayonnement régional',
    description:
      'Ouverture du bureau de Brazzaville. Premiers contrats au Gabon et en RDC. L\u2019équipe passe à 15 experts. NOISIM s\u2019impose comme acteur régional de référence.',
    highlight: '5 pays d\u2019Afrique centrale',
    side: 'left',
  },
  {
    year: '2021',
    quarter: 'Diversification',
    title: 'Lancement de la division IA & Data',
    description:
      'Constitution d\u2019une équipe dédiée à l\u2019intelligence artificielle appliquée. Première solution de maintenance prédictive déployée dans le secteur pétrolier. -78% d\u2019arrêts non planifiés.',
    highlight: '8 data scientists & ML engineers',
    side: 'right',
  },
  {
    year: '2023',
    quarter: 'Maturité',
    title: 'Le cap des 50 projets',
    description:
      'plusieurs projets réalisés avec un taux de satisfaction client de 100%. NOISIM est désormais partenaire technologique de 4 des 10 plus grands groupes industriels d\u2019Afrique centrale.',
    highlight: '99% satisfaction · 0 litige',
    side: 'left',
  },
  {
    year: '2024',
    quarter: 'Reconnaissance',
    title: 'Partenaire certifié Siemens',
    description:
      'NOISIM obtient la certification Siemens Solution Partner pour l\u2019automatisation industrielle — une reconnaissance internationale de la qualité et de l\u2019expertise de nos équipes.',
    highlight: 'Certification internationale',
    side: 'right',
  },
]

export function AboutTimeline() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">

        <SectionHeader
          tag="Notre Histoire"
          title="3 ans d'expertise, une trajectoire"
          description="De trois ingénieurs passionnés à plus de 30 experts, retracez les étapes clés qui ont façonné NOISIM."
          className="mb-20"
        />

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent -translate-x-1/2 hidden lg:block" aria-hidden />

          <div className="space-y-0">
            {milestones.map((m, i) => {
              const isLeft = m.side === 'left'
              return (
                <AnimatedSection key={m.year} delay={i * 80}>
                  <div className={`relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 items-center ${i < milestones.length - 1 ? 'pb-12' : ''}`}>

                    {/* Left content */}
                    <div className={`lg:pr-10 ${!isLeft ? 'lg:order-3' : ''}`}>
                      {isLeft ? (
                        <TimelineCard milestone={m} align="right" />
                      ) : (
                        <div className="hidden lg:block" />
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="hidden lg:flex flex-col items-center">
                      <div className="relative z-10 w-14 h-14 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-sm hover:shadow-[0_0_0_6px_rgba(0,184,196,0.12)] transition-shadow duration-300">
                        <span className="text-primary font-black text-xs leading-none text-center">{m.year}</span>
                      </div>
                    </div>

                    {/* Right content */}
                    <div className={`lg:pl-10 ${!isLeft ? '' : 'lg:order-3'}`}>
                      {!isLeft ? (
                        <TimelineCard milestone={m} align="left" />
                      ) : (
                        <div className="hidden lg:block" />
                      )}
                    </div>

                    {/* Mobile card (always visible, stacked) */}
                    <div className="lg:hidden mt-4">
                      <TimelineCard milestone={m} align="left" mobile />
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({
  milestone,
  align,
  mobile = false,
}: {
  milestone: (typeof milestones)[0]
  align: 'left' | 'right'
  mobile?: boolean
}) {
  return (
    <div
      className={`group bg-surface border border-gray-100 rounded-2xl p-6 hover:border-primary/25 hover:shadow-card-hover transition-all duration-300 ${mobile ? '' : align === 'right' ? 'text-right' : 'text-left'}`}
    >
      {/* Year badge — mobile only */}
      {mobile && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-black text-[10px]">
            {milestone.year.slice(2)}
          </span>
          <span className="text-primary text-xs font-bold uppercase tracking-widest">{milestone.quarter}</span>
        </div>
      )}

      {/* Quarter tag — desktop */}
      {!mobile && (
        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] block mb-1">
          {milestone.quarter}
        </span>
      )}

      <h3 className="font-bold text-secondary text-lg mb-2 group-hover:text-primary transition-colors duration-200">
        {milestone.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{milestone.description}</p>

      <span className="inline-flex items-center gap-1.5 bg-primary/8 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
        {milestone.highlight}
      </span>
    </div>
  )
}