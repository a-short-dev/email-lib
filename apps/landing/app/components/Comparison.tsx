'use client';

import { X, Check } from "lucide-react";

export function Comparison() {
  return (
    <section id="comparison" className="py-32 px-6 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Old Way vs. The Weaver Way</h2>
          <p className="text-xl text-gray-400">See the difference for yourself.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Old Way */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-[#111] rounded-xl border border-white/5 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <h3 className="text-xl font-bold text-gray-300">HTML Tables</h3>
              </div>
              <div className="font-mono text-xs text-gray-500 space-y-1 overflow-hidden opacity-50">
                <p>&lt;table role="presentation" border="0"&gt;</p>
                <p>&nbsp;&nbsp;&lt;tr&gt;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td style="padding: 20px;"&gt;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Ghost tables for Outlook --&gt;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--[if mso | IE]&gt;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table role="presentation"&gt;</p>
                <p>...</p>
              </div>
              <div className="mt-8 text-red-400 flex items-center gap-2">
                <X className="w-5 h-5" />
                <span>Painful to maintain</span>
              </div>
            </div>
          </div>

          {/* New Way */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-[#111] rounded-xl border border-white/5 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h3 className="text-xl font-bold text-white">React Components</h3>
              </div>
              <div className="font-mono text-sm text-gray-300 space-y-2">
                <p><span className="text-blue-400">&lt;Container&gt;</span></p>
                <p>&nbsp;&nbsp;<span className="text-purple-400">&lt;Section&gt;</span></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">&lt;Text&gt;</span>Hello World<span className="text-green-400">&lt;/Text&gt;</span></p>
                <p>&nbsp;&nbsp;<span className="text-purple-400">&lt;/Section&gt;</span></p>
                <p><span className="text-blue-400">&lt;/Container&gt;</span></p>
              </div>
              <div className="mt-8 text-green-400 flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Joy to write</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
