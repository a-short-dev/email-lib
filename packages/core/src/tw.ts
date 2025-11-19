import type { CSSProperties } from 'react';

/**
 * Converts Tailwind CSS classes to inline styles for email compatibility.
 * Supports Tailwind v3/v4 utilities that are email-safe.
 * 
 * Features:
 * - Complete color palette
 * - Arbitrary values: w-[123px], text-[#abc]
 * - Opacity modifiers: bg-blue-500/50
 * - Negative values: -m-4
 * - Display utilities
 * - Typography utilities
 */
export function tw(classNames: string): CSSProperties {
  const classes = classNames.split(' ').filter(Boolean);
  const styles: CSSProperties = {};

  for (const className of classes) {
    // Arbitrary values: w-[123px], text-[#abc123], p-[2rem]
    if (className.includes('[') && className.includes(']')) {
      parseArbitraryValue(className, styles);
      continue;
    }

    // Text Colors (with opacity support)
    if (className.startsWith('text-')) {
      const [colorPart, opacity] = className.replace('text-', '').split('/');
      const color = getTailwindColor(colorPart);
      if (color) {
        styles.color = opacity ? applyOpacity(color, opacity) : color;
      }
    }
    
    // Background Colors (with opacity support)
    if (className.startsWith('bg-')) {
      const [colorPart, opacity] = className.replace('bg-', '').split('/');
      const color = getTailwindColor(colorPart);
      if (color) {
        styles.backgroundColor = opacity ? applyOpacity(color, opacity) : color;
      }
    }
    
    // Border Colors (with opacity support)
    if (className.startsWith('border-') && !className.startsWith('border-t-') && !className.startsWith('border-b-')) {
      const [colorPart, opacity] = className.replace('border-', '').split('/');
      const color = getTailwindColor(colorPart);
      if (color) {
        styles.borderColor = opacity ? applyOpacity(color, opacity) : color;
      }
    }
    
    // Padding (including negative)
    handleSpacing(className, 'p', 'padding', styles);
    handleSpacing(className, 'px', 'paddingX', styles);
    handleSpacing(className, 'py', 'paddingY', styles);
    handleSpacing(className, 'pt', 'paddingTop', styles);
    handleSpacing(className, 'pb', 'paddingBottom', styles);
    handleSpacing(className, 'pl', 'paddingLeft', styles);
    handleSpacing(className, 'pr', 'paddingRight', styles);
    
    // Margin (including negative)
    handleSpacing(className, 'm', 'margin', styles);
    handleSpacing(className, 'mx', 'marginX', styles);
    handleSpacing(className, 'my', 'marginY', styles);
    handleSpacing(className, 'mt', 'marginTop', styles);
    handleSpacing(className, 'mb', 'marginBottom', styles);
    handleSpacing(className, 'ml', 'marginLeft', styles);
    handleSpacing(className, 'mr', 'marginRight', styles);
    
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
    
    // Line Height
    if (className.startsWith('leading-')) {
      const lineHeight = getTailwindLineHeight(className.replace('leading-', ''));
      if (lineHeight) styles.lineHeight = lineHeight;
    }
    
    // Letter Spacing
    if (className.startsWith('tracking-')) {
      const letterSpacing = getTailwindLetterSpacing(className.replace('tracking-', ''));
      if (letterSpacing) styles.letterSpacing = letterSpacing;
    }
    
    // Text Transform
    if (className === 'uppercase') styles.textTransform = 'uppercase';
    if (className === 'lowercase') styles.textTransform = 'lowercase';
    if (className === 'capitalize') styles.textTransform = 'capitalize';
    if (className === 'normal-case') styles.textTransform = 'none';
    
    // Text Decoration
    if (className === 'underline') styles.textDecoration = 'underline';
    if (className === 'line-through') styles.textDecoration = 'line-through';
    if (className === 'no-underline') styles.textDecoration = 'none';
    
    // Text Alignment
    if (className === 'text-left') styles.textAlign = 'left';
    if (className === 'text-center') styles.textAlign = 'center';
    if (className === 'text-right') styles.textAlign = 'right';
    if (className === 'text-justify') styles.textAlign = 'justify';
    
    // Display
    if (className === 'block') styles.display = 'block';
    if (className === 'inline-block') styles.display = 'inline-block';
    if (className === 'inline') styles.display = 'inline';
    if (className === 'table') styles.display = 'table';
    if (className === 'table-cell') styles.display = 'table-cell';
    if (className === 'table-row') styles.display = 'table-row';
    if (className === 'hidden') styles.display = 'none';
    
    // Border Radius
    if (className.startsWith('rounded')) {
      const radius = getTailwindBorderRadius(className);
      if (radius) styles.borderRadius = radius;
    }
    
    // Border Width
    if (className.startsWith('border-') && className.match(/border-\d/)) {
      const width = className.replace('border-', '');
      styles.borderWidth = width === '0' ? '0' : `${width}px`;
      if (!styles.borderStyle) styles.borderStyle = 'solid';
    }
    if (className === 'border') {
      styles.borderWidth = '1px';
      if (!styles.borderStyle) styles.borderStyle = 'solid';
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
    
    // Max Width & Height
    if (className.startsWith('max-w-')) {
      const maxWidth = getTailwindSize(className.replace('max-w-', ''));
      if (maxWidth) styles.maxWidth = maxWidth;
    }
    if (className.startsWith('max-h-')) {
      const maxHeight = getTailwindSize(className.replace('max-h-', ''));
      if (maxHeight) styles.maxHeight = maxHeight;
    }
  }

  return styles;
}

// Parse arbitrary values like w-[123px], text-[#abc123]
function parseArbitraryValue(className: string, styles: CSSProperties): void {
  const match = className.match(/^([a-z-]+)-\[(.+)\]$/);
  if (!match) return;
  
  const [, prefix, value] = match;
  
  if (prefix === 'w') styles.width = value;
  else if (prefix === 'h') styles.height = value;
  else if (prefix === 'text') {
    if (value.startsWith('#') || value.startsWith('rgb')) {
      styles.color = value;
    } else {
      styles.fontSize = value;
    }
  }
  else if (prefix === 'bg') styles.backgroundColor = value;
  else if (prefix === 'p') styles.padding = value;
  else if (prefix === 'px') { styles.paddingLeft = value; styles.paddingRight = value; }
  else if (prefix === 'py') { styles.paddingTop = value; styles.paddingBottom = value; }
  else if (prefix === 'm') styles.margin = value;
  else if (prefix === 'mx') { styles.marginLeft = value; styles.marginRight = value; }
  else if (prefix === 'my') { styles.marginTop = value; styles.marginBottom = value; }
}

// Apply opacity to color
function applyOpacity(color: string, opacity: string): string {
  const opacityValue = parseInt(opacity) / 100;
  
  // Convert hex to rgba
  if (color.startsWith('#')) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacityValue})`;
  }
  
  return color; // Return as-is if not hex
}

// Handle spacing with negative values
function handleSpacing(className: string, prefix: string, property: string, styles: CSSProperties): void {
  const isNegative = className.startsWith('-');
  const cleanClass = isNegative ? className.slice(1) : className;
  
  if (!cleanClass.startsWith(`${prefix}-`)) return;
  
  const value = getTailwindSpacing(cleanClass.replace(`${prefix}-`, ''));
  if (!value) return;
  
  const finalValue = isNegative ? `-${value}` : value;
  
  if (property === 'paddingX') {
    styles.paddingLeft = finalValue;
    styles.paddingRight = finalValue;
  } else if (property === 'paddingY') {
    styles.paddingTop = finalValue;
    styles.paddingBottom = finalValue;
  } else if (property === 'marginX') {
    styles.marginLeft = finalValue;
    styles.marginRight = finalValue;
  } else if (property === 'marginY') {
    styles.marginTop = finalValue;
    styles.marginBottom = finalValue;
  } else {
    (styles as any)[property] = finalValue;
  }
}

// Complete Tailwind Color Palette
function getTailwindColor(colorClass: string): string | undefined {
  const colors: Record<string, string> = {
    // Grayscale
    'white': '#ffffff',
    'black': '#000000',
    'transparent': 'transparent',
    'current': 'currentColor',
    
    // Slate
    'slate-50': '#f8fafc', 'slate-100': '#f1f5f9', 'slate-200': '#e2e8f0',
    'slate-300': '#cbd5e1', 'slate-400': '#94a3b8', 'slate-500': '#64748b',
    'slate-600': '#475569', 'slate-700': '#334155', 'slate-800': '#1e293b',
    'slate-900': '#0f172a', 'slate-950': '#020617',
    
    // Gray
    'gray-50': '#f9fafb', 'gray-100': '#f3f4f6', 'gray-200': '#e5e7eb',
    'gray-300': '#d1d5db', 'gray-400': '#9ca3af', 'gray-500': '#6b7280',
    'gray-600': '#4b5563', 'gray-700': '#374151', 'gray-800': '#1f2937',
    'gray-900': '#111827', 'gray-950': '#030712',
    
    // Zinc
    'zinc-50': '#fafafa', 'zinc-100': '#f4f4f5', 'zinc-200': '#e4e4e7',
    'zinc-300': '#d4d4d8', 'zinc-400': '#a1a1aa', 'zinc-500': '#71717a',
    'zinc-600': '#52525b', 'zinc-700': '#3f3f46', 'zinc-800': '#27272a',
    'zinc-900': '#18181b', 'zinc-950': '#09090b',
    
    // Red
    'red-50': '#fef2f2', 'red-100': '#fee2e2', 'red-200': '#fecaca',
    'red-300': '#fca5a5', 'red-400': '#f87171', 'red-500': '#ef4444',
    'red-600': '#dc2626', 'red-700': '#b91c1c', 'red-800': '#991b1b',
    'red-900': '#7f1d1d', 'red-950': '#450a0a',
    
    // Orange
    'orange-50': '#fff7ed', 'orange-100': '#ffedd5', 'orange-200': '#fed7aa',
    'orange-300': '#fdba74', 'orange-400': '#fb923c', 'orange-500': '#f97316',
    'orange-600': '#ea580c', 'orange-700': '#c2410c', 'orange-800': '#9a3412',
    'orange-900': '#7c2d12', 'orange-950': '#431407',
    
    // Amber
    'amber-50': '#fffbeb', 'amber-100': '#fef3c7', 'amber-200': '#fde68a',
    'amber-300': '#fcd34d', 'amber-400': '#fbbf24', 'amber-500': '#f59e0b',
    'amber-600': '#d97706', 'amber-700': '#b45309', 'amber-800': '#92400e',
    'amber-900': '#78350f', 'amber-950': '#451a03',
    
    // Yellow
    'yellow-50': '#fefce8', 'yellow-100': '#fef9c3', 'yellow-200': '#fef08a',
    'yellow-300': '#fde047', 'yellow-400': '#facc15', 'yellow-500': '#eab308',
    'yellow-600': '#ca8a04', 'yellow-700': '#a16207', 'yellow-800': '#854d0e',
    'yellow-900': '#713f12', 'yellow-950': '#422006',
    
    // Lime
    'lime-50': '#f7fee7', 'lime-100': '#ecfccb', 'lime-200': '#d9f99d',
    'lime-300': '#bef264', 'lime-400': '#a3e635', 'lime-500': '#84cc16',
    'lime-600': '#65a30d', 'lime-700': '#4d7c0f', 'lime-800': '#3f6212',
    'lime-900': '#365314', 'lime-950': '#1a2e05',
    
    // Green
    'green-50': '#f0fdf4', 'green-100': '#dcfce7', 'green-200': '#bbf7d0',
    'green-300': '#86efac', 'green-400': '#4ade80', 'green-500': '#22c55e',
    'green-600': '#16a34a', 'green-700': '#15803d', 'green-800': '#166534',
    'green-900': '#14532d', 'green-950': '#052e16',
    
    // Emerald
    'emerald-50': '#ecfdf5', 'emerald-100': '#d1fae5', 'emerald-200': '#a7f3d0',
    'emerald-300': '#6ee7b7', 'emerald-400': '#34d399', 'emerald-500': '#10b981',
    'emerald-600': '#059669', 'emerald-700': '#047857', 'emerald-800': '#065f46',
    'emerald-900': '#064e3b', 'emerald-950': '#022c22',
    
    // Teal
    'teal-50': '#f0fdfa', 'teal-100': '#ccfbf1', 'teal-200': '#99f6e4',
    'teal-300': '#5eead4', 'teal-400': '#2dd4bf', 'teal-500': '#14b8a6',
    'teal-600': '#0d9488', 'teal-700': '#0f766e', 'teal-800': '#115e59',
    'teal-900': '#134e4a', 'teal-950': '#042f2e',
    
    // Cyan
    'cyan-50': '#ecfeff', 'cyan-100': '#cffafe', 'cyan-200': '#a5f3fc',
    'cyan-300': '#67e8f9', 'cyan-400': '#22d3ee', 'cyan-500': '#06b6d4',
    'cyan-600': '#0891b2', 'cyan-700': '#0e7490', 'cyan-800': '#155e75',
    'cyan-900': '#164e63', 'cyan-950': '#083344',
    
    // Sky
    'sky-50': '#f0f9ff', 'sky-100': '#e0f2fe', 'sky-200': '#bae6fd',
    'sky-300': '#7dd3fc', 'sky-400': '#38bdf8', 'sky-500': '#0ea5e9',
    'sky-600': '#0284c7', 'sky-700': '#0369a1', 'sky-800': '#075985',
    'sky-900': '#0c4a6e', 'sky-950': '#082f49',
    
    // Blue
    'blue-50': '#eff6ff', 'blue-100': '#dbeafe', 'blue-200': '#bfdbfe',
    'blue-300': '#93c5fd', 'blue-400': '#60a5fa', 'blue-500': '#3b82f6',
    'blue-600': '#2563eb', 'blue-700': '#1d4ed8', 'blue-800': '#1e40af',
    'blue-900': '#1e3a8a', 'blue-950': '#172554',
    
    // Indigo
    'indigo-50': '#eef2ff', 'indigo-100': '#e0e7ff', 'indigo-200': '#c7d2fe',
    'indigo-300': '#a5b4fc', 'indigo-400': '#818cf8', 'indigo-500': '#6366f1',
    'indigo-600': '#4f46e5', 'indigo-700': '#4338ca', 'indigo-800': '#3730a3',
    'indigo-900': '#312e81', 'indigo-950': '#1e1b4b',
    
    // Violet
    'violet-50': '#f5f3ff', 'violet-100': '#ede9fe', 'violet-200': '#ddd6fe',
    'violet-300': '#c4b5fd', 'violet-400': '#a78bfa', 'violet-500': '#8b5cf6',
    'violet-600': '#7c3aed', 'violet-700': '#6d28d9', 'violet-800': '#5b21b6',
    'violet-900': '#4c1d95', 'violet-950': '#2e1065',
    
    // Purple
    'purple-50': '#faf5ff', 'purple-100': '#f3e8ff', 'purple-200': '#e9d5ff',
    'purple-300': '#d8b4fe', 'purple-400': '#c084fc', 'purple-500': '#a855f7',
    'purple-600': '#9333ea', 'purple-700': '#7e22ce', 'purple-800': '#6b21a8',
    'purple-900': '#581c87', 'purple-950': '#3b0764',
    
    // Fuchsia
    'fuchsia-50': '#fdf4ff', 'fuchsia-100': '#fae8ff', 'fuchsia-200': '#f5d0fe',
    'fuchsia-300': '#f0abfc', 'fuchsia-400': '#e879f9', 'fuchsia-500': '#d946ef',
    'fuchsia-600': '#c026d3', 'fuchsia-700': '#a21caf', 'fuchsia-800': '#86198f',
    'fuchsia-900': '#701a75', 'fuchsia-950': '#4a044e',
    
    // Pink
    'pink-50': '#fdf2f8', 'pink-100': '#fce7f3', 'pink-200': '#fbcfe8',
    'pink-300': '#f9a8d4', 'pink-400': '#f472b6', 'pink-500': '#ec4899',
    'pink-600': '#db2777', 'pink-700': '#be185d', 'pink-800': '#9d174d',
    'pink-900': '#831843', 'pink-950': '#500724',
    
    // Rose
    'rose-50': '#fff1f2', 'rose-100': '#ffe4e6', 'rose-200': '#fecdd3',
    'rose-300': '#fda4af', 'rose-400': '#fb7185', 'rose-500': '#f43f5e',
    'rose-600': '#e11d48', 'rose-700': '#be123c', 'rose-800': '#9f1239',
    'rose-900': '#881337', 'rose-950': '#4c0519',
  };
  
  return colors[colorClass];
}

// Tailwind Spacing Scale
function getTailwindSpacing(value: string): string | undefined {
  const spacing: Record<string, string> = {
    '0': '0px',
    'px': '1px',
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

// Tailwind Line Heights
function getTailwindLineHeight(value: string): string | undefined {
  const lineHeights: Record<string, string> = {
    'none': '1',
    'tight': '1.25',
    'snug': '1.375',
    'normal': '1.5',
    'relaxed': '1.625',
    'loose': '2',
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
  };
  
  return lineHeights[value];
}

// Tailwind Letter Spacing
function getTailwindLetterSpacing(value: string): string | undefined {
  const letterSpacing: Record<string, string> = {
    'tighter': '-0.05em',
    'tight': '-0.025em',
    'normal': '0em',
    'wide': '0.025em',
    'wider': '0.05em',
    'widest': '0.1em',
  };
  
  return letterSpacing[value];
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
  if (value === '1/5') return '20%';
  if (value === '2/5') return '40%';
  if (value === '3/5') return '60%';
  if (value === '4/5') return '80%';
  if (value === 'auto') return 'auto';
  if (value === 'screen') return '100vw';
  
  // Use spacing scale for numeric values
  return getTailwindSpacing(value);
}
