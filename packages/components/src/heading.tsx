import * as React from 'react';
import { tw } from 'weaver-email-core';

export interface HeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  style?: React.CSSProperties;
}

const defaultStyles: Record<string, React.CSSProperties> = {
  h1: { fontSize: '32px', fontWeight: 'bold', margin: '20px 0', lineHeight: '1.2' },
  h2: { fontSize: '28px', fontWeight: 'bold', margin: '18px 0', lineHeight: '1.3' },
  h3: { fontSize: '24px', fontWeight: 'bold', margin: '16px 0', lineHeight: '1.3' },
  h4: { fontSize: '20px', fontWeight: 'bold', margin: '14px 0', lineHeight: '1.4' },
  h5: { fontSize: '18px', fontWeight: 'bold', margin: '12px 0', lineHeight: '1.4' },
  h6: { fontSize: '16px', fontWeight: 'bold', margin: '10px 0', lineHeight: '1.5' },
};

export const Heading: React.FC<HeadingProps> = ({ 
  children, 
  as = 'h2',
  className, 
  style 
}) => {
  const tailwindStyles = className ? tw(className) : {};
  const Tag = as;
  
  return React.createElement(
    Tag,
    {
      style: {
        ...defaultStyles[as],
        ...tailwindStyles,
        ...style,
      }
    },
    children
  );
};
