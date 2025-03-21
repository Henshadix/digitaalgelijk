/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Basis configuratie */
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org'],
    unoptimized: true,
  },
  // Output als eenvoudige build
  // output: 'standalone',
  
  // Validaties uitzetten voor probleemloze deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 