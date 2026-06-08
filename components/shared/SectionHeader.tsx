import { cn } from '@/lib/utils'
import { AnimatedSection } from './AnimatedSection'

interface SectionHeaderProps {
  tag?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeader({ tag, title, description, centered = true, light = false, className }: SectionHeaderProps) {
  return (
    <AnimatedSection className={cn(centered && 'text-center', className)}>
      {tag && (
        <div className={cn(
          'section-tag',
          centered && 'justify-center',
          light ? 'text-accent' : 'text-primary'
        )}>
          <span className={cn('w-6 h-0.5', light ? 'bg-accent' : 'bg-primary')} />
          {tag}
        </div>
      )}
      <h2 className={cn(
        'heading-lg text-balance',
        light ? 'text-white' : 'text-secondary',
        description && 'mb-4'
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          'text-lg leading-relaxed',
          centered && 'max-w-2xl mx-auto',
          light ? 'text-gray-400' : 'text-gray-600'
        )}>
          {description}
        </p>
      )}
    </AnimatedSection>
  )
}