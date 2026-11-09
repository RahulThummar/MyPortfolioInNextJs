"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TechItem {
  name: string;
  category: string;
  logo: React.ReactNode;
}

// Custom SVGs with accurate brand colors
const ReactLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
  </svg>
);

const NextLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <circle cx="12" cy="12" r="11" fill="#000000" />
    <path d="M7 7.5h2.2v9H7zM14.8 7.5h2.2v9h-2.2z" fill="#ffffff" />
    <path d="M8.5 7.5l7 9h-2.4l-7-9z" fill="#ffffff" />
  </svg>
);

const TSLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <rect width="24" height="24" rx="5" fill="#3178C6" />
    <text x="5" y="17" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">TS</text>
  </svg>
);

const VueLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M2 3h4.2l5.8 10 5.8-10H22L12 21 2 3z" fill="#42B883" />
    <path d="M6.5 3h3.5L12 6.5 14 3h3.5L12 12.5 6.5 3z" fill="#35495E" />
  </svg>
);

const ChatGPTLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#10A37F">
    <path d="M20.5 10.2a5.5 5.5 0 0 0-.5-4.5 5.6 5.6 0 0 0-4.7-2.7c-.4 0-.8.1-1.2.2a5.5 5.5 0 0 0-9 1.9 5.5 5.5 0 0 0-3.3 2.5 5.6 5.6 0 0 0 .5 6.2 5.5 5.5 0 0 0 .5 4.5 5.6 5.6 0 0 0 4.7 2.7c.4 0 .8-.1 1.2-.2a5.5 5.5 0 0 0 9-1.9 5.5 5.5 0 0 0 3.3-2.5 5.6 5.6 0 0 0-.5-6.2zM12 14.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const ClaudeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <rect width="24" height="24" rx="6" fill="#D97757" />
    <path d="M12 4.5v15M4.5 12h15M6.7 6.7l10.6 10.6M17.3 6.7L6.7 17.3" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const AgenticAILogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <rect width="24" height="24" rx="6" fill="#5267F2" />
    <path d="M7 15a4 4 0 0 1-.5-7.96A5 5 0 0 1 16 6a4.5 4.5 0 0 1 4 4.5A3.5 3.5 0 0 1 17 17H7a4 4 0 0 1 0-8" fill="none" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.5" fill="#CFFAFE" />
    <path d="M12 9v1m0 4v1m-3-3h1m4 0h1" stroke="#CFFAFE" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const CursorLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <rect width="24" height="24" rx="6" fill="#0F172A" />
    <polygon points="12,5 19,9 19,16 12,20 5,16 5,9" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
    <line x1="12" y1="5" x2="12" y2="20" stroke="#38BDF8" strokeWidth="1.5" />
    <line x1="12" y1="12" x2="19" y2="9" stroke="#38BDF8" strokeWidth="1.5" />
    <line x1="12" y1="12" x2="5" y2="9" stroke="#38BDF8" strokeWidth="1.5" />
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#06B6D4">
    <path d="M12.5 6c-3 0-4.8 1.5-5.5 4.5 1.2-1.5 2.5-2 4-1.5 1 .3 1.7 1 2.5 1.8 1.2 1.3 2.7 2.7 6 2.7 3 0 4.8-1.5 5.5-4.5-1.2 1.5-2.5 2-4 1.5-1-.3-1.7-1-2.5-1.8-1.2-1.3-2.7-2.7-6-2.7zm-7 6c-3 0-4.8 1.5-5.5 4.5 1.2-1.5 2.5-2 4-1.5 1 .3 1.7 1 2.5 1.8 1.2 1.3 2.7 2.7 6 2.7 3 0 4.8-1.5 5.5-4.5-1.2 1.5-2.5 2-4 1.5-1-.3-1.7-1-2.5-1.8-1.2-1.3-2.7-2.7-6-2.7z" />
  </svg>
);

const SocketLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="12" r="11" fill="#010101" />
    <path d="M13 3L6 13h5l-1 8 8-11h-5l1-7z" fill="#ffffff" />
  </svg>
);

const FabricLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <rect width="24" height="24" rx="6" fill="#EEF2FF" />
    <path d="M4 6h16M4 12h16M4 18h10" stroke="#5267F2" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const GitLabLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 21.5l3.8-11.8H8.2L12 21.5z" fill="#E24329" />
    <path d="M12 21.5l-3.8-11.8H2.4L12 21.5z" fill="#FC6D26" />
    <path d="M2.4 9.7l-.8 2.5c-.2.6 0 1.2.5 1.6L12 21.5 2.4 9.7z" fill="#FCA326" />
    <path d="M2.4 9.7h5.8L5.5 2.3c-.2-.7-1.2-.7-1.4 0L2.4 9.7z" fill="#E24329" />
    <path d="M12 21.5l3.8-11.8h5.8L12 21.5z" fill="#FC6D26" />
    <path d="M21.6 9.7l.8 2.5c.2.6 0 1.2-.5 1.6L12 21.5l9.6-11.8z" fill="#FCA326" />
    <path d="M21.6 9.7h-5.8l2.7-7.4c.2-.7 1.2-.7 1.4 0l1.7 7.4z" fill="#E24329" />
  </svg>
);

const ReduxLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <circle cx="12" cy="12" r="3" fill="#764ABC" />
    <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#764ABC" strokeWidth="1.5" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#764ABC" strokeWidth="1.5" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#764ABC" strokeWidth="1.5" transform="rotate(150 12 12)" />
  </svg>
);

const MQTTLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#660066">
    <circle cx="12" cy="18" r="3" />
    <path d="M6 12a9 9 0 0 1 12 0" stroke="#660066" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M2 7a15 15 0 0 1 20 0" stroke="#660066" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const VSCodeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M17.8 2.3l-9.5 7.6-5-3.8-1.5.8v10.2l1.5.8 5-3.8 9.5 7.6 4.4-2.1V4.4l-4.4-2.1zm-9.5 12.3L5 12l3.3-2.6v5.2zm9.5 2.5l-6.8-5.1 6.8-5.1v10.2z" fill="#007ACC" />
  </svg>
);

const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#24292F">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1.1a9.8 9.8 0 0 1 5.2 0c2-1.4 2.8-1.1 2.8-1.1.6 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2z" />
  </svg>
);

const PostmanLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="12" r="11" fill="#FF6C37" />
    <path d="M16 11l-3-3m0 0l-3 3m3-3v8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const VercelLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#000000">
    <polygon points="12,3 22,20 2,20" />
  </svg>
);

const JSLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <rect width="24" height="24" rx="5" fill="#F7DF1E" />
    <path d="M7 17.5c.5.8 1.3 1.3 2.2 1.3 1.2 0 1.9-.7 1.9-2.1v-5.2H9.3v5.2c0 .6-.2.9-.6.9-.4 0-.6-.2-.8-.6L7 17.5zm7.5.1c.8.6 1.8.9 2.8.9 1.7 0 2.8-1 2.8-2.4 0-1.3-.8-2-2.1-2.5l-.6-.3c-.8-.3-1.2-.6-1.2-1.1 0-.5.4-.9 1.1-.9.6 0 1.1.2 1.5.6l.8-1.2c-.6-.5-1.4-.8-2.3-.8-1.7 0-2.7.9-2.7 2.3 0 1.2.7 1.9 2 2.4l.6.3c.9.4 1.3.7 1.3 1.2 0 .6-.5 1-1.3 1-.8 0-1.4-.4-1.9-.9l-.9 1.3z" fill="#000000" />
  </svg>
);

// Marquee Row 1: Frontend & Fullstack Stack
const row1Techs: TechItem[] = [
  { name: "ReactJS", category: "Frontend Framework", logo: <ReactLogo /> },
  { name: "WebRTC", category: "Real-Time Comms", logo: <SocketLogo /> },
  { name: "Next.js 16", category: "SSR & Fullstack", logo: <NextLogo /> },
  { name: "Claude", category: "Anthropic AI", logo: <ClaudeLogo /> },
  { name: "TypeScript", category: "Architecture", logo: <TSLogo /> },
  { name: "ChatGPT", category: "Generative AI", logo: <ChatGPTLogo /> },
  { name: "Cursor", category: "AI Code Editor", logo: <CursorLogo /> },
  { name: "Vue.js", category: "Frontend Framework", logo: <VueLogo /> },
  { name: "Tailwind CSS", category: "UI Styling", logo: <TailwindLogo /> },
];

// Marquee Row 2: Realtime, State & Performance
const row2Techs: TechItem[] = [
  { name: "Socket.io", category: "Real-Time Web", logo: <SocketLogo /> },
  { name: "Recoil", category: "State Management", logo: <ReduxLogo /> },
  { name: "Fabric.js", category: "Interactive Canvas", logo: <FabricLogo /> },
  { name: "Claude", category: "Reasoning & Code", logo: <ClaudeLogo /> },
  { name: "GitLab", category: "DevOps & CI/CD", logo: <GitLabLogo /> },
  { name: "Redux Toolkit", category: "State Management", logo: <ReduxLogo /> },
  { name: "MQTT", category: "MNS & Pub/Sub", logo: <MQTTLogo /> },
  { name: "JavaScript", category: "Modern ES6+", logo: <JSLogo /> },
];

