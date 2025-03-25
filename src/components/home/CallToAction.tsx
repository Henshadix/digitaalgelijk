'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiMail, FiPhone, FiSend, FiShield, FiAward, FiClock, FiTruck, FiLock, FiRefreshCw, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

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
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const formRef = useRef<HTMLFormElement>(null);
  
  // Benefits list
  const benefits = [
    {
      icon: <FiAward size={20} />,
      text: "Gecertificeerde dataverwijdering volgens GDPR-normen",
      color: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      icon: <FiRefreshCw size={20} />,
      text: "Duurzame verwerking en recycling van IT-apparatuur",
      color: "bg-gradient-to-r from-green-500 to-green-600"
    },
    {
      icon: <FiTruck size={20} />,
      text: "Gratis ophaalservice in heel Nederland",
      color: "bg-gradient-to-r from-indigo-500 to-indigo-600"
    },
    {
      icon: <FiLock size={20} />,
      text: "Veilige en vertrouwelijke afhandeling",
      color: "bg-gradient-to-r from-purple-500 to-purple-600"
    },
    {
      icon: <FiClock size={20} />,
      text: "Snelle service en transparante prijzen",
      color: "bg-gradient-to-r from-blue-600 to-blue-700"
    }
  ];

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formState.name.trim()) {
      newErrors.name = "Naam is verplicht";
    }
    
    if (!formState.email.trim()) {
      newErrors.email = "E-mail is verplicht";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Voer een geldig e-mailadres in";
    }
    
    if (!formState.message.trim()) {
      newErrors.message = "Bericht is verplicht";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
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

  return (
    <section 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
      id="contact"
    >
      {/* Enhanced background with gradient and pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-80"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-indigo-100 dark:bg-indigo-900/20 blur-3xl opacity-70"></div>
        
        {/* Enhanced grid pattern */}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block mb-3 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-100 dark:border-blue-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Neem vandaag nog contact met ons op voor een vrijblijvende offerte of om te bespreken hoe wij u kunnen helpen met uw IT-asset management.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column - Benefits and Map */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {/* Benefits card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg overflow-hidden relative">
              {/* Decorative corner accent */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-400/30 rounded-full blur-xl"></div>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Waarom kiezen voor Digitaalgelijk?</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded mb-6"></div>
                </div>
                
                <motion.ul 
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                >
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${benefit.color} flex items-center justify-center mr-3 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                        <span className="text-white">{benefit.icon}</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 mt-1">{benefit.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
            
            {/* Location Map Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg">
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800">
                {/* Map placeholder until we have a real map image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiMapPin className="text-blue-500 dark:text-blue-400" size={36} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center">
                    <FiMapPin className="mr-2 text-blue-300" size={18} />
                    <span className="font-medium">Regio Nijmegen</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+31649892654" 
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/40 text-blue-700 dark:text-blue-300 transition-colors border border-blue-100 dark:border-blue-800 flex-1"
                >
                  <FiPhone className="mr-2" /> +31 6 4989 2654
                </a>
                <a 
                  href="mailto:info@digitaalgelijk.nl" 
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/40 text-blue-700 dark:text-blue-300 transition-colors border border-blue-100 dark:border-blue-800 flex-1"
                >
                  <FiMail className="mr-2" /> info@digitaalgelijk.nl
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Enhanced Contact form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg overflow-hidden relative">
              {/* Decorative corner accent */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-indigo-400/30 rounded-full blur-xl"></div>
              
              {/* Form content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FiMail className="text-blue-500 mr-3" />
                  Stuur ons een bericht
                </h3>
                
                {isSubmitted ? (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-800/40 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiCheck className="text-green-600 dark:text-green-400" size={28} />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Bericht verzonden!</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-green-100 dark:bg-green-800/40 hover:bg-green-200 dark:hover:bg-green-800/60 text-green-700 dark:text-green-300 font-medium rounded-lg transition-colors"
                    >
                      Nieuw bericht opstellen
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Naam *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          onChange={handleChange}
                          className={`w-full rounded-lg border ${errors.name ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/10' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'} px-4 py-3 text-gray-700 dark:text-gray-300 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                          placeholder="Uw naam"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Bedrijf
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-700 dark:text-gray-300 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                          placeholder="Uw bedrijfsnaam"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          onChange={handleChange}
                          className={`w-full rounded-lg border ${errors.email ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/10' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'} px-4 py-3 text-gray-700 dark:text-gray-300 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                          placeholder="uw.email@voorbeeld.nl"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Telefoon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-700 dark:text-gray-300 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                          placeholder="+31 6 12345678"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Dienst
                      </label>
                      <select
                        id="service"
                        name="service"
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-700 dark:text-gray-300 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      >
                        <option value="">Selecteer een dienst</option>
                        <option value="hardware-opkopen">Hardware Opkopen</option>
                        <option value="data-verwijdering">Data Verwijdering</option>
                        <option value="hardware-recycling">Hardware Recycling</option>
                        <option value="logistieke-diensten">Logistieke Diensten</option>
                        <option value="anders">Anders</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Bericht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        onChange={handleChange}
                        className={`w-full rounded-lg border ${errors.message ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/10' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'} px-4 py-3 text-gray-700 dark:text-gray-300 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                        placeholder="Vertel ons waar we u mee kunnen helpen"
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex items-center h-5">
                        <input
                          id="privacy"
                          type="checkbox"
                          required
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="privacy" className="font-medium text-gray-700 dark:text-gray-300">
                          Ik ga akkoord met de <Link href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</Link>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full md:w-auto flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Verzenden...
                          </>
                        ) : (
                          <>
                            Verzenden <FiSend className="ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Trust badges section - Enhanced */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">Vertrouwd door</h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 dark:opacity-50">
            <div className="w-24 h-12 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">Logo</div>
            <div className="w-24 h-12 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">Logo</div>
            <div className="w-24 h-12 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">Logo</div>
            <div className="w-24 h-12 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">Logo</div>
            <div className="w-24 h-12 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">Logo</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction; 