"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 space-y-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  staggerChildren: 0.2,
                  delayChildren: 0.1
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
              }}
            >
              <h2 className="text-xl font-medium text-primary mb-2 tracking-wide uppercase flex items-center gap-2">
                Hello, I'm <span className="text-2xl wave">👋</span>
              </h2>
              <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary tracking-tight mb-4 drop-shadow-sm">
                Rahul Thummar
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center min-h-[4rem] sm:min-h-[3rem] mt-2 sm:mt-0">
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-text-secondary mr-2">
                  A passionate
                </span>
                <div className="relative h-10 sm:h-12 flex items-center mt-1 sm:mt-0">
                  <motion.span
                    key={currentTitleIndex}
                    initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.6 }}
                    className="absolute left-0 text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-sm whitespace-nowrap"
                  >
                    {titles[currentTitleIndex]}
                  </motion.span>
                </div>
              </div>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="text-lg text-text-secondary max-w-xl leading-relaxed"
            >
              I architect and develop high-performance, scalable web platforms. Specializing in the React & Next.js ecosystem to deliver immersive, user-centric digital experiences.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-primary rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/30"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image Showcase */}
          <div className="flex-1 w-full relative h-[400px] lg:h-[600px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="relative w-full h-full max-w-md flex items-center justify-center"
            >
              {/* Massive glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent rounded-full blur-[80px] animate-pulse" />

              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 z-30 mt-12 lg:mt-0"
              >
                {/* Decorative spinning ring */}
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 sm:-inset-4 border-2 border-dashed border-primary/30 rounded-full pointer-events-none"
                />

                {/* Decorative solid ring */}
                <motion.div
                  animate={{ scale: [1.05, 1, 1.05] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-6 sm:-inset-8 border border-primary/10 rounded-full pointer-events-none hidden sm:block"
                />

                {/* Floating Particle 1 */}
                <motion.div
                  animate={{ y: [-20, 20, -20], x: [-10, 10, -10], scale: [1, 1.2, 1] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 right-8 w-12 h-12 bg-gradient-to-br from-primary to-blue-400 rounded-full blur-[2px] opacity-60 shadow-lg shadow-primary/50 pointer-events-none"
                />

                {/* Floating Particle 2 */}
                <motion.div
                  animate={{ y: [20, -20, 20], x: [10, -10, 10], scale: [1, 1.5, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-12 -left-6 w-8 h-8 bg-gradient-to-br from-accent to-cyan-400 rounded-full blur-[1px] opacity-70 shadow-lg shadow-accent/50 pointer-events-none"
                />

                {/* Floating Particle 3 */}
                <motion.div
                  animate={{ y: [-15, 15, -15], x: [15, -15, 15], scale: [1, 0.8, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 right-16 w-16 h-16 bg-gradient-to-br from-purple-400 to-primary rounded-full blur-[4px] opacity-40 shadow-lg pointer-events-none"
                />

                {/* Image Container */}
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-[8px] border-white bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 group"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/mpic.jpg"
                    alt="Rahul Thummar"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    priority
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}




