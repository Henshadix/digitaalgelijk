'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const clientLogos = [
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png',
    },
    {
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
    },
    {
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png',
    },
    {
      name: 'BMW',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png',
    },
    {
      name: 'Philips',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Philips_logo_new.svg/2560px-Philips_logo_new.svg.png',
    },
    {
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
    },
    {
      name: 'Shell',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shell_logo.svg/1200px-Shell_logo.svg.png',
    },
    {
      name: 'ING',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/ING_Group_N.V._Logo.svg/2560px-ING_Group_N.V._Logo.svg.png',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Vertrouwd door toonaangevende bedrijven</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Wij werken samen met vooraanstaande organisaties voor duurzame IT-oplossingen.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {clientLogos.map((client, index) => (
            <motion.div 
              key={index} 
              className="h-16 w-40 relative grayscale hover:grayscale-0 transition-all duration-300"
              variants={itemVariants}
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                style={{ objectFit: "contain" }}
                className="dark:brightness-200 dark:contrast-200"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 italic">
            "Neiwu heeft ons geholpen bij het veilig afstoten van 500+ werkstations. Hun professionele aanpak en transparante werkwijze hebben ons volledig overtuigd."
          </p>
          <p className="mt-4 font-medium text-gray-800 dark:text-gray-200">
            — IT Manager, Fortune 500 bedrijf
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos; 