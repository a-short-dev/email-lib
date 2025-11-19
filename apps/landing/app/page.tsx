'use client';

import Link from "next/link";
import { ArrowRight, Code, Layout, Zap, Check, MousePointer2, GripVertical, X, Terminal, Globe, Shield, Smartphone, Sparkles, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">
              <Globe className="w-5 h-5" />
            </div>
            Weaver
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/builder" className="hover:text-white transition-colors">Builder</Link>
            <Link href="#comparison" className="hover:text-white transition-colors">Comparison</Link>
            <Link href="https://github.com/a-short-dev/email-lib" className="hover:text-white transition-colors">GitHub</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/builder"
              className="hidden md:flex px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Open Builder
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">v1.0 Public Alpha is Live</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]"
          >
            Email development, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white animate-gradient-x">
              reimagined.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Build beautiful, responsive emails with <strong className="text-white">React or Vue</strong> components. 
            Export to HTML that works everywhere. <strong className="text-white">100% open source</strong>, zero lock-in.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link 
              href="/docs" 
              className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all flex items-center gap-2"
            >
              Start Building <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center gap-4 text-gray-400 text-sm font-mono">
              <span className="px-3 py-1 bg-white/5 rounded border border-white/10">npm i weaver-email-core</span>
              <button className="hover:text-white transition-colors"><CopyIcon /></button>
            </div>
          </motion.div>
        </motion.div>

        {/* Abstract 3D-ish Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none animate-float"></div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-white/5 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-gray-500 mb-8 font-medium uppercase tracking-widest">Trusted by developers at</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder Logos */}
             {['Acme Corp', 'GlobalBank', 'Nebula', 'Vertex', 'Orbit'].map((name) => (
               <div key={name} className="text-xl font-bold font-mono text-white">{name}</div>
             ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
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

      {/* Interactive Comparison */}
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

      {/* CTA Section */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050505] to-[#050505]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Ready to ship?</h2>
          <p className="text-xl text-gray-400 mb-4">Join developers building better emails with open source tools.</p>
          <p className="text-sm text-gray-500 mb-12">MIT Licensed • Free Forever • Community Driven</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
              href="/docs" 
              className="px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:bg-gray-200 transition-all"
            >
              Get Started Now
            </Link>
            <Link 
              href="https://github.com/a-short-dev/email-lib" 
              className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-full font-bold text-xl hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Star on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black">
              <Globe className="w-3 h-3" />
            </div>
            <span className="font-bold text-lg tracking-tight">Weaver</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Weaver. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );
}
