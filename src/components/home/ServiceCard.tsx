'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  features?: string[];
  delay?: number;
  imageSrc: string;
  accentColor: 'blue' | 'purple' | 'green' | 'orange';
}

const colorMap = {
  blue: {
    bg: 'from-blue-500 to-blue-700',
    light: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
    hover: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
    overlay: 'from-blue-900/80 to-blue-800/40',
    glow: 'bg-blue-400/20'
  },
  purple: {
    bg: 'from-purple-500 to-purple-700',
    light: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
    hover: 'group-hover:text-purple-600 dark:group-hover:text-purple-400',
    overlay: 'from-purple-900/80 to-purple-800/40',
    glow: 'bg-purple-400/20'
  },
  green: {
    bg: 'from-green-500 to-green-700',
    light: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
    hover: 'group-hover:text-green-600 dark:group-hover:text-green-400',
    overlay: 'from-green-900/80 to-green-800/40',
    glow: 'bg-green-400/20'
  },
  orange: {
    bg: 'from-orange-500 to-orange-700',
    light: 'bg-orange-100 dark:bg-orange-900/30',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-800',
    hover: 'group-hover:text-orange-600 dark:group-hover:text-orange-400',
    overlay: 'from-orange-900/80 to-orange-800/40',
    glow: 'bg-orange-400/20'
  }
};

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link, 
  features = [], 
  delay = 0,
  imageSrc,
  accentColor = 'blue'
}: ServiceCardProps) => {
  const colors = colorMap[accentColor];
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 w-full overflow-hidden">
        {imageSrc && imageSrc.trim() !== "" ? (
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1 }}
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </motion.div>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-90 flex items-center justify-center`}>
            <div className="text-white text-opacity-30 text-5xl font-bold">{title.charAt(0)}</div>
          </div>
        )}
        
        {/* Kleuroverlay met gradient die past bij de accentkleur */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-t ${colors.overlay} opacity-60 z-10`}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: isHovered ? 0.7 : 0.6 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Decoratieve elementen */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1/3 z-10 opacity-40"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: isHovered ? 0.6 : 0.4 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id={`grid-${accentColor}`} width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill={`url(#grid-${accentColor})`} />
          </svg>
        </motion.div>
        
        {/* Glow effect bij hover */}
        <motion.div 
          className={`absolute inset-0 ${colors.glow} blur-md z-5`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.4 : 0 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Titel overlay op de afbeelding */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4 z-20"
          initial={{ y: 2 }}
          animate={{ y: isHovered ? 0 : 2 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white drop-shadow-md">{title}</h3>
        </motion.div>
        
        {/* Icon in cirkel, nu in de rechterbovenhoek */}
        <motion.div 
          className="absolute top-4 right-4 z-20"
          initial={{ scale: 0.9 }}
          animate={{ scale: isHovered ? 1 : 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className={`bg-white/90 dark:bg-gray-800/90 rounded-full p-3 shadow-lg`}
            animate={{ 
              boxShadow: isHovered ? '0 0 15px 2px rgba(255,255,255,0.3)' : '0 0 0px 0px rgba(255,255,255,0)'
            }}
            transition={{ duration: 0.5 }}
          >
            <div className={`${colors.text}`}>
              {icon}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        <div className="flex-grow">
          {features.length > 0 && (
            <ul className="mb-6 space-y-2">
              {features.map((feature, index) => (
                <motion.li 
                  key={feature} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + (isHovered ? 0 : 0.5) }}
                >
                  <FiCheck className={`mr-2 mt-1 flex-shrink-0 ${colors.text}`} />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="mt-auto pt-4">
          <Link href={link} className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${colors.light} ${colors.text} hover:shadow-md group relative overflow-hidden w-full`}>
            <motion.div 
              className={`absolute inset-0 h-full bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-20`}
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '100%' : 0 }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">
              Meer informatie
            </span>
            <motion.div
              className="relative z-10 ml-2"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiArrowRight aria-hidden="true" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 