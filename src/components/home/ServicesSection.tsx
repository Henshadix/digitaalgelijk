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
    color: 'blue',
    gradient: 'from-blue-800 to-blue-600',
    textColor: 'text-blue-400',
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
    color: 'purple',
    gradient: 'from-purple-800 to-purple-600',
    textColor: 'text-purple-400',
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
    color: 'green',
    gradient: 'from-green-800 to-green-600',
    textColor: 'text-green-400',
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
    color: 'amber',
    gradient: 'from-amber-800 to-amber-600',
    textColor: 'text-amber-400',
    imageUrl: '/images/services/logistieke-diensten-pro.jpg'
  }
];

const ServicesSection = () => {
  return (
    <section id="services-section" className="bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Achtergrond elementen */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid patroon */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
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

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24">
        {/* Section header */}
        <MotionDiv 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-blue-600 dark:text-blue-400 font-medium text-sm px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-4">
            Onze Specialisaties
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Complete IT Oplossingen
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Van hardware opkopen en veilige dataverwijdering tot milieuvriendelijke recycling - wij bieden complete IT-oplossingen voor het verantwoord beheren van uw IT-assets.
          </p>
        </MotionDiv>

        {/* Diensten in alternerende layout */}
        <div className="space-y-32 lg:space-y-40">
          {services.map((service, index) => (
            <MotionDiv
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
            >
              {/* Afbeelding sectie */}
              <div className="w-full lg:w-1/2 relative">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
                  {/* Overlay voor de afbeelding */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-90 mix-blend-multiply z-10`}></div>
                  
                  {/* De Gradiënt fade naar de achtergrond */}
                  <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-transparent via-transparent to-gray-50 dark:to-gray-900 z-20 opacity-70`}></div>
                  
                  {/* De service icon in een cirkel */}
                  <div className={`absolute ${index % 2 === 0 ? 'right-6' : 'left-6'} top-6 z-30 p-3 rounded-full bg-white/20 backdrop-blur-sm`}>
                    <div className={service.textColor}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Afbeelding */}
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover object-center z-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    unoptimized={true}
                  />
                </div>
              </div>
              
              {/* Content sectie */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <MotionDiv
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className={`inline-flex items-center gap-2 ${service.textColor} mb-3`}>
                    <span className="font-semibold uppercase tracking-wide text-sm">{service.subtitle}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                    {service.description}
                  </p>
                  
                  <Link
                    href={service.link}
                    className={`inline-flex items-center px-6 py-3.5 rounded-lg text-white bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 font-medium`}
                  >
                    <span>{service.buttonText}</span>
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </MotionDiv>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;