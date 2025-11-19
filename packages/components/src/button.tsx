import * as React from 'react';
import { tw } from '@weaver/email-core';

export interface ButtonProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ href, children, style, className }) => {
  const tailwindStyles = className ? tw(className) : {};
  
  return (
    <a
      href={href}
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#ffffff',
        textDecoration: 'none',
        borderRadius: '5px',
        ...tailwindStyles,
        ...style,
      }}
    >
      {children}
    </a>
  );
};
