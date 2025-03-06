'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiChevronDown, FiChevronUp, FiArrowRight } from 'react-icons/fi';

// Meest gestelde vragen voor de homepage
const topFAQs = [
  {
    question: "Wat doet EcoTech precies?",
    answer: "EcoTech is gespecialiseerd in het opkopen, recyclen en veilig verwijderen van data van gebruikte hardware. We bieden diensten aan zowel bedrijven als particulieren, met een focus op duurzaamheid en databeveiliging."
  },
  {
    question: "Welke soorten hardware kopen jullie in?",
    answer: "Wij kopen diverse soorten hardware in, waaronder desktops, laptops, servers, smartphones, tablets, monitoren, printers en netwerkapparatuur. Zowel werkende als defecte apparatuur komt in aanmerking."
  },
  {
    question: "Hoe garanderen jullie dat mijn data veilig wordt verwijderd?",
    answer: "Wij gebruiken gecertificeerde dataverwijderingsmethoden die voldoen aan de hoogste internationale beveiligingsnormen, zoals NIST 800-88 en DoD 5220.22-M. Na het verwijderen van uw data ontvangt u een certificaat als bewijs dat uw gegevens veilig zijn verwijderd."
  }
];

// FAQ Item type
interface FAQItemProps {
  question: string;
  answer: string;
}

// FAQ Item component
const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-800 dark:text-white">{question}</span>
        <span className="text-emerald-600 dark:text-emerald-400">
          {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-gray-600 dark:text-gray-300">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQHighlights = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              {topFAQs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
            
            <div className="mt-8 text-center lg:text-left">
              <Link 
                href="/faq"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Bekijk alle veelgestelde vragen
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
              Veelgestelde Vragen
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Heeft u vragen over onze diensten? Hieronder vindt u antwoorden op de meest gestelde vragen. Voor meer informatie kunt u altijd contact met ons opnemen of onze uitgebreide FAQ-pagina bezoeken.
            </p>
            
            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Nog vragen?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Staat uw vraag er niet bij? Neem dan gerust contact met ons op. Ons team staat klaar om al uw vragen te beantwoorden.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
              >
                Neem contact op
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQHighlights; 