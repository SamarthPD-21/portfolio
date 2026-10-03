"use client";

import {
  useScrollAnimation,
  useScrollEffects,
} from "../../hooks/use-portfolio-effects";

/** Progress bar plus page-wide scroll behaviour; renders no React state. */
export function ScrollEffects() {
  useScrollAnimation();
  useScrollEffects();

  return <div className="scroll-progress" aria-hidden="true" />;
}
