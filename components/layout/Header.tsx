'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À Propos', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Mobilité, Transport & Infrastructures Routières', href: '/services/mobilite-transport-infrastructures-routieres' },
      { label: 'Énergie & Électricité Industrielle', href: '/services/energie-electricite-industrielle' },
      { label: 'Automatisation, Régulation & Robotique', href: '/services/automatisation-regulation-robotique' },
      { label: 'Sécurité Électronique & Protection Incendie', href: '/services/securite-electronique-protection-incendie' },
      { label: 'Solutions Numériques & Gestion d’Actifs', href: '/services/solutions-numeriques-gestion-actifs' },
      { label: 'Ingénierie & Technologies Biomédicales', href: '/services/ingenierie-technologies-biomedicales' },
    ],
  },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Secteurs', href: '/secteurs' },
  { label: 'Carrières', href: '/carrieres' },
]

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setIsMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo-noisim.png"
              alt="Logo Noisim"
              width={160}
              height={60}
              priority
            />

          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  )}
                >
                  {item.label}

                  {item.children && (
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform',
                        activeDropdown === item.label ? 'rotate-180' : ''
                      )}
                    />
                  )}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 w-60">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all bg-primary text-white hover:bg-primary-600 shadow-sm"
            >
              Nous contacter
            </Link>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="container-custom py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  {item.label}
                </Link>

                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        · {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-2 border-t border-gray-100">
              <Link
                href="/contact"
                className="block w-full text-center bg-primary text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}