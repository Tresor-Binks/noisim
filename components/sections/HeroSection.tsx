'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const bgImages = ['/péage1.png', '/péage2.png', '/péage3.png']

  return (
    <section
      className="
        relative
        mt-16 lg:mt-20
        h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)]
        flex items-center justify-center
        overflow-hidden
        bg-[#030d16]
      "
    >
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 opacity-0 animate-hero-slideshow"
            style={{
              backgroundImage: `url(${src})`,
              backgroundPosition: 'center top',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              animationDelay: `${index * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 z-10 bg-[#030d16]/60" />

      {/* Dégradé bas */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#030d16]/90" />

      {/* Contenu */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">

        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white tracking-tight mb-4 md:mb-6 drop-shadow-lg">
          <span className="block">L&apos;innovation</span>

          <span className="block bg-gradient-to-r from-[#00b4d8] to-[#0077b6] bg-clip-text text-transparent py-1">
            au service de
          </span>

          <span className="block">votre avenir</span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 md:mb-10 max-w-3xl drop-shadow-md">
          NOISIM accompagne les entreprises dans leur transformation
          industrielle grâce à l&apos;automatisation, l&apos;intelligence
          artificielle et les technologies numériques.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">

          <Link
            href="/services"
            className="bg-[#00b4d8] hover:bg-[#0096c7] text-white text-base font-medium px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto transition-colors duration-200"
          >
            Découvrir nos services
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/contact"
            className="border-2 border-white text-white bg-transparent hover:bg-white/10 text-base font-medium px-7 py-3.5 rounded-xl text-center w-full sm:w-auto transition-all duration-200"
          >
            Nous contacter
          </Link>

        </div>

      </div>
    </section>
  )
}