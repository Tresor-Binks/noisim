import Link from 'next/link'
import { MapPin, Phone, Mail, Linkedin, Twitter, ArrowRight, Facebook } from 'lucide-react'

const footerSections = [
  {
    title: 'Services',
    links: [
       { label: 'Mobilité', href: '/services/mobilite-infrastructures-urbaines' },
      { label: 'Gestion de Flotte', href: '/services/gestion-de-flotte' },
      { label: 'Maintenance Industrielle', href: '/services/maintenance-industrielle-oil-gas' },
      { label: 'Technologies Biomédicales', href: '/services/technologies-biomedicales' },
      { label: 'Automatisation', href: '/services/automation-intelligence-artificielle' },
      { label: 'Sécurité Électronique', href: '/services/securite-electronique-incendi' },
    ],
  },
  {
    title: 'Secteurs',
    links: [
      { label: 'Mobilité', href: '/services/mobilite-infrastructures-urbaines' },
      { label: 'Gestion de Flotte', href: '/services/gestion-de-flotte' },
      { label: 'Maintenance Industrielle', href: '/services/maintenance-industrielle-oil-gas' },
      { label: 'Technologies Biomédicales', href: '/services/technologies-biomedicales' },
      { label: 'Automatisation', href: '/services/automation-intelligence-artificielle' },
      { label: 'Sécurité Électronique', href: '/services/securite-electronique-incendi' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'À propos', href: '/about' },
      { label: 'Réalisations', href: '/realisations' },
      { label: 'Carrières', href: '/carrieres' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
             
              <span className="font-black text-2xl tracking-tight">NOISIM</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              NOISIM accompagne les entreprises dans leur transformation industrielle grâce à l&apos;automatisation,
              l&apos;intelligence artificielle et les technologies numériques.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Avenue Alfred Raoul, Immeuble la loya, Pointe-Noire, Congo</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+242061234567" className="hover:text-primary transition-colors">+242 06 761 21 21</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:contact@noisim.com" className="hover:text-primary transition-colors">contact@noisim.com</a>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/noisim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/noisim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NOISIM. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="text-sm text-gray-500 hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-sm text-gray-500 hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}