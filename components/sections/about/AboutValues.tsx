import { Target, Heart, Lightbulb, Users, ShieldCheck, Rocket } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const values = [
  {
    icon: Target,
    title: 'Excellence Opérationnelle',
    description:
      'Nous visons l\u2019excellence dans chaque projet. Des processus rigoureux, une attention méticuleuse aux détails et une culture du résultat measurable.',
    metric: '99%',
    metricLabel: 'de satisfaction client',
    color: 'bg-blue-50 text-blue-600',
    border: 'group-hover:border-blue-200',
  },
  {
    icon: Heart,
    title: 'Engagement Client',
    description:
      'La réussite de nos clients est notre seule mesure du succès. Nous nous impliquons comme s\u2019il s\u2019agissait de notre propre entreprise.',
    metric: '100%',
    metricLabel: 'de projets livrés',
    color: 'bg-rose-50 text-rose-600',
    border: 'group-hover:border-rose-200',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Continue',
    description:
      'La technologie évolue vite. Nous investissons constamment en R&D et en formation pour rester à la pointe et vous offrir les meilleures solutions.',
    metric: '15%',
    metricLabel: 'du CA reinvesti en R&D',
    color: 'bg-amber-50 text-amber-600',
    border: 'group-hover:border-amber-200',
  },
  {
    icon: Users,
    title: 'Expertise Humaine',
    description:
      'Nos équipes combinent savoir-faire technique pointu et compréhension profonde des enjeux business pour concevoir des solutions vraiment adaptées.',
    metric: '30+',
    metricLabel: 'experts certifiés',
    color: 'bg-violet-50 text-violet-600',
    border: 'group-hover:border-violet-200',
  },
  {
    icon: ShieldCheck,
    title: 'Fiabilité & Intégrité',
    description:
      'Nous disons ce que nous faisons et faisons ce que nous disons. Chaque engagement pris est tenu, chaque délai respecté.',
    metric: '0',
    metricLabel: 'litiges client depuis 2015',
    color: 'bg-emerald-50 text-emerald-600',
    border: 'group-hover:border-emerald-200',
  },
  {
    icon: Rocket,
    title: 'Impact Durable',
    description:
      'Nous construisons des solutions qui durent. Transfert de compétences, documentation complète, support long terme — pour une autonomie totale.',
    metric: '18-36',
    metricLabel: 'mois de ROI moyen',
    color: 'bg-cyan-50 text-cyan-600',
    border: 'group-hover:border-cyan-200',
  },
]

export function AboutValues() {
  return (
    <section className="section-padding bg-surface overflow-hidden">
      <div className="container-custom">

        <SectionHeader
          tag="Nos Valeurs"
          title="Ce qui nous distingue, au fond"
          description="Six principes fondamentaux qui guident chacune de nos décisions, de la conception à la mise en production."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <AnimatedSection key={v.title} delay={i * 80}>
                <div className={`group bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${v.border} h-full flex flex-col`}>

                  {/* Icon + metric row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 ${v.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-secondary leading-none">{v.metric}</div>
                      <div className="text-gray-400 text-[10px] font-medium leading-tight max-w-[100px] text-right">
                        {v.metricLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-bold text-secondary text-lg mb-3 group-hover:text-primary transition-colors duration-200">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {v.description}
                  </p>

                  {/* Bottom accent bar */}
                  <div className={`mt-5 h-0.5 w-8 ${v.color.replace('text-', 'bg-').split(' ')[1]} group-hover:w-full transition-all duration-500 rounded-full`} />
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}