'use client';
import { FiMonitor, FiRefreshCw, FiShield, FiTruck } from 'react-icons/fi';
import Link from 'next/link';

const ServicesSection = () => {
  // Vereenvoudigde services data
  const mainServices = [
    {
      title: 'Hardware Opkopen',
      description: 'Wij kopen uw gebruikte IT-apparatuur op tegen eerlijke prijzen, ongeacht het aantal of de staat.',
      icon: <FiMonitor className="w-6 h-6" />,
      link: '/diensten/hardware-opkopen',
    },
    {
      title: 'Data Verwijdering',
      description: 'Gecertificeerde dataverwijdering volgens de hoogste veiligheidsnormen, met uitgebreide rapportage en certificering.',
      icon: <FiShield className="w-6 h-6" />,
      link: '/diensten/data-verwijdering',
    },
    {
      title: 'Hardware Recycling',
      description: 'Duurzame recycling van IT-apparatuur met maximaal hergebruik van materialen en minimale milieubelasting.',
      icon: <FiRefreshCw className="w-6 h-6" />,
      link: '/diensten/hardware-recycling',
    },
    {
      title: 'Logistieke Diensten',
      description: 'Veilig transport en opslag van uw IT-apparatuur, met volledige tracking en tracing in heel Nederland.',
      icon: <FiTruck className="w-6 h-6" />,
      link: '/diensten/logistieke-diensten',
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Onze Diensten
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Van hardware opkopen en veilige dataverwijdering tot milieuvriendelijke recycling - wij bieden complete IT-oplossingen voor het verantwoord beheren van uw IT-assets.
          </p>
        </div>

        {/* Eenvoudige services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainServices.map((service, index) => (
            <div key={service.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-blue-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <Link href={service.link} className="text-blue-500 hover:text-blue-700 font-medium">
                Meer informatie →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;