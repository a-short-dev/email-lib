import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export interface RenderOptions {
  pretty?: boolean;
}

export const render = (element: React.ReactElement, options?: RenderOptions): string => {
  const html = renderToStaticMarkup(element);
  
  if (options?.pretty) {
    // TODO: Implement pretty printing
    return html;
  }

  return `<!DOCTYPE html>${html}`;
};
