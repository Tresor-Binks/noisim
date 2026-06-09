import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionHeader } from '@/components/shared/SectionHeader'

const milestones = [
  {
    id: 'creation',
    year: '2023',
    quarter: 'Création',
    title: 'Naissance de NOISIM',
    description:
      "Création de NOISIM avec pour mission d'accompagner les organisations dans leurs besoins technologiques et industriels. Les premières activités sont centrées sur la fourniture, l'installation et la maintenance d'équipements médicaux.",
    highlight: 'Début des activités médicales',
    side: 'left',
  },

  {
    id: 'developpement',
    year: '',
    quarter: 'Développement',
    title: 'Consolidation de l’expertise technique',
    description:
      "NOISIM renforce ses compétences terrain à travers plusieurs interventions techniques, projets d'installation, maintenance spécialisée et accompagnement de structures publiques et privées.",
    highlight: 'Croissance du portefeuille clients',
    side: 'right',
  },

  {
    id: 'diversification',
    year: '2024',
    quarter: 'Diversification',
    title: 'Ouverture vers de nouveaux secteurs',
    description:
      "L'entreprise élargit progressivement son offre en intégrant les domaines de l'automatisation, des systèmes connectés, du numérique et des solutions technologiques à forte valeur ajoutée.",
    highlight: 'Nouveaux services technologiques',
    side: 'left',
  },

  {
    id: 'tcs',
    year: '2025',
    quarter: 'Innovation',
    title: 'Lancement du projet TCS',
    description:
      "Début du développement du Toll Control System (TCS), une solution complète destinée à moderniser la gestion des postes de péage grâce à l'automatisation, au paiement dématérialisé et au suivi en temps réel des opérations.",
    highlight: 'Première plateforme propriétaire',
    side: 'right',
  },

  {
    id: 'mobilite',
    year: '2026',
    quarter: 'Transformation',
    title: 'NOISIM devient un acteur de la mobilité intelligente',
    description:
      "Le projet TCS devient un axe stratégique majeur. La solution combine applications web, mobile et desktop, technologies RFID/NFC, gestion des abonnements et automatisation des passages aux péages.",
    highlight: 'Mobilité & Infrastructures routières',
    side: 'left',
  },

  {
    id: 'vision',
    year: '',
    quarter: 'Vision',
    title: 'Construire les infrastructures de demain',
    description:
      "NOISIM poursuit son développement en proposant des solutions innovantes dans la santé, l'industrie, l'automatisation et les infrastructures intelligentes afin d'accompagner la transformation numérique des organisations africaines.",
    highlight: 'Innovation durable',
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
          description="En seulement quelques années, NOISIM a su transformer son expertise technique en une offre de solutions innovantes au service de plusieurs secteurs stratégiques."
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
                <AnimatedSection key={`${m.year}-${i}`} delay={i * 80}>
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