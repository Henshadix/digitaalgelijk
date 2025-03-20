'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiArrowRight, FiHeart, FiLinkedin, FiTwitter, FiFacebook, FiInstagram, FiChevronRight, FiAward, FiShield, FiCheckCircle } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
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
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const linkVariants = {
    initial: { x: 0 },
    hover: { 
      x: 5, 
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };
  
  const socialVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1, 
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 8 
      } 
    },
    tap: { scale: 0.95 }
  };

  const topBarItemVariants = {
    initial: { y: 0 },
    hover: { 
      y: -2,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };
  
  const footerLinks = [
    {
      title: 'Diensten',
      links: [
        { name: 'Hardware Opkopen', href: '/diensten/hardware-opkopen' },
        { name: 'Data Verwijdering', href: '/diensten/data-verwijdering' },
        { name: 'Hardware Recycling', href: '/diensten/hardware-recycling' },
        { name: 'Logistieke Diensten', href: '/diensten/logistieke-diensten' },
      ]
    },
    {
      title: 'Bedrijf',
      links: [
        { name: 'Over Ons', href: '/over-ons' },
        { name: 'Certificeringen', href: '/over-ons#certificeringen' },
        { name: 'Vacatures', href: '/over-ons#vacatures' },
      ]
    },
    {
      title: 'Ondersteuning',
      links: [
        { name: 'Contact', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Algemene Voorwaarden', href: '/algemene-voorwaarden' },
        { name: 'Cookiebeleid', href: '/cookiebeleid' },
      ]
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Wave divider for smooth transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg className="relative block w-full h-[70px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-gray-50 dark:fill-gray-900 drop-shadow-sm"></path>
        </svg>
      </div>
      
      {/* Top Bar with Contact Info - Similar to Navbar top bar */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800 text-white py-6 relative overflow-hidden">
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
          
          {/* Subtle light beam effect */}
          <motion.div 
            className="absolute -inset-1/2 opacity-10 bg-gradient-radial from-blue-100 to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              x: ['-10%', '110%'],
              transition: {
                duration: 15,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
              }
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo and company name */}
            <div className="flex items-center space-x-3">
              <motion.div 
                className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg md:text-xl">DG</span>
                </div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Digitaal<span className="text-blue-300">gelijk</span></span>
                <span className="text-xs font-medium text-blue-200">Duurzame IT-oplossingen</span>
              </div>
            </div>
            
            {/* Contact info */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <motion.a 
                href="tel:+31201234567" 
                className="flex items-center text-sm hover:text-blue-200 transition-colors group"
                variants={topBarItemVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.div 
                  className="bg-blue-700/50 p-1.5 rounded-full mr-2 group-hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiPhone size={14} />
                </motion.div>
                <span>+31 (0)20 123 4567</span>
              </motion.a>
              <motion.a 
                href="mailto:info@digitaalgelijk.nl" 
                className="flex items-center text-sm hover:text-blue-200 transition-colors group"
                variants={topBarItemVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.div 
                  className="bg-blue-700/50 p-1.5 rounded-full mr-2 group-hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiMail size={14} />
                </motion.div>
                <span>info@digitaalgelijk.nl</span>
              </motion.a>
              <motion.div 
                className="flex items-center text-sm group"
                variants={topBarItemVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.div 
                  className="bg-blue-700/50 p-1.5 rounded-full mr-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <FiMapPin size={14} />
                </motion.div>
                <span>Amsterdam, Nederland</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-green-400/10 dark:bg-green-600/10 blur-3xl"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3 
                className="text-lg font-bold mb-4 text-gray-900 dark:text-white flex items-center"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 h-5 w-1 rounded-full mr-2 inline-block"></span>
                Over Digitaalgelijk
              </motion.h3>
              <motion.p 
                className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-md"
                variants={itemVariants}
              >
                Digitaalgelijk is gespecialiseerd in duurzame IT-oplossingen voor bedrijven. Wij bieden diensten aan op het gebied van hardware opkopen, data verwijdering, hardware recycling en logistieke diensten.
              </motion.p>
              
              {/* Certifications */}
              <motion.div 
                className="mb-6"
                variants={itemVariants}
              >
                <h4 className="text-sm font-semibold mb-3 text-gray-800 dark:text-gray-200">Certificeringen</h4>
                <div className="flex flex-wrap gap-3">
                  <motion.div 
                    className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm flex items-center justify-center w-12 h-12"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiAward className="text-blue-600 dark:text-blue-400" size={24} />
                  </motion.div>
                  <motion.div 
                    className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm flex items-center justify-center w-12 h-12"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiShield className="text-green-600 dark:text-green-400" size={24} />
                  </motion.div>
                  <motion.div 
                    className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm flex items-center justify-center w-12 h-12"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiCheckCircle className="text-purple-600 dark:text-purple-400" size={24} />
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Social Media */}
              <motion.div variants={itemVariants}>
                <h4 className="text-sm font-semibold mb-3 text-gray-800 dark:text-gray-200">Volg ons</h4>
                <div className="flex space-x-3">
                  <motion.a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-700/10 dark:bg-blue-700/20 text-blue-700 dark:text-blue-400 p-2 rounded-full hover:bg-blue-700/20 dark:hover:bg-blue-700/30 transition-colors"
                    variants={socialVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FiLinkedin size={18} />
                  </motion.a>
                  <motion.a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 dark:text-blue-400 p-2 rounded-full hover:bg-blue-500/20 dark:hover:bg-blue-500/30 transition-colors"
                    variants={socialVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FiTwitter size={18} />
                  </motion.a>
                  <motion.a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-800/10 dark:bg-blue-800/20 text-blue-800 dark:text-blue-500 p-2 rounded-full hover:bg-blue-800/20 dark:hover:bg-blue-800/30 transition-colors"
                    variants={socialVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FiFacebook size={18} />
                  </motion.a>
                  <motion.a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-pink-600/10 dark:bg-pink-600/20 text-pink-600 dark:text-pink-400 p-2 rounded-full hover:bg-pink-600/20 dark:hover:bg-pink-600/30 transition-colors"
                    variants={socialVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FiInstagram size={18} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Footer Links */}
            {footerLinks.map((column, idx) => (
              <motion.div 
                key={column.title}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col"
              >
                <motion.h3 
                  className="text-lg font-bold mb-4 text-gray-900 dark:text-white flex items-center"
                  variants={itemVariants}
                >
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 h-5 w-1 rounded-full mr-2 inline-block"></span>
                  {column.title}
                </motion.h3>
                <motion.ul className="space-y-2" variants={containerVariants}>
                  {column.links.map((link, linkIdx) => (
                    <motion.li key={link.name} variants={itemVariants} custom={linkIdx}>
                      <Link href={link.href} passHref>
                        <motion.div 
                          className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors group cursor-pointer"
                          variants={linkVariants}
                          initial="initial"
                          whileHover="hover"
                        >
                          <FiChevronRight className="mr-1 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                          <span>{link.name}</span>
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom Bar */}
          <motion.div 
            className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Digitaalgelijk. Alle rechten voorbehouden.
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span>Gemaakt met</span>
              <FiHeart className="mx-1 text-red-500" size={14} />
              <span>in Amsterdam</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 