// Marquee Row 3: Tooling & Deployment
const row3Techs: TechItem[] = [
  { name: "VS Code", category: "Code Editor", logo: <VSCodeLogo /> },
  { name: "REST APIs", category: "API Integration", logo: <PostmanLogo /> },
  { name: "GitHub", category: "Collaboration", logo: <GitHubLogo /> },
  { name: "Claude", category: "AI Engineering", logo: <ClaudeLogo /> },
  { name: "Postman", category: "API Testing", logo: <PostmanLogo /> },
  { name: "Vercel", category: "Edge Cloud", logo: <VercelLogo /> },
  { name: "Cursor", category: "AI Pair Engineer", logo: <CursorLogo /> },
  { name: "Next.js 16", category: "React Server Comps", logo: <NextLogo /> },
];

/* ---------- Section heading (title slides up from a mask, hairline draws in) ---------- */

const ease = [0.22, 1, 0.36, 1] as const;
const once = { once: true, margin: "-80px" } as const;

function SectionHeading({
  title,
  accent,
  description,
}: {
  title: string;
  accent?: string; // last word, shown with the blue-to-secondary gradient
  description?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <header className="mx-auto max-w-3xl text-center">
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
            {accent && (
              <>
                {" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {accent}
                </span>
              </>
            )}
          </motion.span>
        </span>
      </h2>

      <motion.div
        aria-hidden
        className="mt-5 h-px w-full origin-center bg-border"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={once}
        transition={{ duration: 1, delay: 0.15, ease }}
      />

      {description && (
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary"
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

/* ---------- Marquee row: CSS-driven, pauses on hover, stops for reduced motion ---------- */

function MarqueeRow({
  children,
  duration = 40,
  reverse = false,
  gap = 14,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  gap?: number;
}) {
  const half = { gap, paddingRight: gap } as const;
  const fade = "linear-gradient(to right, transparent, black 6%, black 94%, transparent)";

  return (
    <>
      <style>{`
        @keyframes mq-slide { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .mq:hover .mq-track { animation-play-state: paused }
        @media (prefers-reduced-motion: reduce) { .mq-track { animation: none !important } }
      `}</style>
      <div className="mq overflow-hidden" style={{ maskImage: fade, WebkitMaskImage: fade }}>
        <div
          className="mq-track flex w-max"
          style={{ animation: `mq-slide ${duration}s linear infinite ${reverse ? "reverse" : "normal"}` }}
        >
          <div className="flex shrink-0 items-center" style={half}>
            {children}
          </div>
          <div className="flex shrink-0 items-center" style={half} aria-hidden>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- Tech card ---------- */

function TechCard({ item }: { item: TechItem }) {
  return (
    <div className="group flex min-w-[210px] select-none items-center gap-3.5 rounded-2xl border border-border bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-slate-50 transition-transform duration-300 group-hover:scale-110">
        {item.logo}
      </div>
      <div className="min-w-0">
        <div className="truncate text-sm font-bold text-text-primary">{item.name}</div>
        <div className="truncate text-xs font-medium text-text-secondary">{item.category}</div>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */

export function Skills() {
  const rows = [
    { items: row1Techs, duration: 60, reverse: false },
    { items: row2Techs, duration: 68, reverse: true },
    { items: row3Techs, duration: 64, reverse: false },
  ];

  return (
    <section id="skills" className="relative overflow-hidden py-24 md:py-36">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          title="Technical"
          accent="Skills"
          description="A battle-tested tech stack refined across production web applications, real-time collaboration platforms, interactive canvas platforms, and modern frontend architecture."
        />
      </div>

      {/* Rows stay inside the same side spacing as the Hero. Hover any row to pause it. */}
      <div className="container mx-auto mt-16 space-y-4 px-6 sm:px-10 lg:px-16">
        {rows.map((row, i) => (
          <MarqueeRow key={i} duration={row.duration} reverse={row.reverse}>
            {row.items.map((tech, j) => (
              <TechCard key={`${i}-${j}`} item={tech} />
            ))}
          </MarqueeRow>
        ))}
      </div>
    </section>
  );
} 