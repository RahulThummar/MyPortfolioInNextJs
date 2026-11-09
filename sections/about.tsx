"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";

/* ---------- Count-up number (was ./ui/counter) ---------- */

function Counter({ to, suffix = "", duration = 1.4 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

/* ---------- Section heading (was ./ui/section-heading) ---------- */

const ease = [0.22, 1, 0.36, 1] as const;
const once = { once: true, margin: "-80px" } as const;

function SectionHeading({ title, description }: { title: string; description?: string }) {
  const reduce = useReducedMotion();
  return (
    <header className="max-w-3xl">
      <h2 className="text-4xl font-extrabold leading-[1] tracking-tight text-text-primary md:text-6xl">
        <span className="block overflow-hidden pb-2">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={once}
            transition={{ duration: 0.8, ease }}
          >
            {title}
          </motion.span>
        </span>
      </h2>

      <motion.div
        aria-hidden
        className="mt-5 h-px w-full origin-left bg-border"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={once}
        transition={{ duration: 1, delay: 0.15, ease }}
      />

      {description && (
        <motion.p
          className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={once}
          transition={{ duration: 0.7, delay: 0.25, ease }}
        >
          {description}
        </motion.p>
      )}
    </header>
  );
}

const BIO =
  "I am a passionate web developer skilled in React.js, Next.js, and modern web technologies. With experience in projects like JoinMyClass and StarProspect, I create responsive, user-friendly applications. I am an enthusiastic, self-motivated, and reliable person who is eager to grow and contribute effectively. I am able to work well both in a team environment as well as using own initiative.";

const HIGHLIGHTS = new Set(["React.js", "Next.js", "JoinMyClass", "StarProspect"]);

/* ---------- Scroll-scrubbed bio: words light up as you read down the page ---------- */

function Word({
  word,
  range,
  progress,
  highlight,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
  highlight: boolean;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="mr-[0.26em] inline-block">
      <motion.span
        style={{ opacity }}
        className={highlight ? "font-semibold text-primary" : "text-text-primary"}
      >
        {word}
      </motion.span>
    </span>
  );
}

function ScrubbedBio({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });
  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className="text-2xl md:text-3xl font-medium leading-snug tracking-tight"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word
            key={i}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
            highlight={HIGHLIGHTS.has(word.replace(/[,.]+$/, ""))}
          />
        );
      })}
    </p>
  );
}

/* ---------- Portrait that tilts toward the cursor ---------- */

function TiltPortrait() {
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springX = useSpring(rx, { stiffness: 140, damping: 16 });
  const springY = useSpring(ry, { stiffness: 140, damping: 16 });

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 14);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 14);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ perspective: 1100 }}
      className="mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:mx-0 lg:max-w-[320px]"
    >
      <motion.div
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 bg-section shadow-xl shadow-slate-300/40">
          <Image
            src="/images/mpic.jpg"
            alt="Rahul Thummar"
            fill
            sizes="(min-width: 1024px) 320px, 300px"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Chips sit in front of the photo so they shift against it as it tilts */}
        <div
          style={{ transform: "translateZ(60px)" }}
          className="absolute -bottom-5 left-5 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-text-primary shadow-lg shadow-slate-300/50"
        >
          <MapPin className="h-4 w-4 text-primary" aria-hidden />
          Surat, Gujarat
        </div>
        <div
          style={{ transform: "translateZ(40px)" }}
          className="absolute -right-3 top-8 flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30"
        >
          <GraduationCap className="h-4 w-4" aria-hidden />
          MCA
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- Section ---------- */

export function About() {
  return (
    <>
      <section id="about" className="relative overflow-hidden py-24 md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/5 blur-[120px]"
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-28 lg:col-span-4"
            >
              <TiltPortrait />
            </motion.div>

            {/* Story */}
            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Me
                </span>
              </h2>
              <div className="mt-14">
                <ScrubbedBio text={BIO} />
              </div>

              <div className="mt-14">
                <h3 className="break-words text-2xl font-bold text-text-primary md:text-3xl">Rahul Thummar</h3>
                <p className="mt-1 font-medium text-primary">Surat, Gujarat</p>
              </div>

              {/* Facts */}
              <dl className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-3">
                {[
                  { label: "Experience", value: <Counter to={4} suffix="+ years" /> },
                  { label: "Education", value: "MCA" },
                  { label: "Projects", value: <Counter to={10} suffix="+" /> },
                ].map((item) => (
                  <div key={item.label} className="border-t border-border/70 pt-5">
                    <dt className="text-sm text-text-secondary">{item.label}</dt>
                    <dd className="mt-1 text-3xl font-bold tracking-tight text-text-primary">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}