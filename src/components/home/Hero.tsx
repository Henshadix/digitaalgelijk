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
    <section ref={targetRef} className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800 text-white min-h-[90vh] flex items-center">
      {/* Enhanced dynamic background elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated gradient overlay with improved opacity */}
        <MotionDiv 
          className="absolute inset-0 opacity-15 bg-gradient-conic from-blue-500 via-blue-300/10 to-transparent"
          animate={{
            rotate: [0, 360],
            transition: {
              duration: 25,
              ease: "linear",
              repeat: Infinity
            }
          }}
        />
        
        {/* Mesh gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/20 via-indigo-900/10 to-purple-900/20 mix-blend-soft-light"></div>
        
        {/* Enhanced animated particles with light trails */}
        <MotionDiv 
          className="absolute inset-0"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.2 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-white blur-[1px]"></div>
          <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 rounded-full bg-blue-300 blur-[1px]"></div>
          <div className="absolute top-1/2 left-2/3 w-1 h-1 rounded-full bg-white blur-[1px]"></div>
          <div className="absolute top-1/4 left-3/4 w-2 h-2 rounded-full bg-blue-200 blur-[1px]"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 rounded-full bg-white blur-[1px]"></div>
          
          {/* Additional light particles */}
          <div className="absolute top-1/3 right-1/2 w-0.5 h-0.5 rounded-full bg-blue-100 blur-[0.5px]"></div>
          <div className="absolute top-2/3 left-1/2 w-0.5 h-0.5 rounded-full bg-blue-100 blur-[0.5px]"></div>
          <div className="absolute top-1/6 right-1/3 w-0.5 h-0.5 rounded-full bg-blue-100 blur-[0.5px]"></div>
        </MotionDiv>
        
        {/* Subtle grid pattern for added texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>
      
      <div className="relative w-full">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero content */}
            <div className="flex flex-col space-y-8">
              <MotionDiv 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={0}
                className="flex flex-col space-y-5"
              >
                <span className="text-blue-300 font-medium flex items-center bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                  <FiMapPin className="mr-2" /> Aalsburg 3111, 6602WR Wijchen
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  Geef uw hardware een <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">tweede leven</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                  Wij kopen uw gebruikte IT-apparatuur op, wissen data veilig en geven hardware een tweede leven met oog voor duurzaamheid.
                </p>
              </MotionDiv>
              
              {/* CTA Buttons */}
              <MotionDiv 
                className="flex flex-wrap gap-4"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <Link href="/diensten" 
                  className="inline-flex items-center px-6 py-3.5 text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  Bekijk onze diensten
                  <FiArrowRight className="ml-2" />
                </Link>
                <a href="tel:+31649892654" 
                  className="inline-flex items-center px-6 py-3.5 text-base font-medium rounded-md bg-white/10 hover:bg-white/20 text-white transition-all shadow-md hover:shadow-lg border border-white/20 backdrop-blur-sm hover:scale-105 active:scale-95"
                  aria-label="Bel ons op +31 6 4989 2654"
                >
                  Bel ons: +31 6 4989 2654
                </a>
              </MotionDiv>
              
              {/* Features */}
              <MotionDiv 
                className="flex flex-wrap gap-4 mt-8"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                {features.map((feature) => (
                  <div 
                    key={feature.title}
                    className="flex items-center space-x-2 bg-white/10 hover:bg-white/15 px-4 py-2.5 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/5 hover:border-white/10 hover:scale-105"
                  >
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium text-white">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </MotionDiv>
              
              {/* Scroll indicator */}
              <MotionDiv
                className="hidden md:flex justify-center mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <div className="flex flex-col items-center cursor-pointer group" onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  <span className="text-sm text-blue-300 group-hover:text-blue-200 mb-2">Meer ontdekken</span>
                  <MotionDiv
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 backdrop-blur-sm border border-white/10"
                  >
                    <FiArrowDown className="text-white" />
                  </MotionDiv>
                </div>
              </MotionDiv>
            </div>
            
            {/* Hero image with enhanced styling */}
            <MotionDiv 
              className="relative w-full h-[320px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 mix-blend-overlay z-10 rounded-2xl"></div>
              <Image
                src="/images/hero-image.jpg" 
                alt="IT-hardware recycling en data verwijdering"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
                quality={90}
                className="object-cover object-center rounded-2xl hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-20 rounded-2xl"></div>
              
              {/* Image overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm text-white/90 font-medium">Duurzaam & Veilig</span>
                </div>
                <p className="text-white text-lg font-medium">Professionele data verwijdering volgens GDPR-normen</p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 