'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { FiArrowRight, FiCheck, FiMail, FiPhone, FiSend, FiShield, FiAward, FiClock, FiTruck, FiLock, FiRefreshCw } from 'react-icons/fi';
import Link from 'next/link';

const CallToAction = () => {
  // Form state
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Animation controls
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement>(null);
  
  // Benefits list
  const benefits = [
    {
      icon: <FiAward size={16} />,
      text: "Gecertificeerde dataverwijdering volgens GDPR-normen",
      color: "bg-blue-500"
    },
    {
      icon: <FiRefreshCw size={16} />,
      text: "Duurzame verwerking en recycling van IT-apparatuur",
      color: "bg-green-500"
    },
    {
      icon: <FiTruck size={16} />,
      text: "Gratis ophaalservice in heel Nederland",
      color: "bg-indigo-500"
    },
    {
      icon: <FiLock size={16} />,
      text: "Veilige en vertrouwelijke afhandeling",
      color: "bg-purple-500"
    },
    {
      icon: <FiClock size={16} />,
      text: "Snelle service en transparante prijzen",
      color: "bg-blue-600"
    }
  ];
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Reset form state
      setFormState({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };
  
  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);
  
  // Animation variants
  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-900"
      id="contact"
    >
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 z-0"></div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-green-400/10 dark:bg-green-600/10 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-contact" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-contact)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
        >
          <motion.div 
            className="inline-block mb-3 px-4 py-1 rounded-full bg-blue-100/10 backdrop-blur-sm border border-blue-200/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">Neem contact op</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Klaar om uw IT-apparatuur <br className="hidden md:block" />
            <span className="relative inline-block">
              duurzaam te beheren?
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 dark:bg-blue-400 rounded"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Neem vandaag nog contact met ons op voor een vrijblijvende offerte of om te bespreken hoe wij u kunnen helpen met uw IT-asset management.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left column - Benefits */}
          <motion.div 
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg overflow-hidden relative"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6 }
              }
            }}
          >
            {/* Decorative corner accent */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-400/30 rounded-full blur-xl"></div>
            
            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Waarom kiezen voor Digitaalgelijk?</h3>
                <div className="h-1 w-20 bg-blue-500 dark:bg-blue-400 rounded mb-6"></div>
              </div>
              
              <motion.ul 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate={controls}
              >
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start group"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full ${benefit.color} flex items-center justify-center mr-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-sm">{benefit.icon}</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{benefit.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 mb-4">Direct contact opnemen?</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="tel:+31612345678" 
                    className="group bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-300 transition-all duration-300 px-6 py-3 rounded-lg font-medium text-center flex items-center justify-center border border-blue-100 dark:border-blue-800/50"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Bel ons direct"
                  >
                    <FiPhone className="mr-2" aria-hidden="true" />
                    <span>+31 6 12345678</span>
                  </motion.a>
                  
                  <motion.a 
                    href="mailto:info@digitaalgelijk.nl" 
                    className="group bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-300 transition-all duration-300 px-6 py-3 rounded-lg font-medium text-center flex items-center justify-center border border-blue-100 dark:border-blue-800/50"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Mail ons"
                  >
                    <FiMail className="mr-2" aria-hidden="true" />
                    <span>E-mail ons</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Form */}
          <motion.div
            className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, delay: 0.2 }
              }
            }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-xl"></div>
            
            {isSubmitted ? (
              <motion.div 
                className="text-center py-12 relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1
                  }}
                >
                  <FiCheck size={36} className="text-green-600 dark:text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Bedankt voor uw aanvraag!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">We nemen zo spoedig mogelijk contact met u op.</p>
                <motion.div
                  className="w-full bg-gray-200 dark:bg-gray-700 h-1 rounded-full overflow-hidden max-w-xs mx-auto"
                >
                  <motion.div
                    className="h-full bg-green-500 dark:bg-green-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                </motion.div>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Vraag een offerte aan</h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FiShield className="mr-1" />
                    <span>Veilig & vertrouwd</span>
                  </div>
                </div>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Naam *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Bedrijf *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Telefoonnummer
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Dienst *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200"
                    >
                      <option value="">Selecteer een dienst</option>
                      <option value="hardware-opkopen">Hardware Opkopen</option>
                      <option value="data-verwijdering">Data Verwijdering</option>
                      <option value="hardware-recycling">Hardware Recycling</option>
                      <option value="logistieke-diensten">Logistieke Diensten</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Bericht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200"
                      placeholder="Vertel ons meer over uw wensen en behoeften..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full relative overflow-hidden group bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white transition-all duration-300 px-8 py-4 rounded-lg font-medium text-center shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Bezig met verzenden...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <FiSend className="mr-2" />
                        <span>Offerte aanvragen</span>
                        <motion.div
                          className="ml-2"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FiArrowRight aria-hidden="true" />
                        </motion.div>
                      </div>
                    )}
                    <motion.div 
                      className="absolute inset-0 w-0 bg-white/20"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 flex items-start">
                    <FiShield className="mr-1 flex-shrink-0 mt-0.5" />
                    <span>
                      Door dit formulier in te dienen, gaat u akkoord met onze <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">privacybeleid</Link>. Wij gebruiken uw gegevens alleen om contact met u op te nemen over uw aanvraag.
                    </span>
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden z-10">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24L60 32C120 40 240 56 360 56C480 56 600 40 720 32C840 24 960 24 1080 32C1200 40 1320 56 1380 64L1440 72V74H1380C1320 74 1200 74 1080 74C960 74 840 74 720 74C600 74 480 74 360 74C240 74 120 74 60 74H0V24Z" fill="currentColor" className="text-white dark:text-gray-900"/>
        </svg>
      </div>
    </section>
  );
};

export default CallToAction; 