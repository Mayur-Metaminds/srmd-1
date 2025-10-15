import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface ParallaxProps {
  speed?: number; // smaller = slower
}

export function useParallax({ speed = 0.3 }: ParallaxProps = {}) {
  const ref = useRef<HTMLDivElement | SVGSVGElement |SVGGElement | HTMLImageElement | SVGPathElement | null>(null);
  const { scrollY } = useScroll();

  const yRaw: MotionValue<number> = useTransform(scrollY, (value) => {
    if (!ref.current) return 0
    const elTop = ref.current.getBoundingClientRect().top + window.scrollY
    const winH = window.innerHeight
    const offset = value - elTop + winH
    return offset * speed
  })
  const y = useSpring(yRaw, { stiffness: 80, damping: 40 })


  return { ref, y };
}



interface ParallaxProps {
  speed?: number; // smaller = slower
  isRotate?: boolean;
}








import { useSpring } from "framer-motion"

type ParallaxxProps = {
  speed?: number
  rotateSpeed?: number
  isRotate?: boolean
  smoothness?: number // lower = smoother
  rotateDegree?: number
}

export function useParallaxx<T extends HTMLElement = HTMLDivElement>({
  speed = 0.3,
  rotateSpeed = 0.1,
  isRotate = false,
  smoothness = 0.15,
  rotateDegree = 180
}: ParallaxxProps = {}) {
  const ref = useRef<T | null>(null)
  const { scrollY } = useScroll()

  // Calculate raw motion values
  const yRaw: MotionValue<number> = useTransform(scrollY, (value) => {
    if (!ref.current) return 0
    const elTop = ref.current.getBoundingClientRect().top + window.scrollY
    const winH = window.innerHeight
    const offset = value - elTop + winH
    return offset * speed
  })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // start/end triggers
  });

  const rotateRaw = useTransform(scrollYProgress, [0, 1], [0, rotateDegree]);

  // Apply smooth spring for buttery animation
  const y = useSpring(yRaw, { stiffness: 80, damping: 25, mass: 0.5 })
  const rotate = useSpring(rotateRaw, { stiffness: 80, damping: 25, mass: 0.5 })

  return { ref, y, rotate }
}

