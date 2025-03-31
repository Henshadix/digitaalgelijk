import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/images/certifications/*',
        '/images/hero/*',
        '/images/features/*',
        '/images/team/*',
        '/images/process/*',
        '/images/partners/*',
      ],
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
        '/_next/',
        '/static/',
        '/images/temp/',
        '/images/private/',
        '/favicon.ico',
        '/sitemap.xml',
        '/robots.txt',
        '/manifest.json',
        '/.env',
        '/.env.*',
        '/node_modules/',
        '/.git/',
        '/.next/',
        '/coverage/',
        '/build/',
        '/dist/',
      ],
    },
    sitemap: 'https://digitaalgelijk.nl/sitemap.xml',
  };
} 