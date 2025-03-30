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
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    text: 'text-blue-600 dark:text-blue-400'
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800',
    text: 'text-purple-600 dark:text-purple-400'
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    text: 'text-green-600 dark:text-green-400'
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-200 dark:border-amber-800',
    text: 'text-amber-600 dark:text-amber-400'
  },
  cyan: {
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    border: 'border-cyan-200 dark:border-cyan-800',
    text: 'text-cyan-600 dark:text-cyan-400'
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
    title: 'text-xl',
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
      className={`${dimensions.container} rounded-lg flex flex-col items-center justify-center ${colors.bg} ${colors.border} border-2 ${className}`}
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