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
      "Full-stack document intelligence platform using RAG, Qdrant, and Hugging Face models for grounded document conversations with advanced CRAG pipelines, query rewriting, and real-time SSE streaming.",
    tech: ["React", "Node.js", "Qdrant", "Hugging Face", "RAG"],
    gradient: "linear-gradient(135deg, #ff6563, #ffbb71)",
  },
  {
    title: "Clonify",
    subtitle: "AI Website Cloner Agent",
    description:
      "AI-powered website cloning agent using Playwright and Gemini that analyzes and recreates websites from a single URL with self-improving generation pipelines and automated evaluation loops.",
    tech: ["Playwright", "Gemini API", "TypeScript", "AI Agent"],
    gradient: "linear-gradient(135deg, #6da0c4, #95b77e)",
  },
  {
    title: "GitUpskill",
    subtitle: "AI Developer Skill Recommendation",
    description:
      "AI-powered platform analyzing GitHub repositories to identify developer strengths, skill gaps, and growth opportunities with personalized learning roadmap generation.",
    tech: ["Next.js", "GitHub API", "OAuth", "AI/ML"],
    gradient: "linear-gradient(135deg, #d4a76a, #ff6563)",
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
            about
          </a>
          <a
            href="#skills"
            className={`nav-item ${
              activeSection === "skills" ? "active" : ""
            }`}
          >
            skills
          </a>
        </div>
        <div className="nav-group-center">
          <a href="#hero" className="nav-item nav-monogram">
            SD
          </a>
        </div>
        <div className="nav-group-right">
          <a
            href="#projects"
            className={`nav-item ${
              activeSection === "projects" ? "active" : ""
            }`}
          >
            projects
          </a>
          <a
            href="#contact"
            className={`nav-item ${
              activeSection === "contact" ? "active" : ""
            }`}
          >
            contact
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
          >
            SD
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

          {/* Small birds */}
          {(["five", "six", "seven", "eight"] as const).map(
            (name, i) => (
              <div
                key={name}
                className={`bird-container bird-container--${name}`}
              >
                <Bird
                  size="small"
                  variant={((i % 4) + 1) as 1 | 2 | 3 | 4}
                />
              </div>
            )
          )}

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
          )}

          {/* Front forest layer */}
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
            <div className="about-content anim-slide-up delay-1">
              <p className="about-text">
                Hey there! I&apos;m{" "}
                <strong>Samarth Deshpande</strong>, a B.S. Computer
                Science student at <strong>BITS Pilani</strong> and a
                passionate Software Developer based in Bengaluru,
                India. I build full-stack applications, AI-powered
                tools, and modern web experiences. From document
                intelligence platforms to AI website cloners, I love
                turning complex ideas into elegant, scalable
                solutions.
              </p>
            </div>
            <div className="stats-grid anim-slide-up delay-2">
              <div className="stat-item">
                <div className="stat-number">
                  <AnimatedCounter target={3} suffix="+" />
                </div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <AnimatedCounter target={25} suffix="+" />
                </div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <AnimatedCounter target={1696} />
                </div>
                <div className="stat-label">CodeChef Rating</div>
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
                      {exp.company}
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
            <div className="projects-grid">
              {PROJECTS.map((project, i) => (
                <TiltCard
                  key={project.title}
                  className={`project-card anim-scale-in delay-${
                    i + 1
                  }`}
                >
                  <div
                    className="project-card-accent"
                    style={{ background: project.gradient }}
                  />
                  <div className="project-card-body">
                    <h3 className="project-card-title">
                      {project.title}
                    </h3>
                    <p className="project-card-subtitle">
                      {project.subtitle}
                    </p>
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
                  </div>
                </TiltCard>
              ))}
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
