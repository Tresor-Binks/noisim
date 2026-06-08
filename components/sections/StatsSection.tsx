import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { stats } from '@/data/index'

export function StatsSection() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 100} className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-secondary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              <div className="mt-3 w-8 h-0.5 bg-primary mx-auto" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}