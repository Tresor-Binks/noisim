import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          tag="Réalisations"
          title="Des projets qui parlent d'eux-mêmes"
          description="Découvrez comment NOISIM a transformé les opérations de ses clients à travers des projets à fort impact."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 120}>
              <Link
                href={`/realisations/${project.slug}`}
                className="group card overflow-hidden p-0 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.sector}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-gray-500 font-medium mb-2 uppercase tracking-wide">{project.client}</p>
                  <h3 className="font-bold text-secondary text-lg mb-3 leading-snug group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1 line-clamp-2">
                    {project.context}
                  </p>

                  {/* Key result */}
                  <div className="flex items-start gap-2 bg-green-50 border border-green-100 rounded-lg p-3 mb-4">
                    <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-green-700 font-medium">{project.results[0]}</p>
                  </div>

                  <div className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Voir l&apos;étude de cas
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400} className="text-center mt-12">
          <Link href="/realisations" className="btn-secondary">
            Voir toutes les réalisations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}