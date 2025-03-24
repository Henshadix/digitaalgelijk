'use client';
import { MotionDiv } from '@/components/client/MotionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { FiArrowRight, FiCheck, FiShield, FiRefreshCw, FiTruck, FiMapPin } from 'react-icons/fi';

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
    <section ref={targetRef} className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800 text-white min-h-[80vh] flex items-center">
      {/* Dynamic animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated gradient overlay */}
        <MotionDiv 
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
        <MotionDiv 
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
        </MotionDiv>
      </div>
      
      <div className="relative w-full">
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero content */}
            <div className="flex flex-col space-y-6">
              <MotionDiv 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={0}
                className="flex flex-col space-y-4"
              >
                <span className="text-blue-300 font-medium flex items-center">
                  <FiMapPin className="mr-2" /> Aalsburg 3111, 6602WR Wijchen
                </span>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Geef uw hardware een tweede leven
                </h1>
                <p className="text-lg text-gray-300 max-w-xl">
                  Wij kopen uw gebruikte IT-apparatuur op, wissen data veilig en geven hardware een tweede leven.
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
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
                >
                  Bekijk onze diensten
                  <FiArrowRight className="ml-2" />
                </Link>
                <a href="tel:+31649892654" 
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md bg-white/10 hover:bg-white/20 text-white transition shadow-md hover:shadow-lg border border-white/20"
                  aria-label="Bel ons op +31 6 4989 2654"
                >
                  Bel ons: +31 6 4989 2654
                </a>
              </MotionDiv>
              
              {/* Features */}
              <MotionDiv 
                className="flex flex-wrap gap-4 mt-4"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                {features.map((feature) => (
                  <div 
                    key={feature.title}
                    className="flex items-center space-x-2 bg-white/10 hover:bg-white/15 px-4 py-2 rounded-lg transition-colors duration-300"
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
            </div>
            
            {/* Hero image */}
            <MotionDiv 
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
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 