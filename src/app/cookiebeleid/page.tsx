'use client';

import { FiDatabase, FiShield, FiInfo, FiSettings, FiCheckCircle, FiSliders, FiFile, FiEye, FiAlertCircle, FiArrowRight, FiHeart, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Cookiebeleid() {
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
              <FiDatabase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Cookie<span className="text-blue-600 dark:text-blue-400">beleid</span>
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
              Hoe wij cookies gebruiken om uw ervaring op onze website te verbeteren en uw privacy te beschermen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Cookiebeleid Content Section */}
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
                {[
                  'Wat zijn cookies', 
                  'Welke cookies gebruiken wij', 
                  'Functionele cookies', 
                  'Analytische cookies', 
                  'Marketing cookies', 
                  'Social media cookies', 
                  'Cookies beheren', 
                  'Updates',
                  'Contact'
                ].map((item, index) => (
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
              {/* Sectie 1: Wat zijn cookies */}
              <div id="section-1" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FiInfo className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Wat zijn cookies?</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Cookies zijn kleine tekstbestanden die worden opgeslagen op uw computer, tablet of telefoon wanneer u een website bezoekt. 
                    Deze bestanden stellen de website in staat om uw apparaat te herkennen en informatie te onthouden zoals uw voorkeuren.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Cookies maken het browsen op websites gemakkelijker en helpen ons om onze website te verbeteren. Ze stellen ons ook in 
                    staat om informatie te verzamelen over hoe bezoekers onze website gebruiken, zodat we deze kunnen optimaliseren.
                  </p>
                </div>
              </div>

              {/* Sectie 2: Welke cookies gebruiken wij */}
              <div id="section-2" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FiDatabase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Welke cookies gebruiken wij?</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Wij gebruiken verschillende soorten cookies op onze website:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {[
                      "Noodzakelijke (functionele) cookies",
                      "Analytische cookies",
                      "Marketing cookies (alleen met uw toestemming)",
                      "Social media cookies (alleen met uw toestemming)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
                        <FiCheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    In de volgende secties leggen we gedetailleerd uit welke specifieke cookies we gebruiken, 
                    waarom we ze gebruiken en hoe lang ze op uw apparaat blijven staan.
                  </p>
                </div>
              </div>

              {/* Sectie 3: Functionele cookies */}
              <div id="section-3" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FiSettings className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Functionele cookies</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Functionele cookies zijn noodzakelijk om de basisfunctionaliteit van onze website mogelijk te maken. 
                    Deze cookies onthouden uw voorkeuren en stellen ons in staat om functies zoals inloggen, winkelwagens of taalvoorkeuren mogelijk te maken.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Overzicht van functionele cookies</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-green-100 dark:border-green-900/20">
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Naam</th>
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Doel</th>
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Bewaartermijn</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-green-100 dark:divide-green-900/20">
                          <tr>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">session_cookie</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">Sessie identificatie</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">Sessie (verdwijnt na sluiten browser)</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">cookie_consent</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">Uw cookievoorkeuren</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">1 jaar</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">theme_preference</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">Onthoudt light/dark mode</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">1 jaar</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sectie 4: Analytische cookies */}
              <div id="section-4" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <FiEye className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Analytische cookies</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Analytische cookies helpen ons te begrijpen hoe bezoekers onze website gebruiken. Deze informatie stelt ons in staat 
                    om onze website te verbeteren en de gebruikerservaring te optimaliseren.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/10 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Overzicht van analytische cookies</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-amber-100 dark:border-amber-900/20">
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Naam</th>
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Doel</th>
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Bewaartermijn</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-amber-100 dark:divide-amber-900/20">
                          <tr>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">_ga</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">Google Analytics - onderscheiden van gebruikers</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">2 jaar</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">_gid</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">Google Analytics - onderscheiden van gebruikers</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">24 uur</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">_gat</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">Google Analytics - beperken van aanvraagsnelheid</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">1 minuut</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Wij hebben een verwerkersovereenkomst met Google afgesloten en hebben ingesteld dat IP-adressen geanonimiseerd worden. 
                    De functie voor 'gegevens delen' is uitgeschakeld en we gebruiken de gegevens niet voor advertentiedoeleinden.
                  </p>
                </div>
              </div>

              {/* Sectie 5: Marketing cookies */}
              <div id="section-5" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FiSliders className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Marketing cookies</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Marketing cookies worden gebruikt om bezoekers te volgen op websites. De bedoeling is om advertenties weer te geven 
                    die relevant en aantrekkelijk zijn voor de individuele gebruiker en daardoor waardevoller voor uitgevers en externe adverteerders.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Overzicht van marketing cookies</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-blue-100 dark:border-blue-900/20">
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Naam</th>
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Doel</th>
                            <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">Bewaartermijn</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-100 dark:divide-blue-900/20">
                          <tr>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">_fbp</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">Facebook Pixel - bijhouden van websiteconversies</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">3 maanden</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">fr</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">Facebook - advertentiedoeleinden</td>
                            <td className="py-2 px-3 text-gray-700 dark:text-gray-300">3 maanden</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/10 rounded-lg p-4 mb-6 flex items-start border-l-4 border-yellow-400">
                    <FiAlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <span className="font-semibold text-gray-900 dark:text-white">Let op:</span> Marketing cookies worden alleen geplaatst 
                      als u daar uitdrukkelijk toestemming voor heeft gegeven via onze cookiebanner.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sectie 6: Social media cookies */}
              <div id="section-6" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <FiFile className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Social media cookies</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Op onze website kunnen knoppen zijn opgenomen om pagina's te promoten of te delen op sociale netwerken. 
                    Deze knoppen plaatsen cookies van deze sociale netwerken, zodat ze u kunnen herkennen wanneer u ook hun diensten gebruikt.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Voor de cookies die sociale medianetwerken plaatsen en de mogelijke data die zij hiermee verzamelen, verwijzen wij u naar 
                    de verklaringen die deze partijen hierover geven op hun eigen websites:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start bg-indigo-50 dark:bg-indigo-900/10 rounded-lg p-4">
                      <FiCheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">LinkedIn</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          <a href="https://www.linkedin.com/legal/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                            LinkedIn Cookiebeleid
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start bg-indigo-50 dark:bg-indigo-900/10 rounded-lg p-4">
                      <FiCheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Facebook</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                            Facebook Cookiebeleid
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start bg-indigo-50 dark:bg-indigo-900/10 rounded-lg p-4">
                      <FiCheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Twitter</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          <a href="https://help.twitter.com/nl/rules-and-policies/twitter-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                            Twitter Cookiebeleid
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="bg-yellow-50 dark:bg-yellow-900/10 rounded-lg p-4 mb-6 flex items-start border-l-4 border-yellow-400">
                    <FiAlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <span className="font-semibold text-gray-900 dark:text-white">Let op:</span> Social media cookies worden alleen geplaatst 
                      als u daar uitdrukkelijk toestemming voor heeft gegeven via onze cookiebanner.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Sectie 7: Cookies beheren */}
              <div id="section-7" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FiShield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Cookies beheren</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    U kunt uw cookievoorkeuren op verschillende manieren beheren:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start bg-purple-50 dark:bg-purple-900/10 rounded-lg p-4">
                      <FiCheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Via onze cookiebanner</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Bij uw eerste bezoek aan onze website wordt u gevraagd om uw cookievoorkeuren in te stellen. U kunt deze voorkeuren 
                          te allen tijde wijzigen door op de link "Cookievoorkeuren" onderaan onze website te klikken.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start bg-purple-50 dark:bg-purple-900/10 rounded-lg p-4">
                      <FiCheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Via uw browser</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          De meeste browsers stellen u in staat om cookies te weigeren of te accepteren, of om u op de hoogte te stellen wanneer een cookie wordt geplaatst. 
                          Instructies voor het beheren van cookies in uw browser vindt u meestal in het "help"-gedeelte van uw browser.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 mb-6">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Cookievoorkeuren per browser beheren</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Google Chrome
                      </a>
                      <a href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Mozilla Firefox
                      </a>
                      <a href="https://support.microsoft.com/nl-nl/windows/cookies-verwijderen-en-beheren-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Microsoft Edge
                      </a>
                      <a href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Apple Safari
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Let op: het uitschakelen van cookies kan invloed hebben op de functionaliteit van onze website en andere websites die u bezoekt.
                  </p>
                </div>
              </div>
              
              {/* Sectie 8: Updates */}
              <div id="section-8" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FiFile className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">8. Updates van ons cookiebeleid</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Wij kunnen dit cookiebeleid van tijd tot tijd aanpassen om wijzigingen in ons cookiegebruik of om andere operationele, 
                    juridische of regelgevende redenen weer te geven. We raden u aan om regelmatig deze pagina te bezoeken om op de hoogte 
                    te blijven van de nieuwste informatie over ons cookiegebruik. De datum van de laatste update staat onderaan de pagina vermeld.
                  </p>
                </div>
              </div>
              
              {/* Sectie 9: Contact */}
              <div id="section-9" className="mb-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FiInfo className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">9. Contact</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Als u vragen heeft over ons cookiebeleid of uw privacy, neem dan contact met ons op via:
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-6 mb-6">
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p className="font-semibold text-gray-900 dark:text-white">Bedrijfsnaam: Digitaalgelijk</p>
                      <p>Adres: Regio Nijmegen</p>
                      <p>E-mailadres: <a href="mailto:info@digitaalgelijk.nl" className="text-blue-600 dark:text-blue-400">info@digitaalgelijk.nl</a></p>
                      <p>Telefoonnummer: <a href="tel:+31649892654" className="text-blue-600 dark:text-blue-400">+31 6 4989 2654</a></p>
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