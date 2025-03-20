'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiRefreshCw, FiGlobe, FiAward, FiBarChart2, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function HardwareRecycling() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      }
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900/30 overflow-hidden">
        {/* Decorative background elements */}
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-200 dark:bg-blue-800 opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-blue-200 dark:bg-blue-800 opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.12, 0.1],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/10 blur-3xl rounded-full transform -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6"
              >
                Onze Diensten
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Hardware <span className="text-blue-600 dark:text-blue-400">Recycling</span>
              </motion.h1>
              
              <motion.div
                className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded mb-6"
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
              >
                Duurzame recycling van IT-apparatuur met maximaal hergebruik van materialen en minimale milieubelasting. Onze circulaire aanpak zorgt voor een significante CO2-reductie.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <Link href="/contact" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    Offerte Aanvragen <FiArrowRight className="ml-1" />
                  </Link>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <Link href="/diensten" className="w-full px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    Alle Diensten <FiArrowRight className="ml-1" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/services/new/hardware-recycling-pro.jpg" 
                  alt="Duurzame hardware recycling en hergebruik" 
                  width={1200} 
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-white text-xl font-bold">Duurzame hardware recycling</div>
                  <div className="text-blue-200">Minimale milieu-impact, maximaal hergebruik</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Waarom Kiezen voor Onze Recyclingdiensten?
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Wij bieden een duurzame en verantwoorde manier om uw overtollige IT-apparatuur te recyclen, met certificering en transparante rapportage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiRefreshCw className="w-7 h-7" />,
                title: "99% Hergebruik",
                description: "We streven naar maximaal hergebruik van materialen, met een hergebruikspercentage van 99% voor alle verwerkte apparatuur."
              },
              {
                icon: <FiGlobe className="w-7 h-7" />,
                title: "CO2-Reductie",
                description: "Onze recyclingprocessen zorgen voor een aanzienlijke CO2-reductie in vergelijking met conventionele verwerkingsmethoden."
              },
              {
                icon: <FiAward className="w-7 h-7" />,
                title: "ISO 14001",
                description: "Ons recyclingproces is ISO 14001 gecertificeerd, wat garandeert dat we voldoen aan internationale milieustandaarden."
              },
              {
                icon: <FiBarChart2 className="w-7 h-7" />,
                title: "Transparante Rapportage",
                description: "U ontvangt gedetailleerde rapportages over de verwerking van uw hardware, inclusief materiaalstromen en milieuvoordelen."
              }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-300 dark:bg-blue-700 opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ons Recyclingproces
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Een transparant en duurzaam proces, van inzameling tot certificering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">Inzameling & Sortering</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We halen uw apparatuur op en sorteren deze op type, materiaal en herbruikbaarheid in onze gespecialiseerde faciliteit.
              </p>
              <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2 hover:underline">
                Ophaalservice Aanvragen <FiArrowRight />
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">Demontage & Verwerking</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We demonteren de apparatuur zorgvuldig en scheiden alle materialen voor optimale recycling en hergebruik.
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2">
                Gespecialiseerde Technieken
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">Hergebruik & Rapportage</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                De gescheiden materialen worden hergebruikt in nieuwe producten. U ontvangt een gedetailleerd duurzaamheidsrapport.
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2">
                Circulaire Economie
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Uw Milieu-impact
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Door te kiezen voor onze recyclingdienst draagt u actief bij aan een duurzamere wereld.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CO2-Besparing</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Voor elke ton gerecyclede elektronica bespaart u gemiddeld:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">1.5 ton</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">CO2-uitstoot bespaard</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">3000 L</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Water bespaard</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">2 MWh</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Energie bespaard</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">0.8 ton</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Grondstoffen bespaard</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Duurzaamheidsrapportage</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Na recycling ontvangt u een gedetailleerd rapport met:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 mt-1">
                    <FiCheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Exacte hoeveelheid gerecyclede materialen per type</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 mt-1">
                    <FiCheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Berekende CO2-besparing en milieu-impact</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 mt-1">
                    <FiCheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Certificaat voor uw duurzaamheidsverslaglegging</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mr-3 mt-1">
                    <FiCheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Bijdrage aan UN Sustainable Development Goals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
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
              Klaar om duurzaam te recyclen?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Neem vandaag nog contact met ons op voor een verantwoorde verwerking van uw IT-apparatuur.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors flex items-center gap-2">
                  Offerte Aanvragen <FiArrowRight />
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Link href="tel:+31201234567" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors">
                  Bel Ons
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
} 