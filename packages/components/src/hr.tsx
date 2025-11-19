import * as React from 'react';
import { tw } from 'weaver-email-core';

export interface HrProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Hr: React.FC<HrProps> = ({ className, style }) => {
  const tailwindStyles = className ? tw(className) : {};
  
  return (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid #e5e7eb',
        margin: '20px 0',
        ...tailwindStyles,
        ...style,
      }}
    />
  );
};
