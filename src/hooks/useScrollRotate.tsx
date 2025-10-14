import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function useRotateScroll({ rotateDeg = 90 }: { rotateDeg?: number }={}) {
    const ref = useRef<HTMLElement | null>(null);

    // Track scroll progress for this element
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"], // start/end triggers
    });
    const rotate = useTransform(scrollYProgress, [0, 1], [0, rotateDeg]);

    return { ref, rotate }

}