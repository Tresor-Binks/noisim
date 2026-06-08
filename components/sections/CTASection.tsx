import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-dark via-secondary to-dark overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <div className="section-tag justify-center text-accent mb-6">
            <span className="w-6 h-0.5 bg-accent" />
            Passons à l&apos;action
          </div>
          <h2 className="heading-lg text-white mb-6">
            Prêt à accélérer votre{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              transformation digitale ?
            </span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Nos experts analysent votre situation et vous proposent une feuille de route
            personnalisée. Premier échange gratuit et sans engagement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Parlons de votre projet
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+242061234567"
              className="btn-outline-white text-base px-8 py-4"
            >
              <Phone className="w-5 h-5" />
              +242 06 761 21 21
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}