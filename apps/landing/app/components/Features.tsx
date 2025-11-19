'use client';

import { Layout, Code, Zap, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section id="features" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Everything you need. <br /><span className="text-gray-500">Nothing you don't.</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl">Weaver provides the primitives to build world-class emails without the legacy baggage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {/* Card 1: Visual Builder */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-[#111] rounded-3xl p-8 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-auto">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                  <Layout className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Visual Builder</h3>
                <p className="text-gray-400 text-lg">Drag, drop, and edit. Sync changes directly to your codebase.</p>
              </div>
              <div className="mt-8 rounded-xl border border-white/10 bg-[#0a0a0a] p-4 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-20 bg-white/5 rounded-lg w-full animate-pulse"></div>
                  <div className="flex gap-4">
                    <div className="h-32 bg-white/5 rounded-lg w-1/2 animate-pulse delay-75"></div>
                    <div className="h-32 bg-white/5 rounded-lg w-1/2 animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: TypeScript */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#111] rounded-3xl p-8 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Type Safe</h3>
              <p className="text-gray-400 mb-8">Full TypeScript support out of the box. Catch errors before you send.</p>
              <div className="font-mono text-xs text-blue-300 bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
                interface EmailProps {'{'}<br/>
                &nbsp;&nbsp;firstName: string;<br/>
                &nbsp;&nbsp;loginUrl: string;<br/>
                {'}'}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Framework Agnostic */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#111] rounded-3xl p-8 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 text-green-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">React & Vue</h3>
              <p className="text-gray-400 mb-8">First-class support for React and Vue.js. Same components, same API, your choice of framework.</p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-mono">React</div>
                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-mono">Vue 3</div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Integrations */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-[#111] rounded-3xl p-8 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Seamless Integrations</h3>
                <p className="text-gray-400 text-lg">Connect with your favorite providers in seconds. Resend, Nodemailer, AWS SES, and more.</p>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-[#0a0a0a] rounded-xl border border-white/10 p-6 font-mono text-sm text-gray-300 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4 text-gray-500">
                    <Terminal className="w-4 h-4" />
                    <span>send-email.ts</span>
                  </div>
                  <div className="space-y-2">
                    <p><span className="text-purple-400">await</span> resend.send({'{'}</p>
                    <p className="pl-4">from: <span className="text-green-400">'onboarding@resend.dev'</span>,</p>
                    <p className="pl-4">to: <span className="text-green-400">'user@gmail.com'</span>,</p>
                    <p className="pl-4">subject: <span className="text-green-400">'Hello World'</span>,</p>
                    <p className="pl-4">react: <span className="text-blue-400">&lt;WelcomeEmail /&gt;</span></p>
                    <p>{'}'});</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
