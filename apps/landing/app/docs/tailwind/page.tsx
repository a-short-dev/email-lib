export default function TailwindPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Tailwind CSS Support</h1>
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Use Tailwind CSS classes in your email components. They'll be automatically converted to inline styles for maximum email client compatibility.
      </p>

      <h2>How It Works</h2>
      <p>
        Weaver includes a built-in utility that converts Tailwind CSS classes to inline styles at render time. 
        This means you can write familiar Tailwind classes, and they'll work in all email clients.
      </p>

      <h2>Usage</h2>
      <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto">
        <pre>{`import { Html, Button, Text } from '@weaver/email-components';

export const WelcomeEmail = () => (
  <Html>
    <Text className="text-2xl font-bold text-gray-900">
      Welcome to Weaver!
    </Text>
    <Text className="text-base text-gray-600 my-4">
      Start building beautiful emails with Tailwind CSS.
    </Text>
    <Button 
      href="https://example.com"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg"
    >
      Get Started
    </Button>
  </Html>
);`}</pre>
      </div>

      <h2>Supported Utilities</h2>
      <p>Weaver supports the most common Tailwind utilities that are email-safe:</p>
      
      <h3>Colors</h3>
      <ul>
        <li><code>text-{'{color}'}-{'{shade}'}</code> - Text colors (e.g., <code>text-blue-600</code>)</li>
        <li><code>bg-{'{color}'}-{'{shade}'}</code> - Background colors (e.g., <code>bg-gray-100</code>)</li>
      </ul>

      <h3>Spacing</h3>
      <ul>
        <li><code>p-{'{size}'}</code>, <code>px-{'{size}'}</code>, <code>py-{'{size}'}</code> - Padding</li>
        <li><code>m-{'{size}'}</code>, <code>mx-{'{size}'}</code>, <code>my-{'{size}'}</code> - Margin</li>
      </ul>

      <h3>Typography</h3>
      <ul>
        <li><code>text-xs</code> through <code>text-9xl</code> - Font sizes</li>
        <li><code>font-thin</code> through <code>font-black</code> - Font weights</li>
        <li><code>text-left</code>, <code>text-center</code>, <code>text-right</code> - Text alignment</li>
      </ul>

      <h3>Layout</h3>
      <ul>
        <li><code>w-{'{size}'}</code>, <code>h-{'{size}'}</code> - Width and height</li>
        <li><code>rounded</code>, <code>rounded-lg</code>, etc. - Border radius</li>
      </ul>

      <h2>Mixing with Inline Styles</h2>
      <p>You can use both <code>className</code> and <code>style</code> props together. Inline styles will override Tailwind classes:</p>
      
      <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto">
        <pre>{`<Button 
  href="https://example.com"
  className="bg-blue-600 px-6 py-3"
  style={{ backgroundColor: '#ff0000' }} // Overrides bg-blue-600
>
  Custom Button
</Button>`}</pre>
      </div>

      <h2>Email Client Compatibility</h2>
      <p>
        All Tailwind classes are converted to inline styles, ensuring compatibility with all major email clients including:
      </p>
      <ul>
        <li>Gmail (Web, iOS, Android)</li>
        <li>Outlook (Windows, Mac, Web)</li>
        <li>Apple Mail</li>
        <li>Yahoo Mail</li>
        <li>And more...</li>
      </ul>
    </div>
  );
}
