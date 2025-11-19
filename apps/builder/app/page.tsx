import { Button, Html, Text } from '@weaver/email-components';

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Email Builder</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Components</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded">
                <h3 className="font-medium mb-2">Button</h3>
                <Button href="https://example.com">Click me</Button>
              </div>
              <div className="p-4 border rounded">
                <h3 className="font-medium mb-2">Text</h3>
                <Text>This is a sample text component.</Text>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            <div className="border p-4 rounded bg-white">
              {/* Preview area */}
              <p className="text-gray-500">Preview will appear here...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
