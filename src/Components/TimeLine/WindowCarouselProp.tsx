"use client"
import { useParallax } from '@/hooks/paralllelx';
import { useRotateScroll } from '@/hooks/useScrollRotate';
import { motion } from 'framer-motion';
export const WindowCarouselProp = () => {
    const { ref: ref1, rotate: rotate1 } = useRotateScroll({ rotateDeg: 160 });
    const { ref: ref2, rotate: rotate2 } = useRotateScroll({ rotateDeg: 100 });
    const { ref: ref3, rotate: rotate3 } = useRotateScroll({ rotateDeg: 120 });
    const { ref: ref11, y: y11 } = useParallax({ speed: 0.1 });
    const { ref: ref22, y: y22 } = useParallax({ speed: 0.2 });
    const { ref: ref33, y: y33 } = useParallax({ speed: 0.1 });

    return (
        <>
            <motion.svg
                width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-5 right-20 -z-20  overflow-y-visible overflow-x-clip opacity-60">
                <motion.path d="M34.8912 2.57031L27.499 11.1703L25.4292 0.570312H22.5708L20.2053 11.1703L13.4045 2.57031L11.039 3.97031L14.3901 14.7703L3.94251 11.1703L2.46407 13.2703L9.95483 20.8703L0 23.1703L0.0985627 25.7703L11.039 27.9703L2.46407 35.6703L3.94251 37.9703L14.3901 34.1703L11.039 44.8703L13.4045 46.4703L20.2053 37.9703L22.5708 48.5703H25.4292L27.499 37.9703L34.8912 46.4703L37.0596 44.8703L33.5113 34.1703L44.2546 37.9703L45.4374 35.6703L37.0596 27.9703L48 25.7703V23.1703L37.0596 20.8703L45.4374 13.2703L44.0575 11.0703L33.5113 14.7703L37.0596 3.97031L34.8912 2.57031Z" fill="#A68468"
                    ref={(el) => {
                        ref1.current = el;
                        ref11.current = el
                    }}
                    style={{ rotate: rotate1, y: y11 }}
                />
            </motion.svg>
            <motion.svg
                width="131" height="101" viewBox="0 0 131 101" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-20 left-32 -z-20  overflow-y-visible overflow-x-clip opacity-60">
                <motion.path d="M58.152 3.33333L45.8316 17.6667L42.3819 0H37.6181L33.6756 17.6667L22.3409 3.33333L18.3984 5.66667L23.9836 23.6667L6.57084 17.6667L4.10678 21.1667L16.5914 33.8333L0 37.6667L0.164271 42L18.3984 45.6667L4.10678 58.5L6.57084 62.3333L23.9836 56L18.3984 73.8333L22.3409 76.5L33.6756 62.3333L37.6181 80H42.3819L45.8316 62.3333L58.152 76.5L61.7659 73.8333L55.8522 56L73.7577 62.3333L75.729 58.5L61.7659 45.6667L80 42V37.6667L61.7659 33.8333L75.729 21.1667L73.4292 17.5L55.8522 23.6667L61.7659 5.66667L58.152 3.33333Z" fill="#C8AD6E"
                    ref={(el) => {
                        ref2.current = el;
                        ref22.current = el
                    }}
                    style={{ rotate: rotate2, y: y22 }}
                />
                <motion.path d="M116.253 49.25L107.936 58.925L105.608 47H102.392L99.731 58.925L92.0801 49.25L89.4189 50.825L93.1889 62.975L81.4353 58.925L79.7721 61.2875L88.1992 69.8375L77 72.425L77.1109 75.35L89.4189 77.825L79.7721 86.4875L81.4353 89.075L93.1889 84.8L89.4189 96.8375L92.0801 98.6375L99.731 89.075L102.392 101H105.608L107.936 89.075L116.253 98.6375L118.692 96.8375L114.7 84.8L126.786 89.075L128.117 86.4875L118.692 77.825L131 75.35V72.425L118.692 69.8375L128.117 61.2875L126.565 58.8125L114.7 62.975L118.692 50.825L116.253 49.25Z" fill="#EFB744"
                    ref={(el) => {
                        ref3.current = el;
                        ref33.current = el
                    }}
                    style={{ rotate: rotate3, y: y33 }}
                />
            </motion.svg>
        </>
    )
}