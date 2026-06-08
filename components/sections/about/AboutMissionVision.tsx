import { Target, Eye } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const blocks = [
  {
    icon: Target,
    tag: 'Notre Mission',
    title: 'Accélérer la transformation industrielle de l\u2019Afrique',
    body: 'NOISIM a pour mission d\u2019accompagner les entreprises industrielles dans leur transformation numérique et leur montée en performance opérationnelle. Nous démocratisons l\u2019accès aux technologies de pointe en les rendant accessibles, pragmatiques et rentables — quelle que soit la taille de l\u2019organisation.',
    accent: 'from-primary to-primary/60',
  },
  {
    icon: Eye,
    tag: 'Notre Vision',
    title: 'Devenir le leader de l\u2019ingénierie digitale industrielle en Afrique',
    body: 'Nous aspirons à être le partenaire de confiance numéro un pour les industries africaines qui souhaitent atteindre l\u2019excellence opérationnelle. Chaque projet que nous menons contribue à bâtir une industrie locale plus compétitive, plus durable et plus souveraine technologiquement.',
    accent: 'from-accent to-accent/60',
  },
]

export function AboutMissionVision() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">

        {/* Section label */}
        <AnimatedSection className="flex items-center gap-3 mb-14">
          <span className="w-8 h-0.5 bg-primary" />
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Notre ADN</span>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {blocks.map((block, i) => {
            const Icon = block.icon
            return (
              <AnimatedSection key={block.tag} delay={i * 120} direction={i === 0 ? 'left' : 'right'}>
                <div className="group relative bg-surface rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-primary/20 hover:shadow-card-hover transition-all duration-400 h-full overflow-hidden">

                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl pointer-events-none" />

                  {/* Top line accent */}
                  <div className={`absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r ${block.accent} rounded-full`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Tag */}
                    <p className="text-primary text-xs font-bold uppercase tracking-[0.18em] mb-3">
                      {block.tag}
                    </p>

                    {/* Title */}
                    <h2 className="text-2xl lg:text-3xl font-bold text-secondary leading-snug mb-5">
                      {block.title}
                    </h2>

                    {/* Body */}
                    <p className="text-gray-600 leading-relaxed text-base">
                      {block.body}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Bottom manifesto strip */}
        <AnimatedSection delay={260} className="mt-14">
          <div className="bg-gradient-to-r from-secondary via-dark to-secondary rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden />
            <p className="relative z-10 text-white text-lg font-semibold text-center sm:text-left">
              &ldquo;Chaque ligne de code, chaque automate déployé, chaque donnée analysée — <span className="text-primary">au service de votre industrie.</span>&rdquo;
            </p>
            <div className="relative z-10 shrink-0 text-right">
              <p className="text-white font-bold text-sm">Équipe NOISIM</p>
              <p className="text-gray-400 text-xs">Fondateurs &amp; Direction</p>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}