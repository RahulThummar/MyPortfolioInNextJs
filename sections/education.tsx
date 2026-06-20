"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const educationList = [
    {
      institution: "Jain University",
      period: "2022 - 2024",
      location: "Bangalore",
      degree: "Master of Computer Application",
      score: "CGPA: 7.70",
    },
    {
      institution: "RK University",
      period: "2019 - 2022",
      location: "Rajkot",
      degree: "Bachelor of Computer Application",
      score: "CGPA: 7.75",
    },
    {
      institution: "Gujarat Higher Secondary Education Board",
      period: "2018 - 2019",
      location: "Surat",
      degree: "12th HSC",
      score: "Percentage : 73.71",
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative" ref={containerRef}>
          {/* Timeline Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-border rounded-full -translate-x-1/2 overflow-hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-primary origin-top"
            />
          </div>

          {educationList.map((edu, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group w-full mb-12">
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-primary text-white shadow-lg z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 md:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 border border-border p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow group-hover:border-primary/30 relative"
                >
                  <div className="absolute top-6 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-border right-full md:hidden" />
                  <div className="hidden md:block absolute top-6 w-0 h-0 border-y-8 border-y-transparent group-odd:border-r-8 group-odd:border-r-border group-odd:right-full group-even:border-l-8 group-even:border-l-border group-even:left-full" />

                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary mb-1">{edu.degree}</h3>
                  <h4 className="text-sm font-medium text-text-secondary mb-3">{edu.institution}, {edu.location}</h4>

                  <p className="text-sm text-text-secondary font-medium">
                    {edu.score}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}




