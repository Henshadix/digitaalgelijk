'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiStar, FiMessageCircle, FiUser, FiUsers, FiAward, FiMessageSquare, FiCheck } from 'react-icons/fi';

// Testimonial data with company logos
const testimonials = [
  {
    id: 1,
    name: "Martijn de Vries",
    role: "IT Manager",
    image: "/images/testimonials/avatar-1.jpg",
    content: "Digitaalgelijk heeft ons geholpen bij het opschonen van onze IT-infrastructuur. Ze hebben niet alleen onze oude hardware voor een goede prijs opgekocht, maar ook gezorgd voor een veilige dataverwijdering. Een professionele en betrouwbare partner!",
    rating: 5,
    company: "TechSolutions B.V.",
    companyLogo: "/images/testimonials/company-1.png",
    accentColor: "blue",
    keyPoints: ["Eerlijke prijzen", "Veilige dataverwijdering", "Professionele service"]
  },
  {
    id: 2,
    name: "Laura Jansen",
    role: "Directeur",
    image: "/images/testimonials/avatar-2.jpg",
    content: "Als bedrijf met een sterke focus op duurzaamheid was de samenwerking met Digitaalgelijk een logische keuze. Hun recyclingproces is volledig transparant en hun certificering gaf ons het vertrouwen dat we de juiste keuze maakten.",
    rating: 5,
    company: "EcoTech Nederland",
    companyLogo: "/images/testimonials/company-2.png",
    accentColor: "green",
    keyPoints: ["Duurzame aanpak", "Transparant proces", "Betrouwbare certificering"]
  },
  {
    id: 3,
    name: "Thomas Bakker",
    role: "Systeembeheerder",
    image: "/images/testimonials/avatar-3.jpg",
    content: "De dataverwijderingsservice van Digitaalgelijk voldoet aan alle wettelijke eisen waar wij als overheidsinstantie aan moeten voldoen. De gedetailleerde rapportage die we ontvingen was zeer waardevol voor onze administratie.",
    rating: 5,
    company: "Gemeente Utrecht",
    companyLogo: "/images/testimonials/company-3.png",
    accentColor: "purple",
    keyPoints: ["GDPR-compliant", "Gedetailleerde rapportage", "Wettelijk conform"]
  },
  {
    id: 4,
    name: "Sophie van Dijk",
    role: "Eigenaar",
    image: "/images/testimonials/avatar-4.jpg",
    content: "Toen we onze winkels moesten moderniseren, stonden we met een grote hoeveelheid oude hardware. Digitaalgelijk heeft alles opgehaald en ons een eerlijke prijs geboden. De service was snel en professioneel.",
    rating: 4,
    company: "Van Dijk Retail",
    companyLogo: "/images/testimonials/company-4.png",
    accentColor: "orange",
    keyPoints: ["Snelle service", "Ophaalservice", "Eerlijke prijzen"]
  }
];

// Color variants for testimonials
const colorVariants = {
  blue: {
    gradient: "from-blue-900/40 to-blue-800/40",
    accent: "bg-blue-500",
    text: "text-blue-400",
    border: "border-blue-700",
    shadow: "shadow-blue-900/30",
    button: "bg-blue-600 hover:bg-blue-500",
    glow: "rgba(59, 130, 246, 0.3)",
    progressBg: "bg-blue-900/30",
    progressFill: "bg-blue-500"
  },
  green: {
    gradient: "from-green-900/40 to-green-800/40",
    accent: "bg-green-500",
    text: "text-green-400",
    border: "border-green-700",
    shadow: "shadow-green-900/30",
    button: "bg-green-600 hover:bg-green-500",
    glow: "rgba(34, 197, 94, 0.3)",
    progressBg: "bg-green-900/30",
    progressFill: "bg-green-500"
  },
  purple: {
    gradient: "from-purple-900/40 to-purple-800/40",
    accent: "bg-purple-500",
    text: "text-purple-400",
    border: "border-purple-700",
    shadow: "shadow-purple-900/30",
    button: "bg-purple-600 hover:bg-purple-500",
    glow: "rgba(168, 85, 247, 0.3)",
    progressBg: "bg-purple-900/30",
    progressFill: "bg-purple-500"
  },
  orange: {
    gradient: "from-orange-900/40 to-orange-800/40",
    accent: "bg-orange-500",
    text: "text-orange-400",
    border: "border-orange-700",
    shadow: "shadow-orange-900/30",
    button: "bg-orange-600 hover:bg-orange-500",
    glow: "rgba(249, 115, 22, 0.3)",
    progressBg: "bg-orange-900/30",
    progressFill: "bg-orange-500"
  }
};

