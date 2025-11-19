export default function HtmlPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Html</h1>
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        The root component for your email.
      </p>

      <h2>Usage</h2>
      <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto">
        <pre>{`import { Html } from '@weaver/email-components';

export const Email = () => (
  <Html lang="en">
    {/* Your email content */}
  </Html>
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
            <td className="py-2 font-mono">lang</td>
            <td className="py-2 font-mono">string</td>
            <td className="py-2">The language of the document (default: "en").</td>
          </tr>
          <tr className="border-b border-gray-100">
            <td className="py-2 font-mono">dir</td>
            <td className="py-2 font-mono">string</td>
            <td className="py-2">The direction of the document (default: "ltr").</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
