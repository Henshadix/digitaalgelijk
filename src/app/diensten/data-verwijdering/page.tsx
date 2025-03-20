'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiShield, FiFileText, FiLock, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function DataVerwijdering() {
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
                Data <span className="text-blue-600 dark:text-blue-400">Verwijdering</span>
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
                Gecertificeerde dataverwijdering volgens de hoogste veiligheidsnormen, met uitgebreide rapportage en certificering voor uw gemoedsrust en compliance.
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
                  src="/images/services/new/data-verwijdering-hero.jpg" 
                  alt="Veilige en gecertificeerde dataverwijdering" 
                  width={1200} 
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-white text-xl font-bold">GDPR-compliant dataverwijdering</div>
                  <div className="text-blue-200">Certificaat van verwijdering voor uw administratie</div>
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
              Waarom Kiezen voor Onze Dataverwijdering?
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Wij bieden een veilige en gecertificeerde dataverwijderingsservice die voldoet aan alle wettelijke eisen en industriestandaarden.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiShield className="w-7 h-7" />,
                title: "GDPR-Compliant",
                description: "Onze dataverwijderingsprocessen voldoen volledig aan de GDPR/AVG-regelgeving en andere relevante wetgeving."
              },
              {
                icon: <FiFileText className="w-7 h-7" />,
                title: "Certificering",
                description: "Na dataverwijdering ontvangt u een officieel certificaat als bewijs voor uw administratie en compliance."
              },
              {
                icon: <FiLock className="w-7 h-7" />,
                title: "Veilige Methoden",
                description: "Wij gebruiken geavanceerde technieken die voldoen aan militaire en industriële standaarden voor dataverwijdering."
              },
              {
                icon: <FiCheckCircle className="w-7 h-7" />,
                title: "Alle Opslagmedia",
                description: "Onze service is geschikt voor alle soorten opslagmedia, van harde schijven en SSD's tot servers en mobiele apparaten."
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
              Ons Dataverwijderingsproces
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Een veilig en transparant proces van begin tot eind, met volledige documentatie.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Inventarisatie",
                description: "We inventariseren alle apparatuur en opslagmedia die dataverwijdering vereisen en stellen een gedetailleerd plan op.",
                link: { text: "Plan Aanvragen", href: "/contact" }
              },
              {
                step: 2,
                title: "Dataverwijdering",
                description: "We voeren de dataverwijdering uit volgens de hoogste veiligheidsnormen, met meerdere overschrijvingen waar nodig.",
                tag: "ADISA Gecertificeerd"
              },
              {
                step: 3,
                title: "Rapportage & Certificering",
                description: "U ontvangt een gedetailleerd rapport en certificaat van dataverwijdering voor elk apparaat, inclusief serienummers.",
                tag: "Volledige Documentatie"
              }
            ].map((process, index) => (
              <motion.div 
                key={process.step}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">{process.step}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {process.description}
                </p>
                {process.link ? (
                  <Link href={process.link.href} className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2 hover:underline">
                    {process.link.text} <FiArrowRight />
                  </Link>
                ) : (
                  <div className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2">
                    {process.tag}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
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
              Onze Certificeringen & Standaarden
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Wij voldoen aan de hoogste internationale standaarden voor dataverwijdering en beveiliging.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "ADISA",
                description: "Asset Disposal & Information Security Alliance certificering voor veilige dataverwijdering."
              },
              {
                title: "ISO 27001",
                description: "Internationale standaard voor informatiebeveiliging en risicobeheer."
              },
              {
                title: "NIST 800-88",
                description: "Richtlijnen voor mediaverwijdering van het National Institute of Standards and Technology."
              },
              {
                title: "GDPR/AVG",
                description: "Volledige naleving van de Algemene Verordening Gegevensbescherming voor databescherming."
              }
            ].map((standard, index) => (
              <motion.div 
                key={standard.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 text-center h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">{standard.title}</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {standard.description}
                </p>
              </motion.div>
            ))}
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
              Bescherm uw gevoelige data
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Neem vandaag nog contact met ons op voor een veilige en gecertificeerde dataverwijderingsoplossing.
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