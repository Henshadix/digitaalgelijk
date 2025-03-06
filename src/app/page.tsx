'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import CallToAction from "@/components/home/CallToAction";

export const metadata = {
  title: 'Digitaalgelijk | Duurzame IT-oplossingen voor uw bedrijf',
  description: 'Digitaalgelijk koopt uw gebruikte hardware op, recyclet het verantwoord en zorgt voor veilige dataverwijdering. Ontdek onze duurzame IT-oplossingen.',
};

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the under construction page
    router.replace('/onder-constructie');
  }, [router]);

  // Return an empty div as this page won't be visible
  return <div></div>;
}
