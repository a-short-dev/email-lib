<div align="center">
  <h1>🧵 Weaver</h1>
  <p><strong>Build beautiful, responsive emails with React or Vue.js</strong></p>
  
  <p>
    <a href="https://github.com/a-short-dev/email-lib/actions"><img src="https://github.com/a-short-dev/email-lib/workflows/CI/badge.svg" alt="CI Status"></a>
    <a href="https://www.npmjs.com/package/@weaver/email-core"><img src="https://img.shields.io/npm/v/@weaver/email-core.svg" alt="npm version"></a>
    <a href="https://github.com/a-short-dev/email-lib/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
    <a href="https://github.com/a-short-dev/email-lib"><img src="https://img.shields.io/github/stars/a-short-dev/email-lib?style=social" alt="GitHub Stars"></a>
  </p>

  <p>
    <a href="#features">Features</a> •
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a> •
    <a href="#documentation">Documentation</a> •
    <a href="#contributing">Contributing</a>
  </p>
</div>

---

## Why Weaver?

Email development is stuck in the past. Nested tables, inline styles, Outlook quirks—it's a nightmare. **Weaver** brings email development into the modern era.

- ✅ **Write React or Vue** - Use the frameworks you love
- ✅ **Tailwind CSS Support** - Write Tailwind classes, get email-safe inline styles
- ✅ **Visual Builder** - No-code email editor for non-developers
- ✅ **100% Open Source** - MIT licensed, community-driven
- ✅ **Zero Lock-in** - Export clean HTML that works everywhere

## Features

### 🎨 Modern DX
Write emails like you write web apps. Clean, composable components with full TypeScript support.

```tsx
import { Html, Button, Text } from '@weaver/email-components';

export const WelcomeEmail = ({ name }: { name: string }) => (
  <Html>
    <Text className="text-2xl font-bold text-gray-900">
      Welcome, {name}!
    </Text>
    <Button 
      href="https://example.com"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg"
    >
      Get Started
    </Button>
  </Html>
);
```

### 🎯 Framework Agnostic
First-class support for both **React** and **Vue.js**. Same components, same API.

```tsx
// React
import { Html, Button } from '@weaver/email-components';

// Vue
import { Html, Button } from '@weaver/email-vue';
```

### 🎨 Tailwind CSS Support
Write Tailwind classes, get email-safe inline styles automatically.

```tsx
<Text className="text-xl font-bold text-blue-600/80 mb-4">
  Tailwind just works!
</Text>

// Supports:
// ✅ 220+ colors (all Tailwind shades)
// ✅ Arbitrary values: w-[123px], text-[#abc]
// ✅ Opacity modifiers: bg-blue-500/50
// ✅ Negative values: -m-4
// ✅ Display, typography, spacing, borders
```

### 🛠️ Visual Builder
Non-developers can create and edit emails with our no-code visual builder. Export HTML or import existing templates.

### 📦 Seamless Integrations
Built-in adapters for popular email providers:

```tsx
import { ResendAdapter } from '@weaver/email-integrations';

const adapter = new ResendAdapter('your-api-key');
await adapter.send({
  from: 'hello@example.com',
  to: 'user@example.com',
  subject: 'Welcome!',
  react: <WelcomeEmail name="John" />
});
```

## Installation

```bash
# Core + React Components
npm install @weaver/email-core @weaver/email-components

# Vue Components
npm install @weaver/email-vue

# Integrations (optional)
npm install @weaver/email-integrations
```

## Usage

### Basic Example

```tsx
import { Html, Button, Text, render } from '@weaver/email-core';
import { Button as EmailButton, Text as EmailText } from '@weaver/email-components';

const MyEmail = () => (
  <Html>
    <EmailText className="text-2xl font-bold">Hello World!</EmailText>
    <EmailButton href="https://example.com">Click me</EmailButton>
  </Html>
);

// Render to HTML
const html = render(<MyEmail />);
```

### With Resend

```tsx
import { ResendAdapter } from '@weaver/email-integrations';
import { WelcomeEmail } from './emails/welcome';

const adapter = new ResendAdapter(process.env.RESEND_API_KEY);

await adapter.send({
  from: 'onboarding@example.com',
  to: 'user@example.com',
  subject: 'Welcome to our platform!',
  react: <WelcomeEmail name="John" />
});
```

### With Vue

```tsx
import { Html, Button, Text, render } from '@weaver/email-vue';

const MyEmail = defineComponent({
  render() {
    return (
      <Html>
        <Text className="text-xl font-bold">Hello from Vue!</Text>
        <Button href="https://example.com">Click me</Button>
      </Html>
    );
  }
});

const html = await render(MyEmail);
```

## Documentation

Visit our [documentation site](https://YOUR_SITE.com/docs) for:

- 📖 [Installation Guide](https://YOUR_SITE.com/docs/installation)
- 🧩 [Component API](https://YOUR_SITE.com/docs/components)
- 🎨 [Tailwind CSS Guide](https://YOUR_SITE.com/docs/tailwind)
- 🔌 [Integrations](https://YOUR_SITE.com/docs/integrations)
- 🖼️ [Vue Support](https://YOUR_SITE.com/docs/vue)

## Packages

This monorepo contains:

| Package | Description | Version |
|---------|-------------|---------|
| [@weaver/email-core](./packages/core) | Core rendering logic | ![npm](https://img.shields.io/npm/v/@weaver/email-core) |
| [@weaver/email-components](./packages/components) | React components | ![npm](https://img.shields.io/npm/v/@weaver/email-components) |
| [@weaver/email-vue](./packages/vue) | Vue components | ![npm](https://img.shields.io/npm/v/@weaver/email-vue) |
| [@weaver/email-integrations](./packages/integrations) | Email provider adapters | ![npm](https://img.shields.io/npm/v/@weaver/email-integrations) |

## Contributing

We love contributions! Please read our [Contributing Guide](./CONTRIBUTING.md) to get started.

### Quick Start for Contributors

```bash
# Clone the repo
git clone https://github.com/a-short-dev/email-lib.git
cd weaver

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Start the landing page dev server
pnpm --filter landing dev
```

## Roadmap

- [x] React components
- [x] Vue.js support
- [x] Tailwind CSS support
- [x] Visual builder
- [x] Resend & Nodemailer integrations
- [ ] More components (Container, Section, Image, etc.)
- [ ] Svelte support
- [ ] AWS SES integration
- [ ] Email testing tools
- [ ] Template marketplace

## Community

- 💬 [Discord](https://discord.gg/YOUR_INVITE) - Chat with the community
- 🐦 [Twitter](https://twitter.com/YOUR_HANDLE) - Follow for updates
- 🐛 [Issues](https://github.com/a-short-dev/email-lib/issues) - Report bugs or request features

## License

MIT © [Your Name](https://github.com/YOUR_ORG)

---

<div align="center">
  <p>Built with ❤️ by the Weaver community</p>
  <p>
    <a href="https://github.com/a-short-dev/email-lib">GitHub</a> •
    <a href="https://YOUR_SITE.com">Website</a> •
    <a href="https://YOUR_SITE.com/docs">Docs</a>
  </p>
</div>
