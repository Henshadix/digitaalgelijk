import React from 'react';
import { motion } from 'framer-motion';

/**
 * Server Component voor de hero sectie van de contactpagina
 * 
 * Dit component is geïmplementeerd als een Server Component voor betere prestaties
 * aangezien het volledig statisch is en geen client-side interactiviteit nodig heeft
 */
const ContactHeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800 text-white overflow-hidden">
      {/* Dynamic animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 opacity-20 bg-gradient-conic from-blue-400 via-transparent to-transparent"
          animate={{
            rotate: [0, 360],
            transition: {
              duration: 20,
              ease: "linear",
              repeat: Infinity
            }
          }}
        />
        
        {/* Animated dots/particles */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.15 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-white"></div>
          <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 rounded-full bg-blue-300"></div>
          <div className="absolute top-1/2 left-2/3 w-1 h-1 rounded-full bg-white"></div>
          <div className="absolute top-1/4 left-3/4 w-2 h-2 rounded-full bg-blue-200"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 rounded-full bg-white"></div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mx-auto mb-4 p-3 bg-white/10 dark:bg-white/10 rounded-full">
            <span role="img" aria-label="Contact" className="text-white text-2xl">✉️</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Neem <span className="text-blue-300">Contact</span> Op
          </h1>
          
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded mb-6" />
          
          <p className="text-gray-200 max-w-2xl mx-auto mt-4">
            Heeft u vragen over onze diensten of wilt u een offerte aanvragen? Neem contact met ons op en we helpen u graag verder.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection; 