import { Linkedin, Mail } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const team = [
  {
    name: 'Melchisedek Nganga',
    role: 'Directeur Général & fondateur',
    bio: 'Notre ambition est de fournir des solutions technologiques fiables et innovantes, tout en bâtissant des relations durables avec nos clients.',
    expertise: ['Automatisation', 'Stratégie', 'Business Development'],
    initials: 'MN',
    color: 'from-primary to-secondary',
  },
  {
    name: 'Jeancia Boundou',
    role: 'Chargée administrative',
    bio: 'Mon rôle est de garantir le bon fonctionnement administratif de l\'entreprise pour accompagner notre croissance et satisfaire nos clients.',
    expertise: ['Développement RH / paie', 'Administration général'],
    initials: 'JB',
    color: 'from-accent to-primary',
  },
  {
    name: 'Dany Obiey',
    role: 'Développeur fullstack',
    bio: 'Travailler chez NOISIM, c\'est participer à des projets ambitieux, apprendre chaque jour et contribuer à des solutions utiles.',
    expertise: ['Django', 'Angular', 'Flutter'],
    initials: 'DO',
    color: 'from-secondary to-dark',
  },
]

export function AboutTeam() {
  return (
    <section className="section-padding bg-dark overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-64 bg-primary/8 rounded-full blur-[80px] pointer-events-none" aria-hidden />

      <div className="container-custom relative z-10">

        <SectionHeader
          tag="Notre Équipe"
          title="Des experts dédiés à votre réussite"
          description="Une équipe pluridisciplinaire d'ingénieurs et consultants qui conjuguent expertise technique et sens des enjeux business."
          light
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 80}>
              <div className="group bg-white/[0.04] border border-white/8 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-primary/30 transition-all duration-300 h-full flex flex-col">

                {/* Avatar + Info */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-black text-base shrink-0 shadow-md`}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base leading-tight group-hover:text-primary transition-colors duration-200">
                      {member.name}
                    </h3>
                    <p className="text-primary text-xs font-medium mt-0.5">{member.role}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {member.bio}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {member.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold bg-primary/15 text-primary px-2.5 py-1 rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                  <button className="w-8 h-8 bg-white/8 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/15 transition-all duration-200" aria-label={`LinkedIn de ${member.name}`}>
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-white/8 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/15 transition-all duration-200" aria-label={`Email de ${member.name}`}>
                    <Mail className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Team note */}
        <AnimatedSection delay={500} className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Et une équipe d'<span className="text-primary font-semibold">ingénieurs, développeurs et consultants</span> dédiés à vos projets.
          </p>
        </AnimatedSection>

      </div>
    </section>
  )
}