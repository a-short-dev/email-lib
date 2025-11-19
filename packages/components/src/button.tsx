import * as React from 'react';

export interface ButtonProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({ href, children, style }) => {
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
        ...style,
      }}
    >
      {children}
    </a>
  );
};
