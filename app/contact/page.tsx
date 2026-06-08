import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | NOISIM — Parlez-nous de votre projet',
  description:
    'Contactez NOISIM pour discuter de votre projet d\'automatisation, de sécurité électronique, d\'énergie ou de solutions numériques. Bureaux à Pointe-Noire et Brazzaville.',
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Siège — Pointe-Noire',
    lines: ['Avenue Alfred Raoul', 'Pointe-Noire, République du Congo'],
  },
  {
    icon: Phone,
    title: 'Téléphone',
    lines: ['+242 06 761 21 21', '+242 05 075 76 03'],
    links: ['tel:+242067612121', 'tel:+242050757603'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['contact@noisim.com'],
  },
  {
    icon: Clock,
    title: 'Horaires',
    lines: ['Lun – Ven : 08h30 – 17h30', 'Sam : 09h00 – 13h00'],
  },
]

const subjects = [
  'Demande de devis',
  'Renseignement sur un service',
  'Partenariat technique',
  'Recrutement / Candidature',
  'Support technique',
  'Autre',
]

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 bg-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }}
          aria-hidden
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" aria-hidden />

        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-7">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Contact</span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Parlons de{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                votre projet
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl mx-auto">
              Un devis, une question technique ou une idée à creuser — nos experts vous répondent
              sous 24 heures ouvrées.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────── */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* ── LEFT: Contact Info ────────────────────────── */}
            <AnimatedSection direction="left" className="space-y-5">

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/242067612121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/25 rounded-2xl p-5 hover:bg-[#25D366]/15 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-secondary text-sm group-hover:text-[#128C7E] transition-colors">
                    WhatsApp
                  </p>
                  <p className="text-gray-500 text-xs">Réponse rapide en heures ouvrées</p>
                </div>
              </a>

              {/* Contact info cards */}
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4 hover:border-primary/20 hover:shadow-card transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm mb-1">{info.title}</p>
                    {info.lines.map((line, i) =>
                      info.links?.[i] ? (
                        <a
                          key={line}
                          href={info.links[i]}
                          className="block text-gray-600 text-sm hover:text-primary transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-gray-500 text-sm">{line}</p>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-secondary to-dark rounded-2xl p-5 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                  aria-hidden
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">
                      Présence régionale
                    </span>
                  </div>
                  <p className="text-white font-bold mb-1">Congo-Brazzaville</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Interventions à Pointe-Noire, Brazzaville et sur tout le territoire national.
                    Projets régionaux en Afrique centrale.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* ── RIGHT: Form ───────────────────────────────── */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-card">
                <h2 className="text-2xl font-black text-secondary mb-2">Envoyez-nous un message</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Tous les champs marqués <span className="text-primary">*</span> sont obligatoires.
                </p>
                <ContactForm subjects={subjects} />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  )
}