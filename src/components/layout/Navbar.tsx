'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiChevronDown, FiShield, FiRefreshCw, FiMonitor, FiArrowRight, FiTruck } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
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
    setActiveDropdown(null);
    setHoverDropdown(null);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle escape key to close dropdown
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setHoverDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

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
          icon: <FiMonitor className="text-blue-600" size={18} />,
          description: 'Verkoop uw gebruikte IT-apparatuur voor een eerlijke prijs',
          category: 'Hardware'
        },
        { 
          name: 'Hardware Recycling', 
          path: '/diensten/hardware-recycling', 
          icon: <FiRefreshCw className="text-green-600" size={18} />,
          description: 'Duurzame verwerking van afgedankte hardware',
          category: 'Hardware'
        },
        { 
          name: 'Data Verwijdering', 
          path: '/diensten/data-verwijdering', 
          icon: <FiShield className="text-purple-600" size={18} />,
          description: 'Veilige en gecertificeerde dataverwijdering',
          category: 'Data'
        },
        { 
          name: 'Logistieke Diensten', 
          path: '/diensten/logistieke-diensten', 
          icon: <FiTruck className="text-amber-600" size={18} />,
          description: 'Veilig transport en opslag van uw IT-apparatuur',
          category: 'Logistiek'
        },
      ]
    },
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

  // Hover handlers for dropdown
  const handleMouseEnter = (name: string) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoverDropdown(name);
  };

  const handleMouseLeave = () => {
    // Set a small delay before closing to allow mouse movement between button and dropdown
    hoverTimeoutRef.current = setTimeout(() => {
      setHoverDropdown(null);
    }, 100);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Group items by category
  const groupByCategory = (items: any[]) => {
    const grouped: { [key: string]: any[] } = {};
    
    items.forEach(item => {
      const category = item.category || 'Algemeen';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(item);
    });
    
    return grouped;
  };

  // Determine if a dropdown should be shown (either by hover or click)
  const isDropdownVisible = (name: string) => {
    return activeDropdown === name || hoverDropdown === name;
  };

  return (
    <header className="relative z-50">
      {/* Top Bar - Verbeterd voor betere leesbaarheid en kleurcontrast */}
      <div className="hidden md:block bg-blue-900 text-white py-1.5 border-b border-blue-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 md:gap-6 text-sm">
              <a 
                href="tel:+31649892654" 
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
                aria-label="Bel ons op +31 6 4989 2654"
              >
                <span className="bg-blue-800 p-1 rounded-full">
                  <FiPhone size={14} />
                </span>
                <span className="font-medium">+31 6 4989 2654</span>
              </a>
              <a 
                href="mailto:info@digitaalgelijk.nl" 
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
                aria-label="Email ons op info@digitaalgelijk.nl"
              >
                <span className="bg-blue-800 p-1 rounded-full">
                  <FiMail size={14} />
                </span>
                <span className="font-medium">info@digitaalgelijk.nl</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <div className="flex items-center gap-1.5">
                <FiMapPin size={14} />
                <span>Regio Nijmegen</span>
              </div>
              <div className="hidden lg:block h-4 w-px bg-blue-700 mx-2"></div>
              <span className="hidden lg:block">Ma-Vr: 9:00 - 17:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Verbeterd voor betere leesbaarheid en fijnere transitie */}
      <div 
        className={`sticky top-0 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
            : 'bg-white dark:bg-gray-900 py-3 md:py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo - Verbeterd voor betere herkenbaarheid */}
            <Link href="/" className="flex items-center gap-2.5 z-10">
              <div className="relative w-10 h-10 md:w-11 md:h-11">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-md flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg md:text-xl">DG</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  Digitaal<span className="text-blue-600">gelijk</span>
                </span>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                  Duurzame IT-oplossingen
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Verbeterd voor betere leesbaarheid en toegankelijkheid */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button 
                      ref={dropdownButtonRef}
                      onClick={() => toggleDropdown(link.name)}
                      className={`flex items-center px-3 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                        isDropdownVisible(link.name) 
                          ? 'text-blue-700 dark:text-blue-400 font-medium' 
                          : 'text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium'
                      }`}
                      aria-expanded={isDropdownVisible(link.name)}
                      aria-controls={`dropdown-${link.name}`}
                      aria-haspopup="true"
                    >
                      <span className="font-medium">{link.name}</span>
                      <motion.div 
                        animate={{ rotate: isDropdownVisible(link.name) ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-1.5"
                      >
                        <FiChevronDown size={16} />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {isDropdownVisible(link.name) && (
                        <motion.div 
                          ref={dropdownRef}
                          id={`dropdown-${link.name}`}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 mt-1 w-80 bg-gray-900 dark:bg-gray-900 rounded-lg shadow-lg border border-gray-800 dark:border-gray-800 overflow-hidden z-50 text-white"
                          onMouseEnter={() => {
                            // When mouse enters dropdown menu, clear any timeout
                            if (hoverTimeoutRef.current) {
                              clearTimeout(hoverTimeoutRef.current);
                              hoverTimeoutRef.current = null;
                            }
                            setHoverDropdown(link.name);
                          }}
                          onMouseLeave={() => {
                            // When mouse leaves dropdown menu, start closing timeout
                            handleMouseLeave();
                          }}
                        >
                          <div className="p-3">
                            {Object.entries(groupByCategory(link.items || [])).map(([category, items]) => (
                              <div key={category} className="mb-3 last:mb-0">
                                <div className="font-medium text-xs uppercase tracking-wider text-blue-400 dark:text-blue-400 mb-1.5 px-2">
                                  {category}
                                </div>
                                <div className="grid gap-1">
                                  {items.map((item, itemIndex) => (
                                    <motion.div
                                      key={item.name}
                                      initial={{ opacity: 0, x: -5 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: itemIndex * 0.05, duration: 0.2 }}
                                    >
                                      <Link 
                                        href={item.path}
                                        className="flex items-start p-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-800 transition-all duration-150 group focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500/50"
                                        onClick={() => {
                                          setActiveDropdown(null);
                                          setHoverDropdown(null);
                                        }}
                                      >
                                        <div className="p-2 rounded-md bg-gray-800 dark:bg-gray-800 mr-3 group-hover:scale-110 transition-transform group-hover:shadow-sm">
                                          {item.icon}
                                        </div>
                                        <div className="pt-1">
                                          <div className="font-medium text-white dark:text-white group-hover:text-blue-400 dark:group-hover:text-blue-400 transition-colors">
                                            {item.name}
                                          </div>
                                          <div className="text-sm text-gray-300 dark:text-gray-300 line-clamp-2">
                                            {item.description}
                                          </div>
                                        </div>
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            ))}
                            <div className="mt-2 pt-2 border-t border-gray-800 dark:border-gray-800">
                              <Link
                                href="/diensten"
                                className="flex justify-between items-center px-2 py-1.5 text-sm font-medium text-blue-400 dark:text-blue-400 hover:underline"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setHoverDropdown(null);
                                }}
                              >
                                <span>Alle diensten bekijken</span>
                                <FiArrowRight size={14} />
                              </Link>
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
                    className={`px-3 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                      pathname === link.path 
                        ? 'text-blue-700 dark:text-blue-400 font-medium' 
                        : 'text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              
              {/* CTA Button - Verbeterd voor betere zichtbaarheid en toegankelijkheid */}
              <Link 
                href="/contact" 
                className="ml-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 flex items-center gap-1.5"
              >
                <span>Offerte Aanvragen</span>
                <FiArrowRight size={16} />
              </Link>
            </div>

            {/* Mobile Menu Button - Verbeterd voor betere zichtbaarheid */}
            <button
              className="md:hidden p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Sluit menu" : "Open menu"}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Verbeterde layout en leesbaarheid */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  link.dropdown ? (
                    <div key={link.name} className="border-b border-gray-100 dark:border-gray-800 pb-1">
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="w-full flex justify-between items-center px-4 py-3 rounded-md text-left font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500/40"
                        aria-expanded={activeDropdown === link.name}
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
                            className="pl-4 pb-2 space-y-1 mt-1 bg-gray-900 dark:bg-gray-900 rounded-md"
                          >
                            {Object.entries(groupByCategory(link.items || [])).map(([category, items]) => (
                              <div key={category} className="pt-2 first:pt-0">
                                <div className="text-xs font-medium uppercase tracking-wider text-blue-400 dark:text-blue-400 px-4 pb-1">
                                  {category}
                                </div>
                                {items.map((item) => (
                                  <Link
                                    key={item.path}
                                    href={item.path}
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-md text-white dark:text-white hover:text-blue-400 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500/40"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <span className="bg-gray-800 dark:bg-gray-800 p-1.5 rounded-md shadow-sm">
                                      {item.icon}
                                    </span>
                                    <span className="font-medium">{item.name}</span>
                                  </Link>
                                ))}
                              </div>
                            ))}
                            <div className="mt-2 pt-2 px-4 border-t border-gray-800 dark:border-gray-800">
                              <Link
                                href="/diensten"
                                className="flex items-center justify-between text-sm font-medium text-blue-400 dark:text-blue-400 py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                <span>Alle diensten bekijken</span>
                                <FiArrowRight size={14} />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`px-4 py-3 rounded-md font-medium border-b border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500/40 ${
                        pathname === link.path 
                          ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                          : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/60'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                <div className="pt-2 mt-2">
                  <Link
                    href="/contact"
                    className="block px-4 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium rounded-md text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Offerte Aanvragen
                  </Link>
                </div>
                
                {/* Mobiele contactinformatie toevoegen */}
                <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <a href="tel:+31649892654" className="flex items-center gap-2">
                      <FiPhone size={16} className="text-blue-600 dark:text-blue-400" />
                      <span>+31 6 4989 2654</span>
                    </a>
                    <a href="mailto:info@digitaalgelijk.nl" className="flex items-center gap-2">
                      <FiMail size={16} className="text-blue-600 dark:text-blue-400" />
                      <span>info@digitaalgelijk.nl</span>
                    </a>
                    <div className="flex items-center gap-2">
                      <FiMapPin size={16} className="text-blue-600 dark:text-blue-400" />
                      <span>Regio Nijmegen</span>
                    </div>
                  </div>
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