'use client';

import Link from 'next/link';
import { FiTruck, FiCheckCircle, FiPackage, FiMap, FiShield, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import PageWrapper from '@/components/client/PageWrapper';

export default function LogistiekeDienstenPage() {
  const features = [
    {
      title: "Landelijke ophaalservice",
      description: "Wij halen uw hardware in heel Nederland op, ongeacht de hoeveelheid.",
      icon: <FiTruck className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Veilig transport",
      description: "Beveiligde voertuigen en gecertificeerd personeel voor maximale veiligheid.",
      icon: <FiShield className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Volledige tracking",
      description: "Real-time updates over de status en locatie van uw hardware.",
      icon: <FiMap className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Beveiligde opslag",
      description: "24/7 beveiligde en gecontroleerde opslagfaciliteiten voor uw apparatuur.",
      icon: <FiPackage className="h-6 w-6 text-blue-500" />
    }
  ];

  const logistics = [
    {
      title: "IT-apparatuur ophaalservice",
      description: "Wij halen uw IT-apparatuur op de door u gekozen locatie op, van enkele stuks tot volledige datacenters.",
      image: "/images/services/logistics-pickup.jpg"
    },
    {
      title: "Beveiligd transport",
      description: "Speciaal beveiligde voertuigen en procedures voor het transport van waardevolle of gevoelige apparatuur.",
      image: "/images/services/logistics-transport.jpg"
    },
    {
      title: "Tijdelijke hardware opslag",
      description: "Beveiligde opslagfaciliteiten voor uw hardware bij verhuizing, renovatie of andere tijdelijke situaties.",
      image: "/images/services/logistics-storage.jpg"
    },
    {
      title: "Inventarisatie en asset tracking",
      description: "Complete inventarisatie en tracking van uw IT-assets tijdens transport en opslag.",
      image: "/images/services/logistics-inventory.jpg"
    }
  ];

  return (
    <PageWrapper>
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 dark:from-gray-900 dark:via-indigo-950 dark:to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-600 text-white text-sm w-max rounded-full px-4 py-1 mb-6">
                Diensten
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Logistieke Diensten
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl">
                Complete logistieke oplossingen voor uw IT-apparatuur: veilig transport, 
                professionele handling en beveiligde opslag. Wij zorgen voor een zorgeloze 
                overgang van uw hardware.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg flex items-center"
                >
                  Offerte Aanvragen <FiArrowRight className="ml-2" />
                </Link>
                <a href="tel:+31649892654" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors" aria-label="Bel ons op +31 6 4989 2654">
                  Bel +31 6 4989 2654
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Voordelen van onze logistieke diensten
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
                Wij bieden een complete logistieke oplossing voor uw IT-apparatuur, met de hoogste 
                standaarden voor veiligheid en betrouwbaarheid.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Onze logistieke diensten
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
                Van ophaalservice tot beveiligde opslag, wij bieden een complete oplossing voor al uw 
                IT-logistieke behoeften.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {logistics.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col"
                >
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-900/40 flex items-center justify-center">
                      <div className="text-6xl text-white opacity-80">
                        <FiTruck />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center text-blue-600 dark:text-blue-400">
                        <FiCheckCircle className="mr-2" />
                        <span className="font-medium">Gegarandeerde veiligheid</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ons logistieke proces
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
                Wij hanteren een gestructureerd proces voor de logistieke afhandeling van uw IT-apparatuur.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative pl-10 pb-10 border-l-2 border-blue-500 dark:border-blue-400">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-blue-500 dark:bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">1</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Aanvraag & Planning</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    U doet een aanvraag voor onze logistieke diensten en we plannen samen het transport in.
                  </p>
                </div>
                
                <div className="relative pl-10 pb-10 border-l-2 border-blue-500 dark:border-blue-400">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-blue-500 dark:bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">2</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Inventarisatie</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We maken een gedetailleerde inventarisatie van alle apparatuur die vervoerd moet worden.
                  </p>
                </div>
                
                <div className="relative pl-10 pb-10 border-l-2 border-blue-500 dark:border-blue-400">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-blue-500 dark:bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">3</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Veilig Verpakken</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Alle apparatuur wordt zorgvuldig verpakt om beschadiging tijdens transport te voorkomen.
                  </p>
                </div>
                
                <div className="relative pl-10 pb-10 border-l-2 border-blue-500 dark:border-blue-400">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-blue-500 dark:bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">4</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Transport</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Beveiligd transport met gekwalificeerde chauffeurs en tracking van de apparatuur.
                  </p>
                </div>
                
                <div className="relative pl-10 pb-10 border-l-2 border-blue-500 dark:border-blue-400">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-blue-500 dark:bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">5</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Aflevering of Opslag</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Aflevering op de gewenste locatie of veilige opslag in onze beveiligde faciliteiten.
                  </p>
                </div>
                
                <div className="relative pl-10">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-blue-500 dark:bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">6</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Rapportage</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Gedetailleerde rapportage van alle getransporteerde of opgeslagen items.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Klaar voor veilig transport van uw IT-apparatuur?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Neem contact met ons op voor een vrijblijvende offerte of bel direct voor meer informatie.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors flex items-center gap-2">
                  Offerte Aanvragen
                  <FiArrowRight className="ml-2" />
                </a>
                <a href="tel:+31649892654" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors" aria-label="Bel ons op +31 6 4989 2654">
                  Bel +31 6 4989 2654
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
} 
