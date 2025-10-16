// "use client"
// import ScrollTypingEffect from "../Common/ScrollTextFilling"
// import { useParallax } from "@/hooks/paralllelx"
// import { motion } from 'framer-motion';
// import { useRotateScroll } from "@/hooks/useScrollRotate"
// import { WindowCaroussel } from "./WindowCaroussel"
// import { MobileCaroussel } from "./MobilrCaroussel"
// import { forwardRef, useEffect, useRef, useState } from "react";

// export default function TimeLineSection() {
//     const { ref, y } = useParallax({ speed: 0.4 });
//     const { ref: ref1, rotate: rotate1 } = useRotateScroll();
//     const containerRef = useRef<HTMLDivElement | null>(null)
//     const [isInView, setIsInView] = useState<boolean>(false)
//     const scrollPositionRef = useRef(0)
//     const isLockedRef = useRef(false)

//     // IntersectionObserver - multiple thresholds
//     useEffect(() => {
//         if (!containerRef.current) return

//         const io = new IntersectionObserver(
//             (entries) => {
//                 const entry = entries[0]
//                 if (entry) {
//                     setIsInView(entry.isIntersecting ?? false)
//                 }
//             },
//             { 
//                 threshold: [0, 0.1, 0.5, 0.9, 1],
//                 rootMargin: '-5% 0px -5% 0px'
//             }
//         )

//         io.observe(containerRef.current)
//         return () => io.disconnect()
//     }, [])

//     // Preemptive scroll detection
//     useEffect(() => {
//         let ticking = false

//         const handleScroll = () => {
//             if (!ticking) {
//                 window.requestAnimationFrame(() => {
//                     if (!containerRef.current) {
//                         ticking = false
//                         return
//                     }

//                     const rect = containerRef.current.getBoundingClientRect()
//                     const viewportHeight = window.innerHeight
                    
//                     const isVisible = 
//                         rect.top < viewportHeight * 0.9 && 
//                         rect.bottom > viewportHeight * 0.1

//                     if (isVisible && !isLockedRef.current) {
//                         console.log('Preemptive lock triggered')
//                         setIsInView(true)
//                     } 
//                     else if (!isVisible && isLockedRef.current) {
//                         console.log('Preemptive unlock triggered')
//                         setIsInView(false)
//                     }

//                     ticking = false
//                 })
//                 ticking = true
//             }
//         }

//         window.addEventListener('scroll', handleScroll, { passive: true })
//         window.addEventListener('wheel', handleScroll, { passive: true })
        
//         handleScroll()

//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//             window.removeEventListener('wheel', handleScroll)
//         }
//     }, [])

//     // Handle exit requests from carousel
//     const handleCarouselExit = (direction: 'up' | 'down') => {
//         console.log(`Exit requested: ${direction}`)
        
//         // Unlock scroll
//         if (isLockedRef.current) {
//             isLockedRef.current = false
//             const savedPosition = scrollPositionRef.current
            
//             document.body.style.position = ''
//             document.body.style.top = ''
//             document.body.style.left = ''
//             document.body.style.right = ''
//             document.body.style.width = ''
//             document.body.style.overflowY = ''
            
//             requestAnimationFrame(() => {
//                 window.scrollTo(0, savedPosition)
                
//                 // Navigate after scroll restoration
//                 setTimeout(() => {
//                     if (direction === 'down') {
//                         const nextSection = document.querySelector("#contact")
//                         if (nextSection) {
//                             nextSection.scrollIntoView({ behavior: "smooth" })
//                         }
//                     } else {
//                         const prevSection = document.querySelector("#audience")
//                         if (prevSection) {
//                             prevSection.scrollIntoView({ behavior: "smooth" })
//                         } else {
//                             window.scrollTo({ top: 0, behavior: "smooth" })
//                         }
//                     }
//                 }, 100)
//             })
//         }
//     }

//     // Scroll lock
//     useEffect(() => {
//         if (!containerRef.current) return
        
