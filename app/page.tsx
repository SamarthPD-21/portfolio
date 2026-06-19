"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ═══════════════════════════════════════════════════
   RESUME DATA
   ═══════════════════════════════════════════════════ */
const ROLES = [
  "Software Developer",
  "Full-Stack Engineer",
  "AI Enthusiast",
  "CS @ BITS Pilani",
];

const SKILLS = [
  {
    category: "Languages",
    icon: "⚡",
    color: "#ff6563",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    color: "#ffbb71",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#6da0c4",
    items: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "#95b77e",
    items: ["MongoDB", "PostgreSQL", "Redis", "Qdrant"],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    color: "#b04447",
    items: ["Git", "GitHub", "Firebase", "Docker", "Vercel", "Render"],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    color: "#d4a76a",
    items: [
      "RAG",
      "LangChain",
      "Hugging Face",
      "Gemini API",
      "Vector Search",
    ],
  },
];

const PROJECTS = [
  {
    title: "InsightLM",
    subtitle: "AI Document Intelligence Workspace",
    description:
      "Full-stack document intelligence platform with Corrective RAG (CRAG), Qdrant vector search, and Hugging Face models. Features intelligent query rewriting, batch relevance judging, adaptive retry with feedback, and real-time SSE streaming with an integrated in-app PDF viewer.",
    tech: ["Next.js", "Express.js", "Qdrant", "Hugging Face", "RAG"],
    gradient: "linear-gradient(135deg, #ff6563, #ffbb71)",
    github: "https://github.com/SamarthPD-21/InsightLM",
    live: "https://insight-lm-gamma.vercel.app",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
  {
    title: "Clonify",
    subtitle: "AI Website Cloner Agent",
    description:
      "Conversational CLI agent that scrapes and clones any website using Playwright + Gemini AI. Analyzes design, extracts content, and generates faithful HTML/CSS/JS clones with self-improving agent loops evaluating quality \u2265 7/10.",
    tech: ["Playwright", "Gemini API", "Node.js", "AI Agent"],
    gradient: "linear-gradient(135deg, #6da0c4, #95b77e)",
    github: "https://github.com/SamarthPD-21/clonify",
    live: "",
    language: "HTML",
    languageColor: "#e34c26",
  },
  {
    title: "GitUpSkill",
    subtitle: "AI Developer Skill Recommendation",
    description:
      "AI-powered platform analyzing GitHub repositories to identify developer strengths and skill gaps. Features GitHub OAuth, intelligent README analysis, deterministic recommendation engine, and personalized upskilling roadmap generation.",
    tech: ["Next.js", "Spring Boot", "MongoDB", "OAuth 2.0"],
    gradient: "linear-gradient(135deg, #d4a76a, #ff6563)",
    github: "https://github.com/SamarthPD-21/GitUpSkill",
    live: "https://end-term-spring.vercel.app",
    language: "Java",
    languageColor: "#b07219",
  },
  {
    title: "Personafy",
    subtitle: "Persona-Driven AI Chat Experience",
    description:
      "Polished full-stack chatbot with switchable AI personas, each with unique system prompts and visual themes. Features premium glassmorphism UI, spring-based Framer Motion animations, typewriter streaming, and persistent local threading.",
    tech: ["Next.js", "Gemini API", "Framer Motion", "Tailwind CSS"],
    gradient: "linear-gradient(135deg, #a855f7, #6da0c4)",
    github: "https://github.com/SamarthPD-21/Personafy",
    live: "https://personafy-nine.vercel.app/",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
  {
    title: "RideShare",
    subtitle: "Full-Stack Ride-Sharing Platform",
    description:
      "Complete Uber-like ride-sharing application with JWT authentication, role-based access control (Passengers & Drivers), comprehensive ride lifecycle tracking with timestamps, duration calculation, and a glassmorphic dark-mode UI.",
    tech: ["Spring Boot", "MongoDB", "Next.js", "JWT"],
    gradient: "linear-gradient(135deg, #95b77e, #d4a76a)",
    github: "https://github.com/SamarthPD-21/Uber-Clone",
    live: "https://ride-share-silk-rho.vercel.app",
    language: "Java",
    languageColor: "#b07219",
  },
  {
    title: "GFI Finder",
    subtitle: "Open-Source Contribution Discovery",
    description:
      "Helps developers discover active GitHub repos and beginner-friendly issues worth contributing to. Filters inactive repositories, ranks by stars, issue volume, and contributor activity, with detailed repo pages showing open issues.",
    tech: ["Next.js", "GitHub API", "Tailwind CSS"],
    gradient: "linear-gradient(135deg, #ff6563, #a855f7)",
    github: "https://github.com/SamarthPD-21/GFI_Finder",
    live: "",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
];

const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "Meta PyTorch Hackathon",
    desc: "Qualified among 31,000+ participating teams in the OpenEnv Hackathon",
    color: "#ff6563",
  },
  {
    icon: "💻",
    title: "LeetCode",
    desc: "Active competitive programmer solving DSA challenges",
    color: "#ffbb71",
  },
  {
    icon: "⭐",
    title: "CodeChef 3★",
    desc: "Competitive programming rating: 1696",
    color: "#6da0c4",
  },
];

const EXPERIENCE = [
  {
    role: "Frontend Engineer (Freelance)",
    company: "VeBlyss Global",
    link: "https://veblyssglobal.com/",
    date: "Sep 2025 – Oct 2025",
    bullets: [
      "Built responsive, professional export-business website serving international customers across multiple product categories",
      "Designed product showcase sections for Leather, Copper, Jewellery, Handicrafts, Sustainable & Agricultural products",
      "Integrated WhatsApp and Email enquiry workflows, improving customer communication and lead generation",
      "Developed reusable UI components with optimized navigation using modern UI/UX principles",
      "Delivered production-ready solutions with high client satisfaction, strengthening digital presence",
    ],
  },
];

/* ═══════════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════════ */

/* ─── Intersection Observer for scroll animations ─── */
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = document.querySelectorAll(
      ".anim-fade-in, .anim-slide-up, .anim-pop-in, .anim-scale-in, .animation--fade-in, .animation--pop-in, .animation--pop-fade-in"
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
}

/* ─── Parallax for header layers ─── */
function useParallax() {
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          document
            .querySelectorAll<HTMLElement>("[data-parallax]")
            .forEach((el) => {
              const speed = parseFloat(el.dataset.parallax || "0");
              el.style.transform = `translateY(${scrollY * speed}px)`;
            });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

/* ─── Scroll progress (0-100) ─── */
function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return progress;
}

/* ═══════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════ */

/* ─── Typewriter ─── */
function TypewriterText({ texts }: { texts: string[] }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="typewriter-text">
      {displayText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

/* ─── Animated Counter ─── */
function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="counter-value">
      {count}
      {suffix}
    </span>
  );
}

/* ─── 3D Tilt Card ─── */
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

/* ─── Logo Component ─── */
function Logo() {
  return (
    <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
      {/* Soft outer glow/shadow */}
      <rect x="2" y="2" width="96" height="96" rx="28" fill="url(#logo-grad)" filter="url(#logo-drop-shadow)" />
      
      {/* Glossy glass reflection overlay */}
      <rect x="2" y="2" width="96" height="96" rx="28" fill="url(#logo-glass-overlay)" />
      
      {/* Glowing Monogram Letters (S and D) */}
      {/* S (neon blur) */}
      <path d="M54 35 C 54 22, 26 22, 26 35 C 26 48, 54 48, 54 61 C 54 74, 26 74, 26 61" 
            stroke="white" strokeWidth="9" strokeLinecap="round" fill="none" filter="url(#logo-glow-filter)" />
      {/* S (sharp foreground) */}
      <path d="M54 35 C 54 22, 26 22, 26 35 C 26 48, 54 48, 54 61 C 54 74, 26 74, 26 61" 
            stroke="white" strokeWidth="9" strokeLinecap="round" fill="none" />
            
      {/* D (neon blur) */}
      <path d="M46 25 L 63 25 C 81 25, 81 71, 63 71 L 46 71 Z" 
            stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#logo-glow-filter)" />
      {/* D (sharp foreground) */}
      <path d="M46 25 L 63 25 C 81 25, 81 71, 63 71 L 46 71 Z" 
            stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <defs>
        <filter id="logo-drop-shadow" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#ff6563" floodOpacity="0.4" />
        </filter>
        <filter id="logo-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffcc80" />
          <stop offset="50%" stopColor="#ff6563" />
          <stop offset="100%" stopColor="#cf3d3c" />
        </linearGradient>
        <linearGradient id="logo-glass-overlay" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity={0.35} />
          <stop offset="40%" stopColor="white" stopOpacity={0.1} />
          <stop offset="100%" stopColor="black" stopOpacity={0.15} />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Bird sprite ─── */
function Bird({
  size,
  variant,
}: {
  size: "small" | "large";
  variant: 1 | 2 | 3 | 4;
}) {
  const names = ["one", "two", "three", "four"];
  return (
    <div
      className={`bird bird--${names[variant - 1]} bird--${size}`}
      style={{
        backgroundImage:
          "url(https://code-master.be/images/illustrations/header/original/bird-cells.svg)",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useScrollAnimation();
  useParallax();
  const scrollProgress = useScrollProgress();

  /* Track active section for nav highlight */
  useEffect(() => {
    const ids = [
      "hero",
      "about",
      "skills",
      "experience",
      "projects",
      "achievements",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const HDR =
    "https://code-master.be/images/illustrations/header/original";
  const DEC =
    "https://code-master.be/images/illustrations/decorations/original";
  const FTR = "https://code-master.be/images/illustrations/footers";

  const navItems = [
    { id: "about", label: "about" },
    { id: "skills", label: "skills" },
    { id: "projects", label: "projects" },
    { id: "contact", label: "contact" },
  ];

  return (
    <div className="app">
      {/* ──── Scroll Progress Bar ──── */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ──── Desktop Nav ──── */}
      <nav className="nav">
        <div className="nav-group-left">
          <a
            href="#about"
            className={`nav-item ${
              activeSection === "about" ? "active" : ""
            }`}
          >
            About
          </a>
          <a
            href="#skills"
            className={`nav-item ${
              activeSection === "skills" ? "active" : ""
            }`}
          >
            Skills
          </a>
        </div>
        <div className="nav-group-center">
          <a href="#hero" className="nav-item nav-monogram" aria-label="Home">
            <Logo />
          </a>
        </div>
        <div className="nav-group-right">
          <a
            href="#projects"
            className={`nav-item ${
              activeSection === "projects" ? "active" : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`nav-item ${
              activeSection === "contact" ? "active" : ""
            }`}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* ──── Mobile Burger ──── */}
      <div
        className="burger-container"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <div className={`burger ${menuOpen ? "open" : ""}`}>
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* ──── Mobile Nav Overlay ──── */}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <div className="mobile-nav-inner">
          <a
            href="#hero"
            className="mobile-nav-logo"
            onClick={() => setMenuOpen(false)}
            aria-label="Home"
          >
            <Logo />
          </a>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mobile-nav-socials">
            <a
              href="https://github.com/SamarthPD-21"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:Samarthpd2112@gmail.com">Email</a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO — Parallax Forest Scene
          ═══════════════════════════════════════════ */}
      <header className="header home-header" id="hero">
        <div
          className="animation--fade header-background"
          style={{
            backgroundImage: `url(${HDR}/home-header-background.svg)`,
          }}
        >
          {/* Sun */}
          <div
            className="animation--fade-in is-visible sun"
            data-parallax="0.1"
          >
            <img src={`${HDR}/home-header-sun.svg`} alt="sun" />
          </div>

          {/* Mountains */}
          <div
            className="animation--pop-fade-in is-visible nature mountains"
            data-parallax="0.05"
          >
            <img
              src={`${HDR}/home-header-montains.svg`}
              alt="mountains"
            />
          </div>

          {/* Clouds */}
          <div
            className="animation--pop-in is-visible cloud--left clouds"
            data-parallax="0.15"
          >
            <img src={`${HDR}/cloud-left.svg`} alt="clouds" />
          </div>
          <div
            className="animation--pop-in is-visible cloud--left-center clouds"
            data-parallax="0.12"
          >
            <img src={`${HDR}/cloud-left-center.svg`} alt="clouds" />
          </div>
          <div
            className="animation--pop-in is-visible cloud--right-center clouds"
            data-parallax="0.18"
          >
            <img
              src={`${HDR}/cloud-right-center.svg`}
              alt="clouds"
            />
          </div>
          <div
            className="animation--pop-in is-visible cloud--right clouds"
            data-parallax="0.1"
          >
            <img src={`${HDR}/cloud-right.svg`} alt="clouds" />
          </div>

          {/* Fourth forest layer */}
          <div
            className="animation--pop-fade-in is-visible nature forest__fourth-line"
            data-parallax="0.08"
          >
            <img
              src={`${HDR}/home-header-fourth-forest-layer.svg`}
              alt="forest"
            />
          </div>

          {/* ── Hero Title Overlay ── */}
          <div className="titles">
            <div className="hero-content">
              <h1 className="hero-name animation--fade-in is-visible">
                SAMARTH
                <br />
                DESHPANDE
              </h1>
              <p className="hero-role">
                <TypewriterText texts={ROLES} />
              </p>
              <div className="hero-cta">
                <a
                  href="#projects"
                  className="btn btn--primary btn--large btn--glow"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="btn btn--outline btn--large"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          {/* Third forest layer */}
          <div
            className="animation--pop-fade-in is-visible nature forest__third-line"
            data-parallax="0.15"
          >
            <img
              src={`${HDR}/home-header-third-forest-layer.svg`}
              alt="forest"
            />
          </div>

          {/* Second forest layer */}
          <div
            className="animation--pop-fade-in is-visible nature forest__second-line"
            data-parallax="0.2"
          >
            <img
              src={`${HDR}/home-header-second-forest-layer.svg`}
              alt="forest"
            />
          </div>

          {/* Large birds */}
          {(["one", "two", "three", "four"] as const).map(
            (name, i) => (
              <div
                key={name}
                className={`bird-container bird-container--${name}`}
              >
                <Bird
                  size="large"
                  variant={((i % 4) + 1) as 1 | 2 | 3 | 4}
                />
              </div>
            )
          )}          {/* Front forest layer */}
          <div
            className="animation--pop-fade-in is-visible nature forest__front-line"
            data-parallax="0.25"
          >
            <img
              src={`${HDR}/home-header-first-forest-layer.svg`}
              alt="forest"
            />
          </div>
        </div>

        {/* Side trees */}
        <div className="container--tree">
          <div className="tree tree--left animation--pop-in is-visible">
            <img
              src={`${DEC}/tree-close-up-light.svg`}
              alt="tree"
            />
          </div>
          <div className="tree tree--left-blur animation--pop-in is-visible">
            <img src={`${DEC}/tree-blur-left.png`} alt="tree" />
          </div>
          <div className="tree tree--right-top animation--pop-in is-visible delay-1">
            <img
              src={`${DEC}/tree-close-up-dark.svg`}
              alt="tree"
            />
          </div>
          <div className="tree tree--right-top-center animation--pop-in is-visible delay-2">
            <img
              src={`${DEC}/tree-close-up-dark.svg`}
              alt="tree"
            />
          </div>
          <div className="tree tree--right-bottom-center animation--pop-in is-visible delay-3">
            <img
              src={`${DEC}/tree-close-up-dark.svg`}
              alt="tree"
            />
          </div>
          <div className="tree tree--right-bottom-blur animation--pop-in is-visible delay-4">
            <img src={`${DEC}/tree-blur-right.png`} alt="tree" />
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════
          MAIN CONTENT
          ═══════════════════════════════════════════ */}
      <main className="main">
        {/* ───────── ABOUT ───────── */}
        <section className="section-wrapper about-section" id="about">
          <div className="container">
            <h2 className="section-heading anim-slide-up">
              About <span className="highlight">Me</span>
            </h2>
            <div className="about-layout">
              {/* Left column — text + facts */}
              <div className="about-intro anim-slide-up delay-1">
                <p className="about-greeting">Hello, I&apos;m Samarth</p>
                <h3 className="about-headline">
                  I build{" "}
                  <span className="accent-gradient">full-stack apps</span>,{" "}
                  AI-powered tools &amp; modern web experiences
                </h3>
                <p className="about-description">
                  B.S. Computer Science student at <strong>BITS Pilani</strong>{" "}
                  and a passionate Software Developer based in Bengaluru,
                  India. From document intelligence platforms with Corrective RAG
                  pipelines to AI website cloner agents, I love turning complex
                  ideas into elegant, scalable solutions that make a real impact.
                </p>
                <div className="about-quick-facts anim-slide-up delay-2">
                  <div className="quick-fact">
                    <span className="quick-fact-icon">🎓</span>
                    <span className="quick-fact-text">BITS Pilani &apos;28</span>
                  </div>
                  <div className="quick-fact">
                    <span className="quick-fact-icon">📍</span>
                    <span className="quick-fact-text">Bengaluru, India</span>
                  </div>
                  <div className="quick-fact">
                    <span className="quick-fact-icon">💼</span>
                    <span className="quick-fact-text">Freelance Experience</span>
                  </div>
                  <div className="quick-fact">
                    <span className="quick-fact-icon">🏆</span>
                    <span className="quick-fact-text">Meta PyTorch Qualified</span>
                  </div>
                </div>
                <div className="about-cta-row anim-slide-up delay-3">
                  <a
                    href="https://github.com/SamarthPD-21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn--accent"
                  >
                    💻 View GitHub
                  </a>
                  <a href="#contact" className="btn--ghost">
                    ✉️ Get In Touch
                  </a>
                </div>
              </div>

              {/* Right column — stats panel */}
              <div className="about-stats-panel anim-slide-up delay-2">
                <div className="stats-card">
                  <h4 className="stats-card-title">By the Numbers</h4>
                  <div className="stats-card-grid">
                    <div className="stat-block">
                      <div className="stat-block-number">
                        <AnimatedCounter target={45} />
                      </div>
                      <div className="stat-block-label">Repositories</div>
                    </div>
                    <div className="stat-block">
                      <div className="stat-block-number">
                        <AnimatedCounter target={25} suffix="+" />
                      </div>
                      <div className="stat-block-label">Technologies</div>
                    </div>
                    <div className="stat-block">
                      <div className="stat-block-number">
                        <AnimatedCounter target={1696} />
                      </div>
                      <div className="stat-block-label">CodeChef Rating</div>
                    </div>
                    <div className="stat-block">
                      <div className="stat-block-number">
                        <AnimatedCounter target={6} suffix="+" />
                      </div>
                      <div className="stat-block-label">Featured Projects</div>
                    </div>
                  </div>
                  <div className="tech-orbit">
                    {["React", "Next.js", "Spring Boot", "Node.js", "Python", "Java", "TypeScript", "MongoDB", "Docker", "Gemini AI"].map((tech, i) => (
                      <span
                        key={tech}
                        className="orbit-tag"
                        style={{
                          background: [
                            "#ff6563", "#1c2e57", "#95b77e", "#6da0c4",
                            "#d4a76a", "#b07219", "#3178c6", "#47A248",
                            "#2496ED", "#ffbb71",
                          ][i],
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── SKILLS ───────── */}
        <section
          className="section-wrapper skills-section"
          id="skills"
        >
          <div className="skills-bg-mesh" />
          <div className="container">
            <h2 className="section-heading anim-slide-up">
              My <span className="highlight">Skills</span>
            </h2>
            <div className="skills-grid">
              {SKILLS.map((skill, i) => (
                <TiltCard
                  key={skill.category}
                  className={`skill-card anim-scale-in delay-${
                    i + 1
                  }`}
                >
                  <div
                    className="skill-card-icon"
                    style={{ background: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="skill-card-title">
                    {skill.category}
                  </h3>
                  <div className="skill-tags">
                    {skill.items.map((item) => (
                      <span key={item} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── EXPERIENCE ───────── */}
        <section
          className="section-wrapper experience-section"
          id="experience"
        >
          <div className="container">
            <h2 className="section-heading anim-slide-up">
              Work <span className="highlight">Experience</span>
            </h2>
            <div className="timeline anim-slide-up delay-1">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-line" />
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-date">
                      {exp.date}
                    </span>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {exp.company} ↗
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h4>
                    <ul className="timeline-bullets">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* Education entry */}
              <div className="timeline-item">
                <div className="timeline-line" />
                <div className="timeline-dot timeline-dot--edu" />
                <div className="timeline-content">
                  <span className="timeline-date">
                    Aug 2024 – Present
                  </span>
                  <h3 className="timeline-role">
                    B.S. Computer Science
                  </h3>
                  <h4 className="timeline-company">BITS Pilani</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── PROJECTS ───────── */}
        <section
          className="section-wrapper projects-section"
          id="projects"
        >
          <div className="container">
            <h2 className="section-heading anim-slide-up">
              Featured{" "}
              <span className="highlight">Projects</span>
            </h2>
            <div className="github-stats-bar anim-slide-up delay-1">
              <div className="github-stat">
                <div className="github-stat-number">
                  <AnimatedCounter target={45} />
                </div>
                <div className="github-stat-label">Repositories</div>
              </div>
              <div className="github-stat">
                <div className="github-stat-number">
                  <AnimatedCounter target={6} />
                </div>
                <div className="github-stat-label">Featured</div>
              </div>
              <div className="github-stat">
                <div className="github-stat-number">
                  <AnimatedCounter target={4} />
                </div>
                <div className="github-stat-label">Live Demos</div>
              </div>
            </div>
            <div className="projects-grid">
              {PROJECTS.map((project, i) => (
                <TiltCard
                  key={project.title}
                  className={`project-card anim-scale-in delay-${
                    (i % 3) + 1
                  }`}
                >
                  <div
                    className="project-card-accent"
                    style={{ background: project.gradient }}
                  />
                  <div className="project-card-body">
                    <div className="project-card-header">
                      <div>
                        <h3 className="project-card-title">
                          {project.title}
                        </h3>
                        <p className="project-card-subtitle">
                          {project.subtitle}
                        </p>
                      </div>
                      <span className="project-card-language">
                        <span
                          className="language-dot"
                          style={{ background: project.languageColor }}
                        />
                        {project.language}
                      </span>
                    </div>
                    <p className="project-card-desc">
                      {project.description}
                    </p>
                    <div className="project-card-tech">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="project-card-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link--github"
                      >
                        ⌨️ Source
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link project-link--live"
                        >
                          🚀 Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
            <div className="projects-section-footer anim-slide-up delay-3">
              <a
                href="https://github.com/SamarthPD-21"
                target="_blank"
                rel="noopener noreferrer"
                className="projects-github-link"
              >
                💻 View All 45 Repositories on GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* ───────── ACHIEVEMENTS ───────── */}
        <section
          className="section-wrapper achievements-section"
          id="achievements"
        >
          <div className="container">
            <h2 className="section-heading anim-slide-up">
              <span className="highlight">Achievements</span>
            </h2>
            <div className="achievements-grid">
              {ACHIEVEMENTS.map((ach, i) => (
                <div
                  key={ach.title}
                  className={`achievement-card anim-slide-up delay-${
                    i + 1
                  }`}
                >
                  <div
                    className="achievement-icon"
                    style={{ background: ach.color }}
                  >
                    {ach.icon}
                  </div>
                  <div className="achievement-text">
                    <h3 className="achievement-title">
                      {ach.title}
                    </h3>
                    <p className="achievement-desc">{ach.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════
          CONTACT FOOTER
          ═══════════════════════════════════════════ */}
      <footer className="footer-home" id="contact">
        <img
          className="footer-top-shape"
          src={`${FTR}/top-shape.svg`}
          alt="footer shape"
        />
        <div className="container">
          <div className="footer-primary">
            <div className="footer-contact">
              <h5 className="anim-slide-up">
                Let&apos;s Build
                <br />
                Something{" "}
                <span className="highlight">Amazing</span>
              </h5>
              <p className="anim-slide-up delay-1">
                I&apos;m always open to new opportunities and
                collaborations. Feel free to reach out!
              </p>
            </div>
            <div className="contact-grid anim-slide-up delay-2">
              <a
                href="mailto:Samarthpd2112@gmail.com"
                className="contact-item"
              >
                <span className="contact-icon">✉️</span>
                <span className="contact-label">
                  Samarthpd2112@gmail.com
                </span>
              </a>
              <a href="tel:+917899086600" className="contact-item">
                <span className="contact-icon">📱</span>
                <span className="contact-label">
                  +91 78990 86600
                </span>
              </a>
              <a
                href="https://github.com/SamarthPD-21"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-icon">💻</span>
                <span className="contact-label">GitHub</span>
              </a>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-label">
                  Bengaluru, India
                </span>
              </div>
            </div>
          </div>

          <div className="footer-secondary">
            <div className="footer-logo-container">
              <div className="logo">
                <h6>Samarth Deshpande.</h6>
              </div>
              <div className="copyrights">
                <p>© 2026 All rights reserved</p>
              </div>
            </div>
            <div className="footer-socials-container">
              <a
                href="https://github.com/SamarthPD-21"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                GitHub
              </a>
              <a
                href="mailto:Samarthpd2112@gmail.com"
                className="footer-social-link"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <img
          src={`${FTR}/home-footer-decoration-1.svg`}
          alt=""
          className="footer-home-decoration-1"
        />
        <img
          src={`${FTR}/home-footer-decoration-2.svg`}
          alt=""
          className="footer-home-decoration-2"
        />
      </footer>
    </div>
  );
}
