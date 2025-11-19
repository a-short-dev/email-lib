import { Html, Button, Text, render } from '@weaver/email-core';
import { Button as EmailButton, Text as EmailText } from '@weaver/email-components';

// Example 1: Using Tailwind CSS classes
const TailwindEmail = () => (
  <Html>
    <EmailText className="text-2xl font-bold text-gray-900 mb-4">
      Welcome to Weaver!
    </EmailText>
    <EmailText className="text-base text-gray-600 my-4">
      This email was built using Tailwind CSS classes that are automatically converted to inline styles.
    </EmailText>
    <EmailButton 
      href="https://example.com"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
    >
      Get Started
    </EmailButton>
  </Html>
);

// Example 2: Mixing Tailwind with inline styles
const MixedStylesEmail = () => (
  <Html>
    <EmailText 
      className="text-xl font-bold mb-2"
      style={{ color: '#ff6b6b' }} // Inline style overrides Tailwind
    >
      Custom Styled Heading
    </EmailText>
    <EmailButton 
      href="https://example.com"
      className="px-8 py-4 rounded-full"
      style={{ 
        backgroundColor: '#4ecdc4',
        color: '#ffffff'
      }}
    >
      Click Me
    </EmailButton>
  </Html>
);

// Render examples
console.log('=== Tailwind Email ===');
console.log(render(<TailwindEmail />));

console.log('\n=== Mixed Styles Email ===');
console.log(render(<MixedStylesEmail />));
