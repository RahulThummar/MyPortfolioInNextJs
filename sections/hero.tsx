"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Send } from "lucide-react";

export function Hero() {
  const titles = [
    "React.js Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "MCA Graduate",
    "Open Source Builder",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="relative w-full h-screen h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-950 select-none">
      {/* Background Video Layer - AppWorld Infotech Style */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center scale-105 opacity-85"
        >
          <source src="/video/Hero.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Multi-Layer Dark Gradient Overlay for Maximum Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/20 to-slate-950/70" />

        {/* Ambient Glowing Color Blobs for Tech Aesthetics */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Smooth Subtle Bottom Transition */}
        <div
          className="absolute inset-x-0 bottom-0 h-12 md:h-16 pointer-events-none z-[3]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.35) 80%, #FFFFFF 100%)",
          }}
        />
      </div>

      {/* Main Hero Content - Perfectly Centered in Viewport */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full">
        <div className="max-w-3xl lg:max-w-4xl">
          <motion.div
            className="space-y-6 sm:space-y-7"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.35,
                  duration: 0.8,
                  staggerChildren: 0.15,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {/* Headline and Rotating Title */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 280, damping: 22 },
                },
              }}
            >
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-cyan-400 mb-2 tracking-wider uppercase flex items-center gap-2 drop-shadow">
                Hello, I'm <span className="text-xl sm:text-2xl wave">👋</span>
              </h2>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 drop-shadow-md">
                Rahul Thummar
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center min-h-[3rem] sm:min-h-[2.5rem]">
                <span className="text-lg sm:text-2xl md:text-3xl font-semibold text-slate-300 mr-2">
                  A passionate
                </span>
                <div className="relative h-8 sm:h-10 flex items-center">
                  <motion.span
                    key={currentTitleIndex}
                    initial={{ opacity: 0, scale: 0.8, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -15 }}
                    transition={{ duration: 0.45, type: "spring", bounce: 0.4 }}
                    className="absolute left-0 text-lg sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-300 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)] whitespace-nowrap"
                  >
                    {titles[currentTitleIndex]}
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Bio Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed drop-shadow"
            >
              I architect and develop high-performance, scalable web platforms.
              Specializing in the React & Next.js ecosystem, real-time collaboration engines,
              interactive canvas with Fabric.js, and modern frontend architecture.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-primary rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-primary/40 border border-primary/30"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold text-white/90 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
              >
                <Send className="mr-2 w-4 h-4 text-cyan-400" />
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}







