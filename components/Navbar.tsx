"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Real-time IST Clock
  useEffect(() => {
    setMounted(true);
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
      }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Scroll listener for the pill effect
  useEffect(() => {
    const handleScroll = () => {
      // Trigger the pill effect after scrolling 40px down
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">

      {/* Your exactly specified layout container */}
      <div className="relative w-full max-w-[800px] shrink-0 border-x border-transparent lg:transparent flex justify-center">

        {/* The Animating Navbar / Pill */}
        <div
          className={`pointer-events-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isScrolled
            ? "w-[92%] md:w-[720px] h-[60px] px-8 mt-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl"
            : "w-full h-[80px] px-6 md:px-10 mt-0 bg-transparent border-transparent rounded-none shadow-none"
            }`}
        >
          <span
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display font-extrabold text-[18px] tracking-tight text-white cursor-pointer hover:text-violet-300 transition-colors drop-shadow-md"
          >
            Devex
          </span>
          <span className="font-mono text-[12px] text-white/75 tabular-nums hidden md:block tracking-widest">
            {mounted ? time : "00:00:00 PM"}
          </span>
        </div>

      </div>

    </div>
  );
}