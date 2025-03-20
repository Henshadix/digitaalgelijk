'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronDown, FiHeart, FiPlus, FiMinus, FiCircle, FiShield, FiRefreshCw, FiDollarSign, FiTruck, FiCpu } from 'react-icons/fi';
import { useState } from 'react';

export default function FAQ() {
  // State voor de actieve FAQ-categorie
  const [activeCategory, setActiveCategory] = useState('general');
  
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

  // Categorieën voor de navigatie
  const categories = [
    { id: 'general', name: 'Algemeen', icon: <FiCircle className="w-4 h-4" /> },
    { id: 'hardware', name: 'Hardware Opkopen', icon: <FiCpu className="w-4 h-4" /> },
    { id: 'data', name: 'Data Verwijdering', icon: <FiShield className="w-4 h-4" /> },
    { id: 'recycling', name: 'Recycling', icon: <FiRefreshCw className="w-4 h-4" /> }
  ];

  // Veel voorkomende vragen per categorie
  const faqs = {
    general: [
      {
        question: "Wat maakt Digitaalgelijk anders dan andere IT-recycling bedrijven?",
        answer: "Digitaalgelijk onderscheidt zich door onze holistische benadering: gecombineerde expertise in hardware waardering, gecertificeerde dataverwijdering én duurzame recycling in één geïntegreerd proces. We bieden volledige transparantie met uitgebreide rapportages, de hoogste veiligheidsnormen en een persoonlijke aanpak met een vast contactpersoon voor elk project. Onze prijsmodellen zijn eerlijk en transparant, zonder verborgen kosten."
      },
      {
        question: "Werkt Digitaalgelijk met bedrijven van alle groottes?",
        answer: "Absoluut. Onze diensten zijn schaalbaar van kleine startups tot grote multinationals. We passen onze oplossingen aan voor elke organisatie, ongeacht omvang of branche. Ons team heeft ervaring in diverse sectoren waaronder financiële dienstverlening, gezondheidszorg, onderwijs en overheid."
      },
      {
        question: "Hoelang duurt het volledige proces van ophalen tot betaling?",
        answer: "Na het plaatsen van een opdracht duurt het gemiddeld 3-5 werkdagen tot ophaling (of sneller indien dringend). De inspectie, dataverwijdering en waardering nemen 2-5 werkdagen in beslag, afhankelijk van volume. Certificaten worden binnen 7 werkdagen na verwerking verstuurd, gevolgd door uitbetaling binnen 5 werkdagen na goedkeuring van de definitieve offerte. Voor grotere volumes bieden we flexibele planningen."
      },
      {
        question: "Hoe kan ik een offerte aanvragen?",
        answer: "Een offerte aanvragen is eenvoudig: vul ons contactformulier in op de website, mail naar info@digitaalgelijk.nl of bel 06 49 89 26 54. Vermeld zo veel mogelijk details over uw hardware (type, aantal, conditie) voor een nauwkeurige inschatting. We reageren doorgaans binnen 24 uur met een vrijblijvende offerte."
      }
    ],
    hardware: [
      {
        question: "Welke soorten IT-apparatuur kopen jullie op?",
        answer: "We kopen vrijwel alle IT-apparatuur op, waaronder laptops, desktops, servers, netwerkapparatuur (switches, routers), opslagapparatuur (NAS, SANs), mobiele apparaten (smartphones, tablets), monitoren en randapparatuur. Ook bij grotere hoeveelheden of minder gangbare apparatuur denken we graag mee over een passende oplossing."
      },
      {
        question: "Hoe bepaalt Digitaalgelijk de waarde van mijn hardware?",
        answer: "We bepalen de waarde op basis van type, merk en model, leeftijd en specificaties, fysieke staat, huidige marktwaarde en hoeveelheid. Na een eerste inschatting volgt een gedetailleerde inspectie voor de definitieve waardering. We streven naar maximale waarde en volledige transparantie in onze prijsbepalingen."
      },
      {
        question: "Is het mogelijk om alleen werkende apparatuur te verkopen?",
        answer: "Zeker, maar we nemen ook niet-werkende apparatuur aan. Werkende apparatuur levert uiteraard een hogere vergoeding op, maar zelfs defecte apparatuur heeft voor ons waarde vanwege herbruikbare onderdelen en recyclebare materialen. Bij grotere partijen kunnen we een mix van werkende en niet-werkende apparatuur aannemen."
      },
      {
        question: "Moeten we de apparatuur voorbereiden voor ophaling?",
        answer: "Minimale voorbereiding is voldoende: verzamel de apparatuur op een toegankelijke locatie en zorg dat uw inventarislijst (indien beschikbaar) gereed is. Het is niet nodig om apparatuur in te pakken of data te wissen – dit verzorgen wij. Voor specifieke situaties bieden we advies over de optimale voorbereidingen."
      }
    ],
    data: [
      {
        question: "Welke dataverwijderingsmethoden gebruikt Digitaalgelijk?",
        answer: "We passen verschillende gecertificeerde methoden toe, afgestemd op het type opslagmedium en uw specifieke eisen: software-matige wismethoden volgens NIST 800-88 en DoD 5220.22-M standaarden, degaussing voor magnetische media, en fysieke vernietiging wanneer andere methoden niet mogelijk zijn. Elk proces wordt uitgevoerd in een beveiligde omgeving door getraind personeel."
      },
      {
        question: "Is de dataverwijdering GDPR/AVG-compliant?",
        answer: "Absoluut. Onze processen voldoen volledig aan de AVG/GDPR-eisen en andere relevante wetgeving. We zorgen voor permanente, onherstelbare verwijdering van alle persoonsgegevens, waarmee u aan uw wettelijke verplichting voldoet om data niet langer te bewaren dan noodzakelijk en veilig te verwijderen als deze niet meer nodig is."
      },
      {
        question: "Wat houdt het certificaat van dataverwijdering precies in?",
        answer: "Ons certificaat is uw officiële bewijs van veilige dataverwijdering en bevat: identificatie van de apparatuur (serienummers, asset tags), datum en tijd van verwijdering, gebruikte methode en standaard, verificatie van succesvolle verwijdering, en een uniek certificaatnummer voor traceerbaarheid. Dit certificaat is essentieel voor uw compliance administratie en audits."
      },
      {
        question: "Wat gebeurt er als data niet volledig kan worden verwijderd?",
        answer: "Indien we data niet volledig kunnen verwijderen (bijvoorbeeld bij defecte media of specifieke hardwaretypes), gaan we over tot fysieke vernietiging van het opslagmedium. Dit wordt volledig gedocumenteerd en u ontvangt een certificaat van vernietiging. We informeren u altijd vooraf als fysieke vernietiging noodzakelijk is."
      }
    ],
    recycling: [
      {
        question: "Hoe draagt Digitaalgelijk bij aan duurzaamheid?",
        answer: "Onze circulaire aanpak maximaliseert de positieve milieu-impact: we verlengen de levensduur van apparatuur door hergebruik, bereiken 99,5% materiaalhergebruik van niet-herbruikbare items, verminderen CO2-uitstoot significant, voorkomen e-waste op stortplaatsen, en beperken de behoefte aan nieuwe grondstoffen. We zijn ISO 14001 gecertificeerd en leveren gedetailleerde duurzaamheidsrapportages."
      },
      {
        question: "Wat gebeurt er met apparatuur die niet kan worden hergebruikt?",
        answer: "Niet-herbruikbare apparatuur wordt gedemonteerd in onze gespecialiseerde faciliteit, waar we componenten scheiden voor specifieke recyclageprocessen: metalen worden gesmolten voor hergebruik, kunststoffen verwerkt tot granulaat, printplaten verwerkt voor terugwinning van edelmetalen, en glas gerecycled. Slechts minder dan 0,5% kan niet worden gerecycled en wordt milieuverantwoord verwerkt."
      },
      {
        question: "Hoe meet en rapporteert Digitaalgelijk de milieuvoordelen?",
        answer: "We bieden uitgebreide duurzaamheidsrapportages met exacte hoeveelheden gerecyclede materialen per type, berekende CO2-besparingen, vergelijkingen met traditionele methoden, en uw bijdrage aan relevante UN Sustainable Development Goals. Deze rapportages kunt u gebruiken voor uw eigen duurzaamheidsverslaglegging, MVO-initiatieven en stakeholdercommunicatie."
      },
      {
        question: "Is jullie transportlogistiek ook duurzaam?",
        answer: "Absoluut. Onze transportlogistiek is geoptimaliseerd voor minimale milieu-impact: efficiënte routeplanning, geconsolideerde ophalingen, en waar mogelijk inzet van elektrische voertuigen. We compenseren de CO2-uitstoot van transport en werken voortdurend aan verdere verduurzaming van onze logistieke processen."
      }
    ]
  };
  
  // Custom accordion component
  const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
        whileHover={{ y: -3, transition: { duration: 0.2 } }}
      >
        <button
          className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-semibold text-gray-900 dark:text-white text-left">{question}</span>
          <div className={`rounded-full p-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
            {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
          </div>
        </button>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-5 text-gray-600 dark:text-gray-400">
            <p>{answer}</p>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <main className="flex flex-col min-h-screen relative">
      {/* Decoratieve achtergrond elementen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-green-400/10 dark:bg-green-600/10 blur-3xl"></div>
        
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
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp} custom={0} className="inline-block mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <FiPlus className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <motion.h1 
              variants={fadeInUp} 
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Veelgestelde <span className="text-blue-600 dark:text-blue-400">Vragen</span>
            </motion.h1>
            <motion.div
              className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6"
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <motion.p 
              variants={fadeInUp}
              custom={2}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Antwoorden op de meest gestelde vragen over onze diensten, processen en aanpak. 
              Heeft u een vraag die hier niet wordt beantwoord? Neem dan contact met ons op.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Navigation and Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Categorie navigatie */}
            <motion.div 
              className="mb-12 flex flex-wrap gap-2 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Animated heading based on category */}
            <motion.div 
              className="mb-12 text-center"
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {activeCategory === 'general' && 'Algemene Vragen'}
                {activeCategory === 'hardware' && (
                  <span className="flex items-center justify-center gap-2">
                    <FiCpu className="text-blue-600 dark:text-blue-400" /> 
                Hardware Opkopen
                    </span>
                )}
                {activeCategory === 'data' && (
                  <span className="flex items-center justify-center gap-2">
                    <FiShield className="text-purple-600 dark:text-purple-400" /> 
                Data Verwijdering
                    </span>
                )}
                {activeCategory === 'recycling' && (
                  <span className="flex items-center justify-center gap-2">
                    <FiRefreshCw className="text-green-600 dark:text-green-400" /> 
                    Recycling & Duurzaamheid
                    </span>
                )}
              </h2>
              <div 
                className={`h-1 w-20 mx-auto rounded mb-6 ${
                  activeCategory === 'general' ? 'bg-blue-600' :
                  activeCategory === 'hardware' ? 'bg-blue-600' :
                  activeCategory === 'data' ? 'bg-purple-600' : 'bg-green-600'
                }`}
              ></div>
            </motion.div>

            {/* FAQ Items */}
            <motion.div 
              className="space-y-4"
              key={`faq-${activeCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <FAQItem question={faq.question} answer={faq.answer} />
                </motion.div>
              ))}
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