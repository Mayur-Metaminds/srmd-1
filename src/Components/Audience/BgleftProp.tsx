"use client"
import { useParallax, useParallaxx } from "@/hooks/paralllelx"
import { useRotateScroll } from "@/hooks/useScrollRotate";
import { motion } from "framer-motion"


export function BgProp() {

    const { ref: ref1, rotate: rotate1 } = useRotateScroll({ rotateDeg: 160 });
    const { ref: ref2, rotate: rotate2 } = useRotateScroll({ rotateDeg: 90 });
    // const { ref: ref3, rotate: rotate3 } = useRotateScroll({ rotateDeg: 170 });
    const { ref: ref4, rotate: rotate4 } = useRotateScroll({ rotateDeg: 180 });
    const { ref: ref5, rotate: rotate5 } = useRotateScroll({ rotateDeg: 190 });
    const { ref: ref11, y: y11 } = useParallax({ speed: 0.1 });
    const { ref: ref22, y: y22 } = useParallax({ speed: 0.2 });
    const { ref: ref33, y: y33 } = useParallax({ speed: 0.1 });
    const { ref: ref44, y: y44 } = useParallax({ speed: 0.1 });
    const { ref: ref55, y: y55 } = useParallax({ speed: 0.6 });


    return (
        <motion.div className="absolute -z-10 -left-32 opacity-60">
            {/* <motion.svg
                width="500"   // adjust width as needed
                height="500"  // adjust height as needed
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="top-0"
            >
                <motion.circle
                    ref={(el) => {
                        ref3.current = el;
                        ref33.current = el;
                    }}
                    style={{ rotate: rotate3, y: y33 }}
                    cx="109.583"
                    cy="109.583"
                    r="109.583"
                    transform="matrix(0.868119 0.496357 0.496357 -0.868119 279.141 331.789)"
                    fill="#B862A7"
                />
            </motion.svg> */}
            <motion.svg
                width="539"
                height="536"
                viewBox="0 0 539 536"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-60 overflow-y-visible overflow-x-clip"
                ref={(el) => {

                    ref33.current = el;
                }}
                style={{ y: y33, transformBox: "fill-box" }}
            >
                {/* Flower */}
                <motion.path
                    ref={(el) => {
                        ref1.current = el;
                        ref11.current = el;
                    }}
                    style={{ rotate: rotate1, y: y11 }}

                    d="M231.027 535.263C210.155 498.557 202.573 479.322 226.169 456.971C193.945 461.695 181.467 449.052 166.39 406.783C205.443 383.482 222.559 382.512 244.775 401.814C240.188 369.825 252.758 357.488 294.353 342.406C320.188 383.392 318.487 399.065 299.776 419.94C336.091 415.371 345.019 434.022 358.99 470.885C320.876 493.122 302.375 497.405 280.6 473.024C285.622 509.543 269.443 520.503 231.027 535.263Z"
                    fill="#1CB377"

                />

                {/* Triangle */}
                <motion.path
                    ref={(el) => {
                        ref22.current = el;
                        ref2.current = el;
                    }}
                    style={{ rotate: rotate2, y: y22 }}

                    d="M143.157 268.506C134.664 278.766 140.462 294.373 153.594 296.599L291.483 319.969C304.616 322.195 315.233 309.37 310.594 296.884L261.889 165.783C257.25 153.298 240.835 150.516 232.341 160.776L143.157 268.506Z"
                    fill="#0B5399"

                />

                {/* Circle 1 */}
                <motion.circle
                    // ref={(el) => {
                    //     ref3.current = el;
                    //     ref33.current = el;
                    // }}
                    // style={{  y: y33 }}


                    cx="109.583"
                    cy="109.583"
                    r="109.583"
                    transform="matrix(0.868119 0.496357 0.496357 -0.868119 279.141 331.789)"
                    fill="#B862A7"

                />

                {/* Circle 2 */}
                <motion.path
                    ref={(el) => {
                        ref4.current = el;
                        ref44.current = el;
                    }}
                    style={{ rotate: rotate4, y: y44 }}

                    d="M139.881 420.884C146.271 355.098 98.1209 296.588 32.3349 290.198C-33.4511 283.808 -91.9614 331.957 -98.3515 397.743C-104.742 463.529 -56.5918 522.04 9.19416 528.43C74.9801 534.82 133.49 486.67 139.881 420.884Z"
                    fill="#BA8C2D"
                />

                {/* Chakra - positioned at top left, scaled to match height */}
                <motion.g
                  ref={(el)=>{
                                ref5.current=el;
                                ref55.current=el;
                            }}
                            style={{rotate:rotate5,y:y55}}
                >
                    <path
                        d="M79.5051 5.5L62.8727 24.85L58.2156 1H51.7844L46.462 24.85L31.1602 5.5L25.8378 8.65L33.3778 32.95L9.87064 24.85L6.54415 29.575L23.3984 46.675L1 51.85L1.22177 57.7L25.8378 62.65L6.54415 79.975L9.87064 85.15L33.3778 76.6L25.8378 100.675L31.1602 104.275L46.462 85.15L51.7844 109H58.2156L62.8727 85.15L79.5051 104.275L84.384 100.675L76.4004 76.6L100.573 85.15L103.234 79.975L84.384 62.65L109 57.7V51.85L84.384 46.675L103.234 29.575L100.129 24.625L76.4004 32.95L84.384 8.65L79.5051 5.5Z"
                        fill="#FED543"
                    />
                </motion.g>
            </motion.svg>

        </motion.div>
    )
}