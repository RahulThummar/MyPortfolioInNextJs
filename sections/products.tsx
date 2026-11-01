"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Box,
  ExternalLink,
  Copy,
  RotateCcw,
  ShieldCheck,
  Gamepad2,
  Zap,
  Check,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

function AutoIncrementDemo() {
  const [logs, setLogs] = useState<number[]>([1, 2, 3]);
  const [justPasted, setJustPasted] = useState(false);

  const handlePaste = () => {
    setLogs((prev) => {
      const nextNum = (prev[prev.length - 1] || 0) + 1;
      if (prev.length >= 6) {
        return [1];
      }
      return [...prev, nextNum];
    });
    setJustPasted(true);
    setTimeout(() => setJustPasted(false), 900);
  };

  const handleReset = () => {
    setLogs([1, 2, 3]);
  };

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Editor Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-slate-400 text-[11px] ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#0078d7]" />
            debug-service.ts
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePaste}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0078d7] hover:bg-[#0078d7]/90 text-white text-[11px] font-semibold transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#0078d7]/20 cursor-pointer"
            title="Simulate pasting console.log"
          >
            <Copy className="w-3 h-3" />
            <span>Simulate Paste</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="Reset logs"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 space-y-1.5 font-mono text-xs leading-relaxed min-h-[175px]">
        <div className="text-slate-500 italic text-[11px]">
          // AutoIncrementLog active: numbers auto-increment on each paste!
        </div>
        <div className="text-slate-300">
          <span className="text-purple-400">const</span>{" "}
          <span className="text-sky-300">handleDebugFlow</span> ={" "}
          <span className="text-purple-400">async</span> () =&gt; &#123;
        </div>
        {logs.map((num, i) => {
          const isLatest = i === logs.length - 1 && logs.length > 3;
          return (
            <div
              key={i}
              className={`pl-4 flex items-center gap-2 py-0.5 transition-all duration-300 ${isLatest && justPasted ? "bg-sky-500/10 rounded px-1" : ""
                }`}
            >
              <span className="text-slate-600 select-none text-[11px] w-4 text-right">
                {i + 3}
              </span>
              <span className="text-blue-400">console</span>
              <span className="text-slate-400">.</span>
              <span className="text-yellow-300">log</span>
              <span className="text-slate-400">(</span>
              <span
                className={`px-1.5 py-0.5 rounded font-bold transition-all duration-300 ${isLatest
                    ? "text-[#0078d7] bg-[#0078d7]/20 border border-[#0078d7]/40 scale-105"
                    : "text-emerald-400 bg-emerald-950/60 border border-emerald-500/30"
                  }`}
              >
                &quot;STEP #{num}&quot;
              </span>
              <span className="text-slate-400">,</span>
              <span className="text-slate-200"> payload</span>
              <span className="text-slate-400">);</span>
              {isLatest && (
                <span className="text-[10px] text-[#0078d7] font-sans font-bold bg-[#0078d7]/20 px-2 py-0.5 rounded-full border border-[#0078d7]/30">
                  +Auto-incremented!
                </span>
              )}
            </div>
          );
        })}
        <div className="text-slate-300">&#125;;</div>
      </div>

      {/* Interactive Hint Footer */}
      <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          Click &quot;Simulate Paste&quot; to test auto-numbering
        </span>
        <span className="text-slate-500 font-mono">{logs.length} statements</span>
      </div>
    </div>
  );
}

