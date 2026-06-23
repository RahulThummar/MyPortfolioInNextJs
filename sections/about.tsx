"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Terminal } from "lucide-react";

export function About() {
  const stats = [
    { value: "3.5+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px]" 
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
                <User className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 tracking-tight">
                About <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Me
                </span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A passionate web developer dedicated to building responsive, user-friendly, and modern web applications.
              </p>
            </motion.div>
          </div>

          {/* Right Content - Cards */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-border/50 rounded-3xl p-6 md:p-10 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl relative bg-section flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Image src="/images/mpic.jpg" alt="Rahul Thummar" fill className="object-cover" />
                </div>
                <div className="flex-1 text-center sm:text-left min-w-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2 break-words">Rahul Thummar</h3>
                  <p className="text-primary font-medium mb-6">Surat, Gujarat</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 border-t border-border/50 pt-6">
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold mb-1">Experience</p>
                      <p className="text-text-primary font-bold">{stats[0].value}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold mb-1">Education</p>
                      <p className="text-text-primary font-bold">MCA</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold mb-1">Projects</p>
                      <p className="text-text-primary font-bold">{stats[1].value}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-border/50 rounded-3xl p-6 md:p-10 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <Terminal className="w-8 h-8 text-primary/40 mb-6" />
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  I am a passionate web developer skilled in React.js, Next.js, and modern web technologies. With experience in projects like JoinMyClass and StarProspect, I create responsive, user-friendly applications. I am an enthusiastic, self-motivated, and reliable person who is eager to grow and contribute effectively. I am able to work well both in a team environment as well as using own initiative.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}




