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
    bg: 'bg-white dark:bg-gray-800',
    border: 'border-blue-300 dark:border-blue-600',
    text: 'text-blue-700 dark:text-blue-200',
    fill: 'fill-blue-600 dark:fill-blue-400'
  },
  purple: {
    bg: 'bg-white dark:bg-gray-800',
    border: 'border-purple-300 dark:border-purple-600',
    text: 'text-purple-700 dark:text-purple-200',
    fill: 'fill-purple-600 dark:fill-purple-400'
  },
  green: {
    bg: 'bg-white dark:bg-gray-800',
    border: 'border-green-300 dark:border-green-600',
    text: 'text-green-700 dark:text-green-200',
    fill: 'fill-green-600 dark:fill-green-400'
  },
  amber: {
    bg: 'bg-white dark:bg-gray-800',
    border: 'border-amber-300 dark:border-amber-600',
    text: 'text-amber-700 dark:text-amber-200',
    fill: 'fill-amber-600 dark:fill-amber-400'
  },
  cyan: {
    bg: 'bg-white dark:bg-gray-800',
    border: 'border-cyan-300 dark:border-cyan-600',
    text: 'text-cyan-700 dark:text-cyan-200',
    fill: 'fill-cyan-600 dark:fill-cyan-400'
  }
};

const sizeClasses = {
  sm: {
    container: 'w-24 h-24',
    badge: 'w-16 h-16',
    title: 'text-sm',
    subtitle: 'text-xs'
  },
  md: {
    container: 'w-32 h-32',
    badge: 'w-24 h-24',
    title: 'text-base',
    subtitle: 'text-xs'
  },
  lg: {
    container: 'w-40 h-40',
    badge: 'w-32 h-32',
    title: 'text-xl md:text-2xl',
    subtitle: 'text-sm'
  }
};

const CertificationSVG = ({ title, className }: { title: string; className?: string }) => {
  if (title.includes('ISO')) {
    return (
      <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="none" strokeWidth="5" className="stroke-current" />
        <text x="50" y="45" textAnchor="middle" className="text-2xl font-bold fill-current">ISO</text>
        <text x="50" y="65" textAnchor="middle" className="text-xl fill-current">
          {title.match(/\d+/)?.[0] || ''}
        </text>
      </svg>
    );
  } else if (title.includes('WEEELABEX')) {
    return (
      <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="80" height="80" rx="10" fill="none" strokeWidth="5" className="stroke-current" />
        <text x="50" y="45" textAnchor="middle" className="text-lg font-bold fill-current">WEEE</text>
        <text x="50" y="65" textAnchor="middle" className="text-lg font-bold fill-current">LABEX</text>
      </svg>
    );
  } else if (title.includes('NIST')) {
    return (
      <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" strokeWidth="5" className="stroke-current" />
        <text x="50" y="45" textAnchor="middle" className="text-xl font-bold fill-current">NIST</text>
        <text x="50" y="65" textAnchor="middle" className="text-lg fill-current">800-88</text>
      </svg>
    );
  }
  return null;
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
      className={`${dimensions.container} rounded-lg flex flex-col items-center justify-center ${colors.bg} ${colors.border} border-2 shadow-lg hover:shadow-xl transition-shadow duration-300 p-3 ${className}`}
    >
      <div className={`${dimensions.badge} ${colors.text}`}>
        <CertificationSVG title={title} className="w-full h-full" />
      </div>
      {subtitle && (
        <div className={`mt-2 ${colors.text} ${dimensions.subtitle} text-center px-2 opacity-90`}>
          {subtitle}
        </div>
      )}
    </div>
  );
} 