function CodeUtilsPreview() {
  const [activeTab, setActiveTab] = useState<"jwt" | "json" | "games">("jwt");

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
      {/* Tab Navigation */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <button
            onClick={() => setActiveTab("jwt")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${activeTab === "jwt"
                ? "bg-primary text-white shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
          >
            JWT Decoder
          </button>
          <button
            onClick={() => setActiveTab("json")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${activeTab === "json"
                ? "bg-primary text-white shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
          >
            JSON Formatter
          </button>
          <button
            onClick={() => setActiveTab("games")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${activeTab === "games"
                ? "bg-primary text-white shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
          >
            Retro Games
          </button>
        </div>

        <span className="text-[11px] font-sans text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full hidden sm:flex items-center gap-1">
          <ShieldCheck className="w-3 h-3" />
          Client-Side Safe
        </span>
      </div>

      {/* Tab Content Display */}
      <div className="p-4 sm:p-5 min-h-[175px] flex flex-col justify-center font-mono text-xs leading-relaxed">
        {activeTab === "jwt" && (
          <div className="space-y-2.5">
            <div className="text-slate-500 text-[11px] font-sans">
              Decoded Header &amp; Payload (Instant &amp; Zero Network Request):
            </div>
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 space-y-1">
              <div>
                <span className="text-rose-400">&#123;&quot;alg&quot;: &quot;HS256&quot;, &quot;typ&quot;: &quot;JWT&quot;&#125;</span>
              </div>
              <div>
                <span className="text-purple-300">
                  &#123;&quot;user&quot;: &quot;Rahul Thummar&quot;, &quot;role&quot;: &quot;Senior Next.js Dev&quot;, &quot;exp&quot;: 1793509200&#125;
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Token verified locally without sending sensitive credentials to any server.
            </div>
          </div>
        )}

        {activeTab === "json" && (
          <div className="space-y-2.5">
            <div className="text-slate-500 text-[11px] font-sans">
              Colorized Syntax Tree &amp; Real-Time Validation:
            </div>
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 space-y-0.5 font-mono text-xs">
              <div>&#123;</div>
              <div className="pl-4">
                <span className="text-sky-300">&quot;status&quot;</span>: <span className="text-emerald-400">&quot;valid&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-sky-300">&quot;parsedNodes&quot;</span>: <span className="text-amber-400">1250</span>,
              </div>
              <div className="pl-4">
                <span className="text-sky-300">&quot;latencyMs&quot;</span>: <span className="text-purple-300">0.42</span>
              </div>
              <div>&#125;</div>
            </div>
          </div>
        )}

        {activeTab === "games" && (
          <div className="space-y-3 text-center py-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <Gamepad2 className="w-4 h-4 text-purple-400" />
              Snake &amp; Tic-Tac-Toe
            </div>
            <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
              Need a quick mental break during intense coding sessions? Enjoy lightweight, responsive retro mini-games built directly into the web platform.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
        <span className="text-slate-400">Available free at codeutils.tech</span>
        <span className="text-primary font-sans font-semibold">100% Free &amp; Fast</span>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3], x: [0, 20, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]"
        />
        <div className="absolute bottom-[10%] left-[5%] w-[35%] h-[35%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Box className="w-3.5 h-3.5" />
            <span>Developer Products</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Products
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Explore my flagship platforms and utility tools designed to provide high-performance solutions for the global developer community.
          </p>
        </motion.div>

        {/* Product Showcase Cards */}
        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          {/* Product 1: CodeUtils */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-accent/5 via-primary/5 to-transparent rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Product Info & Actions */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 shadow-md flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src="/images/codeutils-logo.png"
                        alt="CodeUtils Logo"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">
                        Web Utility Platform
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-accent transition-colors duration-300">
                        CodeUtils
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                    The definitive developer utility ecosystem. An all-in-one platform offering high-performance developer tools, securely validated JWT decoders, deep JSON formatting tools, and interactive retro games like Snake and Tic-Tac-Toe. Built with speed and developer productivity at its core.
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      "JWT Token Decoder",
                      "JSON Formatter",
                      "Retro Mini Games",
                      "Client-Side Safe",
                      "Zero Latency",
                    ].map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        <Check className="w-3 h-3 text-emerald-500" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <a
                    href="https://www.codeutils.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-white bg-accent hover:bg-accent/90 px-6 py-3 rounded-full transition-all shadow-lg shadow-accent/25 hover:scale-105 active:scale-95"
                  >
                    Visit Platform
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive CodeUtils Preview */}
              <div className="lg:col-span-6">
                <CodeUtilsPreview />
              </div>
            </div>
          </motion.div>

          {/* Product 2: AutoIncrementLog VS Code Extension */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#0078d7]/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#0078d7]/5 via-sky-500/5 to-transparent rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Product Info & Actions */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0078d7]/10 border border-[#0078d7]/20 shadow-md flex items-center justify-center text-[#0078d7] group-hover:scale-105 transition-transform duration-500">
                      <Terminal className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0078d7]">
                        VS Code Extension
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#0078d7] transition-colors duration-300">
                        AutoIncrementLog
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                    A powerful VS Code extension that automatically increments numbers in <code className="bg-slate-100 px-2 py-0.5 rounded text-sm text-[#0078d7] font-mono border border-slate-200">console.log()</code> statements when pasted. Designed to make debugging significantly easier by eliminating manual log tracking.
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      "VS Code Marketplace",
                      "Instant Auto-Numbering",
                      "Zero Manual Tracking",
                      "Debugging Velocity",
                    ].map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        <Sparkles className="w-3 h-3 text-[#0078d7]" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=RahulThummar.autoincrementlog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-white bg-[#0078d7] hover:bg-[#0078d7]/90 px-6 py-3 rounded-full transition-all shadow-lg shadow-[#0078d7]/25 hover:scale-105 active:scale-95"
                  >
                    View on Marketplace
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive VS Code Simulation Widget */}
              <div className="lg:col-span-6">
                <AutoIncrementDemo />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
