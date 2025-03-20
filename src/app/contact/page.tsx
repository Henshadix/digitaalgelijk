import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { ContactFormClient } from '@/components/client/ContactFormClient';
import ContactInfo from '@/components/shared/ContactInfo';
import ContactHeroSection from '@/components/shared/ContactHeroSection';
import ContactCTASection from '@/components/shared/ContactCTASection';
import DecorativeBackground from '@/components/ui/DecorativeBackground';

// Contact information gedefinieerd op server-side
  const contactInfo = {
    address: {
      street: 'Aalsburg 3111',
      city: '6602WR Wijchen',
      country: 'Nederland'
    },
    phone: '06 49 89 26 54',
    email: 'info@digitaalgelijk.nl',
    hours: [
      { days: 'Maandag - Vrijdag', hours: '09:00 - 17:00' },
      { days: 'Zaterdag - Zondag', hours: 'Op afspraak' }
    ]
  };

// JSON-LD data genereren op de server
const generateJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Digitaalgelijk",
    "description": "Neem contact op met Digitaalgelijk voor uw vragen over hardware opkopen, data verwijdering en recycling.",
    "url": "https://digitaalgelijk.nl/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Digitaalgelijk",
      "telephone": contactInfo.phone,
      "email": contactInfo.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": contactInfo.address.street,
        "addressLocality": contactInfo.address.city,
        "postalCode": contactInfo.address.city.split(' ')[0],
        "addressCountry": "NL"
      },
      "openingHours": `Mo-Fr ${contactInfo.hours[0].hours.split(' - ')[0]}-${contactInfo.hours[0].hours.split(' - ')[1]}`
    }
  };
};

// Server Component voor de contactpagina
export default function Contact() {
  const jsonLd = generateJsonLd();

  return (
    <>
      {/* JSON-LD structured data voor betere SEO */}
      <Script id="contact-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
      
    <main className="flex flex-col min-h-screen relative">
        {/* Decoratieve achtergrond elementen - nu als apart component */}
        <DecorativeBackground />

        {/* Hero Section - statisch, server-side gerenderd */}
        <ContactHeroSection />

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-white dark:bg-gray-900 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form - Client Component */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="mr-3 text-blue-600 dark:text-blue-400">📝</span>
                Stuur ons een bericht
              </h2>
                <ContactFormClient />
              </div>
              
              {/* Contact Information - statisch, server-side gerenderd */}
              <ContactInfo contactInfo={contactInfo} />
          </div>
        </div>
      </section>

        {/* CTA Section - statisch, server-side gerenderd */}
        <ContactCTASection />
    </main>
    </>
  );
} 