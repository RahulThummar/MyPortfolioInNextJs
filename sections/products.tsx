"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Box } from "lucide-react";
import Image from "next/image";

export function Products() {
  return (
    <section id="products" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3], x: [0, 20, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24">
          
          {/* Right Sticky Header (reversed layout) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-2xl mb-6 text-accent">
                <Box className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 tracking-tight">
                My <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                  Products
                </span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Explore my flagship platforms and utility tools designed to provide high-performance solutions for the global developer community.
              </p>
            </motion.div>
          </div>

          {/* Left Content - Stacked Cards */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            {/* Product 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative bg-white border border-border/50 rounded-3xl p-6 md:p-10 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-6 md:gap-8 items-start"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 md:w-24 md:h-24 shrink-0 rounded-2xl bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 border border-border flex items-center justify-center relative shadow-sm group-hover:scale-105 transition-transform duration-500">
                <Image src="/images/codeutils-logo.png" alt="CodeUtils Logo" fill className="object-contain p-2 md:p-3" />
              </div>
              
              <div className="relative z-10 flex-1 flex flex-col h-full">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300 break-words">CodeUtils</h3>
                <p className="text-text-secondary leading-relaxed mb-6 md:mb-8 flex-1 text-base md:text-lg">
                  The definitive developer utility ecosystem. An all-in-one platform offering high-performance developer tools, securely validated JWT decoders, deep JSON formatting tools, and interactive retro games like Snake and Tic-Tac-Toe. Built with speed and developer productivity at its core.
                </p>
                <a
                  href="https://www.codeutils.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-white bg-accent px-6 py-3 rounded-full hover:bg-accent/90 transition-all w-fit shadow-lg shadow-accent/20 hover:scale-105 active:scale-95"
                >
                  Visit Platform
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative bg-white border border-border/50 rounded-3xl p-6 md:p-10 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-[#0078d7]/10 transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-6 md:gap-8 items-start"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-[#0078d7]/0 via-[#0078d7]/0 to-[#0078d7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 md:w-24 md:h-24 shrink-0 rounded-2xl bg-[#0078d7]/10 flex items-center justify-center text-[#0078d7] shadow-sm group-hover:scale-105 transition-transform duration-500 border border-[#0078d7]/20">
                <Terminal className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              
              <div className="relative z-10 flex-1 flex flex-col h-full min-w-0">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 group-hover:text-[#0078d7] transition-colors duration-300 break-words">AutoIncrementLog VS Code Extension</h3>
                <p className="text-text-secondary leading-relaxed mb-6 md:mb-8 flex-1 text-base md:text-lg">
                  A powerful VS Code extension that automatically increments numbers in <code className="bg-slate-100 px-2 py-0.5 rounded text-sm text-[#0078d7] font-mono border border-slate-200">console.log()</code> statements when pasted. Designed to make debugging significantly easier by eliminating manual log tracking.
                </p>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=RahulThummar.autoincrementlog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-white bg-[#0078d7] px-6 py-3 rounded-full hover:bg-[#0078d7]/90 transition-all w-fit shadow-lg shadow-[#0078d7]/20 hover:scale-105 active:scale-95"
                >
                  View on Marketplace
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}




