'use client';

interface CertificationBadgeProps {
  title: string;
  subtitle?: string;
  colorScheme: 'blue' | 'purple' | 'green' | 'amber' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-800/60',
    border: 'border-blue-300 dark:border-blue-600',
    text: 'text-blue-700 dark:text-blue-200'
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-800/60',
    border: 'border-purple-300 dark:border-purple-600',
    text: 'text-purple-700 dark:text-purple-200'
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-800/60',
    border: 'border-green-300 dark:border-green-600',
    text: 'text-green-700 dark:text-green-200'
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-800/60',
    border: 'border-amber-300 dark:border-amber-600',
    text: 'text-amber-700 dark:text-amber-200'
  },
  cyan: {
    bg: 'bg-cyan-50 dark:bg-cyan-800/60',
    border: 'border-cyan-300 dark:border-cyan-600',
    text: 'text-cyan-700 dark:text-cyan-200'
  }
};

const sizeClasses = {
  sm: {
    container: 'w-16 h-16',
    title: 'text-sm',
    subtitle: 'text-xs'
  },
  md: {
    container: 'w-24 h-24',
    title: 'text-base',
    subtitle: 'text-xs'
  },
  lg: {
    container: 'w-32 h-32',
    title: 'text-xl md:text-2xl',
    subtitle: 'text-sm'
  }
};

export default function CertificationBadge({ 
  title, 
  subtitle, 
  colorScheme, 
  size = 'lg',
  className = ''
}: CertificationBadgeProps) {
  const colors = colorClasses[colorScheme];
  const dimensions = sizeClasses[size];
  
  return (
    <div 
      className={`${dimensions.container} rounded-lg flex flex-col items-center justify-center ${colors.bg} ${colors.border} border-2 shadow-md ${className}`}
    >
      <div className={`font-bold ${colors.text} ${dimensions.title} text-center px-2`}>
        {title}
      </div>
      {subtitle && (
        <div className={`mt-1 ${colors.text} ${dimensions.subtitle} text-center px-2`}>
          {subtitle}
        </div>
      )}
    </div>
  );
} 