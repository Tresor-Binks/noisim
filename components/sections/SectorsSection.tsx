import Link from 'next/link'
import { Factory, Droplets, Car, Heart, Building2, Landmark, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const sectors = [
  { title: 'Industries & Production',         icon: Factory,   desc: 'Usines et sites industriels' },
  { title: 'Pétrole, Gaz & Énergie',         icon: Droplets,  desc: 'Sites pétroliers et gaziers' },
  { title: 'Infrastructures & Transport',     icon: Car,       desc: 'Péage, pesage et mobilité' },
  { title: 'Santé & Biomédical',             icon: Heart,     desc: 'Hôpitaux et équipements médicaux' },
  { title: 'Bâtiment & Tertiaire',           icon: Building2, desc: 'Complexes et bureaux' },
  { title: 'Institutions & Administrations', icon: Landmark,  desc: 'Organismes publics et État' },
]

export function SectorsSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <SectionHeader
          tag="Secteurs d'activité"
          title="Une expertise multi-sectorielle"
          description="NOISIM intervient dans les secteurs les plus exigeants avec des solutions adaptées aux spécificités de chaque industrie."
          className="mb-14"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sectors.map((sector, i) => (
            <AnimatedSection key={sector.title} delay={i * 80}>
              <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary/8 rounded-xl flex items-center justify-center mb-4">
                  <sector.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-secondary text-sm mb-1">{sector.title}</h3>
                <p className="text-gray-500 text-xs">{sector.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500} className="text-center mt-10">
          <Link href="/secteurs" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
            Explorer tous les secteurs <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}