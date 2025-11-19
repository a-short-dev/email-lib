'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = 'typescript', showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-4">
      <div className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={copyToClipboard}
          className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-colors backdrop-blur-sm border border-white/10"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="bg-[#0a0a0a] text-gray-300 p-4 rounded-xl font-mono text-sm overflow-x-auto border border-white/10 shadow-2xl">
        <pre className="language-typescript">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
