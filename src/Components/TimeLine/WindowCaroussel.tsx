"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { Observer } from "gsap/Observer"
import timeLineData from "@/lib/data/TimeLineSectionData.json"
import { cn } from "@/lib/utils"
import { useParallax } from "@/hooks/paralllelx"
import { motion } from 'framer-motion';
import { useRotateScroll } from "@/hooks/useScrollRotate"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
gsap.registerPlugin(Observer)




export function WindowCaroussel() {
    const { ref, y } = useParallax({ speed: 0.4 });
    const { ref: otherref, y: othery } = useParallax({ speed: 0.4 });
    const [itemWidth, setItemWidth] = useState(790)
    useEffect(() => {
        const handleResize = () => {
            computeItemWidth()
            const newWidth = window.innerWidth > 768 ? 790 : 740
            setItemWidth(newWidth)
        }

        window.addEventListener("resize", handleResize)
        handleResize() // call once to set initial width
        return () => window.removeEventListener("resize", handleResize)
    }, [timeLineData])

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

        const nextIndex = Math.min(Math.max(0, newIndex), totalLength - 1)

        gsap.to(".scrollable-container", {
            x: -nextIndex * itemWidth,
            duration: 0.9,
            ease: "power2.inOut",
            onComplete: () => setAnimating(false),
        })

        gsap.to(".arrow", {
            width: nextIndex === 0 ? 78 : nextIndex * itemWidth + 170,
            duration: 0.9,
            ease: "power2.inOut",
        })

        setCurrentIndex(nextIndex)
    }

    // UNLOCK scroll and move to next section
    const moveToNextSection = () => {
        clearAllBodyScrollLocks()
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
                    enableBodyScroll(containerRef.current)

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
        if (!containerRef.current) return
        if (isInView && containerRef.current) {
            disableBodyScroll(containerRef.current)
        } else {
            enableBodyScroll(containerRef?.current)
        }
        // Always cleanup when leaving/unmounting
        return () => clearAllBodyScrollLocks();
    }, [isInView])




    const { ref: ref1, rotate: rotate1 } = useRotateScroll();
    const { ref: ref2, rotate: rotate2 } = useRotateScroll();
    const { ref: ref3, rotate: rotate3 } = useRotateScroll();
    const computeItemWidth = () => {
        const sc = containerRef.current?.querySelector('.scrollable-container');
        const card = sc?.querySelector('.card');
        if (card && sc) {
            const style = getComputedStyle(sc);
            const gap = parseFloat(style.gap || style.columnGap || '0'); // gap between cards
            const width = card.getBoundingClientRect().width + gap;
            setItemWidth(width);
        }
    };


    return (
        <div
            className="relative  hidden w-screen flex-col items-center gap-6  overflow-hidden  sm:flex md:min-h-[65vh]  lg:min-h-[70vh] xl:min-h-[70vh] lg:gap-[10px] "
            ref={containerRef}>
            <div className="relative   w-full  h-full">
                <div className="scrollable-container flex w-fit gap-[140px] px-[calc(50%-calc(700px/2))] z-20 "

                >
                    {timeLineData?.map((obj, index) => (
                        <div
                            key={index}
                            className={cn(
                                "card relative max-h-[240px] w-[650px] flex-shrink-0 transition-opacity duration-700  ",
                                currentIndex < index ? "opacity-0" : "block"
                            )}
                        >



                            <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row lg:flex-row gap-3 sm:gap-4 justify-between items-start sm:items-end md:items-center xl:items-end lg:items-end w-full max-w-full sm:max-w-[90%] md:max-w-[705px] text-white relative">
                                <div className="w-[60%] flex flex-col justify-between gap-[30px] text-white self-start ">
                                    <div className="bg-[#AF212B] w-auto max-w-fit flex justify-center items-center px-5 py-3 rounded-full text-center">
                                        <span className="text-[14px] sm:text-[16px]">{obj.year}</span>
                                    </div>
                                    {/* // eslint-disable-next-line @next/next/no-img-element */}
                                    <Image
                                        src={obj.image}
                                        alt="timeline"
                                        width={132}
                                        height={141}
                                        className="object-cover w-[60%] md:w-full  h-[200px] sm:h-[141px] md:h-[200px] lg:h-[274px] rounded-xl flex-shrink-0"
                                    />

                                </div>

                                <div className="w-[40%] md:w-full xl:w-[40%] lg:w-[40%] flex">
                                    {/* <h1 className="text-[24px] sm:text-[26px] md:text-[32px] font-semibold">{obj.title}</h1> */}
                                    <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[24px] ">
                                        {obj.description}
                                    </p>
                                </div>

                                {index === 0 && (
                                    <div className="absolute left-[102px] flex 
                                -bottom-10
                                items-center ">
                                        <p className="arrow h-[3px] min-w-[78px]  rounded-tl-[10px] rounded-bl-[10px] bg-[#FFFFFF]" />
                                        <img src="/TimeLine/white.svg" alt="" width={20} height={20} />
                                    </div>
                                )}
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

            <div className=" absolute bottom-1 flex justify-center pt-4 mt-auto z-20 w-full text-white underline rounded-md  max-w-[240px] sm:max-w-[280px] h-[52px] font-normal text-[18px] sm:text-[20px] cursor-pointer" onClick={moveToNextSection}>
                <span>skip</span>
            </div>


        </div>
    )
}
