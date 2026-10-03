export const ROLES = [
  "Software Developer",
  "Full-Stack Engineer",
  "AI Enthusiast",
  "CS @ BITS Pilani",
] as const;

export const SKILLS = [
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
    items: ["MongoDB", "PostgreSQL", "Redis", "SQLite", "Qdrant"],
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
] as const;

export type ProjectCategory = "Systems" | "AI" | "Full-Stack" | "Developer Tools";

export type Project = {
  title: string;
  subtitle: string;
  summary: string;
  highlights: readonly string[];
  tech: readonly string[];
  categories: readonly ProjectCategory[];
  featured?: boolean;
  team?: string;
  gradient: string;
  github: string;
  live?: string;
  language: string;
  languageColor: string;
};

export const PROJECTS: readonly Project[] = [
  {
    title: "AxiomDB",
    subtitle: "Relational Database Engine from Scratch",
    summary:
      "A single-process relational database written in modern C++20: SQL goes from lexer to AST to a cost-based planner and a Volcano-style executor, on top of page-based storage, with ACID transactions and crash recovery.",
    highlights: [
      "Buffer pool with an LRU-K evictor over slotted-page heap files and a B+Tree primary index",
      "Strict two-phase locking plus write-ahead logging with crash recovery",
      "Pluggable LSM-tree engine (MemTable, SSTables, Bloom filters, compaction) behind a shared storage interface",
      "Benchmarked LSM vs. heap+B+Tree: ~2.7× faster loads and ~8× lower p50 point-lookup latency at 100k rows",
      "90 Catch2 test cases (43k+ assertions), including crash-recovery tests",
    ],
    tech: ["C++20", "CMake", "B+Tree", "LSM-Tree", "WAL", "2PL"],
    categories: ["Systems"],
    featured: true,
    team: "Team of 2",
    gradient: "linear-gradient(135deg, #1c2e57, #6da0c4)",
    github: "https://github.com/SamarthPD-21/AxiomDB",
    language: "C++",
    languageColor: "#f34b7d",
  },
  {
    title: "WriteTex",
    subtitle: "AI Copilot for Overleaf (Chrome Extension)",
    summary:
      "Manifest V3 extension that adds an AI side panel to Overleaf: it proposes edits to a LaTeX resume or cover letter, shows a reviewable diff, and applies accepted changes directly in Overleaf's editor.",
    highlights: [
      "Page-context bridge that drives Overleaf's CodeMirror 6 editor through transactions, so undo and collaboration keep working",
      "LaTeX-aware patching: exact, whitespace-insensitive and fuzzy matching with brace-depth scanning, refusing ambiguous edits",
      "ATS score and job-description keyword-gap analysis",
      "Bring-your-own-key router across Claude, Gemini and OpenAI; 124 Vitest tests",
    ],
    tech: ["TypeScript", "React", "Chrome MV3", "CodeMirror 6", "Vitest"],
    categories: ["AI", "Developer Tools"],
    gradient: "linear-gradient(135deg, #47a248, #6da0c4)",
    github: "https://github.com/SamarthPD-21/WriteTex",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
  {
    title: "InsightLM",
    subtitle: "AI Document Intelligence Workspace",
    summary:
      "Upload a PDF and chat with it: answers stream back with page-level citations from a Corrective RAG (CRAG) pipeline over Qdrant vector search.",
    highlights: [
      "CRAG loop: LLM query rewrite, retrieval, LLM relevance judging, then retry with judge feedback",
      "Robust judge parsing with a token-overlap fallback when the LLM's output is malformed",
      "SSE streaming of sources then content; citations jump the in-app PDF viewer to the page",
    ],
    tech: ["Next.js", "Express.js", "LangChain", "Qdrant", "Hugging Face"],
    categories: ["AI", "Full-Stack"],
    gradient: "linear-gradient(135deg, #ff6563, #ffbb71)",
    github: "https://github.com/SamarthPD-21/InsightLM",
    live: "https://insight-lm-gamma.vercel.app",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
  {
    title: "SPD Global",
    subtitle: "Full-Stack E-Commerce Platform",
    summary:
      "MERN storefront for Indian handicraft and export goods with auth, cart, wishlist, reviews, an admin panel and Stripe Checkout, built up over 39 commits.",
    highlights: [
      "Stripe Checkout with server-side session verification and idempotent order creation",
      "Atomic stock reservation via conditional decrements with rollback",
      "Admin dashboard with a paginated audit log and Cloudinary image uploads",
    ],
    tech: ["Next.js", "Redux Toolkit", "Express", "MongoDB", "Stripe"],
    categories: ["Full-Stack"],
    gradient: "linear-gradient(135deg, #b04447, #d4a76a)",
    github: "https://github.com/SamarthPD-21/Spd-Global",
    live: "https://spd-global.vercel.app",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
  {
    title: "TypeAhead",
    subtitle: "Distributed Autocomplete Engine",
    summary:
      "Search-suggestion service that separates read-heavy prefix lookups from write-heavy query ingestion, with trending results ranked by time decay.",
    highlights: [
      "Consistent hash ring (SHA-256, virtual nodes, binary-search routing) sharding prefixes across Redis nodes",
      "Buffered writes flushed in batches to SQLite (WAL mode) with stale-prefix invalidation",
      "Ranking blends log-scaled popularity with exponentially decayed recency",
    ],
    tech: ["Python", "FastAPI", "Redis", "SQLite"],
    categories: ["Systems"],
    gradient: "linear-gradient(135deg, #3572a5, #95b77e)",
    github: "https://github.com/SamarthPD-21/TypeAhead",
    language: "Python",
    languageColor: "#3572a5",
  },
  {
    title: "Clonify",
    subtitle: "AI Website Cloner",
    summary:
      "CLI that scrapes a live site with Playwright and rebuilds it as HTML/CSS/JS using an LLM generate-evaluate-improve pipeline.",
    highlights: [
      "Extracts computed colors, fonts and section structure in-page into a design brief",
      "Plans sections, generates each one, then self-critiques until it scores ≥ 7/10",
    ],
    tech: ["Node.js", "Playwright", "Gemini API"],
    categories: ["AI", "Developer Tools"],
    gradient: "linear-gradient(135deg, #6da0c4, #a855f7)",
    github: "https://github.com/SamarthPD-21/clonify",
    language: "JavaScript",
    languageColor: "#f1e05a",
  },
];

export const OTHER_PROJECTS = [
  {
    title: "Multithreaded HTTP Server",
    desc: "HTTP/1.1 server on raw sockets with a thread pool, keep-alive and path-traversal protection; Python stdlib only.",
    github: "https://github.com/SamarthPD-21/MultiThreadedServer",
  },
  {
    title: "Outreach Engine",
    desc: "CLI pipeline that researches companies and drafts cold emails where every claim must cite a saved source.",
    github: "https://github.com/SamarthPD-21/Outreach_engine",
  },
  {
    title: "GradeSense",
    desc: "LLM-assisted answer-sheet grading: the model interprets, code computes the scores, and pdf-lib draws the evidence boxes.",
    github: "https://github.com/SamarthPD-21/Grading-Annotation-Tool",
  },
  {
    title: "GitUpSkill",
    desc: "Spring Boot + Next.js app that reads your GitHub repos and READMEs to map skills and suggest a learning roadmap.",
    github: "https://github.com/SamarthPD-21/GitUpSkill",
  },
] as const;

export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
  "Systems",
  "AI",
  "Full-Stack",
  "Developer Tools",
];

export const GITHUB_URL = "https://github.com/SamarthPD-21";
export const GITHUB_REPO_COUNT = 61;
export const LIVE_DEMO_COUNT = PROJECTS.filter((project) => project.live).length;

export const ACHIEVEMENTS = [
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
] as const;

export const EXPERIENCE = [
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
] as const;

export const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
] as const;

export const ACTIVE_SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "achievements",
  "contact",
] as const;

export const ASSET_PATHS = {
  header: "https://code-master.be/images/illustrations/header/original",
  decorations: "https://code-master.be/images/illustrations/decorations/original",
  footer: "https://code-master.be/images/illustrations/footers",
} as const;

export const TECH_ORBIT_ITEMS = [
  "React",
  "Next.js",
  "Spring Boot",
  "Node.js",
  "Python",
  "Java",
  "TypeScript",
  "MongoDB",
  "Docker",
  "Gemini AI",
] as const;

export const TECH_ORBIT_COLORS = [
  "#ff6563",
  "#1c2e57",
  "#95b77e",
  "#6da0c4",
  "#d4a76a",
  "#b07219",
  "#3178c6",
  "#47A248",
  "#2496ED",
  "#ffbb71",
] as const;
