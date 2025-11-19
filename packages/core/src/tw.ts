import type { CSSProperties } from 'react';

/**
 * Converts Tailwind CSS classes to inline styles for email compatibility.
 * Supports common Tailwind utilities that are email-safe.
 */
export function tw(classNames: string): CSSProperties {
  const classes = classNames.split(' ').filter(Boolean);
  const styles: CSSProperties = {};

  for (const className of classes) {
    // Text Colors
    if (className.startsWith('text-')) {
      const color = getTailwindColor(className.replace('text-', ''));
      if (color) styles.color = color;
    }
    
    // Background Colors
    if (className.startsWith('bg-')) {
      const color = getTailwindColor(className.replace('bg-', ''));
      if (color) styles.backgroundColor = color;
    }
    
    // Padding
    if (className.startsWith('p-')) {
      const value = getTailwindSpacing(className.replace('p-', ''));
      if (value) styles.padding = value;
    }
    if (className.startsWith('px-')) {
      const value = getTailwindSpacing(className.replace('px-', ''));
      if (value) {
        styles.paddingLeft = value;
        styles.paddingRight = value;
      }
    }
    if (className.startsWith('py-')) {
      const value = getTailwindSpacing(className.replace('py-', ''));
      if (value) {
        styles.paddingTop = value;
        styles.paddingBottom = value;
      }
    }
    if (className.startsWith('pt-')) {
      const value = getTailwindSpacing(className.replace('pt-', ''));
      if (value) styles.paddingTop = value;
    }
    if (className.startsWith('pb-')) {
      const value = getTailwindSpacing(className.replace('pb-', ''));
      if (value) styles.paddingBottom = value;
    }
    if (className.startsWith('pl-')) {
      const value = getTailwindSpacing(className.replace('pl-', ''));
      if (value) styles.paddingLeft = value;
    }
    if (className.startsWith('pr-')) {
      const value = getTailwindSpacing(className.replace('pr-', ''));
      if (value) styles.paddingRight = value;
    }
    
    // Margin
    if (className.startsWith('m-')) {
      const value = getTailwindSpacing(className.replace('m-', ''));
      if (value) styles.margin = value;
    }
    if (className.startsWith('mx-')) {
      const value = getTailwindSpacing(className.replace('mx-', ''));
      if (value) {
        styles.marginLeft = value;
        styles.marginRight = value;
      }
    }
    if (className.startsWith('my-')) {
      const value = getTailwindSpacing(className.replace('my-', ''));
      if (value) {
        styles.marginTop = value;
        styles.marginBottom = value;
      }
    }
    if (className.startsWith('mt-')) {
      const value = getTailwindSpacing(className.replace('mt-', ''));
      if (value) styles.marginTop = value;
    }
    if (className.startsWith('mb-')) {
      const value = getTailwindSpacing(className.replace('mb-', ''));
      if (value) styles.marginBottom = value;
    }
    if (className.startsWith('ml-')) {
      const value = getTailwindSpacing(className.replace('ml-', ''));
      if (value) styles.marginLeft = value;
    }
    if (className.startsWith('mr-')) {
      const value = getTailwindSpacing(className.replace('mr-', ''));
      if (value) styles.marginRight = value;
    }
    
    // Font Size
    if (className.startsWith('text-')) {
      const size = getTailwindFontSize(className);
      if (size) styles.fontSize = size;
    }
    
    // Font Weight
    if (className.startsWith('font-')) {
      const weight = getTailwindFontWeight(className.replace('font-', ''));
      if (weight) styles.fontWeight = weight;
    }
    
    // Text Alignment
    if (className === 'text-left') styles.textAlign = 'left';
    if (className === 'text-center') styles.textAlign = 'center';
    if (className === 'text-right') styles.textAlign = 'right';
    
    // Border Radius
    if (className.startsWith('rounded')) {
      const radius = getTailwindBorderRadius(className);
      if (radius) styles.borderRadius = radius;
    }
    
    // Width & Height
    if (className.startsWith('w-')) {
      const width = getTailwindSize(className.replace('w-', ''));
      if (width) styles.width = width;
    }
    if (className.startsWith('h-')) {
      const height = getTailwindSize(className.replace('h-', ''));
      if (height) styles.height = height;
    }
  }

  return styles;
}

