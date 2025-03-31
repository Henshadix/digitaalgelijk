/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'digitaalgelijk.nl',
          },
        ],
        destination: 'https://www.digitaalgelijk.nl/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig; 