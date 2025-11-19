import { CodeBlock } from '../../../components/CodeBlock';

export default function HtmlPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Html</h1>
      <p className="text-xl text-gray-400 leading-relaxed mb-8">
        The root component for your email.
      </p>

      <h2>Usage</h2>
      <CodeBlock code={`import { Html } from 'weaver-email-components';

export const Email = () => (
  <Html lang="en" dir="ltr">
    {/* Your email content */}
  </Html>
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
            <td className="py-2 font-mono">lang</td>
            <td className="py-2 font-mono">string</td>
            <td className="py-2">The language of the document (default: "en").</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="py-2 font-mono">dir</td>
            <td className="py-2 font-mono">string</td>
            <td className="py-2">The direction of the document (default: "ltr").</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
