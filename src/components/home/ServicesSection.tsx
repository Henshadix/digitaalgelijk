'use client';
import { FiMonitor, FiRefreshCw, FiShield, FiTruck, FiArrowRight, FiCheck } from 'react-icons/fi';
import Link from 'next/link';
import { MotionDiv } from '@/components/client/MotionWrapper';
import Image from 'next/image';

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
      benefits: ['Waardebepaling binnen 24 uur', 'Ophaalservice in heel Nederland', 'Transparante prijsstructuur'],
      imageUrl: '/images/services/hardware-opkopen-pro.jpg?v=1'
    },
    {
      title: 'Data Verwijdering',
      description: 'Gecertificeerde dataverwijdering volgens de hoogste veiligheidsnormen, met uitgebreide rapportage en certificering.',
      icon: <FiShield className="w-8 h-8" />,
      link: '/diensten/data-verwijdering',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'group-hover:from-purple-600 group-hover:to-purple-700',
      benefits: ['GDPR-compliant', 'Certificaat van vernietiging', 'Volledige traceerbaarheid'],
      imageUrl: '/images/services/data-verwijdering-pro.jpg?v=1'
    },
    {
      title: 'Hardware Recycling',
      description: 'Duurzame recycling van IT-apparatuur met maximaal hergebruik van materialen en minimale milieubelasting.',
      icon: <FiRefreshCw className="w-8 h-8" />,
      link: '/diensten/hardware-recycling',
      color: 'from-green-500 to-green-600',
      hoverColor: 'group-hover:from-green-600 group-hover:to-green-700',
      benefits: ['CO2-besparingsrapport', 'Milieucertificaat', '100% circulaire verwerking'],
      imageUrl: '/images/services/hardware-recycling-pro.jpg?v=1'
    },
    {
      title: 'Logistieke Diensten',
      description: 'Veilig transport en opslag van uw IT-apparatuur, met volledige tracking en tracing in heel Nederland.',
      icon: <FiTruck className="w-8 h-8" />,
      link: '/diensten/logistieke-diensten',
      color: 'from-amber-500 to-amber-600',
      hoverColor: 'group-hover:from-amber-600 group-hover:to-amber-700',
      benefits: ['Beveiligde transportmiddelen', 'Track & trace', 'Flexibele planning'],
      imageUrl: '/images/services/logistieke-diensten-pro.jpg?v=1'
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
    <section id="services-section" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Enhanced background design elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-green-100 dark:bg-green-900/20 blur-3xl"></div>
        
        {/* Added subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with enhanced animation */}
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

        {/* Redesigned services grid with improved card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10">
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
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-100 dark:hover:border-blue-800 hover:-translate-y-1">
                {/* Service header with image and icon */}
                <div className="relative h-48 overflow-hidden">
                  {/* Service image with overlay */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image 
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      width={600}
                      height={300}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-90 mix-blend-multiply`}></div>
                  </div>
                  
                  {/* Service title and icon */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 w-14 h-14 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-lg">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 dark:text-gray-300 mb-5 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Key benefits with checkmarks */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-3">Voordelen</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={service.link} 
                    className={`self-start inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg text-white bg-gradient-to-r ${service.color} ${service.hoverColor} transition-all duration-300 shadow-sm hover:shadow mt-auto`}
                  >
                    <span>Meer informatie</span>
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;