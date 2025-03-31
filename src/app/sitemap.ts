import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://digitaalgelijk.nl';
  const currentDate = new Date();

  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
      alternates: {
        languages: {
          'en': `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/diensten`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/services`,
        },
      },
    },
    {
      url: `${baseUrl}/diensten/hardware-opkopen`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/services/hardware-purchase`,
        },
      },
    },
    {
      url: `${baseUrl}/diensten/hardware-recycling`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/services/hardware-recycling`,
        },
      },
    },
    {
      url: `${baseUrl}/diensten/data-verwijdering`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/services/data-erasure`,
        },
      },
    },
    {
      url: `${baseUrl}/diensten/logistieke-diensten`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/services/logistics`,
        },
      },
    },
    {
      url: `${baseUrl}/over-ons`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/about`,
        },
      },
    },
    {
      url: `${baseUrl}/duurzaamheid`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/sustainability`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/faq`,
        },
      },
    },
    {
      url: `${baseUrl}/doneren`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/donate`,
        },
      },
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/privacy-policy`,
        },
      },
    },
    {
      url: `${baseUrl}/cookiebeleid`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/cookie-policy`,
        },
      },
    },
    {
      url: `${baseUrl}/algemene-voorwaarden`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      alternates: {
        languages: {
          'en': `${baseUrl}/en/terms-and-conditions`,
        },
      },
    },
  ];

  // Voeg Engelse versies toe
  const englishPages = mainPages.map(page => ({
    ...page,
    url: page.url.replace(baseUrl, `${baseUrl}/en`),
    alternates: {
      languages: {
        'nl': page.url,
      },
    },
  }));

  return [...mainPages, ...englishPages];
} 