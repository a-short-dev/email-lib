# Contributing to Weaver

First off, thank you for considering contributing to Weaver! It's people like you that make Weaver such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots if relevant**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and explain which behavior you expected to see instead**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the TypeScript styleguide
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

## Development Setup

### Prerequisites

* Node.js 18+
* pnpm 8+

### Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/weaver.git
cd weaver

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test
```

### Project Structure

```
weaver/
├── packages/
│   ├── core/              # Core rendering logic
│   ├── components/        # React components
│   ├── vue/              # Vue components
│   └── integrations/     # Email provider adapters
├── apps/
│   └── landing/          # Marketing site + docs
└── examples/             # Usage examples
```

### Development Workflow

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   * Write code
   * Add tests
   * Update documentation

3. **Test your changes**
   ```bash
   # Run tests
   pnpm test
   
   # Build packages
   pnpm build
   
   # Test in the landing page
   pnpm --filter landing dev
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

   We follow [Conventional Commits](https://www.conventionalcommits.org/):
   * `feat:` - New feature
   * `fix:` - Bug fix
   * `docs:` - Documentation changes
   * `style:` - Code style changes (formatting, etc.)
   * `refactor:` - Code refactoring
   * `test:` - Adding or updating tests
   * `chore:` - Maintenance tasks

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   * Go to the [Weaver repository](https://github.com/YOUR_ORG/weaver)
   * Click "New Pull Request"
   * Select your branch
   * Fill in the PR template

## Styleguide

### TypeScript

* Use TypeScript for all new code
* Prefer `interface` over `type` for object shapes
* Export types alongside implementations
* Use meaningful variable names

### Code Style

We use Biome for linting and formatting:

```bash
# Check code style
pnpm lint

# Fix code style issues
pnpm lint:fix
```

### Testing

* Write tests for all new features
* Maintain or improve code coverage
* Use descriptive test names

```typescript
describe('Button component', () => {
  it('should render with correct href', () => {
    // test implementation
  });
});
```

### Documentation

* Update README.md if you change functionality
* Add JSDoc comments to public APIs
* Update the docs site for user-facing changes

## Adding New Components

When adding a new email component:

1. **Create the React component** in `packages/components/src/`
2. **Create the Vue component** in `packages/vue/src/`
3. **Add tests** for both versions
4. **Update exports** in `index.ts`
5. **Add documentation** in `apps/landing/app/docs/components/`
6. **Add examples** in `examples/`

Example structure:

```typescript
// packages/components/src/container.tsx
import * as React from 'react';
import { tw } from '@weaver/email-core';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className, 
  style 
}) => {
  const tailwindStyles = className ? tw(className) : {};
  
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', ...tailwindStyles, ...style }}>
      {children}
    </div>
  );
};
```

## Release Process

Releases are automated via GitHub Actions when a version tag is pushed:

```bash
# Update version
pnpm changeset version

# Commit changes
git add .
git commit -m "chore: release"

# Push (maintainers only)
git push origin main
git push --tags
```

## Questions?

Feel free to:
* Open an issue with the `question` label
* Join our [Discord](https://discord.gg/YOUR_INVITE)
* Reach out on [Twitter](https://twitter.com/YOUR_HANDLE)

## Recognition

Contributors are recognized in:
* Our [README](README.md)
* Release notes
* The [contributors page](https://github.com/YOUR_ORG/weaver/graphs/contributors)

Thank you for contributing to Weaver! 🎉
