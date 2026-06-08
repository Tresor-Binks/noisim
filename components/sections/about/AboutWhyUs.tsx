import { Award, TrendingUp, Users, Clock, MapPin, Wrench } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const reasons = [
  {
    icon: Award,
    title: 'Expertise reconnue internationalement',
    description:
      'Certifiés par les plus grandes marques mondiales (Siemens, Schneider, ABB), nos ingénieurs sont formés et accrédités pour déployer les solutions les plus complexes.',
    stat: '8 certifications',
    statLabel: 'partenaires internationaux',
  },
  {
    icon: TrendingUp,
    title: 'ROI mesurable et garanti',
    description:
      'Chaque projet NOISIM est structuré autour d\u2019indicateurs de performance précis. Nos clients amortissent en moyenne leur investissement en 18 à 36 mois.',
    stat: '18-36 mois',
    statLabel: 'de retour sur investissement',
  },
  {
    icon: MapPin,
    title: 'Présence locale, vision globale',
    description:
      'Implantés en Afrique centrale, nous combinons la réactivité d\u2019un acteur local avec les standards et les technologies des meilleurs intégrateurs mondiaux.',
    stat: '5 pays',
    statLabel: 'd\u2019interventions actives',
  },
  {
    icon: Users,
    title: 'Équipe pluridisciplinaire',
    description:
      'Automatisation, IA, data, cybersécurité, logistique — une seule équipe couvre l\u2019ensemble du spectre technologique industriel pour une intégration sans friction.',
    stat: '30+',
    statLabel: 'experts multi-domaines',
  },
  {
    icon: Wrench,
    title: 'Approche sur mesure',
    description:
      'Pas de solution standard vendue à tous. Chaque client reçoit une analyse spécifique et une architecture pensée pour ses contraintes, ses données et ses objectifs.',
    stat: '100%',
    statLabel: 'de projets sur mesure',
  },
  {
    icon: Clock,
    title: 'Support continu 24/7',
    description:
      'Pour les systèmes critiques, NOISIM propose un contrat de support en astreinte. Une équipe d\u2019urgence disponible à tout moment pour garantir votre continuité opérationnelle.',
    stat: '< 2h',
    statLabel: 'de temps de réponse garanti',
  },
]

export function AboutWhyUs() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">

        <SectionHeader
          tag="Pourquoi NOISIM"
          title="Votre partenaire de confiance, pas juste un prestataire"
          description="Six raisons concrètes pour lesquelles les industriels nous choisissent — et restent avec nous sur le long terme."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <AnimatedSection key={r.title} delay={i * 80}>
                <div className="group relative bg-surface border border-gray-100 rounded-2xl p-7 hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col overflow-hidden">

                  {/* Number watermark */}
                  <span className="absolute top-4 right-5 text-6xl font-black text-gray-50 select-none group-hover:text-primary/5 transition-colors duration-300 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="font-bold text-secondary text-lg mb-3 group-hover:text-primary transition-colors duration-200 leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                      {r.description}
                    </p>

                    {/* Stat pill */}
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black text-secondary">{r.stat}</span>
                      <span className="text-gray-400 text-xs leading-tight">{r.statLabel}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

      </div>
    </section>
  )
}