'use client';

import React from 'react';
import { ContactForm } from '../shared/ContactForm';

/**
 * Client component wrapper for the contact form
 * Allows for client-side interactivity while keeping the parent page as a Server Component
 */
export const ContactFormClient: React.FC = () => {
  // Event handlers and client state kan hier worden toegevoegd
  const handleSubmitSuccess = (data: any) => {
    // Optioneel: extra client-side handelingen na succesvol verzenden
    console.log('Form submitted:', data);
    
    // Optioneel: Google Analytics conversie tracking
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
        'event_category': 'contact',
        'event_label': data.subject,
        'value': 1
      });
    }
  };

  return <ContactForm onSubmitSuccess={handleSubmitSuccess} />;
}; 