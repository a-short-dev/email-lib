import * as React from 'react';
import { tw } from '@weaver/email-core';

export interface TextProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children, style, className }) => {
  const tailwindStyles = className ? tw(className) : {};
  
  return (
    <p
      style={{
        fontSize: '16px',
        lineHeight: '24px',
        margin: '16px 0',
        ...tailwindStyles,
        ...style,
      }}
    >
      {children}
    </p>
  );
};
