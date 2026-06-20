"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "CTO at EduTech",
    content: "Rahul's work on our collaborative whiteboard was exceptional. His expertise in React and WebRTC brought our vision to life with incredible performance and stability.",
    image: "/placeholder.svg"
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    content: "One of the most dedicated frontend engineers I've worked with. Rahul doesn't just write code; he understands the user experience and builds products that people love to use.",
    image: "/placeholder.svg"
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    content: "CodeUtils.tech is a lifesaver. It's clear that Rahul knows what developers need and knows how to build tools that are fast, reliable, and beautifully designed.",
    image: "/placeholder.svg"
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-section relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">What People Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-8 bg-white/50 backdrop-blur-xl border border-border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                <Quote className="w-5 h-5 fill-white" />
              </div>
              
              <div className="mb-6 pt-4 text-text-secondary leading-relaxed italic">
                "{t.content}"
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-section border border-border flex items-center justify-center text-primary font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">{t.name}</h4>
                  <p className="text-sm text-text-secondary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
