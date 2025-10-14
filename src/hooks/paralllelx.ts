import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface ParallaxProps {
    speed?: number; // smaller = slower
}

export function useParallax({ speed = 0.3 }: ParallaxProps = {}) {
    const ref = useRef<HTMLDivElement | SVGSVGElement | HTMLImageElement | null>(null);
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



interface ParallaxProps {
    speed?: number; // smaller = slower
    isRotate?: boolean;
}

export function useParallaxx({ speed = 0.3, isRotate = false }: ParallaxProps = {}) {
    const ref = useRef<HTMLDivElement | SVGSVGElement | HTMLImageElement | null>(null);
    const { scrollY } = useScroll();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const rotate: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, 90])
    const y: MotionValue<number> = useTransform(scrollY, (value) => {
        if (!ref.current) return 0;

        const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollOffset = value - elementTop + windowHeight;
        return scrollOffset * speed;
    });
    if (!isRotate) {
        return { ref, y };
    }
    return { ref, y, rotate };
}
