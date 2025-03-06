'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../shared/types';
import { scrollRevealVariants } from '../shared/animations';

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', id, as: Component = 'section', ...props }, ref) => {
    return (
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        className="overflow-hidden"
      >
        <motion.div variants={scrollRevealVariants}>
          <Component
            ref={ref}
            id={id}
            className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl ${className}`}
            {...props}
          >
            {children}
          </Component>
        </motion.div>
      </motion.div>
    );
  }
);

Section.displayName = 'Section';

export default Section; 