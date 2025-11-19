export default function VuePage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Vue.js Support</h1>
      <p className="text-xl text-gray-400 leading-relaxed mb-8">
        Use Weaver with Vue.js components.
      </p>

      <h2>Installation</h2>
      <div className="bg-white/10 text-white p-4 rounded-lg font-mono text-sm my-4 border border-white/10">
        npm install weaver-email-vue
      </div>

      <h2>Usage</h2>
      <div className="bg-white/10 text-white p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto border border-white/10">
        <pre>{`import { Html, Button, render } from 'weaver-email-vue';
import { defineComponent } from 'vue';

const Email = defineComponent({
  render() {
    return (
      <Html>
        <Button href="https://example.com">Click me</Button>
      </Html>
    );
  }
});

const html = await render(Email);`}</pre>
      </div>

      <h2>Components</h2>
      <p>
        The <code>weaver-email-vue</code> package exports the same components as the React package, but adapted for Vue.
      </p>
    </div>
  );
}
