'use client';

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Comparison } from "./components/Comparison";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Navigation />
      <Hero />
      
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

      <Features />
      <Comparison />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
