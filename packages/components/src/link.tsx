import * as React from 'react';
import { tw } from 'weaver-email-core';

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className, 
  style,
  target = '_blank'
}) => {
  const tailwindStyles = className ? tw(className) : {};
  
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      style={{
        color: '#0066cc',
        textDecoration: 'underline',
        ...tailwindStyles,
        ...style,
      }}
    >
      {children}
    </a>
  );
};
