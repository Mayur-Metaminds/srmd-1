"use client"
import { useParallax } from "@/hooks/paralllelx";
import { useRotateScroll } from "@/hooks/useScrollRotate";
import { motion } from 'framer-motion'
export const BgLeftProp = () => {
    const { ref: ref1, rotate: rotate1 } = useRotateScroll({ rotateDeg: 170 });
    const { ref: ref2, rotate: rotate2 } = useRotateScroll({ rotateDeg: 120 });
    const { ref: ref3, rotate: rotate3 } = useRotateScroll({ rotateDeg: 160 });
    const { ref: ref11, y: y11 } = useParallax({ speed: 0.15 });
    const { ref: ref22, y: y22 } = useParallax({ speed: 0.2 });
    const { ref: ref33, y: y33 } = useParallax({ speed: 0.13 });
    const { ref: ref4, rotate: rotate4 } = useRotateScroll({ rotateDeg: 160 });
    const { ref: ref44, y: y44 } = useParallax({ speed: 0.14 });

    return (
        <svg width="270" height="535" viewBox="0 0 270 535" fill="none"  className="opacity-60  overflow-y-visible overflow-x-clip" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

            <motion.g fill="#FFE27C"
                ref={(el) => {
                    ref4.current = el;
                    ref44.current = el
                }}
                style={{ rotate: rotate4, y: y44 }}
            >
                <rect width="29.9673" height="3.829" transform="matrix(0.79644 -0.604717 0.604738 0.796424 74 370.129)" />
                <rect width="29.9673" height="3.829" transform="matrix(0.79644 -0.604717 0.604738 0.796424 78.0703 375.48)" />
                <rect width="29.9673" height="3.829" transform="matrix(0.79644 -0.604717 0.604738 0.796424 82.1406 380.832)" />
                <rect width="29.9673" height="3.829" transform="matrix(0.79644 -0.604717 0.604738 0.796424 86.2031 386.191)" />
            </motion.g>
            <motion.path d="M263.267 0.886651L260.271 2.74794L259.121 0.0918514L257.871 0.103481L256.427 3.28372L253.87 0.974072L252.841 1.567L253.647 5.43467L249.765 4.59575L249.127 5.47672L251.573 8.16242L248.088 9.61157L248.141 10.6945L252.134 11.9907L249.214 14.8097L249.869 15.7619L253.736 14.9759L253 18.6079L254.04 19.2649L256.99 16.6124L258.057 20.1026L259.308 20.091L260.399 16.5807L263.438 19.1775L264.38 18.5021L263.708 14.8832L267.5 15.5979L268.008 14.6348L265.429 11.867L269.091 10.4996L269.08 9.41628L265.394 8.03385L267.921 5.30188L267.309 4.39087L263.611 4.46695L264.221 1.46114L263.267 0.886651Z" fill="#BA8C2D"
                ref={(el) => {
                    ref1.current = el;
                    ref11.current = el
                }}
                style={{ rotate: rotate1, y: y11 }}
            />
            <motion.path d="M124.506 454.075C101.26 445.336 89.3879 442.705 78.5808 458.473C78.3529 439.319 69.8584 433.237 43.9154 428.377C33.9816 453.21 34.9965 463.242 48.2572 474.367C29.2526 474.652 23.2456 483.091 18.3206 508.643C44.5105 519.87 53.4578 517.438 63.8582 504.644C64.5525 526.16 76.2099 529.625 98.911 534.341C108.313 510.152 109.095 499.01 92.9246 488.61C114.6 488.159 119.475 477.751 124.506 454.075Z" fill="#FED543"
                ref={(el) => {
                    ref2.current = el;
                    ref22.current = el
                }}
                style={{ rotate: rotate2, y: y22 }}
            />
            <motion.path opacity="0.4" d="M190.505 225.5L173.873 244.85L169.216 221H162.784L157.462 244.85L142.16 225.5L136.838 228.65L144.378 252.95L120.871 244.85L117.544 249.575L134.398 266.675L112 271.85L112.222 277.7L136.838 282.65L117.544 299.975L120.871 305.15L144.378 296.6L136.838 320.675L142.16 324.275L157.462 305.15L162.784 329H169.216L173.873 305.15L190.505 324.275L195.384 320.675L187.4 296.6L211.573 305.15L214.234 299.975L195.384 282.65L220 277.7V271.85L195.384 266.675L214.234 249.575L211.129 244.625L187.4 252.95L195.384 228.65L190.505 225.5Z" stroke="#0B5399" strokeWidth="1.30179"
                ref={(el) => {
                    ref3.current = el;
                    ref33.current = el
                }}
                style={{ rotate: rotate3, y: y33 }}
            />
        </svg>
    )
}
