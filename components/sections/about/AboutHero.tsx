'use client'

import Image from 'next/image'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { Activity } from 'react'

const stats = [
  { value: 3, suffix: '+', label: "Années\nd'expérience" },
  { value: 6, suffix: '+', label: "Secteurs \nd'Activité" },
  { value: 24, suffix: '/7', label: 'Support\nclientt' },
  { value: 100, suffix: '%', label: 'Satisfaction\nclient' },
]

export function AboutHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden bg-dark">
      
      {/* 1. Trame de fond (Grid overlay) */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* 2. Halos lumineux d'ambiance */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-24 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 3. Anneaux orbitaux décoratifs - Repoussés vers le centre (right-[15%]) */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 hidden xl:block pointer-events-none" aria-hidden>
        <div className="relative w-[360px] h-[360px]">
          <div className="absolute inset-0 rounded-full border border-primary/15 animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-[32px] rounded-full border border-primary/10 animate-[spin_22s_linear_infinite_reverse]" />
          <div className="absolute inset-[64px] rounded-full border border-accent/5 animate-[spin_16s_linear_infinite]" />
          
          {/* Point lumineux sur l'anneau extérieur */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_15px_5px_rgba(0,184,196,0.5)]" />
          
          {/* Badge Central - Intégration de l'image logo.png */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 flex items-center justify-center backdrop-blur-md transition-all duration-500 hover:border-primary/30 p-6">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Logo NOISIM" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Contenu Principal - Poussé au maximum vers la gauche (max-w-none + alignement marge) */}
      <div className="relative z-10 container-custom pt-40 pb-6 w-full">
        <div className="max-w-none xl:max-w-[55%] pb-16">
          
          {/* Surlignage (Eyebrow) */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <span className="w-6 h-[2px] bg-primary rounded-full" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.25em]">
              À propos de NOISIM
            </span>
          </div>

          {/* Titre Principal */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            L&rsquo;industrie de{' '}
            <span className="relative inline-block text-transparent bg-gradient-to-r from-primary via-primary to-accent bg-clip-text">
              demain
              <span
                className="absolute bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full opacity-60"
                aria-hidden
              />
            </span>
            <br />
            se construit <span className="text-white/40 font-extrabold">aujourd&rsquo;hui</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300/90 leading-relaxed max-w-xl font-light">
            Fondée au Congo par des ingénieurs passionnés, NOISIM est aujourd&rsquo;hui l&rsquo;acteur de référence 
            de la transformation industrielle en Afrique centrale — et bien au-delà.
          </p>
        </div>
      </div>

      {/* 5. Barre de Statistiques */}
      <div className="relative z-10 border-t border-white/10 bg-white/[0.02] backdrop-blur-md">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 border-x border-white/5">
            {stats.map((s, index) => (
              <div 
                key={index} 
                className="py-10 px-6 text-center group transition-colors duration-300 hover:bg-white/[0.01]"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-gray-400 text-xs sm:text-sm leading-snug whitespace-pre-line font-medium tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}