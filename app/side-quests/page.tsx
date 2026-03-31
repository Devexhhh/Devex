"use client";

import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BottomDock from "@/components/BottomDock";
import HorizontalSeparator from "@/app/ui/HorizontalSeparator";
import { SIDE_QUESTS_DATA } from "@/lib/data";

type Category = "Anime" | "Gaming" | "Drawing";

// We extract the main UI into a separate component so we can wrap it in Suspense
function SideQuestsContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");

    // Validate the parameter (If someone types nonsense in the URL, default to "Anime")
    const initialCategory: Category =
        categoryParam && Object.keys(SIDE_QUESTS_DATA).includes(categoryParam)
            ? (categoryParam as Category)
            : "Anime";

    const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);
    const [activeItem, setActiveItem] = useState(SIDE_QUESTS_DATA[initialCategory][0]);

    // Handle switching tabs manually
    const handleCategoryChange = (category: Category) => {
        setActiveCategory(category);
        setActiveItem(SIDE_QUESTS_DATA[category][0]);
    };

    const currentItems = SIDE_QUESTS_DATA[activeCategory];

    return (
        <div className="relative z-10 w-full max-w-[800px] mx-auto px-6 pt-[120px] pb-[120px] border-x border-transparent lg:border-white/10 min-h-screen">
            {/* Top Header */}
            <div className="mb-10">
                <Link href="/" className="inline-flex items-center gap-2 font-mono text-[12px] text-white/50 hover:text-violet-400 transition-colors mb-8">
                    ← BACK TO HOME
                </Link>
                <h1 className="font-display font-bold text-[#f1f0ff] leading-tight" style={{ fontSize: "clamp(32px, 5vw, 48px)" }}>
                    Side-Quests
                </h1>
            </div>

            {/* Category Navigation Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
                {(Object.keys(SIDE_QUESTS_DATA) as Category[]).map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`px-5 py-2 rounded-full font-mono text-[12px] transition-all duration-300 ${activeCategory === cat
                                ? "bg-white text-black font-semibold"
                                : "bg-white/[0.03] border border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <HorizontalSeparator className="mb-8" />

            {/* --- MAIN FEATURED CARD (Big Card) --- */}
            <div className="group relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#0a0a0c] border border-white/10 rounded-2xl overflow-hidden mb-12 shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${activeItem.color} transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:blur-sm`} />

                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none transition-opacity duration-500 group-hover:opacity-0">
                    <div className="flex justify-between items-start font-mono text-[11px] text-white/70">
                        <span>#1</span>
                        <span>{activeItem.year}</span>
                        <span className="underline underline-offset-4 decoration-white/30">{activeItem.creator}</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="font-mono text-[11px] text-white/70">{activeItem.rating} ☆</span>
                        <h2 className="font-display font-bold text-3xl tracking-tight text-white drop-shadow-lg">{activeItem.title}</h2>
                    </div>
                </div>

                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-center p-8 md:p-12">
                    <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                        <h3 className="font-display text-2xl font-bold text-white mb-2">{activeItem.title}</h3>
                        <p className="font-mono text-[13px] text-violet-400 mb-4 tracking-wide uppercase">{activeItem.subtitle}</p>
                        <p className="font-sans text-[14px] md:text-[15px] text-white/80 leading-relaxed max-w-2xl">{activeItem.description}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[13px] text-violet-500">{activeCategory} //</span>
                <h2 className="font-mono text-[14px] text-white/80 uppercase tracking-widest">Watchlist</h2>
            </div>

            {/* --- THUMBNAIL GRID --- */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {currentItems.map((item) => {
                    const isActive = activeItem.id === item.id;
                    return (
                        <div
                            key={item.id}
                            onClick={() => setActiveItem(item)}
                            className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group
                ${isActive ? "ring-2 ring-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)]" : "border border-white/10 hover:border-white/30 opacity-70 hover:opacity-100"}
              `}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} group-hover:scale-105 transition-transform duration-500`} />
                            <div className="absolute bottom-2 left-2 right-2">
                                <h4 className="font-display font-bold text-[12px] text-white drop-shadow-md truncate">{item.title}</h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// The main page export now wraps everything safely in a Suspense boundary
export default function SideQuestsPage() {
    return (
        <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
            <Navbar />
            <BottomDock />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white/30">Loading...</div>}>
                <SideQuestsContent />
            </Suspense>
        </main>
    );
}