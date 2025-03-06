'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiClock, FiTool, FiMail, FiCalendar, FiAlertCircle, FiChevronRight, FiLinkedin, FiTwitter, FiInstagram, FiCheckCircle, FiSun, FiMoon, FiMonitor, FiFacebook } from 'react-icons/fi';
import { useEffect, useState, useRef } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

// Component voor de countdown timer box
const CountdownBox = ({ value, label, ariaLabel }: { value: number; label: string; ariaLabel: string }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-1.5 sm:p-2 md:p-3 lg:p-4 w-14 sm:w-16 md:w-18 lg:w-20 xl:w-24 text-center relative overflow-hidden border border-gray-100 dark:border-gray-700"
    initial={{ scale: 1 }}
    animate={{ 
      scale: [1, 1.03, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }}
    whileHover={{ 
      y: -3,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
    aria-label={ariaLabel}
  >
    <div className="absolute top-0 left-0 w-full h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-green-500 opacity-75"></div>
    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">{value || 0}</div>
    <div className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1">{label}</div>
  </motion.div>
);

// Component voor sociale media link
const SocialMediaLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700"
    whileHover={{ 
      scale: 1.1, 
      y: -3,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default function UnderConstruction() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showNotification, setShowNotification] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const { resolvedTheme, setTheme } = useNextTheme();

  // Stel de lanceerdatum in op 1 juni 2025
  const launchDate = new Date('2025-06-01T00:00:00');
  
  // Bereken de voortgang als percentage
  const calculateProgress = () => {
    const startDate = new Date('2024-01-01T00:00:00'); // Project start datum
    const now = new Date();
    const totalDuration = launchDate.getTime() - startDate.getTime();
    const elapsed = now.getTime() - startDate.getTime();
    
    // Zorg ervoor dat het percentage tussen 0 en 100 ligt
    const percentage = Math.min(100, Math.max(0, Math.floor((elapsed / totalDuration) * 100)));
    return percentage;
  };
  
  // Bereken countdown direct (als fallback)
  const calculateCountdown = () => {
    const now = new Date();
    const difference = launchDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  };
  
  const progressPercentage = calculateProgress();
  const initialCountdown = calculateCountdown();

  useEffect(() => {
    // Initialiseer countdown met berekende waarden
    setCountdown(initialCountdown);
    setMounted(true);
    
    // CSS toevoegen om de header en footer te verbergen
    const style = document.createElement('style');
    style.innerHTML = `
      header, footer {
        display: none !important;
      }
      main {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        min-height: 100vh !important;
        height: auto !important;
        overflow-x: hidden !important;
      }
      body {
        overflow-x: hidden !important;
        height: 100% !important;
        position: relative !important;
      }
      html {
        height: 100% !important;
        overflow-x: hidden !important;
      }
    `;
    document.head.appendChild(style);

    // Check of het een mobiel apparaat is
    const checkMobile = () => {
      const isMobileDevice = typeof window !== 'undefined' && 
        (window.innerWidth < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Mouse move effect alleen op desktop - performance optimalisatie
    let mouseMoveHandler: ((e: MouseEvent) => void) | null = null;
    
    if (!isMobile) {
      mouseMoveHandler = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = clientX / window.innerWidth;
        const y = clientY / window.innerHeight;
        
        setMousePosition({ x, y });
      };
      
      window.addEventListener('mousemove', mouseMoveHandler);
    }

    // Countdown timer
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    // Toon notificatie na 3 seconden
    const notificationTimer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (mouseMoveHandler) {
        window.removeEventListener('mousemove', mouseMoveHandler);
      }
      document.head.removeChild(style);
      clearInterval(timer);
      clearTimeout(notificationTimer);
    };
  }, [isMobile, launchDate]);

  // Animatie varianten
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

  // Notificatie animatie
  const notificationVariants = {
    hidden: { x: 300, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      x: 300,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // Formateer datum naar leesbare string
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('nl-NL', options);
  };

  // Formulier afhandeling
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name && message) {
      // Simuleer een API call
      setIsLoading(true);
      
      setTimeout(() => {
        setIsLoading(false);
        setIsSubscribed(true);
        
        // Reset formulier
        setEmail('');
        setName('');
        setMessage('');
        
        setTimeout(() => {
          setIsSubscribed(false);
        }, 5000);
      }, 1500);
    }
  };

  // Focus op email input
  const focusEmailInput = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };

  // Wissel tussen licht en donker thema
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  // Animatie voor de thema toggle
  const themeToggleVariants = {
    initial: { rotate: 0 },
    animate: { rotate: 360, transition: { duration: 0.5 } }
  };

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <div className="relative min-h-screen h-screen w-full bg-white dark:bg-gray-900 overflow-hidden flex flex-col items-center justify-center px-4 py-8 md:py-16">
      {/* Decoratieve achtergrond elementen - gereduceerd voor betere performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid patroon */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] dark:opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* Animated gradient orbs - gereduceerd tot 2 voor betere performance */}
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-200 dark:bg-blue-800 opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{ 
            x: !isMobile ? mousePosition.x * 20 - 10 : 0,
            y: !isMobile ? mousePosition.y * 20 - 10 : 0
          }}
          aria-hidden="true"
        />
        
        <motion.div 
          className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-green-200 dark:bg-green-800 opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.12, 0.1],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{ 
            x: !isMobile ? mousePosition.x * -20 + 10 : 0,
            y: !isMobile ? mousePosition.y * -20 + 10 : 0
          }}
          aria-hidden="true"
        />
        
        {/* Subtiele lijnen in de achtergrond */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-green-500 to-transparent"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
        </div>
      </div>

      {/* Theme toggle button */}
      {mounted && (
        <motion.button
          className="fixed top-6 right-6 z-50 bg-white dark:bg-gray-800 shadow-md rounded-full p-3 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isDarkMode ? 'Schakel naar licht thema' : 'Schakel naar donker thema'}
          initial="initial"
          animate="animate"
          variants={themeToggleVariants}
        >
          {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </motion.button>
      )}

      {/* Notificatie */}
      <AnimatePresence>
        {showNotification && (
          <motion.div 
            className="fixed top-6 left-6 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 max-w-xs border border-gray-200 dark:border-gray-700"
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-blue-600 dark:text-blue-400">
                <FiAlertCircle size={24} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Website in ontwikkeling</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Wij werken hard om deze website zo spoedig mogelijk beschikbaar te stellen.</p>
                <div className="mt-3 flex justify-end">
                  <button 
                    onClick={() => setShowNotification(false)}
                    className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 focus:outline-none focus:underline"
                    aria-label="Sluit notificatie"
                  >
                    Sluiten
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Succes notificatie voor contactformulier */}
      <AnimatePresence>
        {isSubscribed && (
          <motion.div 
            className="fixed bottom-6 right-6 z-50 bg-green-50 dark:bg-green-900 shadow-lg rounded-lg p-4 max-w-xs border border-green-200 dark:border-green-700"
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 text-green-600 dark:text-green-400">
                <FiCheckCircle size={24} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Bericht verzonden!</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Bedankt voor uw bericht. We nemen zo spoedig mogelijk contact met u op.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8 lg:py-12 min-h-screen flex flex-col justify-center overflow-hidden">
        <motion.div 
          className="relative z-10 mx-auto text-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div 
            className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 md:mb-6"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              rotate: 5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full"></div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 rounded-full"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-white/10 to-blue-600/0"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-white font-bold text-4xl relative z-10">DG</span>
            </div>
          </motion.div>
          
          {/* Bedrijfsnaam */}
          <motion.div 
            className="flex flex-col items-center mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Digitaal<span className="text-blue-600">gelijk</span></span>
            <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Duurzame IT-oplossingen
            </span>
          </motion.div>
          
          {/* Titel */}
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 md:mb-3 text-gray-800 dark:text-white"
            variants={itemVariants}
          >
            Website in{" "}
            <motion.span 
              className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent inline-block"
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              ontwikkeling
            </motion.span>
          </motion.h1>
          
          {/* Subtitel */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 px-4 sm:px-6 md:px-0"
            variants={itemVariants}
          >
            Wij werken momenteel hard aan deze website. Binnenkort vindt u hier alle informatie over onze duurzame IT-oplossingen.
          </motion.p>
          
          {/* Countdown timer - prominenter gemaakt */}
          <motion.div
            className="mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2 sm:mb-4 text-gray-600 dark:text-gray-300">
                <FiCalendar className="mr-2 text-blue-500 dark:text-blue-400" size={16} aria-hidden="true" />
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">Geplande lanceerdatum: {formatDate(launchDate)}</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-2">
                <CountdownBox value={countdown.days} label="Dagen" ariaLabel={`${countdown.days} dagen`} />
                <CountdownBox value={countdown.hours} label="Uren" ariaLabel={`${countdown.hours} uren`} />
                <CountdownBox value={countdown.minutes} label="Minuten" ariaLabel={`${countdown.minutes} minuten`} />
                <CountdownBox value={countdown.seconds} label="Seconden" ariaLabel={`${countdown.seconds} seconden`} />
              </div>
              
              <motion.div 
                className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-center"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FiClock className="mr-2 text-blue-500" size={14} />
                <span>We werken toe naar onze lancering op 1 juni 2025</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Voortgangsbalk */}
          <motion.div 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-4 sm:mb-6 md:mb-8 bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden shadow-inner"
            variants={itemVariants}
            aria-label={`Voortgang: ${progressPercentage}%`}
            role="progressbar"
            aria-valuenow={progressPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <motion.div 
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-green-500 h-2 sm:h-3 rounded-full relative"
              initial={{ width: "0%" }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <motion.div
                className="absolute top-0 left-0 bottom-0 right-0 bg-white opacity-20"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <div className="flex justify-center mt-2">
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{progressPercentage}% voltooid</span>
            </div>
          </motion.div>
          
          {/* Hoofdsectie met illustratie en contactformulier */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-8">
            {/* Constructie illustratie - vereenvoudigd voor betere performance */}
            <motion.div 
              className="relative w-full max-w-sm mx-auto order-2 lg:order-1"
              variants={itemVariants}
            >
              <div className="relative h-56 md:h-64 w-full flex items-center justify-center">
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <FiTool className="text-blue-600 dark:text-blue-400" size={120} aria-hidden="true" />
                </motion.div>
                <motion.div
                  className="absolute bottom-0 w-full h-1 bg-blue-100 dark:bg-blue-900 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                  aria-hidden="true"
                />
              </div>
              
              {/* Sociale media links - geoptimaliseerd met component */}
              <motion.div
                className="mt-4 sm:mt-6 md:mt-8"
                variants={itemVariants}
              >
                <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-1 sm:mb-2">Volg onze voortgang</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-4">Blijf op de hoogte via onze sociale mediakanalen</p>
                <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6">
                  <SocialMediaLink 
                    href="https://linkedin.com/company/digitaalgelijk" 
                    icon={<FiLinkedin size={16} className="sm:text-lg md:text-xl" aria-hidden="true" />} 
                    label="LinkedIn" 
                  />
                  <SocialMediaLink 
                    href="https://twitter.com/digitaalgelijk" 
                    icon={<FiTwitter size={16} className="sm:text-lg md:text-xl" aria-hidden="true" />} 
                    label="Twitter" 
                  />
                  <SocialMediaLink 
                    href="https://instagram.com/digitaalgelijk" 
                    icon={<FiInstagram size={16} className="sm:text-lg md:text-xl" aria-hidden="true" />} 
                    label="Instagram" 
                  />
                  <SocialMediaLink 
                    href="https://facebook.com/digitaalgelijk" 
                    icon={<FiFacebook size={16} className="sm:text-lg md:text-xl" aria-hidden="true" />} 
                    label="Facebook" 
                  />
                </div>
              </motion.div>
            </motion.div>
            
            {/* Simpel contactformulier */}
            <motion.div
              className="max-w-sm mx-auto order-1 lg:order-2 w-full"
              variants={itemVariants}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-5 md:p-6 shadow-lg border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Contact</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
                  Heeft u vragen? Neem contact met ons op via onderstaand formulier.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4">
                  <div className="relative">
                    <label htmlFor="name-input" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                      Naam
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      placeholder="Uw naam"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      aria-label="Uw naam"
                    />
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email-input" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                      E-mailadres
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} aria-hidden="true" />
                      <input
                        id="email-input"
                        type="email"
                        placeholder="Uw e-mailadres"
                        className="w-full pl-10 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        ref={emailInputRef}
                        aria-label="E-mailadres voor contact"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="message-input" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                      Bericht
                    </label>
                    <textarea
                      id="message-input"
                      placeholder="Uw bericht"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      aria-label="Uw bericht"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
                    whileHover={{ scale: isLoading ? 1 : 1.03, y: -2 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Even geduld...</span>
                      </div>
                    ) : (
                      "Versturen"
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 