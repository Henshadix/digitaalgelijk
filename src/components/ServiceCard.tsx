'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  link: string;
  delay?: number;
  features?: string[];
}

const ServiceCard = ({ title, description, icon: Icon, link, delay = 0, features = [] }: ServiceCardProps) => {
  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Background gradient that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 dark:from-blue-900/0 dark:to-blue-800/0 group-hover:from-blue-50 group-hover:to-blue-100 dark:group-hover:from-blue-900/20 dark:group-hover:to-blue-800/20 transition-all duration-300 opacity-0 group-hover:opacity-100" />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

      {/* Icon with animated background */}
      <div className="relative mb-6">
        <div className="absolute -inset-3 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
        <div className="relative bg-blue-100 dark:bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7" />
        </div>
      </div>

      {/* Content */}
      <h3 className="relative text-xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>

      <p className="relative text-gray-600 dark:text-gray-400 mb-6 flex-grow">
        {description}
      </p>

      {/* Features list */}
      {features.length > 0 && (
        <ul className="relative mb-6 space-y-3">
          {features.map((feature, index) => (
            <motion.li 
              key={feature} 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: delay + 0.4 + (index * 0.1) }}
              viewport={{ once: true }}
            >
              <span className="flex-shrink-0 w-5 h-5 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5 text-blue-600 dark:text-blue-400">
                <FiCheck className="w-3 h-3" />
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
            </motion.li>
          ))}
        </ul>
      )}

      {/* Link with hover effect */}
      <Link href={link} passHref className="mt-auto">
        <motion.div
          className="relative inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 group/link"
          whileHover={{ x: 3 }}
        >
          <span>Meer informatie</span>
          <FiArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard; 