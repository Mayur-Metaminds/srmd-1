"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { Observer } from "gsap/Observer"
import timeLineData from "@/lib/data/TimeLineSectionData.json"

import { cn } from "@/lib/utils"
import ScrollTypingEffect from "../Common/ScrollTextFilling"
import { useParallax } from "@/hooks/paralllelx"
import { motion } from 'framer-motion';
import { useRotateScroll } from "@/hooks/useScrollRotate"

gsap.registerPlugin(Observer)

function disableBodyScroll() {
    document.body.style.overflow = "hidden"
}
function enableBodyScroll() {
    document.body.style.overflow = ""
}

// const timeLineData = [
//     {
//         date: "August 2025",
//         image: "/TimeLine/image.png",
//         title: "Lorem Ipsum 1",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
//     },
//     {
//         date: "September 2025",
//         image: "/TimeLine/image.png",
//         title: "Lorem Ipsum 2",
//         description:
//             "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
//     },
//     {
//         date: "October 2025",
//         image: "/TimeLine/image.png",
//         title: "Lorem Ipsum 3",
//         description:
//             "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain",
//     },
//     {
//         date: "November 2025",
//         image: "/TimeLine/image.png",
//         title: "Lorem Ipsum 4",
//         description:
//             "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
//     },
// ];
export default function TimeLineSection() {
    const { ref, y } = useParallax({ speed: 0.4 });
    const { ref: ref1, rotate: rotate1 } = useRotateScroll();

    return (
        <>
            <div
                className="relative"
                style={{
                    background: "linear-gradient(#293464B2, #293464B2), url('/countdownbg.jpg')",
                    backgroundSize: "contain",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                    clipPath: "polygon( 0 10px,50% 0,100% 15px,100% calc(100% - 10px), 50% 100%,  0 calc(100% - 10px) )"

                }}
            >
                <motion.svg
                    ref={ref}
                    style={{ y }}
                    width="1139" height="216" viewBox="0 0 1139 216" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-20 left-10 -z-20">
                    <motion.path d="M33.7621 194.123C27.5745 190.37 24.3159 188.978 20.3728 192.913C21.3376 187.415 19.2319 185.216 12.0632 182.429C7.88271 189.007 7.63391 191.934 10.8335 195.834C5.37523 194.894 3.201 196.987 0.416361 204.041C7.31332 208.664 10.0066 208.449 13.6733 205.344C12.7151 211.543 15.8674 213.163 22.1153 215.734C26.1088 209.312 26.932 206.163 22.8601 202.315C29.0922 203.352 31.048 200.633 33.7621 194.123Z" fill="#15A9EE" fillOpacity="0.4"
                        ref={ref1}
                        style={{ rotate: rotate1 }}
                    />
                    <circle cx="12.6" cy="12.6" r="12.6" transform="matrix(-0.845842 0.533433 0.533433 0.845842 679.312 -4)" fill="#C8AD6E" />
                    <rect x="1133.91" y="96.8125" width="15.7799" height="6.36088" transform="rotate(-162.338 1133.91 96.8125)" fill="#C8AD6E"

                    />
                    <rect x="1126.84" y="87.9609" width="15.7799" height="6.36088" transform="rotate(107.662 1126.84 87.9609)" fill="#C8AD6E" />
                    <rect x="1138.71" y="81.7812" width="15.7799" height="6.36088" transform="rotate(107.662 1138.71 81.7812)" fill="#C8AD6E" />
                </motion.svg>


                <div
                    id="count-down1"
                    className="w-[100%] flex flex-col items-center mt-4 sm:mt-6 lg:mt-10 min-h-[300px] sm:min-h-[300px] lg:h-[300px] xl:h-[300px] p-4 sm:p-6 lg:p-8 gap-4 sm:gap-6 lg:gap-10 justify-start sm:justify-center relative overflow-hidden"

                >


                    {/* Top Section - Badge and Text */}
                    <div className="mt-10 text-white w-full flex flex-col gap-3 sm:gap-6 z-20 self-start sm:self-start lg:w-[40%]">
                        <div className="p-2 sm:p-3 rounded-[100px] w-auto max-w-fit bg-white text-[#222222] flex justify-center items-center gap-x-2 text-[14px] sm:text-[16px] px-4 sm:px-5">
                            <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                                <ellipse cx="16.8946" cy="10.7153" rx="7.78622" ry="7.78556" fill="#0B5399" />
                                <path d="M11.3216 1.1488L8.92333 3.93862L8.25183 0.5H7.32452L6.55709 3.93862L4.35072 1.1488L3.58329 1.60295L4.67049 5.10646L1.281 3.93862L0.80136 4.61986L3.23156 7.08529L0.00195312 7.83141L0.0339294 8.67484L3.58329 9.38852L0.80136 11.8864L1.281 12.6325L4.67049 11.3998L3.58329 14.8709L4.35072 15.3899L6.55709 12.6325L7.32452 16.0711H8.25183L8.92333 12.6325L11.3216 15.3899L12.025 14.8709L10.8739 11.3998L14.3593 12.6325L14.743 11.8864L12.025 9.38852L15.5744 8.67484V7.83141L12.025 7.08529L14.743 4.61986L14.2953 3.90618L10.8739 5.10646L12.025 1.60295L11.3216 1.1488Z" fill="#C8AD6E" />
                            </svg>
                            <span className="whitespace-nowrap font-semibold text-[12px] md:text-[14px] sm:text-[16px]">From Roots to Wings</span>
                        </div>
                        <ScrollTypingEffect className="text-[#7F85A2] text-[26px] sm:text-[40px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-tight font-[400]  z-20  sm:leading-snug" colorChange="white" text="Evolved over 20 years, and loved by lakhs of children across the world" />
                    </div>



                    {/* <TimelineCard /> */}
                    {/* Skip Button */}

                </div>

                <WindowCaroussel />
                <MobileCaroussel />
            </div>

        </>

    )
}


