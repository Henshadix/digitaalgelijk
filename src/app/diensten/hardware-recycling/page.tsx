'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiTruck, FiPackage, FiShield, FiArrowRight, FiList, FiUsers, FiGlobe, FiAward, FiFileText, FiRefreshCw } from 'react-icons/fi';

export default function HardwareRecycling() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-green-950 via-green-900 to-green-800 overflow-hidden">
        {/* Achtergrond effecten */}
        <div className="absolute inset-0">
          {/* Gradient orbs */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-green-500/10 blur-[100px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-[100px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />

          {/* Circuit patroon */}
          <div className="absolute inset-0" style={{ opacity: 0.03 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="white"/>
                <path d="M50 50 L50 0 M50 50 L100 50 M50 50 L50 100 M50 50 L0 50" stroke="white" strokeWidth="0.5"/>
                <circle cx="50" cy="0" r="2" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="100" cy="50" r="2" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="50" cy="100" r="2" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="0" cy="50" r="2" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuit)"/>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-3xl mb-6 bg-gradient-to-br from-white/10 to-white/5 p-3 rounded-xl border border-white/10">
                <FiRefreshCw className="text-green-300" />
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hardware{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Recycling
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Duurzame en verantwoorde verwerking van uw IT-hardware met focus op milieubewust hergebruik en recycling.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-medium transition-all duration-200 group"
              >
                Vraag recycling aan
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium transition-all duration-200"
              >
                Bekijk ons proces
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Waarom kiezen voor{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-600 bg-clip-text text-transparent">
                Digitaalgelijk
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Wij bieden een complete oplossing voor het recyclen van uw IT-hardware, met focus op duurzaamheid en circulariteit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiGlobe className="text-green-600 dark:text-green-400" size={24} />,
                title: "Milieubewust",
                description: "Minimale impact op het milieu door maximaal hergebruik en verantwoorde recycling van materialen."
              },
              {
                icon: <FiShield className="text-emerald-600 dark:text-emerald-400" size={24} />,
                title: "Veilige Verwerking",
                description: "Gecertificeerde verwerking volgens de hoogste milieu- en veiligheidsstandaarden."
              },
              {
                icon: <FiTruck className="text-green-600 dark:text-green-400" size={24} />,
                title: "Gratis Ophaalservice",
                description: "Kosteloos ophalen van uw hardware op locatie, inclusief professionele verpakking en transport."
              },
              {
                icon: <FiFileText className="text-emerald-600 dark:text-emerald-400" size={24} />,
                title: "Uitgebreide Rapportage",
                description: "Gedetailleerde documentatie van het recyclingproces en materiaalverwerking."
              },
              {
                icon: <FiUsers className="text-green-600 dark:text-green-400" size={24} />,
                title: "Sociaal Verantwoord",
                description: "Samenwerking met sociale werkplaatsen voor demontage en verwerking."
              },
              {
                icon: <FiAward className="text-emerald-600 dark:text-emerald-400" size={24} />,
                title: "ISO-Gecertificeerd",
                description: "Werkend volgens ISO 14001 normen voor milieumanagementsystemen."
              }
            ].map((voordeel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gray-50 dark:bg-gray-700/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {voordeel.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {voordeel.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {voordeel.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proces Section */}
      <section id="process" className="py-20 bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Circuit patroon */}
          <div className="absolute inset-0" style={{ opacity: 0.03 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="circuit-2" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="white"/>
                <path d="M50 50 L50 0 M50 50 L100 50 M50 50 L50 100 M50 50 L0 50" stroke="white" strokeWidth="0.5"/>
                <circle cx="50" cy="0" r="2" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="100" cy="50" r="2" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="50" cy="100" r="2" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="0" cy="50" r="2" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuit-2)"/>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ons{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Recyclingproces
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Een transparant en duurzaam proces voor het recyclen van uw IT-hardware, van inzameling tot hergebruik.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiList className="text-green-400" size={24} />,
                title: "1. Inventarisatie",
                description: "We inventariseren uw hardware en maken een plan voor duurzame verwerking."
              },
              {
                icon: <FiTruck className="text-emerald-400" size={24} />,
                title: "2. Inzameling",
                description: "We halen uw hardware op en zorgen voor veilig transport naar onze verwerkingslocatie."
              },
              {
                icon: <FiPackage className="text-green-400" size={24} />,
                title: "3. Sortering",
                description: "Hardware wordt gesorteerd op type en mogelijkheden voor hergebruik of recycling."
              },
              {
                icon: <FiRefreshCw className="text-emerald-400" size={24} />,
                title: "4. Verwerking",
                description: "Duurzame verwerking volgens de hoogste milieunormen met uitgebreide rapportage."
              }
            ].map((stap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {stap.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {stap.title}
                </h3>
                <p className="text-gray-300">
                  {stap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Klaar om uw hardware te{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-600 bg-clip-text text-transparent">
                recyclen
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Neem vandaag nog contact met ons op voor een duurzame verwerking van uw IT-hardware.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-medium transition-all duration-200 group"
              >
                Start direct
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/certificeringen"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-all duration-200"
              >
                Bekijk onze certificeringen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 