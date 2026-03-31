"use client";
import React, { useRef, useState } from "react";

export default function ParallaxCard() {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Dampened the X-axis rotation slightly (x/40) because the card is much wider now
        setRotate({ x: -(y / 20), y: x / 40 });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div className="flex justify-center items-center perspective-[1000px] w-full">
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                    transition: isHovered ? "none" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                    transformStyle: "preserve-3d",
                }}
                // Swapped to a wide, horizontal layout (w-full max-w-3xl h-[280px])
                className="relative w-full max-w-[800px] min-h-[250px] md:h-[280px] rounded-2xl bg-gradient-to-br from-violet-900/10 to-black border border-white/10 backdrop-blur-md shadow-2xl cursor-pointer group overflow-hidden noisy-glass"
            >
                {/* Background Graphic Layer (Pushed deep into the card) */}
                <div
                    className="absolute right-[-10%] bottom-[-20%] text-white/5 font-display font-black text-[150px] md:text-[200px] leading-none pointer-events-none"
                    style={{ transform: "translateZ(-30px)" }}
                >
                    AFK
                </div>

                {/* Inner Content - Pushed out on the Z-axis for the Hologram pop */}
                <div
                    className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none"
                    style={{ transform: "translateZ(60px)" }}
                >
                    {/* Top Row */}
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                            <span className="text-lg">👾</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[11px] text-violet-400 font-medium tracking-widest uppercase bg-violet-500/10 px-3 py-1.5 rounded-full border border-violet-500/20">
                            <span>Enter Archive</span>
                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="max-w-md">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 tracking-tight drop-shadow-lg">
                            The Archive
                        </h3>
                        <p className="text-[13px] md:text-sm font-sans text-white/60 leading-relaxed drop-shadow-md">
                            Explorations outside the code editor. A collection of thoughts, takeaways, and philosophies from anime, gaming, and art.
                        </p>
                    </div>
                </div>

                {/* Dynamic Glare Effect tied to mouse movement */}
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at ${rotate.y * 10 + 50}% ${-rotate.x * 10 + 50}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
                    }}
                />
            </div>
        </div>
    );
}