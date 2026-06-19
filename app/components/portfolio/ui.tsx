"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function TypewriterText({ texts }: { texts: readonly string[] }) {
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

export function AnimatedCounter({
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
    const element = ref.current;
    if (!element) {
      return;
    }

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
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="counter-value">
      {count}
      {suffix}
    </span>
  );
}

export function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) {
      return;
    }

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

export function Logo() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <rect
        x="2"
        y="2"
        width="96"
        height="96"
        rx="28"
        fill="url(#logo-grad)"
        filter="url(#logo-drop-shadow)"
      />
      <rect
        x="2"
        y="2"
        width="96"
        height="96"
        rx="28"
        fill="url(#logo-glass-overlay)"
      />
      <path
        d="M54 35 C 54 22, 26 22, 26 35 C 26 48, 54 48, 54 61 C 54 74, 26 74, 26 61"
        stroke="white"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
        filter="url(#logo-glow-filter)"
      />
      <path
        d="M54 35 C 54 22, 26 22, 26 35 C 26 48, 54 48, 54 61 C 54 74, 26 74, 26 61"
        stroke="white"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M46 25 L 63 25 C 81 25, 81 71, 63 71 L 46 71 Z"
        stroke="white"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#logo-glow-filter)"
      />
      <path
        d="M46 25 L 63 25 C 81 25, 81 71, 63 71 L 46 71 Z"
        stroke="white"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <filter
          id="logo-drop-shadow"
          x="0"
          y="0"
          width="100"
          height="100"
          filterUnits="userSpaceOnUse"
        >
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="6"
            floodColor="#ff6563"
            floodOpacity="0.4"
          />
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

export function Bird({
  size,
  variant,
}: {
  size: "small" | "large";
  variant: 1 | 2 | 3 | 4;
}) {
  const names = ["one", "two", "three", "four"] as const;

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
