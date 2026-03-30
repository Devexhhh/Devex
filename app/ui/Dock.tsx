"use client";

import {
    motion,
    MotionValue,
    useMotionValue,
    useSpring,
    useTransform,
    type SpringOptions,
    AnimatePresence
} from 'motion/react';
import React, { Children, cloneElement, useEffect, useRef, useState } from 'react';

export type DockItemData = {
    icon?: React.ReactNode;
    label?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    isSeparator?: boolean; // Added support for the thin dividing lines
};

export type DockProps = {
    items: DockItemData[];
    className?: string;
    distance?: number;
    baseItemSize?: number;
    magnification?: number;
    spring?: SpringOptions;
};

type DockItemProps = {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    mouseX: MotionValue<number>;
    spring: SpringOptions;
    distance: number;
    baseItemSize: number;
    magnification: number;
};

function DockItem({
    children,
    className = '',
    onClick,
    mouseX,
    spring,
    distance,
    magnification,
    baseItemSize
}: DockItemProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isHovered = useMotionValue(0);

    const mouseDistance = useTransform(mouseX, val => {
        const rect = ref.current?.getBoundingClientRect() ?? {
            x: 0,
            width: baseItemSize
        };
        return val - rect.x - baseItemSize / 2;
    });

    const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
    const size = useSpring(targetSize, spring);

    return (
        <motion.div
            ref={ref}
            style={{ width: size, height: size }}
            onHoverStart={() => isHovered.set(1)}
            onHoverEnd={() => isHovered.set(0)}
            onFocus={() => isHovered.set(1)}
            onBlur={() => isHovered.set(0)}
            onClick={onClick}
            className={`relative inline-flex items-center justify-center rounded-full bg-transparent hover:bg-white/[0.08] transition-colors cursor-pointer ${className}`}
            tabIndex={0}
            role="button"
            aria-haspopup="true"
        >
            {Children.map(children, child =>
                React.isValidElement(child)
                    ? cloneElement(child as React.ReactElement<{ isHovered?: MotionValue<number> }>, { isHovered })
                    : child
            )}
        </motion.div>
    );
}

function DockLabel({ children, isHovered }: { children: React.ReactNode; isHovered?: MotionValue<number> }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isHovered) return;
        const unsubscribe = isHovered.on('change', latest => setIsVisible(latest === 1));
        return () => unsubscribe();
    }, [isHovered]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: -10 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-10 left-1/2 w-fit whitespace-pre rounded-md border border-white/10 bg-[#0a0a0c]/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-mono tracking-wide text-white shadow-xl pointer-events-none"
                    style={{ x: '-50%' }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default function Dock({
    items,
    className = '',
    spring = { mass: 0.1, stiffness: 150, damping: 12 },
    magnification = 60, // Dialed back slightly for a sleeker look
    distance = 150,
    baseItemSize = 44 // Reduced base size to match the tight pill aesthetic
}: DockProps) {
    const mouseX = useMotionValue(Infinity);
    const isHovered = useMotionValue(0);

    return (
        <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.div
                onMouseMove={({ pageX }) => {
                    isHovered.set(1);
                    mouseX.set(pageX);
                }}
                onMouseLeave={() => {
                    isHovered.set(0);
                    mouseX.set(Infinity);
                }}
                // The Sleek Pill: Auto-height, tight padding, double border aesthetic
                className={`${className} pointer-events-auto flex items-center justify-center gap-1 rounded-full border border-white/10 bg-[#050505]/60 backdrop-blur-2xl p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-1 ring-white/5 noisy-glass`}
                role="toolbar"
                aria-label="Application dock"
            >
                {items.map((item, index) => {
                    // Render a separator line if requested
                    if (item.isSeparator) {
                        return <div key={index} className="w-px h-6 bg-white/10 mx-1.5 shrink-0" />;
                    }

                    return (
                        <DockItem
                            key={index}
                            onClick={item.onClick}
                            className={item.className}
                            mouseX={mouseX}
                            spring={spring}
                            distance={distance}
                            magnification={magnification}
                            baseItemSize={baseItemSize}
                        >
                            <div className="flex items-center justify-center text-white/60 transition-colors duration-200">
                                {item.icon}
                            </div>
                            <DockLabel>{item.label}</DockLabel>
                        </DockItem>
                    );
                })}
            </motion.div>
        </div>
    );
}