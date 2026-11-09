"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Briefcase,
  Code,
  Terminal,
  Heart,
} from "lucide-react";

const achievements = [
  { icon: GraduationCap, title: "MCA Graduate", value: "2023" },
  { icon: Briefcase, title: "Years Experience", value: "4+" },
  { icon: Code, title: "Production Projects", value: "10+" },
  { icon: Terminal, title: "Developer Tool Creator", value: "1" },
  { icon: Heart, title: "Open Source Enthusiast", value: "100%" },
];

// Each card enters from a different direction.
const cardAnimations = [
  {
    hidden: { opacity: 0, x: -110, y: 20, rotate: -12, scale: 0.82 },
    visible: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
  },
  {
    hidden: { opacity: 0, x: 0, y: 100, rotate: 8, scale: 0.8 },
    visible: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
  },
  {
    hidden: { opacity: 0, x: 0, y: -100, rotate: -8, scale: 0.82 },
    visible: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
  },
  {
    hidden: { opacity: 0, x: 110, y: 20, rotate: 12, scale: 0.82 },
    visible: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
  },
  {
    hidden: { opacity: 0, x: -75, y: 90, rotate: -18, scale: 0.72 },
    visible: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
  },
];

export function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.18,
    margin: "-80px 0px -80px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="achievements"
      className="relative bg-transparent py-16 md:py-24"
    >
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">
            Milestones &amp; Achievements
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        {/* Achievement cards */}
        <div
          ref={ref}
          className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5"
        >
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            const animation = cardAnimations[idx];

            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? false : animation.hidden}
                animate={
                  shouldReduceMotion
                    ? animation.visible
                    : isInView
                      ? animation.visible
                      : animation.hidden
                }
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -9,
                        scale: 1.045,
                        transition: {
                          duration: 0.25,
                          ease: "easeOut",
                        },
                      }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.75,
                  ease: [0.22, 1, 0.36, 1],
                  delay: shouldReduceMotion ? 0 : idx * 0.12,
                }}
                className="group flex flex-col items-center rounded-3xl border border-border bg-white/90 p-6 text-center shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mb-2 text-3xl font-bold text-text-primary">
                  {item.value}
                </h3>

                <p className="text-sm font-medium text-text-secondary">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
