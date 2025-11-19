export default function ButtonPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Button</h1>
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        A call-to-action button that renders as a table for maximum compatibility.
      </p>

      <h2>Usage</h2>
      <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto">
        <pre>{`import { Button } from '@weaver/email-components';

export const Email = () => (
  <Button href="https://example.com" style={{ color: '#fff', backgroundColor: '#000' }}>
    Click me
  </Button>
);`}</pre>
      </div>

      <h2>Props</h2>
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-2 font-semibold">Prop</th>
            <th className="py-2 font-semibold">Type</th>
            <th className="py-2 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100">
            <td className="py-2 font-mono">href</td>
            <td className="py-2 font-mono">string</td>
            <td className="py-2">The URL the button links to.</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-2 font-mono">style</td>
            <td className="py-2 font-mono">CSSProperties</td>
            <td className="py-2">Inline styles for the button.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
