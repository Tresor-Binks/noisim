import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://noisim.com'),
  title: {
    default: 'NOISIM | Automatisation Industrielle & Transformation Digitale',
    template: '%s | NOISIM',
  },
  description: 'NOISIM accompagne les entreprises dans leur transformation industrielle grâce à l\'automatisation, l\'intelligence artificielle et les technologies numériques. Expert en Industrie 4.0.',
  keywords: [
    'automatisation industrielle',
    'transformation digitale',
    'intelligence artificielle industrie',
    'IoT industriel',
    'industrie 4.0',
    'SCADA',
    'maintenance prédictive',
    'data analytics industrie',
  ],
  authors: [{ name: 'NOISIM' }],
  creator: 'NOISIM',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://noisim.com',
    siteName: 'NOISIM',
    title: 'NOISIM | L\'innovation au service de votre avenir',
    description: 'Expert en automatisation industrielle, transformation digitale et intelligence artificielle appliquée à l\'industrie.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NOISIM - Automatisation Industrielle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOISIM | Automatisation Industrielle & Transformation Digitale',
    description: 'Expert en automatisation industrielle, transformation digitale et intelligence artificielle.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NOISIM',
  url: 'https://noisim.com',
  logo: 'https://noisim.com/logo.png',
  description: 'Expert en automatisation industrielle, transformation digitale et intelligence artificielle appliquée à l\'industrie.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avenue Alfred Raoul, Immeuble la loya',
    addressLocality: 'Pointe-Noire',
    addressCountry: 'CG',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+242-06-123-4567',
    contactType: 'customer service',
    availableLanguage: ['French', 'English'],
  },
  sameAs: [
    'https://www.linkedin.com/company/noisim',
    'https://twitter.com/noisim',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}