import { CodeBlock } from '../../../components/CodeBlock';

export default function ButtonPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Button</h1>
      <p className="text-xl text-gray-400 leading-relaxed mb-8">
        A call-to-action button that renders as a table for maximum compatibility.
      </p>

      <h2>Usage</h2>
      <CodeBlock code={`import { Button } from 'weaver-email-components';

export const Email = () => (
  <Button 
    href="https://example.com"
    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
  >
    Click me
  </Button>
);`} />

      <h2>Props</h2>
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="py-2 font-semibold">Prop</th>
            <th className="py-2 font-semibold">Type</th>
            <th className="py-2 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-white/5">
            <td className="py-2 font-mono">href</td>
            <td className="py-2 font-mono">string</td>
            <td className="py-2">The URL the button links to.</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="py-2 font-mono">style</td>
            <td className="py-2 font-mono">CSSProperties</td>
            <td className="py-2">Inline styles for the button.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
