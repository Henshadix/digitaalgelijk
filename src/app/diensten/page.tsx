import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiMonitor, FiShield, FiRefreshCw, FiFileText, FiTruck, FiDollarSign, FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Onze Diensten | Neiwu',
  description: 'Ontdek onze duurzame IT-oplossingen, van hardware opkopen en veilige dataverwijdering tot milieuvriendelijke recycling en IT asset management.',
};

export default function Diensten() {
  // Main services data
  const mainServices = [
    {
      title: 'Hardware Opkopen',
      description: 'Wij kopen uw gebruikte IT-apparatuur op tegen eerlijke prijzen, ongeacht het aantal of de staat.',
      icon: <FiMonitor className="w-6 h-6" />,
      link: '/diensten/hardware-opkopen',
      features: [
        'Gratis ophaalservice in heel Nederland',
        'Eerlijke prijzen voor uw hardware',
        'Veilige dataverwijdering volgens GDPR-normen',
        'Milieuvriendelijke verwerking'
      ],
      imageSrc: '/images/services/hardware-opkopen.jpg',
      accentColor: 'blue',
    },
    {
      title: 'Data Verwijdering',
      description: 'Gecertificeerde dataverwijdering volgens de hoogste veiligheidsnormen, met uitgebreide rapportage en certificering.',
      icon: <FiShield className="w-6 h-6" />,
      link: '/diensten/data-verwijdering',
      features: [
        'GDPR-compliant dataverwijdering',
        'Certificaat van verwijdering',
        'Uitgebreide rapportage',
        'Geschikt voor alle opslagmedia'
      ],
      imageSrc: '/images/services/data-verwijdering.jpg',
      accentColor: 'purple',
    },
    {
      title: 'Hardware Recycling',
      description: 'Duurzame recycling van IT-apparatuur met maximaal hergebruik van materialen en minimale milieubelasting.',
      icon: <FiRefreshCw className="w-6 h-6" />,
      link: '/diensten/hardware-recycling',
      features: [
        '99% hergebruik van materialen',
        'CO2-reductie door circulaire aanpak',
        'Transparante rapportage',
        'ISO 14001 gecertificeerd proces'
      ],
      imageSrc: '/images/services/hardware-recycling.jpg',
      accentColor: 'green',
    },
    {
      title: 'Logistieke Diensten',
      description: 'Veilig transport en opslag van uw IT-apparatuur, met volledige tracking en tracing in heel Nederland.',
      icon: <FiTruck className="w-6 h-6" />,
      link: '/diensten/logistieke-diensten',
      features: [
        'Ophaalservice in heel Nederland',
        'Veilig transport en opslag',
        'Volledige tracking en tracing',
        'Flexibele planning'
      ],
      imageSrc: '/images/services/logistieke-diensten.jpg',
      accentColor: 'blue',
    }
  ];
  
  // Additional services
  const additionalServices: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    accentColor: string;
    imageSrc: string;
  }[] = [];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/10 blur-3xl rounded-full transform -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Onze <span className="text-blue-600 dark:text-blue-400">Diensten</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Wij bieden duurzame IT-oplossingen voor uw bedrijf, van hardware opkopen en veilige dataverwijdering tot milieuvriendelijke recycling. Ontdek hoe wij u kunnen helpen bij het verantwoord beheren van uw IT-assets.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Kerndiensten
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Onze belangrijkste diensten zijn gericht op duurzaamheid, veiligheid en waardebehoud van uw IT-apparatuur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <div 
                key={service.title}
                className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105 hover:shadow-xl`}
              >
                <div className="relative h-48">
                  <Image 
                    src={service.imageSrc} 
                    alt={service.title} 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${
                      service.accentColor === 'blue' 
                        ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
                        : service.accentColor === 'purple'
                          ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                          : 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                    } mb-2`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`p-1 rounded-full mr-2 mt-1 ${
                          service.accentColor === 'blue' 
                            ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
                            : service.accentColor === 'purple'
                              ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                              : 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                        }`}>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.link} 
                    className={`inline-flex items-center font-medium ${
                      service.accentColor === 'blue' 
                        ? 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300' 
                        : service.accentColor === 'purple'
                          ? 'text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300'
                          : 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300'
                    }`}
                  >
                    Meer informatie <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Aanvullende Diensten
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Naast onze kerndiensten bieden wij ook aanvullende diensten om uw IT-beheer te optimaliseren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <div 
                key={service.title}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg"
              >
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
                    service.accentColor === 'green'
                      ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                  } mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <Link 
                    href={service.link} 
                    className={`inline-flex items-center font-medium ${
                      service.accentColor === 'green'
                        ? 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300'
                        : 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300'
                    }`}
                  >
                    Meer informatie <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om samen te werken?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte of meer informatie over onze diensten.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors flex items-center gap-2">
                Offerte Aanvragen <FiArrowRight />
              </Link>
              <Link href="tel:+31201234567" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors">
                Bel Ons
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 