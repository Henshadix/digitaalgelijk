'use client';

import Link from 'next/link';
import { FiTruck, FiCheckCircle, FiPackage, FiMap, FiShield, FiArrowRight, FiList, FiClock, FiGlobe, FiCalendar, FiAward } from 'react-icons/fi';
import Image from 'next/image';
import PageWrapper from '@/components/client/PageWrapper';
import { motion } from 'framer-motion';

export default function LogistiekeDienstenPage() {
  const features = [
    {
      title: "Landelijke ophaalservice",
      description: "Wij halen uw hardware in heel Nederland op, ongeacht de hoeveelheid.",
      icon: <FiTruck className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Veilig transport",
      description: "Beveiligde voertuigen en gecertificeerd personeel voor maximale veiligheid.",
      icon: <FiShield className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Volledige tracking",
      description: "Real-time updates over de status en locatie van uw hardware.",
      icon: <FiMap className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Beveiligde opslag",
      description: "24/7 beveiligde en gecontroleerde opslagfaciliteiten voor uw apparatuur.",
      icon: <FiPackage className="h-6 w-6 text-blue-500" />
    }
  ];

  const logistics = [
    {
      title: "IT-apparatuur ophaalservice",
      description: "Wij halen uw IT-apparatuur op de door u gekozen locatie op, van enkele stuks tot volledige datacenters.",
      image: "/images/services/logistics-pickup.jpg"
    },
    {
      title: "Beveiligd transport",
      description: "Speciaal beveiligde voertuigen en procedures voor het transport van waardevolle of gevoelige apparatuur.",
      image: "/images/services/logistics-transport.jpg"
    },
    {
      title: "Tijdelijke hardware opslag",
      description: "Beveiligde opslagfaciliteiten voor uw hardware bij verhuizing, renovatie of andere tijdelijke situaties.",
      image: "/images/services/logistics-storage.jpg"
    },
    {
      title: "Inventarisatie en asset tracking",
      description: "Complete inventarisatie en tracking van uw IT-assets tijdens transport en opslag.",
      image: "/images/services/logistics-inventory.jpg"
    }
  ];

  return (
    <PageWrapper>
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-amber-950 via-amber-900 to-amber-800 overflow-hidden">
          {/* Achtergrond effecten */}
          <div className="absolute inset-0">
            {/* Gradient orbs */}
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px]"
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
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-orange-500/10 blur-[100px]"
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
                  <FiTruck className="text-amber-300" />
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Logistieke{" "}
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Diensten
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Professionele logistieke oplossingen voor uw IT-hardware. Veilig transport en opslag met complete tracking.
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
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-medium transition-all duration-200 group"
                >
                  Vraag transport aan
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
        
        {/* Features Section */}
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
                <span className="bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600 bg-clip-text text-transparent">
                  Digitaalgelijk
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Wij bieden complete logistieke oplossingen voor uw IT-hardware, met focus op veiligheid en efficiëntie.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FiTruck className="text-amber-600 dark:text-amber-400" size={24} />,
                  title: "Landelijke Dekking",
                  description: "Transport door heel Nederland met eigen transportmiddelen en professionele chauffeurs."
                },
                {
                  icon: <FiShield className="text-orange-600 dark:text-orange-400" size={24} />,
                  title: "Verzekerd Transport",
                  description: "Volledig verzekerd transport van uw kostbare IT-apparatuur met track & trace."
                },
                {
                  icon: <FiPackage className="text-amber-600 dark:text-amber-400" size={24} />,
                  title: "Professionele Verpakking",
                  description: "Speciale verpakkingsmaterialen voor veilig transport van gevoelige apparatuur."
                },
                {
                  icon: <FiMap className="text-orange-600 dark:text-orange-400" size={24} />,
                  title: "Real-time Tracking",
                  description: "Volg uw zending in real-time met ons geavanceerde tracking systeem."
                },
                {
                  icon: <FiCalendar className="text-amber-600 dark:text-amber-400" size={24} />,
                  title: "Flexibele Planning",
                  description: "Transport op afspraak met flexibele planning en snelle reactietijd."
                },
                {
                  icon: <FiAward className="text-orange-600 dark:text-orange-400" size={24} />,
                  title: "Gecertificeerd",
                  description: "Transport volgens de hoogste kwaliteits- en veiligheidsstandaarden."
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
        
        {/* Services Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Onze logistieke diensten
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
                Van ophaalservice tot beveiligde opslag, wij bieden een complete oplossing voor al uw 
                IT-logistieke behoeften.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {logistics.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col"
                >
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-900/40 flex items-center justify-center">
                      <div className="text-6xl text-white opacity-80">
                        <FiTruck />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center text-blue-600 dark:text-blue-400">
                        <FiCheckCircle className="mr-2" />
                        <span className="font-medium">Gegarandeerde veiligheid</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section id="process" className="py-20 bg-gradient-to-br from-amber-950 via-amber-900 to-amber-800 text-white relative overflow-hidden">
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
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Logistiek Proces
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Een efficiënt en veilig proces voor het transport van uw IT-hardware.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FiList className="text-amber-400" size={24} />,
                  title: "1. Aanvraag",
                  description: "Plan uw transport en ontvang direct een offerte op maat."
                },
                {
                  icon: <FiPackage className="text-orange-400" size={24} />,
                  title: "2. Verpakking",
                  description: "Professionele verpakking van uw hardware voor veilig transport."
                },
                {
                  icon: <FiTruck className="text-amber-400" size={24} />,
                  title: "3. Transport",
                  description: "Veilig transport door heel Nederland met real-time tracking."
                },
                {
                  icon: <FiClock className="text-orange-400" size={24} />,
                  title: "4. Levering",
                  description: "Stipte levering op de afgesproken locatie en tijdstip."
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
                Klaar om uw transport te{" "}
                <span className="bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-600 bg-clip-text text-transparent">
                  plannen
                </span>
                ?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Neem vandaag nog contact met ons op voor een transport op maat.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-medium transition-all duration-200 group"
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
    </PageWrapper>
  );
} 
