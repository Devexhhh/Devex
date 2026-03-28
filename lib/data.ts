export const NAV_LINKS = ["Work", "Experience", "About", "Contact"];

export const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "Framer Motion",
  "PostgreSQL",
  "Figma",
];

export const EXPERIENCE = [
  {
    role: "Freelance Engineer",
    company: "Self-employed",
    period: "2025 — Present",
    desc: "Building custom web applications tailored to client needs. Crafting high-quality products with clean UI/UX.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase"],
  },
  {
    role: "Frontend Developer",
    company: "College Projects",
    period: "2023 — 2025",
    desc: "Developed full-stack web solutions including database management systems and responsive web platforms.",
    tags: ["React", "Node.js", "PostgreSQL", "Web Dev"],
  },
];

export const PROJECTS = [
  {
    title: "Fluent",
    desc: "A Duolingo-inspired language learning platform with interactive lessons, XP, hearts, quests, leaderboards, and a reward shop.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    status: "Functional",
    color: "#7C3AED",
    emoji: "🗣",
  },
  {
    title: "Vanta",
    desc: "Animated concept e-commerce built with React and Vite, featuring immersive video backgrounds and GSAP scroll animations.",
    tags: ["React", "GSAP", "Vite"],
    status: "Functional",
    color: "#6D28D9",
    emoji: "🌙",
  },
  {
    title: "DevBoard",
    desc: "A real-time developer dashboard for tracking GitHub activity, PR reviews, and sprint velocity in one view.",
    tags: ["Next.js", "GitHub API", "D3.js"],
    status: "In Progress",
    color: "#0EA5E9",
    emoji: "📊",
  },
];

export const ME_CORE_ITEMS = [
  { label: "Anime", icon: "🎌" },
  { label: "Components", icon: "⚙️" },
  { label: "Garden", icon: "🌱" },
];

// Deterministic seeded RNG — same output on server and client every time.
// Uses a simple mulberry32 algorithm seeded per-index so values never drift.
function seeded(seed: number): number {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export const GRID_CELLS = Array.from({ length: 140 }, (_, i) => ({
  id: i,
  active: seeded(i) > 0.72,
  intensity: seeded(i + 140), // offset seed so intensity differs from active
}));
