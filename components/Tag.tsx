interface TagProps {
  children: React.ReactNode;
  accent?: boolean;
}

export default function Tag({ children, accent = false }: TagProps) {
  return (
    <span
      className={`
        inline-block font-mono text-[11px] px-3 py-1 rounded-full tracking-wide
        ${accent
          ? "border border-violet-500/40 text-violet-300/80 bg-violet-500/[0.07]"
          : "border border-white/10 text-white/40 bg-transparent"
        }
      `}
    >
      {children}
    </span>
  );
}
