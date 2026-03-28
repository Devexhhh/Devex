"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
      }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 h-[60px] transition-all duration-300
      ${scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/[0.07]" : "bg-transparent"}
    `}>
      {/* Same max-w-3xl centering as PageLayout */}
      <div className="mx-auto w-full max-w-3xl h-full flex items-center justify-between px-6">

        <span className="font-display font-extrabold text-[16px] tracking-tight shrink-0">
          <span className="shimmer-text">Devex</span>
        </span>

        <div className="flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="font-mono text-[13px] text-white/40 hover:text-white/85 transition-colors duration-200 tracking-wide bg-transparent border-none cursor-pointer p-0"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {!scrolled && (
            <span className="font-mono text-[11px] text-white/20 tabular-nums hidden md:block">
              {time}
            </span>
          )}
          <div className="flex gap-2">
            {[["GH", "#"], ["in", "#"], ["𝕏", "#"]].map(([label, href]) => (
              <a key={label} href={href}
                className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center font-mono text-[11px] text-white/40 hover:border-violet-500/50 hover:text-violet-300 hover:bg-violet-500/[0.08] transition-all duration-200 no-underline"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
}
