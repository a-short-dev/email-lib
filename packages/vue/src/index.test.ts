import { describe, it, expect } from 'vitest';
import { render } from './index';

describe('Vue Package', () => {
  it('should export render function', () => {
    expect(render).toBeDefined();
    expect(typeof render).toBe('function');
  });
});
