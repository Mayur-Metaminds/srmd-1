import { useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export function useRotateScroll({ rotateDeg = 30 }: { rotateDeg?: number } = {}) {
    const ref = useRef<HTMLDivElement | SVGGElement | SVGSVGElement | HTMLImageElement | SVGPathElement | null>(null);
    const rotationSpeed = 1    // make it spin 2× faster
    const stiffness = 80       // snappy or smooth?
    const damping = 40
    // Track scroll progress for this element
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"], // start/end triggers
    });
    const raw_rotate = useTransform(scrollYProgress, [0, 1], [0, rotationSpeed * rotateDeg]);
    const rotate = useSpring(raw_rotate, {
        stiffness,
        damping,
        mass: 0.4,
    });
    return { ref, rotate }

}