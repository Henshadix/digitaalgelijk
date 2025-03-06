'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiHardDrive, FiShield, FiUsers, FiGlobe } from 'react-icons/fi';

// Counter animation component
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.toString());
      const incrementTime = (duration * 1000) / end;
      
      // Don't run if value is zero
      if (end === 0) return;
      
      // Remove existing timer
      let timer: NodeJS.Timeout | null = null;
      
      // Start the animation
      const run = () => {
        timer = setInterval(() => {
          start += 1;
          const progress = Math.min(start / end, 1);
          setCount(Math.floor(progress * end));
          
          if (start >= end) {
            if (timer) clearInterval(timer);
          }
        }, incrementTime);
      };
      
      run();
      
      return () => {
        if (timer) clearInterval(timer);
      };
    }
  }, [value, duration, isInView]);
  
  return <span ref={countRef}>{count.toLocaleString('nl-NL')}</span>;
};

interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  description: string;
}

const KeyStatistics: React.FC = () => {
  const stats: StatItem[] = [
    {
      icon: <FiHardDrive size={32} />,
      value: 250000,
      label: 'Apparaten verwerkt',
      description: 'Sinds onze oprichting hebben we meer dan 250.000 apparaten verwerkt en gerecycled.'
    },
    {
      icon: <FiShield size={32} />,
      value: 500000,
      label: 'GB data veilig verwijderd',
      description: 'We hebben meer dan 500.000 GB aan gevoelige data veilig en permanent verwijderd.'
    },
    {
      icon: <FiUsers size={32} />,
      value: 1200,
      label: 'Tevreden klanten',
      description: 'Meer dan 1.200 bedrijven en organisaties vertrouwen op onze diensten.'
    },
    {
      icon: <FiGlobe size={32} />,
      value: 3500,
      label: 'Ton CO₂ bespaard',
      description: 'Door hergebruik en recycling hebben we ongeveer 3.500 ton CO₂-uitstoot voorkomen.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-blue-400 dark:bg-blue-500 rounded-full filter blur-[100px] opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute left-0 top-0 w-1/4 h-1/4 bg-emerald-300 dark:bg-emerald-400 rounded-full filter blur-[100px] opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Onze Impact in Cijfers</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Bij EcoTech zijn we trots op de positieve impact die we hebben gemaakt op het milieu en voor onze klanten.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 transition-colors"
              variants={itemVariants}
            >
              <div className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">
                <AnimatedCounter value={stat.value} />
              </h3>
              <p className="text-lg font-semibold mb-4 text-emerald-600 dark:text-emerald-400">{stat.label}</p>
              <p className="text-gray-600 dark:text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyStatistics; 