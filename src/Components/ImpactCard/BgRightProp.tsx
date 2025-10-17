"use client"
import { useParallax } from "@/hooks/paralllelx";
import { useRotateScroll } from "@/hooks/useScrollRotate";
import { motion } from 'framer-motion'
export const BgRightProp = () => {
    const { ref: rightRef, y: righty } = useParallax({ speed: 0.1 })
    const { ref: starRef, y: stary } = useParallax({ speed: 0.15 })
    const { ref: starRotateRef, rotate: starRotate } = useRotateScroll({ rotateDeg: 150 })
    const { ref: smallStarRotateRef, rotate: smallStarRotate } = useRotateScroll({ rotateDeg: 190 })
    const { ref: flowRotateRef, rotate: flowRotate } = useRotateScroll({ rotateDeg: 100 })
    const { ref: flowerRef, y: flowery } = useParallax({ speed: 0.1 })
    const { ref: smallStarRef, y: smallStary } = useParallax({ speed: 0.14 })
    // const { ref: ladRotateRef, rotate: ladRotate } = useRotateScroll()
    // const { ref: ladRef, y: lady } = useParallax({ speed: 0.2 })
    return (
        <>
            <motion.svg

                className="absolute   right-10 top-1 h-[65%]  z-30 opacity-60  overflow-y-visible overflow-x-clip"
                width="269" height="576" viewBox="0 0 269 576" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                ref={rightRef}
                style={{ y: righty }}

            >
                <mask id="mask0_208_82" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="191" y="0" width="78" height="73">
                    <motion.rect x="191" width="77.828" height="73" fill="url(#pattern0_208_82)"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear",
                        }}

                    />
                </mask>
                <g mask="url(#mask0_208_82)">
                    <rect x="178.445" y="-11.7852" width="90.1878" height="92.119" fill="#FED543"

                    />
                </g>
                <rect x="164.572" y="444.125" width="23.0581" height="9.29472" transform="rotate(29.4568 164.572 444.125)" fill="#BA8C2D" />
                <rect x="183.369" y="438.832" width="23.0581" height="9.29472" transform="rotate(29.4568 183.369 438.832)" fill="#BA8C2D" />
                <rect x="190.83" y="453.613" width="23.0581" height="9.29472" transform="rotate(-60.5432 190.83 453.613)" fill="#BA8C2D" />
                <rect x="172.033" y="458.914" width="23.0581" height="9.29472" transform="rotate(-60.5432 172.033 458.914)" fill="#BA8C2D" />
                <motion.path d="M92.2675 555.894L89.2707 557.756L88.1215 555.1L86.8714 555.111L85.4266 558.292L82.8702 555.982L81.8411 556.575L82.6473 560.442L78.7653 559.604L78.1269 560.485L80.5732 563.17L77.0876 564.619L77.1408 565.702L81.1337 566.999L78.2137 569.817L78.8692 570.77L82.7361 569.984L81.9996 573.616L83.0404 574.273L85.9903 571.62L87.0574 575.11L88.3075 575.099L89.3993 571.588L92.4376 574.185L93.3798 573.51L92.7077 569.891L96.4998 570.606L97.0082 569.643L94.4292 566.875L98.0906 565.507L98.0805 564.424L94.3935 563.042L96.9213 560.31L96.3093 559.399L92.6108 559.475L93.2212 556.469L92.2675 555.894Z" fill="#BA8C2D"
                    ref={(el) => {
                        smallStarRotateRef.current = el;
                        smallStarRef.current = el
                    }}
                    style={{ rotate: smallStarRotate, y: smallStary }}

                />
                <motion.path d="M1.5641 459C4.7047 467.805 7.60987 473.641 11.4818 477.008C15.1102 480.163 19.5201 481.098 25.5434 480.428C23.6202 482.427 22.2657 484.398 21.4268 486.428C20.4395 488.817 20.1769 491.259 20.5105 493.875C21.1317 498.744 23.8249 504.245 27.7341 511.201L28.5324 512.612L28.7447 512.986L29.1461 512.832C37.137 509.762 42.9373 507.047 46.4535 503.133C49.7712 499.439 51.0047 494.743 50.3002 487.893C54.5178 492.237 58.5849 494.091 63.4342 493.77C68.6125 493.427 74.604 490.601 82.5364 485.973L82.9023 485.76L82.7524 485.364C79.8516 477.71 77.4332 471.818 73.7969 468.104C70.3147 464.548 65.7672 463.03 58.8283 463.679C62.2326 459.67 64.1286 455.956 63.942 451.284C63.7424 446.287 61.1623 440.288 55.7758 431.742L55.5614 431.401L55.1822 431.538C46.5179 434.679 40.7602 437.571 37.4298 441.416C34.2774 445.055 33.3511 449.481 34.0359 455.554C29.7374 452.046 25.7539 450.344 20.965 450.641C15.861 450.959 9.9195 453.545 1.77837 458.403L1.42601 458.613L1.5641 459Z" stroke="#293464" strokeOpacity="0.4"
                    ref={(el) => {
                        flowRotateRef.current = el;
                        flowerRef.current = el;
                    }}
                    style={{ y: flowery, rotate: flowRotate, }}
                />

            </motion.svg>
            <motion.svg
                ref={(el) => {
                    starRef.current = el;
                    starRotateRef.current = el;
                }}
                style={{ y: stary, rotate: starRotate, }}
                className="absolute -top-10 right-20 hidden sm:block opacity-60"
                width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path


                    opacity="0.9" d="M79.5051 5.5L62.8727 24.85L58.2156 1H51.7844L46.462 24.85L31.1602 5.5L25.8378 8.65L33.3778 32.95L9.87064 24.85L6.54415 29.575L23.3984 46.675L1 51.85L1.22177 57.7L25.8378 62.65L6.54415 79.975L9.87064 85.15L33.3778 76.6L25.8378 100.675L31.1602 104.275L46.462 85.15L51.7844 109H58.2156L62.8727 85.15L79.5051 104.275L84.384 100.675L76.4004 76.6L100.573 85.15L103.234 79.975L84.384 62.65L109 57.7V51.85L84.384 46.675L103.234 29.575L100.129 24.625L76.4004 32.95L84.384 8.65L79.5051 5.5Z" fill="#FED543" />
            </motion.svg>
        </>
    )
}