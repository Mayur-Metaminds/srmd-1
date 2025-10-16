"use client"

import Lenis from "lenis"
import React, { useEffect } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function LenisProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        })
        lenis.on('scroll', (e) => {
            // console.log("AAA", e)
        })
        function raf(time: number) {

            lenis.raf(time);
            ScrollTrigger.update()
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, [])
    return <>{children}</>;
}