const AUTOPLAY_INTERVAL = 8000; // 8 seconds

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressControls = useAnimation();

  // Get current testimonial color
  const currentColor = testimonials[currentIndex].accentColor || 'blue';
  const colors = colorVariants[currentColor as keyof typeof colorVariants];

  // Handle next testimonial
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setProgress(0);
  };

  // Handle previous testimonial
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setProgress(0);
  };

  // Progress bar animation
  useEffect(() => {
    if (!autoplay) {
      progressControls.stop();
      return;
    }

    progressControls.start({
      width: "100%",
      transition: { duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }
    });

    const interval = setInterval(() => {
      nextTestimonial();
    }, AUTOPLAY_INTERVAL);
    
    return () => clearInterval(interval);
  }, [autoplay, currentIndex, progressControls]);

  // Reset progress when changing testimonial
  useEffect(() => {
    if (autoplay) {
      progressControls.set({ width: "0%" });
      progressControls.start({
        width: "100%",
        transition: { duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }
      });
    }
  }, [currentIndex, autoplay, progressControls]);

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? -10 : 10,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 10 : -10,
      transition: {
        duration: 0.5
      }
    })
  };

  // Background pattern animation
  const patternVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  return (
    <section className="py-24 overflow-hidden bg-gray-900 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* Glowing orbs */}
        <motion.div 
          animate={floatingAnimation}
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{
            ...floatingAnimation,
            transition: {
              ...floatingAnimation.transition,
              delay: 1
            }
          }}
          className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{
            ...floatingAnimation,
            transition: {
              ...floatingAnimation.transition,
              delay: 2
            }
          }}
          className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-green-500/5 blur-3xl"
        ></motion.div>
        
        {/* Particle effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated underline */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900/30 mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FiMessageCircle className="w-8 h-8 text-blue-400" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Wat Onze Klanten Zeggen
          </motion.h2>
          
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ontdek waarom bedrijven kiezen voor onze duurzame IT-oplossingen en hoe we hen hebben geholpen.
          </motion.p>
        </div>

        {/* Testimonial slider */}
        <div 
          ref={containerRef}
          className="max-w-5xl mx-auto relative perspective"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Decorative elements */}
          <motion.div 
            className={`absolute inset-0 -m-10 rounded-3xl bg-gradient-to-br ${colors.gradient} z-0`}
            animate={{
              boxShadow: [
                `0 0 0 0 ${colors.glow}`,
                `0 0 30px 15px ${colors.glow}`
              ],
              transition: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
          
          <motion.div 
            className="absolute inset-0 opacity-5 z-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.5) 0%, transparent 10%), 
                               radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.5) 0%, transparent 10%),
                               radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.5) 0%, transparent 10%),
                               radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.5) 0%, transparent 10%)`,
              backgroundSize: "100px 100px"
            }}
            variants={patternVariants}
            animate="animate"
          />

          {/* Testimonial card with 3D effect */}
          <div className="relative z-10 bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12 border border-gray-700 transform-gpu preserve-3d">
            {/* Large quote icon */}
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full flex items-center justify-center bg-gray-900 border border-gray-700 shadow-lg">
              <FiMessageSquare className={`w-6 h-6 ${colors.text}`} />
            </div>
            
            {/* Progress bar for autoplay */}
            <div className={`absolute top-0 left-0 right-0 h-1 ${colors.progressBg} overflow-hidden rounded-t-xl`}>
              <motion.div 
                className={`h-full ${colors.progressFill}`}
                initial={{ width: "0%" }}
                animate={progressControls}
              />
            </div>
            
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col md:flex-row gap-8 md:gap-12 transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Avatar and info */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-5 border-4 border-gray-700 shadow-lg transform-gpu hover:scale-105 transition-transform duration-300">
                    {testimonials[currentIndex].image ? (
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 112px, 128px"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                        <FiUser className="w-12 h-12 text-gray-500" />
                      </div>
                    )}
                    <div className={`absolute bottom-0 right-0 w-10 h-10 rounded-full ${colors.accent} flex items-center justify-center border-2 border-gray-700`}>
                      <FiAward className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left mb-6 md:mb-0">
                    <h3 className="font-bold text-white text-xl mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className={`${colors.text} font-medium text-sm`}>
                      {testimonials[currentIndex].company}
                    </p>
                    
                    <div className="flex items-center justify-center md:justify-start mt-3">
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Testimonial content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="relative">
                    <blockquote className="text-gray-300 italic relative z-10 text-lg md:text-xl leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    
                    {/* Key points */}
                    {testimonials[currentIndex].keyPoints && (
                      <motion.div 
                        className="mt-6 space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {testimonials[currentIndex].keyPoints.map((point, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full ${colors.accent} flex items-center justify-center mr-2`}>
                              <FiCheck className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-300 text-sm">{point}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                  
                  {testimonials[currentIndex].companyLogo && (
                    <div className="mt-8 flex justify-end">
                      <div className="h-12 w-36 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                        <Image
                          src={testimonials[currentIndex].companyLogo}
                          alt={testimonials[currentIndex].company}
                          fill
                          className="object-contain"
                          sizes="144px"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-10 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? `${colors.accent} scale-125` 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Ga naar testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -mt-6 px-4 z-20">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 shadow-lg flex items-center justify-center text-gray-400 hover:text-white focus:outline-none transition-all duration-200"
              aria-label="Vorige testimonial"
            >
              <FiChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 shadow-lg flex items-center justify-center text-gray-400 hover:text-white focus:outline-none transition-all duration-200"
              aria-label="Volgende testimonial"
            >
              <FiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for 3D perspective */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default Testimonials; 