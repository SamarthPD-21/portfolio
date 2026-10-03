"use client";

import { useState } from "react";

import {
  PROJECT_CATEGORIES,
  PROJECTS,
  type Project,
  type ProjectCategory,
} from "../../lib/portfolio-data";

type Filter = "All" | ProjectCategory;

const FILTERS: readonly Filter[] = ["All", ...PROJECT_CATEGORIES];

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-card-links">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link project-link--live"
          aria-label={`${project.title} live demo`}
        >
          Live Demo ↗
        </a>
      )}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link project-link--github"
        aria-label={`${project.title} source code on GitHub`}
      >
        Source ↗
      </a>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div
        className="project-card-accent"
        style={{ background: project.gradient }}
      />
      <div className="project-card-body">
        <div className="project-card-main">
          <div className="project-card-header">
            <div className="project-card-badges">
              {project.featured && (
                <span className="project-badge project-badge--featured">
                  ★ Featured
                </span>
              )}
              {project.team && (
                <span className="project-badge project-badge--team">
                  {project.team}
                </span>
              )}
              {project.live && (
                <span className="project-badge project-badge--live">
                  <span className="live-pulse" aria-hidden="true" />
                  Live
                </span>
              )}
            </div>
            <span className="project-card-language">
              <span
                className="language-dot"
                style={{ background: project.languageColor }}
              />
              {project.language}
            </span>
          </div>
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-subtitle">{project.subtitle}</p>
          <p className="project-card-desc">{project.summary}</p>
        </div>

        <div className="project-card-details">
          <ul className="project-card-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="project-card-tech">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

export function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.categories.includes(filter));

  return (
    <>
      <div
        className="project-filters"
        role="group"
        aria-label="Filter projects by category"
      >
        {FILTERS.map((option) => {
          const count =
            option === "All"
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.categories.includes(option)).length;
          return (
            <button
              key={option}
              type="button"
              className={`project-filter ${filter === option ? "active" : ""}`}
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
            >
              {option}
              <span className="project-filter-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Keyed by filter so cards replay their entrance animation */}
      <div className="projects-grid" key={filter} aria-live="polite">
        {visible.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </>
  );
}
