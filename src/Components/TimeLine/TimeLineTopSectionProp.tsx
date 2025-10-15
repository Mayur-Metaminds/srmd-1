"use client"
import { useParallax } from '@/hooks/paralllelx';
import { useRotateScroll } from '@/hooks/useScrollRotate';
import { motion } from 'framer-motion';
export const TimeLineTopSectionProp = () => {
    const { ref: ref1, rotate: rotate1 } = useRotateScroll({ rotateDeg: 160 });
    const { ref: ref2, rotate: rotate2 } = useRotateScroll({ rotateDeg: 170 });
    const { ref: ref3, rotate: rotate3 } = useRotateScroll({ rotateDeg: 120 });
    const { ref: ref11, y: y11 } = useParallax({ speed: 0.1 });
    const { ref: ref22, y: y22 } = useParallax({ speed: 0.2 });
    const { ref: ref33, y: y33 } = useParallax({ speed: 0.1 });
    return (
        <motion.svg

            width="1139" height="216" viewBox="0 0 1139 216" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="absolute top-20 left-10 -z-20  overflow-y-visible overflow-x-clip opacity-60">
            <motion.path d="M33.7621 194.123C27.5745 190.37 24.3159 188.978 20.3728 192.913C21.3376 187.415 19.2319 185.216 12.0632 182.429C7.88271 189.007 7.63391 191.934 10.8335 195.834C5.37523 194.894 3.201 196.987 0.416361 204.041C7.31332 208.664 10.0066 208.449 13.6733 205.344C12.7151 211.543 15.8674 213.163 22.1153 215.734C26.1088 209.312 26.932 206.163 22.8601 202.315C29.0922 203.352 31.048 200.633 33.7621 194.123Z" fill="#15A9EE" fillOpacity="0.4"
                ref={(el) => {
                    ref1.current = el;
                    ref11.current = el
                }}
                style={{ rotate: rotate1, y: y11 }}
            />
            <motion.circle cx="12.6" cy="12.6" r="12.6" transform="matrix(-0.845842 0.533433 0.533433 0.845842 679.312 -4)" fill="#C8AD6E"
                ref={(el) => {
                    ref2.current = el;
                    ref22.current = el
                }}
                style={{ rotate: rotate2, y: y22 }}
            />
            <motion.g
                ref={(el) => {
                    ref3.current = el;
                    ref33.current = el
                }}
                style={{ rotate: rotate3, y: y33 }}
            >
                <rect
                    x="1133.91"
                    y="96.8125"
                    width="15.7799"
                    height="6.36088"
                    transform="rotate(-162.338 1133.91 96.8125)"
                    fill="#C8AD6E"
                />
                <rect
                    x="1126.84"
                    y="87.9609"
                    width="15.7799"
                    height="6.36088"
                    transform="rotate(107.662 1126.84 87.9609)"
                    fill="#C8AD6E"
                />
                <rect
                    x="1138.71"
                    y="81.7812"
                    width="15.7799"
                    height="6.36088"
                    transform="rotate(107.662 1138.71 81.7812)"
                    fill="#C8AD6E"
                />
            </motion.g>
        </motion.svg>
    )
}