function WindowCaroussel() {
    const { ref, y } = useParallax({ speed: 0.4 });
    const { ref: otherref, y: othery } = useParallax({ speed: 0.4 });
    const [itemWidth, setItemWidth] = useState(790)
    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth > 768 ? 790 : 740
            setItemWidth(newWidth)
        }

        window.addEventListener("resize", handleResize)
        handleResize() // call once to set initial width
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const totalLength = timeLineData?.length ?? 1

    // Adjusted width based on the number of items
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [animating, setAnimating] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const observerRef = useRef<Observer | null>(null)
    const [isInView, setIsInView] = useState<boolean>(false)

    // const isEdgeCard =
    //     currentIndex === 0 || currentIndex === (timeLineData?.length || 1) - 1

    const updateIndex = (newIndex: number) => {
        if (animating) return
        setAnimating(true)
        const nextIndex = Math.max(0, newIndex % totalLength)

        gsap.to(".scrollable-container", {
            x: -nextIndex * itemWidth,
            duration: 0.9,
            ease: "power2.inOut",
            onComplete: () => setAnimating(false),
        })

        gsap.to(".arrow", {
            width: nextIndex === 0 ? 78 : nextIndex * itemWidth,
            duration: 0.9,
            ease: "power2.inOut",
        })

        setCurrentIndex(nextIndex)
    }

    // UNLOCK scroll and move to next section
    const moveToNextSection = () => {
        enableBodyScroll()
        const nextSection = document.querySelector("#contact")
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    // INTERSECTION OBSERVER: setInView state
    useEffect(() => {
        if (!containerRef.current) return

        const io = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (entry) {
                    setIsInView(entry.isIntersecting ?? false)
                }
            },
            { threshold: 0.95 }
        )

        io.observe(containerRef.current)

        return () => io.disconnect()
    }, [])

    // Add a ref or selector to previous section (the one before carousel)
    const topSectionRef = useRef<HTMLElement | null>(null)
    const [scrollDirection, setScrollDirection] = useState<
        "up" | "down" | undefined
    >(undefined)

    // You can set this ref by prop or selector on mount:
    useEffect(() => {
        topSectionRef.current = document.querySelector("#before-carausal") // Replace with your actual top component selector
    }, [])

    useEffect(() => {
        if (!isInView || !containerRef.current) return

        observerRef.current = Observer.create({
            target: containerRef.current,
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onUp: () => {
                setScrollDirection("down")
                if (animating || !timeLineData) return
                const total = timeLineData.length
                if (currentIndex + 1 < total) {
                    updateIndex(currentIndex + 1)
                } else {
                    observerRef.current?.kill()
                    moveToNextSection()
                }
            },
            onDown: () => {
                setScrollDirection("up")
                if (animating || !timeLineData) return

                if (currentIndex > 0) {
                    updateIndex(currentIndex - 1)
                } else {
                    // At first card and scrolling UP → exit carousel to previous section
                    observerRef.current?.kill()

                    // Unlock scroll so page can move normally
                    enableBodyScroll()

                    if (topSectionRef.current) {
                        topSectionRef.current.scrollIntoView({ behavior: "smooth" })
                    } else {
                        // fallback: scroll to top of page
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                }
            },
            tolerance: 10,
            preventDefault: true,
        })

        return () => observerRef.current?.kill()
    }, [isInView, currentIndex, animating])

    // BODY SCROLL LOCK: handle vertical scroll lock/unlock, always correct even if scrolling up/down
    useEffect(() => {
        if (isInView) {
            disableBodyScroll()
        } else {
            enableBodyScroll()
        }
        // Always cleanup when leaving/unmounting
        return () => {
            enableBodyScroll()
        }
    }, [isInView])




    const { ref: ref1, rotate: rotate1 } = useRotateScroll();
    const { ref: ref2, rotate: rotate2 } = useRotateScroll();
    const { ref: ref3, rotate: rotate3 } = useRotateScroll();

    return (
        <div
            className="relative  hidden w-screen flex-col items-center gap-6 overflow-hidden  sm:flex md:min-h-[565px]  lg:min-h-[95vh] lg:gap-[10px] "
            ref={containerRef}

        >

            <div className="relative h-[390px] w-full overflow-hidden  lg:h-[65vh]  border-b-4  mt-10 border-dotted  border-b-white   ">
                <div className="scrollable-container flex w-fit gap-[140px] px-[calc(50%-calc(700px/2))] lg:gap-[190px] z-20 justify-center"

                >
                    {timeLineData?.map((obj, index) => (
                        <div
                            key={index}
                            className={cn(
                                "card relative max-h-[240px] w-[650px] flex-shrink-0 transition-opacity duration-700 ",
                                currentIndex < index ? "opacity-0" : "block"
                            )}
                        >
                            {index === 0 && (
                                <div className="absolute left-[102px] flex items-center md:top-[70px] lg:top-[55px]">
                                    <p className="arrow h-[6px] min-w-[78px]  rounded-tl-[10px] rounded-bl-[10px] bg-[#FFFFFF]" />
                                    <svg
                                        width="21"
                                        height="20"
                                        viewBox="0 0 21 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M21 9.6L6.6 17.9138L6.6 1.28616L21 9.6Z"
                                            fill="#ffffff"
                                        />
                                        <rect
                                            x="4.67969"
                                            y="0.960938"
                                            width="17.28"
                                            height="3.84"
                                            transform="rotate(90 4.67969 0.960938)"
                                            fill="#ffffff"
                                        />
                                    </svg>
                                </div>
                            )}

                            <div className="mb-[74px] flex justify-between gap-[30px] text-white ">
                                <div className="w-[250px]">

                                    <div className="bg-[#AF212B] w-auto max-w-fit flex justify-center items-center px-5 py-3 rounded-full text-center">
                                        <span className="text-[14px] sm:text-[16px]">{obj.year}</span>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-start sm:items-end w-full max-w-full sm:max-w-[90%] md:max-w-[705px] text-white">
                                {/* // eslint-disable-next-line @next/next/no-img-element */}
                                <Image
                                    src={obj.image}
                                    alt="timeline"
                                    width={132}
                                    height={141}
                                    className="object-cover w-full sm:w-[132px] md:w-[280px] lg:w-[360px] h-[200px] sm:h-[141px] md:h-[200px] lg:h-[274px] rounded-xl flex-shrink-0"
                                />
                                <div className="w-full flex flex-col justify-start sm:justify-end gap-2 self-start sm:self-end">
                                    {/* <h1 className="text-[24px] sm:text-[26px] md:text-[32px] font-semibold">{obj.title}</h1> */}
                                    <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[24px]">
                                        {obj.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <motion.svg
                    ref={ref}
                    style={{ y }}
                    width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-5 right-20 -z-20">
                    <motion.path d="M34.8912 2.57031L27.499 11.1703L25.4292 0.570312H22.5708L20.2053 11.1703L13.4045 2.57031L11.039 3.97031L14.3901 14.7703L3.94251 11.1703L2.46407 13.2703L9.95483 20.8703L0 23.1703L0.0985627 25.7703L11.039 27.9703L2.46407 35.6703L3.94251 37.9703L14.3901 34.1703L11.039 44.8703L13.4045 46.4703L20.2053 37.9703L22.5708 48.5703H25.4292L27.499 37.9703L34.8912 46.4703L37.0596 44.8703L33.5113 34.1703L44.2546 37.9703L45.4374 35.6703L37.0596 27.9703L48 25.7703V23.1703L37.0596 20.8703L45.4374 13.2703L44.0575 11.0703L33.5113 14.7703L37.0596 3.97031L34.8912 2.57031Z" fill="#A68468"
                        ref={ref1}
                        style={{ rotate: rotate1 }}
                    />
                </motion.svg>
                <motion.svg
                    ref={otherref}
                    style={{ y: othery }}
                    width="131" height="101" viewBox="0 0 131 101" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-20 left-32 -z-20">
                    <motion.path d="M58.152 3.33333L45.8316 17.6667L42.3819 0H37.6181L33.6756 17.6667L22.3409 3.33333L18.3984 5.66667L23.9836 23.6667L6.57084 17.6667L4.10678 21.1667L16.5914 33.8333L0 37.6667L0.164271 42L18.3984 45.6667L4.10678 58.5L6.57084 62.3333L23.9836 56L18.3984 73.8333L22.3409 76.5L33.6756 62.3333L37.6181 80H42.3819L45.8316 62.3333L58.152 76.5L61.7659 73.8333L55.8522 56L73.7577 62.3333L75.729 58.5L61.7659 45.6667L80 42V37.6667L61.7659 33.8333L75.729 21.1667L73.4292 17.5L55.8522 23.6667L61.7659 5.66667L58.152 3.33333Z" fill="#C8AD6E"
                        ref={ref2}
                        style={{ rotate: rotate2 }}
                    />
                    <motion.path d="M116.253 49.25L107.936 58.925L105.608 47H102.392L99.731 58.925L92.0801 49.25L89.4189 50.825L93.1889 62.975L81.4353 58.925L79.7721 61.2875L88.1992 69.8375L77 72.425L77.1109 75.35L89.4189 77.825L79.7721 86.4875L81.4353 89.075L93.1889 84.8L89.4189 96.8375L92.0801 98.6375L99.731 89.075L102.392 101H105.608L107.936 89.075L116.253 98.6375L118.692 96.8375L114.7 84.8L126.786 89.075L128.117 86.4875L118.692 77.825L131 75.35V72.425L118.692 69.8375L128.117 61.2875L126.565 58.8125L114.7 62.975L118.692 50.825L116.253 49.25Z" fill="#EFB744"
                        ref={ref3}
                        style={{ rotate: rotate3 }}
                    />
                </motion.svg>


            </div>

            <div className=" absolute bottom-20 flex justify-center pt-4 mt-auto z-20 w-full text-white underline rounded-md  max-w-[240px] sm:max-w-[280px] h-[52px] font-normal text-[18px] sm:text-[20px] cursor-pointer" onClick={moveToNextSection}>
                <span>skip</span>
            </div>


        </div>
    )
}
export function MobileCaroussel() {
    // Item width calculation (carousel item width + gap, adjust as needed)
    const [itemWidth, setItemWidth] = useState(() => {
        if (typeof window !== "undefined") return window.innerWidth + 240
        return 0
    })

    // State to track current card index and animation lock
    const [currentIndex, setCurrentIndex] = useState(0)
    const [animating, setAnimating] = useState(false)

    // Refs for fresh state in Observer callbacks to avoid stale closure traps
    const currentIndexRef = useRef(currentIndex)
    const animatingRef = useRef(animating)

    // Carousel container ref and gsap observer ref
    const containerRef = useRef<HTMLElement | null>(null)
    const observerRef = useRef<Observer | null>(null)

    // Scroll direction for scroll lock logic: 'up' or 'down'
    const [scrollDirection, setScrollDirection] = useState<
        "up" | "down" | undefined
    >(undefined)

    // Track if carousel is in the viewport for scroll lock behavior
    const [isInView, setIsInView] = useState(false)

    // Keep refs updated with latest state
    useEffect(() => {
        currentIndexRef.current = currentIndex
        animatingRef.current = animating
    }, [currentIndex, animating])

    // Handle window resize to update carousel item widths
    useEffect(() => {

        const updateWidth = () => setItemWidth(window.innerWidth + 240)
        if (typeof window !== "undefined") {
            updateWidth()
            window.addEventListener("resize", updateWidth)
        }
        return () => window.removeEventListener("resize", updateWidth)
    }, [])

    // IntersectionObserver to set isInView whenever carousel container is sufficiently visible
    useEffect(() => {
        if (!containerRef.current) return

        const io = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry?.isIntersecting ?? false)
            },
            { threshold: 0.95 }
        )

        io.observe(containerRef.current)

        return () => io.disconnect()
    }, [])

    // Lock/unlock body scroll based on isInView and if user at edges trying to scroll past
    useEffect(() => {
        const atFirstAndGoingUp =
            isInView && currentIndex === 0 && scrollDirection === "up"
        const atLastAndGoingDown =
            isInView &&
            timeLineData &&
            currentIndex === timeLineData.length - 1 &&
            scrollDirection === "down"

        if (isInView && !atFirstAndGoingUp && !atLastAndGoingDown) {
            disableBodyScroll()
        } else {
            enableBodyScroll()
        }

        // Cleanup: always unlock scroll on unmount or dependency change
        return () => enableBodyScroll()
    }, [isInView, currentIndex, scrollDirection, timeLineData])

    // Update carousel horizontal position using gsap, animate smooth transition
    const updateIndex = (newIndex: number) => {
        // Prevent overlapping animations
        if (animatingRef.current) return

        const length = timeLineData?.length ?? 1
        const nextIndex = Math.min(Math.max(0, newIndex), length - 1)

        setAnimating(true)

        gsap.to(".scrollable-container", {
            x: -nextIndex * itemWidth,
            duration: 0.9,
            ease: "power2.inOut",
            onComplete: () => setAnimating(false),
        })

        gsap.to(".arrow", {
            width: nextIndex === 0 ? 78 : nextIndex * itemWidth + 70,
            duration: 0.9,
            ease: "power2.inOut",
        })

        setCurrentIndex(nextIndex)
    }

    // Scroll to next section and unlock vertical scroll
    const moveToNextSection = () => {
        enableBodyScroll()
        const nextSection = document.querySelector("#after-carousel")
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    // GSAP Observer to handle wheel/touch/pointer events for horizontal carousel navigation
    useEffect(() => {
        if (!containerRef.current) return

        // If the carousel is NOT in view, kill observer and do nothing else
        if (!isInView) {
            observerRef.current?.kill()
            return
        }

        // Otherwise, carousel is in view: create and setup observer
        observerRef.current?.kill() // Kill previous observer if any

        observerRef.current = Observer.create({
            target: containerRef.current,
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            preventDefault: true,
            tolerance: 10,
            onUp: () => {
                setScrollDirection("down")
                if (animatingRef.current || !timeLineData) return

                const total = timeLineData.length
                if (currentIndexRef.current + 1 < total) {
                    updateIndex(currentIndexRef.current + 1)
                } else {
                    // At last card, exit carousel and scroll to next section
                    observerRef.current?.kill()
                    moveToNextSection()
                }
            },
            onDown: () => {
                setScrollDirection("up")
                if (animatingRef.current || !timeLineData) return

                if (currentIndexRef.current > 0) {
                    updateIndex(currentIndexRef.current - 1)
                } else {
                    // At first card, exit carousel and scroll to top section
                    observerRef.current?.kill()
                    enableBodyScroll()
                    const topSection = document.querySelector("#top-section-id") // replace with your top section's selector!
                    if (topSection) {
                        topSection.scrollIntoView({ behavior: "smooth" })
                    } else {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                }
            },
        })

        return () => {
            observerRef.current?.kill()
        }
    }, [timeLineData, isInView])

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-[550px] w-screen flex-col items-center  py-[10px] sm:hidden overflow-hidden"
        >


            <div className="relative w-full overflow-hidden ">

                <div className="scrollable-container flex w-fit gap-[240px] px-[calc(50%-calc(505px/2))]">
                    {timeLineData?.map((obj, index) => (
                        <div
                            key={index}
                            className="card relative w-screen max-w-screen flex-shrink-0 px-4"
                        >
                            {index === 0 && (
                                <div className="absolute top-[60px] left-[113px] flex origin-left items-center">
                                    <p className="arrow h-[6px] min-w-[78px] rounded-tl-[10px] rounded-bl-[10px] bg-[white]" />
                                    <svg
                                        width="21"
                                        height="20"
                                        viewBox="0 0 21 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M21 9.6L6.6 17.9138L6.6 1.28616L21 9.6Z"
                                            fill="white"
                                        />
                                        <rect
                                            x="4.67969"
                                            y="0.960938"
                                            width="17.28"
                                            height="3.84"
                                            transform="rotate(90 4.67969 0.960938)"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            )}
                            <div className=" text-white flex flex-col items-start gap-4 justify-center">
                                <div className="bg-[#DD723B] w-auto max-w-fit flex justify-center items-center px-5 py-3 rounded-full text-center  self-center">
                                    <span className="text-[14px] sm:text-[16px]">{obj.year}</span>
                                </div>
                                <div className="w-full mt-10">
                                    <Image
                                        src={obj?.image}
                                        alt={obj?.image}
                                        width={505}
                                        height={231}
                                        className="rounded-lg shadow-md"
                                    />
                                </div>


                                <div className="w-full flex flex-col justify-start sm:justify-end gap-2 self-start sm:self-end text-white">
                                    {/* <h1 className="text-[24px] sm:text-[26px] md:text-[32px] font-semibold">{obj.title}</h1> */}
                                    <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[24px]">
                                        {obj.description}
                                    </p>
                                </div>


                            </div>

                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}