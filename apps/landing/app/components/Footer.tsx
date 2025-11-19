'use client';

import Link from "next/link";
import { Globe } from "lucide-react";

export function Footer() {
  return (
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
  );
}
