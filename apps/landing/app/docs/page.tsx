import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Introduction</h1>
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Weaver is a modern, platform-agnostic email library for JavaScript and TypeScript. 
        It allows you to build emails using React or Vue components and renders them to HTML that works in every email client.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
        <div className="p-6 rounded-xl border border-gray-200 bg-gray-50">
          <h3 className="font-bold text-lg mb-2">Component Based</h3>
          <p className="text-gray-600 text-sm">Build emails like you build web apps. Reusable, composable, and type-safe.</p>
        </div>
        <div className="p-6 rounded-xl border border-gray-200 bg-gray-50">
          <h3 className="font-bold text-lg mb-2">Visual Builder</h3>
          <p className="text-gray-600 text-sm">Empower your team to create templates visually with our drag-and-drop editor.</p>
        </div>
        <div className="p-6 rounded-xl border border-gray-200 bg-gray-50">
          <h3 className="font-bold text-lg mb-2">Platform Agnostic</h3>
          <p className="text-gray-600 text-sm">Works everywhere: Node.js, Bun, Cloudflare Workers, and more.</p>
        </div>
        <div className="p-6 rounded-xl border border-gray-200 bg-gray-50">
          <h3 className="font-bold text-lg mb-2">Multi-Framework</h3>
          <p className="text-gray-600 text-sm">First-class support for both React and Vue.js.</p>
        </div>
      </div>

      <h2>Quick Start</h2>
      <p>Install the core package and components:</p>
      
      <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm my-4">
        npm install @weaver/email-core @weaver/email-components
      </div>

      <p>
        Check out the <Link href="/docs/installation" className="text-black font-medium underline underline-offset-2">Installation guide</Link> to get set up in minutes.
      </p>
    </div>
  );
}
