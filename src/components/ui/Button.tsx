'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ButtonProps } from '../shared/types';
import { buttonHoverVariants } from '../shared/animations';

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'right',
      fullWidth = false,
      disabled = false,
      loading = false,
      href,
      onClick,
      className = '',
      ...props
    },
    ref
  ) => {
    // Base classes
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    // Size classes
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };
    
    // Variant classes
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500',
      outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 focus:ring-gray-500',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 focus:ring-gray-500',
    };
    
    // Width classes
    const widthClasses = fullWidth ? 'w-full' : '';
    
    // Disabled classes
    const disabledClasses = disabled || loading ? 'opacity-60 cursor-not-allowed' : '';
    
    // Combine all classes
    const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClasses} ${disabledClasses} ${className}`;
    
    // Button content
    const buttonContent = (
      <>
        {Icon && iconPosition === 'left' && <Icon className={`mr-2 ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base'}`} />}
        {loading ? <span className="animate-pulse">Loading...</span> : children}
        {Icon && iconPosition === 'right' && <Icon className={`ml-2 ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base'}`} />}
      </>
    );
    
    // If href is provided, render as Link
    if (href && !disabled) {
      return (
        <motion.div
          className="inline-block"
          variants={buttonHoverVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <Link 
            href={href}
            className={buttonClasses}
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...props}
          >
            {buttonContent}
          </Link>
        </motion.div>
      );
    }
    
    // Otherwise, render as button
    return (
      <motion.button
        type="button"
        className={buttonClasses}
        disabled={disabled || loading}
        onClick={onClick}
        ref={ref as React.Ref<HTMLButtonElement>}
        variants={buttonHoverVariants}
        initial="initial"
        whileHover={!disabled && !loading ? "hover" : undefined}
        whileTap={!disabled && !loading ? "tap" : undefined}
        {...props}
      >
        {buttonContent}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 