"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind sm breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Clock
  useEffect(() => {
    setMounted(true);

    const tick = () => {
      const options: Intl.DateTimeFormatOptions = isMobile
        ? { hour: "2-digit", minute: "2-digit" } // 📱 mobile → no seconds
        : { hour: "2-digit", minute: "2-digit", second: "2-digit" }; // 💻 desktop

      setTime(new Date().toLocaleTimeString("en-IN", options));
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [isMobile]);

  // Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="relative w-full max-w-[800px] flex justify-center">
        <div
          className={`pointer-events-auto flex items-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
          ${isScrolled
              ? "w-[92%] sm:w-[85%] md:w-[720px] h-[52px] md:h-[60px] px-4 sm:px-6 md:px-8 mt-3 md:mt-5 bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full shadow-lg justify-between"
              : "w-full h-[60px] md:h-[80px] px-4 sm:px-6 md:px-10 mt-0 bg-transparent border-transparent rounded-none shadow-none justify-between"
            }`}
        >
          {/* Brand */}
          <span
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-bold text-[14px] sm:text-[16px] md:text-[18px] tracking-tight text-black/70 dark:text-white cursor-pointer hover:text-violet-600 dark:hover:text-violet-300 transition-colors"
          >
            Devex
          </span>

          {/* Clock (always visible now) */}
          <span className="font-mono text-[11px] sm:text-[12px] text-black/60 dark:text-white/75 tabular-nums tracking-widest">
            {mounted ? time : "00:00"}
          </span>
        </div>
      </div>
    </div>
  );
}