'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { FiMonitor, FiRefreshCw, FiShield, FiArrowRight, FiCheck, FiChevronRight, FiTruck } from 'react-icons/fi';

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Eenvoudige parallax effect voor de achtergrond
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
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
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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
      {/* Subtiel decoratief element */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/50 dark:from-gray-900/50 to-transparent z-0 pointer-events-none"></div>
      
      <div className="relative">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Hero content */}
            <div className="flex flex-col space-y-8">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={0}
                className="flex flex-col space-y-4"
              >
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  Duurzame IT-oplossingen
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Geef uw hardware een tweede leven
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                  Wij kopen uw gebruikte IT-apparatuur op, wissen data veilig en geven hardware een tweede leven. 
                  Duurzaam, veilig en eerlijk geprijsd.
                </p>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mt-4"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <Link href="/diensten" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
                >
                  Bekijk onze diensten
                  <FiArrowRight className="ml-2" />
                </Link>
                <Link href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300 shadow-md hover:shadow-lg"
                >
                  Neem contact op
                </Link>
              </motion.div>
              
              {/* Features */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className={`flex items-start space-x-3 p-4 rounded-lg transition-all duration-300 ${activeFeature === index ? 'bg-blue-50 dark:bg-blue-900/20 shadow-sm' : ''}`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Hero image */}
            <motion.div 
              className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={1}
              style={{ y }}
            >
              <Image
                src="/images/hero-image.jpg" 
                alt="IT-hardware recycling en data verwijdering"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={true}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="bg-blue-600/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                  Gecertificeerde GDPR-compliance
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 