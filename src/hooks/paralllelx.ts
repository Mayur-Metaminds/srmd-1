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





import {  motionValue } from "motion/react";
import { useLayoutEffect,  useState } from "react";

interface ParallaxProps {
  speed?: number;
  isRotate?: boolean;
}

export function useParallaxx({ speed = 0.3, isRotate = false }: ParallaxProps = {}) {
  const ref = useRef<HTMLDivElement | SVGSVGElement | HTMLImageElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll();

  const [startScrollY, setStartScrollY] = useState<number | null>(null);
  const [entered, setEntered] = useState(false);
  const initialX = useRef(0);

  // Store initial x position once the element mounts
  useLayoutEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    initialX.current = rect.x;
  }, []);

  // Detect viewport entry once
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (!ref.current || entered) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setEntered(true);
        setStartScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [entered]);

  // Parallax Y movement
  const y: MotionValue<number> = useTransform(scrollY, (value) => {
    if (!ref.current || startScrollY === null || !entered) return 0;
    const scrollDelta = value - startScrollY;
    return scrollDelta * speed;
  });

  // Fixed X position
  const x: MotionValue<number> = motionValue(initialX.current);

  // Optional rotation
  const rotate = isRotate
    ? useTransform(scrollYProgress, [0, 1], [0, 90])
    : undefined;

  return { ref, y, x, rotate };
}
