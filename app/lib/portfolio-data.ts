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
] as const;

export const PROJECTS = [
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
      "Conversational CLI agent that scrapes and clones any website using Playwright + Gemini AI. Analyzes design, extracts content, and generates faithful HTML/CSS/JS clones with self-improving agent loops evaluating quality >= 7/10.",
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
] as const;

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
