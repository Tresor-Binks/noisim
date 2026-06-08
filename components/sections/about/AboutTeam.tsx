import { Linkedin, Mail } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const team = [
  {
    name: 'Melchisedek Nganga',
    role: 'Directeur Général & fondateur',
    bio: 'Ingénieur en automatisation industrielle , 18 ans d\u2019expérience en industrie pétrolière et manufacturière. Ancien consultant chez Schneider Electric.',
    expertise: ['Automatisation', 'Stratégie', 'Business Development'],
    initials: 'MN',
    color: 'from-primary to-secondary',
  },
  {
    name: 'Christelle Mbemba',
    role: 'Directrice Technique & Co-fondatrice',
    bio: 'Docteure en informatique industrielle (Université de Bordeaux), spécialiste IoT et systèmes embarqués. 12 ans sur des projets critiques en énergie et télécoms.',
    expertise: ['IoT / IIoT', 'Architecture SI', 'R&D'],
    initials: 'CM',
    color: 'from-accent to-primary',
  },
  {
    name: 'Thomas Nguyen',
    role: 'Directeur Data & IA',
    bio: 'MSc Machine Learning (Imperial College London). Ex-lead data scientist chez Total Energies. Spécialiste de la maintenance prédictive et du deep learning industriel.',
    expertise: ['Machine Learning', 'Data Engineering', 'IA Industrielle'],
    initials: 'TN',
    color: 'from-secondary to-dark',
  },
  {
    name: 'Sarah Diallo',
    role: 'Directrice des Opérations',
    bio: 'MBA INSEAD, ingénieure génie industriel. 14 ans de gestion de projets complexes multi-sites en Afrique et en Europe. Experte en conduite du changement.',
    expertise: ['Project Management', 'Lean', 'Change Management'],
    initials: 'SD',
    color: 'from-primary/80 to-accent/80',
  },
  {
    name: 'Marc Lebrun',
    role: 'Responsable Cybersécurité OT/IT',
    bio: 'Certifié CISSP et ICS/SCADA Security. Ancien expert ANSSI. Spécialiste de la convergence des systèmes IT/OT et de la sécurisation des infrastructures industrielles critiques.',
    expertise: ['Cybersécurité OT', 'SCADA Security', 'Conformité'],
    initials: 'ML',
    color: 'from-dark to-secondary',
  },
  {
    name: 'Isabelle Fontaine',
    role: 'Responsable Transformation Digitale',
    bio: 'Consultante senior en transformation digitale (ex-McKinsey Digital). Accompagne les directions générales dans la définition et l\u2019exécution de leurs feuilles de route numériques.',
    expertise: ['Stratégie Digitale', 'ERP/MES', 'Coaching dirigeants'],
    initials: 'IF',
    color: 'from-primary to-primary/50',
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
          description="Une équipe pluridisciplinaire d\u2019ingénieurs, data scientists et consultants qui conjuguent expertise technique et sens des enjeux business."
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
                  <span className="text-gray-600 text-xs ml-auto">NOISIM depuis {2015 + i * 1}</span>
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