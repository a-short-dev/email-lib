'use client';

import { useState } from 'react';
import { CodeBlock } from '../../components/CodeBlock';


export default function InstallationPage() {
  const [manager, setManager] = useState<'npm' | 'pnpm' | 'yarn' | 'bun'>('npm');

  const commands = {
    npm: 'npm install weaver-email-core weaver-email-components',
    pnpm: 'pnpm add weaver-email-core weaver-email-components',
    yarn: 'yarn add weaver-email-core weaver-email-components',
    bun: 'bun add weaver-email-core weaver-email-components'
  };

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Installation</h1>
      <p className="text-xl text-gray-400 leading-relaxed mb-8">
        Get started with Weaver in your project.
      </p>

      <div className="flex gap-4 mb-6 border-b border-white/10 pb-2 overflow-x-auto">
        {(['npm', 'pnpm', 'yarn', 'bun'] as const).map((pkg) => (
          <button
            key={pkg}
            onClick={() => setManager(pkg)}
            className={`pb-2 text-sm font-medium transition-colors relative px-2 ${
              manager === pkg ? 'text-blue-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            {pkg}
            {manager === pkg && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400" />
            )}
          </button>
        ))}
      </div>

      <CodeBlock code={commands[manager]} />

      <h2>Next Steps</h2>
      <p>
        Once installed, you can start building your email templates. Check out the <a href="/docs/components/html" className="text-blue-400 hover:text-blue-300">Components</a> section to learn more.
      </p>
    </div>
  );
}
