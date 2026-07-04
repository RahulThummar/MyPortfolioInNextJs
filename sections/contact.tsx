"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 bg-section p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-border shadow-xl">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-text-primary">Contact Information</h3>

            <div className="space-y-6">
              <motion.a
                whileHover={{ scale: 1.02, x: 5 }}
                href="mailto:rahul.thummar327@gmail.com"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Email</p>
                  <p className="text-text-primary font-medium group-hover:text-primary transition-colors break-all">rahul.thummar327@gmail.com</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Location</p>
                  <p className="text-text-primary font-medium group-hover:text-primary transition-colors">Surat, Gujarat, India</p>
                </div>
              </motion.div>
            </div>

          </motion.div>

          {/* Right: Map */}
          <div className="bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 p-2 rounded-3xl border border-border shadow-sm h-full min-h-[300px] overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Surat&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              width="100%" height="100%" frameBorder="0" style={{ border: 0, minHeight: '300px', borderRadius: '1.25rem' }}
              allowFullScreen={true} aria-hidden="false" tabIndex={0}></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}




