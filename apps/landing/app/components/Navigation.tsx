'use client';

import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 z-50 relative">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">
            <Globe className="w-5 h-5" />
          </div>
          Weaver
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/builder" className="hover:text-white transition-colors">Builder</Link>
          <Link href="#comparison" className="hover:text-white transition-colors">Comparison</Link>
          <Link href="https://github.com/a-short-dev/email-lib" className="hover:text-white transition-colors">GitHub</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/builder"
            className="px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Open Builder
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 relative p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-medium text-gray-400">
              <Link href="/docs" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">Docs</Link>
              <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">Features</Link>
              <Link href="/builder" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">Builder</Link>
              <Link href="#comparison" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">Comparison</Link>
              <Link href="https://github.com/a-short-dev/email-lib" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">GitHub</Link>
              
              <div className="h-px bg-white/10 my-4" />
              
              <Link 
                href="/builder"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center px-5 py-4 bg-white text-black rounded-xl text-lg font-bold hover:bg-gray-200 transition-colors"
              >
                Open Builder
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
