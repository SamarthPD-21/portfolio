import { ProjectsGrid } from "./components/portfolio/projects-section";
import { ScrollEffects } from "./components/portfolio/scroll-effects";
import { SiteNav } from "./components/portfolio/site-nav";
import { Bird } from "./components/portfolio/static";
import {
  AnimatedCounter,
  TiltCard,
  TypewriterText,
} from "./components/portfolio/ui";
import {
  ACHIEVEMENTS,
  ASSET_PATHS,
  EXPERIENCE,
  GITHUB_REPO_COUNT,
  GITHUB_URL,
  LIVE_DEMO_COUNT,
  OTHER_PROJECTS,
  PROJECTS,
  ROLES,
  SKILLS,
  TECH_ORBIT_COLORS,
  TECH_ORBIT_ITEMS,
} from "./lib/portfolio-data";

const TECHNOLOGY_COUNT = new Set(SKILLS.flatMap((skill) => skill.items)).size;

/* ═══════════════════════════════════════════════════
   MAIN PAGE — server-rendered; only the interactive
   pieces (nav, scroll effects, counters, project
   filters) ship as client components.
   ═══════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="app relative overflow-hidden text-center">
      <ScrollEffects />
      <SiteNav />

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
            <img src={`${ASSET_PATHS.header}/home-header-sun.svg`} alt="" decoding="async" />
          </div>

          {/* Mountains */}
          <div
            className="animation--pop-fade-in is-visible nature mountains"
            data-parallax="0.05"
          >
            <img
              src={`${ASSET_PATHS.header}/home-header-montains.svg`}
              alt="" decoding="async"
            />
          </div>

          {/* Clouds */}
          <div
            className="animation--pop-in is-visible cloud--left clouds"
            data-parallax="0.15"
          >
            <img src={`${ASSET_PATHS.header}/cloud-left.svg`} alt="" decoding="async" />
          </div>
          <div
            className="animation--pop-in is-visible cloud--left-center clouds"
            data-parallax="0.12"
          >
            <img src={`${ASSET_PATHS.header}/cloud-left-center.svg`} alt="" decoding="async" />
          </div>
          <div
            className="animation--pop-in is-visible cloud--right-center clouds"
            data-parallax="0.18"
          >
            <img
              src={`${ASSET_PATHS.header}/cloud-right-center.svg`}
              alt="" decoding="async"
            />
          </div>
          <div
            className="animation--pop-in is-visible cloud--right clouds"
            data-parallax="0.1"
          >
            <img src={`${ASSET_PATHS.header}/cloud-right.svg`} alt="" decoding="async" />
          </div>

          {/* Fourth forest layer */}
          <div
            className="animation--pop-fade-in is-visible nature forest__fourth-line"
            data-parallax="0.08"
          >
            <img
              src={`${ASSET_PATHS.header}/home-header-fourth-forest-layer.svg`}
              alt="" decoding="async"
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
              alt="" decoding="async"
            />
          </div>

          {/* Second forest layer */}
          <div
            className="animation--pop-fade-in is-visible nature forest__second-line"
            data-parallax="0.2"
          >
            <img
              src={`${ASSET_PATHS.header}/home-header-second-forest-layer.svg`}
              alt="" decoding="async"
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
              src={`${ASSET_PATHS.header}/home-header-first-forest-layer.svg`}
              alt="" decoding="async"
            />
          </div>
        </div>

        {/* Side trees */}
        <div className="container--tree">
          <div className="tree tree--left animation--pop-in is-visible">
            <img
              src={`${ASSET_PATHS.decorations}/tree-close-up-light.svg`}
              alt="" decoding="async"
            />
          </div>
          <div className="tree tree--left-blur animation--pop-in is-visible">
            <img src={`${ASSET_PATHS.decorations}/tree-blur-left.png`} alt="" decoding="async" />
          </div>
          <div className="tree tree--right-top animation--pop-in is-visible delay-1">
            <img
              src={`${ASSET_PATHS.decorations}/tree-close-up-dark.svg`}
              alt="" decoding="async"
            />
          </div>
          <div className="tree tree--right-top-center animation--pop-in is-visible delay-2">
            <img
              src={`${ASSET_PATHS.decorations}/tree-close-up-dark.svg`}
              alt="" decoding="async"
            />
          </div>
          <div className="tree tree--right-bottom-center animation--pop-in is-visible delay-3">
            <img
              src={`${ASSET_PATHS.decorations}/tree-close-up-dark.svg`}
              alt="" decoding="async"
            />
          </div>
          <div className="tree tree--right-bottom-blur animation--pop-in is-visible delay-4">
            <img src={`${ASSET_PATHS.decorations}/tree-blur-right.png`} alt="" decoding="async" />
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
                  <span className="accent-gradient">systems from scratch</span>,{" "}
                  full-stack apps &amp; AI-powered tools
                </h3>
                <p className="about-description">
                  B.S. Computer Science student at <strong>BITS Pilani</strong>{" "}
                  and a passionate Software Developer based in Bengaluru,
                  India. From a relational database engine in C++ to Corrective
                  RAG pipelines and a CodeMirror-level Overleaf extension, I like
                  the projects where the hard part is the engineering, not the
                  UI.
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
                    href={GITHUB_URL}
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
                        <AnimatedCounter target={GITHUB_REPO_COUNT} />
                      </div>
                      <div className="stat-block-label">Repositories</div>
                    </div>
                    <div className="stat-block">
                      <div className="stat-block-number">
                        <AnimatedCounter target={TECHNOLOGY_COUNT} suffix="+" />
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
                        <AnimatedCounter target={PROJECTS.length} />
                      </div>
                      <div className="stat-block-label">Featured Projects</div>
                    </div>
                  </div>
                  <div className="tech-orbit">
                    {TECH_ORBIT_ITEMS.map((tech, i) => (
                      <span
                        key={tech}
                        className="orbit-tag"
                        style={{ background: TECH_ORBIT_COLORS[i] }}
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
                  <AnimatedCounter target={GITHUB_REPO_COUNT} />
                </div>
                <div className="github-stat-label">Repositories</div>
              </div>
              <div className="github-stat">
                <div className="github-stat-number">
                  <AnimatedCounter target={PROJECTS.length} />
                </div>
                <div className="github-stat-label">Featured</div>
              </div>
              <div className="github-stat">
                <div className="github-stat-number">
                  <AnimatedCounter target={LIVE_DEMO_COUNT} />
                </div>
                <div className="github-stat-label">Live Demos</div>
              </div>
            </div>
            <ProjectsGrid />
            <div className="other-projects anim-slide-up">
              <h3 className="other-projects-title">Other builds</h3>
              <ul className="other-projects-list">
                {OTHER_PROJECTS.map((project) => (
                  <li key={project.title}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="other-project"
                    >
                      <span className="other-project-title">
                        {project.title} ↗
                      </span>
                      <span className="other-project-desc">{project.desc}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="projects-section-footer anim-slide-up delay-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="projects-github-link"
              >
                💻 View All {GITHUB_REPO_COUNT} Repositories on GitHub →
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
          alt=""
          loading="lazy"
          decoding="async"
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
                href={GITHUB_URL}
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
                href={GITHUB_URL}
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
          loading="lazy"
          decoding="async"
          className="footer-home-decoration-1"
        />
        <img
          src={`${ASSET_PATHS.footer}/home-footer-decoration-2.svg`}
          alt=""
          loading="lazy"
          decoding="async"
          className="footer-home-decoration-2"
        />
      </footer>
    </div>
  );
}
