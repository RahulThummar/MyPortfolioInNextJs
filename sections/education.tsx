"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export function Education() {
  const educationList = [
    {
      institution: "Jain University",
      period: "2022 - 2024",
      location: "Bangalore",
      degree: "Master of Computer Application",
      score: "CGPA: 7.70",
    },
    {
      institution: "RK University",
      period: "2019 - 2022",
      location: "Rajkot",
      degree: "Bachelor of Computer Application",
      score: "CGPA: 7.75",
    },
    {
      institution: "Gujarat Higher Secondary Education Board",
      period: "2018 - 2019",
      location: "Surat",
      degree: "12th HSC",
      score: "Percentage: 73.71%",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24">
          
          {/* Right Sticky Header (reversed for alternating layout) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-2xl mb-6 text-accent">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 tracking-tight">
                Academic <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                  Background
                </span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                The educational foundation that paved the way for my analytical thinking and software engineering principles.
              </p>
            </motion.div>
          </div>

          {/* Left Content - Cards */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            {educationList.map((edu, idx) => (
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
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300 break-words">
                        {edu.degree}
                      </h3>
                      <div className="text-base md:text-lg font-semibold text-text-secondary mb-2">
                        {edu.institution}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm font-medium text-text-secondary shrink-0">
                      <div className="flex items-center gap-2 md:justify-end bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <Calendar className="w-4 h-4 text-accent" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2 md:justify-end bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <MapPin className="w-4 h-4 text-accent" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 rounded-xl border border-accent/10 text-accent font-semibold">
                    <Award className="w-5 h-5" />
                    {edu.score}
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




