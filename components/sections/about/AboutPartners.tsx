import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { Award } from 'lucide-react'

const partners = [
  { name: 'Siemens', category: 'Solution Partner', level: 'Certifié', color: 'text-[#009999]' },
  { name: 'Schneider Electric', category: 'Alliance Partner', level: 'Certifié', color: 'text-[#3DCD58]' },
  { name: 'Microsoft Azure', category: 'Cloud Partner', level: 'Silver', color: 'text-[#0078D4]' },
  { name: 'ABB', category: 'Intégrateur', level: 'Agréé', color: 'text-[#FF000F]' },
]

const certifications = [
  'NIU  : M25000000752584N',
  'RCCM : CG-PNR-01-2025-B12-00190',
]

export function AboutPartners() {
  return (
    <section className="section-padding bg-surface overflow-hidden">
      <div className="container-custom">

        <SectionHeader
          tag="Quelques partenaires"
          title="Un écosystème technologique d'excellence"
          description="NOISIM travaille dans les normes de la technologie industrielle mondial. Notre rigueur garanti la qualité et la conformité de chaque déploiement."
          className="mb-14"
        />

        {/* Partners grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {partners.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 60}>
              <div className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-primary/25 hover:shadow-card-hover transition-all duration-300 text-center h-full flex flex-col items-center justify-center gap-2">

                {/* Logo placeholder — styled text as stand-in */}
                <div className={`font-black text-base leading-tight ${p.color} group-hover:scale-105 transition-transform duration-200`}>
                  {p.name}
                </div>
                <div className="text-gray-400 text-xs">{p.category}</div>
                <span className="text-[10px] font-bold bg-primary/8 text-primary px-2 py-0.5 rounded-full">
                  {p.level}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

       
      </div>
    </section>
  )
}