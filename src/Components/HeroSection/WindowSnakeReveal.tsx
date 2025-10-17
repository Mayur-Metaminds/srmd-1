
import { useAnimation, motion, useInView } from "framer-motion";
import { useEffect, } from "react";
import { useParallax } from "@/hooks/paralllelx";
import { useRotateScroll } from "@/hooks/useScrollRotate";

export function WindowSnakeReveal() {
    const { ref, y } = useParallax({ speed: 0 })
    const controls = useAnimation();
    // const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { ref: ref1, rotate: rotate1 } = useRotateScroll({rotateDeg:170})
    const { ref: ref2, rotate: rotate2 } = useRotateScroll({rotateDeg:90})
    const { ref: ref3, rotate: rotate3 } = useRotateScroll({rotateDeg:160})
    const { ref: ref4, rotate: rotate4 } = useRotateScroll({rotateDeg:120})
    const { ref: ref11, y: y11 } = useParallax({ speed: 0.1 });
    const { ref: ref22, y: y22 } = useParallax({ speed: 0.2 });
    const { ref: ref33, y: y33 } = useParallax({ speed: 0.1 });
    const { ref: ref44, y: y44 } = useParallax({ speed: 0.15 });
    const { ref: ref55, y: y55 } = useParallax({ speed: 0.1 });
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className="hidden sm:block absolute top-[200px] sm:top-[250px] md:top-[280px] lg:top-[321px] -z-10 left-0 w-full h-auto opacity-60"
        // initial={{ opacity: 0 }}
        // animate={isInView ? { opacity: 1 } : {}}
        // transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
            <svg
                width="1440"
                height="396"
                viewBox="0 0 1440 396"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto opacity-60  overflow-y-visible overflow-x-clip"
            >
                <defs>
                    {/* Rectangle mask that expands */}
                    {/* <clipPath id="snakeClip">
                        <motion.rect
                            x="0"
                            y="0"
                            height="396"
                            initial={{ width: 0 }}
                            animate={controls}
                            variants={{
                                visible: {
                                    width: "100%",
                                    transition: { duration: 1.5, ease: "easeOut" },
                                },
                            }}
                        />
                    </clipPath> */}
                </defs>


                {/* --- the yellow snake --- */}
                <motion.path
                    className="z-10"
                    d="M1335.5 320.001C1377.41 318.617 1440.5 297.501 1440.5 297.501V381.501C1440.5 381.501 1368.87 395.854 1322.5 395.001C1268.8 394.014 1237.62 389.432 1187 371.501C1145.76 356.893 1124.29 343.681 1087.5 320.001C1042.7 291.166 1022.8 267.759 982 233.501C939.584 197.889 921.721 169.94 874.5 141.001C836.043 117.433 812.359 106.426 769 94.001C726.712 81.8835 701.489 77.7411 657.5 78.001C615.25 78.2507 591.507 83.827 550.5 94.001C508.482 104.426 486.944 116.937 446 131.001C392.332 149.435 363.803 166.197 308 176.501C262.375 184.926 235.659 189.682 189.5 185.001C150.016 180.997 128.111 174.063 91 160.001C53.5974 145.828 0 113.001 0 113.001V16.501C0 16.501 42.6974 50.2284 73.5 66.001C115.823 87.673 142.26 97.5865 189.5 103.001C235.609 108.286 262.492 103.109 308 94.001C356.741 84.2458 381.448 69.032 428.5 53.001C470.291 38.7623 492.571 26.8128 535.5 16.501C582.248 5.27202 609.422 0.0786127 657.5 0.00103905C706.158 -0.0774714 733.901 4.28316 781 16.501C831.12 29.5023 858.987 40.412 904 66.001C946.438 90.1258 966.722 109.484 1004 141.001C1043.86 174.704 1058.71 202.215 1100.5 233.501C1140.28 263.287 1163.85 280.35 1210.5 297.501C1257.05 314.618 1285.93 321.638 1335.5 320.001Z"
                    fill="#EFB744"
                    clipPath="url(#snakeClip)"
                    ref={(el) => {

                        ref55.current = el
                    }}
                    style={{ y: y55 }}
                />
                {/* --- static shapes --- */}
                <motion.path
                    d="M280.382 44.8317L290.411 60.852L296.473 43.9034L301.183 44.6186L302.429 62.6769L315.787 50.2075L319.334 53.1062L311.11 70.0638L329.227 66.7457L331.137 70.5759L316.893 81.2249L332.721 87.5055L331.908 91.765L313.33 92.6529L325.533 107.486L322.521 110.906L306.257 102.031L309.102 120.5L304.803 122.545L295.724 106.837L289.174 123.712L284.464 122.997L283.705 105.013L269.398 117.169L266.225 113.99L274.749 97.2468L256.096 100.82L254.722 96.7346L270.454 86.1428L252.977 79.7804L253.627 75.4962L272.23 74.4435L260.327 59.8243L263.151 56.5444L279.603 65.2798L276.458 46.596L280.382 44.8317Z"
                    fill="#BA8C2D"
                    ref={(el) => {
                        ref1.current = el;
                        ref11.current = el
                    }}
                    style={{ rotate: rotate1, y: y11 }}
                />
                <motion.path
                    d="M219.073 74.8789L225.843 85.6927L229.935 74.2524L233.114 74.7351L233.955 86.9245L242.972 78.5076L245.366 80.4643L239.815 91.9106L252.044 89.6709L253.333 92.2563L243.718 99.4444L254.402 103.684L253.853 106.559L241.313 107.158L249.55 117.171L247.518 119.479L236.539 113.488L238.459 125.955L235.558 127.335L229.429 116.733L225.008 128.123L221.829 127.64L221.317 115.501L211.659 123.707L209.518 121.561L215.271 110.259L202.68 112.671L201.753 109.913L212.372 102.764L200.575 98.4694L201.014 95.5775L213.571 94.867L205.536 84.999L207.442 82.7851L218.548 88.6814L216.425 76.0699L219.073 74.8789Z"
                    fill="#1CB377"
                    ref={(el) => {
                        ref2.current = el;
                        ref22.current = el
                    }}
                    style={{ rotate: rotate2, y: y22 }}
                />


                <motion.path
                    d="M1003.25 81.7083L1013.26 93.3542L1016.06 79H1019.94L1023.14 93.3542L1032.35 81.7083L1035.55 83.6042L1031.01 98.2292L1045.16 93.3542L1047.16 96.1979L1037.02 106.49L1050.5 109.604L1050.37 113.125L1035.55 116.104L1047.16 126.531L1045.16 129.646L1031.01 124.5L1035.55 138.99L1032.35 141.156L1023.14 129.646L1019.94 144H1016.06L1013.26 129.646L1003.25 141.156L1000.32 138.99L1005.12 124.5L990.572 129.646L988.97 126.531L1000.32 116.104L985.5 113.125V109.604L1000.32 106.49L988.97 96.1979L990.839 93.2188L1005.12 98.2292L1000.32 83.6042L1003.25 81.7083Z"
                    fill="#0B5399"
                    ref={(el) => {
                        ref3.current = el;
                        ref33.current = el
                    }}
                    style={{ rotate: rotate3, y: y33 }}
                />
                <motion.path
                    d="M1400.35 249.333L1412.67 263.667L1416.12 246H1420.88L1424.82 263.667L1436.16 249.333L1440.1 251.667L1434.52 269.667L1451.93 263.667L1454.39 267.167L1441.91 279.833L1458.5 283.667L1458.34 288L1440.1 291.667L1454.39 304.5L1451.93 308.333L1434.52 302L1440.1 319.833L1436.16 322.5L1424.82 308.333L1420.88 326H1416.12L1412.67 308.333L1400.35 322.5L1396.73 319.833L1402.65 302L1384.74 308.333L1382.77 304.5L1396.73 291.667L1378.5 288V283.667L1396.73 279.833L1382.77 267.167L1385.07 263.5L1402.65 269.667L1396.73 251.667L1400.35 249.333Z"
                    fill="#293464"
                    ref={(el) => {
                        ref4.current = el;
                        ref44.current = el
                    }}
                    style={{ rotate: rotate4, y: y44 }}
                />
            </svg>
        </motion.div>
    );
}