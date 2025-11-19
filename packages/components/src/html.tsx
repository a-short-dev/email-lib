import * as React from 'react';

export interface HtmlProps {
  lang?: string;
  dir?: string;
  children?: React.ReactNode;
}

export const Html: React.FC<HtmlProps> = ({ lang = 'en', dir = 'ltr', children }) => {
  return (
    <html lang={lang} dir={dir}>
      {children}
    </html>
  );
};
