'use client';
import { FiMonitor, FiRefreshCw, FiShield, FiTruck, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { MotionDiv } from '@/components/client/MotionWrapper';

const ServicesSection = () => {
  // Vereenvoudigde services data
  const mainServices = [
    {
      title: 'Hardware Opkopen',
      description: 'Wij kopen uw gebruikte IT-apparatuur op tegen eerlijke prijzen, ongeacht het aantal of de staat.',
      icon: <FiMonitor className="w-8 h-8" />,
      link: '/diensten/hardware-opkopen',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-700',
    },
    {
      title: 'Data Verwijdering',
      description: 'Gecertificeerde dataverwijdering volgens de hoogste veiligheidsnormen, met uitgebreide rapportage en certificering.',
      icon: <FiShield className="w-8 h-8" />,
      link: '/diensten/data-verwijdering',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'group-hover:from-purple-600 group-hover:to-purple-700',
    },
    {
      title: 'Hardware Recycling',
      description: 'Duurzame recycling van IT-apparatuur met maximaal hergebruik van materialen en minimale milieubelasting.',
      icon: <FiRefreshCw className="w-8 h-8" />,
      link: '/diensten/hardware-recycling',
      color: 'from-green-500 to-green-600',
      hoverColor: 'group-hover:from-green-600 group-hover:to-green-700',
    },
    {
      title: 'Logistieke Diensten',
      description: 'Veilig transport en opslag van uw IT-apparatuur, met volledige tracking en tracing in heel Nederland.',
      icon: <FiTruck className="w-8 h-8" />,
      link: '/diensten/logistieke-diensten',
      color: 'from-amber-500 to-amber-600',
      hoverColor: 'group-hover:from-amber-600 group-hover:to-amber-700',
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-green-100 dark:bg-green-900/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animation */}
        <MotionDiv 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-blue-600 dark:text-blue-400 font-medium text-sm px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-4">
            Onze Specialisaties
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Complete IT Oplossingen
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Van hardware opkopen en veilige dataverwijdering tot milieuvriendelijke recycling - wij bieden complete IT-oplossingen voor het verantwoord beheren van uw IT-assets.
          </p>
        </MotionDiv>

        {/* Enhanced services grid with hover effects and animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainServices.map((service, index) => (
            <MotionDiv 
              key={service.title} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              custom={index}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-100 dark:hover:border-blue-900 hover:-translate-y-1">
                {/* Service icon header with gradient background */}
                <div className={`p-6 text-white bg-gradient-to-r ${service.color} ${service.hoverColor} transition-all duration-300`}>
                  <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-5 flex-grow">
                    {service.description}
                  </p>
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-auto group-hover:underline"
                  >
                    <span>Meer informatie</span>
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* All services link */}
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link href="/diensten" className="inline-flex items-center py-3 px-6 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium transition-colors">
            Bekijk al onze diensten
            <FiArrowRight className="ml-2" />
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ServicesSection;