//         if (isInView) {
//             if (isLockedRef.current) return
            
//             console.log('Locking scroll')
//             isLockedRef.current = true
            
//             scrollPositionRef.current = window.scrollY
            
//             const rect = containerRef.current.getBoundingClientRect()
//             const targetScroll = window.scrollY + rect.top
//             window.scrollTo({ top: targetScroll, behavior: 'instant' })
            
//             scrollPositionRef.current = targetScroll
            
//             document.body.style.position = 'fixed'
//             document.body.style.top = `-${scrollPositionRef.current}px`
//             document.body.style.left = '0'
//             document.body.style.right = '0'
//             document.body.style.width = '100%'
//             document.body.style.overflowY = 'scroll'
            
//         } else {
//             if (!isLockedRef.current) return
            
//             console.log('Unlocking scroll')
//             isLockedRef.current = false
            
//             const savedPosition = scrollPositionRef.current
            
//             document.body.style.position = ''
//             document.body.style.top = ''
//             document.body.style.left = ''
//             document.body.style.right = ''
//             document.body.style.width = ''
//             document.body.style.overflowY = ''
            
//             requestAnimationFrame(() => {
//                 window.scrollTo(0, savedPosition)
//             })
//         }
        
//         return () => {
//             if (isLockedRef.current) {
//                 isLockedRef.current = false
//                 document.body.style.position = ''
//                 document.body.style.top = ''
//                 document.body.style.left = ''
//                 document.body.style.right = ''
//                 document.body.style.width = ''
//                 document.body.style.overflowY = ''
//             }
//         }
//     }, [isInView])

//     return (
//         <>
//             <div
//                 className="relative min-h-screen"
//                 ref={containerRef}
//                 style={{
//                     background: "linear-gradient(#293464B2, #293464B2), url('/countdownbg.jpg')",
//                     backgroundSize: "contain",
//                     backgroundRepeat: "repeat",
//                     backgroundPosition: "center",
//                     clipPath: "polygon( 0 10px,50% 0,100% 15px,100% calc(100% - 10px), 50% 100%,  0 calc(100% - 10px) )"
//                 }}
//             >
// <motion.svg
//                     ref={ref}
//                     style={{ y }}
//                     width="1139" height="216" viewBox="0 0 1139 216" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-20 left-10 -z-20">
//                     <motion.path d="M33.7621 194.123C27.5745 190.37 24.3159 188.978 20.3728 192.913C21.3376 187.415 19.2319 185.216 12.0632 182.429C7.88271 189.007 7.63391 191.934 10.8335 195.834C5.37523 194.894 3.201 196.987 0.416361 204.041C7.31332 208.664 10.0066 208.449 13.6733 205.344C12.7151 211.543 15.8674 213.163 22.1153 215.734C26.1088 209.312 26.932 206.163 22.8601 202.315C29.0922 203.352 31.048 200.633 33.7621 194.123Z" fill="#15A9EE" fillOpacity="0.4"
//                         ref={ref1}
//                         style={{ rotate: rotate1 }}
//                     />
//                     <circle cx="12.6" cy="12.6" r="12.6" transform="matrix(-0.845842 0.533433 0.533433 0.845842 679.312 -4)" fill="#C8AD6E" />
//                     <rect x="1133.91" y="96.8125" width="15.7799" height="6.36088" transform="rotate(-162.338 1133.91 96.8125)" fill="#C8AD6E" />
//                     <rect x="1126.84" y="87.9609" width="15.7799" height="6.36088" transform="rotate(107.662 1126.84 87.9609)" fill="#C8AD6E" />
//                     <rect x="1138.71" y="81.7812" width="15.7799" height="6.36088" transform="rotate(107.662 1138.71 81.7812)" fill="#C8AD6E" />
//                 </motion.svg>

