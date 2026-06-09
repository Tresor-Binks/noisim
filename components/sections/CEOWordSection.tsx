import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { Quote } from 'lucide-react'

const paragraphs = [
  'L\'Afrique est entrée dans une phase décisive de son histoire. Un tournant où les défis se font plus complexes, mais où les opportunités, elles aussi, se multiplient.',
  'C\'est une époque où l\'aspiration à l\'indépendance ne peut plus se limiter au domaine politique. Aujourd\'hui, l\'indépendance africaine doit s\'exprimer sur les plans technologique, économique, stratégique. Et c\'est là que se situe le véritable enjeu.',
  'Chez NOISIM, nous sommes intimement convaincus que la technologie est au cœur de cette nouvelle souveraineté. Elle est le levier qui permettra à nos États, à nos institutions et à nos entreprises d\'exister pleinement — de produire, de protéger, d\'innover par eux-mêmes.',
  'Notre mission est simple, mais profonde : concevoir des solutions technologiques de pointe, conçues ici, pensées ici, adaptées à nos réalités, et capables de rivaliser avec les standards internationaux. L\'heure n\'est plus à la dépendance technologique. L\'heure est à la maîtrise, à la création, à la valorisation du génie africain.',
]

const closingStatement = 'C\'est ce combat que nous portons avec passion. Et c\'est dans cette perspective que NOISIM s\'engage : accompagner l\'Afrique vers sa pleine autonomie technologique, pour que son développement ne dépende plus de modèles importés, mais de solutions enracinées, durables et souveraines.'

export function CEOWordSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left : portrait card ───────────────────────── */}
          <AnimatedSection direction="left">
            <div className="relative">

              {/* Background decorative block */}
              <div
                className="absolute -top-6 -left-6 w-48 h-48 bg-primary/6 rounded-3xl"
                aria-hidden
              />
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/6 rounded-2xl"
                aria-hidden
              />

              {/* Main card */}
              <div className="relative z-10 bg-gradient-to-br from-secondary to-dark rounded-3xl overflow-hidden">

                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                  aria-hidden
                />

                {/* Glow */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 bg-primary/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
                  aria-hidden
                />

                <div className="relative z-10 p-8 pb-0">
                  {/* Avatar initials */}
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-white font-black text-3xl">MN</span>
                  </div>

                  <h3 className="text-white font-black text-2xl leading-tight mb-1">
                    Melchisedek Nganga
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-1">
                    Fondateur & Directeur Général
                  </p>
                  <p className="text-gray-400 text-xs mb-8">NOISIM</p>

                  {/* Quote highlight */}
                  <div className="border-t border-white/10 pt-6 pb-8">
                    <Quote className="w-8 h-8 text-primary/40 mb-3" />
                    <p className="text-gray-300 text-sm leading-relaxed italic">
                      &ldquo;L&rsquo;heure n&rsquo;est plus à la dépendance technologique.
                      L&rsquo;heure est à la maîtrise, à la création,
                      à la valorisation du génie africain.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right : full message ───────────────────────── */}
          <AnimatedSection direction="right">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                Le mot du Directeur Général
              </span>
            </div>

            <h2 className="text-4xl font-black text-secondary leading-tight mb-8">
              Une vision ancrée dans{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                la souveraineté africaine
              </span>
            </h2>

            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-sm ${
                    i === 0
                      ? 'text-secondary font-semibold text-base'
                      : 'text-gray-600'
                  }`}
                >
                  {p}
                </p>
              ))}

              {/* Closing statement — highlighted */}
              <div className="border-l-4 border-primary pl-5 py-1 mt-6">
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  {closingStatement}
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shrink-0">
                <span className="text-white font-black text-sm">MN</span>
              </div>
              <div>
                <p className="font-bold text-secondary text-sm">Melchisedek Nganga</p>
                <p className="text-gray-400 text-xs">Fondateur & DG, NOISIM</p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}