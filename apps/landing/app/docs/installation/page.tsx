export default function InstallationPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Installation</h1>
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Get started with Weaver in your project.
      </p>

      <h2>Prerequisites</h2>
      <p>Weaver works with React 18+ or Vue 3+. It is designed to be framework agnostic on the server side.</p>

      <h2>Automatic Installation</h2>
      <p>The easiest way to get started is to install the core package and components.</p>

      <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm my-4">
        npm install @weaver/email-core @weaver/email-components
      </div>

      <p>If you are using Vue.js:</p>
      <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm my-4">
        npm install @weaver/email-vue
      </div>

      <h2>Manual Setup</h2>
      <p>
        Weaver components are just regular React/Vue components. You can import them and use them in your application.
        To render them to HTML for sending, use the <code>render</code> function from the core package.
      </p>

      <h3>Next Steps</h3>
      <ul>
        <li>Explore <a href="/docs/components/html" className="text-black underline">Components</a></li>
        <li>Check out <a href="/docs/integrations/resend" className="text-black underline">Integrations</a></li>
      </ul>
    </div>
  );
}
