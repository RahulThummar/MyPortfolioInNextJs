"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Sparkles,
  Check,
} from "lucide-react";

interface EducationItem {
  id: string;
  degree: string;
  shortDegree: string;
  level: string;
  institution: string;
  period: string;
  year: string;
  location: string;
  score: string;
  scoreType: string;
  gradient: string;
  skills: string[];
}

const educationList: EducationItem[] = [
  {
    id: "mca",
    degree: "Master of Computer Application",
    shortDegree: "MCA",
    level: "Postgraduate Degree",
    institution: "Jain University",
    period: "2022 - 2024",
    year: "2024",
    location: "Bangalore, India",
    score: "7.70 CGPA",
    scoreType: "First Class Distinction",
    gradient: "from-blue-600 to-indigo-600",
    skills: [
      "Advanced Software Engineering",
      "Cloud Systems",
      "Web Architecture",
    ],
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Application",
    shortDegree: "BCA",
    level: "Undergraduate Degree",
    institution: "RK University",
    period: "2019 - 2022",
    year: "2022",
    location: "Rajkot, Gujarat",
    score: "7.75 CGPA",
    scoreType: "First Class Distinction",
    gradient: "from-sky-600 to-cyan-500",
    skills: [
      "Data Structures & Algorithms",
      "OOP Principles",
      "Database Systems",
    ],
  },
  {
    id: "hsc",
    degree: "12th Higher Secondary Certificate",
    shortDegree: "12th HSC",
    level: "Higher Secondary Board",
    institution: "Gujarat Higher Secondary Education Board",
    period: "2018 - 2019",
    year: "2019",
    location: "Surat, Gujarat",
    score: "73.71%",
    scoreType: "Higher Secondary Board",
    gradient: "from-amber-600 to-orange-500",
    skills: [
      "Computer Science",
      "Mathematics",
      "Analytical Foundations",
    ],
  },
];

// Each education card has its own entrance and exit direction.
const cardAnimations = [
  {
    hidden: {
      opacity: 0,
      x: -120,
      y: 25,
      rotate: -8,
      scale: 0.88,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    },
  },
  {
    hidden: {
      opacity: 0,
      x: 0,
      y: 110,
      rotate: 5,
      scale: 0.86,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    },
  },
  {
    hidden: {
      opacity: 0,
      x: 120,
      y: 25,
      rotate: 8,
      scale: 0.88,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    },
  },
];

export function Education() {
  const gridRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(gridRef, {
    once: false,
    amount: 0.15,
    margin: "-70px 0px -70px 0px",
  });

  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Decorative ambient background */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? { scale: 1, opacity: 0.35, x: 0 }
              : {
                  scale: [1, 1.25, 1],
                  opacity: [0.35, 0.6, 0.35],
                  x: [0, -20, 0],
                }
          }
          transition={{
            duration: 14,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] left-[20%] h-[45%] w-[45%] rounded-full bg-accent/8 blur-[130px]"
        />
        <div className="absolute right-[10%] top-[10%] h-[35%] w-[35%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Academic Pathway</span>
          </div>

          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Academic{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Background
            </span>
          </h2>

          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            The foundational academic training and computer application
            degrees that shaped my analytical mindset and software engineering
            principles.
          </p>
        </motion.div>

        {/* Animated education cards */}
        <div
          ref={gridRef}
          className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-3 sm:gap-7"
        >
          {educationList.map((edu, idx) => {
            const animation = cardAnimations[idx];
            const Icon =
              idx === 0
                ? GraduationCap
                : idx === 1
                  ? BookOpen
                  : Award;

            return (
              <motion.article
                key={edu.id}
                initial={
                  shouldReduceMotion ? false : animation.hidden
                }
                animate={
                  shouldReduceMotion
                    ? animation.visible
                    : isInView
                      ? animation.visible
                      : animation.hidden
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.85,
                  delay: shouldReduceMotion ? 0 : idx * 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -9,
                        scale: 1.02,
                        transition: {
                          duration: 0.25,
                          ease: "easeOut",
                        },
                      }
                }
                className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-slate-200/90 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-shadow duration-500 hover:shadow-2xl hover:shadow-accent/15 sm:p-7"
              >
                {/* Watermark year */}
                <div className="pointer-events-none absolute -right-2 -top-3 select-none text-[80px] font-black tracking-tighter text-slate-100/70 transition-colors duration-500 group-hover:text-accent/10">
                  {edu.year}
                </div>

                {/* Hover glow */}
                <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-gradient-to-bl from-accent/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-1 flex-col">
                  {/* Icon and degree level */}
                  <div className="mb-5 flex items-center justify-between gap-2">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${edu.gradient} text-white shadow-md shadow-primary/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-bold text-accent">
                      <Sparkles className="h-3 w-3" />
                      {edu.level}
                    </span>
                  </div>

                  {/* Degree and institution */}
                  <div className="mb-3">
                    <h3 className="text-xl font-extrabold leading-snug tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-primary">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Period and location */}
                  <div className="my-4 flex flex-col gap-2 border-y border-slate-100 py-3 text-xs font-semibold text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 shrink-0 text-accent" />
                      <span>{edu.period}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Academic focus */}
                  <div className="mb-5 flex-1">
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Key Academic Focus
                    </span>

                    <div className="flex flex-wrap gap-1.5">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-600"
                        >
                          <Check className="h-2.5 w-2.5 text-emerald-500" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Score */}
                <div className="relative z-10 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-medium text-slate-500">
                    Academic Score
                  </span>

                  <div className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700 shadow-2xs">
                    <Award className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{edu.score}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
