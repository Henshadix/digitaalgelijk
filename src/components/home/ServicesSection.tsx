'use client';
import { FiMonitor, FiRefreshCw, FiShield, FiTruck, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MotionDiv } from '@/components/client/MotionWrapper';
import Image from 'next/image';

// Diensten data
const services = [
  {
    id: 'hardware-opkopen',
    title: 'Hardware Opkopen',
    subtitle: 'Maximale waarde voor uw apparatuur',
    description: 'Wij kopen uw gebruikte IT-apparatuur op tegen eerlijke prijzen, ongeacht het aantal of de staat. Krijg een professionele waardebepaling binnen 24 uur en gebruik onze gratis ophaalservice in heel Nederland.',
    icon: <FiMonitor className="w-7 h-7" />,
    link: '/diensten/hardware-opkopen',
    buttonText: 'Verkoop uw hardware',
    gradient: 'from-blue-800 to-blue-600',
    textColor: 'text-blue-400',
    fallbackBg: 'bg-blue-700',
    imageUrl: '/images/services/hardware-opkopen-pro.jpg'
  },
  {
    id: 'data-verwijdering',
    title: 'Data Verwijdering',
    subtitle: 'Veilig en gecertificeerd',
    description: 'Onze gecertificeerde dataverwijdering voldoet aan de hoogste veiligheidsnormen en GDPR-eisen. Wij leveren uitgebreide rapportage en certificering voor volledige traceerbaarheid en compliance.',
    icon: <FiShield className="w-7 h-7" />,
    link: '/diensten/data-verwijdering',
    buttonText: 'Beveilig uw data',
    gradient: 'from-purple-800 to-purple-600',
    textColor: 'text-purple-400',
    fallbackBg: 'bg-purple-700',
    imageUrl: '/images/services/data-verwijdering-pro.jpg'
  },
  {
    id: 'hardware-recycling',
    title: 'Hardware Recycling',
    subtitle: 'Duurzame verwerking',
    description: 'Minimaliseer uw milieu-impact met onze duurzame IT-recycling diensten. Wij zorgen voor maximaal hergebruik van materialen, leveren een CO2-besparingsrapport en garanderen 100% circulaire verwerking.',
    icon: <FiRefreshCw className="w-7 h-7" />,
    link: '/diensten/hardware-recycling',
    buttonText: 'Start met recycling',
    gradient: 'from-green-800 to-green-600',
    textColor: 'text-green-400',
    fallbackBg: 'bg-green-700',
    imageUrl: '/images/services/hardware-recycling-pro.jpg'
  },
  {
    id: 'logistieke-diensten',
    title: 'Logistieke Diensten',
    subtitle: 'Veilig transport en opslag',
    description: 'Veilig transport en opslag van uw IT-apparatuur, met volledige tracking en tracing in heel Nederland. Onze beveiligde transportmiddelen en flexibele planning maken het proces zorgeloos.',
    icon: <FiTruck className="w-7 h-7" />,
    link: '/diensten/logistieke-diensten',
    buttonText: 'Plan uw transport',
    gradient: 'from-amber-800 to-amber-600',
    textColor: 'text-amber-400',
    fallbackBg: 'bg-amber-700',
    imageUrl: '/images/services/logistieke-diensten-pro.jpg'
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
    <section id="services-section" className="bg-gray-50 dark:bg-gray-900 relative overflow-hidden pt-0">
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
            className={`border-t border-b border-gray-200 dark:border-gray-700 py-0 w-full`}
          >
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`relative container mx-auto px-0 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
            >
              {/* Afbeelding sectie - nu full height */}
              <div className={`w-full lg:w-5/12 relative ${index % 2 === 0 ? 'lg:ml-0 pr-0' : 'lg:mr-0 pl-0'}`}>
                <div className="w-full h-64 md:h-96 lg:h-[calc(100%+1px)] relative overflow-hidden">
                  {/* Fallback achtergrond als image niet laadt */}
                  <div className={`absolute inset-0 ${service.fallbackBg} z-0`}></div>
                  
                  {/* Image met error handling */}
                  <div className="absolute inset-0 z-5">
                    <Image 
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority={index === 0}
                      onError={(e) => {
                        // Verberg de afbeelding bij error, laat fallback zien
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  {/* Gradient overlay voor beide gevallen */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-70 mix-blend-multiply z-10`}></div>
                  
                  {/* De Gradiënt fade naar de achtergrond */}
                  <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-transparent to-gray-50 dark:to-gray-900 z-20 opacity-90`}></div>
                  
                  {/* De service icon in een cirkel */}
                  <div className={`absolute ${index % 2 === 0 ? 'right-4' : 'left-4'} top-4 z-30 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30`}>
                    <div className={service.textColor}>
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content sectie */}
              <div className="w-full lg:w-7/12 flex flex-col px-4 md:px-6 py-12">
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
                    className={`inline-flex items-center px-5 py-2.5 rounded-lg text-white bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 font-medium border border-white/10`}
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