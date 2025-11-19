'use client';

import Link from "next/link";
import { ArrowRight, Code, Layout, Zap, Check, MousePointer2, GripVertical, X } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-transparent"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-multiply"></div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Weaver
          </Link>
          <div className="flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="#features" className="hover:text-black transition-colors">Features</Link>
            <Link href="#comparison" className="hover:text-black transition-colors">Comparison</Link>
            <Link href="https://github.com" className="hover:text-black transition-colors">GitHub</Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            <span className="text-sm font-medium text-gray-600">Under Development — Alpha Coming Soon</span>
          </motion.div>
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            Stop fighting with <br />
            <span className="text-gray-400 bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-600">email HTML.</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We've all been there. Nested tables, inline styles, Outlook bugs. 
            Weaver lets you build emails like modern web apps—with React components and a visual builder that actually works.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex items-center justify-center gap-4"
          >
            <Link 
              href="/docs" 
              className="group px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2"
            >
              Start Building <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="https://github.com" 
              className="px-8 py-4 bg-gray-100 text-black rounded-full font-medium hover:bg-gray-200 transition-all"
            >
              View on GitHub
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Feature 1: Developer First (Text + Code) */}
      <section id="features" className="py-24 px-6 bg-black text-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Code that feels like <br />
              <span className="text-gray-400">modern web development.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Forget about `tr`, `td`, and `ghost tables`. Write clean, composable React components. 
              We handle the messy HTML conversion so you can focus on the experience.
            </p>
            <ul className="space-y-4 text-gray-300">
              {[
                "Full TypeScript support",
                "Component reusability",
                "Zero-config build process"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">
                    <Check className="w-3 h-3" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="rounded-xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-900/50">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                <div className="ml-2 text-xs text-gray-500 font-mono">email.tsx</div>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed text-gray-300">
                  <code>{`import { Html, Button, Text } from '@weaver/email';

export const WelcomeEmail = ({ name }) => (
  <Html>
    <Text>
      Welcome back, {name}!
    </Text>
    <Button href="https://weaver.com">
      Get Started
    </Button>
  </Html>
);`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature 2: Visual Builder (Text + Mock) */}
      <section className="py-24 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
              <Layout className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bridge the gap between <br />
              <span className="text-gray-400">design and code.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Marketing teams shouldn't need to ask developers for every copy change. 
              Our visual builder lets anyone edit emails safely, with changes syncing directly to your codebase.
            </p>
            <ul className="space-y-4 text-gray-600">
              {[
                "Drag & Drop interface",
                "Real-time preview",
                "Two-way sync with code"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-xs">
                    <Check className="w-3 h-3 text-black" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              {/* Mock Builder UI */}
              <div className="flex h-80">
                {/* Sidebar */}
                <div className="w-16 border-r border-gray-100 bg-gray-50 flex flex-col items-center py-4 gap-4">
                  <div className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                    <MousePointer2 className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="w-8 h-8 rounded hover:bg-white hover:border hover:border-gray-200 flex items-center justify-center transition-all">
                    <Layout className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                {/* Canvas */}
                <div className="flex-1 bg-gray-100 p-6 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-500 shadow-sm">
                    Welcome Email
                  </div>
                  <div className="w-full max-w-xs bg-white rounded-lg shadow-sm p-6 space-y-4 border border-gray-200">
                    <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-gray-50 rounded"></div>
                      <div className="h-3 w-5/6 bg-gray-50 rounded"></div>
                    </div>
                    <div className="h-8 w-full bg-black rounded flex items-center justify-center text-white text-xs font-medium">
                      Button
                    </div>
                  </div>
                  {/* Floating Palette */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow-lg border border-gray-100 flex flex-col gap-2">
                    <div className="w-8 h-8 bg-gray-50 rounded flex items-center justify-center cursor-move">
                      <GripVertical className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="w-8 h-8 bg-gray-50 rounded flex items-center justify-center cursor-move">
                      <GripVertical className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why developers choose Weaver
            </h2>
            <p className="text-lg text-gray-600">
              Open source, modern, and built for the future.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b-2 border-gray-100 w-1/4"></th>
                  <th className="p-4 border-b-2 border-black bg-gray-50 rounded-t-xl w-1/4 text-center font-bold text-lg">Weaver</th>
                  <th className="p-4 border-b-2 border-gray-100 w-1/4 text-center font-medium text-gray-500">React Email</th>
                  <th className="p-4 border-b-2 border-gray-100 w-1/4 text-center font-medium text-gray-500">MJML</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "React Components", weaver: true, re: true, mjml: false },
                  { feature: "Visual Builder", weaver: true, re: false, mjml: false },
                  { feature: "TypeScript Support", weaver: true, re: true, mjml: false },
                  { feature: "Two-way Sync", weaver: true, re: false, mjml: false },
                  { feature: "Open Source", weaver: true, re: true, mjml: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-4 text-center bg-gray-50/30">
                      {row.weaver ? <Check className="w-5 h-5 text-black mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {row.re ? <Check className="w-5 h-5 text-gray-400 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {row.mjml ? <Check className="w-5 h-5 text-gray-400 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Weaver. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-black transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms</Link>
            <Link href="#" className="hover:text-black transition-colors">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
