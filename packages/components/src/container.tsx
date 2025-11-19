import * as React from 'react';
import { tw } from 'weaver-email-core';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxWidth?: number;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className, 
  style,
  maxWidth = 600 
}) => {
  const tailwindStyles = className ? tw(className) : {};
  
  return (
    <div
      style={{
        maxWidth: `${maxWidth}px`,
        margin: '0 auto',
        width: '100%',
        ...tailwindStyles,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
