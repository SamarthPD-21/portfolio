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
