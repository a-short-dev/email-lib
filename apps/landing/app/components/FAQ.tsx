'use client';

import { motion } from "framer-motion";

export function FAQ() {
  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about Weaver.
          </p>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              question: "Why is the library split into multiple packages?",
              answer: "We adopted a modular architecture to ensure you only bundle what you use. This keeps your project lightweight and performant. For example, if you only need the core render logic, you don't have to include the entire component library."
            },
            {
              question: "Is Weaver free to use?",
              answer: "Yes! Weaver is 100% open source and free to use under the MIT license. You can use it in personal and commercial projects without any restrictions."
            },
            {
              question: "Which frameworks do you support?",
              answer: "We have first-class support for both React and Vue.js. However, the core rendering logic is framework-agnostic, meaning you can potentially use it with other libraries or even vanilla JS in the future."
            },
            {
              question: "Does it work with all email clients?",
              answer: "Absolutely. We test our components against all major email clients, including Gmail, Outlook, Apple Mail, and Yahoo, to ensure your emails look consistent everywhere."
            }
          ].map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-2xl bg-white/5 p-6 text-white hover:bg-white/10 transition-colors border border-white/5">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <div className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-400 bg-white/5 rounded-b-2xl border-x border-b border-white/5 -mt-2 mx-0.5">
                  <p className="leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
