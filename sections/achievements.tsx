"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code, Terminal, Heart } from "lucide-react";

const achievements = [
  { icon: GraduationCap, title: "MCA Graduate", value: "2023" },
  { icon: Briefcase, title: "Years Experience", value: "3.5+" },
  { icon: Code, title: "Production Projects", value: "10+" },
  { icon: Terminal, title: "Developer Tool Creator", value: "1" },
  { icon: Heart, title: "Open Source Enthusiast", value: "100%" },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Milestones & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-border flex flex-col items-center text-center hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-text-primary mb-2">{item.value}</h3>
                <p className="text-sm font-medium text-text-secondary">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
