'use client';
import { FiMonitor, FiRefreshCw, FiShield, FiTruck, FiDollarSign, FiFileText, FiAward, FiUsers, FiCheckCircle, FiStar, FiMessageCircle, FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import ServiceCard from '../home/ServiceCard';
import { motion, useScroll, useTransform, useAnimation, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const ServicesSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(targetRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  // Scroll-based animation effect
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);
  
  // Main services data with images and accent colors
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
      imageSrc: '/images/services/hardware-opkopen-pro.jpg',
      accentColor: 'blue' as const,
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
      imageSrc: '/images/services/data-verwijdering-pro.jpg',
      accentColor: 'purple' as const,
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
      imageSrc: '/images/services/hardware-recycling-pro.jpg',
      accentColor: 'green' as const,
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
      imageSrc: '/images/services/logistieke-diensten-pro.jpg',
      accentColor: 'blue' as const,
    }
  ];
  
  // Certifications with logos and colors
  const certifications = [
    { 
      name: "ISO 27001", 
      description: "Informatiebeveiliging",
      icon: <FiShield className="w-8 h-8" />,
      bgColor: "bg-blue-500",
      lightBg: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400"
    },
    { 
      name: "ISO 14001", 
      description: "Milieumanagement",
      icon: <FiRefreshCw className="w-8 h-8" />,
      bgColor: "bg-green-500",
      lightBg: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-600 dark:text-green-400"
    },
    { 
      name: "WEEELABEX", 
      description: "E-waste verwerking",
      icon: <FiMonitor className="w-8 h-8" />,
      bgColor: "bg-purple-500",
      lightBg: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-600 dark:text-purple-400"
    },
    { 
      name: "ADISA", 
      description: "Gecertificeerde dataverwijdering",
      icon: <FiFileText className="w-8 h-8" />,
      bgColor: "bg-orange-500",
      lightBg: "bg-orange-100 dark:bg-orange-900/30",
      textColor: "text-orange-600 dark:text-orange-400"
    },
    { 
      name: "Blauer Engel", 
      description: "Milieuvriendelijke processen",
      icon: <FiAward className="w-8 h-8" />,
      bgColor: "bg-blue-500",
      lightBg: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-600 dark:text-blue-400"
    }
  ];

  return (
    <section ref={targetRef} className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      {/* Decoratieve achtergrond elementen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-green-400/10 dark:bg-green-600/10 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* Connecting lines */}
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" className="opacity-10">
            <line x1="20%" y1="0" x2="40%" y2="100%" />
            <line x1="80%" y1="0" x2="60%" y2="100%" />
            <line x1="0" y1="30%" x2="100%" y2="70%" />
          </g>
        </svg>
      </div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, y }}
      >
        {/* Section header with animated underline */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Onze Diensten
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Van hardware opkopen en veilige dataverwijdering tot milieuvriendelijke recycling - wij bieden complete IT-oplossingen voor het verantwoord beheren van uw IT-assets.
          </motion.p>
        </div>

        {/* Verbeterde diensten layout met 2x2 grid */}
        <div className="mb-20">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="grid grid-cols-1 gap-8"
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {mainServices.slice(0, 2).map((service, index) => (
                <motion.div 
                  key={service.title}
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    link={service.link}
                    features={service.features}
                    delay={index * 0.1}
                    imageSrc={service.imageSrc}
                    accentColor={service.accentColor}
                  />
                  <AnimatePresence>
                    {hoveredService === index && (
                      <motion.div 
                        className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="inline-flex items-center">
                          Klik voor meer details <FiChevronRight className="ml-1" />
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 gap-8"
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {mainServices.slice(2, 4).map((service, index) => (
                <motion.div 
                  key={service.title}
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.2 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredService(index + 2)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    link={service.link}
                    features={service.features}
                    delay={(index + 2) * 0.1}
                    imageSrc={service.imageSrc}
                    accentColor={service.accentColor}
                  />
                  <AnimatePresence>
                    {hoveredService === index + 2 && (
                      <motion.div 
                        className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="inline-flex items-center">
                          Klik voor meer details <FiChevronRight className="ml-1" />
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Certifications section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Onze Certificeringen
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p 
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Wij werken volgens de hoogste standaarden in de industrie om kwaliteit, veiligheid en duurzaamheid te garanderen
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert.name} 
                className="bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg text-center border border-gray-700 dark:border-gray-600 relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Background glow effect */}
                <div className={`absolute -inset-1 opacity-20 ${cert.bgColor} blur-xl rounded-full group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Icon with colored background */}
                <div className={`relative mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-4 ${cert.lightBg} ${cert.textColor}`}>
                  {cert.icon}
                </div>
                
                <div className="relative">
                  <div className="text-xl font-bold text-white mb-2">{cert.name}</div>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;