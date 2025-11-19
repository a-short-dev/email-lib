import * as React from 'react';
import { tw } from 'weaver-email-core';

export interface SpacerProps {
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Spacer: React.FC<SpacerProps> = ({ 
  height = 20,
  className, 
  style 
}) => {
  const tailwindStyles = className ? tw(className) : {};
  
  return (
    <div
      style={{
        height: `${height}px`,
        lineHeight: `${height}px`,
        fontSize: '1px',
        ...tailwindStyles,
        ...style,
      }}
    >
      &nbsp;
    </div>
  );
};
