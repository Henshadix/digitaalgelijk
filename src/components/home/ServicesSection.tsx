'use client';
import { FiMonitor, FiRefreshCw, FiShield, FiTruck, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MotionDiv } from '@/components/client/MotionWrapper';

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
    bgGradient: 'bg-gradient-to-r from-blue-800 to-blue-600',
    textColor: 'text-blue-400',
    fallbackBg: 'bg-blue-700',
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
    bgGradient: 'bg-gradient-to-r from-purple-800 to-purple-600',
    textColor: 'text-purple-400',
    fallbackBg: 'bg-purple-700',
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
    bgGradient: 'bg-gradient-to-r from-green-800 to-green-600',
    textColor: 'text-green-400',
    fallbackBg: 'bg-green-700',
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
    bgGradient: 'bg-gradient-to-r from-amber-800 to-amber-600',
    textColor: 'text-amber-400',
    fallbackBg: 'bg-amber-700',
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
            <div
              className={`relative max-w-[1400px] mx-auto px-0 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
            >
              {/* Kleur sectie - nu volledige CSS-oplossing zonder afbeeldingen */}
              <div className={`w-full lg:w-5/12 relative ${index % 2 === 0 ? 'lg:ml-0 pr-0' : 'lg:mr-0 pl-0'}`}>
                <div className="w-full h-64 md:h-96 lg:h-[calc(100%+1px)] relative overflow-hidden">
                  {/* Gradient achtergrond - zet!important voor betrouwbaarheid */}
                  <div className={`absolute inset-0 ${service.bgGradient} z-10`} style={{opacity: '1 !important'}}></div>
                  
                  {/* De Gradiënt fade naar de achtergrond */}
                  <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-transparent to-gray-50 dark:to-gray-900 z-20 opacity-80`}></div>
                  
                  {/* Subtiel patroon voor visuele diepte */}
                  <div className="absolute inset-0 z-5 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}>
                  </div>
                  
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
                <div>
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;