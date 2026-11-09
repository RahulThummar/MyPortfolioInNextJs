"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as RPointerEvent, ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

/* ---------- Magnetic wrapper (was ./ui/magnetic) ---------- */

function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.2 });

  function onMove(e: RPointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !boxRef.current) return;
    const r = boxRef.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={boxRef}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

const titles = [
  "React.js Developer",
  "Next.js Developer",
  "Frontend Engineer",
  "MCA Graduate",
  "Open Source Builder",
];

const NAME = ["Rahul", "Thummar"];
const ease = [0.22, 1, 0.36, 1] as const;

/* ---------- Word reveal: same mask-and-rise effect as the name ---------- */

function RevealWords({
  text,
  delay = 0,
  step = 0.03,
  className = "",
}: {
  text: string;
  delay?: number;
  step?: number;
  className?: string;
}) {
  return (
    <p aria-label={text} className={className}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          aria-hidden
          // extra bottom padding + negative margin keeps g, p, y from being clipped by the mask
          className="mr-[0.25em] -mb-[0.25em] inline-block overflow-hidden pb-[0.25em] align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease, delay: delay + i * step }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
}


export function Hero() {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);

  // The video drifts slower than the page and the copy fades as you leave.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % titles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex h-[100dvh] min-h-[600px] w-full select-none items-center overflow-hidden bg-slate-950"
    >
      {/* Background video */}
      <motion.div
        style={{ y: videoY }}
        className="pointer-events-none absolute inset-x-0 -inset-y-[8%]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-center opacity-85"
        >
          <source src="/video/Hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Legibility overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/50" />
      <div className="pointer-events-none absolute left-10 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[140px]" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.35) 80%, #FFFFFF 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16"
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="mb-3 text-lg font-medium text-cyan-300 sm:text-xl"
          >
            Hello, I&apos;m <span className="wave inline-block">👋</span>
          </motion.p>

          {/* Name: each letter rises out of its own mask */}
          <h1
            aria-label="Rahul Thummar"
            className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            {NAME.map((word, w) => (
              <span key={word} aria-hidden className="mr-[0.25em] inline-block whitespace-nowrap">
                {word.split("").map((ch, c) => (
                  <span key={c} className="inline-block overflow-hidden pb-[0.06em] align-bottom">
                    <motion.span
                      className="inline-block"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, ease, delay: 0.25 + (w * 6 + c) * 0.045 }}
                    >
                      {ch}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </h1>

          {/* Rotating role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-4 flex flex-wrap items-baseline gap-x-3 text-xl font-semibold text-slate-300 sm:text-3xl"
          >
            <span>A passionate</span>
            <span className="relative inline-flex h-[1.35em] overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.38, ease }}
                  className="block whitespace-nowrap font-bold text-cyan-300"
                >
                  {titles[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <RevealWords
            delay={1.0}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl"
            text="I architect and develop high-performance, scalable web platforms. Specializing in the React & Next.js ecosystem, real-time collaboration engines, interactive canvas with Fabric.js, and modern frontend architecture."
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 1.9 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-primary/40 transition-colors hover:bg-primary/90 sm:text-base"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-xl transition-colors hover:bg-white/20 sm:text-base"
              >
                <Send className="mr-2 h-4 w-4 text-cyan-300" />
                Get in Touch
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div aria-hidden className="absolute bottom-10 left-6 z-10 hidden h-12 w-px bg-white/20 sm:left-10 sm:block lg:left-16">
        <motion.span
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-[2px] top-0 h-1.5 w-1.5 rounded-full bg-cyan-300"
        />
      </div>
    </section>
  );
}