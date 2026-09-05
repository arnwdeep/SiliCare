"use client";

import React, { useState } from "react";
import RobotCaptchaModal from "@/components/RobotCaptchaModal";
import {
  Code2,
  Sparkles,
  ExternalLink,
  Mail,
  MapPin,
  Send,
  Terminal,
  Layers,
  Cpu,
  Globe,
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
  Menu,
  X,
  Copy,
  Check,
  Laptop,
  Database,
  Cloud,
  Zap,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

interface Project {
  id: number;
  title: string;
  category: "Full-Stack" | "AI & ML" | "Cloud / Web3";
  description: string;
  fullDetails: string;
  imageBg: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NovaAI — Intelligent Workflow Automation Platform",
    category: "AI & ML",
    description: "Enterprise SaaS platform utilizing LLMs for automated document processing, workflow extraction, and real-time team collaboration.",
    fullDetails: "Built using Next.js 16 App Router, Tailwind v4, Python FastAPI backend, and Vector DBs. Processes over 50,000 documents monthly with sub-second latency.",
    imageBg: "from-cyan-500/20 via-indigo-500/20 to-purple-500/20",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "FastAPI", "OpenAI API", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "PulseFlow — High-Frequency Real-Time Analytics",
    category: "Full-Stack",
    description: "Financial streaming dashboard displaying ultra low-latency telemetry metrics with interactive WebGL charting.",
    fullDetails: "Engineered with WebSocket connections, custom canvas rendering, and Redispub/sub architecture handling 100k events/sec.",
    imageBg: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    tags: ["React 19", "Node.js", "WebSockets", "Redis", "Chart.js", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "AuraStore — Micro-Frontend E-Commerce Engine",
    category: "Full-Stack",
    description: "Headless e-commerce solution with sub-second page loads, internationalization, and dynamic server-driven UI elements.",
    fullDetails: "Leveraged Next.js Server Components, Stripe payments API, GraphQL content management, and Edge caching on Vercel.",
    imageBg: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    tags: ["Next.js", "GraphQL", "Stripe", "Tailwind CSS", "Zustand", "Vercel Edge"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
  },
  {
    id: 4,
    title: "VaultChain — Decentralized Asset Tracker",
    category: "Cloud / Web3",
    description: "Cross-chain portfolio tracking dashboard with automated tax reports and smart contract auditing analytics.",
    fullDetails: "Integrated Ethers.js, Web3 modal, serverless AWS Lambda microservices, and dynamic SVG data visualizations.",
    imageBg: "from-blue-500/20 via-indigo-500/20 to-violet-500/20",
    tags: ["TypeScript", "Ethers.js", "AWS Lambda", "Tailwind CSS", "Web3"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
  },
];

const SKILLS = [
  {
    category: "Frontend Development",
    icon: Laptop,
    skills: [
      { name: "React 19 / Next.js 16", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS v4 & Styling Systems", level: 96 },
      { name: "State Management (Redux, Zustand)", level: 88 },
    ],
  },
  {
    category: "Backend & Systems",
    icon: Database,
    skills: [
      { name: "Node.js / Express / NestJS", level: 90 },
      { name: "PostgreSQL / MongoDB / Redis", level: 86 },
      { name: "RESTful & GraphQL APIs", level: 92 },
      { name: "Python / FastAPI", level: 82 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS / Vercel / Docker", level: 85 },
      { name: "CI/CD Pipelines & GitHub Actions", level: 88 },
      { name: "System Architecture & Security", level: 84 },
      { name: "Performance Optimization", level: 94 },
    ],
  },
];

const EXPERIENCES = [
  {
    role: "Senior Full-Stack Engineer",
    company: "TechNexus Innovations",
    period: "2024 — Present",
    description: "Leading frontend architecture and cloud integrations for enterprise clients. Architected micro-frontend systems reducing bundle size by 42%.",
    achievements: ["Migrated legacy codebase to Next.js 16 App Router", "Mentored team of 6 engineers", "Achieved 99.9% Lighthouse performance scores"],
  },
  {
    role: "Full-Stack Software Developer",
    company: "Apex Digital Solutions",
    period: "2022 — 2024",
    description: "Built scalable web applications, REST APIs, and customer dashboards serving 200,000+ active users.",
    achievements: ["Designed real-time WebSocket messaging layer", "Integrated automated end-to-end testing suite"],
  },
  {
    role: "Frontend Engineer",
    company: "Creative Byte Studio",
    period: "2021 — 2022",
    description: "Developed interactive marketing sites, SaaS interfaces, and custom design systems for global brands.",
    achievements: ["Created accessible UI component library used across 12 projects"],
  },
];

export default function Home() {
  const [isCaptchaOpen, setIsCaptchaOpen] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"All" | "Full-Stack" | "AI & ML" | "Cloud / Web3">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const filteredProjects = activeTab === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeTab);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@alexmorgan.dev");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "5s" }} />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Alex Morgan
              </span>
              <span className="text-xs font-mono text-slate-400">Full-Stack Engineer</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsCaptchaOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-all cursor-pointer"
              title="Re-verify Robot Security"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{isVerified ? "✓ Human Verified" : "Robot Auth"}</span>
            </button>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-lg glass-panel hover:bg-slate-800/80 text-slate-300 hover:text-cyan-400 transition-all border border-slate-700/50"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? "Copied!" : "contact@alexmorgan.dev"}</span>
            </button>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white glass-panel"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-t border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-cyan-400 font-medium">About</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-cyan-400 font-medium">Projects</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-cyan-400 font-medium">Skills</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-cyan-400 font-medium">Experience</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-cyan-400 font-medium">Contact</a>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono rounded-lg glass-panel text-slate-300"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? "Email Copied!" : "contact@alexmorgan.dev"}</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-center font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="about" className="relative pt-16 pb-24 md:pt-28 md:pb-36 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start gap-8 max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs md:text-sm font-medium shadow-inner shadow-cyan-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for New Projects & Freelance Engineering</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Crafting <span className="gradient-text">Next-Gen</span> Web Apps & Modern Software
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Hi, I&apos;m <span className="font-semibold text-white">Alex Morgan</span>. I specialize in building high-performance web applications, intelligent user interfaces, and scalable backend infrastructure with Next.js, React, and TypeScript.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore My Work</span>
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl font-semibold glass-panel hover:bg-slate-800/80 text-slate-200 border border-slate-700/60 hover:border-slate-500 transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Let&apos;s Connect</span>
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-10 border-t border-slate-800/80 mt-6">
            <div className="glass-panel p-5 rounded-2xl border border-slate-800/80">
              <div className="text-3xl md:text-4xl font-extrabold text-cyan-400">5+</div>
              <div className="text-xs md:text-sm font-medium text-slate-400 mt-1">Years Experience</div>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-slate-800/80">
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-400">40+</div>
              <div className="text-xs md:text-sm font-medium text-slate-400 mt-1">Projects Completed</div>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-slate-800/80">
              <div className="text-3xl md:text-4xl font-extrabold text-purple-400">99.9%</div>
              <div className="text-xs md:text-sm font-medium text-slate-400 mt-1">Client Satisfaction</div>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-slate-800/80">
              <div className="text-3xl md:text-4xl font-extrabold text-emerald-400">15+</div>
              <div className="text-xs md:text-sm font-medium text-slate-400 mt-1">Tech Stack Skills</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 max-w-7xl mx-auto px-6 border-t border-slate-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm font-semibold tracking-wider uppercase mb-2">
              <Terminal className="w-4 h-4" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Featured Projects</h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 glass-panel p-1.5 rounded-xl border border-slate-800">
            {(["All", "Full-Stack", "AI & ML", "Cloud / Web3"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-3xl p-7 border border-slate-800/80 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Gradient Banner Top */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.imageBg}`} />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-400">
                      <Sparkles className="w-3.5 h-3.5" /> Featured
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/80 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  View Details & Architecture <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section id="skills" className="py-20 max-w-7xl mx-auto px-6 border-t border-slate-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-2">
            <Cpu className="w-4 h-4" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Skills & Technologies</h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            Equipped with deep expertise across modern frontend frameworks, backend architecture, and cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((group, idx) => {
            const IconComp = group.icon;
            return (
              <div key={idx} className="glass-panel p-8 rounded-3xl border border-slate-800/80 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{group.category}</h3>
                </div>

                <div className="space-y-5">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-xs md:text-sm font-medium">
                        <span className="text-slate-200">{skill.name}</span>
                        <span className="text-cyan-400 font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 max-w-7xl mx-auto px-6 border-t border-slate-900">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-purple-400 font-mono text-sm font-semibold tracking-wider uppercase mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Work Experience</h2>
        </div>

        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-slate-800/80 flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {exp.company}
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed pt-2">{exp.description}</p>

                <div className="pt-3 space-y-1.5">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-xs font-mono font-medium text-slate-400 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800 self-start">
                {exp.period}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-6 border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold tracking-wider uppercase">
              <Globe className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Let&apos;s Build Something Great Together</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Have a project in mind, need a full-stack developer for your team, or just want to connect? Send a message and I&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 glass-panel p-4 rounded-2xl border border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Email Direct</div>
                  <div className="text-sm font-semibold text-white">contact@alexmorgan.dev</div>
                </div>
              </div>

              <div className="flex items-center gap-4 glass-panel p-4 rounded-2xl border border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location</div>
                  <div className="text-sm font-semibold text-white">San Francisco, CA (Remote Worldwide)</div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass-panel flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass-panel flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800/80">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-slate-300 text-sm max-w-sm mx-auto">
                  Thank you for reaching out. I have received your request and will reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">Subject</label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Project Inquiry / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formLoading}
                  className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                >
                  {formLoading ? (
                    <Zap className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6">
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 max-w-xl w-full relative space-y-5 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white glass-panel"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {selectedProject.category}
            </span>

            <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>

            <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.fullDetails}</p>

            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400">Technologies Used</div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl font-semibold bg-cyan-500 text-slate-950 text-center hover:bg-cyan-400 text-sm transition-colors"
              >
                Live Preview
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl font-semibold glass-panel text-slate-200 text-center hover:text-white text-sm transition-colors"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>© {new Date().getFullYear()} Alex Morgan. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span>Built with Next.js 16 & Tailwind CSS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </div>
        </div>
      </footer>

      {/* Robot Security Authentication Modal */}
      <RobotCaptchaModal
        isOpen={isCaptchaOpen}
        onVerifySuccess={() => {
          setIsCaptchaOpen(false);
          setIsVerified(true);
        }}
      />
    </div>
  );
}
