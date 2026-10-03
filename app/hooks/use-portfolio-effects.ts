"use client";

import { useEffect, useState } from "react";

const REVEAL_SELECTOR =
  ".anim-fade-in, .anim-slide-up, .anim-pop-in, .anim-scale-in, .animation--fade-in, .animation--pop-in, .animation--pop-fade-in";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useScrollAnimation() {
  useEffect(() => {
    const targets = document.querySelectorAll(REVEAL_SELECTOR);

    if (prefersReducedMotion()) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
}

/**
 * Parallax + scroll progress share one rAF-throttled listener and write
 * straight to the DOM, so scrolling never triggers a React re-render.
 */
export function useScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const layers = prefersReducedMotion()
      ? []
      : Array.from(
          document.querySelectorAll<HTMLElement>("[data-parallax]"),
          (element) => ({
            element,
            speed: parseFloat(element.dataset.parallax || "0"),
          })
        );
    const hero = document.getElementById("hero");
    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      const docHeight = root.scrollHeight - window.innerHeight;
      root.style.setProperty(
        "--scroll-progress",
        String(docHeight > 0 ? scrollY / docHeight : 0)
      );

      // Parallax layers are only visible inside the hero.
      if (!hero || scrollY <= hero.offsetHeight) {
        layers.forEach(({ element, speed }) => {
          element.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
        });
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
}

export function useActiveSection(ids: readonly string[]) {
  const [activeSection, setActiveSection] = useState(ids[0] || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeSection;
}
