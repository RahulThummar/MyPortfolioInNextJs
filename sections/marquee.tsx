"use client";

import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "Vue.js", "JavaScript", "TypeScript",
  "Node.js", "Tailwind CSS", "GitHub", "Vercel", "Socket.io", "WebRTC", "MQTT"
];

export function Marquee() {
  return (
    <section className="py-12 bg-white border-y border-border overflow-hidden flex items-center">
      <div className="flex w-[200%] md:w-[150%] lg:w-full max-w-[100vw]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {/* Duplicate EXACTLY twice to make -50% translation seamless */}
          {[...technologies, ...technologies].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-8 py-4 mx-4 bg-section border border-border rounded-full text-lg font-semibold text-text-primary min-w-max pointer-events-none"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
