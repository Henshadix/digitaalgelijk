'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiHeart, FiAward, FiArrowRight, FiCheck, FiTrendingUp, FiGlobe } from 'react-icons/fi';
import CertificationBadge from '@/components/certifications/CertificationBadge';

export default function OverOns() {
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
                <FiUsers className="text-blue-300" />
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Over{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Digitaalgelijk
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Wij zijn experts in duurzame IT-oplossingen met een focus op circulariteit en maatschappelijke impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missie & Visie Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="bg-blue-50 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <FiTarget className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Onze Missie</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Het creëren van een duurzame toekomst door het optimaliseren van de IT-levenscyclus. 
                We streven ernaar om e-waste te minimaliseren en de circulaire economie te bevorderen 
                door professionele diensten aan te bieden voor hardware recycling en hergebruik.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="bg-blue-50 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <FiHeart className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Onze Visie</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Een wereld waarin IT-hardware op een verantwoorde manier wordt gebruikt, hergebruikt 
                en gerecycled. We zien een toekomst waarin organisaties bewust omgaan met hun 
                IT-middelen en waarbij duurzaamheid voorop staat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kernwaarden Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Onze{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Kernwaarden
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Deze waarden vormen de basis van alles wat we doen en hoe we omgaan met onze klanten en het milieu.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FiCheck className="text-blue-400" size={24} />,
                title: "Betrouwbaarheid",
                description: "We komen onze beloftes na en handelen met integriteit."
              },
              {
                icon: <FiGlobe className="text-indigo-400" size={24} />,
                title: "Duurzaamheid",
                description: "Milieubewust handelen staat centraal in al onze activiteiten."
              },
              {
                icon: <FiTrendingUp className="text-blue-400" size={24} />,
                title: "Innovatie",
                description: "We blijven onszelf verbeteren en zoeken naar nieuwe oplossingen."
              },
              {
                icon: <FiUsers className="text-indigo-400" size={24} />,
                title: "Klantgerichtheid",
                description: "De behoeften van onze klanten staan altijd voorop."
              }
            ].map((waarde, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {waarde.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {waarde.title}
                </h3>
                <p className="text-gray-300">
                  {waarde.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificeringen Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                Certificeringen
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We voldoen aan de hoogste standaarden in onze industrie.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "ISO 14001",
                subtitle: "Milieumanagement",
                colorScheme: "green" as const,
                description: "Gecertificeerd voor milieumanagementsystemen"
              },
              {
                title: "ISO 27001",
                subtitle: "Informatiebeveiliging",
                colorScheme: "purple" as const,
                description: "Gecertificeerd voor informatiebeveiliging"
              },
              {
                title: "ISO 9001",
                subtitle: "Kwaliteitsmanagement",
                colorScheme: "blue" as const,
                description: "Gecertificeerd voor kwaliteitsmanagement"
              }
            ].map((certificering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
              >
                <div className="flex justify-center mb-6">
                  <CertificationBadge
                    title={certificering.title}
                    subtitle={certificering.subtitle}
                    colorScheme={certificering.colorScheme}
                    size="lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                  {certificering.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {certificering.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om samen te{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                werken
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Neem contact met ons op en ontdek hoe we u kunnen helpen met duurzame IT-oplossingen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium transition-all duration-200 group"
              >
                Neem contact op
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/diensten"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium transition-all duration-200"
              >
                Bekijk onze diensten
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 