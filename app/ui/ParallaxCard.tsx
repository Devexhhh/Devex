"use client";
import React, { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ParallaxCard() {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // <-- Added mobile state

    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check if device is mobile or touch-first
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768 || window.matchMedia("(hover: none)").matches);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isMobile || !cardRef.current) return; // Prevent rotation on mobile
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        setRotate({ x: -(y / 20), y: x / 40 });
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        setIsHovered(false);
        setRotate({ x: 0, y: 0 });
    };

    const glareColor = mounted && resolvedTheme === 'light'
        ? "rgba(255,255,255,0.8)"
        : "rgba(255,255,255,0.08)";

    return (
        <div className="flex justify-center items-center perspective-[1000px] w-full">
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => !isMobile && setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                    transition: isHovered ? "none" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full max-w-[800px] min-h-[200px] sm:min-h-[250px] md:h-[280px] rounded-[24px] sm:rounded-2xl bg-white/80 dark:bg-gradient-to-br dark:from-violet-900/10 dark:to-black border border-black/10 dark:border-white/10 backdrop-blur-md shadow-xl dark:shadow-2xl cursor-pointer group overflow-hidden noisy-glass transition-colors duration-300"
            >
                <div
                    className="absolute right-[-5%] sm:right-[-10%] bottom-[-15%] sm:bottom-[-20%] text-black/5 dark:text-white/5 font-display font-black text-[120px] sm:text-[150px] md:text-[200px] leading-none pointer-events-none transition-colors duration-300"
                    style={{ transform: isMobile ? "none" : "translateZ(-30px)" }}
                >
                    AFK
                </div>

                <div
                    className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between pointer-events-none"
                    style={{ transform: isMobile ? "none" : "translateZ(60px)" }}
                >
                    {/* Top Row */}
                    <div className="flex justify-between items-start">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-violet-100/50 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 flex items-center justify-center shadow-sm dark:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-colors duration-300">
                            <span className="text-[14px] sm:text-lg">👾</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[9px] sm:text-[11px] text-violet-600 dark:text-violet-400 font-medium tracking-widest uppercase bg-violet-500/5 dark:bg-violet-500/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-violet-200 dark:border-violet-500/20 transition-colors duration-300">
                            <span>Enter Archive</span>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="max-w-md">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-mono text-black dark:text-white mb-2 sm:mb-3 tracking-tight drop-shadow-sm dark:drop-shadow-lg transition-colors duration-300">
                            The Archive
                        </h3>
                        <p className="text-[12px] sm:text-[13px] md:text-sm font-mono text-black/60 dark:text-white/60 leading-relaxed drop-shadow-sm dark:drop-shadow-md transition-colors duration-300 line-clamp-2 sm:line-clamp-none">
                            Explorations outside the code editor. A collection of thoughts, takeaways, and philosophies from anime, gaming, and art.
                        </p>
                    </div>
                </div>

                {!isMobile && (
                    <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay dark:mix-blend-normal"
                        style={{
                            background: `radial-gradient(circle at ${rotate.y * 10 + 50}% ${-rotate.x * 10 + 50}%, ${glareColor} 0%, transparent 60%)`,
                        }}
                    />
                )}
            </div>
        </div>
    );
}