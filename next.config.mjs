/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Minimale configuratie */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Domein configuratie
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ],
      },
    ];
  },
  // Productie URL
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://digitaalgelijk.nl',
  },
  // Fix voor framer-motion
  experimental: {
    serverComponentsExternalPackages: ['framer-motion'],
    serverActions: {
      bodySizeLimit: '10mb'
    },
    optimizePackageImports: ['framer-motion']
  },
  // Compiler optimalisaties
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production'
  },
  // Verhogen webpack memory limit
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error',
    };
    
    // Verhoog memory limiet voor de build
    config.performance = {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    };
    
    return config;
  },
  // Uitschakelen van strict mode in productie voor betere performance
  reactStrictMode: process.env.NODE_ENV !== 'production',
  // Optimalisatie voor statische pagina's
  output: 'standalone'
};

export default nextConfig; 