import React from 'react';

/**
 * Server Component voor de hero sectie van de contactpagina
 * 
 * Dit component is geïmplementeerd als een Server Component voor betere prestaties
 * aangezien het volledig statisch is en geen client-side interactiviteit nodig heeft
 */
const ContactHeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mx-auto mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <span role="img" aria-label="Contact" className="text-blue-600 dark:text-blue-400 text-2xl">✉️</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Neem <span className="text-blue-600 dark:text-blue-400">Contact</span> Op
          </h1>
          
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded mb-6" />
          
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Heeft u vragen over onze diensten of wilt u een offerte aanvragen? Neem contact met ons op en we helpen u graag verder.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection; 