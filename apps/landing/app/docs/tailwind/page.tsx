export default function TailwindPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Tailwind CSS Support</h1>
      <p className="text-xl text-gray-400 leading-relaxed mb-8">
        Use Tailwind CSS classes in your email components. They'll be automatically converted to inline styles for maximum email client compatibility.
      </p>

      <h2>How It Works</h2>
      <p>
        Weaver includes a powerful utility that converts Tailwind CSS classes to inline styles at render time. 
        This means you can write familiar Tailwind classes, and they'll work in all email clients.
      </p>

      <h2>Usage</h2>
      <div className="bg-white/10 text-white p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto border border-white/10">
        <pre>{`import { Html, Container, Heading, Text, Button } from 'weaver-email-components';

export const WelcomeEmail = () => (
  <Html>
    <Container className="bg-gray-50 p-8">
      <Heading as="h1" className="text-3xl font-bold text-gray-900 mb-4">
        Welcome to Weaver!
      </Heading>
      <Text className="text-lg text-gray-600 leading-relaxed">
        Start building beautiful emails with Tailwind CSS.
      </Text>
      <Button 
        href="https://example.com"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Get Started
      </Button>
    </Container>
  </Html>
);`}</pre>
      </div>

      <h2>Supported Features</h2>
      
      <h3>✅ Complete Color Palette (220+ Colors)</h3>
      <p>All Tailwind default colors with all shades (50-950):</p>
      <ul>
        <li><strong>Grayscale:</strong> white, black, slate, gray, zinc</li>
        <li><strong>Colors:</strong> red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose</li>
        <li><strong>Special:</strong> transparent, current</li>
      </ul>

      <h3>✅ Arbitrary Values</h3>
      <p>Use custom values with square brackets:</p>
      <div className="bg-white/10 text-white p-4 rounded-lg font-mono text-sm my-4 border border-white/10">
        <pre>{`<Text className="w-[123px] text-[#abc123] p-[2rem]">
  Custom values!
</Text>`}</pre>
      </div>

      <h3>✅ Opacity Modifiers</h3>
      <p>Add transparency to any color:</p>
      <div className="bg-white/10 text-white p-4 rounded-lg font-mono text-sm my-4 border border-white/10">
        <pre>{`<div className="bg-blue-500/50 text-red-600/75">
  50% opacity background, 75% opacity text
</div>`}</pre>
      </div>

      <h3>✅ Negative Values</h3>
      <p>Use negative margins:</p>
      <div className="bg-white/10 text-white p-4 rounded-lg font-mono text-sm my-4 border border-white/10">
        <pre>{`<div className="-mt-4 -ml-2">Negative margins</div>`}</pre>
      </div>

      <h3>Colors</h3>
      <ul>
        <li><code>text-{'{color}'}-{'{shade}'}</code> - Text colors (e.g., <code>text-blue-600</code>)</li>
        <li><code>bg-{'{color}'}-{'{shade}'}</code> - Background colors (e.g., <code>bg-gray-100</code>)</li>
        <li><code>border-{'{color}'}-{'{shade}'}</code> - Border colors</li>
        <li><strong>With opacity:</strong> <code>bg-blue-500/50</code>, <code>text-red-600/75</code></li>
      </ul>

      <h3>Spacing</h3>
      <ul>
        <li><code>p-{'{size}'}</code>, <code>px-{'{size}'}</code>, <code>py-{'{size}'}</code>, <code>pt/pb/pl/pr-{'{size}'}</code> - Padding</li>
        <li><code>m-{'{size}'}</code>, <code>mx-{'{size}'}</code>, <code>my-{'{size}'}</code>, <code>mt/mb/ml/mr-{'{size}'}</code> - Margin</li>
        <li><strong>Negative:</strong> <code>-m-4</code>, <code>-mt-2</code></li>
        <li><strong>Scale:</strong> 0, px, 0.5-96 (follows Tailwind spacing scale)</li>
      </ul>

      <h3>Typography</h3>
      <ul>
        <li><code>text-xs</code> through <code>text-9xl</code> - Font sizes</li>
        <li><code>font-thin</code> through <code>font-black</code> - Font weights</li>
        <li><code>leading-none/tight/snug/normal/relaxed/loose</code> - Line height</li>
        <li><code>tracking-tighter/tight/normal/wide/wider/widest</code> - Letter spacing</li>
        <li><code>uppercase/lowercase/capitalize/normal-case</code> - Text transform</li>
        <li><code>underline/line-through/no-underline</code> - Text decoration</li>
        <li><code>text-left/center/right/justify</code> - Text alignment</li>
      </ul>

      <h3>Display</h3>
      <ul>
        <li><code>block</code>, <code>inline-block</code>, <code>inline</code></li>
        <li><code>table</code>, <code>table-cell</code>, <code>table-row</code></li>
        <li><code>hidden</code> - display: none</li>
      </ul>

      <h3>Layout</h3>
      <ul>
        <li><code>w-{'{size}'}</code>, <code>h-{'{size}'}</code> - Width and height</li>
        <li><code>max-w-{'{size}'}</code>, <code>max-h-{'{size}'}</code> - Max dimensions</li>
        <li><code>w-full</code>, <code>w-1/2</code>, <code>w-1/3</code>, etc. - Fractional widths</li>
      </ul>

      <h3>Borders</h3>
      <ul>
        <li><code>rounded</code>, <code>rounded-lg</code>, <code>rounded-full</code>, etc. - Border radius</li>
        <li><code>border</code>, <code>border-2</code>, <code>border-4</code> - Border width</li>
        <li><code>border-{'{color}'}-{'{shade}'}</code> - Border colors</li>
      </ul>

      <h2>Advanced Examples</h2>
      
      <div className="bg-white/10 text-white p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto border border-white/10">
        <pre>{`// Opacity modifiers
<div className="bg-blue-500/50 text-white/90">
  Semi-transparent background
</div>

// Arbitrary values
<div className="w-[250px] h-[100px] text-[#ff6b6b]">
  Custom dimensions and color
</div>

// Negative margins
<div className="-mt-4 -ml-2">
  Overlapping content
</div>

// Complete example
<Container className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-8">
  <Heading className="text-4xl font-extrabold text-gray-900 tracking-tight">
    Amazing Email
  </Heading>
  <Text className="text-lg text-gray-600 leading-relaxed mt-4">
    With full Tailwind support!
  </Text>
</Container>`}</pre>
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

      <h2>What's NOT Supported</h2>
      <p>Some Tailwind features aren't email-safe and are intentionally excluded:</p>
      <ul>
        <li>❌ Flexbox/Grid (limited email support)</li>
        <li>❌ Container queries (not email-safe)</li>
        <li>❌ 3D transforms (not email-safe)</li>
        <li>❌ Modern CSS features (cascade layers, @property)</li>
        <li>❌ Backdrop filters</li>
      </ul>
    </div>
  );
}
