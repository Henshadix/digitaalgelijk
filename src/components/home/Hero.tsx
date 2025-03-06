'use client';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { FiMonitor, FiRefreshCw, FiShield, FiArrowRight, FiCheck, FiChevronRight, FiTruck } from 'react-icons/fi';

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Parallax effect voor de achtergrond
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  // Vloeiende beweging voor mouse parallax
  const springConfig = { stiffness: 100, damping: 30 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  // Automatisch wisselen van actieve feature
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Check of het een mobiel apparaat is
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Mouse move effect alleen op desktop
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const targetRect = targetRef.current?.getBoundingClientRect();
        
        if (targetRect) {
          // Bereken relatieve positie binnen het element
          const x = (clientX - targetRect.left) / targetRect.width;
          const y = (clientY - targetRect.top) / targetRect.height;
          
          setMousePosition({ x, y });
        }
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', checkMobile);
      };
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);
  
  // Update de spring waarden wanneer de muispositie verandert
  useMotionValueEvent(useSpring(mousePosition.x, springConfig), "change", (latest) => {
    mouseX.set(latest * 40 - 20); // Verhoogd voor meer dynamisch effect
  });
  
  useMotionValueEvent(useSpring(mousePosition.y, springConfig), "change", (latest) => {
    mouseY.set(latest * 40 - 20); // Verhoogd voor meer dynamisch effect
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: custom * 0.15,
        ease: "easeOut" 
      }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, type: "spring", stiffness: 100 }
    }
  };
  
  // Animatie voor de statistieken
  const counterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        delay: 0.6
      }
    }
  };

  // Nieuwe animatie voor de feature highlight
  const featureVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, type: "spring" }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.3 }
    }
  };

  // Features data
  const features = [
    {
      title: "Eerlijke prijzen",
      description: "Transparante waardering voor uw IT-hardware",
      icon: <FiCheck className="text-blue-600 dark:text-blue-400" size={20} aria-hidden="true" />
    },
    {
      title: "GDPR-compliant dataverwijdering",
      description: "Veilig en met certificaat van verwijdering",
      icon: <FiShield className="text-purple-600 dark:text-purple-400" size={20} aria-hidden="true" />
    },
    {
      title: "Duurzame recycling",
      description: "99.5% hergebruik van materialen",
      icon: <FiRefreshCw className="text-green-600 dark:text-green-400" size={20} aria-hidden="true" />
    },
    {
      title: "Gratis ophaalservice",
      description: "In heel Nederland, ongeacht hoeveelheid",
      icon: <FiTruck className="text-amber-600 dark:text-amber-400" size={20} aria-hidden="true" />
    }
  ];

  return (
    <section ref={targetRef} className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Decoratieve elementen voor de overgang van header naar hero */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/50 dark:from-gray-900/50 to-transparent z-0 pointer-events-none"></div>
      
      {/* Subtiele golvende lijn als overgang */}
      <div className="absolute top-0 inset-x-0 z-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-auto text-blue-50 dark:text-blue-900/20 fill-current" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>
      
      {/* Subtiele decoratieve elementen */}
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
      />
      
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-green-200 dark:bg-green-800 opacity-10 blur-3xl"
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
      />
      
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Enhanced background pattern with more dynamic elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Overgang element van Hero naar Services */}
            <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-900/50 z-0"></div>
            
            {/* Bestaande achtergrond elementen */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02] dark:opacity-[0.02]"></div>
            
            <motion.div 
              className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-25 dark:opacity-15"
              style={{ 
                x: !isMobile ? mouseX : 0,
                y: !isMobile ? mouseY : 0
              }}
            ></motion.div>

            {/* Enhanced dynamic background elements */}
            <motion.div 
              className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-500 dark:to-indigo-600 rounded-full filter blur-[120px] opacity-30 transform translate-x-1/2 translate-y-1/2"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.4, 0.3],
                rotate: [0, 15, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{ 
                x: !isMobile ? mouseX.get() * -0.5 : 0,
                y: !isMobile ? mouseY.get() * -0.5 : 0
              }}
            ></motion.div>
            <motion.div 
              className="absolute left-0 top-0 w-1/4 h-1/4 bg-gradient-to-tr from-blue-300 to-purple-400 dark:from-blue-400 dark:to-purple-500 rounded-full filter blur-[120px] opacity-30 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.35, 0.3],
                rotate: [0, -15, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{ 
                x: !isMobile ? mouseX.get() * 0.5 : 0,
                y: !isMobile ? mouseY.get() * 0.5 : 0
              }}
            ></motion.div>
            
            {/* New accent color blob */}
            <motion.div 
              className="absolute left-1/4 bottom-1/4 w-1/5 h-1/5 bg-gradient-to-tr from-green-300 to-green-500 dark:from-green-400 dark:to-green-600 rounded-full filter blur-[100px] opacity-20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
                rotate: [0, 20, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            ></motion.div>

            {/* Enhanced floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => {
                // Use fixed positions for server-side rendering to avoid hydration mismatch
                const fixedPositions = [
                  { left: "1.9%", top: "68.0%" },
                  { left: "98.0%", top: "67.7%" },
                  { left: "23.4%", top: "43.7%" },
                  { left: "92.8%", top: "4.0%" },
                  { left: "27.9%", top: "46.2%" },
                  { left: "73.1%", top: "36.2%" },
                  { left: "23.0%", top: "15.2%" },
                  { left: "2.5%", top: "52.9%" },
                  { left: "41.4%", top: "32.4%" },
                  { left: "2.4%", top: "21.8%" },
                  { left: "85.4%", top: "78.2%" },
                  { left: "62.1%", top: "9.5%" },
                  { left: "33.7%", top: "85.1%" },
                  { left: "78.3%", top: "65.4%" },
                  { left: "15.6%", top: "37.2%" }
                ];
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-500"
                    style={{
                      left: fixedPositions[i].left,
                      top: fixedPositions[i].top,
                      opacity: 0.4
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 4 + i % 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.2
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-40 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-xl"
            >
              <motion.div 
                variants={itemVariant}
                className="relative inline-flex items-center px-5 py-1.5 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-blue-600/10 dark:from-green-500/20 dark:via-blue-500/20 dark:to-blue-600/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6 overflow-hidden group"
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 dark:from-green-500/30 dark:to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  Duurzame IT-oplossingen
                </span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Digitaalgelijk</span> - Uw partner voor duurzame IT
              </motion.h1>
              
              <motion.p 
                variants={itemVariant}
                className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Wij kopen uw gebruikte IT-apparatuur op, zorgen voor veilige dataverwijdering en recyclen op een duurzame manier. Alles onder één dak voor een circulaire IT-economie.
              </motion.p>
              
              {/* Feature highlights with animated indicator - Improved styling */}
              <motion.div 
                variants={itemVariant}
                className="mb-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {features.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-2 rounded-full flex-1 mx-1 transition-all duration-500 ${
                        activeFeature === index 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-400 dark:to-blue-300 scale-y-125' 
                          : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    variants={featureVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="min-h-[80px]"
                  >
                    <div className="flex items-start">
                      <div className={`p-2 rounded-lg ${
                        activeFeature === 0 ? 'bg-blue-100 dark:bg-blue-900/50' :
                        activeFeature === 1 ? 'bg-purple-100 dark:bg-purple-900/50' :
                        activeFeature === 2 ? 'bg-green-100 dark:bg-green-900/50' :
                        'bg-amber-100 dark:bg-amber-900/50'
                      }`}>
                        {features[activeFeature].icon}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                          {features[activeFeature].title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {features[activeFeature].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
              
              {/* Enhanced CTA buttons with improved design */}
              <motion.div 
                variants={itemVariant}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 dark:from-blue-500 dark:to-blue-400 dark:hover:from-blue-600 dark:hover:to-blue-500 text-white transition-all duration-300 px-8 py-4 rounded-xl font-medium text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                  aria-label="Offerte aanvragen"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 w-full h-full">
                    <div className="absolute -inset-[100%] opacity-0 group-hover:opacity-20 group-hover:animate-[spin_5s_linear_infinite] bg-white/20 bg-gradient-conic from-white via-transparent to-transparent"></div>
                  </div>
                  <span className="relative z-10 font-semibold">Offerte aanvragen</span>
                  <motion.div
                    className="relative z-10 ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiArrowRight aria-hidden="true" />
                  </motion.div>
                </Link>
                
                <Link 
                  href="/diensten" 
                  className="group relative overflow-hidden border-2 border-blue-300 dark:border-blue-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-300 transition-all duration-300 px-8 py-4 rounded-xl font-medium text-center flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  aria-label="Bekijk onze diensten"
                >
                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-100/50 to-transparent dark:from-blue-800/20 dark:to-transparent transition-opacity"></div>
                  <span className="relative z-10 font-semibold">Bekijk onze diensten</span>
                  <motion.div
                    className="relative z-10 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -5 }}
                    whileHover={{ x: 0 }}
                  >
                    <FiChevronRight aria-hidden="true" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right column - Image and stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main image with floating effect */}
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="relative">
                  <Image
                    src="/images/hero-image.jpg"
                    alt="IT hardware recycling en dataverwijdering"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-xl"
                    priority
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
                </div>
                
                {/* Stats cards - Positioned away from central text */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  {/* GDPR Compliant card - Left Side */}
                  <div className="absolute left-5 top-1/3 transform -translate-y-1/2 pointer-events-auto">
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 border-2 border-blue-200 dark:border-blue-800"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <div className="flex items-start space-x-2">
                        <div className="bg-blue-100 dark:bg-blue-900/50 p-1.5 rounded-lg">
                          <FiShield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-medium">GDPR Compliant</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">
                            100<span className="text-sm">%</span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Apparaten verwerkt card - Top Side */}
                  <div className="absolute left-1/2 top-5 transform -translate-x-1/2 pointer-events-auto">
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 border-2 border-purple-200 dark:border-purple-800"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <div className="flex items-start space-x-2">
                        <div className="bg-purple-100 dark:bg-purple-900/50 p-1.5 rounded-lg">
                          <FiMonitor className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-purple-600 dark:text-purple-400 font-medium">Apparaten verwerkt</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">
                            300K<span className="text-sm align-top">+</span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Hergebruik card - Right Side */}
                  <div className="absolute right-5 top-1/3 transform -translate-y-1/2 pointer-events-auto">
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 border-2 border-green-200 dark:border-green-800"
                      animate={{ 
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1
                      }}
                    >
                      <div className="flex items-start space-x-2">
                        <div className="bg-green-100 dark:bg-green-900/50 p-1.5 rounded-lg">
                          <FiRefreshCw className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-green-600 dark:text-green-400 font-medium">Hergebruik</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">
                            99.5<span className="text-sm">%</span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Bottom Center Card - Certificering */}
                  <div className="absolute left-1/2 bottom-5 transform -translate-x-1/2 pointer-events-auto">
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 border-2 border-amber-200 dark:border-amber-800"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <div className="flex items-start space-x-2">
                        <div className="bg-amber-100 dark:bg-amber-900/50 p-1.5 rounded-lg">
                          <FiCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-medium">Certificering</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">
                            ISO<span className="text-sm">27001</span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Overgang naar Diensten sectie */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden z-10">
        <svg className="absolute bottom-0 w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="rgb(249 250 251)" 
            fillOpacity="1" 
            className="dark:fill-gray-900"
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        
        {/* Decoratieve elementen voor de overgang */}
        <motion.div 
          className="absolute bottom-8 left-1/4 w-6 h-6 rounded-full bg-blue-500 opacity-20 dark:opacity-30"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute bottom-12 left-1/2 w-4 h-4 rounded-full bg-green-500 opacity-20 dark:opacity-30"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        />
        
        <motion.div 
          className="absolute bottom-10 right-1/4 w-5 h-5 rounded-full bg-purple-500 opacity-20 dark:opacity-30"
          animate={{ 
            y: [0, -12, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
    </section>
  );
};

export default Hero; 