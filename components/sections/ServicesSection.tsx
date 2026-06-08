import Link from 'next/link'
import {
  Car,
  Zap,
  Cpu,
  Shield,
  MonitorSmartphone,
  Heart,
  ArrowRight,
} from 'lucide-react'

import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { services } from '@/data/services'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  Zap,
  Cpu,
  Shield,
  MonitorSmartphone,
  Heart,
}

export function ServicesSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <SectionHeader
          tag="Nos Domaines d’Expertise"
          title="Des solutions technologiques pour vos infrastructures et votre performance"
          description="De la mobilité intelligente à l'automatisation industrielle, en passant par l'énergie, la sécurité électronique, les solutions numériques et les technologies biomédicales, NOISIM accompagne vos projets de bout en bout."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Car

            return (
              <AnimatedSection key={service.id} delay={i * 80}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group card flex flex-col h-full hover:-translate-y-1"
                >
                  {/* Icône */}
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Titre */}
                  <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                    {service.shortDescription}
                  </p>

                  {/* Avantages */}
                  <ul className="space-y-1.5 mb-5">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-xs text-gray-500"
                      >
                        <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection delay={500} className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            Voir tous nos services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}