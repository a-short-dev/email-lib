import { describe, it, expect } from 'vitest';
import * as React from 'react';
import { render } from './index';

describe('render', () => {
  it('renders a simple element', () => {
    const element = React.createElement('div', null, 'Hello');
    const html = render(element);
    expect(html).toBe('<!DOCTYPE html><div>Hello</div>');
  });

  it('renders nested elements', () => {
    const element = React.createElement('div', null, React.createElement('span', null, 'World'));
    const html = render(element);
    expect(html).toBe('<!DOCTYPE html><div><span>World</span></div>');
  });
});
