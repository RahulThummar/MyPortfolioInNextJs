"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, FolderGit2 } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
}

const projects: ProjectItem[] = [
  {
    title: "JoinMyClass",
    description:
      "Interactive classroom platform with collaborative whiteboards, live classes, real-time communication, classroom challenges, and AI-assisted learning.",
    tech: ["Vue.js", "Socket.io", "WebRTC", "Fabric.js"],
    link: "https://joinmyclass.com",
    github: "#",
  },
  {
    title: "GoFrontrowLive",
    description:
      "Real-time language translation platform featuring an advanced interactive whiteboard for seamless global communication.",
    tech: ["Vue.js", "Socket.io", "Fabric.js"],
    link: "#",
    github: "#",
  },
  {
    title: "Symphony Cloud",
    description:
      "A comprehensive Management and Notification System (MNS) designed to streamline operations and complex data routing.",
    tech: ["Next.js", "TypeScript", "MQTT"],
    link: "#",
    github: "#",
  },
  {
    title: "StarProspect",
    description: "Professional business and lead management platform.",
    tech: ["React", "TypeScript", "Node.js"],
    link: "#",
    github: "#",
  },
  {
    title: "Sole Seriouss",
    description: "Modern eCommerce platform.",
    tech: ["Next.js", "Tailwind", "Stripe"],
    link: "https://soleseriouss.com/",
    github: "#",
  },
  {
    title: "StartUpGeeks",
    description: "Startup networking and project management platform.",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
];

function ProjectCard({
  project,
  idx,
  total,
  activeCard,
}: {
  project: ProjectItem;
  idx: number;
  total: number;
  activeCard: number;
}) {
  const isStackedBehind = idx < activeCard;
  const isFirstCard = idx === 0;
  const isActive = idx === activeCard;
  const diff = Math.max(0, activeCard - idx);

  // Layered elevation shadow for clean light background
  const cardShadow = isFirstCard
    ? isActive
      ? "0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 20px 40px -10px rgba(15, 23, 42, 0.05)"
      : "0 4px 12px -2px rgba(15, 23, 42, 0.05)"
    : isStackedBehind
      ? "0 4px 15px -3px rgba(15, 23, 42, 0.04)"
      : "0 -4px 20px -2px rgba(15, 23, 42, 0.06), 0 20px 40px -10px rgba(15, 23, 42, 0.08)";

  return (
    <div
      id={`project-${idx}`}
      className="sticky w-full transition-all duration-500 will-change-transform pb-8 sm:pb-12 md:pb-14"
      style={{
        top: `clamp(${65 + idx * 14}px, calc(60px + ${idx * 16}px), ${75 + idx * 18}px)`,
        zIndex: idx + 1,
        transform: isStackedBehind
          ? `scale(${Math.max(0.92, 1 - diff * 0.02)}) translateY(-${diff * 6}px)`
          : "scale(1) translateY(0px)",
        opacity: isStackedBehind ? Math.max(0.8, 1 - diff * 0.06) : 1,
        transformOrigin: "top center",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <div
        className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[20px] sm:rounded-[24px] bg-white border border-slate-200/90 transition-all duration-500"
        style={{
          boxShadow: cardShadow,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 p-5 sm:p-6 md:p-7">
          {/* Left Column: Project Title, Number & Description */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              {/* Header with Initial badge and 01 / 06 Counter */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white font-extrabold text-base sm:text-lg shadow-sm">
                    {project.title.charAt(0)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                      Project {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <span className="font-mono text-xs font-bold tracking-widest text-slate-400">
                  {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>

              {/* Description */}
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Right Column: Tech Stack & Action Links */}
          <div className="md:col-span-5 flex flex-col justify-between rounded-2xl bg-slate-50/90 border border-slate-200/80 p-4 sm:p-5 gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Technologies
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-2xs"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center flex-wrap gap-2.5 pt-3 border-t border-slate-200/70 mt-auto">
              {project.link !== "#" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold text-white bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                >
                  Live Demo
                  <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-medium text-slate-500 bg-slate-200/60">
                  Client Project
                </span>
              )}

              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-slate-700 hover:text-slate-900 px-3.5 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-2xs"
                >
                  GitHub
                  <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeCard, setActiveCard] = useState(0);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        const container = cardsContainerRef.current;
        if (!container) return;
        const cards = container.querySelectorAll<HTMLElement>('[id^="project-"]');
        if (!cards || cards.length === 0) return;

        let currentActive = 0;
        cards.forEach((card, idx) => {
          const rect = card.getBoundingClientRect();
          const computedTop = parseFloat(window.getComputedStyle(card).top) || (65 + idx * 14);
          if (rect.top <= computedTop + 8) {
            currentActive = idx;
          }
        });

        setActiveCard((prev) => (prev !== currentActive ? currentActive : prev));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-visible">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[50%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Projects
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A selection of my best technical work, highlighting my expertise in full-stack development,
            real-time systems, and complex UI engineering.
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div ref={cardsContainerRef} className="relative pb-16 sm:pb-24">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              idx={idx}
              total={projects.length}
              activeCard={activeCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
