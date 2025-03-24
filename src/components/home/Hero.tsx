'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { FiArrowRight, FiCheck, FiShield, FiRefreshCw, FiTruck } from 'react-icons/fi';

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);

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
      icon: <FiCheck className="text-blue-600 dark:text-blue-400" size={20} />
    },
    {
      title: "GDPR-compliant",
      icon: <FiShield className="text-purple-600 dark:text-purple-400" size={20} />
    },
    {
      title: "Duurzame recycling",
      icon: <FiRefreshCw className="text-green-600 dark:text-green-400" size={20} />
    },
    {
      title: "Gratis ophaalservice",
      icon: <FiTruck className="text-amber-600 dark:text-amber-400" size={20} />
    }
  ];

  return (
    <section ref={targetRef} className="relative overflow-hidden bg-white dark:bg-gray-900 min-h-[80vh] flex items-center">
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/50 dark:from-gray-900/50 to-transparent z-0 pointer-events-none"></div>
      
      <div className="relative w-full">
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero content */}
            <div className="flex flex-col space-y-6">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={0}
                className="flex flex-col space-y-4"
              >
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  Digitaalgelijk - Aalsburg 3111, Wijchen
                </span>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Geef uw hardware een tweede leven
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                  Wij kopen uw gebruikte IT-apparatuur op, wissen data veilig en geven hardware een tweede leven.
                </p>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <Link href="/diensten" 
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
                >
                  Bekijk onze diensten
                  <FiArrowRight className="ml-2" />
                </Link>
                <a href="tel:+31649892654" 
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-md hover:shadow-lg border border-gray-300 dark:border-gray-700"
                >
                  Bel ons: 06 4989 2654
                </a>
              </motion.div>
              
              {/* Features */}
              <motion.div 
                className="flex flex-wrap gap-4 mt-4"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                {features.map((feature) => (
                  <div 
                    key={feature.title}
                    className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-lg"
                  >
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Hero image */}
            <motion.div 
              className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <Image
                src="/images/hero-image.jpg" 
                alt="IT-hardware recycling en data verwijdering"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
                quality={90}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 