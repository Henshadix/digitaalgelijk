'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiHeart, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import PageWrapper from '@/components/client/PageWrapper';

export const metadata = {
  title: 'Doneer - Digitaalgelijk',
  description: 'Doneer de restwaarde van uw hardware aan het Ronald McDonald Huis in Nijmegen. Help ons om gezinnen met zieke kinderen te ondersteunen.',
};

export default function DonerenPage() {
  // Donation steps
  const donationSteps = [
    {
      title: 'Hardware aanbieden',
      description: 'U heeft oude hardware die u wilt doneren via Digitaalgelijk'
    },
    {
      title: 'Waardebepaling',
      description: 'Wij beoordelen de waarde van uw apparaten en berekenen de restwaarde'
    },
    {
      title: 'Donatie keuze',
      description: 'U kiest ervoor om de restwaarde te doneren aan het Ronald McDonald Huis'
    },
    {
      title: 'Dataverwijdering',
      description: 'Wij zorgen voor veilige dataverwijdering volgens GDPR-normen'
    },
    {
      title: 'Recycling',
      description: 'De apparaten worden duurzaam verwerkt of krijgen een tweede leven'
    },
    {
      title: 'Donatie overdracht',
      description: 'De opbrengst wordt direct overgemaakt aan het Ronald McDonald Huis'
    }
  ];

  return (
    <PageWrapper>
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900/30 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 blur-3xl rounded-full transform translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/10 blur-3xl rounded-full transform -translate-x-1/2"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-medium text-sm">
                Steun het Ronald McDonald Huis Nijmegen
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Doneer aan het <span className="text-blue-600 dark:text-blue-400">Ronald McDonald Huis</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Help gezinnen met zieke kinderen door de restwaarde van uw hardware te doneren via Digitaalgelijk.
                Samen maken we het verschil voor families tijdens moeilijke tijden.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg flex items-center">
                  <span>Neem contact op</span>
                  <FiArrowRight className="ml-2" />
                </Link>
                <Link href="/diensten/hardware-opkopen" className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors shadow-lg border border-blue-200 dark:border-blue-900/50">
                  Meer over hardware opkopen
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Info Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Ronald McDonald Huis Nijmegen
                  </h2>
                  <div className="h-1 w-20 bg-blue-600 rounded mb-6"></div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Het Ronald McDonald Huis in Nijmegen is een warm thuis voor ouders van zieke kinderen die in het Radboudumc worden behandeld. 
                    Hier kunnen ouders dicht bij hun kind blijven tijdens de behandeling, zonder de kosten van een hotel of lange reistijden.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Door uw hardware te doneren via Digitaalgelijk, draagt u bij aan het welzijn van deze gezinnen. 
                    De restwaarde van uw apparaten wordt direct overgemaakt aan het Ronald McDonald Huis in Nijmegen.
                  </p>
                  <div className="flex gap-4 mt-8">
                    <a 
                      href="https://www.kinderfonds.nl/huis/nijmegen" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md inline-flex items-center"
                    >
                      <span>Bezoek de website</span>
                      <FiArrowRight className="ml-2" />
                    </a>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/ronald-mcdonald-house.jpg"
                    alt="Ronald McDonald Huis Nijmegen"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How it works Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Hoe werkt het doneren?
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                In zes eenvoudige stappen draagt u bij aan het goede doel terwijl uw hardware duurzaam wordt verwerkt.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {donationSteps.map((step, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-3 text-blue-600 dark:text-blue-400">
                      <FiCheckCircle size={20} />
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
        
        {/* QR Code Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-blue-50 dark:bg-blue-900/20 p-8 md:p-12 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-800/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Volg onze donatie actie
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Scan de QR-code hiernaast om de voortgang van onze inzamelingsactie te volgen en te zien hoeveel er al is gedoneerd aan het Ronald McDonald Huis in Nijmegen.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Elke donatie, groot of klein, maakt een verschil in het leven van families met zieke kinderen.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                    <div className="relative w-48 h-48">
                      <Image
                        src="/images/donation-qr.png"
                        alt="QR-code voor donatie actie"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-blue-500/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FiHeart size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Samen maken we het verschil
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Neem contact met ons op om uw hardware te doneren aan het Ronald McDonald Huis
                en help gezinnen met zieke kinderen in het Radboudumc.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors shadow-lg flex items-center">
                  <span>Neem contact op</span>
                  <FiArrowRight className="ml-2" />
                </Link>
                <Link href="/over-ons" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors shadow-lg">
                  Over Digitaalgelijk
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
} 