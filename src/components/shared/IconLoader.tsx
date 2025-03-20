'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { IconType } from 'react-icons';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

// Dynamische icon imports
interface IconLoaderProps {
  icon: string;
  size?: number;
  className?: string;
  title?: string;
}

// Type voor het mappingen naar icon libraries
type IconSetMapping = Record<string, Record<string, IconType>>;

// Lazy-loaded icon component caching
const iconComponents: Record<string, IconType> = {};

const IconLoader: React.FC<IconLoaderProps> = ({ icon, size = 24, className = '', title }) => {
  const [IconComponent, setIconComponent] = useState<IconType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoriseer icon libraries mapping
  const iconSets = useMemo<IconSetMapping>(() => ({
    'fi': FiIcons,   // Feather Icons
    'hi': HiIcons,   // Heroicons
    'bi': BiIcons,   // Bootstrap Icons
    'ai': AiIcons,   // Ant Design Icons
    'ri': RiIcons,   // Remix Icons
  }), []);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        setIsLoading(true);
        
        // Als icon al in cache zit, gebruik die
        if (iconComponents[icon]) {
          setIconComponent(iconComponents[icon]);
          setIsLoading(false);
          return;
        }
        
        // Extract de iconset (fi, hi, etc.) en icoon naam (User, Mail, etc.)
        const iconPrefix = icon.substring(0, 2).toLowerCase();
        const iconName = icon.substring(2);
        
        // Volledige icon naam volgens de conventies (bijv. FiUser, HiUser)
        const fullIconName = `${iconPrefix.charAt(0).toUpperCase()}${iconPrefix.charAt(1)}${iconName}`;
        
        // Controleer of de iconset wordt ondersteund
        const iconSet = iconSets[iconPrefix];
        
        if (!iconSet) {
          throw new Error(`Icon set "${iconPrefix}" wordt niet ondersteund. Gebruik een van: ${Object.keys(iconSets).join(', ')}`);
        }
        
        // Zoek het icon in de juiste library
        const selectedIcon = iconSet[fullIconName as keyof typeof iconSet];
        
        if (!selectedIcon) {
          throw new Error(`Icon '${fullIconName}' niet gevonden in ${iconPrefix} iconset`);
        }
        
        // Cache icon voor toekomstig gebruik
        iconComponents[icon] = selectedIcon;
        setIconComponent(selectedIcon);
      } catch (err: any) {
        console.error(`Fout bij laden icon ${icon}:`, err);
        setError(`Icon kon niet worden geladen: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadIcon();
  }, [icon, iconSets]);
  
  if (isLoading) {
    return <span className={`inline-block ${className}`} style={{ width: size, height: size }} />;
  }
  
  if (error || !IconComponent) {
    return <span className={`text-red-500 ${className}`} title={error || 'Icon niet gevonden'}>⚠️</span>;
  }
  
  return <IconComponent className={className} size={size} title={title} />;
};

export default React.memo(IconLoader); 