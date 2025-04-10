'use client';
import { FiMonitor, FiRefreshCw, FiShield, FiTruck, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MotionDiv } from '@/components/client/MotionWrapper';
import Image from 'next/image';

// Diensten data met afbeeldingen
const services = [
  {
    id: 'hardware-opkopen',
    title: 'Hardware Opkopen',
    subtitle: 'Maximale waarde voor uw apparatuur',
    description: 'Wij kopen uw gebruikte IT-apparatuur op tegen eerlijke prijzen, ongeacht het aantal of de staat. Krijg een professionele waardebepaling binnen 24 uur en gebruik onze gratis ophaalservice in heel Nederland.',
    icon: <FiMonitor className="w-7 h-7" />,
    link: '/diensten/hardware-opkopen',
    buttonText: 'Verkoop uw hardware',
    gradient: 'from-blue-800/90 to-blue-600/90',
    textColor: 'text-blue-400',
    bgGradient: 'bg-gradient-to-r from-blue-800/90 to-blue-600/90',
    image: '/images/services/new/hardware-inkoop-pro.jpg',
  },
  {
    id: 'data-verwijdering',
    title: 'Data Verwijdering',
    subtitle: 'Veilig en gecertificeerd',
    description: 'Onze gecertificeerde dataverwijdering voldoet aan de hoogste veiligheidsnormen en GDPR-eisen. Wij leveren uitgebreide rapportage en certificering voor volledige traceerbaarheid en compliance.',
    icon: <FiShield className="w-7 h-7" />,
    link: '/diensten/data-verwijdering',
    buttonText: 'Beveilig uw data',
    gradient: 'from-purple-800/90 to-purple-600/90',
    textColor: 'text-purple-400',
    bgGradient: 'bg-gradient-to-r from-purple-800/90 to-purple-600/90',
    image: '/images/services/new/data-verwijdering-hero.jpg',
  },
  {
    id: 'hardware-recycling',
    title: 'Hardware Recycling',
    subtitle: 'Duurzame verwerking',
    description: 'Minimaliseer uw milieu-impact met onze duurzame IT-recycling diensten. Wij zorgen voor maximaal hergebruik van materialen, leveren een CO2-besparingsrapport en garanderen 100% circulaire verwerking.',
    icon: <FiRefreshCw className="w-7 h-7" />,
    link: '/diensten/hardware-recycling',
    buttonText: 'Start met recycling',
    gradient: 'from-green-800/90 to-green-600/90',
    textColor: 'text-green-400',
    bgGradient: 'bg-gradient-to-r from-green-800/90 to-green-600/90',
    image: '/images/services/new/hardware-recycling-pro.jpg',
  },
  {
    id: 'logistieke-diensten',
    title: 'Logistieke Diensten',
    subtitle: 'Veilig transport en opslag',
    description: 'Veilig transport en opslag van uw IT-apparatuur, met volledige tracking en tracing in heel Nederland. Onze beveiligde transportmiddelen en flexibele planning maken het proces zorgeloos.',
    icon: <FiTruck className="w-7 h-7" />,
    link: '/diensten/logistieke-diensten',
    buttonText: 'Plan uw transport',
    gradient: 'from-amber-800/90 to-amber-600/90',
    textColor: 'text-amber-400',
    bgGradient: 'bg-gradient-to-r from-amber-800/90 to-amber-600/90',
    image: '/images/services/logistieke-diensten-pro.jpg',
  }
];

const ServicesSection = () => {
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
    <section id="services-section" className="relative overflow-hidden pt-0">
      {/* Achtergrond elementen */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100/30 dark:bg-blue-900/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-green-100/30 dark:bg-green-900/10 blur-3xl"></div>
      </div>

      {/* Diensten in alternerende layout */}
      <div className="space-y-0">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className="border-t border-b border-gray-200 dark:border-gray-700 w-full py-0"
          >
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`relative max-w-[1400px] mx-auto px-0 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
            >
              {/* Afbeelding sectie */}
              <div className={`w-full lg:w-5/12 relative ${index % 2 === 0 ? 'lg:ml-0' : 'lg:mr-0'}`}>
                <div className="w-full h-64 md:h-80 lg:h-[350px] relative overflow-hidden">
                  {/* Base image met mask */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      maskImage: index % 2 === 0
                        ? 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)'
                        : 'linear-gradient(270deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)',
                      WebkitMaskImage: index % 2 === 0
                        ? 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)'
                        : 'linear-gradient(270deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)'
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      priority={index < 2}
                      quality={85}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  {/* Kleur overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      maskImage: index % 2 === 0
                        ? 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)'
                        : 'linear-gradient(270deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)',
                      WebkitMaskImage: index % 2 === 0
                        ? 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)'
                        : 'linear-gradient(270deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)'
                    }}
                  >
                    <div className={`absolute inset-0 ${service.bgGradient} mix-blend-multiply`}></div>
                  </div>

                  {/* De service icon in een cirkel */}
                  <div 
                    className={`absolute ${index % 2 === 0 ? 'right-4' : 'left-4'} top-4 z-30 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30`}
                  >
                    <div className={service.textColor}>
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content sectie */}
              <div className="w-full lg:w-7/12 flex flex-col px-4 md:px-6 py-10">
                <MotionDiv
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className={`inline-flex items-center gap-2 ${service.textColor} mb-2`}>
                    <span className="font-semibold uppercase tracking-wide text-sm">{service.subtitle}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
                    {service.description}
                  </p>
                  
                  <Link
                    href={service.link}
                    className={`inline-flex items-center px-5 py-2.5 rounded-lg text-white ${service.bgGradient} hover:shadow-lg transition-all duration-300 font-medium border border-white/10`}
                  >
                    <span>{service.buttonText}</span>
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </MotionDiv>
              </div>
            </MotionDiv>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;