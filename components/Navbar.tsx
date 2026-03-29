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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300">
      <nav
        className={`
          pointer-events-auto transition-all duration-300 ease-out flex items-center
          ${scrolled
            ? "mt-4 h-[48px] px-6 bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "mt-0 w-full max-w-3xl h-[80px] px-6 bg-transparent border-transparent"
          }
        `}
      >
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "w-auto gap-8" : "w-full gap-4"}`}>

          <span className="font-display font-extrabold text-[16px] tracking-tight shrink-0 text-white cursor-pointer">
            Devex
          </span>

          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="font-mono text-[12px] text-white/40 hover:text-white transition-colors duration-200 tracking-wide bg-transparent border-none cursor-pointer p-0"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Hide time and socials when collapsed into the pill to keep it clean */}
          <div className={`flex items-center gap-3 shrink-0 transition-opacity duration-200 ${scrolled ? "hidden" : "opacity-100"}`}>
            <span className="font-mono text-[11px] text-white/30 tabular-nums hidden md:block">
              {time}
            </span>
            <div className="flex gap-2">
              {[["GH", "#"], ["in", "#"], ["𝕏", "#"]].map(([label, href]) => (
                <a key={label} href={href}
                  className="w-7 h-7 rounded-md border border-white/10 bg-white/[0.02] flex items-center justify-center font-mono text-[10px] text-white/40 hover:border-white/30 hover:text-white transition-all duration-200 no-underline"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
}