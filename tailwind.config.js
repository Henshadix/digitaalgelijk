/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // blue-500
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        accent: {
          DEFAULT: '#0EA5E9', // sky-500
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          950: '#082F49',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [
    // Background opacity classes
    'bg-white/5',
    'bg-white/10',
    'bg-white/20',
    'bg-white/30',
    'bg-white/40',
    'bg-white/50',
    // Border opacity classes
    'border-white/10',
    'border-white/20',
    'border-white/30',
    // Gradient classes
    'from-primary-500',
    'to-primary-600',
    'to-accent-500',
    'from-primary',
    'to-primary',
    'from-accent',
    'to-accent',
    'from-blue-300',
    'to-blue-100',
    'from-blue-400',
    'to-blue-200',
    'from-blue-500',
    'to-blue-600',
    'from-blue-600',
    'to-blue-700',
    // Backdrop classes
    'backdrop-blur-sm',
    'backdrop-blur-md',
    'backdrop-blur-lg',
    // Animation classes
    'animate-fade-in',
    'animate-slide-up',
    'animate-slide-down',
    'animate-slide-left',
    'animate-slide-right',
    'animate-scale',
    'animate-pulse',
    'animate-bounce',
    'animate-spin',
    'animate-ping',
    // Glass effect classes
    'glass',
    'glass-dark',
    // Glow effect classes
    'glow',
    'glow-accent',
    'glow-success',
    'glow-warning',
    'glow-danger',
    // Gradient text
    'gradient-text',
  ],
}; 