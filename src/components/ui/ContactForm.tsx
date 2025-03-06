'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, Variants } from 'framer-motion';
import { FiSend, FiCheck, FiAlertCircle, FiLoader, FiMail, FiPhone, FiUser, FiHome, FiMessageSquare, FiBriefcase } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  // Animation controls
  const controls = useAnimation();
  
  // Background animation for the form container
  useEffect(() => {
    controls.start({
      background: [
        'linear-gradient(120deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)',
        'linear-gradient(120deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 51, 234, 0.08) 100%)',
        'linear-gradient(120deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)',
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    });
  }, [controls]);

  // Animation variants
  const formContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const formItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24,
        delay: 0.3 
      }
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
      background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.98 }
  };

  const successVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const successItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
  };

  const validateField = (name: string, value: string) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Naam is verplicht';
        break;
      case 'email':
        if (!value.trim()) {
          error = 'E-mail is verplicht';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Voer een geldig e-mailadres in';
        }
        break;
      case 'service':
        if (!value) error = 'Selecteer een dienst';
        break;
      case 'message':
        if (!value.trim()) error = 'Bericht is verplicht';
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFocusedField(e.target.name);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFocusedField(null);
    
    // Validate on blur
    const error = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const errors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      service: validateField('service', formData.service),
      message: validateField('message', formData.message),
    };
    
    setFormErrors(errors);
    
    // Check if there are any errors
    if (Object.values(errors).some(error => error)) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your server here
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    } catch (error) {
      setSubmitError('Er is iets misgegaan. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (name: string) => `
    w-full px-4 py-3 rounded-xl 
    border ${formErrors[name as keyof typeof formErrors] 
      ? 'border-red-300 dark:border-red-500' 
      : focusedField === name 
        ? 'border-indigo-500 dark:border-indigo-400' 
        : 'border-gray-300 dark:border-gray-600'} 
    bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
    text-gray-800 dark:text-white
    placeholder-gray-400 dark:placeholder-gray-500
    focus:outline-none focus:ring-2 
    ${formErrors[name as keyof typeof formErrors] 
      ? 'focus:ring-red-200 dark:focus:ring-red-900' 
      : 'focus:ring-indigo-200 dark:focus:ring-indigo-900'}
    transition-all duration-300
  `;

  const getIconForField = (name: string) => {
    switch(name) {
      case 'name': return <FiUser className="text-indigo-500" />;
      case 'email': return <FiMail className="text-indigo-500" />;
      case 'phone': return <FiPhone className="text-indigo-500" />;
      case 'company': return <FiBriefcase className="text-indigo-500" />;
      case 'message': return <FiMessageSquare className="text-indigo-500" />;
      default: return null;
    }
  };

  return (
    <motion.div 
      className="p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 z-0" 
        animate={controls}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
      
      <AnimatePresence mode="wait">
        {submitSuccess ? (
          <motion.div
            key="success"
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center py-12 relative z-10"
          >
            <motion.div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/30"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            >
              <FiCheck className="w-12 h-12" />
            </motion.div>
            
            <motion.h3 
              variants={successItemVariants}
              className="text-3xl font-bold mb-4 text-gray-800 dark:text-white bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Bedankt voor uw bericht!
            </motion.h3>
            
            <motion.p 
              variants={successItemVariants}
              className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto"
            >
              We hebben uw aanvraag ontvangen en nemen zo snel mogelijk contact met u op. U ontvangt binnen 24 uur een bevestiging per e-mail.
            </motion.p>
            
            <motion.button
              onClick={() => setSubmitSuccess(false)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Nieuw bericht versturen
            </motion.button>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            onSubmit={handleSubmit}
            variants={formContainerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="space-y-6 relative z-10"
          >
            <motion.div variants={formItemVariants} className="flex items-center space-x-2 mb-2">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Neem contact met ons op</h2>
              <div className="h-1 w-1 rounded-full bg-blue-500"></div>
              <div className="h-1 w-1 rounded-full bg-indigo-500"></div>
              <div className="h-1 w-1 rounded-full bg-purple-500"></div>
            </motion.div>
            
            {submitError && (
              <motion.div 
                className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-4 rounded-xl flex items-start space-x-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiAlertCircle className="mt-1 flex-shrink-0" />
                <span>{submitError}</span>
              </motion.div>
            )}
            
            <motion.div variants={formItemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 flex items-center">
                  <FiUser className="mr-2 text-indigo-500" /> Naam <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Uw naam"
                    className={inputClasses('name')}
                    aria-invalid={!!formErrors.name}
                    aria-describedby={formErrors.name ? "name-error" : undefined}
                  />
                  <motion.span 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-500"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: focusedField === 'name' || formData.name ? 1 : 0,
                      scale: focusedField === 'name' || formData.name ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {formData.name && <FiCheck />}
                  </motion.span>
                </div>
                {formErrors.name && (
                  <motion.p 
                    id="name-error"
                    className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiAlertCircle className="mr-1" size={14} />
                    {formErrors.name}
                  </motion.p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 flex items-center">
                  <FiMail className="mr-2 text-indigo-500" /> E-mail <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="uw@email.nl"
                    className={inputClasses('email')}
                    aria-invalid={!!formErrors.email}
                    aria-describedby={formErrors.email ? "email-error" : undefined}
                  />
                  <motion.span 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-500"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: focusedField === 'email' || formData.email ? 1 : 0,
                      scale: focusedField === 'email' || formData.email ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {formData.email && <FiCheck />}
                  </motion.span>
                </div>
                {formErrors.email && (
                  <motion.p 
                    id="email-error"
                    className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiAlertCircle className="mr-1" size={14} />
                    {formErrors.email}
                  </motion.p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 flex items-center">
                  <FiPhone className="mr-2 text-indigo-500" /> Telefoonnummer
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="+31 6 12345678"
                    className={`w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all duration-300`}
                  />
                  <motion.span 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-500"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: focusedField === 'phone' || formData.phone ? 1 : 0,
                      scale: focusedField === 'phone' || formData.phone ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {formData.phone && <FiCheck />}
                  </motion.span>
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 flex items-center">
                  <FiBriefcase className="mr-2 text-indigo-500" /> Bedrijfsnaam
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Uw bedrijf"
                    className={`w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all duration-300`}
                  />
                  <motion.span 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-500"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: focusedField === 'company' || formData.company ? 1 : 0,
                      scale: focusedField === 'company' || formData.company ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {formData.company && <FiCheck />}
                  </motion.span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={formItemVariants}>
              <label htmlFor="service" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 flex items-center">
                <FiHome className="mr-2 text-indigo-500" /> Dienst <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`${inputClasses('service')} appearance-none pr-10`}
                  aria-invalid={!!formErrors.service}
                  aria-describedby={formErrors.service ? "service-error" : undefined}
                >
                  <option value="">Selecteer een dienst</option>
                  <option value="hardware-opkopen">Hardware Opkopen</option>
                  <option value="hardware-recyclen">Hardware Recyclen</option>
                  <option value="data-verwijderen">Data Verwijderen</option>
                  <option value="other">Anders</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-indigo-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              {formErrors.service && (
                <motion.p 
                  id="service-error"
                  className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.2 }}
                >
                  <FiAlertCircle className="mr-1" size={14} />
                  {formErrors.service}
                </motion.p>
              )}
            </motion.div>
            
            <motion.div variants={formItemVariants}>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 flex items-center">
                <FiMessageSquare className="mr-2 text-indigo-500" /> Bericht <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Vertel ons over uw wensen en vragen..."
                  rows={5}
                  className={inputClasses('message')}
                  aria-invalid={!!formErrors.message}
                  aria-describedby={formErrors.message ? "message-error" : undefined}
                ></textarea>
                <motion.span 
                  className="absolute right-3 top-3 text-indigo-500"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: focusedField === 'message' || formData.message ? 1 : 0,
                    scale: focusedField === 'message' || formData.message ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {formData.message && <FiCheck />}
                </motion.span>
              </div>
              {formErrors.message && (
                <motion.p 
                  id="message-error"
                  className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.2 }}
                >
                  <FiAlertCircle className="mr-1" size={14} />
                  {formErrors.message}
                </motion.p>
              )}
            </motion.div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 ${
                isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
              }`}
              variants={buttonVariants}
              whileHover={isSubmitting ? {} : "hover"}
              whileTap={isSubmitting ? {} : "tap"}
            >
              {isSubmitting ? (
                <>
                  <FiLoader className="animate-spin mr-2" />
                  <span>Versturen...</span>
                </>
              ) : (
                <>
                  <FiSend className="mr-2" />
                  <span>Verstuur bericht</span>
                </>
              )}
            </motion.button>
            
            <motion.p 
              variants={formItemVariants}
              className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4"
            >
              Door dit formulier te versturen gaat u akkoord met onze privacyverklaring.
              <br />Velden met een <span className="text-red-500">*</span> zijn verplicht.
            </motion.p>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactForm; 