'use client';

import { FiFileText, FiCheckCircle, FiShield, FiClock, FiUsers, FiDollarSign, FiTruck, FiPackage, FiArrowRight, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AlgemeneVoorwaarden() {
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
              <FiFileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Algemene <span className="text-blue-600 dark:text-blue-400">Voorwaarden</span>
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
              De algemene voorwaarden van Digitaalgelijk voor al onze diensten en producten.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Algemene Voorwaarden Content Section */}
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
                  'Algemeen', 
                  'Diensten', 
                  'Offertes', 
                  'Uitvoering', 
                  'Betaling', 
                  'Aansprakelijkheid', 
                  'Garantie', 
                  'Intellectuele eigendom', 
                  'Geheimhouding', 
                  'Slotbepalingen'
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
              {/* Sectie 1: Algemeen */}
              <div id="section-1" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FiFileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Algemeen</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, werkzaamheden, offertes en
                    overeenkomsten tussen Digitaalgelijk en opdrachtgevers, respectievelijk hun rechtsopvolgers.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Afwijkingen van deze voorwaarden zijn slechts bindend indien en voor zover zij schriftelijk zijn
                    bevestigd door Digitaalgelijk.
                  </p>
                </div>
              </div>

              {/* Sectie 2: Diensten */}
              <div id="section-2" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FiUsers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Diensten</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Digitaalgelijk biedt de volgende diensten aan:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {[
                      "Hardware opkopen van gebruikte IT-apparatuur",
                      "Veilige dataverwijdering volgens GDPR-normen",
                      "Milieuvriendelijke recycling van hardware",
                      "Logistieke diensten voor IT-apparatuur",
                      "IT-consultancy en advies"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-3 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
                        <FiCheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    De exacte omvang en inhoud van de dienstverlening wordt bepaald door wat partijen schriftelijk zijn
                    overeengekomen.
                  </p>
                </div>
              </div>

              {/* Sectie 3: Offertes */}
              <div id="section-3" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FiDollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Offertes en Aanbiedingen</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Alle offertes en aanbiedingen van Digitaalgelijk zijn vrijblijvend, tenzij in de offerte een termijn
                    voor aanvaarding is gesteld.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start bg-green-50 dark:bg-green-900/10 rounded-lg p-4">
                      <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Geldigheid</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Offertes zijn 30 dagen geldig, tenzij anders vermeld.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start bg-green-50 dark:bg-green-900/10 rounded-lg p-4">
                      <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Prijzen</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Alle prijzen zijn in euro's en exclusief BTW, tenzij anders vermeld.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start bg-green-50 dark:bg-green-900/10 rounded-lg p-4">
                      <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Aanvaarding</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Een overeenkomst komt tot stand na schriftelijke aanvaarding van de offerte door de opdrachtgever.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sectie 4: Uitvoering */}
              <div id="section-4" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <FiTruck className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Uitvoering van de Overeenkomst</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Digitaalgelijk zal de overeenkomst naar beste inzicht en vermogen en overeenkomstig de eisen van goed
                    vakmanschap uitvoeren.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-amber-50 dark:bg-amber-900/10 rounded-lg p-4">
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Inspanningsverplichting</div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">Digitaalgelijk heeft een inspanningsverplichting en geen resultaatverplichting, tenzij uitdrukkelijk anders overeengekomen.</div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/10 rounded-lg p-4">
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Planning</div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">Aangegeven planningen en termijnen zijn indicatief, tenzij schriftelijk anders overeengekomen.</div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/10 rounded-lg p-4">
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Medewerking opdrachtgever</div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">De opdrachtgever zorgt voor tijdige aanlevering van alle benodigde informatie en materialen.</div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/10 rounded-lg p-4">
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Derden</div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">Digitaalgelijk mag bepaalde werkzaamheden laten verrichten door derden.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sectie 5: Betaling */}
              <div id="section-5" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FiDollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Betaling</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij anders overeengekomen.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Bezwaren tegen de hoogte van een factuur schorten de betalingsverplichting niet op",
                      "Bij niet tijdige betaling is de opdrachtgever van rechtswege in verzuim",
                      "Bij verzuim is 1,5% rente per maand verschuldigd",
                      "Incassokosten komen voor rekening van de opdrachtgever"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center bg-blue-50 dark:bg-blue-900/10 rounded-lg p-3">
                        <FiCheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                        <p className="text-gray-700 dark:text-gray-300">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sectie 6: Aansprakelijkheid */}
              <div id="section-6" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <FiShield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Aansprakelijkheid</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    De aansprakelijkheid van Digitaalgelijk is beperkt tot directe schade en tot maximaal het factuurbedrag
                    van de betreffende opdracht.
                  </p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 rounded-lg p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center p-3">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Uitsluiting indirecte schade</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Digitaalgelijk is nooit aansprakelijk voor indirecte schade, waaronder gevolgschade, gederfde winst, gemiste besparingen en schade door bedrijfsstagnatie.
                        </p>
                      </div>
                      <div className="text-center p-3">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">Overmacht</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Digitaalgelijk is niet aansprakelijk in geval van overmacht, waaronder begrepen ziekte, stakingen, natuurrampen en overheidsmaatregelen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sectie 7: Garantie */}
              <div id="section-7" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FiPackage className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Garantie</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Digitaalgelijk staat ervoor in dat de diensten voldoen aan de overeenkomst en aan de specificaties
                    vermeld in de offerte.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Voor dataverwijdering garanderen wij een proces conform de hoogste certificeringen",
                      "Bij hardware recycling garanderen wij een milieuvriendelijke verwerking",
                      "Voor hardware opkoop garanderen wij een eerlijke waardering",
                      "Klachten dienen binnen 14 dagen na levering schriftelijk te worden gemeld"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center bg-purple-50 dark:bg-purple-900/10 rounded-lg p-3">
                        <FiCheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0" />
                        <p className="text-gray-700 dark:text-gray-300">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Sectie 8: Intellectuele eigendom */}
              <div id="section-8" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FiFileText className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">8. Intellectuele Eigendom</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Alle intellectuele eigendomsrechten met betrekking tot door Digitaalgelijk ontwikkelde of ter beschikking
                    gestelde documenten, materialen, software of andere werken blijven eigendom van Digitaalgelijk.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4">
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Gebruiksrecht</div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">Opdrachtgever krijgt uitsluitend een gebruiksrecht op verstrekte materialen.</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4">
                      <div className="font-medium text-gray-900 dark:text-white mb-1">Verbod op verspreiding</div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">Het is niet toegestaan deze materialen te verveelvoudigen of aan derden te verstrekken zonder toestemming.</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sectie 9: Geheimhouding */}
              <div id="section-9" className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <FiShield className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">9. Geheimhouding</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het
                    kader van hun overeenkomst van elkaar of uit andere bron hebben verkregen. Informatie geldt als
                    vertrouwelijk als dit door de andere partij is medegedeeld of als dit voortvloeit uit de aard van
                    de informatie.
                  </p>
                </div>
              </div>
              
              {/* Sectie 10: Slotbepalingen */}
              <div id="section-10" className="mb-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FiFileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">10. Slotbepalingen</h2>
                  </div>
                </div>
                <div className="ml-[3.5rem]">
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Op alle rechtsbetrekkingen waarbij Digitaalgelijk partij is, is uitsluitend het Nederlands recht van
                    toepassing.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1 text-gray-700 dark:text-gray-300">
                        <p className="font-semibold text-gray-900 dark:text-white">Geschillen</p>
                        <p>Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar Digitaalgelijk gevestigd is.</p>
                      </div>
                      <div className="space-y-1 text-gray-700 dark:text-gray-300">
                        <p className="font-semibold text-gray-900 dark:text-white">Wijziging voorwaarden</p>
                        <p>Digitaalgelijk behoudt zich het recht voor deze voorwaarden te wijzigen. De gewijzigde voorwaarden worden geacht te zijn aanvaard indien de opdrachtgever niet binnen 14 dagen na bekendmaking bezwaar maakt.</p>
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