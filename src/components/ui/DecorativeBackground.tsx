import React from 'react';

/**
 * Herbruikbaar component voor decoratieve achtergrond elementen
 * Dit kan worden gedeeld tussen verschillende pagina's voor consistente styling
 */
const DecorativeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Gradient orbs */}
      <div aria-hidden="true" className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-3xl"></div>
      <div aria-hidden="true" className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl"></div>
      
      {/* Grid pattern - verborgen voor screenreaders */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
    </div>
  );
};

export default React.memo(DecorativeBackground); 