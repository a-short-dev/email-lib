export default function TextPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Text</h1>
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        A block of text.
      </p>

      <h2>Usage</h2>
      <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto">
        <pre>{`import { Text } from '@weaver/email-components';

export const Email = () => (
  <Text style={{ fontSize: '16px', lineHeight: '24px' }}>
    Hello world!
  </Text>
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
            <td className="py-2 font-mono">style</td>
            <td className="py-2 font-mono">CSSProperties</td>
            <td className="py-2">Inline styles for the text.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
