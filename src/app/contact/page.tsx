'use client';

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { ContactFormClient } from '@/components/client/ContactFormClient';
import ContactInfo from '@/components/shared/ContactInfo';
import ContactHeroSection from '@/components/shared/ContactHeroSection';
import ContactCTASection from '@/components/shared/ContactCTASection';
import DecorativeBackground from '@/components/ui/DecorativeBackground';
import PageWrapper from '@/components/client/PageWrapper';

// Contact information gedefinieerd op server-side
const contactDetails = {
  email: 'info@digitaalgelijk.nl',
  phone: '+31 6 4989 2654',
  address: {
    street: 'Regio Nijmegen',
    city: 'Nijmegen',
    postalCode: '',
    country: 'Nederland'
  },
  businessHours: {
    weekdays: '9:00 - 17:00',
    weekend: 'Gesloten'
  }
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
      "telephone": contactDetails.phone,
      "email": contactDetails.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": contactDetails.address.street,
        "addressLocality": contactDetails.address.city,
        "postalCode": contactDetails.address.postalCode,
        "addressCountry": "NL"
      },
      "openingHours": `Mo-Fr ${contactDetails.businessHours.weekdays.split(' - ')[0]}-${contactDetails.businessHours.weekdays.split(' - ')[1]}`
    }
  };
};

// Client Component voor de contactpagina
export default function Contact() {
  const jsonLd = generateJsonLd();

  return (
    <PageWrapper>
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
                <ContactInfo contactInfo={contactDetails} />
              </div>
            </div>
          </section>

          {/* CTA Section - statisch, server-side gerenderd */}
          <ContactCTASection />
        </main>
      </>
    </PageWrapper>
  );
} 
