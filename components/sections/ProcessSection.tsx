import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const steps = [
  {
    number: '01',
    title: 'Analyse',
    description: 'Audit approfondi de vos processus, besoins et contraintes pour définir le meilleur plan d\'action.',
    color: 'from-primary/20 to-primary/5',
  },
  {
    number: '02',
    title: 'Conception',
    description: 'Élaboration de l\'architecture technique et de la solution sur mesure, validée avec vos équipes.',
    color: 'from-accent/20 to-accent/5',
  },
  {
    number: '03',
    title: 'Intégration',
    description: 'Déploiement progressif de la solution avec une intégration minimisant les impacts opérationnels.',
    color: 'from-primary/20 to-primary/5',
  },
  {
    number: '04',
    title: 'Déploiement',
    description: 'Mise en production officielle avec tests exhaustifs, formation et transfert de compétences.',
    color: 'from-accent/20 to-accent/5',
  },
  {
    number: '05',
    title: 'Support',
    description: 'Accompagnement continu, maintenance préventive et évolutions pour maximiser votre ROI.',
    color: 'from-primary/20 to-primary/5',
  },
]

export function ProcessSection() {
  return (
    <section className="section-padding bg-dark overflow-hidden">
      <div className="container-custom">
        <SectionHeader
          tag="Notre Méthode"
          title="Un processus éprouvé pour garantir le succès"
          description="Chaque projet NOISIM suit une méthodologie rigoureuse pour délivrer des résultats mesurables dans les délais impartis."
          light
          className="mb-16"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 100}>
                <div className="relative flex flex-col items-center text-center group">
                  {/* Number circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-dark border-2 border-primary/30 flex items-center justify-center mb-5 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,184,196,0.3)] transition-all duration-300">
                    <div className={`absolute inset-2 rounded-full bg-gradient-to-br ${step.color} opacity-60`} />
                    <span className="relative text-xl font-black text-primary">{step.number}</span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}