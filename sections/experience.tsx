"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  ChevronDown,
  Layers,
  Code2,
  Workflow,
  Zap,
} from "lucide-react";

// Real-time duration calculation helper
function getDurationString(startDate: Date, endDate?: Date): string {
  const end = endDate || new Date();
  let years = end.getFullYear() - startDate.getFullYear();
  let months = end.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  }
  if (months > 0) {
    parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  }

  return parts.length > 0 ? parts.join(" ") : "1 mo";
}

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  url: string;
  period: string;
  duration: string;
  location: string;
  badge: "Current" | "Full-time";
  avatar: string;
  avatarBg: string;
  tagline: string;
  impacts: {
    title: string;
    description: string;
    icon: "canvas" | "realtime" | "framework" | "perf";
  }[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "appworld",
    role: "React.js Developer",
    company: "AppWorld Infotech",
    url: "https://appworldinfotech.com/",
    period: "Oct 2023 - Present",
    duration: "1 yr 5 mos+",
    location: "Surat, Gujarat, India · On-site",
    badge: "Current",
    avatar: "AW",
    avatarBg: "from-blue-600 to-indigo-600",
    tagline:
      "Spearheading interactive canvas platforms, low-latency WebSocket communication, and enterprise frontend architecture across React.js and Vue.js.",
    impacts: [
      {
        title: "Interactive Canvas Engine",
        description:
          "Architected interactive whiteboard and drawing tools using Fabric.js, delivering 60 FPS multi-user collaborative canvas rendering.",
        icon: "canvas",
      },
      {
        title: "Real-Time Collaboration",
        description:
          "Engineered ultra low-latency socket communication channels with Socket.io for synchronous multi-user states and live events.",
        icon: "realtime",
      },
      {
        title: "Cross-Framework Systems",
        description:
          "Expanded frontend capabilities across both React.js and Vue.js, integrating complex RESTful APIs and advanced asynchronous pipelines.",
        icon: "framework",
      },
      {
        title: "Scalable Enterprise UI",
        description:
          "Engineered modular, accessible, and high-performance user interfaces designed to handle high-concurrency enterprise workflows.",
        icon: "perf",
      },
    ],
    skills: ["React.js", "Vue.js", "Fabric.js", "Socket.io", "RESTful APIs", "State Management"],
  },
  {
    id: "rentech",
    role: "React.js Developer",
    company: "Rentech Digital",
    url: "https://rentechdigital.com/",
    period: "May 2022 - Sep 2023",
    duration: "1 yr 5 mos",
    location: "Surat, Gujarat, India · On-site",
    badge: "Full-time",
    avatar: "RD",
    avatarBg: "from-sky-600 to-cyan-500",
    tagline:
      "Engineered resilient React applications with centralized state architectures, robust RESTful API layers, and aggressive performance optimizations.",
    impacts: [
      {
        title: "RESTful API Integration",
        description:
          "Integrated high-volume RESTful APIs and asynchronous data flows using Axios and Fetch, handling error boundaries and interceptors.",
        icon: "framework",
      },
      {
        title: "Global State Architecture",
        description:
          "Architected dependable state layers using Redux and Recoil for predictable global state management across enterprise modules.",
        icon: "perf",
      },
      {
        title: "Performance Optimization",
        description:
          "Accelerated application load speed and reduced bundle sizes through strategic code splitting, lazy loading, and memoization.",
        icon: "perf",
      },
      {
        title: "Modular Component Patterns",
        description:
          "Designed clean, reusable component libraries following atomic design principles to ensure consistency across the application.",
        icon: "canvas",
      },
    ],
    skills: ["React", "Redux", "Recoil", "Axios", "Performance Optimization", "Code Splitting"],
  },
];

function ImpactIcon({ icon }: { icon: "canvas" | "realtime" | "framework" | "perf" }) {
  switch (icon) {
    case "canvas":
      return <Layers className="w-4 h-4 text-primary" />;
    case "realtime":
      return <Zap className="w-4 h-4 text-amber-500" />;
    case "framework":
      return <Code2 className="w-4 h-4 text-sky-500" />;
    case "perf":
    default:
      return <Workflow className="w-4 h-4 text-emerald-500" />;
  }
}

