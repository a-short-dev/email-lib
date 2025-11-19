import { describe, it, expect } from 'vitest';
import * as React from 'react';
import { render } from '@weaver/email-core';
import { Button, Html, Text } from './index';

describe('Components', () => {
  it('renders Html component', () => {
    const html = render(<Html><body>Test</body></Html>);
    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain('<html lang="en" dir="ltr">');
    expect(html).toContain('<body>Test</body>');
    expect(html).toContain('</html>');
  });

  it('renders Button component', () => {
    const html = render(<Button href="https://example.com">Click me</Button>);
    expect(html).toContain('<a href="https://example.com"');
    expect(html).toContain('Click me</a>');
  });

  it('renders Text component', () => {
    const html = render(<Text>Hello World</Text>);
    expect(html).toContain('<p style="');
    expect(html).toContain('Hello World</p>');
  });
});
