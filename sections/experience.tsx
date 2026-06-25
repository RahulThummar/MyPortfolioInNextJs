"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "React Js Developer",
      company: "AppWorld Infotech",
      url: "https://appworldinfotech.com/",
      period: "Oct 2023 - Present",
      location: "Surat, Gujarat, India · On-site",
      description: "Currently working as a Frontend Developer, where I’ve expanded my expertise in both React.js and Vue.js. Gained hands-on experience with Fabric.js for building interactive canvas-based applications, and continued to work with RESTful APIs, async operations, and advanced state management techniques. Also contributed to real-time features using Socket.io, focusing on building scalable and dynamic user interfaces.",
      badge: "Current",
      skills: ["React.js", "Vue.js", "Fabric.js", "Socket.io", "RESTful APIs"]
    },
    {
      role: "React Js Developer",
      company: "Rentech Digital",
      url: "https://rentechdigital.com/",
      period: "May 2022 - Sep 2023",
      location: "Surat, Gujarat, India · On-site",
      description: "Proficient in integrating RESTful APIs and handling async operations using Axios and Fetch. Skilled in advanced state management with Redux and Recoil, and experienced in optimizing React app performance through code splitting, lazy loading, and memoization.",
      badge: "Full-time",
      skills: ["React", "Redux", "Recoil", "Axios", "Performance Optimization"]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3], x: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[120px]" 
        />
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
                <Briefcase className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 tracking-tight">
                Professional <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Experience
                </span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                My journey through the tech industry, building scalable applications and creating impactful user experiences.
              </p>
            </motion.div>
          </div>

          {/* Right Content - Cards */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white border border-border/50 rounded-3xl p-6 md:p-10 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 mb-2 md:mb-3 flex-wrap">
                        <h3 className="text-xl md:text-2xl font-bold text-text-primary break-words">{exp.role}</h3>
                        {exp.badge === "Current" && (
                          <span className="inline-flex animate-pulse items-center px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full shrink-0">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-lg md:text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                        {exp.url ? (
                          <a href={exp.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            {exp.company}
                            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                          </a>
                        ) : (
                          <>
                            {exp.company}
                            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm font-medium text-text-secondary shrink-0">
                      <div className="flex items-center gap-2 md:justify-end bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <Calendar className="w-4 h-4 text-primary" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 md:justify-end bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <MapPin className="w-4 h-4 text-primary" />
                        {exp.location.split('·')[0].trim()}
                      </div>
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full border border-primary/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}




