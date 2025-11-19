export default function ImagePage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Image</h1>
      <p className="text-xl text-gray-400 leading-relaxed mb-8">
        A responsive image component.
      </p>

      <h2>Usage</h2>
      <div className="bg-white/10 text-white p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto border border-white/10">
        <pre>{`import { Image } from 'weaver-email-components';

export const Email = () => (
  <Image 
    src="https://example.com/logo.png" 
    alt="Logo" 
    width={100} 
    height={50} 
    className="mx-auto"
  />
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
            <td className="py-2 font-mono">src</td>
            <td className="py-2 font-mono">string</td>
            <td className="py-2">The source URL of the image.</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="py-2 font-mono">alt</td>
            <td className="py-2 font-mono">string</td>
            <td className="py-2">The alt text for the image.</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="py-2 font-mono">width</td>
            <td className="py-2 font-mono">number | string</td>
            <td className="py-2">The width of the image.</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="py-2 font-mono">height</td>
            <td className="py-2 font-mono">number | string</td>
            <td className="py-2">The height of the image.</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="py-2 font-mono">style</td>
            <td className="py-2 font-mono">CSSProperties</td>
            <td className="py-2">Inline styles for the image.</td>
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
