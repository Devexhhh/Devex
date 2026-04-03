"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BorderGlow from "@/app/ui/BorderGlow";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGithub
} from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import { JSX } from "react";
import { IMAGES } from "@/lib/imagesData";
import Image from "next/image";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  status: string;
  color: string;
  imageKey: keyof typeof IMAGES.projects;
  live?: string;
  github?: string;
}

const iconMap: Record<string, JSX.Element> = {
  "React": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "TypeScript": <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  "MongoDB": <SiMongodb />,
  "Express": <SiExpress />,
};

const statusColors: Record<string, { wrapper: string; dot: string }> = {
  "Functional": {
    wrapper: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    dot: "bg-emerald-500 dark:bg-emerald-400",
  },
  "Building": {
    wrapper: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    dot: "bg-amber-500 dark:bg-amber-400",
  },
  "Non Functional": {
    wrapper: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    dot: "bg-red-500 dark:bg-red-400",
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  const displayTags = project.tags.slice(0, 4);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const activeStyle = statusColors[project.status] || statusColors["Non Functional"];

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc = IMAGES.projects[project.imageKey] ?? "/images/fallback.png";
  const glowBg = mounted && resolvedTheme === "light" ? "ffffff" : "0f0f11";

  return (
    <BorderGlow
      edgeSensitivity={55}
      fillOpacity={0}
      glowRadius={12}
      glowIntensity={1}
      glowColor="260 80 60"
      backgroundColor={glowBg}
      borderRadius={12}
      colors={["#7c3aed", "#a855f7", "#38bdf8"]}
      className="w-full h-full group !border-black/5 hover:!border-black/10 dark:!border-white/5 dark:hover:!border-white/10 transition-colors duration-300 noisy-glass"
    >
      {/* Reduced padding on mobile (p-4 vs p-5) */}
      <div className="p-4 sm:p-5 flex flex-col h-full w-full">

        {/* Header */}
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className="font-mono font-medium text-[15px] sm:text-[16px] text-black/80 dark:text-white truncate pr-2">
            {project.title}
          </h3>

          <div className="flex gap-2 sm:gap-3 text-black/30 dark:text-white/30 shrink-0">

            {/* GitHub */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <SiGithub className="w-4 h-4" />
              </a>
            )}

            {/* Live Link */}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <TbExternalLink className="w-4 h-4" />
              </a>
            )}

          </div>
        </div>

        {/* Image Section - Responsive heights */}
        <div className="w-full h-44 sm:h-48 lg:h-52 rounded-lg mb-4 sm:mb-5 overflow-hidden border border-black/5 dark:border-white/5 relative group-hover:border-violet-500/30 transition-colors shrink-0">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={project.title || "project image"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          )}

          <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom right, transparent, ${project.color})`,
            }}
          />
        </div>

        {/* Tags + Status */}
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <div className="flex gap-1.5 sm:gap-2">
            {displayTags.map((tag, index) => {
              const Icon = iconMap[tag];
              return (
                <div
                  key={index}
                  title={tag}
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-black/5 dark:bg-white/10 flex items-center justify-center text-[16px] sm:text-[18px] text-black/60 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  {Icon ?? tag.charAt(0)}
                </div>
              );
            })}

            {project.tags.length > 4 && (
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-black/5 dark:bg-white/5 flex items-center justify-center text-[9px] sm:text-[10px] text-black/50 dark:text-white/40">
                +{project.tags.length - 4}
              </div>
            )}
          </div>

          <span
            className={`font-mono text-[9px] sm:text-[10px] px-1.5 py-1 sm:px-2 sm:py-1 rounded flex items-center gap-1 sm:gap-1.5 border transition-colors shrink-0 ${activeStyle.wrapper}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${activeStyle.dot}`}></span>
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p className="font-mono text-[11px] sm:text-[12px] text-black/50 dark:text-white/40 leading-relaxed line-clamp-3 sm:line-clamp-none">
          {project.desc}
        </p>
      </div>
    </BorderGlow>
  );
}