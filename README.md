# NOISIM — Site Corporate Next.js 15

Site corporate premium pour NOISIM, entreprise spécialisée en automatisation industrielle et transformation digitale en Afrique centrale.

## Stack technique

- **Framework** : Next.js 15 App Router
- **Langage** : TypeScript strict
- **UI** : Tailwind CSS
- **Animations** : CSS transitions (compatible SSR)
- **Icônes** : Lucide React

## Structure du projet

```
src/
├── app/                         # Pages (App Router)
│   ├── layout.tsx               # Layout racine + SEO global
│   ├── page.tsx                 # Accueil
│   ├── about/page.tsx           # À propos (7 sections)
│   ├── services/
│   │   ├── page.tsx             # Listing services
│   │   └── [slug]/page.tsx      # Détail service (dynamique)
│   ├── realisations/
│   │   ├── page.tsx             # Listing projets
│   │   └── [slug]/page.tsx      # Étude de cas (dynamique)
│   └── secteurs/
│       ├── page.tsx             # Listing secteurs
│       └── [slug]/page.tsx      # Détail secteur (dynamique)
├── components/
│   ├── layout/                  # Header + Footer
│   ├── sections/                # Sections homepage
│   │   └── about/               # Sections page À propos
│   └── shared/                  # AnimatedSection, AnimatedCounter, SectionHeader
├── data/                        # Données JSON/TS (services, projets, secteurs, blog)
├── lib/utils.ts                 # Helpers (cn, formatDate)
└── types/index.ts               # Types TypeScript
```

## Pages disponibles

| Route | Description |
|-------|-------------|
| `/` | Accueil avec Hero, Stats, Services, Process, Projets, Secteurs, CTA |
| `/about` | À propos : Hero animé, Mission/Vision, Valeurs, Timeline, Équipe, Partenaires, Pourquoi NOISIM |
| `/services` | Listing des 6 services |
| `/services/[slug]` | Détail service : process, bénéfices, cas d'usage, FAQ |
| `/realisations` | Portfolio des 6 projets |
| `/realisations/[slug]` | Étude de cas complète + témoignage |
| `/secteurs` | Listing des 6 secteurs d'activité |
| `/secteurs/[slug]` | Détail secteur : enjeux, solutions, bénéfices, cas d'usage |

## Installation

```bash
npm install
npm run dev
```

## Déploiement Vercel

```bash
# Connecter le repo à Vercel
vercel

# Ou via GitHub : importer le repo sur vercel.com
# Build command : npm run build
# Output directory : .next
```

## Identité visuelle

| Token | Valeur |
|-------|--------|
| Primary | `#00B8C4` |
| Secondary | `#083A5E` |
| Dark | `#051827` |
| Accent | `#17D4E0` |
| Surface | `#F8FAFC` |

---

**NOISIM** — L'innovation au service de votre avenir  
Pointe-Noire, Congo · contact@noisim.com