//                 <div
//                     id="count-down1"
//                     className="w-[90%]  m-auto flex flex-col items-center mt-4 sm:mt-6 lg:mt-10 min-h-[200px] sm:min-h-[275px] lg:h-[275px]  justify-start sm:justify-center relative overflow-hidden pb-0"
//                 >
//                     <div className="mt-10 text-white w-full flex flex-col gap-3 sm:gap-6 z-20 self-start sm:self-start  sm:w-[100%] md:w-[90%] lg:w-[70%] xl:w-[50%]">
//                         <div className="p-2 sm:p-3 rounded-[100px] w-auto max-w-fit bg-white text-[#222222] flex justify-center items-center gap-x-2 text-[14px] sm:text-[16px] px-4 sm:px-5">
//                             <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
//                                 <ellipse cx="16.8946" cy="10.7153" rx="7.78622" ry="7.78556" fill="#0B5399" />
//                                 <path d="M11.3216 1.1488L8.92333 3.93862L8.25183 0.5H7.32452L6.55709 3.93862L4.35072 1.1488L3.58329 1.60295L4.67049 5.10646L1.281 3.93862L0.80136 4.61986L3.23156 7.08529L0.00195312 7.83141L0.0339294 8.67484L3.58329 9.38852L0.80136 11.8864L1.281 12.6325L4.67049 11.3998L3.58329 14.8709L4.35072 15.3899L6.55709 12.6325L7.32452 16.0711H8.25183L8.92333 12.6325L11.3216 15.3899L12.025 14.8709L10.8739 11.3998L14.3593 12.6325L14.743 11.8864L12.025 9.38852L15.5744 8.67484V7.83141L12.025 7.08529L14.743 4.61986L14.2953 3.90618L10.8739 5.10646L12.025 1.60295L11.3216 1.1488Z" fill="#C8AD6E" />
//                             </svg>
//                             <span className="whitespace-nowrap font-semibold text-[12px] md:text-[14px] sm:text-[16px]">From Roots to Wings</span>
//                         </div>
//                         <ScrollTypingEffect className="text-[#7F85A2] text-[26px] sm:text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-tight font-[400]  z-20  sm:leading-snug w-full" colorChange="white" text="Evolved over 20 years, and loved by lakhs of children across the world" />
//                     </div>
//                 </div>
                
//                 <WindowCaroussel 
//                     isParentInView={isInView} 
//                     onRequestExit={handleCarouselExit} 
//                 />
//                 <MobileCaroussel />
//             </div>
//         </>
//     )
// }
"use client"
import ScrollTypingEffect from "../Common/ScrollTextFilling"
import { useParallax } from "@/hooks/paralllelx"
import { motion } from 'framer-motion';
import { useRotateScroll } from "@/hooks/useScrollRotate"
import { WindowCaroussel } from "./WindowCaroussel"
import { MobileCaroussel } from "./MobilrCaroussel"
import { forwardRef, useEffect, useRef, useState } from "react";
import { TimeLineTopSectionProp } from "./TimeLineTopSectionProp";