// Tailwind Color Palette (subset for email safety)
function getTailwindColor(colorClass: string): string | undefined {
  const colors: Record<string, string> = {
    // Grayscale
    'white': '#ffffff',
    'black': '#000000',
    'gray-50': '#f9fafb',
    'gray-100': '#f3f4f6',
    'gray-200': '#e5e7eb',
    'gray-300': '#d1d5db',
    'gray-400': '#9ca3af',
    'gray-500': '#6b7280',
    'gray-600': '#4b5563',
    'gray-700': '#374151',
    'gray-800': '#1f2937',
    'gray-900': '#111827',
    
    // Blue
    'blue-50': '#eff6ff',
    'blue-100': '#dbeafe',
    'blue-200': '#bfdbfe',
    'blue-300': '#93c5fd',
    'blue-400': '#60a5fa',
    'blue-500': '#3b82f6',
    'blue-600': '#2563eb',
    'blue-700': '#1d4ed8',
    'blue-800': '#1e40af',
    'blue-900': '#1e3a8a',
    
    // Red
    'red-50': '#fef2f2',
    'red-100': '#fee2e2',
    'red-200': '#fecaca',
    'red-300': '#fca5a5',
    'red-400': '#f87171',
    'red-500': '#ef4444',
    'red-600': '#dc2626',
    'red-700': '#b91c1c',
    'red-800': '#991b1b',
    'red-900': '#7f1d1d',
    
    // Green
    'green-50': '#f0fdf4',
    'green-100': '#dcfce7',
    'green-200': '#bbf7d0',
    'green-300': '#86efac',
    'green-400': '#4ade80',
    'green-500': '#22c55e',
    'green-600': '#16a34a',
    'green-700': '#15803d',
    'green-800': '#166534',
    'green-900': '#14532d',
  };
  
  return colors[colorClass];
}

// Tailwind Spacing Scale
function getTailwindSpacing(value: string): string | undefined {
  const spacing: Record<string, string> = {
    '0': '0px',
    '0.5': '0.125rem',
    '1': '0.25rem',
    '1.5': '0.375rem',
    '2': '0.5rem',
    '2.5': '0.625rem',
    '3': '0.75rem',
    '3.5': '0.875rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '28': '7rem',
    '32': '8rem',
    '36': '9rem',
    '40': '10rem',
    '44': '11rem',
    '48': '12rem',
    '52': '13rem',
    '56': '14rem',
    '60': '15rem',
    '64': '16rem',
    '72': '18rem',
    '80': '20rem',
    '96': '24rem',
  };
  
  return spacing[value];
}

// Tailwind Font Sizes
function getTailwindFontSize(className: string): string | undefined {
  const sizes: Record<string, string> = {
    'text-xs': '0.75rem',
    'text-sm': '0.875rem',
    'text-base': '1rem',
    'text-lg': '1.125rem',
    'text-xl': '1.25rem',
    'text-2xl': '1.5rem',
    'text-3xl': '1.875rem',
    'text-4xl': '2.25rem',
    'text-5xl': '3rem',
    'text-6xl': '3.75rem',
    'text-7xl': '4.5rem',
    'text-8xl': '6rem',
    'text-9xl': '8rem',
  };
  
  return sizes[className];
}

// Tailwind Font Weights
function getTailwindFontWeight(weight: string): string | number | undefined {
  const weights: Record<string, number> = {
    'thin': 100,
    'extralight': 200,
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semibold': 600,
    'bold': 700,
    'extrabold': 800,
    'black': 900,
  };
  
  return weights[weight];
}

// Tailwind Border Radius
function getTailwindBorderRadius(className: string): string | undefined {
  const radii: Record<string, string> = {
    'rounded-none': '0px',
    'rounded-sm': '0.125rem',
    'rounded': '0.25rem',
    'rounded-md': '0.375rem',
    'rounded-lg': '0.5rem',
    'rounded-xl': '0.75rem',
    'rounded-2xl': '1rem',
    'rounded-3xl': '1.5rem',
    'rounded-full': '9999px',
  };
  
  return radii[className];
}

// Tailwind Sizes (width/height)
function getTailwindSize(value: string): string | undefined {
  // Handle percentage values
  if (value === 'full') return '100%';
  if (value === '1/2') return '50%';
  if (value === '1/3') return '33.333333%';
  if (value === '2/3') return '66.666667%';
  if (value === '1/4') return '25%';
  if (value === '3/4') return '75%';
  if (value === 'auto') return 'auto';
  
  // Use spacing scale for numeric values
  return getTailwindSpacing(value);
}
