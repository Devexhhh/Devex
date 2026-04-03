export const NAV_LINKS = ["Work", "Experience", "About", "Contact"];
import { EducationImageKey } from "@/lib/imagesData";

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
    degree: "Civil & Environmental Engineering",
    period: "2023 - 2027",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" > <path d="M22 10v6M2 10l10-5 10 5-10 5z"> </path><path d="M6 12v5c3 3 9 3 12 0v-5"></path > </svg>
    ),
    descItems: [
      "Pursuing a Bachelor's degree in Civil & Environmental Engineering.",
      "Strengthening problem-solving through DSA while focusing on design-driven backend development."
    ],
    tags: ["Data Structures and Algorithms", "Object Oriented Programming System", "Database Management System", "Web Development", "STAAD.Pro", "CAAD"],
    imageKey: "college"
  },
  {
    degree: "Matriculation & Intermediate Education",
    period: "2023 - 2027",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" > <path d="M22 10v6M2 10l10-5 10 5-10 5z"> </path><path d="M6 12v5c3 3 9 3 12 0v-5"></path > </svg>
    ),
    descItems: [
      "Pursued STEM education.",
      "Strengthening problem-solving through olympiads while focusing on mathematics."
    ],
    tags: ["Problem Solving", "Scratch", "Python", "SQL"],
    imageKey: "highschool"
  },
];

