'use client';

import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import React from 'react';

// Export individuele motion componenten
export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionA = motion.a;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionUl = motion.ul;
export const MotionLi = motion.li;
export const MotionButton = motion.button;
export const MotionImg = motion.img;
export const MotionForm = motion.form;
export const MotionInput = motion.input;
export const MotionLabel = motion.label;
export const MotionTextarea = motion.textarea;
export const MotionSelect = motion.select;
export const MotionOption = motion.option;
export const MotionSvg = motion.svg;
export const MotionPath = motion.path;
export const MotionCircle = motion.circle;
export const MotionRect = motion.rect;

// Export helper functies en objecten
export { AnimatePresence, useAnimationControls };

// Export de hele motion object voor wanneer je iets nodig hebt dat hier niet is gedefinieerd
export { motion }; 