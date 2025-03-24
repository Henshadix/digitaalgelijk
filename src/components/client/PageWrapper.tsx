'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Client component wrapper voor pagina's om framer-motion animaties veilig te kunnen gebruiken
 */
export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageWrapper; 