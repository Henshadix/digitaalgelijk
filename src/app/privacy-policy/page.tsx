'use client';

import { FiLock, FiFileText, FiCheckCircle, FiShield, FiEye, FiClock, FiUsers, FiGlobe, FiMail, FiPhone, FiArrowRight, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
  // Animatie varianten
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: custom * 0.1,
        ease: "easeOut" 
      }
    })
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: custom * 0.1
      }
    })
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
          <motion.div 
            className="mb-16 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
          >
            <div className="inline-block mx-auto mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <FiLock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy<span className="text-blue-600 dark:text-blue-400">beleid</span>
            </h1>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded"
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <motion.p 
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4"
              variants={fadeInUp}
              custom={1}
            >
              Wij hechten veel waarde aan uw privacy en zorgen ervoor dat uw persoonlijke gegevens met de grootste zorg worden behandeld.
            </motion.p>
          </motion.div>
        </div>
      </section>
          
      {/* Privacy Policy Content Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative">
            {/* Zijbalk met snelkoppelingen (desktop) */}
            <div className="hidden lg:block absolute left-[-200px] top-0 w-[180px]">
              <div className="sticky top-32 space-y-2">
                <motion.div 
                  className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium"
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  In dit document:
                </motion.div>
                {['Inleiding', 'Gegevens', 'Gebruik', 'Bewaartermijn', 'Delen', 'Beveiliging', 'Rechten', 'Cookies', 'Wijzigingen', 'Contact'].map((item, index) => (
                  <motion.a 
                    key={item}
                    href={`#section-${index + 1}`} 
                    className="flex items-center p-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md group transition-colors"
                    variants={fadeIn}
                    custom={index * 0.1 + 1.3}
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-2 text-xs">
                      {index + 1}
                    </span>
                    <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Hoofdinhoud */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-10 relative z-10 border border-gray-100 dark:border-gray-700"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {/* Sectie 1: Inleiding */}
              <div id="section-1" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FiFileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Inleiding</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Welkom bij Digitaalgelijk. Wij hechten veel waarde aan uw privacy en zorgen ervoor dat uw persoonlijke gegevens met de grootste zorg worden behandeld. In dit privacybeleid leggen we uit welke gegevens we verzamelen, waarom we deze verzamelen en hoe we ermee omgaan.
                  </p>
                </div>
              </div>

              {/* Sectie 2: Welke Gegevens Verzamelen Wij? */}
              <div id="section-2" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FiUsers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Welke Gegevens Verzamelen Wij?</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Wij kunnen de volgende persoonsgegevens verzamelen wanneer u onze website bezoekt of gebruikmaakt van onze diensten:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {[
                      "Naam en contactgegevens (zoals e-mailadres, telefoonnummer, adres)",
                      "Bedrijfsgegevens (zoals bedrijfsnaam, KvK-nummer)",
                      "Betalingsinformatie (bij transacties)",
                      "Apparaatgegevens (bij hardware-inkoop, zoals serienummers en specificaties)",
                      "IP-adres en gebruiksgegevens (zoals browserinformatie, bezochte pagina's)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
                        <FiCheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sectie 3: Hoe en Waarom Gebruiken Wij Uw Gegevens? */}
              <div id="section-3" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FiEye className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Hoe en Waarom Gebruiken Wij Uw Gegevens?</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Wij gebruiken uw persoonsgegevens voor de volgende doeleinden:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start bg-green-50 dark:bg-green-900/10 rounded-lg p-4">
                      <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Uitvoering van diensten</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Voor het verwerken van hardware-inkoop, het verwijderen van data en het uitvoeren van transacties.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start bg-green-50 dark:bg-green-900/10 rounded-lg p-4">
                      <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Communicatie</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Om u te informeren over offertes, facturen en klantenservice.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start bg-green-50 dark:bg-green-900/10 rounded-lg p-4">
                      <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Marketing en nieuwsbrieven</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Alleen als u hier toestemming voor heeft gegeven.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start bg-green-50 dark:bg-green-900/10 rounded-lg p-4">
                      <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Beveiliging en fraudepreventie</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Om onze systemen en diensten te beschermen tegen misbruik.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sectie 4: Hoe Lang Bewaren Wij Uw Gegevens? */}
              <div id="section-4" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <FiClock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Hoe Lang Bewaren Wij Uw Gegevens?</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Wij bewaren uw gegevens niet langer dan nodig is voor het doel waarvoor ze zijn verzameld:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-amber-50 dark:bg-amber-900/10 rounded-lg p-4">
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Offerteaanvragen en communicatie</div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">Maximaal 1 jaar.</div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/10 rounded-lg p-4">
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Transactie- en factuurgegevens</div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">7 jaar (wettelijke bewaarplicht).</div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/10 rounded-lg p-4">
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Hardware-informatie</div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">Maximaal 6 maanden na verwerking.</div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/10 rounded-lg p-4">
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Nieuwsbriefgegevens</div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">Totdat u zich uitschrijft.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sectie 5: Delen van Gegevens met Derden */}
              <div id="section-5" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FiGlobe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Delen van Gegevens met Derden</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Wij delen uw gegevens niet met derden, tenzij dit noodzakelijk is voor onze dienstverlening of wettelijk verplicht is. Dit kan zijn:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Betalingsproviders (voor verwerking van betalingen)",
                      "Logistieke partners (voor transport en afhaling van hardware)",
                      "Overheidsinstanties (indien wettelijk vereist)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center bg-blue-50 dark:bg-blue-900/10 rounded-lg p-3">
                        <FiCheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                        <p className="text-gray-700 dark:text-gray-300">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sectie 6: Beveiliging van Uw Gegevens */}
              <div id="section-6" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <FiShield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Beveiliging van Uw Gegevens</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Wij nemen passende maatregelen om uw gegevens te beschermen tegen verlies, misbruik en onbevoegde toegang. Dit omvat:
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 rounded-lg p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-3">
                        <div className="w-12 h-12 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-3">
                          <FiLock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Versleutelde opslag</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Uw gegevens worden versleuteld opgeslagen
                        </p>
                      </div>
                      <div className="text-center p-3">
                        <div className="w-12 h-12 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-3">
                          <FiShield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Beveiligde verbindingen</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          SSL/TLS-versleuteling voor alle verbindingen
                        </p>
                      </div>
                      <div className="text-center p-3">
                        <div className="w-12 h-12 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-3">
                          <FiUsers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Toegangscontrole</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Strikt wachtwoordbeheer en beperkte toegang
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sectie 7: Uw Rechten */}
              <div id="section-7" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FiUsers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Uw Rechten</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    U heeft het recht om:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Inzage te vragen in uw persoonsgegevens",
                      "Correctie of verwijdering van uw gegevens aan te vragen",
                      "Bezwaar te maken tegen verwerking van uw gegevens",
                      "Uw toestemming in te trekken (voor bijvoorbeeld nieuwsbrieven)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center bg-purple-50 dark:bg-purple-900/10 rounded-lg p-3">
                        <FiCheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0" />
                        <p className="text-gray-700 dark:text-gray-300">{item}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    U kunt deze rechten uitoefenen door contact met ons op te nemen via info@digitaalgelijk.nl.
                  </p>
                </div>
              </div>
              
              {/* Sectie 8: Cookies en Tracking */}
              <div id="section-8" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FiGlobe className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">8. Cookies en Tracking</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Onze website maakt gebruik van cookies om uw gebruikerservaring te verbeteren. Wij gebruiken:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4">
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Functionele cookies</div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">Nodig voor de werking van de website</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4">
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Analytische cookies</div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">Voor statistieken en websiteverbetering</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4">
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Marketingcookies</div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">Alleen als u hiervoor toestemming geeft</div>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    U kunt uw cookievoorkeuren aanpassen via uw browserinstellingen.
                  </p>
                </div>
              </div>
              
              {/* Sectie 9: Wijzigingen in Dit Privacybeleid */}
              <div id="section-9" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <FiFileText className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">9. Wijzigingen in Dit Privacybeleid</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Wij behouden ons het recht voor om dit privacybeleid te wijzigen. De meest recente versie is altijd te vinden op onze website.
                  </p>
                </div>
              </div>
              
              {/* Sectie 10: Contactgegevens */}
              <div id="section-10" className="mb-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FiLock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">10. Contactgegevens</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Heeft u vragen over dit privacybeleid? Neem dan contact met ons op:
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1 text-gray-700 dark:text-gray-300">
                        <p className="font-semibold text-gray-900 dark:text-white">Digitaalgelijk</p>
                        <p>Regio Nijmegen</p>
                        <p>Email: <a href="mailto:info@digitaalgelijk.nl" className="text-blue-600 dark:text-blue-400">info@digitaalgelijk.nl</a></p>
                        <p>Telefoon: <a href="tel:+31649892654" className="text-blue-600 dark:text-blue-400">+31 6 4989 2654</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Laatste update datum */}
              <div className="text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-6 mt-8">
                Laatste update: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
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
              Duurzame IT-oplossingen voor uw bedrijf
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Bij Digitaalgelijk helpen we u bij het verantwoord afvoeren en opkopen van hardware, 
              met aandacht voor dataveiligheid en duurzaamheid.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/diensten/hardware-opkopen" 
                  className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  Hardware Opkopen <FiArrowRight />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/diensten/data-verwijdering" 
                  className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  Data Verwijdering <FiArrowRight />
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