"use client";
import { useState } from "react";
import Tag from "./Tag";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  status: string;
  color: string;
  emoji: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative overflow-hidden rounded-2xl p-7 cursor-pointer
        border transition-all duration-300
        ${hovered
          ? "border-violet-500/40 bg-violet-500/[0.04] -translate-y-1 shadow-[0_12px_40px_rgba(124,58,237,0.12)]"
          : "border-white/[0.07] bg-white/[0.01]"
        }
      `}
    >
      {/* Animated top color line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
        style={{
          background: hovered
            ? `linear-gradient(90deg, ${project.color}, transparent 70%)`
            : "transparent",
        }}
      />

      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <span className="text-3xl">{project.emoji}</span>
        <span
          className={`
            font-mono text-[11px] px-3 py-1 rounded-full border tracking-wide
            ${project.status === "Functional"
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
              : "bg-amber-500/10 text-amber-300 border-amber-500/20"
            }
          `}
        >
          ● {project.status}
        </span>
      </div>

      <h3 className="font-display font-bold text-[20px] text-[#f1f0ff] mb-2.5 tracking-tight">
        {project.title}
      </h3>
      <p className="text-[14px] text-white/45 leading-relaxed mb-6">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
  );
}
