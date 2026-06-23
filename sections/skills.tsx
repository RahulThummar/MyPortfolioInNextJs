"use client";

import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, Layers, Wrench, Globe } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <MonitorSmartphone className="w-6 h-6 text-accent" />,
      skills: ["React.js", "Next.js", "Vue.js", "JavaScript", "TypeScript"],
    },
    {
      title: "Realtime & Protocols",
      icon: <Globe className="w-6 h-6 text-accent" />,
      skills: ["WebRTC", "Socket.io", "MQTT", "Mediasoup", "Live Captioning", "Collaborative Whiteboards"],
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-6 h-6 text-accent" />,
      skills: ["Git", "GitHub", "VS Code", "Vercel", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24">
          
          {/* Right Sticky Header (reversed layout) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-2xl mb-6 text-accent">
                <Code2 className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 tracking-tight">
                Technical <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                  Skills
                </span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A comprehensive toolkit of languages, frameworks, and technologies I use to build scalable, high-performance applications.
              </p>
            </motion.div>
          </div>

          {/* Left Content - Cards */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative bg-white border border-border/50 rounded-3xl p-6 md:p-10 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 overflow-hidden"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-bl from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6 md:mb-8 border-b border-border/50 pb-5 md:pb-6">
                    <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                      {category.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300 break-words">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-4 py-2 bg-slate-50 text-text-secondary rounded-xl text-sm font-semibold border border-slate-200 group-hover:border-accent/20 group-hover:bg-accent/5 group-hover:text-accent transition-colors duration-300"
                      >
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




