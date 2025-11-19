import { renderToString } from '@vue/server-renderer';
import type { App } from 'vue';
import { createSSRApp } from 'vue';

export const render = async (component: any, props: any = {}) => {
  const app = createSSRApp(component, props);
  const html = await renderToString(app);
  return `<!DOCTYPE html>${html}`;
};
