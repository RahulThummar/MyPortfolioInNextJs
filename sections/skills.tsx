"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Vue.js", "JavaScript", "TypeScript"],
  },
  {
    title: "Styling & Design",
    skills: ["HTML", "CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Realtime & Protocols",
    skills: ["WebRTC", "Socket.io", "MQTT", "Mediasoup", "Live Captioning", "Collaborative Whiteboards"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Postman"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
                <span className="w-2 h-6 bg-primary rounded-full mr-3"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={item}
                    className="px-4 py-2 bg-section text-text-secondary rounded-full text-sm font-medium border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