export default function TimeLineSection() {
    const { ref, y } = useParallax({ speed: 0.4 });
    const { ref: ref1, rotate: rotate1 } = useRotateScroll();
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [isInView, setIsInView] = useState<boolean>(false)
    const scrollPositionRef = useRef(0)
    const isLockedRef = useRef(false)
    const isExitingRef = useRef(false)
    const exitTimeoutRef = useRef<NodeJS.Timeout | null>(null) // Track timeout

    // IntersectionObserver
    useEffect(() => {
        if (!containerRef.current) return

        const io = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (entry && !isExitingRef.current) {
                    setIsInView(entry.isIntersecting ?? false)
                }
            },
            { 
                threshold: [0, 0.1, 0.5, 0.9, 1],
                rootMargin: '-5% 0px -5% 0px'
            }
        )

        io.observe(containerRef.current)
        return () => io.disconnect()
    }, [])

    // Preemptive scroll detection
    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (!containerRef.current || isExitingRef.current) {
                        ticking = false
                        return
                    }

                    const rect = containerRef.current.getBoundingClientRect()
                    const viewportHeight = window.innerHeight
                    
                    const isVisible = 
                        rect.top < viewportHeight * 0.9 && 
                        rect.bottom > viewportHeight * 0.1

                    if (isVisible && !isLockedRef.current) {
                        console.log('Preemptive lock triggered')
                        setIsInView(true)
                    } 
                    else if (!isVisible && isLockedRef.current && !isExitingRef.current) {
                        console.log('Preemptive unlock triggered')
                        setIsInView(false)
                    }

                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('wheel', handleScroll, { passive: true })
        
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('wheel', handleScroll)
        }
    }, [])

    // Handle exit requests from carousel
    const handleCarouselExit = (direction: 'up' | 'down') => {
        console.log(`Exit requested: ${direction}`)
        
        // Clear any existing exit timeout
        if (exitTimeoutRef.current) {
            clearTimeout(exitTimeoutRef.current)
        }
        
        // Mark that we're exiting
        isExitingRef.current = true
        
        // Force set isInView to false to disable carousel
        setIsInView(false)
        
        // Unlock scroll immediately
        if (isLockedRef.current) {
            isLockedRef.current = false
            const savedPosition = scrollPositionRef.current
            
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.left = ''
            document.body.style.right = ''
            document.body.style.width = ''
            document.body.style.overflowY = ''
            
            requestAnimationFrame(() => {
                window.scrollTo(0, savedPosition)
                
                // Navigate after scroll restoration
                setTimeout(() => {
                    if (direction === 'down') {
                        const nextSection = document.querySelector("#contact")
                        if (nextSection) {
                            nextSection.scrollIntoView({ behavior: "smooth" })
                        }
                    } else {
                        const prevSection = document.querySelector("#audience")
                        if (prevSection) {
                            prevSection.scrollIntoView({ behavior: "smooth" })
                        } else {
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    }
                    
                    // Reset exiting flag after navigation starts (not completes)
                    exitTimeoutRef.current = setTimeout(() => {
                        console.log('Exiting flag reset')
                        isExitingRef.current = false
                        exitTimeoutRef.current = null
                    }, 500) // Shorter timeout - 500ms
                }, 50)
            })
        }
    }

    // Scroll lock
    useEffect(() => {
        if (!containerRef.current || isExitingRef.current) return
        
        if (isInView) {
            if (isLockedRef.current) return
            
            console.log('Locking scroll')
            isLockedRef.current = true
            
            scrollPositionRef.current = window.scrollY
            
            const rect = containerRef.current.getBoundingClientRect()
            const targetScroll = window.scrollY + rect.top
            
            if (Math.abs(rect.top) > 10) {
                window.scrollTo({ top: targetScroll, behavior: 'instant' })
                scrollPositionRef.current = targetScroll
            }
            
            document.body.style.position = 'fixed'
            document.body.style.top = `-${scrollPositionRef.current}px`
            document.body.style.left = '0'
            document.body.style.right = '0'
            document.body.style.width = '100%'
            document.body.style.overflowY = 'scroll'
            
        } else {
            if (!isLockedRef.current) return
            
            console.log('Unlocking scroll')
            isLockedRef.current = false
            
            const savedPosition = scrollPositionRef.current
            
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.left = ''
            document.body.style.right = ''
            document.body.style.width = ''
            document.body.style.overflowY = ''
            
            requestAnimationFrame(() => {
                window.scrollTo(0, savedPosition)
            })
        }
        
        return () => {
            if (exitTimeoutRef.current) {
                clearTimeout(exitTimeoutRef.current)
            }
            if (isLockedRef.current) {
                isLockedRef.current = false
                document.body.style.position = ''
                document.body.style.top = ''
                document.body.style.left = ''
                document.body.style.right = ''
                document.body.style.width = ''
                document.body.style.overflowY = ''
            }
        }
    }, [isInView])

    return (
        <>
            <div
                className="relative min-h-screen"
                ref={containerRef}
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
                    <circle cx="12.6" cy="12.6" r="12.6" transform="matrix(-0.845842 0.533433 0.533433 0.845842 679.312 -4)" fill="#BA8C2D" />
                    <rect x="1133.91" y="96.8125" width="15.7799" height="6.36088" transform="rotate(-162.338 1133.91 96.8125)" fill="#BA8C2D" />
                    <rect x="1126.84" y="87.9609" width="15.7799" height="6.36088" transform="rotate(107.662 1126.84 87.9609)" fill="#BA8C2D" />
                    <rect x="1138.71" y="81.7812" width="15.7799" height="6.36088" transform="rotate(107.662 1138.71 81.7812)" fill="#BA8C2D" />
                </motion.svg> */}
                <TimeLineTopSectionProp />

                <div
                    id="count-down1"
                    className="w-[90%]  m-auto flex flex-col items-center mt-4 sm:mt-6 lg:mt-10 min-h-[200px] sm:min-h-[275px] lg:h-[275px]  justify-start sm:justify-center relative overflow-hidden pb-0"
                >
                    <div className="mt-10 text-white w-full flex flex-col gap-3 sm:gap-6 z-20 self-start sm:self-start  sm:w-[100%] md:w-[90%] lg:w-[70%] xl:w-[50%]">
                        <div className="p-2 sm:p-3 rounded-[100px] w-auto max-w-fit bg-white text-[#222222] flex justify-center items-center gap-x-2 text-[14px] sm:text-[16px] px-4 sm:px-5">
                            <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                                <ellipse cx="16.8946" cy="10.7153" rx="7.78622" ry="7.78556" fill="#0B5399" />
                                <path d="M11.3216 1.1488L8.92333 3.93862L8.25183 0.5H7.32452L6.55709 3.93862L4.35072 1.1488L3.58329 1.60295L4.67049 5.10646L1.281 3.93862L0.80136 4.61986L3.23156 7.08529L0.00195312 7.83141L0.0339294 8.67484L3.58329 9.38852L0.80136 11.8864L1.281 12.6325L4.67049 11.3998L3.58329 14.8709L4.35072 15.3899L6.55709 12.6325L7.32452 16.0711H8.25183L8.92333 12.6325L11.3216 15.3899L12.025 14.8709L10.8739 11.3998L14.3593 12.6325L14.743 11.8864L12.025 9.38852L15.5744 8.67484V7.83141L12.025 7.08529L14.743 4.61986L14.2953 3.90618L10.8739 5.10646L12.025 1.60295L11.3216 1.1488Z" fill="#BA8C2D" />
                            </svg>
                            <span className="whitespace-nowrap font-semibold text-[12px] md:text-[14px] sm:text-[16px]">From Roots to Wings</span>
                        </div>
                        <ScrollTypingEffect className="text-[#7F85A2] text-[26px] sm:text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-tight font-[400]  z-20  sm:leading-snug w-full" colorChange="white" text="Evolved over 20 years, and loved by lakhs of children across the world" />
                    </div>
                </div>
                
                <WindowCaroussel 
                    isParentInView={isInView} 
                    onRequestExit={handleCarouselExit} 
                />
                <MobileCaroussel />
            </div>
        </>
    )
}


