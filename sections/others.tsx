"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Award, Activity } from "lucide-react";

const certificates = [
  "C and C++ Course In Sololearn",
  "C++ Course in Udemy",
  "HTML Course in Sololearn",
];

const activities = [
  "Participated in Github Workshop",
  "Participated in Galore",
  "Spark AR Effect",
];

export function Others() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemAnim: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="others" className="py-16 md:py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Certifications & Activities</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Certificates */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="bg-section p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                <Award className="w-5 h-5" />
              </div>
              Certificates
            </h3>
            <ul className="space-y-4">
              {certificates.map((cert, idx) => (
                <motion.li
                  key={idx}
                  variants={itemAnim}
                  className="flex items-start"
                >
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span className="text-text-secondary font-medium">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Activities */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="bg-section p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                <Activity className="w-5 h-5" />
              </div>
              Co-curricular Activities
            </h3>
            <ul className="space-y-4">
              {activities.map((activity, idx) => (
                <motion.li
                  key={idx}
                  variants={itemAnim}
                  className="flex items-start"
                >
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span className="text-text-secondary font-medium">{activity}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
