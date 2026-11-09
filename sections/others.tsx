"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useRef } from "react";
import { Award, Activity, CheckCircle2, Sparkles } from "lucide-react";

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

const panelAnimations = [
  {
    hidden: { opacity: 0, x: -100, y: 25, rotate: -5, scale: 0.94 },
    visible: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
  },
  {
    hidden: { opacity: 0, x: 100, y: 25, rotate: 5, scale: 0.94 },
    visible: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
  },
];

const listContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.16,
    },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -18, y: 8 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Others() {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
    margin: "-70px 0px -70px 0px",
  });

  const shouldReduceMotion = useReducedMotion();

  const renderList = (items: string[], accent: "blue" | "cyan") => (
    <motion.ul
      variants={listContainer}
      initial="hidden"
      animate={isInView || shouldReduceMotion ? "visible" : "hidden"}
      className="space-y-3"
    >
      {items.map((item, idx) => (
        <motion.li
          key={item}
          variants={listItem}
          className="group/item flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3.5 transition-all duration-300 hover:border-sky-200 hover:bg-white hover:shadow-md hover:shadow-sky-100/70"
        >
          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
              accent === "blue"
                ? "bg-blue-100 text-blue-600"
                : "bg-cyan-100 text-cyan-700"
            }`}
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm font-medium leading-6 text-slate-600 transition-colors group-hover/item:text-slate-900">
            {item}
          </span>
          <span className="ml-auto pt-1 font-mono text-[10px] text-slate-300">
            0{idx + 1}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );

  return (
    <section
      id="others"
      className="relative overflow-hidden bg-transparent py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-28 top-1/4 h-80 w-80 rounded-full bg-blue-100/40 blur-[110px]" />
        <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-[110px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center md:mb-16"
        >

          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Certifications{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              &amp; Activities
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Continuous learning, hands-on exploration, and experiences that
            shape my growth as a developer.
          </p>
        </motion.div>

        {/* Animated panels */}
        <div
          ref={ref}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-7 md:grid-cols-2 md:gap-8"
        >
          {/* Certificates panel: enters from left */}
          <motion.article
            initial={
              shouldReduceMotion ? false : panelAnimations[0].hidden
            }
            animate={
              shouldReduceMotion
                ? panelAnimations[0].visible
                : isInView
                  ? panelAnimations[0].visible
                  : panelAnimations[0].hidden
            }
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -6, transition: { duration: 0.25 } }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-shadow duration-500 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/70 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-100/70 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-7 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 transition-transform duration-500 group-hover:rotate-[-7deg] group-hover:scale-110">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Certificates
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Courses &amp; certifications
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-700">
                  0{certificates.length} ITEMS
                </span>
              </div>

              {renderList(certificates, "blue")}
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-full" />
          </motion.article>

          {/* Activities panel: enters from right */}
          <motion.article
            initial={
              shouldReduceMotion ? false : panelAnimations[1].hidden
            }
            animate={
              shouldReduceMotion
                ? panelAnimations[1].visible
                : isInView
                  ? panelAnimations[1].visible
                  : panelAnimations[1].hidden
            }
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -6, transition: { duration: 0.25 } }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-shadow duration-500 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-100/70 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-100/70 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <div className="mb-7 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/20 transition-transform duration-500 group-hover:rotate-[7deg] group-hover:scale-110">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Co-curricular Activities
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Workshops &amp; experiences
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-[10px] font-bold text-cyan-700">
                  0{activities.length} ITEMS
                </span>
              </div>

              {renderList(activities, "cyan")}
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 to-teal-400 transition-all duration-500 group-hover:w-full" />
          </motion.article>
        </div>
      </div>
    </section>
  );
}
