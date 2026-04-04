"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import BorderGlow from "@/app/ui/BorderGlow";
import { IMAGES } from "@/lib/imagesData";

interface AccordionProps {
    title: string;
    period: string;
    icon: React.ReactNode;
    descItems: string[];
    tags: string[];
    defaultOpen?: boolean;
    imageKey?: keyof typeof IMAGES.education;
}

export default function Accordion({
    title,
    period,
    icon,
    descItems,
    tags,
    defaultOpen = false,
    imageKey
}: AccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const glowBg = mounted && resolvedTheme === 'light' ? "ffffff" : "0f0f11";
    const imageSrc = imageKey ? IMAGES.education[imageKey] : null;

    return (
        <BorderGlow
            edgeSensitivity={55}
            fillOpacity={0}
            glowRadius={12}
            glowIntensity={1}
            glowColor="260 80 60"
            backgroundColor={glowBg}
            borderRadius={12}
            colors={['#7c3aed', '#a855f7', '#38bdf8']}
            className="w-full h-full group !border-black/5 hover:!border-black/10 dark:!border-white/5 dark:hover:!border-white/10 transition-colors duration-300 noisy-glass"
        >
            <div className="w-full flex flex-col">
                {/* Clickable Header - Adjusted padding and text sizing for mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 cursor-pointer text-left bg-transparent border-none outline-none group gap-2 sm:gap-0"
                >
                    <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-black/40 group-hover:text-black/70 dark:text-white/40 dark:group-hover:text-white/70 transition-colors duration-300">
                            {icon}
                        </span>
                        <span className="text-black/80 dark:text-white/80 font-mono text-[14px] sm:text-[15px] tracking-wide transition-colors duration-300 leading-tight">
                            {title}
                        </span>
                    </div>
                    <span className="font-mono text-[11px] sm:text-[12px] text-black/50 dark:text-white/30 tracking-wider transition-colors duration-300 sm:shrink-0 ml-7 sm:ml-0">
                        {period}
                    </span>
                </button>

                <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">
                        {/* Inner container for padding - tighter on mobile */}
                        <div className="px-4 pb-4 pt-2 sm:px-6 sm:pb-6 border-t border-black/5 dark:border-white/5 mx-4 sm:mx-6 transition-colors duration-300">

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-5 sm:mb-6 mt-4">

                                {/* Image Renderer */}
                                {imageSrc && (
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-black/5 dark:bg-white/5 flex items-center justify-center p-2 border border-black/5 dark:border-white/10">
                                        <img src={imageSrc} alt={`${title} logo`} className="w-full h-full object-contain" />
                                    </div>
                                )}

                                {/* Descriptions */}
                                <ul className="flex flex-col gap-2 sm:gap-3">
                                    {descItems.map((desc, idx) => (
                                        <li key={idx} className="font-mono text-[12px] sm:text-[13px] text-black/60 dark:text-white/50 flex items-start gap-2 sm:gap-3 transition-colors duration-300">
                                            <span className="text-black/20 dark:text-white/20 mt-[2px] transition-colors duration-300">◦</span>
                                            <span className="leading-relaxed">{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {tags.map((t) => (
                                    <span key={t} className="font-mono text-[9px] sm:text-[10px] px-2 py-1 rounded-[4px] border border-dashed border-black/15 dark:border-white/15 text-black/50 dark:text-white/40 bg-transparent tracking-wide transition-colors duration-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BorderGlow>
    );
}