// import { useRef } from "react";
// import { useScroll, useTransform, MotionValue } from "framer-motion";

// interface ParallaxProps {
//   speed?: number; // smaller = slower
// }

// export function useParallax({ speed = 0.3 }: ParallaxProps = {}) {
//   const ref = useRef<HTMLDivElement | SVGSVGElement |SVGGElement | HTMLImageElement | SVGPathElement | null>(null);
//   const { scrollY } = useScroll();

//   const yRaw: MotionValue<number> = useTransform(scrollY, (value) => {
//     if (!ref.current) return 0
//     const elTop = ref.current.getBoundingClientRect().top + window.scrollY
//     const winH = window.innerHeight
//     const offset = value - elTop + winH
//     return offset * speed
//   })
//   const y = useSpring(yRaw, { stiffness: 80, damping: 40 })


//   return { ref, y };
// }



// interface ParallaxProps {
//   speed?: number; // smaller = slower
//   isRotate?: boolean;
// }








// import { useSpring } from "framer-motion"

// type ParallaxxProps = {
//   speed?: number
//   rotateSpeed?: number
//   isRotate?: boolean
//   smoothness?: number // lower = smoother
//   rotateDegree?: number
// }

// export function useParallaxx<T extends HTMLElement = HTMLDivElement>({
//   speed = 0.3,
//   rotateSpeed = 0.1,
//   isRotate = false,
//   smoothness = 0.15,
//   rotateDegree = 180
// }: ParallaxxProps = {}) {
//   const ref = useRef<T | null>(null)
//   const { scrollY } = useScroll()

//   // Calculate raw motion values
//   const yRaw: MotionValue<number> = useTransform(scrollY, (value) => {
//     if (!ref.current) return 0
//     const elTop = ref.current.getBoundingClientRect().top + window.scrollY
//     const winH = window.innerHeight
//     const offset = value - elTop + winH
//     return offset * speed
//   })
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"], // start/end triggers
//   });

//   const rotateRaw = useTransform(scrollYProgress, [0, 1], [0, rotateDegree]);

//   // Apply smooth spring for buttery animation
//   const y = useSpring(yRaw, { stiffness: 80, damping: 25, mass: 0.5 })
//   const rotate = useSpring(rotateRaw, { stiffness: 80, damping: 25, mass: 0.5 })

//   return { ref, y, rotate }
// }

import { useRef } from "react";
import { useScroll, useTransform, MotionValue, useSpring } from "framer-motion";

interface ParallaxProps {
  speed?: number;
}

export function useParallax({ speed = 0.03 }: ParallaxProps = {}) { // Very minimal movement
  const ref = useRef<HTMLDivElement | SVGSVGElement | SVGGElement | HTMLImageElement | SVGPathElement | null>(null);
  const { scrollY } = useScroll();

  const yRaw: MotionValue<number> = useTransform(scrollY, (value) => {
    if (!ref.current) return 0
    const elTop = ref.current.getBoundingClientRect().top + window.scrollY
    const winH = window.innerHeight
    const offset = value - elTop + winH
    return offset * speed
  })
  
  // Heavy, buttery smooth spring
  const y = useSpring(yRaw, { 
    stiffness: 30,   // Lower = less responsive
    damping: 40,     // Higher = more resistance
    mass: 2          // Much heavier feel
  })

  return { ref, y };
}

type ParallaxxProps = {
  speed?: number
  rotateSpeed?: number
  isRotate?: boolean
  smoothness?: number
  rotateDegree?: number
}

export function useParallaxx<T extends HTMLElement = HTMLDivElement>({
  speed = 0.03,        // Very minimal vertical movement
  rotateSpeed = 0.01,  // Barely noticeable rotation
  isRotate = false,
  smoothness = 0.15,
  rotateDegree = 10    // Subtle rotation
}: ParallaxxProps = {}) {
  const ref = useRef<T | null>(null)
  const { scrollY } = useScroll()

  const yRaw: MotionValue<number> = useTransform(scrollY, (value) => {
    if (!ref.current) return 0
    const elTop = ref.current.getBoundingClientRect().top + window.scrollY
    const winH = window.innerHeight
    const offset = value - elTop + winH
    return offset * speed
  })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateRaw = useTransform(scrollYProgress, [0, 1], [0, rotateDegree]);

  // Ultra-smooth, heavy spring physics
  const y = useSpring(yRaw, { 
    stiffness: 30,   // Very low stiffness = slow, gradual movement
    damping: 40,     // High damping = lots of resistance
    mass: 2          // Heavy mass = lethargic, smooth motion
  })
  
  const rotate = useSpring(rotateRaw, { 
    stiffness: 25,   // Even lower for rotation
    damping: 45,     // Maximum resistance
    mass: 2.5        // Extra heavy for rotation
  })

  return { ref, y, rotate }
}
