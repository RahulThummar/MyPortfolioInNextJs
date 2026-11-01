"use client";

import { motion } from "framer-motion";
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
    skills: ["Advanced Software Engineering", "Cloud Systems", "Web Architecture"],
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
    skills: ["Data Structures & Algorithms", "OOP Principles", "Database Systems"],
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
    skills: ["Computer Science", "Mathematics", "Analytical Foundations"],
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Ambient Background Gradients (Preserving global background) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35], x: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[20%] w-[45%] h-[45%] rounded-full bg-accent/8 blur-[130px]"
        />
        <div className="absolute top-[10%] right-[10%] w-[35%] h-[35%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Pathway</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Academic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Background
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            The foundational academic training and computer application degrees that shaped my analytical mindset and software engineering principles.
          </p>
        </motion.div>

        {/* 3-Card Clean & Modern Equal-Height Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto items-stretch">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group relative rounded-[28px] p-6 sm:p-7 bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-accent/15 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle Watermark Year in Background */}
              <div className="absolute -top-3 -right-2 text-[80px] font-black text-slate-100/70 select-none pointer-events-none tracking-tighter transition-colors group-hover:text-accent/10">
                {edu.year}
              </div>

              {/* Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-accent/10 via-primary/5 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex-1 flex flex-col">
                {/* Top Row: Icon + Level Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${edu.gradient} text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-500`}
                  >
                    {idx === 0 ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : idx === 1 ? (
                      <BookOpen className="w-6 h-6" />
                    ) : (
                      <Award className="w-6 h-6" />
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-accent bg-accent/10 border border-accent/20">
                    <Sparkles className="w-3 h-3 text-accent" />
                    {edu.level}
                  </span>
                </div>

                {/* Degree & Short Title */}
                <div className="mb-3">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-accent transition-colors duration-300 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-bold text-primary mt-1">
                    {edu.institution}
                  </p>
                </div>

                {/* Period & Location Metadata */}
                <div className="flex flex-col gap-2 py-3 border-y border-slate-100 my-4 text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{edu.period}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Core Focus Pills */}
                <div className="mb-5 flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                    Key Academic Focus
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-0.5 rounded-full"
                      >
                        <Check className="w-2.5 h-2.5 text-emerald-500" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row: Score / Performance Badge */}
              <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Academic Score
                </span>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold shadow-2xs">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
