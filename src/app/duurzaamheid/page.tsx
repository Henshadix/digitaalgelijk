'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import PageWrapper from '@/components/client/PageWrapper';

export default function DuurzaamheidPage() {
  // Stats data
  const stats = [
    { value: '99.5%', label: 'Recycling ratio', description: 'Van de materialen wordt hergebruikt of gerecycled' },
    { value: '100%', label: 'CO2-compensatie', description: 'Alle uitstoot wordt volledig gecompenseerd' },
    { value: '5000+', label: 'Apparaten', description: 'Jaarlijks een tweede leven gegeven' },
    { value: '50+', label: 'Bedrijven', description: 'Die we helpen duurzamer te worden' }
  ];
  
  // Certificeringen
  const certifications = [
    { name: 'ISO 14001', logo: '/images/certifications/iso-14001.svg', description: 'Milieumanagementsysteem' },
    { name: 'GDPR Compliant', logo: '/images/certifications/gdpr.svg', description: 'Veilige dataverwerking' },
    { name: 'CO2 Neutral', logo: '/images/certifications/co2-neutral.svg', description: 'CO2-neutrale operatie' }
  ];
  
  // Circulaire stappen
  const circularSteps = [
    {
      title: 'Inzameling',
      description: 'We halen uw gebruikte IT-apparatuur gratis op of u kunt deze bij ons inleveren.'
    },
    {
      title: 'Dataverwijdering',
      description: 'Alle data wordt volgens GDPR-normen veilig en permanent verwijderd.'
    },
    {
      title: 'Waardebepaling',
      description: 'We bepalen de restwaarde van uw apparatuur voor een eerlijke vergoeding.'
    },
    {
      title: 'Refurbishment',
      description: 'Apparaten worden opgeknapt voor hergebruik wanneer mogelijk.'
    },
    {
      title: 'Recycling',
      description: 'Niet-herbruikbare componenten worden gerecycled volgens de hoogste standaarden.'
    },
    {
      title: 'Rapportage',
      description: 'U ontvangt een gedetailleerd duurzaamheidsrapport over de verwerking.'
    }
  ];

  return (
    <PageWrapper>
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-green-900/30 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/10 blur-3xl rounded-full transform translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-green-500/10 blur-3xl rounded-full transform -translate-x-1/2"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 font-medium text-sm">
                Duurzame IT-oplossingen
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Duurzaamheid bij <span className="text-green-600 dark:text-green-400">Digitaalgelijk</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Onze circulaire aanpak geeft IT-apparatuur een tweede leven, minimaliseert afval en 
                reduceert de ecologische voetafdruk van uw bedrijf. Wij maken duurzaamheid toegankelijk.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link href="/contact" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors shadow-lg">
                  Neem contact op
                </Link>
                <Link href="/certificeringen" className="px-8 py-4 bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors shadow-lg border border-green-200 dark:border-green-900/50">
                  Onze certificeringen
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Onze impact in cijfers
              </h2>
              <div className="h-1 w-20 bg-green-600 mx-auto rounded"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
                Bij Digitaalgelijk meten we onze impact op het milieu en streven we voortdurend 
                naar verbetering van onze processen en resultaten.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {stat.label}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Circulaire Economie Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Onze circulaire aanpak
              </h2>
              <div className="h-1 w-20 bg-green-600 mx-auto rounded"></div>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                We volgen een stapsgewijs proces om maximale duurzaamheid te garanderen en 
                de levenscyclus van IT-apparatuur te verlengen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {circularSteps.map((step, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                      ✓
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Certificeringen Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Onze certificeringen
              </h2>
              <div className="h-1 w-20 bg-green-600 mx-auto rounded"></div>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                We voldoen aan internationale standaarden en hebben certificeringen 
                die onze toewijding aan duurzaamheid en veiligheid bevestigen.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 w-full md:w-64 text-center">
                  <div className="h-20 flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      🏆
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/certificeringen" 
                className="inline-flex items-center font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
              >
                Meer over onze certificeringen <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Maak uw bedrijf duurzamer
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Laat ons u helpen bij het verduurzamen van uw IT-infrastructuur. 
                Neem vandaag nog contact op voor een vrijblijvend adviesgesprek.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors shadow-lg">
                  Neem contact op
                </Link>
                <Link href="/diensten" className="px-8 py-4 bg-green-700 hover:bg-green-800 text-white border border-green-500 rounded-lg font-medium transition-colors shadow-lg">
                  Bekijk onze diensten
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
} 
