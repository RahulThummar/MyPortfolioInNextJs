"use client";

import { motion } from "framer-motion";
import { Zap, Sparkles, Layers, Cpu, ShieldCheck, Bot } from "lucide-react";

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

// Marquee Row 1: Frontend & Agentic AI Stack
const row1Techs: TechItem[] = [
  { name: "ReactJS", category: "Frontend Framework", logo: <ReactLogo /> },
  { name: "Cloud Agentic AI", category: "Autonomous LLMs", logo: <AgenticAILogo /> },
  { name: "Next.js 16", category: "SSR & Fullstack", logo: <NextLogo /> },
  { name: "Claude", category: "Anthropic AI", logo: <ClaudeLogo /> },
  { name: "TypeScript", category: "Architecture", logo: <TSLogo /> },
  { name: "ChatGPT", category: "Generative AI", logo: <ChatGPTLogo /> },
  { name: "Cursor", category: "AI Code Editor", logo: <CursorLogo /> },
  { name: "Vue.js", category: "Frontend Framework", logo: <VueLogo /> },
  { name: "Tailwind CSS", category: "UI Styling", logo: <TailwindLogo /> },
];

// Marquee Row 2: Realtime, State & Cloud AI
const row2Techs: TechItem[] = [
  { name: "Socket.io", category: "Real-Time Web", logo: <SocketLogo /> },
  { name: "Cloud Agentic AI", category: "Agent Workflows", logo: <AgenticAILogo /> },
  { name: "Fabric.js", category: "Interactive Canvas", logo: <FabricLogo /> },
  { name: "Claude", category: "Reasoning & Code", logo: <ClaudeLogo /> },
  { name: "GitLab", category: "DevOps & CI/CD", logo: <GitLabLogo /> },
  { name: "Redux Toolkit", category: "State Management", logo: <ReduxLogo /> },
  { name: "MQTT", category: "MNS & Pub/Sub", logo: <MQTTLogo /> },
  { name: "JavaScript", category: "Modern ES6+", logo: <JSLogo /> },
];

// Marquee Row 3: Tooling, AI Agents & Deployment
const row3Techs: TechItem[] = [
  { name: "VS Code", category: "Code Editor", logo: <VSCodeLogo /> },
  { name: "Cloud Agentic AI", category: "Multi-Agent Systems", logo: <AgenticAILogo /> },
  { name: "GitHub", category: "Collaboration", logo: <GitHubLogo /> },
  { name: "Claude", category: "Agentic Engineering", logo: <ClaudeLogo /> },
  { name: "Postman", category: "API Testing", logo: <PostmanLogo /> },
  { name: "Vercel", category: "Edge Cloud", logo: <VercelLogo /> },
  { name: "Cursor", category: "AI Pair Engineer", logo: <CursorLogo /> },
  { name: "Next.js 16", category: "React Server Comps", logo: <NextLogo /> },
];

// Individual Marquee Card component matching AppWorld Infotech style
function TechCard({ item }: { item: TechItem }) {
  return (
    <div className="flex items-center gap-3.5 px-4.5 py-3 bg-white/95 backdrop-blur-md border border-border/80 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200 min-w-[200px] select-none group">
      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-primary/5 transition-all">
        {item.logo}
      </div>
      <div className="min-w-0">
        <div className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors truncate">
          {item.name}
        </div>
        <div className="text-xs font-medium text-text-secondary truncate">
          {item.category}
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] rounded-full bg-primary/5 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3], x: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] -right-[10%] w-[45%] h-[45%] rounded-full bg-secondary/5 blur-[120px]" 
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
                <Cpu className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6 tracking-tight">
                Technical <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Skills
                </span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A battle-tested tech stack refined across production web applications, Cloud Agentic AI workflows, interactive canvas platforms, and modern frontend architecture.
              </p>
            </motion.div>
          </div>

          {/* Right Content - Multi-Row Staggered Marquee with smooth Alpha Mask Fade */}
          <div 
            className="lg:w-2/3 min-w-0 relative overflow-hidden py-2 space-y-4"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%)",
            }}
          >

            {/* Row 1: Flowing Left to Right */}
            <div className="flex w-max group/row">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 28, repeat: Infinity }}
                className="flex gap-3.5 items-center pl-4 group-hover/row:[animation-play-state:paused]"
              >
                {[...row1Techs, ...row1Techs].map((tech, i) => (
                  <TechCard key={`r1-${i}`} item={tech} />
                ))}
              </motion.div>
            </div>

            {/* Row 2: Flowing Right to Left (Reverse) */}
            <div className="flex w-max group/row">
              <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{ ease: "linear", duration: 32, repeat: Infinity }}
                className="flex gap-3.5 items-center pl-4 group-hover/row:[animation-play-state:paused]"
              >
                {[...row2Techs, ...row2Techs].map((tech, i) => (
                  <TechCard key={`r2-${i}`} item={tech} />
                ))}
              </motion.div>
            </div>

            {/* Row 3: Flowing Left to Right */}
            <div className="flex w-max group/row">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                className="flex gap-3.5 items-center pl-4 group-hover/row:[animation-play-state:paused]"
              >
                {[...row3Techs, ...row3Techs].map((tech, i) => (
                  <TechCard key={`r3-${i}`} item={tech} />
                ))}
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
