'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import IconLoader from './IconLoader';
import { motion, AnimatePresence } from 'framer-motion';

// Zod schema voor formuliervalidatie
const contactFormSchema = z.object({
  firstName: z.string().min(2, 'Voornaam moet minimaal 2 tekens bevatten'),
  lastName: z.string().min(2, 'Achternaam moet minimaal 2 tekens bevatten'),
  email: z.string().email('Ongeldig e-mailadres'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Selecteer een onderwerp'),
  message: z.string().min(10, 'Bericht moet minimaal 10 tekens bevatten'),
  privacy: z.literal(true, {
    errorMap: () => ({ message: 'U moet akkoord gaan met het privacybeleid' }),
  }),
});

// TypeScript type afgeleid van het Zod schema
type ContactFormData = z.infer<typeof contactFormSchema>;

// Props voor het component
interface ContactFormProps {
  onSubmitSuccess?: (data: ContactFormData) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmitSuccess }) => {
  // Form state met React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, touchedFields },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  });

  // Status states
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Memoriseer animatievarianten
  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: { opacity: 0, y: -20 }
  };

  const inputAnimation = {
    focus: { scale: 1.01, borderColor: '#3b82f6' },
    error: { x: [0, -5, 5, -5, 0], transition: { duration: 0.4 } }
  };

  // Submit handler
  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus('loading');

      // API aanroep naar het backend endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Er is een fout opgetreden bij het versturen van het bericht');
      }

      // Success
      setSubmitStatus('success');
      if (onSubmitSuccess) {
        onSubmitSuccess(data);
      }
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Onbekende fout opgetreden');
      setTimeout(() => setErrorMessage(null), 5000);
    }
  };

  // Hulpfunctie voor inputfeedback
  const getInputClasses = (fieldName: keyof ContactFormData) => {
    const baseClasses = "w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2";
    
    if (errors[fieldName]) {
      return `${baseClasses} border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900`;
    }
    
    if (touchedFields[fieldName]) {
      return `${baseClasses} border-green-500 focus:ring-green-200 dark:border-green-700 dark:focus:ring-green-900`;
    }
    
    return `${baseClasses} border-gray-300 focus:ring-blue-500 dark:border-gray-700 dark:focus:ring-blue-500`;
  };

  return (
    <AnimatePresence mode="wait">
      {submitStatus === 'success' ? (
        <motion.div 
          key="success"
          className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
            <IconLoader icon="FiCheck" size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Bericht verstuurd!</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.
          </p>
        </motion.div>
      ) : (
        <motion.form 
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={formAnimation}
        >
          {submitStatus === 'error' && errorMessage && (
            <motion.div 
              className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-400 flex items-start gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <IconLoader icon="FiAlertCircle" className="flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Er is een fout opgetreden</p>
                <p className="text-sm">{errorMessage}</p>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Voornaam
              </label>
              <motion.div whileFocus="focus" animate={errors.firstName ? "error" : undefined} variants={inputAnimation}>
                <input
                  id="firstName"
                  className={getInputClasses('firstName')}
                  {...register('firstName')}
                  aria-invalid={errors.firstName ? "true" : "false"}
                  aria-required="true"
                />
              </motion.div>
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Achternaam
              </label>
              <motion.div whileFocus="focus" animate={errors.lastName ? "error" : undefined} variants={inputAnimation}>
                <input
                  id="lastName"
                  className={getInputClasses('lastName')}
                  {...register('lastName')}
                  aria-invalid={errors.lastName ? "true" : "false"}
                  aria-required="true"
                />
              </motion.div>
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              E-mailadres
            </label>
            <motion.div whileFocus="focus" animate={errors.email ? "error" : undefined} variants={inputAnimation}>
              <input
                id="email"
                type="email"
                className={getInputClasses('email')}
                {...register('email')}
                aria-invalid={errors.email ? "true" : "false"}
                aria-required="true"
              />
            </motion.div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Telefoonnummer (optioneel)
            </label>
            <input
              id="phone"
              type="tel"
              className={getInputClasses('phone')}
              {...register('phone')}
              aria-required="false"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Onderwerp
            </label>
            <motion.div whileFocus="focus" animate={errors.subject ? "error" : undefined} variants={inputAnimation}>
              <select
                id="subject"
                className={getInputClasses('subject')}
                {...register('subject')}
                aria-invalid={errors.subject ? "true" : "false"}
                aria-required="true"
              >
                <option value="">Selecteer een onderwerp</option>
                <option value="hardware-opkopen">Hardware Opkopen</option>
                <option value="data-verwijdering">Data Verwijdering</option>
                <option value="hardware-recycling">Hardware Recycling</option>
                <option value="other">Anders</option>
              </select>
            </motion.div>
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Uw bericht
            </label>
            <motion.div whileFocus="focus" animate={errors.message ? "error" : undefined} variants={inputAnimation}>
              <textarea
                id="message"
                rows={5}
                className={getInputClasses('message')}
                {...register('message')}
                aria-invalid={errors.message ? "true" : "false"}
                aria-required="true"
              ></textarea>
            </motion.div>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
            )}
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="privacy"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                {...register('privacy')}
                aria-invalid={errors.privacy ? "true" : "false"}
                aria-required="true"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="privacy" className="text-gray-700 dark:text-gray-300">
                Ik ga akkoord met het <a href="/privacy-policy" className="text-blue-600 hover:underline">privacybeleid</a>
              </label>
              {errors.privacy && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.privacy.message}</p>
              )}
            </div>
          </div>
          
          <motion.button
            type="submit"
            className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:bg-gray-400"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <>
                <IconLoader icon="FiLoader" className="animate-spin mr-2" />
                <span>Bezig met versturen...</span>
              </>
            ) : (
              <>
                <span>Verstuur Bericht</span>
                <IconLoader icon="FiArrowRight" className="ml-2" />
              </>
            )}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}; 