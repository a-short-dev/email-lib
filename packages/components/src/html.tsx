import * as React from 'react';

export interface HtmlProps {
  lang?: string;
  dir?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Html: React.FC<HtmlProps> = ({ lang = 'en', dir = 'ltr', children, className }) => {
  return (
    <html lang={lang} dir={dir} className={className}>
      {children}
    </html>
  );
};
