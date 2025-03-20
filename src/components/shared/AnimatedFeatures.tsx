'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

// Type definitie voor de properties
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AnimatedFeaturesProps {
  features: Feature[];
}

const AnimatedFeatures: React.FC<AnimatedFeaturesProps> = ({ features }) => {
  // Check of de gebruiker reducedMotion heeft ingeschakeld
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div 
          key={feature.title}
          className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: prefersReducedMotion ? 0 : index * 0.1, duration: 0.5 }}
        >
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedFeatures; 