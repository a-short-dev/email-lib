'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Book, Code, Box, Zap, Menu, X, Layout, Type, Link as LinkIcon, Image, Minus, MoveVertical } from 'lucide-react';
import { useState } from 'react';

const sidebarItems = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Introduction', href: '/docs', icon: Book },
      { name: 'Installation', href: '/docs/installation', icon: Zap },
      { name: 'Vue Support', href: '/docs/vue', icon: Code },
      { name: 'Tailwind CSS', href: '/docs/tailwind', icon: Zap },
    ]
  },
  {
    title: 'Components',
    items: [
      { name: 'Html', href: '/docs/components/html', icon: Code },
      { name: 'Container', href: '/docs/components/container', icon: Layout },
      { name: 'Heading', href: '/docs/components/heading', icon: Type },
      { name: 'Text', href: '/docs/components/text', icon: Type },
      { name: 'Link', href: '/docs/components/link', icon: LinkIcon },
      { name: 'Image', href: '/docs/components/image', icon: Image },
      { name: 'Button', href: '/docs/components/button', icon: Box },
      { name: 'Hr', href: '/docs/components/hr', icon: Minus },
      { name: 'Spacer', href: '/docs/components/spacer', icon: MoveVertical },
    ]
  },
  {
    title: 'Integrations',
    items: [
      { name: 'Resend', href: '/docs/integrations/resend', icon: Zap },
      { name: 'Nodemailer', href: '/docs/integrations/nodemailer', icon: Zap },
    ]
  }
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col md:flex-row font-sans text-white selection:bg-white selection:text-black">
      {/* Mobile Header */}
      <div className="md:hidden border-b border-white/10 p-4 flex items-center justify-between bg-[#050505]/80 backdrop-blur-xl z-20 sticky top-0">
        <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black">
            <Zap className="w-3 h-3" />
          </div>
          Weaver
        </Link>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-400 hover:text-white">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed md:sticky top-0 left-0 h-screen w-64 bg-[#050505]/50 border-r border-white/10 backdrop-blur-xl overflow-y-auto transition-transform duration-300 z-10
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        pt-20 md:pt-0
      `}>
        <div className="p-6">
          <Link href="/" className="hidden md:flex font-bold text-2xl tracking-tight mb-8 items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">
              <Zap className="w-5 h-5" />
            </div>
            Weaver
          </Link>
          
          <nav className="space-y-8">
            {sidebarItems.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link 
                          href={item.href}
                          className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-all ${
                            isActive 
                              ? 'bg-white/10 text-white font-medium border border-white/5' 
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-gray-500'}`} />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 prose prose-invert prose-lg">
          {children}
        </div>
      </main>
    </div>
  );
}
