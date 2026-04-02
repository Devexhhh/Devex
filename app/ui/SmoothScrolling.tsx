"use client";

import { ReactLenis, useLenis } from 'lenis/react';
import { ReactNode, useLayoutEffect, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Next.js SSR throws a warning if you use useLayoutEffect on the server.
// This safely tells it to only run on the client.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function ScrollToTop() {
    const pathname = usePathname();
    const lenis = useLenis();

    useIsomorphicLayoutEffect(() => {
        // 1. Force the native browser scroll to the top before the paint
        window.scrollTo(0, 0);

        // 2. Force the Lenis physics engine to sync to the top instantly
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        }
    }, [pathname, lenis]);

    return null;
}

export default function SmoothScrolling({ children }: { children: ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.04,
                wheelMultiplier: 0.8,
                smoothWheel: true,
            }}
        >
            <ScrollToTop />
            {/* Bypass the TypeScript ReactNode error if you are still getting it */}
            {children as any}
        </ReactLenis>
    );
}