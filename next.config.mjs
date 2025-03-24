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
  }
};

export default nextConfig; 