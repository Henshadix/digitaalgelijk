'use client';
import { MotionDiv } from '@/components/client/MotionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { FiArrowRight, FiCheck, FiShield, FiRefreshCw, FiTruck, FiMapPin, FiArrowDown } from 'react-icons/fi';

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
      description: "Transparante en concurrerende vergoedingen",
      icon: <FiCheck className="text-blue-600 dark:text-blue-400" size={20} />
    },
    {
      title: "GDPR-compliant",
      description: "100% veilige dataverwijdering",
      icon: <FiShield className="text-purple-600 dark:text-purple-400" size={20} />
    },
    {
      title: "Duurzame recycling",
      description: "Minimale impact op het milieu",
      icon: <FiRefreshCw className="text-green-600 dark:text-green-400" size={20} />
    },
    {
      title: "Gratis ophaalservice",
      description: "Door heel Nederland",
      icon: <FiTruck className="text-amber-600 dark:text-amber-400" size={20} />
    }
  ];

  return (
    <section 
      ref={targetRef} 
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white"
      aria-labelledby="hero-heading"
    >
      {/* Simplified background elements for better performance */}
      <div className="absolute inset-0 w-full h-full">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/20 via-indigo-900/10 to-purple-900/20 mix-blend-soft-light"></div>
        
        {/* Refined animated particles */}
        <MotionDiv 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        >
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/80 blur-[1px]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
            ></div>
          ))}
        </MotionDiv>
      </div>
      
      <div className="relative w-full py-16 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero content - 7 columns on large screens */}
            <div className="flex flex-col space-y-8 lg:col-span-7">
              <div className="flex flex-col space-y-5">
                <div className="inline-flex items-center self-start bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-2">
                  <FiMapPin className="mr-2 text-blue-300" /> 
                  <span className="text-blue-100 font-medium text-sm">Aalsburg 3111, Wijchen</span>
                </div>
                
                <h1 
                  id="hero-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
                >
                  Geef uw hardware een <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">tweede leven</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-blue-100 max-w-2xl">
                  Wij kopen uw gebruikte IT-apparatuur op, wissen data veilig en geven hardware een tweede leven met oog voor duurzaamheid.
                </p>
              </div>
              
              {/* CTA Buttons with improved accessibility */}
              <div className="flex flex-wrap gap-4">
                <Link href="/diensten" 
                  className="inline-flex items-center px-6 py-3.5 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-150 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900"
                >
                  <span>Bekijk onze diensten</span>
                  <FiArrowRight className="ml-2" aria-hidden="true" />
                </Link>
                <a href="tel:+31649892654" 
                  className="inline-flex items-center px-6 py-3.5 text-base font-medium rounded-md bg-white/10 hover:bg-white/15 text-white transition-all duration-150 shadow-sm hover:shadow border border-white/15 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Bel ons op +31 6 4989 2654"
                >
                  <span>Bel ons: +31 6 4989 2654</span>
                </a>
              </div>
              
              {/* Features grid with improved layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {features.map((feature) => (
                  <div 
                    key={feature.title}
                    className="flex items-start p-3 bg-white/10 hover:bg-white/15 rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/10"
                  >
                    <div className="flex-shrink-0 p-1.5 bg-white/10 rounded-lg mr-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-blue-100/90 mt-0.5">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Scroll indicator - visible only on desktop */}
              <div className="hidden md:flex justify-start mt-8">
                <button 
                  onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex flex-col items-center cursor-pointer group focus:outline-none"
                  aria-label="Scroll naar onze diensten"
                >
                  <span className="text-sm text-blue-200 group-hover:text-blue-100 mb-2">Meer ontdekken</span>
                  <MotionDiv
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="p-2 rounded-full bg-white/10 group-hover:bg-white/15 backdrop-blur-sm"
                  >
                    <FiArrowDown className="text-white" aria-hidden="true" />
                  </MotionDiv>
                </button>
              </div>
            </div>
            
            {/* Hero image - 5 columns on large screens */}
            <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[500px] lg:col-span-5 rounded-xl overflow-hidden shadow-2xl">
              {/* Lightened overlay for better visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 mix-blend-overlay z-10 rounded-xl"></div>
              
              {/* Image with simplified hover effect */}
              <Image
                src="/images/hero-image.jpg" 
                alt="IT-hardware recycling en data verwijdering"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                priority={true}
                quality={90}
                className="object-cover object-center rounded-xl transition-transform duration-700 hover:scale-105"
              />
              
              {/* Improved gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-20 rounded-xl"></div>
              
              {/* Image overlay content with improved readability */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-30">
                <div className="flex items-center space-x-2 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm text-white font-medium">Duurzaam & Veilig</span>
                </div>
                <p className="text-white text-base sm:text-lg font-medium leading-snug">
                  Professionele data verwijdering volgens GDPR-normen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 