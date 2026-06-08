export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  benefits: string[]
  process: ProcessStep[]
  useCases: string[]
  faq: FAQ[]
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Project {
  id: string
  slug: string
  title: string
  client: string
  sector: string
  context: string
  problem: string
  solution: string
  results: string[]
  technologies: string[]
  testimonial?: Testimonial
  imageUrl: string
  featured: boolean
}

export interface Testimonial {
  text: string
  author: string
  role: string
  company: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: number
  imageUrl: string
  tags: string[]
}

export interface JobOffer {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
  benefits: string[]
}

export interface Sector {
  id: string
  slug: string
  title: string
  description: string
  challenges: string[]
  solutions: string[]
  benefits: string[]
  useCases: string[]
  icon: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
}

export interface Value {
  title: string
  description: string
  icon: string
}