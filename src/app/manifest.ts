import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Digitaalgelijk - Duurzame IT-oplossingen',
    short_name: 'Digitaalgelijk',
    description: 'Uw specialist in duurzame IT-oplossingen: hardware opkopen, recyclen en data verwijderen',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    orientation: 'portrait',
    categories: ['business', 'technology', 'environment'],
    screenshots: [
      {
        src: '/screenshots/home.png',
        sizes: '1280x720',
        type: 'image/png',
        platform: 'wide',
        label: 'Homepage van Digitaalgelijk',
      },
      {
        src: '/screenshots/services.png',
        sizes: '720x1280',
        type: 'image/png',
        platform: 'narrow',
        label: 'Diensten pagina',
      },
    ],
    shortcuts: [
      {
        name: 'Diensten',
        url: '/diensten',
        description: 'Bekijk onze diensten',
        icons: [{ src: '/icons/services.png', sizes: '192x192' }],
      },
      {
        name: 'Contact',
        url: '/contact',
        description: 'Neem contact op',
        icons: [{ src: '/icons/contact.png', sizes: '192x192' }],
      },
    ],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    related_applications: [
      {
        platform: 'play',
        url: 'https://play.google.com/store/apps/details?id=nl.digitaalgelijk.app',
      },
      {
        platform: 'itunes',
        url: 'https://apps.apple.com/app/digitaalgelijk/id123456789',
      },
    ],
    prefer_related_applications: false,
    iarc_rating_id: 'e84b072d-71b3-4d3e-86ae-31a8ce4e53b7',
    lang: 'nl',
    dir: 'ltr',
    scope: '/',
    display_override: ['window-controls-overlay'],
    edge_side_panel: {
      preferred_width: 400,
    },
  };
} 