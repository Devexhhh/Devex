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
    role: "Freelance",
    period: "2025 - present",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" > <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"> </path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline > <line x1="12" y1="22.08" x2="12" y2="12" > </line></svg >
    ),
    descItems: [
      "Built custom web applications tailored to client needs.",
      "Developed responsive web solutions for small businesses.",
      "Crafted high-quality web applications with clean UI/UX."
    ],
    tags: ["Nextjs", "React", "Typescript", "Javascript", "Tailwind", "Supabase", "Html/Css"],
  }
];

export const EDUCATION = [
  {
    degree: "Computer Science Engineering (Data Science)",
    period: "2023 - 2027",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" > <path d="M22 10v6M2 10l10-5 10 5-10 5z"> </path><path d="M6 12v5c3 3 9 3 12 0v-5"></path > </svg>
    ),
    descItems: [
      "Pursuing a Bachelor's degree in Computer Science Engineering (Data Science).",
      "Strengthening problem-solving through DSA while focusing on design-driven frontend development."
    ],
    tags: ["Data Structures and Algorithms", "Object Oriented Programming System", "Database Management System", "Web Development"],
  }
];

export const PROJECTS = [
  {
    title: "GhostBoard",

    desc: "An anonymous social platform where users post confessions and interact using ghost identities, featuring real-time voting, ranking algorithms, rate limiting, and moderation — built with a full-stack architecture using React, Express, and MongoDB.",

    tags: ["React", "Express", "MongoDB", "Zod", "Node.js"],

    status: "Functional",

    color: "#1a1a1a",
  },
  {
    title: "NexusChat",
    desc: "A real-time encrypted P2P chat application built with Next.js and WebSockets, featuring a cyberpunk-themed UI with animated circuit grid backgrounds, room-based messaging, and live user presence tracking.",
    tags: ["Next.js", "WebSockets", "TypeScript", "Tailwind CSS"],
    status: "Functional",
    color: "#03000a",
  },
  {
    title: "NexusChat",
    desc: "A real-time encrypted P2P chat application built with Next.js and WebSockets, featuring a cyberpunk-themed UI with animated circuit grid backgrounds, room-based messaging, and live user presence tracking.",
    tags: ["Next.js", "WebSockets", "TypeScript", "Tailwind CSS"],
    status: "Functional",
    color: "#03000a",
  },
  {
    title: "Solana Token Launchpad",

    desc: "A decentralized token creation platform built on Solana using React and Web3.js, enabling users to mint SPL tokens with wallet integration, on-chain transactions, and support for the Token-2022 program.",

    tags: ["React", "Solana Web3.js", "SPL Token", "Wallet Adapter", "Blockchain"],

    status: "Functional",

    color: "#9945FF",
  },
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

// ... (keep all your existing exports: NAV_LINKS, SKILLS, EXPERIENCE, EDUCATION, PROJECTS, GRID_CELLS) ...

export const SIDE_QUESTS_DATA = {
  Anime: [
    {
      id: "a1",
      title: "Dragon Ball",
      year: "1986",
      creator: "Akira Toriyama",
      rating: "10/10",
      subtitle: "The foundation of modern shonen.",
      description: "A masterclass in pacing, paneling, and escalation. It teaches that pushing past your perceived limits requires both brutal discipline and maintaining a pure, childlike love for the craft.",
      image: "/dragonball.jpg",
      color: "from-orange-600/40 to-blue-900/40"
    },
    {
      id: "a2",
      title: "Vagabond",
      year: "1998",
      creator: "Takehiko Inoue",
      rating: "10/10",
      subtitle: "There is no light without dark.",
      description: "Invincible is just a word. Real strength comes from understanding your own weakness and choosing to grow rather than destroy.",
      image: "/vagabond.jpg",
      color: "from-zinc-600/40 to-black"
    },
    {
      id: "a3",
      title: "Attack on Titan",
      year: "2013",
      creator: "Hajime Isayama",
      rating: "9.5/10",
      subtitle: "The world is cruel, but also very beautiful.",
      description: "Freedom requires sacrifice. It teaches that perspective changes everything; the villain in one story is the hero in another.",
      image: "/aot.jpg",
      color: "from-red-900/40 to-black"
    }
  ],
  Gaming: [
    {
      id: "g1",
      title: "Batman: Arkham",
      year: "2009",
      creator: "Rocksteady",
      rating: "10/10",
      subtitle: "Discipline over everything.",
      description: "Batman stands out because he’s human—no powers, just relentless discipline and preparation. He represents the idea that consistency and mindset can push you beyond natural limits.",
      image: "/batman.jpg",
      color: "from-zinc-800/40 to-black"
    },
    {
      id: "g2",
      title: "Sekiro",
      year: "2019",
      creator: "FromSoftware",
      rating: "10/10",
      subtitle: "Hesitation is defeat.",
      description: "You cannot level up your character to bypass the challenge; you have to level up yourself. It is a pure lesson in rhythm, patience, and learning from failure.",
      image: "/sekiro.jpg",
      color: "from-orange-900/40 to-black"
    }
  ],
  Drawing: [
    {
      id: "d1",
      title: "Sketching Fundamentals",
      year: "Ongoing",
      creator: "Self-Taught",
      rating: "N/A",
      subtitle: "Patience in the details.",
      description: "Art isn't about perfect lines; it's about training your eyes to truly see the world. Every mistake is just a new baseline for improvement.",
      image: "/drawing.jpg",
      color: "from-violet-900/40 to-black"
    }
  ]
};