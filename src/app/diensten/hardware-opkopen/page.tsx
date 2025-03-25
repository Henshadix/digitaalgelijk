'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMonitor, FiTruck, FiShield, FiCheckCircle, FiArrowRight, FiList, FiDollarSign, FiTag, FiTrello, FiPackage, FiClock, FiAward } from 'react-icons/fi';

export default function HardwareOpkopen() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
        {/* Achtergrond effecten */}
        <div className="absolute inset-0">
          {/* Gradient orbs */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px]"
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
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[100px]"
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
                <FiMonitor className="text-blue-300" />
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hardware{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Inkoop
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Maximale waarde voor uw gebruikte IT-apparatuur met onze professionele inkoopdienst. Veilig, duurzaam en met directe uitbetaling.
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
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium transition-all duration-200 group"
              >
                Vraag een offerte aan
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
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                Digitaalgelijk
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Wij bieden een complete oplossing voor het verkopen van uw IT-hardware, met focus op veiligheid, duurzaamheid en maximale waarde.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiDollarSign className="text-blue-600 dark:text-blue-400" size={24} />,
                title: "Beste Prijsgarantie",
                description: "Ontvang de hoogste marktwaarde voor uw hardware door onze directe verkoop aan eindgebruikers."
              },
              {
                icon: <FiShield className="text-green-600 dark:text-green-400" size={24} />,
                title: "Veilige Dataverwijdering",
                description: "Gecertificeerde dataverwijdering volgens de hoogste veiligheidsstandaarden met uitgebreide rapportage."
              },
              {
                icon: <FiTruck className="text-purple-600 dark:text-purple-400" size={24} />,
                title: "Gratis Ophaalservice",
                description: "Kosteloos ophalen van uw hardware op locatie, inclusief professionele verpakking en transport."
              },
              {
                icon: <FiClock className="text-amber-600 dark:text-amber-400" size={24} />,
                title: "Snelle Afhandeling",
                description: "Directe prijsopgave en snelle uitbetaling na akkoord, meestal binnen 24-48 uur."
              },
              {
                icon: <FiPackage className="text-indigo-600 dark:text-indigo-400" size={24} />,
                title: "Alle Hardware Welkom",
                description: "Van servers en laptops tot smartphones en netwerkapparatuur - wij kopen alle IT-hardware in."
              },
              {
                icon: <FiAward className="text-rose-600 dark:text-rose-400" size={24} />,
                title: "ISO-Gecertificeerd",
                description: "Werkend volgens ISO 9001 en 14001 normen voor kwaliteit en duurzaamheid."
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
      <section id="process" className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
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
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Inkoopproces
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Een transparant en efficiënt proces voor de inkoop van uw IT-hardware, van eerste contact tot uitbetaling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiList className="text-blue-400" size={24} />,
                title: "1. Inventarisatie",
                description: "Stuur ons een lijst van uw hardware of laat ons een inventarisatie uitvoeren op locatie."
              },
              {
                icon: <FiTag className="text-purple-400" size={24} />,
                title: "2. Waardebepaling",
                description: "Ontvang binnen 24 uur een gedetailleerde prijsopgave gebaseerd op actuele marktwaarden."
              },
              {
                icon: <FiTruck className="text-green-400" size={24} />,
                title: "3. Ophalen",
                description: "Na akkoord halen wij de hardware kosteloos op en zorgen voor veilig transport."
              },
              {
                icon: <FiTrello className="text-amber-400" size={24} />,
                title: "4. Afhandeling",
                description: "Controle, dataverwijdering en snelle uitbetaling volgens afgesproken voorwaarden."
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
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                verkopen
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Neem vandaag nog contact met ons op voor een vrijblijvende waardebepaling van uw IT-hardware.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium transition-all duration-200 group"
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