export function Experience() {
  const [expandedId, setExpandedId] = useState<string>("appworld");
  const [durations, setDurations] = useState<Record<string, string>>({
    appworld: "1 yr 5 mos+",
    rentech: "1 yr 5 mos",
  });
  const [totalYears, setTotalYears] = useState("4+");

  useEffect(() => {
    // Real-time calculation based on actual current date
    const appworldDur = getDurationString(new Date(2023, 9, 1)); // Oct 2023
    const rentechDur = getDurationString(new Date(2022, 4, 1), new Date(2023, 8, 30)); // May 2022 - Sep 2023

    const careerStart = new Date(2022, 4, 1);
    const now = new Date();
    const diffMonths =
      (now.getFullYear() - careerStart.getFullYear()) * 12 +
      (now.getMonth() - careerStart.getMonth());
    const computedTotalYears = Math.max(4, Math.floor(diffMonths / 12));

    setDurations({
      appworld: appworldDur,
      rentech: rentechDur,
    });
    setTotalYears(`${computedTotalYears}+`);
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Ambient Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.6, 0.35], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3], x: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[50%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[120px]"
        />
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Experience
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            A battle-tested track record across 4+ years of software engineering, delivering scalable web architectures, real-time collaboration engines, and interactive canvas platforms.
          </p>

          {/* Quick Experience Stat Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-600 shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{totalYears} Years of Professional Engineering Experience</span>
            <span className="text-slate-300">•</span>
            <span>Surat, Gujarat, India</span>
          </div>
        </motion.div>

        {/* Ultra-Sleek Interactive Accordion List (Linear / Vercel Style) */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            const isCurrent = exp.badge === "Current";

            return (
              <div
                key={exp.id}
                className={`rounded-[24px] sm:rounded-[28px] transition-all duration-300 overflow-hidden border ${
                  isExpanded
                    ? "bg-white/95 border-primary/40 shadow-xl shadow-primary/10 ring-2 ring-primary/10"
                    : "bg-white/80 hover:bg-white border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300"
                }`}
              >
                {/* Clickable Summary Row Header */}
                <button
                  type="button"
                  onClick={() => toggleExpand(exp.id)}
                  className="w-full p-5 sm:p-6 md:p-7 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  {/* Left Column: Monogram + Role + Company + Status Badge */}
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-12 w-12 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${exp.avatarBg} text-white font-extrabold text-base sm:text-lg shadow-sm`}
                    >
                      {exp.avatar}
                    </span>

                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                          {exp.role}
                        </h3>

                        {isCurrent ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 shadow-2xs">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            Present
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold text-slate-500 bg-slate-100 border border-slate-200">
                            Past Role
                          </span>
                        )}
                      </div>

                      <div className="text-sm font-bold text-primary flex items-center gap-1 mt-0.5">
                        <span>{exp.company}</span>
                        <span className="text-slate-400 font-normal">• {exp.location.split("·")[0].trim()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Time Period, Duration & Animated Chevron */}
                  <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pl-16 md:pl-0">
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{exp.period}</span>
                      </span>

                      <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md shadow-2xs">
                        {durations[exp.id] || exp.duration}
                      </span>
                    </div>

                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-slate-500 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 bg-primary/10 text-primary border-primary/20" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Deep-Dive Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 md:px-7 pb-6 sm:pb-7 pt-2 border-t border-slate-100">
                        {/* Tagline */}
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 pt-2">
                          {exp.tagline}
                        </p>

                        {/* 4 Architectural Impact Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
                          {exp.impacts.map((item, iIdx) => (
                            <div
                              key={iIdx}
                              className="p-3.5 sm:p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 shadow-2xs flex flex-col justify-between"
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <div className="p-1 rounded-md bg-white border border-slate-200 shadow-2xs">
                                  <ImpactIcon icon={item.icon} />
                                </div>
                                <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                                  {item.title}
                                </h4>
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Footer: Skills Tags & Visit Company Link */}
                        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-1.5">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-2xs"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {skill}
                              </span>
                            ))}
                          </div>

                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 hover:scale-105 active:scale-95 transition-all shrink-0 w-fit"
                          >
                            <span>Visit {exp.company}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
