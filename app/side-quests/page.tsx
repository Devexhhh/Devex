"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // <-- Added Image import
import Navbar from "@/components/Navbar";
import BottomDock from "@/components/BottomDock";
import HorizontalSeparator from "@/app/ui/HorizontalSeparator";
import { SIDE_QUESTS_DATA } from "@/lib/data";
import { QUEST_IMAGES } from "@/lib/imagesData"; // <-- Imported QUEST_IMAGES
import PageLayout from "@/components/PageLayout";
import DarkVeil from "@/app/ui/DarkVeil";
import BackgroundFade from "@/app/ui/BackgroundFade";
import Footer from "@/components/Footer";

type Category = "Anime" | "Gaming" | "Drawing" | "Characters";

function SideQuestsContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");

    const initialCategory: Category =
        categoryParam && Object.keys(SIDE_QUESTS_DATA).includes(categoryParam)
            ? (categoryParam as Category)
            : "Anime";

    const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);
    const [activeItem, setActiveItem] = useState(SIDE_QUESTS_DATA[initialCategory][0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleCategoryChange = (category: Category) => {
        setActiveCategory(category);
        setActiveItem(SIDE_QUESTS_DATA[category][0]);
        setIsOpen(false);
    };

    const currentItems = SIDE_QUESTS_DATA[activeCategory];

    return (
        <>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24 md:pt-[120px] pb-10">

                {/* Header */}
                <div className="mb-8 md:mb-10 opacity-0 animate-mount">
                    <Link href="/" className="inline-flex items-center gap-2 font-mono text-[12px] text-black/50 hover:text-violet-600 dark:text-white/50 dark:hover:text-violet-400 transition-colors mb-8">
                        ← BACK TO HOME
                    </Link>
                    <h1 className="font-display font-mono text-black dark:text-[#f1f0ff] tracking-tight text-3xl sm:text-4xl md:text-[35px]">
                        Side-Quests
                    </h1>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-8 opacity-0 animate-mount delay-100">
                    {(Object.keys(SIDE_QUESTS_DATA) as Category[]).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-4 py-2 rounded-full font-mono text-[12px] transition-all duration-300 cursor-pointer ${activeCategory === cat
                                ? "bg-black text-white dark:bg-white dark:text-black shadow-lg"
                                : "bg-black/[0.03] border border-black/10 text-black/60 hover:bg-black/10 dark:bg-white/[0.03] dark:border-white/10 dark:text-white/60 dark:hover:bg-white/10"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <HorizontalSeparator className="mb-8 opacity-0 animate-mount delay-100" />

                {/* ⭐ HERO CARD */}
                <div
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="group relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] bg-white dark:bg-[#0a0a0c] border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden mb-12 shadow-2xl opacity-0 animate-mount delay-200 isolate cursor-pointer"
                >
                    {/* 1. Background Image */}
                    <Image
                        src={QUEST_IMAGES[activeItem.imageKey]}
                        alt={activeItem.title}
                        fill
                        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 z-0"
                        priority
                    />

                    {/* 2. Color overlay using mix-blend-multiply for a stylized mood */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeItem.color} opacity-60 mix-blend-multiply z-0 transition-opacity duration-500`} />

                    {/* 3. Darkening gradient to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0" />

                    {/* Default Overlay */}
                    <div
                        className={`absolute inset-0 p-6 flex flex-col justify-between pointer-events-none transition-opacity duration-500 z-10
                        ${isOpen ? "opacity-0" : "opacity-100 md:group-hover:opacity-0"}`}
                    >
                        <div className="flex justify-between font-mono text-[11px] text-white/70">
                            <span>#1</span>
                            <span>{activeItem.year}</span>
                            <span className="truncate max-w-[120px] text-right">{activeItem.creator}</span>
                        </div>

                        <div className="flex flex-col gap-1 sm:gap-2">
                            {/* Title */}
                            <h2 className="font-display font-bold text-lg sm:text-2xl md:text-3xl tracking-tight text-white drop-shadow-lg leading-tight">
                                {activeItem.title}
                            </h2>

                            {/* Rating */}
                            <span className="font-mono text-[10px] sm:text-[11px] text-white/80">
                                {activeItem.rating} ☆
                            </span>
                        </div>
                    </div>

                    {/* Pop-up Info Overlay */}
                    <div
                        className={`absolute inset-0 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-center p-8
                        ${isOpen ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}
                    >
                        <div className="transition-transform duration-500 md:translate-y-4 md:group-hover:translate-y-0 overflow-y-auto">
                            <h3 className="font-display text-2xl font-bold text-black dark:text-white mb-2">
                                {activeItem.title}
                            </h3>
                            <p className="font-mono text-[13px] text-violet-600 dark:text-violet-400 mb-4 uppercase drop-shadow-sm">
                                {activeItem.subtitle}
                            </p>
                            <p className="font-mono text-[14px] text-black/90 dark:text-white/90 leading-relaxed">
                                {activeItem.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="opacity-0 animate-mount delay-200">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="font-mono text-[13px] text-violet-600 dark:text-violet-500">
                            {activeCategory} /
                        </span>
                        <h2 className="font-mono text-[14px] text-black/60 dark:text-white/80 uppercase tracking-widest">
                            Watchlist
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {currentItems.map((item) => {
                            const isActive = activeItem.id === item.id;

                            return (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        setActiveItem(item);
                                        setIsOpen(false);
                                    }}
                                    className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group active:scale-95 ${isActive
                                        ? "ring-2 ring-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                                        : "border border-black/10 hover:border-black/30 dark:border-white/10 dark:hover:border-white/30 opacity-80 hover:opacity-100"
                                        }`}
                                >
                                    {/* Background Image */}
                                    <Image
                                        src={QUEST_IMAGES[item.imageKey]}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 z-0"
                                    />

                                    {/* Color Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50 mix-blend-multiply z-0`} />

                                    {/* Bottom Shadow for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-0 group-hover:opacity-80 transition-opacity duration-300" />

                                    <div className="absolute bottom-3 left-3 right-3 z-10">
                                        <h4 className="font-display text-[13px] font-medium text-white truncate drop-shadow-md">
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <HorizontalSeparator className="mt-12" />
            <Footer />
        </>
    );
}

export default function SideQuestsPage() {
    return (
        <main className="relative min-h-screen bg-gray-50 text-gray-900 dark:bg-[#050505] dark:text-white overflow-x-hidden transition-colors duration-300">

            <BackgroundFade className="fixed inset-0 z-0 opacity-20 dark:opacity-50 pointer-events-none">
                <DarkVeil />
            </BackgroundFade>

            <div className="fixed inset-0 z-0 bg-gradient-to-b from-gray-50/80 via-transparent to-gray-50/90 dark:from-[#050505]/80 dark:via-transparent dark:to-[#050505]/90 pointer-events-none" />

            <Navbar />
            <BottomDock />

            <PageLayout>
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-mono text-[14px] text-black/30 dark:text-white/30">Loading...</div>}>
                    <SideQuestsContent />
                </Suspense>
            </PageLayout>
        </main>
    );
}