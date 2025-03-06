'use client';

import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme as useNextTheme } from 'next-themes';
import { useState, useEffect } from 'react';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  // Voorkom hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`p-2 rounded-full ${className}`}></div>;
  }

  const isDarkMode = resolvedTheme === 'dark';
  const toggleDarkMode = () => setTheme(isDarkMode ? 'light' : 'dark');

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleDarkMode}
      className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
      aria-label={isDarkMode ? "Schakel naar licht thema" : "Schakel naar donker thema"}
    >
      {isDarkMode ? (
        <FiSun className="text-yellow-400" />
      ) : (
        <FiMoon className="text-gray-700 dark:text-gray-200" />
      )}
    </motion.button>
  );
}

export default ThemeToggle; 