// export const TimeLineTop = forwardRef<HTMLDivElement | null>((props, ref) => {
//     const { ref: ref2, y } = useParallax({ speed: 0.4 });
//     const { ref: ref1, rotate: rotate1 } = useRotateScroll();
//     return (
//         <>
//             <motion.svg
//                 ref={ref2}
//                 style={{ y }}
//                 width="1139" height="216" viewBox="0 0 1139 216" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-20 left-10 -z-20">
//                 <motion.path d="M33.7621 194.123C27.5745 190.37 24.3159 188.978 20.3728 192.913C21.3376 187.415 19.2319 185.216 12.0632 182.429C7.88271 189.007 7.63391 191.934 10.8335 195.834C5.37523 194.894 3.201 196.987 0.416361 204.041C7.31332 208.664 10.0066 208.449 13.6733 205.344C12.7151 211.543 15.8674 213.163 22.1153 215.734C26.1088 209.312 26.932 206.163 22.8601 202.315C29.0922 203.352 31.048 200.633 33.7621 194.123Z" fill="#15A9EE" fillOpacity="0.4"
//                     ref={ref1}
//                     style={{ rotate: rotate1 }}
//                 />
//                 <circle cx="12.6" cy="12.6" r="12.6" transform="matrix(-0.845842 0.533433 0.533433 0.845842 679.312 -4)" fill="#BA8C2D" />
//                 <rect x="1133.91" y="96.8125" width="15.7799" height="6.36088" transform="rotate(-162.338 1133.91 96.8125)" fill="#BA8C2D"

