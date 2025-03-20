'use client';

import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { domAnimation, LazyMotion, m, Variants } from 'framer-motion';

type HTMLTag = 'div' | 'span' | 'section' | 'article' | 'main' | 'header' | 'footer' | 'aside' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// Types voor de MotionWrapper props
interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'slideIn' | 'scaleIn' | 'popIn';
  delay?: number;
  once?: boolean;
  disabled?: boolean;
  customVariant?: Variants;
  duration?: number;
  tag?: HTMLTag;
  viewport?: {
    margin?: string;
    amount?: 'some' | 'all' | number;
  };
}

// Geoptimaliseerde variant objecten die memoized zijn 
// (niet steeds opnieuw gerenderd tijdens re-renders)
const variants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
      opacity: 1,
      transition: { duration: 0.4, delay, ease: 'easeOut' }
    }),
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: 'easeOut' }
    }),
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: 'easeOut' }
    }),
  },
  slideIn: {
    hidden: { opacity: 0, x: -30 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay, ease: 'easeOut' }
    }),
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay, ease: 'easeOut' }
    }),
  },
  popIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: [0.8, 1.03, 1],
      transition: { duration: 0.5, delay, times: [0, 0.7, 1], ease: 'easeOut' }
    }),
  }
};

// Type-safe componenten voor de verschillende HTML tags
const MotionDiv = m.div;
const MotionSpan = m.span;
const MotionSection = m.section;
const MotionArticle = m.article;
const MotionHeader = m.header;
const MotionFooter = m.footer;
const MotionMain = m.main;
const MotionP = m.p;
const MotionH1 = m.h1;
const MotionH2 = m.h2;
const MotionH3 = m.h3;
const MotionH4 = m.h4;
const MotionH5 = m.h5;
const MotionH6 = m.h6;
const MotionAside = m.aside;

/**
 * MotionWrapper component for optimized animations with respect for user preferences
 * 
 * @example
 * <MotionWrapper variant="fadeInUp" delay={0.2}>
 *   <div>Animated content</div>
 * </MotionWrapper>
 */
const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  className = '',
  variant = 'fadeIn',
  delay = 0,
  once = true,
  disabled = false,
  customVariant,
  duration,
  tag = 'div',
  viewport = { margin: '-100px', amount: 0.1 }
}) => {
  // Respect reduced motion preferences
  const prefersReducedMotion = useReducedMotion();
  
  // If disabled or reduced motion is preferred, render without animation
  if (disabled || prefersReducedMotion) {
    return React.createElement(tag, { className }, children);
  }
  
  // Select variant
  const selectedVariant = customVariant || variants[variant];
  
  // Create common props for motion component
  const motionProps = {
    className,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once, ...viewport },
    variants: selectedVariant,
    custom: delay,
    transition: duration ? { duration } : undefined,
    'data-reduced-motion-safe': true
  };

  // Map van HTML tags naar Motion componenten
  const motionComponentMap = {
    div: MotionDiv,
    span: MotionSpan,
    section: MotionSection,
    article: MotionArticle,
    main: MotionMain,
    header: MotionHeader,
    footer: MotionFooter,
    aside: MotionAside,
    p: MotionP,
    h1: MotionH1,
    h2: MotionH2,
    h3: MotionH3,
    h4: MotionH4,
    h5: MotionH5,
    h6: MotionH6
  };
  
  // Gebruik het juiste motion component
  const MotionComponent = motionComponentMap[tag];
  
  return (
    <LazyMotion features={domAnimation}>
      <MotionComponent {...motionProps}>{children}</MotionComponent>
    </LazyMotion>
  );
};

export default React.memo(MotionWrapper); 