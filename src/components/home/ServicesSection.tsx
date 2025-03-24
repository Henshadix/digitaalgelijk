'use client';
import { FiMonitor, FiRefreshCw, FiShield, FiTruck, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MotionDiv } from '@/components/client/MotionWrapper';

// Diensten data met inline styles in plaats van Tailwind classes
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
    style: {
      background: 'linear-gradient(to right, #1e40af, #2563eb)',
      color: 'white'
    },
    textColor: 'text-blue-400',
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
    style: {
      background: 'linear-gradient(to right, #6b21a8, #9333ea)',
      color: 'white'
    },
    textColor: 'text-purple-400',
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
    style: {
      background: 'linear-gradient(to right, #166534, #16a34a)',
      color: 'white'
    },
    textColor: 'text-green-400',
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
    style: {
      background: 'linear-gradient(to right, #92400e, #d97706)',
      color: 'white'
    },
    textColor: 'text-amber-400',
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
    <section id="services-section" style={{ backgroundColor: '#f9fafb', paddingTop: 0, position: 'relative', overflow: 'hidden' }}>
      {/* Achtergrond elementen */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100/30 dark:bg-blue-900/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-green-100/30 dark:bg-green-900/10 blur-3xl"></div>
      </div>

      {/* Diensten in alternerende layout */}
      <div style={{ margin: 0, padding: 0 }}>
        {services.map((service, index) => (
          <div 
            key={service.id}
            style={{ 
              borderTop: '1px solid #e5e7eb', 
              borderBottom: '1px solid #e5e7eb', 
              width: '100%',
              padding: 0
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: 0,
                '@media (min-width: 1024px)': {
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                }
              }}
              className={`flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              {/* Kleur sectie - nu met inline styles */}
              <div style={{ 
                width: '100%', 
                position: 'relative',
                marginLeft: index % 2 === 0 ? 0 : undefined,
                marginRight: index % 2 === 0 ? undefined : 0,
                '@media (min-width: 1024px)': { width: '41.666667%' }
              }} className="lg:w-5/12">
                <div style={{ 
                  width: '100%', 
                  height: '16rem', 
                  position: 'relative',
                  overflow: 'hidden',
                  '@media (min-width: 768px)': { height: '24rem' },
                  '@media (min-width: 1024px)': { height: 'calc(100% + 1px)' }
                }} className="h-64 md:h-96 lg:h-[calc(100%+1px)]">
                  {/* Gradient achtergrond met directe inline styles */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    ...service.style,
                    opacity: 1,
                    zIndex: 10
                  }}></div>
                  
                  {/* De Gradiënt fade naar de achtergrond met inline styles */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: index % 2 === 0 
                      ? 'linear-gradient(to right, transparent, #f9fafb)'
                      : 'linear-gradient(to left, transparent, #f9fafb)',
                    zIndex: 20,
                    opacity: 0.8
                  }}></div>
                  
                  {/* Subtiel patroon voor visuele diepte */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 5,
                    opacity: 0.2,
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                  
                  {/* De service icon in een cirkel */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    [index % 2 === 0 ? 'right' : 'left']: '1rem',
                    zIndex: 30,
                    padding: '0.75rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}>
                    <div className={service.textColor}>
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content sectie */}
              <div style={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                padding: '3rem 1rem',
                '@media (min-width: 768px)': { padding: '3rem 1.5rem' },
                '@media (min-width: 1024px)': { width: '58.333333%' }
              }} className="px-4 md:px-6 py-12 lg:w-7/12">
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
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '0.625rem 1.25rem',
                      borderRadius: '0.5rem',
                      ...service.style,
                      fontWeight: 500,
                      transition: 'all 300ms',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                    }}
                    className="hover:shadow-lg"
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