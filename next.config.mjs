/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Minimale configuratie */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig; 