"use client";

import { motion } from "framer-motion";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-section">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[120px] mix-blend-screen" />
      <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[100px] mix-blend-screen" />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent pointer-events-none"
      />
    </div>
  );
}
