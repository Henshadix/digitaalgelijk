'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import PageWrapper from '@/components/client/PageWrapper';

// Dynamisch importeren van client component
const PageHeader = dynamic(() => import('@/components/ui/PageHeader'), { ssr: true });

export default function AdPage() {
  return (
    <PageWrapper>
      <main className="flex flex-col min-h-screen relative">
        <section className="relative py-24 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-bg.svg')] opacity-5"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="rounded-full bg-white/10 p-2 mr-4">
                  <Image 
                    src="/images/logo.svg" 
                    alt="Digitaalgelijk Logo" 
                    width={48} 
                    height={48} 
                    className="w-12 h-12"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Digitaalgelijk</h1>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Duurzame IT-oplossingen voor uw bedrijf</h2>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-4">Onze diensten:</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">✓</div>
                    <span className="text-lg">Hardware Opkopen</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">✓</div>
                    <span className="text-lg">Veilige Dataverwijdering</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">✓</div>
                    <span className="text-lg">Duurzame Hardware Recycling</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">✓</div>
                    <span className="text-lg">Logistieke Diensten</span>
                  </li>
                </ul>
                <p className="text-blue-200">✓ GDPR-compliant ✓ ISO-gecertificeerd ✓ CO₂-neutraal</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://digitaalgelijk.nl/contact" 
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium shadow-lg transition-colors duration-300 text-center"
                >
                  Offerte aanvragen
                </a>
                <a 
                  href="tel:+31649892654" 
                  className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium border border-blue-500 transition-colors duration-300 text-center"
                  aria-label="Bel ons op +31 6 4989 2654"
                >
                  Bel +31 6 4989 2654
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Waarom kiezen voor Digitaalgelijk?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Bij Digitaalgelijk maken we duurzaamheid toegankelijk voor elk bedrijf. 
                Onze all-in-one oplossingen helpen u bij het verminderen van uw ecologische voetafdruk, 
                terwijl we tegelijkertijd waarde terugwinnen uit uw gebruikte IT-apparatuur.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full mb-4">
                    ♻️
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Duurzaamheid</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    99.5% recycling ratio en volledig CO₂-gecompenseerde processen
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                    🔒
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Veiligheid</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    GDPR-compliant dataverwijdering met certificering
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full mb-4">
                    💰
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Waarde</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Eerlijke vergoeding voor uw gebruikte IT-apparatuur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="mr-3">
                  <Image 
                    src="/images/logo.svg" 
                    alt="Digitaalgelijk Logo" 
                    width={32} 
                    height={32} 
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Digitaalgelijk</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Circulaire IT-oplossingen
                  </p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Aalsburg 3111, 6602WR Wijchen | <a href="mailto:info@digitaalgelijk.nl" className="text-blue-600 dark:text-blue-400">info@digitaalgelijk.nl</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </PageWrapper>
  );
} 
