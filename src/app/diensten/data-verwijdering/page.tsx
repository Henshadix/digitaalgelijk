'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiShield, FiTruck, FiLock, FiArrowRight, FiList, FiCheckCircle, FiFileText, FiServer, FiDatabase, FiAward, FiClock, FiUsers } from 'react-icons/fi';

export default function DataVerwijdering() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 overflow-hidden">
        {/* Achtergrond effecten */}
        <div className="absolute inset-0">
          {/* Gradient orbs */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[100px]"
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
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-[100px]"
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
                <FiShield className="text-purple-300" />
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Data{" "}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Verwijdering
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Veilige en gecertificeerde dataverwijdering volgens de hoogste beveiligingsstandaarden. Bescherm uw gevoelige informatie.
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
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-medium transition-all duration-200 group"
              >
                Vraag dataverwijdering aan
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
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
                Digitaalgelijk
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Wij bieden een complete oplossing voor het veilig verwijderen van uw data, met focus op beveiliging en compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiLock className="text-purple-600 dark:text-purple-400" size={24} />,
                title: "Gecertificeerde Verwijdering",
                description: "Dataverwijdering volgens internationale standaarden met certificering per apparaat."
              },
              {
                icon: <FiShield className="text-indigo-600 dark:text-indigo-400" size={24} />,
                title: "GDPR Compliant",
                description: "Volledig conform AVG/GDPR wetgeving en andere relevante privacyregels."
              },
              {
                icon: <FiTruck className="text-purple-600 dark:text-purple-400" size={24} />,
                title: "Veilig Transport",
                description: "Beveiligd transport van uw hardware met track & trace en verzekering."
              },
              {
                icon: <FiFileText className="text-indigo-600 dark:text-indigo-400" size={24} />,
                title: "Uitgebreide Rapportage",
                description: "Gedetailleerde rapportage van het verwijderingsproces per apparaat."
              },
              {
                icon: <FiServer className="text-purple-600 dark:text-purple-400" size={24} />,
                title: "Alle Media Types",
                description: "Ondersteuning voor alle soorten opslagmedia, van HDD tot SSD en servers."
              },
              {
                icon: <FiAward className="text-indigo-600 dark:text-indigo-400" size={24} />,
                title: "ISO-Gecertificeerd",
                description: "Werkend volgens ISO 27001 voor informatiebeveiliging."
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
      <section id="process" className="py-20 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 text-white relative overflow-hidden">
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
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Verwijderingsproces
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Een veilig en transparant proces voor het verwijderen van uw gevoelige data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiList className="text-purple-400" size={24} />,
                title: "1. Inventarisatie",
                description: "We inventariseren uw hardware en bepalen de juiste verwijderingsmethode."
              },
              {
                icon: <FiTruck className="text-indigo-400" size={24} />,
                title: "2. Veilig Transport",
                description: "Beveiligd transport van uw hardware naar onze gecertificeerde faciliteit."
              },
              {
                icon: <FiDatabase className="text-purple-400" size={24} />,
                title: "3. Dataverwijdering",
                description: "Gecertificeerde dataverwijdering volgens de hoogste standaarden."
              },
              {
                icon: <FiFileText className="text-indigo-400" size={24} />,
                title: "4. Certificering",
                description: "Uitgebreide rapportage en certificering van de dataverwijdering."
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
              Klaar om uw data veilig te{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
                verwijderen
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Neem vandaag nog contact met ons op voor een veilige verwijdering van uw gevoelige data.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-medium transition-all duration-200 group"
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