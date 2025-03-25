'use client';

import React from 'react';
import Link from 'next/link';
import { MotionDiv } from '@/components/client/MotionWrapper';
import { FiMapPin } from 'react-icons/fi';

/**
 * Client Component voor de Call-to-Action sectie op de contactpagina
 */
const ContactCTASection = () => {
  return (
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
      
      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Duurzame IT-oplossingen voor uw bedrijf
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bij Digitaalgelijk helpen we u bij het verantwoord afvoeren en opkopen van hardware, 
            met aandacht voor dataveiligheid en duurzaamheid.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/diensten/hardware-opkopen" 
              className="group px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Hardware Opkopen 
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link 
              href="/diensten/data-verwijdering" 
              className="group px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Data Verwijdering 
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="mt-8 text-blue-200 flex flex-col items-center justify-center">
            <div className="flex items-center mb-2">
              <span className="mr-2">❤️</span>
              <span>Met passie voor duurzaamheid vanuit Wijchen</span>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <a href="tel:+31649892654" className="flex items-center hover:text-white transition-colors" aria-label="Bel ons op +31 6 4989 2654">
                <span className="mr-2">📞</span>
                <span>+31 6 4989 2654</span>
              </a>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-blue-600 dark:text-blue-400" size={18} />
                <span>Regio Nijmegen</span>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ContactCTASection; 