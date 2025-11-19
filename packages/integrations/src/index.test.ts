import { describe, it, expect } from 'vitest';
import { ResendAdapter, NodemailerAdapter } from './index';

describe('Integrations', () => {
  it('should export ResendAdapter', () => {
    expect(ResendAdapter).toBeDefined();
  });

  it('should export NodemailerAdapter', () => {
    expect(NodemailerAdapter).toBeDefined();
  });
});
