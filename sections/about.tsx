"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "3.5+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <motion.div 
                className="relative group"
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 border border-border p-6 sm:p-8 rounded-3xl flex flex-col gap-6 overflow-hidden">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-full overflow-hidden border-2 border-primary/20 shadow-md relative bg-section flex items-center justify-center">
                      <Image src="/images/mpic.jpg" alt="Rahul Thummar" fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary break-words">Rahul Thummar</h3>
                      <p className="text-text-secondary">Surat, Gujarat</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-text-secondary uppercase tracking-wider font-semibold">Experience</p>
                      <p className="text-text-primary font-medium">3.5+ Years</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary uppercase tracking-wider font-semibold">Education</p>
                      <p className="text-text-primary font-medium">Master of Computer Applications (MCA)</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Text & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="space-y-8"
            >
              <p className="text-lg text-text-secondary leading-relaxed">
                I am a passionate web developer skilled in React.js, Next.js, and modern web technologies. With experience in projects like JoinMyClass and StarProspect, I create responsive, user-friendly applications. I am an enthusiastic, self-motivated, and reliable person who is eager to grow and contribute effectively. I am able to work well both in a team environment as well as using own initiative.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-border text-center hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all cursor-default"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-text-secondary font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




