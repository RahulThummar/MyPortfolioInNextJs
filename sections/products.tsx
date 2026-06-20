"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wrench, Terminal } from "lucide-react";
import Image from "next/image";

export function Products() {
  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">My Products</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto">
            Explore my flagship platforms and utility tools designed to provide high-performance solutions for the global developer community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Product 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-section to-white border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center mb-6 overflow-hidden relative shadow-sm">
              <Image src="/images/codeutils-logo.png" alt="CodeUtils Logo" fill className="object-contain p-2" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">CodeUtils</h3>
            <p className="text-text-secondary leading-relaxed mb-8 flex-1">
              The definitive developer utility ecosystem. An all-in-one platform offering high-performance developer tools, securely validated JWT decoders, deep JSON formatting tools, and interactive retro games like Snake and Tic-Tac-Toe. Built with speed and developer productivity at its core.
            </p>
            <a
              href="https://www.codeutils.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-white bg-primary px-6 py-3 rounded-full hover:bg-primary/90 transition-all w-fit"
            >
              Visit Platform
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-section to-white border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0078d7]/10 flex items-center justify-center text-[#0078d7] mb-6">
              <Terminal className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">AutoIncrementLog VS Code Extension</h3>
            <p className="text-text-secondary leading-relaxed mb-8 flex-1">
              A powerful VS Code extension that automatically increments numbers in <code>console.log()</code> statements when pasted. Designed to make debugging significantly easier by eliminating manual log tracking.
            </p>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=RahulThummar.autoincrementlog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-white bg-[#0078d7] px-6 py-3 rounded-full hover:bg-[#0078d7]/90 transition-all w-fit"
            >
              View on Marketplace
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
