'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiServer, FiShield, FiArrowRight, FiDatabase, FiMonitor, FiRefreshCw, FiTruck } from 'react-icons/fi';
import PageWrapper from '@/components/client/PageWrapper';

// Interface voor de diensten
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  benefits: string[];
  color: string;
}

export default function DienstenPage() {
  // Diensten data
  const services: Service[] = [
    {
      id: 'hardware-opkopen',
      title: 'Hardware Opkopen',
      description: 'Wij kopen uw gebruikte IT-apparatuur op tegen een eerlijke prijs, ongeacht het merk of de staat.',
      icon: <FiMonitor className="h-6 w-6 text-blue-500" />,
      link: '/diensten/hardware-opkopen',
      benefits: [
        'Transparante prijzen',
        'Gratis ophaalservice',
        'Snelle betaling',
        'Milieuvriendelijke verwerking'
      ],
      color: 'blue'
    },
    {
      id: 'data-verwijdering',
      title: 'Data Verwijdering',
      description: 'Veilige en gecertificeerde verwijdering van alle data volgens de hoogste beveiligingsstandaarden.',
      icon: <FiShield className="h-6 w-6 text-purple-500" />,
      link: '/diensten/data-verwijdering',
      benefits: [
        'GDPR-compliant',
        'Certificaat van verwijdering',
        'Verschillende beveiligingsniveaus',
        'Voor alle soorten apparaten'
      ],
      color: 'purple'
    },
    {
      id: 'hardware-recycling',
      title: 'Hardware Recycling',
      description: 'Duurzame en milieuvriendelijke recycling van elektronische apparatuur en componenten.',
      icon: <FiRefreshCw className="h-6 w-6 text-green-500" />,
      link: '/diensten/hardware-recycling',
      benefits: [
        '99.5% recycling ratio',
        'Geen stortafval',
        'CO2-uitstoot compensatie',
        'Certificaat van recycling'
      ],
      color: 'green'
    },
    {
      id: 'logistieke-diensten',
      title: 'Logistieke Diensten',
      description: 'Complete logistieke oplossingen voor het veilig transport en de opslag van uw IT-apparatuur.',
      icon: <FiTruck className="h-6 w-6 text-amber-500" />,
      link: '/diensten/logistieke-diensten',
      benefits: [
        'Landelijke ophaalservice',
        'Beveiligde transportmiddelen',
        'Track & trace',
        'Veilige tijdelijke opslag'
      ],
      color: 'amber'
    }
  ];

  return (
    <PageWrapper>
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900/30 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Onze <span className="text-blue-600 dark:text-blue-400">Diensten</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Van hardware opkopen tot veilige dataverwijdering - wij bieden complete oplossingen voor uw IT-apparatuur met focus op duurzaamheid en veiligheid.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center">
                  Offerte Aanvragen <FiArrowRight />
                </Link>
                <Link href="tel:+31649892654" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors" aria-label="Bel ons op +31 6 4989 2654">
                  Bel +31 6 4989 2654
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              Ons complete dienstenaanbod
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-${service.color}-100 dark:bg-${service.color}-900/30 flex items-center justify-center mr-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Voordelen</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <FiArrowRight className={`mt-1 mr-2 text-${service.color}-500`} />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className={`inline-flex items-center px-6 py-3 bg-${service.color}-50 hover:bg-${service.color}-100 dark:bg-${service.color}-900/10 dark:hover:bg-${service.color}-900/20 text-${service.color}-700 dark:text-${service.color}-400 rounded-lg font-medium transition-all duration-300`}
                  >
                    Lees meer <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Klaar om uw IT-apparatuur duurzaam te beheren?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Neem contact met ons op voor een vrijblijvende offerte of bel direct voor meer informatie.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors flex items-center gap-2">
                  Offerte Aanvragen <FiArrowRight />
                </Link>
                <Link href="tel:+31649892654" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors" aria-label="Bel ons op +31 6 4989 2654">
                  Bel +31 6 4989 2654
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
} 
