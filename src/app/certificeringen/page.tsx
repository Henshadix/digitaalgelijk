'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiShield, FiRefreshCw, FiAward, FiCheck, FiFileText, FiArrowRight, FiLayers, FiTrendingUp } from 'react-icons/fi';

export default function Certificeringen() {
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
              className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Kwaliteit & Compliance
            </motion.div>
              
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Onze <span className="text-blue-600 dark:text-blue-400">Certificeringen</span>
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
              Bij Digitaalgelijk werken we volgens de hoogste internationale standaarden. 
              Onze certificeringen waarborgen de kwaliteit, veiligheid en duurzaamheid van onze diensten 
              en versterken ons commitment aan verantwoord ondernemen.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Primaire Certificeringen */}
      <section className="py-20 bg-white dark:bg-gray-900">
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
              Primaire Certificeringen
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Deze certificeringen vormen de basis van onze dienstverlening en garanderen dat onze processen 
              voldoen aan de hoogste standaarden in de industrie.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden p-6 border border-gray-100 dark:border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FiShield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">ISO 27001</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                Deze certificering voor informatiebeveiliging garandeert dat wij alle data volgens de hoogste beveiligingsstandaarden verwerken.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
                  <span className="font-medium">Geldigheid:</span> Doorlopend geauditeerd
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden p-6 border border-gray-100 dark:border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FiRefreshCw className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">WEEELABEX</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                Deze Europese standaard voor elektronisch afval verzekert dat onze recyclingprocessen milieuvriendelijk en compliant zijn.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <p className="text-sm text-green-700 dark:text-green-300 text-center">
                  <span className="font-medium">Geldigheid:</span> Doorlopend geauditeerd
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden p-6 border border-gray-100 dark:border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FiAward className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">NIST 800-88</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                Deze internationale standaard waarborgt dat onze dataverwijdering voldoet aan de strengste veiligheidseisen op de markt.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                <p className="text-sm text-purple-700 dark:text-purple-300 text-center">
                  <span className="font-medium">Toepassingsgebied:</span> Alle dataverwijderingsdiensten
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Aanvullende Certificeringen Section */}
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
              Aanvullende Certificeringen & Compliancy
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Naast onze primaire certificeringen voldoen we aan diverse andere kwaliteits- en veiligheidsstandaarden.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center">
                  <FiFileText className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">ISO 9001</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Internationale standaard voor kwaliteitsmanagement die zorgt voor consistente processen en continue verbetering.
                </p>
              </div>
            </div>

            <div className="flex p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center">
                  <FiLayers className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">ISO 14001</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Milieumanagement standaard die zorgt voor het minimaliseren van onze ecologische voetafdruk.
                </p>
              </div>
            </div>

            <div className="flex p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center">
                  <FiShield className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">AVG/GDPR</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Volledige naleving van de Europese privacywetgeving voor optimale bescherming van persoonsgegevens.
                </p>
              </div>
            </div>

            <div className="flex p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg flex items-center justify-center">
                  <FiCheck className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">R2</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Responsible Recycling standaard voor verantwoorde verwerking van elektronisch afval.
                </p>
              </div>
            </div>

            <div className="flex p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-lg flex items-center justify-center">
                  <FiRefreshCw className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">e-Stewards</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Wereldwijde standaard voor verantwoord beheer en recycling van elektronisch afval.
                </p>
              </div>
            </div>

            <div className="flex p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg flex items-center justify-center">
                  <FiTrendingUp className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">CO2-Prestatieladder</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Nederlandse duurzaamheidscertificering voor CO2-reductie in bedrijfsprocessen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
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
              Voordelen van Gecertificeerde Processen
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Onze certificeringen bieden concrete voordelen voor uw organisatie en dragen bij aan uw compliance en duurzaamheidsdoelstellingen.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Voor Uw Organisatie</h3>
              <ul className="space-y-4">
                {[
                  "Zekerheid van compliance met internationale wetgeving",
                  "Juridisch bewijs van verantwoorde dataverwijdering",
                  "Aantoonbare bijdrage aan duurzaamheidsdoelstellingen",
                  "Hogere beveiliging van gevoelige bedrijfsgegevens",
                  "Ondersteuning bij audits en compliance rapportages"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center">
                      <FiCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Voor het Milieu</h3>
              <ul className="space-y-4">
                {[
                  "Minimale belasting van het milieu door verantwoorde recycling",
                  "Maximaal hergebruik van grondstoffen en componenten",
                  "Drastische vermindering van elektronisch afval",
                  "Lagere CO2-uitstoot door geoptimaliseerde processen",
                  "Bijdrage aan de circulaire economie"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-purple-500 dark:bg-purple-600 rounded-full flex items-center justify-center">
                      <FiCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
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
              Wilt u meer weten over onze certificeringen?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Neem contact op met onze experts voor gedetailleerde informatie of een vrijblijvend adviesgesprek.
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
          </div>
        </motion.div>
      </section>
    </main>
  );
} 