export const PROJECTS = [
  {
    title: "PhantomDex",
    desc: "An anonymous social platform where users post confessions and interact using ghost identities, featuring real-time voting, ranking algorithms, rate limiting, and moderation — built with a full-stack architecture using React, Express, and MongoDB.",
    tags: ["React", "Express", "MongoDB", "Zod", "Node.js"],
    status: "Functional",
    color: "#1a1a1a",
    imageKey: "phantomdex",
    live: "",
    github: "https://github.com/Devexhhh/GhostBoard"
  },
  {
    title: "NexusChat",
    desc: "A real-time encrypted P2P chat application built with Next.js and WebSockets, featuring a cyberpunk-themed UI with animated circuit grid backgrounds, room-based messaging, and live user presence tracking.",
    tags: ["Next.js", "WebSockets", "TypeScript", "Tailwind CSS"],
    status: "Functional",
    color: "#03000a",
    imageKey: "nexuschat",
    live: "https://nexus-chat-pi.vercel.app/",
    github: "https://github.com/Devexhhh/NexusChat"
  },
  {
    title: "Kryptix",
    desc: "A sleek, multi-chain Web3 HD wallet built with React. Features secure local seed phrase generation, cryptographic key derivation for both Solana and Ethereum, and a modern dark-themed UI.",
    tags: ["React", "Web3", "Tailwind CSS"],
    status: "Functional",
    color: "#03000a",
    imageKey: "kryptix",
    live: "https://kryptix-theta.vercel.app/",
    github: "https://github.com/Devexhhh/Kryptix"
  },
  {
    title: "Solana Token Launchpad",
    desc: "A decentralized token creation platform built on Solana using React and Web3.js, enabling users to mint SPL tokens with wallet integration, on-chain transactions, and support for the Token-2022 program.",
    tags: ["React", "Solana Web3.js", "SPL Token", "Wallet Adapter", "Blockchain"],
    status: "Building",
    color: "#9945FF",
    imageKey: "solforge",
    live: "",
    github: "https://github.com/Devexhhh/DApp/"
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
      title: "Berserk",
      year: "1989",
      creator: "Kentaro Miura",
      rating: "10/10",
      subtitle: "Struggle against fate.",
      description: "A brutal exploration of resilience and human will. Berserk shows that growth is forged in suffering, and that moving forward—no matter how broken—is the ultimate act of strength.",
      imageKey: "berserk",
      color: "from-black/80 to-red-900/40"
    },
    {
      id: "a2",
      title: "Vagabond",
      year: "1998",
      creator: "Takehiko Inoue",
      rating: "10/10",
      subtitle: "There is no light without dark.",
      description: "Invincible is just a word. Real strength comes from understanding your own weakness and choosing to grow rather than destroy.",
      imageKey: "vagabond",
      color: "from-zinc-600/40 to-black"
    },
    {
      id: "a3",
      title: "Vinland Saga",
      year: "2005",
      creator: "Makoto Yukimura",
      rating: "10/10",
      subtitle: "You have no enemies.",
      description: "A story of transformation from revenge to peace. It teaches that true strength lies in restraint, self-awareness, and the courage to choose a better path.",
      imageKey: "vinlandsaga",
      color: "from-green-900/40 to-black"
    },
    {
      id: "a4",
      title: "Attack on Titan",
      year: "2013",
      creator: "Hajime Isayama",
      rating: "9.5/10",
      subtitle: "The world is cruel, but also very beautiful.",
      description: "Freedom requires sacrifice. It teaches that perspective changes everything; the villain in one story is the hero in another.",
      imageKey: "aot",
      color: "from-red-900/40 to-black"
    }
  ],

  Gaming: [
    {
      id: "g1",
      title: "Dark Souls Trilogy",
      year: "2011",
      creator: "FromSoftware",
      rating: "10/10",
      subtitle: "Prepare to die, learn, repeat.",
      description: "A philosophy disguised as a game. It teaches patience, resilience, and that failure is not the end—but a necessary step toward mastery.",
      imageKey: "darksouls",
      color: "from-zinc-900/60 to-black"
    },
    {
      id: "g2",
      title: "Elden Ring",
      year: "2022",
      creator: "FromSoftware",
      rating: "10/10",
      subtitle: "Forge your own path.",
      description: "An open-world evolution of Souls philosophy. It emphasizes exploration, curiosity, and the freedom to approach challenges in your own way.",
      imageKey: "eldenring",
      color: "from-yellow-900/40 to-black"
    },
    {
      id: "g3",
      title: "God of War",
      year: "2018",
      creator: "Santa Monica Studio",
      rating: "10/10",
      subtitle: "Control your rage.",
      description: "A powerful story of growth and restraint. Kratos’ journey shows that true strength is not dominance, but learning to control oneself.",
      imageKey: "gow",
      color: "from-red-800/40 to-black"
    },
    {
      id: "g4",
      title: "Prince of Persia",
      year: "2003",
      creator: "Ubisoft",
      rating: "9.5/10",
      subtitle: "Master time, master mistakes.",
      description: "A blend of agility, puzzles, and storytelling. It reflects how correcting mistakes and adapting quickly can redefine outcomes.",
      imageKey: "pop",
      color: "from-amber-800/40 to-black"
    },
    {
      id: "g5",
      title: "Assassin’s Creed",
      year: "2007",
      creator: "Ubisoft",
      rating: "9.5/10",
      subtitle: "Nothing is true, everything is permitted.",
      description: "A deep dive into ideology, freedom, and control. It challenges perception and highlights the importance of questioning reality and authority.",
      imageKey: "ac",
      color: "from-slate-700/40 to-black"
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
      imageKey: "drawing",
      color: "from-violet-900/40 to-black"
    }
  ],

  Characters: [
    {
      id: "c1",
      title: "Batman",
      year: "1939",
      creator: "Bob Kane & Bill Finger",
      rating: "10/10",
      subtitle: "Peak human willpower.",
      description: "A testament to human will and preparation. He has no powers, yet stands shoulder-to-shoulder with gods through sheer intellect, relentless discipline, and an unbreakable moral code.",
      imageKey: "batman",
      color: "from-slate-800/60 to-black"
    },
    {
      id: "c2",
      title: "Spider-Man",
      year: "1962",
      creator: "Stan Lee & Steve Ditko",
      rating: "10/10",
      subtitle: "The ultimate everyman.",
      description: "His greatest struggles aren't just saving the city, but paying rent and keeping relationships intact. He teaches us resilience and responsibility in the face of everyday tragedy.",
      imageKey: "spiderman",
      color: "from-red-700/50 to-blue-900/60"
    },
    {
      id: "c3",
      title: "Superman",
      year: "1938",
      creator: "Jerry Siegel & Joe Shuster",
      rating: "9.5/10",
      subtitle: "The symbol of hope.",
      description: "Often misunderstood as boring because of his immense power, his true narrative strength lies in his humanity. He shows us that absolute power doesn't have to corrupt; it can uplift.",
      imageKey: "superman",
      color: "from-blue-600/50 to-red-800/50"
    },
    {
      id: "c4",
      title: "Iron Man",
      year: "1963",
      creator: "Stan Lee, Larry Lieber, Don Heck & Jack Kirby",
      rating: "10/10",
      subtitle: "Built, not born.",
      description: "A symbol of innovation and evolution. Tony Stark proves that intelligence, adaptability, and continuous self-improvement can turn flaws into strengths.",
      imageKey: "ironman",
      color: "from-yellow-600/40 to-red-800/50"
    }
  ]
};