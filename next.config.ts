import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Évite que le build crash à cause des fichiers injectés par Hostinger
    ignoreBuildErrors: true,
  },
  // Le reste de ta configuration ici...
};

export default nextConfig;