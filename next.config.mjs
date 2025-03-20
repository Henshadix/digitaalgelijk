/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
    unoptimized: false,
  },
  // Voeg output: 'standalone' toe voor Docker deployment
  output: 'standalone',
  
  // ESLint en TypeScript validatie inschakelen voor betere code kwaliteit
  eslint: {
    // ESLint validatie ingeschakeld voor build
    ignoreDuringBuilds: false,
  },
  
  // TypeScript type checking inschakelen tijdens de build
  typescript: {
    // TypeScript validatie ingeschakeld voor build
    ignoreBuildErrors: false,
  },
};

export default nextConfig; 