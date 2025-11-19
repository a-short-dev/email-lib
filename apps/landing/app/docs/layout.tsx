'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Book, Code, Box, Zap, Menu, X } from 'lucide-react';
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
      { name: 'Button', href: '/docs/components/button', icon: Box },
      { name: 'Text', href: '/docs/components/text', icon: Code },
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
    <div className="min-h-screen bg-white flex flex-col md:flex-row font-sans text-black">
      {/* Mobile Header */}
      <div className="md:hidden border-b border-gray-200 p-4 flex items-center justify-between bg-white z-20 sticky top-0">
        <Link href="/" className="font-bold text-xl tracking-tight">Weaver</Link>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed md:sticky top-0 left-0 h-screen w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto transition-transform duration-300 z-10
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        pt-20 md:pt-0
      `}>
        <div className="p-6">
          <Link href="/" className="hidden md:block font-bold text-2xl tracking-tight mb-8">Weaver</Link>
          
          <nav className="space-y-8">
            {sidebarItems.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link 
                          href={item.href}
                          className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors ${
                            isActive 
                              ? 'bg-black text-white font-medium' 
                              : 'text-gray-600 hover:text-black hover:bg-gray-200'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4" />
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
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          {children}
        </div>
      </main>
    </div>
  );
}
