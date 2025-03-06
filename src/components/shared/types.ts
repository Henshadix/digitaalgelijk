// Shared TypeScript types for use across components

import { ReactNode, ElementType } from 'react';
import { IconType } from 'react-icons';

// Service type
export interface Service {
  title: string;
  description: string;
  icon: IconType;
  link?: string;
  delay?: number;
  features?: string[];
}

// Testimonial type
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  rating?: number;
}

// Client logo type
export interface ClientLogo {
  name: string;
  logo: string;
  alt: string;
}

// FAQ item type
export interface FAQItem {
  question: string;
  answer: string;
}

// Blog post type
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image?: string;
  category: string;
  slug: string;
}

// Statistic type
export interface Statistic {
  value: string;
  label: string;
  icon: IconType;
  description?: string;
}

// Button props type
export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}

// Section props type
export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
}

// Card props type
export interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

// Form field props type
export interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

// Theme context type
export interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
} 