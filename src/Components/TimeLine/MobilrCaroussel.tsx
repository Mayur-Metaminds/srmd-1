"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { Observer } from "gsap/Observer"
import timeLineData from "@/lib/data/TimeLineSectionData.json"
gsap.registerPlugin(Observer)

function disableBodyScroll() {
    document.body.style.overflow = "hidden"
}
function enableBodyScroll() {
    document.body.style.overflow = ""
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
            className="relative flex h-[70vh] w-screen flex-col items-center  py-[10px] sm:hidden overflow-hidden"
        >

            <div className="relative w-full ">

                <div className="scrollable-container flex w-fit gap-[240px] px-[calc(50%-calc(505px/2))]">
                    {timeLineData?.map((obj, index) => (
                        <div
                            key={index}
                            className="card relative w-screen max-w-screen flex-shrink-0 px-4"
                        >
                            {index === 0 && (
                                <div className="absolute -bottom-7 left-[113px] flex origin-left items-center">
                                    <p className="arrow h-[3px] min-w-[78px] rounded-tl-[10px] rounded-bl-[10px] bg-[white]" />
                                       <img src="/TimeLine/white.svg" alt="" width={20} height={20}  />
                                   
                                </div>
                            )}
                            <div className=" text-white flex flex-col items-start gap-4 justify-center">
                                <div className="bg-[#DD723B] w-auto max-w-fit flex justify-center items-center px-5 py-3 rounded-full text-center  self-center">
                                    <span className="text-[14px] sm:text-[16px]">{obj.year}</span>
                                </div>
                                <div className="w-full">
                                    <Image
                                        src={obj?.image}
                                        alt={obj?.image}
                                        width={505}
                                        height={231}
                                        className="rounded-lg shadow-md"
                                    />
                                </div>


                                <div className="w-full flex flex-col justify-start sm:justify-end gap-2 self-start sm:self-end text-white">
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