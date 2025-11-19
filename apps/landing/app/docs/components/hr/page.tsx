export default function HrPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Hr</h1>
      <p className="text-xl text-gray-400 leading-relaxed mb-8">
        A horizontal rule for separating content.
      </p>

      <h2>Usage</h2>
      <div className="bg-white/10 text-white p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto border border-white/10">
        <pre>{`import { Hr } from 'weaver-email-components';

export const Email = () => (
  <>
    <Text>Section 1</Text>
    <Hr className="border-gray-300 my-4" />
    <Text>Section 2</Text>
  </>
);`}</pre>
      </div>

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
            <td className="py-2 font-mono">style</td>
            <td className="py-2 font-mono">CSSProperties</td>
            <td className="py-2">Inline styles for the hr.</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="py-2 font-mono">className</td>
            <td className="py-2 font-mono">string</td>
            <td className="py-2">Tailwind CSS classes.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
