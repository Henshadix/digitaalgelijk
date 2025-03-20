'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiAlertTriangle, FiMail } from 'react-icons/fi';

export default function Vacatures() {
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center">
                <FiClock className="mr-2" />
                <span>Binnenkort Beschikbaar</span>
              </div>
            </motion.div>
              
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Onze <span className="text-blue-600 dark:text-blue-400">Vacatures</span>
            </motion.h1>
              
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded mb-8 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
              
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Onze vacaturepagina is momenteel in ontwikkeling. Wij werken hard om deze 
              zo snel mogelijk beschikbaar te maken met alle carrièremogelijkheden binnen Digitaalgelijk.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-8 mb-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pagina in ontwikkeling</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Onze vacaturepagina is momenteel nog niet beschikbaar. We werken er hard aan om deze zo snel mogelijk
                live te hebben met alle carrièremogelijkheden binnen Digitaalgelijk.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Kom binnenkort terug om te zien welke mogelijkheden er zijn om bij ons team te komen werken!
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Alvast interesse in werken bij Digitaalgelijk?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Stuur ons gerust een open sollicitatie. We zijn altijd op zoek naar talentvolle mensen
                die onze missie voor duurzame IT-oplossingen delen.
              </p>
              <div className="flex justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center gap-2">
                    <FiMail className="mr-2" /> 
                    Contact Opnemen
                  </Link>
                </motion.div>
              </div>
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
              Ontdek onze diensten
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Leer meer over wat Digitaalgelijk kan betekenen voor uw bedrijf en duurzame IT-oplossingen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link href="/diensten" className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors flex items-center gap-2">
                  Onze Diensten <FiArrowRight />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link href="/over-ons" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors flex items-center gap-2">
                  Over Ons <FiArrowRight />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
} 