'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiTrendingUp, FiDroplet, FiWind } from 'react-icons/fi';

const SustainabilityHighlights = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
              Onze Bijdrage aan een Duurzame Toekomst
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Bij Neiwu staat duurzaamheid centraal. We verminderen de milieu-impact van elektronisch afval door hardware een tweede leven te geven of verantwoord te recyclen.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Onze aanpak is gebaseerd op drie pijlers: hergebruik van hardware, verantwoorde recycling en bewustwording bij klanten en partners.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-full">
                <FiTrendingUp className="text-emerald-600 dark:text-emerald-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">3.500+ ton CO₂ bespaard</span>
              </div>
              <div className="flex items-center bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-full">
                <FiDroplet className="text-emerald-600 dark:text-emerald-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">125M liter water bespaard</span>
              </div>
              <div className="flex items-center bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-full">
                <FiWind className="text-emerald-600 dark:text-emerald-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">250K+ apparaten verwerkt</span>
              </div>
            </div>
            
            <Link 
              href="/duurzaamheid"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Ontdek onze duurzaamheidsinitiatieven
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Duurzaamheid bij Neiwu"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 md:bottom-8 md:left-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Materiaalhergebruik</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mb-2">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                85% van alle materialen wordt hergebruikt of gerecycled tot nieuwe grondstoffen.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityHighlights; 