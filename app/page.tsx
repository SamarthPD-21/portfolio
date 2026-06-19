"use client";

import { useState } from "react";

import {
  AnimatedCounter,
  Bird,
  Logo,
  TiltCard,
  TypewriterText,
} from "./components/portfolio/ui";
import {
  ACTIVE_SECTION_IDS,
  ACHIEVEMENTS,
  ASSET_PATHS,
  EXPERIENCE,
  NAV_ITEMS,
  PROJECTS,
  ROLES,
  SKILLS,
  TECH_ORBIT_COLORS,
  TECH_ORBIT_ITEMS,
} from "./lib/portfolio-data";
import {
  useActiveSection,
  useParallax,
  useScrollAnimation,
  useScrollProgress,
} from "./hooks/use-portfolio-effects";

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(ACTIVE_SECTION_IDS);

  useScrollAnimation();
  useParallax();
  const scrollProgress = useScrollProgress();

  return (
    <div className="app relative overflow-hidden text-center">
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
          {NAV_ITEMS.map((item) => (
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
            backgroundImage: `url(${ASSET_PATHS.header}/home-header-background.svg)`,
          }}
        >
          {/* Sun */}
          <div
            className="animation--fade-in is-visible sun"
            data-parallax="0.1"
          >
            <img src={`${ASSET_PATHS.header}/home-header-sun.svg`} alt="sun" />
          </div>

          {/* Mountains */}
          <div
            className="animation--pop-fade-in is-visible nature mountains"
            data-parallax="0.05"
          >
            <img
              src={`${ASSET_PATHS.header}/home-header-montains.svg`}
              alt="mountains"
            />
          </div>

          {/* Clouds */}
          <div
            className="animation--pop-in is-visible cloud--left clouds"
            data-parallax="0.15"
          >
            <img src={`${ASSET_PATHS.header}/cloud-left.svg`} alt="clouds" />
          </div>
          <div
            className="animation--pop-in is-visible cloud--left-center clouds"
            data-parallax="0.12"
          >
            <img src={`${ASSET_PATHS.header}/cloud-left-center.svg`} alt="clouds" />
          </div>
          <div
            className="animation--pop-in is-visible cloud--right-center clouds"
            data-parallax="0.18"
          >
            <img
              src={`${ASSET_PATHS.header}/cloud-right-center.svg`}
              alt="clouds"
            />
          </div>
          <div
            className="animation--pop-in is-visible cloud--right clouds"
            data-parallax="0.1"
          >
            <img src={`${ASSET_PATHS.header}/cloud-right.svg`} alt="clouds" />
          </div>

          {/* Fourth forest layer */}
          <div
            className="animation--pop-fade-in is-visible nature forest__fourth-line"
            data-parallax="0.08"
          >
            <img
              src={`${ASSET_PATHS.header}/home-header-fourth-forest-layer.svg`}
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
              src={`${ASSET_PATHS.header}/home-header-third-forest-layer.svg`}
              alt="forest"
            />
          </div>

          {/* Second forest layer */}
          <div
            className="animation--pop-fade-in is-visible nature forest__second-line"
            data-parallax="0.2"
          >
            <img
              src={`${ASSET_PATHS.header}/home-header-second-forest-layer.svg`}
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
              src={`${ASSET_PATHS.header}/home-header-first-forest-layer.svg`}
              alt="forest"
            />
          </div>
        </div>

        {/* Side trees */}
        <div className="container--tree">
          <div className="tree tree--left animation--pop-in is-visible">
            <img
              src={`${ASSET_PATHS.decorations}/tree-close-up-light.svg`}
              alt="tree"
            />
          </div>
          <div className="tree tree--left-blur animation--pop-in is-visible">
            <img src={`${ASSET_PATHS.decorations}/tree-blur-left.png`} alt="tree" />
          </div>
          <div className="tree tree--right-top animation--pop-in is-visible delay-1">
            <img
              src={`${ASSET_PATHS.decorations}/tree-close-up-dark.svg`}
              alt="tree"
            />
          </div>
          <div className="tree tree--right-top-center animation--pop-in is-visible delay-2">
            <img
              src={`${ASSET_PATHS.decorations}/tree-close-up-dark.svg`}
              alt="tree"
            />
          </div>
          <div className="tree tree--right-bottom-center animation--pop-in is-visible delay-3">
            <img
              src={`${ASSET_PATHS.decorations}/tree-close-up-dark.svg`}
              alt="tree"
            />
          </div>
          <div className="tree tree--right-bottom-blur animation--pop-in is-visible delay-4">
            <img src={`${ASSET_PATHS.decorations}/tree-blur-right.png`} alt="tree" />
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════
          MAIN CONTENT
          ═══════════════════════════════════════════ */}
      <main className="main relative">
        {/* ───────── ABOUT ───────── */}
        <section className="section-wrapper about-section" id="about">
          <div className="container mx-auto px-6">
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
                      {TECH_ORBIT_ITEMS.map((tech, i) => (
        <section
          className="section-wrapper skills-section"
          id="skills"
                          style={{ background: TECH_ORBIT_COLORS[i] }}
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
          <div className="container mx-auto px-6">
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
          <div className="container mx-auto px-6">
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
          <div className="container mx-auto px-6">
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
          src={`${ASSET_PATHS.footer}/top-shape.svg`}
          alt="footer shape"
        />
        <div className="container mx-auto px-6">
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
          src={`${ASSET_PATHS.footer}/home-footer-decoration-1.svg`}
          alt=""
          className="footer-home-decoration-1"
        />
        <img
          src={`${ASSET_PATHS.footer}/home-footer-decoration-2.svg`}
          alt=""
          className="footer-home-decoration-2"
        />
      </footer>
    </div>
  );
}
