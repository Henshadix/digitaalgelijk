// Shared custom hooks for reuse across components

import { useState, useEffect, useCallback, RefObject } from 'react';

// Hook to detect if the user is on a mobile device
export const useIsMobile = (breakpoint = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
};

// Hook to handle intersection observer for scroll animations
export const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  options = { threshold: 0.1, triggerOnce: true }
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // If triggerOnce is true and the element is intersecting, unobserve
        if (options.triggerOnce && entry.isIntersecting && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      { threshold: options.threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options.threshold, options.triggerOnce]);

  return isIntersecting;
};

// Hook to handle mouse parallax effect
export const useMouseParallax = (
  ref: RefObject<HTMLElement>,
  strength = 20,
  springConfig = { stiffness: 100, damping: 30 }
) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const targetRect = ref.current?.getBoundingClientRect();
      
      if (targetRect) {
        // Calculate relative position within the element
        const x = (clientX - targetRect.left) / targetRect.width;
        const y = (clientY - targetRect.top) / targetRect.height;
        
        setMousePosition({ x, y });
      }
    },
    [ref]
  );

  useEffect(() => {
    const currentRef = ref.current;
    
    if (currentRef) {
      currentRef.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [ref, handleMouseMove]);

  // Calculate parallax values
  const x = (mousePosition.x - 0.5) * strength;
  const y = (mousePosition.y - 0.5) * strength;

  return { x, y, springConfig };
};

// Hook for handling dark mode
export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a preference in localStorage
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial state based on saved preference or system preference
    setIsDarkMode(savedMode === 'true' || (savedMode === null && prefersDark));
    
    // Apply the theme
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', String(!isDarkMode));
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
}; 