//                 />
//                 <rect x="1126.84" y="87.9609" width="15.7799" height="6.36088" transform="rotate(107.662 1126.84 87.9609)" fill="#BA8C2D" />
//                 <rect x="1138.71" y="81.7812" width="15.7799" height="6.36088" transform="rotate(107.662 1138.71 81.7812)" fill="#BA8C2D" />
//             </motion.svg>


//             <div
//                 id="count-down1"
//                 className="w-[90%]  m-auto flex flex-col items-center min-h-[200px] sm:min-h-[300px] lg:h-[300px] xl:h-[300px]  justify-start sm:justify-center relative overflow-hidden pb-0"
//             >

//                 {/* Top Section - Badge and Text */}
//                 <div className="mt-10 text-white w-full flex flex-col gap-3 sm:gap-6 z-20 self-start sm:self-start  sm:w-[100%] md:w-[90%] lg:w-[70%] xl:w-[50%]">
//                     <div className="p-2 sm:p-3 rounded-[100px] w-auto max-w-fit bg-white text-[#222222] flex justify-center items-center gap-x-2 text-[14px] sm:text-[16px] px-4 sm:px-5">
//                         <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
//                             <ellipse cx="16.8946" cy="10.7153" rx="7.78622" ry="7.78556" fill="#0B5399" />
//                             <path d="M11.3216 1.1488L8.92333 3.93862L8.25183 0.5H7.32452L6.55709 3.93862L4.35072 1.1488L3.58329 1.60295L4.67049 5.10646L1.281 3.93862L0.80136 4.61986L3.23156 7.08529L0.00195312 7.83141L0.0339294 8.67484L3.58329 9.38852L0.80136 11.8864L1.281 12.6325L4.67049 11.3998L3.58329 14.8709L4.35072 15.3899L6.55709 12.6325L7.32452 16.0711H8.25183L8.92333 12.6325L11.3216 15.3899L12.025 14.8709L10.8739 11.3998L14.3593 12.6325L14.743 11.8864L12.025 9.38852L15.5744 8.67484V7.83141L12.025 7.08529L14.743 4.61986L14.2953 3.90618L10.8739 5.10646L12.025 1.60295L11.3216 1.1488Z" fill="#BA8C2D" />
//                         </svg>
//                         <span className="whitespace-nowrap font-semibold text-[12px] md:text-[14px] sm:text-[16px]">From Roots to Wings</span>
//                     </div>
//                     <ScrollTypingEffect className="text-[#7F85A2] text-[26px] sm:text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-tight font-[400]  z-20  sm:leading-snug w-full" colorChange="white" text="Evolved over 20 years, and loved by lakhs of children across the world" />
//                 </div>



//                 {/* <TimelineCard /> */}
//                 {/* Skip Button */}

//             </div>

//         </>

//     )
// })
// TimeLineTop.displayName = "TimeLineTop"; // Important for debugging with forwardRef

