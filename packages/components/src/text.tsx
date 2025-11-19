import * as React from 'react';

export interface TextProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Text: React.FC<TextProps> = ({ children, style }) => {
  return (
    <p
      style={{
        fontSize: '16px',
        lineHeight: '24px',
        margin: '16px 0',
        ...style,
      }}
    >
      {children}
    </p>
  );
};
