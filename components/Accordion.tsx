"use client";
import { useState } from "react";
import BorderGlow from "@/app/ui/BorderGlow";

interface AccordionProps {
    title: string;
    period: string;
    icon: React.ReactNode;
    descItems: string[];
    tags: string[];
    defaultOpen?: boolean;
}

export default function Accordion({ title, period, icon, descItems, tags, defaultOpen = false }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        // Inside Accordion.tsx, update the BorderGlow props:
        <BorderGlow
            edgeSensitivity={55}
            // coneSpread={40}
            fillOpacity={0}         // <-- Ensure this is exactly 0
            glowRadius={12}
            glowIntensity={1}

            glowColor="260 80 60"
            backgroundColor="0f0f11"
            borderRadius={12}
            colors={['#7c3aed', '#a855f7', '#38bdf8']}
            className="w-full h-full group !border-white/5 hover:!border-white/10 transition-colors duration-300 noisy-glass"
        >
            <div className="w-full flex flex-col">
                {/* Clickable Header */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center p-6 cursor-pointer text-left bg-transparent border-none outline-none group"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-white/40 group-hover:text-white/70 transition-colors">
                            {icon}
                        </span>
                        <span className="text-white/80 font-mono text-[15px] tracking-wide">
                            {title}
                        </span>
                    </div>
                    <span className="font-mono text-[12px] text-white/30 tracking-wider">
                        {period}
                    </span>
                </button>

                {/* The Magic CSS Grid Transition */}
                <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                >
                    <div className="overflow-hidden">
                        {/* Inner container for padding and the top border line */}
                        <div className="px-6 pb-6 pt-2 border-t border-white/5 mx-6">
                            <ul className="flex flex-col gap-3 mb-6 mt-4">
                                {descItems.map((desc, idx) => (
                                    <li key={idx} className="font-mono text-[13px] text-white/50 flex items-start gap-3">
                                        <span className="text-white/20 mt-[2px]">◦</span>
                                        <span className="leading-relaxed">{desc}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {tags.map((t) => (
                                    <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-[4px] border border-dashed border-white/15 text-white/40 bg-transparent tracking-wide">
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