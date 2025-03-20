'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiDollarSign, FiTrendingUp, FiSearch, FiFileText, FiClipboard } from 'react-icons/fi';

// Optimaliseer voor betere code splitting door animaties in een aparte client component te plaatsen
import AnimatedFeatures from '../../../components/shared/AnimatedFeatures';

export default function Waardebepaling() {
  // Definieer de content die zowel op de server als client kan worden gebruikt
  const features = [
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: "Marktconforme prijzen",
      description: "Realistische taxatie gebaseerd op actuele marktprijzen en specifieke productkenmerken."
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Transparante waardering",
      description: "Heldere uitleg over hoe de waardebepaling tot stand komt, zonder verborgen kosten."
    },
    {
      icon: <FiSearch className="w-6 h-6" />,
      title: "Gedetailleerde inspectie",
      description: "Grondige technische analyse van uw hardware voor een accurate waardebepaling."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Professionele IT-waardebepaling voor uw hardware
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                  Ontvang een eerlijke en transparante taxatie van uw IT-apparatuur, gebaseerd op actuele marktwaarde en conditie.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="btn-primary">
                    Aanvragen
                  </a>
                  <a href="#proces" className="btn-secondary">
                    Meer informatie
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/services/waardebepaling.jpg" 
                  alt="Professionele IT-waardebepaling en taxatie" 
                  width={1200} 
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-white text-xl font-bold">Onafhankelijke waardebepaling</div>
                  <div className="text-amber-200">Nauwkeurige taxatie van uw IT-infrastructuur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section - Nu met geoptimaliseerde code splitting */}
      <section id="voordelen" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Voordelen van onze waardebepaling</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Onze professionele taxatiedienst biedt u duidelijkheid over de waarde van uw IT-assets
            </p>
          </div>
          
          {/* De AnimatedFeatures component bevat nu alle animatielogica */}
          <AnimatedFeatures features={features} />
        </div>
      </section>
    </div>
  );
} 