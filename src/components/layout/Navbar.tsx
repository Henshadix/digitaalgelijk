'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiChevronDown, FiShield, FiRefreshCw, FiMonitor, FiArrowRight, FiFileText, FiTruck, FiDollarSign } from 'react-icons/fi';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  
  // Scroll progress for advanced animations
  const { scrollYProgress } = useScroll();
  const navbarOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.98]);
  const navbarBlur = useTransform(scrollYProgress, [0, 0.05], [0, 8]);
  const navbarScale = useTransform(scrollYProgress, [0, 0.05], [1, 0.98]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setMegaMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Diensten', 
      path: '/diensten',
      dropdown: true,
      items: [
        { 
          name: 'Hardware Opkopen', 
          path: '/diensten/hardware-opkopen', 
          icon: <FiMonitor />,
          description: 'Verkoop uw gebruikte IT-apparatuur voor een eerlijke prijs',
          color: 'blue'
        },
        { 
          name: 'Hardware Recycling', 
          path: '/diensten/hardware-recycling', 
          icon: <FiRefreshCw />,
          description: 'Duurzame verwerking van afgedankte hardware',
          color: 'green'
        },
        { 
          name: 'Data Verwijdering', 
          path: '/diensten/data-verwijdering', 
          icon: <FiShield />,
          description: 'Veilige en gecertificeerde dataverwijdering',
          color: 'purple'
        },
        { 
          name: 'Logistieke Diensten', 
          path: '/diensten/logistieke-diensten', 
          icon: <FiTruck />,
          description: 'Veilig transport en opslag van uw IT-apparatuur',
          color: 'blue'
        },
      ]
    },
    { name: 'Duurzaamheid', path: '/duurzaamheid' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Over Ons', path: '/over-ons' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  // Logo hover effect animatie
  const logoHoverVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.2 } }
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

  const megaMenuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    hover: { 
      x: 5,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <header className="relative z-50">
      {/* Top Bar with Contact Info - Enhanced with modern gradient and animated elements */}
      <div className="hidden md:block bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800 text-white py-2 relative overflow-hidden">
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
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
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
            <motion.div 
              className="text-sm font-medium"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.02 }}
            >
              <span>Ma-Vr: 9:00 - 17:00</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Enhanced with better glass effect */}
      <motion.nav 
        className={`sticky top-0 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 py-2 backdrop-blur-md' 
            : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-3 md:py-4'
        }`}
        style={{ 
          backdropFilter: `blur(${navbarBlur.get()}px)`,
          opacity: navbarOpacity,
          scale: navbarScale,
        }}
      >
        {/* Subtiele schaduw onderaan voor betere overgang */}
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-white/5 dark:to-gray-900/5 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 z-10 group">
              <motion.div 
                className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300"
                variants={logoVariants}
                initial="initial"
                whileHover="hover"
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg md:text-xl">DG</span>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-lg md:text-xl">DG</span>
                </motion.div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white">Digitaal<span className="text-blue-600">gelijk</span></span>
                <div className="relative">
                  <motion.span 
                    className="text-xs font-medium bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Duurzame IT-oplossingen
                  </motion.span>
                  <motion.span 
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-green-500 to-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Improved with better hover effects */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.name} className="relative">
                    <button 
                      onClick={() => toggleDropdown(link.name)}
                      className={`flex items-center px-3 py-2 rounded-md transition-colors duration-200 ${
                        activeDropdown === link.name 
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                      }`}
                    >
                      <span>{link.name}</span>
                      <motion.div 
                        animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-1"
                      >
                        <FiChevronDown size={16} />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: 10, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
                        >
                          <div className="p-2">
                            <div className="grid gap-1">
                              {link.items?.map((item) => (
                                <Link 
                                  key={item.name}
                                  href={item.path}
                                  className="flex items-start p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className={`p-2 rounded-md bg-${item.color}-500/20 text-${item.color}-600 dark:text-${item.color}-400 mr-3`}>
                                    {item.icon}
                                  </div>
                                  <div>
                                    <div className="font-medium text-gray-900 dark:text-white">{item.name}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{item.description}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link 
                    key={link.name}
                    href={link.path}
                    className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                      pathname === link.path 
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              
              {/* CTA Button - Improved with gradient and animation */}
              <Link 
                href="/offerte-aanvragen" 
                className="ml-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-md transition-all duration-200 shadow-sm hover:shadow-md flex items-center"
              >
                <span>Offerte Aanvragen</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight className="ml-1" size={16} />
                </motion.div>
              </Link>
              
              {/* Theme Toggle */}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  link.dropdown ? (
                    <div key={link.name}>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="w-full flex justify-between items-center px-4 py-3 rounded-md text-left font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {link.name}
                        <motion.div
                          animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FiChevronDown />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-4 mt-1 space-y-1"
                          >
                            {link.items?.map((item) => (
                              <Link
                                key={item.path}
                                href={item.path}
                                className="flex items-center px-4 py-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="mr-2">{item.icon}</span>
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`px-4 py-3 rounded-md font-medium ${
                        pathname === link.path 
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                <div className="pt-2 border-t border-gray-200 dark:border-gray-800 mt-2">
                  <Link
                    href="/contact"
                    className="block px-4 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium rounded-md text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Offerte Aanvragen
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 