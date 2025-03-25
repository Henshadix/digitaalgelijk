'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import PageWrapper from '@/components/client/PageWrapper';

// Lazy load componenten met verbeterde laadstrategie
// Hero heeft hoogste prioriteit voor eerste load
const Hero = dynamic(() => import('@/components/home/Hero'), {
  loading: () => <div className="min-h-[70vh] bg-gray-50 dark:bg-gray-900 animate-pulse flex items-center justify-center">Laden...</div>,
  ssr: true // Server-side rendering voor eerste pageload
});

const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'), {
  loading: () => <div className="min-h-[50vh] bg-gray-50 dark:bg-gray-900 animate-pulse flex items-center justify-center">Laden...</div>,
  ssr: false // Client-side rendering voor niet-kritieke componenten
});

// Gebruik van React.memo voor betere performance
const Home = () => {
  return (
    <PageWrapper>
      <div>
        <Suspense fallback={<div aria-live="polite" aria-busy="true" className="min-h-[70vh] bg-gray-50 dark:bg-gray-900 animate-pulse flex items-center justify-center">Laden van hoofdsectie...</div>}>
          <Hero />
        </Suspense>
        
        <div id="services-section">
          <Suspense fallback={<div aria-live="polite" aria-busy="true" className="min-h-[50vh] bg-gray-50 dark:bg-gray-900 animate-pulse flex items-center justify-center">Laden van diensten...</div>}>
            <ServicesSection />
          </Suspense>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
