'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiMonitor, FiTruck, FiShield, FiCheckCircle, FiArrowRight, FiList, FiDollarSign, FiTag, FiTrello } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function HardwareOpkopen() {
  // Define simple animation presets without functions
  const basicFadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
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
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-green-200 dark:bg-green-800 opacity-10 blur-3xl"
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
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6"
              >
                Onze Diensten
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Hardware <span className="text-blue-600 dark:text-blue-400">Inkoop</span>
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
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl"
              >
                Wij kopen uw gebruikte IT-apparatuur op tegen eerlijke prijzen, ongeacht het aantal of de staat. Onze service is ontworpen om het proces zo eenvoudig en voordelig mogelijk te maken voor uw bedrijf.
              </motion.p>
              
              <div className="flex flex-wrap gap-4">
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
              </div>
            </div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/services/new/hardware-inkoop-pro.jpg" 
                  alt="Hardware Inkoop - Professionele IT apparatuur" 
                  width={1200} 
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-white text-xl font-bold">Eerlijke prijzen voor uw hardware</div>
                  <div className="text-blue-200">Professionele inkoop en verwerking</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...basicFadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Producten die we opkopen
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              We kopen diverse soorten IT-hardware op, van verschillende merken en besturingssystemen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {[
              { 
                title: "Laptops", 
                icon: <FiMonitor className="w-7 h-7" /> 
              },
              { 
                title: "Desktops", 
                icon: <FiMonitor className="w-7 h-7" /> 
              },
              { 
                title: "Mobiele apparaten", 
                icon: <FiMonitor className="w-7 h-7" /> 
              },
              { 
                title: "Tablets", 
                icon: <FiMonitor className="w-7 h-7" /> 
              },
              { 
                title: "Besturingssystemen", 
                description: "Windows, Apple, Chrome, Android",
                icon: <FiMonitor className="w-7 h-7" /> 
              }
            ].map((product, index) => (
              <motion.div 
                key={product.title}
                className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl text-center h-full flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div>
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 mx-auto">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{product.title}</h3>
                </div>
                {product.description && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {product.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Process Section */}
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
            {...basicFadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ons Inkoopproces
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Een transparante aanpak van waardebepaling tot uitbetaling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <FiDollarSign className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Waardebepaling van een product</h3>
              <p className="text-gray-600 dark:text-gray-400">
                De waarde wordt bepaald door de tweedehands verkoopprijs op internet te raadplegen. We hanteren een eerlijk inkooppercentage gebaseerd op de staat, leeftijd en marktwaarde van uw apparatuur. Dit geeft u een transparante prijs gebaseerd op de actuele marktwaarde.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <FiList className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Controle en informatieverzameling</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We controleren de werking van de apparaten vooraf. Klanten dienen een lijst aan te leveren met het modelnummer, serienummer, en de status van het product met een type aanduiding A, B, C of D.
              </p>
            </motion.div>
          </div>

          {/* Classificatie Systeem */}
          <motion.div 
            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 mx-auto">
                <FiTrello className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Klasseringssysteem</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We hanteren een klasseringssysteem om de staat van de apparatuur te beoordelen en een eerlijke prijs te bepalen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
              <motion.div 
                className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-full inline-flex items-center justify-center text-blue-600 dark:text-blue-400 mr-2">
                    A
                  </span>
                  Klassering A
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Producten zonder optische schade aan de buitenkant. Deze apparaten functioneren perfect en hebben minimale gebruikssporen.
                </p>
                <div className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                  Hoogste inkoopwaarde
                </div>
              </motion.div>

              <motion.div 
                className="bg-green-50 dark:bg-green-900/10 p-6 rounded-lg h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-green-100 dark:bg-green-800 rounded-full inline-flex items-center justify-center text-green-600 dark:text-green-400 mr-2">
                    B
                  </span>
                  Klassering B
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Producten met lichte optische schade zoals kleine krasjes of gebruikssporen. De apparaten functioneren zonder problemen.
                </p>
                <div className="text-sm text-green-700 dark:text-green-300 font-medium">
                  Goede inkoopwaarde
                </div>
              </motion.div>

              <motion.div 
                className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-lg h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-amber-100 dark:bg-amber-800 rounded-full inline-flex items-center justify-center text-amber-600 dark:text-amber-400 mr-2">
                    C
                  </span>
                  Klassering C
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Producten met duidelijke gebruikssporen zoals krassen, deuken of ontbrekende onderdelen. De apparaten functioneren, maar hebben mogelijk beperkingen.
                </p>
                <div className="text-sm text-amber-700 dark:text-amber-300 font-medium">
                  Verminderde inkoopwaarde
                </div>
              </motion.div>

              <motion.div 
                className="bg-red-50 dark:bg-red-900/10 p-6 rounded-lg h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <span className="w-8 h-8 bg-red-100 dark:bg-red-800 rounded-full inline-flex items-center justify-center text-red-600 dark:text-red-400 mr-2">
                    D
                  </span>
                  Klassering D
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Producten met ernstige beschadigingen of defecten. Deze apparaten functioneren niet of nauwelijks, maar kunnen mogelijk nog onderdelen bevatten die waardevol zijn.
                </p>
                <div className="text-sm text-red-700 dark:text-red-300 font-medium">
                  Minimale inkoopwaarde of recyclingwaarde
                </div>
              </motion.div>
            </div>

            <div className="mt-8 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg mb-6">
              <h5 className="font-bold text-gray-900 dark:text-white mb-2">Mogelijke optische beschadigingen aan hardware:</h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Krasvorming op schermen, behuizingen</li>
                <li>Barsten of scheuren in schermen</li>
                <li>Dode pixels op schermen</li>
                <li>Vlekken of verkleuring</li>
                <li>Afbladderende verf of coating</li>
                <li>Deuken of buigingen</li>
                <li>Loszittende of ontbrekende toetsen</li>
                <li>Krassen op optische media</li>
                <li>Beschadigde connectoren of poorten</li>
                <li>Scherm inbranding (burn-in)</li>
                <li>Stof of vuil onder glas of scherm</li>
                <li>Beschadigde stickers en labels</li>
                <li>Roestvorming</li>
                <li>Gebarsten kabelisolatie</li>
                <li>Losgeraakte schroeven of bevestigingen</li>
              </ul>
            </div>
          </motion.div>

          {/* Transport en Kosten */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <FiTruck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Transportkosten</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Transport wordt berekend op basis van de afstand van pand naar pand.</li>
                <li>• Minimale bedrag: €75,- exclusief btw</li>
                <li>• Extra kosten per kilometer: €0,23 (exclusief btw)</li>
                <li>• Extra kosten per uur rijden: €25,- (exclusief btw)</li>
                <li>• Binnen een straal van 15 kilometer is transport gratis</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <FiShield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Dataverwijdering en vernietiging</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Kosten per apparaat: €9,99 (incl. btw) voor veilige dataverwijdering</li>
                <li>• Licentiekosten: €2,99 per apparaat</li>
                <li>• Certificaat van datavernietiging inbegrepen</li>
                <li>• Voor beschadigde producten: €5,- (incl. btw) per apparaat</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Restwaarde & Beschadigde producten */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-300 dark:bg-purple-700 opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Aanvullende Informatie
            </h2>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <FiTag className="w-7 h-7" />
          </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Restwaarde van het product</h3>
              <p className="text-gray-600 dark:text-gray-400">
                De restwaarde is indicatief, omdat de producten mogelijk niet handmatig zijn onderzocht. Dit kan leiden tot een schommeling van de waarde (tot 100%), afhankelijk van later ontdekte gebreken.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <FiCheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Beschadigde producten</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Beschadigde producten worden gerecycled of gebruikt voor onderdelen. Voor deze producten wordt geen waarde berekend. De data wordt echter veilig verwijderd tegen een vergoeding van €5,- (incl. btw) per apparaat. Alle werkende apparatuur wordt voorzien van een certificaat van datavernietiging.
              </p>
            </motion.div>
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
              Klaar om uw hardware te verkopen?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.98 }}
              >
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors flex items-center gap-2">
                Offerte Aanvragen <FiArrowRight className="ml-2" />
              </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.98 }}
              >
              <Link href="tel:+31649892654" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors" aria-label="Bel ons op +31 6 4989 2654">
                Bel +31 6 4989 2654
              </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
} 