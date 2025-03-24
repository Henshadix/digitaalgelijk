'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { FiArrowRight, FiMapPin, FiArrowDown } from 'react-icons/fi';
import { MotionDiv } from '@/components/client/MotionWrapper';

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);

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
            <div className="relative w-full h-[375px] sm:h-[450px] lg:h-[570px] lg:col-span-5 rounded-xl overflow-hidden shadow-2xl">
              {/* Image */}
              <Image
                src="/images/hero-image.jpg" 
                alt="IT-hardware recycling en data verwijdering"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                priority={true}
                quality={90}
                className="object-cover object-center rounded-xl"
              />
              
              {/* Gradient overlay for better content contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 z-20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 