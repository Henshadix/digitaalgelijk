'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiAward, FiArrowRight, FiRefreshCw, FiCheck, FiShield, FiHeart } from 'react-icons/fi';

export default function OverOns() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: custom * 0.15,
        ease: "easeOut" 
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Team members
  const teamMembers = [
    {
      name: 'Jan de Vries',
      role: 'CEO & Oprichter',
      bio: 'Jan heeft meer dan 15 jaar ervaring in de IT-sector en is gepassioneerd over duurzaamheid en circulaire economie. Hij richtte Digitaalgelijk op in 2015 met de missie om de IT-industrie duurzamer te maken.',
      imageSrc: '/images/team/jan.jpg',
    },
    {
      name: 'Lisa Janssen',
      role: 'COO',
      bio: 'Lisa is verantwoordelijk voor de dagelijkse operaties en zorgt ervoor dat alle processen soepel verlopen. Met haar achtergrond in supply chain management optimaliseert ze onze logistieke processen.',
      imageSrc: '/images/team/lisa.jpg',
    },
    {
      name: 'Mohammed El Amrani',
      role: 'CTO',
      bio: 'Mohammed leidt ons technische team en is verantwoordelijk voor de ontwikkeling van onze dataverwijderingsprocessen. Hij heeft een achtergrond in cybersecurity en dataprotectie.',
      imageSrc: '/images/team/mohammed.jpg',
    },
    {
      name: 'Sophie van Dijk',
      role: 'Sustainability Officer',
      bio: 'Sophie zorgt ervoor dat duurzaamheid centraal staat in alles wat we doen. Ze ontwikkelt onze duurzaamheidsstrategieën en rapporteert over onze milieu-impact.',
      imageSrc: '/images/team/sophie.jpg',
    }
  ];

  // Company values
  const values = [
    {
      title: "Duurzaamheid",
      description: "Maximale herbruikbaarheid en minimale milieu-impact bij al onze processen.",
      icon: <FiRefreshCw className="w-6 h-6" />,
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
    },
    {
      title: "Betrouwbaarheid",
      description: "Transparante processen en afspraken waar u op kunt rekenen.",
      icon: <FiCheck className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
      title: "Veiligheid",
      description: "Gecertificeerde dataverwijdering volgens de hoogste standaarden.",
      icon: <FiShield className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
    }
  ];

  // Simplified milestones
  const milestones = [
    {
      year: '2015',
      title: 'Oprichting Digitaalgelijk',
      description: 'Start van onze missie voor duurzame IT-oplossingen.'
    },
    {
      year: '2019',
      title: 'State-of-the-art Faciliteit',
      description: 'Opening van ons geavanceerde recyclingcentrum.'
    },
    {
      year: '2022',
      title: 'Duurzame Mijlpaal',
      description: '100.000+ apparaten verwerkt en 10.000 bomen geplant.'
    }
  ];

  return (
    <main className="flex flex-col min-h-screen relative">
      {/* Decoratieve achtergrond elementen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl"></div>
        
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
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div 
                className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6"
                variants={itemVariants}
              >
                Ons Verhaal
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                variants={itemVariants}
              >
                Over <span className="text-blue-600 dark:text-blue-400">Digitaalgelijk</span>
              </motion.h1>
              
              <motion.div
                className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded mb-6"
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
              
              <motion.p 
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
                variants={itemVariants}
              >
                Wij zijn gespecialiseerd in duurzame IT-oplossingen: het opkopen van hardware, 
                veilige dataverwijdering en milieuvriendelijke recycling. 
                Onze missie is bijdragen aan een circulaire economie en de milieu-impact verminderen.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image 
                    src="/images/about/office.jpg" 
                    alt="Digitaalgelijk kantoor"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-white text-xl font-bold">Ons hoofdkantoor</div>
                  <div className="text-blue-200">Duurzaamheid in praktijk</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Combined and simplified */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Visie & Missie
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <FiTarget className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Onze Missie</h3>
              <p className="text-gray-700 dark:text-gray-300">
                De IT-industrie duurzamer maken door circulaire oplossingen te bieden. 
                We maximaliseren hergebruik, beveiligen data en minimaliseren de ecologische voetafdruk.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <FiAward className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Onze Visie</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Een toekomst waarin IT-apparatuur volledig circulair is, materialen eindeloos worden hergebruikt
                en elektronisch afval tot het verleden behoort.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Simplified with better visuals */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Kernwaarden
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div 
                key={value.title}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`p-6 flex flex-col items-center text-center`}>
                  <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section - More visual timeline */}
      <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Reis
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={milestone.year}
                className="flex items-center mb-16 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'order-last text-left pl-8'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                </div>
                
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white dark:bg-blue-500 rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10 relative">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-blue-200 dark:bg-blue-700"></div>
                  )}
                </div>
                
                <div className={`flex-1 ${index % 2 === 0 ? 'order-last text-left pl-8' : 'text-right pr-8'}`}>
                  <div className={`text-lg font-semibold ${index % 2 === 0 ? 'text-left' : 'text-right'} text-blue-600 dark:text-blue-400`}>
                    {milestone.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificeringen Section */}
      <section id="certificeringen" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Certificeringen
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Bij Digitaalgelijk voldoen wij aan de hoogste internationale standaarden voor kwaliteit, veiligheid en duurzaamheid.
            </p>
          </motion.div>
          
          <div className="text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/certificeringen" className="px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto">
                Bekijk al onze certificeringen <FiArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        </div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar voor duurzame IT-oplossingen?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ontdek hoe Digitaalgelijk uw bedrijf kan helpen met verantwoord IT-asset management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors flex items-center gap-2">
                  Contact Opnemen <FiArrowRight />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link href="/diensten" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors flex items-center gap-2">
                  Onze Diensten <FiArrowRight />
                </Link>
              </motion.div>
            </div>
            <div className="mt-8 text-blue-200 flex items-center justify-center">
              <FiHeart className="mr-2" />
              <span>Met passie voor duurzaamheid</span>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
} 