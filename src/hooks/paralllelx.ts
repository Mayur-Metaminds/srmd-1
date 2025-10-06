import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface ParallaxProps {
    speed?: number; // smaller = slower
}

export function useParallax({ speed = 0.3 }: ParallaxProps = {}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollY } = useScroll();

    const y: MotionValue<number> = useTransform(scrollY, (value) => {
        if (!ref.current) return 0;

        const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollOffset = value - elementTop + windowHeight;

        return scrollOffset * speed;
    });

    return { ref, y };
}
