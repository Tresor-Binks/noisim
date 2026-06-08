/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Ajoute cette section pour ignorer les erreurs ESLint lors du build sur Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;