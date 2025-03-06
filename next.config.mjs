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
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Voeg output: 'standalone' toe voor Docker deployment
  output: 'standalone',
  
  // ESLint uitschakelen tijdens de build
  eslint: {
    // Waarschuwing: dit schakelt ESLint controle uit tijdens de build
    ignoreDuringBuilds: true,
  },
  
  // TypeScript type checking uitschakelen tijdens de build
  typescript: {
    // Waarschuwing: dit schakelt TypeScript type checking uit tijdens de build
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 