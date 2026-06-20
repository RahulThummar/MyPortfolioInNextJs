"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-16 md:py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto relative" ref={containerRef}>
          {/* Timeline Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-border rounded-full -translate-x-1/2 overflow-hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-primary origin-top"
            />
          </div>

          {/* Timeline Items */}
          {[
            {
              role: "React Js Developer",
              company: "AppWorld Infotech",
              period: "Oct 2023 - Present",
              location: "Surat, Gujarat, India · On-site",
              description: "Currently working as a Frontend Developer, where I’ve expanded my expertise in both React.js and Vue.js. Gained hands-on experience with Fabric.js for building interactive canvas-based applications, and continued to work with RESTful APIs, async operations, and advanced state management techniques. Also contributed to real-time features using Socket.io, focusing on building scalable and dynamic user interfaces.",
              badge: "Current"
            },
            {
              role: "React Js Developer",
              company: "Rentech Digital",
              period: "May 2022 - Sep 2023",
              location: "Surat, Gujarat, India · On-site",
              description: "Proficient in integrating RESTful APIs and handling async operations using Axios and Fetch. Skilled in advanced state management with Redux and Recoil, and experienced in optimizing React app performance through code splitting, lazy loading, and memoization.",
              badge: "Full-time"
            }
          ].map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full mb-12">
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-primary text-white shadow-lg z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 md:px-6">
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                    delay: idx * 0.2
                  }}
                  className="bg-white border border-border p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow group-hover:border-primary/30 relative"
                >
                  <div className="absolute top-6 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-border right-full md:hidden" />
                  <div className="hidden md:block absolute top-6 w-0 h-0 border-y-8 border-y-transparent group-odd:border-l-8 group-odd:border-l-border group-odd:left-full group-even:border-r-8 group-even:border-r-border group-even:right-full" />

                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {exp.period}
                    </span>
                    {exp.badge === "Current" && (
                      <span className="inline-block px-3 py-1 bg-green-500/10 text-green-600 text-xs font-semibold rounded-full">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-1">{exp.role}</h3>
                  <h4 className="text-sm font-semibold text-primary mb-2">{exp.company}</h4>
                  <p className="text-xs text-text-secondary font-medium mb-4 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    {exp.location}
                  </p>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {exp.description}
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
