'use client';

import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiChevronRight } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Diensten',
      links: [
        { name: 'Hardware Opkopen', href: '/diensten/hardware-opkopen' },
        { name: 'Data Verwijdering', href: '/diensten/data-verwijdering' },
        { name: 'Hardware Recycling', href: '/diensten/hardware-recycling' },
        { name: 'Logistieke Diensten', href: '/diensten/logistieke-diensten' },
      ]
    },
    {
      title: 'Bedrijf',
      links: [
        { name: 'Over Ons', href: '/over-ons' },
        { name: 'Certificeringen', href: '/certificeringen' },
        { name: 'Vacatures', href: '/vacatures' },
      ]
    },
    {
      title: 'Ondersteuning',
      links: [
        { name: 'Contact', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Algemene Voorwaarden', href: '/algemene-voorwaarden' },
        { name: 'Cookiebeleid', href: '/cookiebeleid' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Logo and company name */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 md:w-11 md:h-11">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-md flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg md:text-xl">DG</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Digitaal<span className="text-blue-300">gelijk</span></span>
                <span className="text-xs font-medium text-blue-200">Duurzame IT-oplossingen</span>
              </div>
            </div>
            
            {/* Contact info */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-sm">
              <a 
                href="tel:+31649892654" 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                aria-label="Bel ons op +31 6 4989 2654"
              >
                <span className="bg-blue-800 p-1.5 rounded-full">
                  <FiPhone size={14} />
                </span>
                <span>+31 6 4989 2654</span>
              </a>
              <a 
                href="mailto:info@digitaalgelijk.nl" 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                aria-label="Email ons op info@digitaalgelijk.nl"
              >
                <span className="bg-blue-800 p-1.5 rounded-full">
                  <FiMail size={14} />
                </span>
                <span>info@digitaalgelijk.nl</span>
              </a>
              <div className="flex items-center gap-2 text-white/90">
                <span className="bg-blue-800 p-1.5 rounded-full">
                  <FiMapPin size={14} />
                </span>
                <span>Regio Nijmegen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white border-l-4 border-blue-600 pl-3">
              Over Digitaalgelijk
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Digitaalgelijk is gespecialiseerd in duurzame IT-oplossingen voor bedrijven. Wij bieden diensten aan op het gebied van hardware opkopen, data verwijdering, hardware recycling en logistieke diensten.
            </p>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title} className="flex flex-col">
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white border-l-4 border-blue-600 pl-3">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors group"
                    >
                      <FiChevronRight className="mr-1.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Digitaalgelijk. Alle rechten voorbehouden.
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <Link href="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">·</span>
            <Link href="/algemene-voorwaarden" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 