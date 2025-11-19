import * as React from 'react';
import { tw } from 'weaver-email-core';

export interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export const Image: React.FC<ImageProps> = ({ 
  src, 
  alt,
  width,
  height,
  className, 
  style 
}) => {
  const tailwindStyles = className ? tw(className) : {};
  
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
        border: 'none',
        ...tailwindStyles,
        ...style,
      }}
    />
  );
};
