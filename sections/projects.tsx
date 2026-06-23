"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "JoinMyClass",
    description: "Interactive classroom platform with collaborative whiteboards, live classes, real-time communication, classroom challenges, and AI-assisted learning.",
    tech: ["Vue.js", "Socket.io", "WebRTC", "Fabric.js"],
    image: "/placeholder.svg",
    link: "https://joinmyclass.com",
    github: "#",
  },
  {
    title: "GoFrontrowLive",
    description: "Real-time language translation platform featuring an advanced interactive whiteboard for seamless global communication.",
    tech: ["Vue.js", "Socket.io", "Fabric.js"],
    image: "/placeholder.svg",
    link: "#",
    github: "#",
  },
  {
    title: "Symphony Cloud",
    description: "A comprehensive Management and Notification System (MNS) designed to streamline operations and complex data routing.",
    tech: ["Next.js", "TypeScript", "MQTT"],
    image: "/placeholder.svg",
    link: "#",
    github: "#",
  },
  {
    title: "StarProspect",
    description: "Professional business and lead management platform.",
    tech: ["React", "TypeScript", "Node.js"],
    image: "/placeholder.svg",
    link: "#",
    github: "#",
  },
  {
    title: "Sole Seriouss",
    description: "Modern eCommerce platform.",
    tech: ["Next.js", "Tailwind", "Stripe"],
    image: "/placeholder.svg",
    link: "https://soleseriouss.com/",
    github: "#",
  },
  {
    title: "StartUpGeeks",
    description: "Startup networking and project management platform.",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    image: "/placeholder.svg",
    link: "#",
    github: "#",
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full"
    >
      {children}
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden perspective-1000">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 text-primary">
                <FolderGit2 className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 tracking-tight">
                Featured <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Projects
                </span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A selection of my best technical work, highlighting my expertise in full-stack development, real-time systems, and complex UI engineering.
              </p>
            </motion.div>
          </div>

          {/* Right Content - Cards Grid */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  delay: (idx % 2) * 0.15
                }}
                className="h-full"
              >
                <TiltCard>
                  <div
                    style={{
                      transform: "translateZ(50px)",
                      transformStyle: "preserve-3d",
                    }}
                    className="bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden border border-border shadow-lg group h-full flex flex-col relative"
                  >
                    {/* Decorative background accent */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700 ease-out" />

                    {/* Hover Spotlight Effect */}
                    <motion.div
                      className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                      style={{
                        background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)"
                      }}
                    />

                    <div className="p-5 md:p-6 flex-1 flex flex-col bg-transparent relative z-10" style={{ transform: "translateZ(75px)" }}>
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-section border border-border flex items-center justify-center text-primary font-bold text-lg md:text-xl mb-5 md:mb-6 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 group-hover:rotate-12">
                        {project.title.charAt(0)}
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300 break-words">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-secondary mb-8 flex-1 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-section text-xs font-semibold text-text-secondary rounded-full border border-border group-hover:border-primary/30 transition-colors duration-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 mt-auto">
                        {project.link !== "#" && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-semibold text-white bg-primary px-4 py-2.5 rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                          >
                            Live Demo <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </a>
                        )}
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-semibold text-text-primary bg-section border border-border px-4 py-2.5 rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-sm"
                          >
                            GitHub <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}




