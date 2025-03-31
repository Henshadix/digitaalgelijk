'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { FiArrowRight, FiMapPin, FiArrowDown } from 'react-icons/fi';
import { MotionDiv } from '@/components/client/MotionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

// Slider content voor de verschillende diensten
const slides = [
  {
    id: 1,
    title: "Duurzame IT-Recycling",
    subtitle: "Circulaire Toekomst",
    description: "Minimaliseer uw milieu-impact met onze circulaire IT-recycling oplossingen. Wij zorgen voor maximaal hergebruik en 100% verantwoorde verwerking.",
    gradient: "from-green-600 to-green-400",
    icon: "♻️"
  },
  {
    id: 2,
    title: "Veilige Data Verwijdering",
    subtitle: "GDPR Compliant",
    description: "Bescherm uw gevoelige informatie met onze GDPR-compliant data verwijdering. Gecertificeerd en traceerbaar voor uw gemoedsrust.",
    gradient: "from-purple-600 to-purple-400",
    icon: "🔒"
  },
  {
    id: 3,
    title: "Professionele Hardware Inkoop",
    subtitle: "Maximale Waarde",
    description: "Maximaliseer de waarde van uw gebruikte IT-apparatuur. Wij bieden eerlijke prijzen en gratis ophaalservice in heel Nederland.",
    gradient: "from-blue-600 to-blue-400",
    icon: "💻"
  },
  {
    id: 4,
    title: "Betrouwbare Logistiek",
    subtitle: "Track & Trace",
    description: "Zorgeloos transport en opslag van uw IT-apparatuur met volledige tracking & tracing. Beveiligd en professioneel geregeld.",
    gradient: "from-amber-600 to-amber-400",
    icon: "🚛"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0); // -1 voor links, 1 voor rechts
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionaliteit
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setSlideDirection(1); // Slide naar rechts
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleSlideChange = (index: number) => {
    setSlideDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <>
      <section 
        className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white min-h-[80vh] flex items-center border-t border-b border-blue-800/30"
        aria-labelledby="hero-heading"
      >
        {/* Verbeterde achtergrond elementen */}
        <div className="absolute inset-0 w-full h-full">
          {/* Gradient overlays */}
          <div className="absolute inset-0">
            <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/15 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-[150px]" />
          </div>

          {/* Technisch grid patroon */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
            }}
          />

          {/* Data flow lijnen */}
          <div className="absolute inset-0">
            {Array(10).fill(null).map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                style={{
                  top: `${i * 10}%`,
                  left: '0',
                  right: '0',
                  opacity: 0.05
                }}
              />
            ))}
          </div>

          {/* Circuit patroon */}
          <div className="absolute inset-0" style={{ opacity: 0.03 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="white"/>
                <path d="M50 50 L50 0 M50 50 L100 50 M50 50 L50 100 M50 50 L0 50" stroke="white" strokeWidth="0.5"/>
                <circle cx="50" cy="0" r="2" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="100" cy="50" r="2" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="50" cy="100" r="2" fill="none" stroke="white" strokeWidth="0.5"/>
                <circle cx="0" cy="50" r="2" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuit)"/>
            </svg>
          </div>

          {/* Digitale ruis */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              backgroundSize: '150px 150px'
            }}
          />

          {/* Radiale gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
            }}
          />
        </div>
        
        <div className="relative w-full py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            {/* Verbeterde slider container */}
            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl backdrop-blur-lg bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/[0.05] shadow-2xl">
              <div className="p-6 md:p-10">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-center relative"
                  >
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-4">
                        <span className="inline-block text-3xl bg-gradient-to-br from-white/10 to-white/5 p-3 rounded-xl border border-white/10">
                          {slides[currentSlide].icon}
                        </span>
                      </div>

                      {/* Subtitle */}
                      <div className="mb-2 text-sm font-medium tracking-wider uppercase text-white/70">
                        {slides[currentSlide].subtitle}
                      </div>
                      
                      {/* Title met verbeterde styling */}
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight relative">
                        <span className={`bg-gradient-to-r ${slides[currentSlide].gradient} bg-clip-text text-transparent relative inline-block`}>
                          {slides[currentSlide].title}
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30" />
                        </span>
                      </h1>

                      {/* Description met verbeterde styling */}
                      <div className="relative max-w-2xl mx-auto">
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-lg" />
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-l from-white/5 to-transparent blur-lg" />
                        <p className="text-lg md:text-xl text-gray-200/90 leading-relaxed font-light">
                          {slides[currentSlide].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Verbeterde slide indicators */}
                <div className="flex justify-center gap-3 mt-8">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideChange(index)}
                      className={`group relative w-2.5 h-2.5 ${
                        currentSlide === index 
                          ? 'scale-110' 
                          : 'scale-100 hover:scale-105'
                      } transition-all duration-200`}
                    >
                      <span className={`absolute inset-0 rounded-full ${
                        currentSlide === index 
                          ? 'bg-white shadow-lg shadow-white/20' 
                          : 'bg-white/30 group-hover:bg-white/50'
                      } transition-all duration-200`} />
                      <span className={`absolute inset-0 rounded-full ${
                        currentSlide === index 
                          ? 'animate-ping bg-white/50' 
                          : ''
                      }`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verbeterde stats balk met donkerdere achtergrond */}
      <div className="relative bg-gradient-to-r from-blue-950 via-blue-950 to-blue-900 py-2 overflow-hidden border-t border-b border-blue-800/40">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.2)_50%,transparent_75%)]" 
               style={{ backgroundSize: '20px 20px', animation: 'moveBackground 20s linear infinite' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent" />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3">
            <div className="flex items-center space-x-4 md:space-x-6">
              {/* Stats items met verbeterde styling */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center text-white/90 group"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-green-800/40 to-green-800/20 rounded-lg mr-2 group-hover:scale-110 transition-transform">
                  ♻️
                </span>
                <div>
                  <div className="text-sm font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">100%</div>
                  <div className="text-[10px] text-white/70">Circulair verwerkt</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center text-white/90 group"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-800/40 to-blue-800/20 rounded-lg mr-2 group-hover:scale-110 transition-transform">
                  🔒
                </span>
                <div>
                  <div className="text-sm font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">ISO 27001</div>
                  <div className="text-[10px] text-white/70">Gecertificeerd</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center text-white/90 group"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-amber-800/40 to-amber-800/20 rounded-lg mr-2 group-hover:scale-110 transition-transform">
                  ⭐
                </span>
                <div>
                  <div className="text-sm font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">4.9/5</div>
                  <div className="text-[10px] text-white/70">Klanttevredenheid</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex-shrink-0"
            >
              <Link 
                href="/certificeringen" 
                className="group relative flex items-center overflow-hidden bg-gradient-to-r from-blue-800/40 to-blue-700/30 hover:from-blue-700/50 hover:to-blue-600/40 text-white/90 hover:text-white transition-all px-3 py-1.5 rounded-lg text-xs font-medium"
              >
                <span className="relative z-10">Bekijk onze certificeringen</span>
                <FiArrowRight className="relative z-10 ml-1.5 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Verbeterde decoratieve elementen */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
        </div>
      </div>
    </>
  );
};

export default Hero;

// Add this to your global CSS file
const styles = `
@keyframes moveBackground {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
}
`; 