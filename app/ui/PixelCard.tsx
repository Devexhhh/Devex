"use client";

import { useEffect, useRef, useState } from 'react';
import { JSX } from 'react';

// ... (Pixel class and getEffectiveSpeed remain exactly the same as your snippet)
class Pixel {
    width: number;
    height: number;
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    color: string;
    speed: number;
    size: number;
    sizeStep: number;
    minSize: number;
    maxSizeInteger: number;
    maxSize: number;
    delay: number;
    counter: number;
    counterStep: number;
    isIdle: boolean;
    isReverse: boolean;
    isShimmer: boolean;

    constructor(
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        color: string,
        speed: number,
        delay: number
    ) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.ctx = context;
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = this.getRandomValue(0.1, 0.9) * speed;
        this.size = 0;
        this.sizeStep = Math.random() * 0.4;
        this.minSize = 0.5;
        this.maxSizeInteger = 2;
        this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
        this.delay = delay;
        this.counter = 0;
        this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
        this.isIdle = false;
        this.isReverse = false;
        this.isShimmer = false;
    }

    getRandomValue(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    draw() {
        const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
    }

    appear() {
        this.isIdle = false;
        if (this.counter <= this.delay) {
            this.counter += this.counterStep;
            return;
        }
        if (this.size >= this.maxSize) {
            this.isShimmer = true;
        }
        if (this.isShimmer) {
            this.shimmer();
        } else {
            this.size += this.sizeStep;
        }
        this.draw();
    }

    disappear() {
        this.isShimmer = false;
        this.counter = 0;
        if (this.size <= 0) {
            this.isIdle = true;
            return;
        } else {
            this.size -= 0.1;
        }
        this.draw();
    }

    shimmer() {
        if (this.size >= this.maxSize) {
            this.isReverse = true;
        } else if (this.size <= this.minSize) {
            this.isReverse = false;
        }
        if (this.isReverse) {
            this.size -= this.speed;
        } else {
            this.size += this.speed;
        }
    }
}

function getEffectiveSpeed(value: number, reducedMotion: boolean) {
    const min = 0;
    const max = 100;
    const throttle = 0.001;

    if (value <= min || reducedMotion) {
        return min;
    } else if (value >= max) {
        return max * throttle;
    } else {
        return value * throttle;
    }
}

const VARIANTS = {
    default: {
        gap: 5,
        speed: 35,
        colors: '#94a3b8,#cbd5e1,#e2e8f0', // Light mode greys
        darkColors: '#334155,#1e293b,#0f172a', // Dark mode greys
        noFocus: false
    },
    blue: {
        gap: 10,
        speed: 25,
        colors: '#e0f2fe,#7dd3fc,#0ea5e9',
        darkColors: '#0c4a6e,#075985,#0369a1',
        noFocus: false
    },
    yellow: {
        gap: 3,
        speed: 20,
        colors: '#fef08a,#fde047,#eab308',
        darkColors: '#713f12,#854d0e,#a16207',
        noFocus: false
    },
    pink: {
        gap: 6,
        speed: 80,
        colors: '#fecdd3,#fda4af,#e11d48',
        darkColors: '#881337,#9f1239,#be123c',
        noFocus: true
    }
};

interface PixelCardProps {
    variant?: 'default' | 'blue' | 'yellow' | 'pink';
    gap?: number;
    speed?: number;
    colors?: string;
    noFocus?: boolean;
    className?: string;
    children: React.ReactNode;
}

export default function PixelCard({
    variant = 'default',
    gap,
    speed,
    colors,
    noFocus,
    className = '',
    children
}: PixelCardProps): JSX.Element {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pixelsRef = useRef<Pixel[]>([]);
    const animationRef = useRef<number | null>(null);
    const timePreviousRef = useRef(performance.now());

    // Config logic
    const variantCfg = VARIANTS[variant] || VARIANTS.default;
    const finalGap = gap ?? variantCfg.gap;
    const finalSpeed = speed ?? variantCfg.speed;
    const finalNoFocus = noFocus ?? variantCfg.noFocus;

    const initPixels = () => {
        if (!containerRef.current || !canvasRef.current) return;

        const isDarkMode = document.documentElement.classList.contains('dark');
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Select palette based on theme
        const activeColors = colors ?? (isDarkMode ? variantCfg.darkColors : variantCfg.colors);
        const colorsArray = activeColors.split(',');

        const rect = containerRef.current.getBoundingClientRect();
        const width = Math.floor(rect.width);
        const height = Math.floor(rect.height);
        const ctx = canvasRef.current.getContext('2d');

        canvasRef.current.width = width;
        canvasRef.current.height = height;

        const pxs = [];
        for (let x = 0; x < width; x += parseInt(finalGap.toString(), 10)) {
            for (let y = 0; y < height; y += parseInt(finalGap.toString(), 10)) {
                const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
                const dx = x - width / 2;
                const dy = y - height / 2;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const delay = reducedMotion ? 0 : distance;

                if (!ctx) return;
                pxs.push(new Pixel(canvasRef.current, ctx, x, y, color, getEffectiveSpeed(finalSpeed, reducedMotion), delay));
            }
        }
        pixelsRef.current = pxs;
    };

    const doAnimate = (fnName: keyof Pixel) => {
        animationRef.current = requestAnimationFrame(() => doAnimate(fnName));
        const timeNow = performance.now();
        const timePassed = timeNow - timePreviousRef.current;
        const timeInterval = 1000 / 60;

        if (timePassed < timeInterval) return;
        timePreviousRef.current = timeNow - (timePassed % timeInterval);

        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx || !canvasRef.current) return;

        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        let allIdle = true;
        for (let i = 0; i < pixelsRef.current.length; i++) {
            const pixel = pixelsRef.current[i];
            // @ts-ignore
            pixel[fnName]();
            if (!pixel.isIdle) allIdle = false;
        }
        if (allIdle && animationRef.current !== null) {
            cancelAnimationFrame(animationRef.current);
        }
    };

    const handleAnimation = (name: keyof Pixel) => {
        if (animationRef.current !== null) {
            cancelAnimationFrame(animationRef.current);
        }
        animationRef.current = requestAnimationFrame(() => doAnimate(name));
    };

    useEffect(() => {
        initPixels();

        // Re-initialize if theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    initPixels();
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        const resizeObserver = new ResizeObserver(() => initPixels());
        if (containerRef.current) resizeObserver.observe(containerRef.current);

        return () => {
            observer.disconnect();
            resizeObserver.disconnect();
            if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
        };
    }, [finalGap, finalSpeed, colors, finalNoFocus, variant]);

    return (
        <div
            ref={containerRef}
            className={`
                h-max w-max relative overflow-hidden grid place-items-center aspect-[4/5] 
                border border-black/10 dark:border-white/10 
                bg-white dark:bg-[#0a0a0c] 
                rounded-[25px] isolate transition-colors duration-300 
                ease-[cubic-bezier(0.5,1,0.89,1)] select-none 
                ${className}
            `}
            onMouseEnter={() => handleAnimation('appear')}
            onMouseLeave={() => handleAnimation('disappear')}
            onFocus={finalNoFocus ? undefined : () => handleAnimation('appear')}
            onBlur={finalNoFocus ? undefined : () => handleAnimation('disappear')}
            tabIndex={finalNoFocus ? -1 : 0}
        >
            <canvas className="absolute inset-0 w-full h-full block pointer-events-none" ref={canvasRef} />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                {children}
            </div>
        </div>
    );
}