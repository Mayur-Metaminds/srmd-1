// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { Observer } from "gsap/Observer";
// import timeLineData from "@/lib/data/TimeLineSectionData.json";
// import {
//     disableBodyScroll,
//     enableBodyScroll,
//     clearAllBodyScrollLocks,
// } from "body-scroll-lock-upgrade";

// gsap.registerPlugin(Observer);

// export function MobileCaroussel() {
//     const containerRef = useRef<HTMLDivElement | null>(null);
//     const observerRef = useRef<Observer | null>(null);
//     const animatingRef = useRef(false);
//     const indexRef = useRef(0);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [itemWidth, setItemWidth] = useState(0);
//     const [isInView, setIsInView] = useState(false);
//     const topSectionRef = useRef<HTMLElement | null>(null)



//     const updateIndex = (newIndex: number) => {
//         if (animatingRef.current) return;

//         const clampedIndex = Math.max(0, Math.min(newIndex, timeLineData.length - 1));
//         animatingRef.current = true;

//         gsap.to("#scrollable-container", {
//             x: -clampedIndex * itemWidth,
//             duration: 0.7,
//             ease: "linear",
//             onComplete: () => { animatingRef.current = false },
//         });

//         gsap.to("#arrow", {
//             width: clampedIndex === 0 ? 78 : clampedIndex * itemWidth + 70,
//             duration: 0.8,
//             ease: "power1.inOut",
//         });
//         setCurrentIndex(clampedIndex);
//         indexRef.current = clampedIndex;
//     };

//     const moveToNextSection = () => {
//         // 1️⃣ Unlock body scroll first
//         clearAllBodyScrollLocks();
//         setTimeout(() => {
//             const nextSection = document.querySelector("#contact");
//             if (nextSection) {
//                 nextSection.scrollIntoView({ behavior: "smooth" });
//             }
//         }, 50);
//     };

//     // You can set this ref by prop or selector on mount:
//     useEffect(() => {
//         topSectionRef.current = document.querySelector("#audience") // Replace with your actual top component selector
//     }, [])

//     // GSAP Observer for wheel/touch navigation
//     useEffect(() => {
//         if (!containerRef.current || !isInView) return;
//         observerRef.current?.kill();
//         observerRef.current = Observer.create({
//             target: containerRef.current,
//             type: "touch,pointer",
//             wheelSpeed: -1,
//             preventDefault: true,
//             tolerance: 10,
//             onUp: () => {
//                 const next = indexRef.current + 1;
//                 if (next < timeLineData.length) updateIndex(next);
//                 else {
//                     moveToNextSection()

//                 };
//             },
//             onDown: () => {
//                 if (indexRef.current > 0) {
//                     updateIndex(indexRef.current - 1);
//                 }
//                 else {
//                     observerRef.current?.kill()
//                     // Unlock scroll so page can move normally
//                     enableBodyScroll(containerRef.current)
//                     if (topSectionRef.current) {
//                         topSectionRef.current.scrollIntoView({ behavior: "smooth" })
//                     } else {
//                         // fallback: scroll to top of page
//                         window.scrollTo({ top: 0, behavior: "smooth" })
//                     };
//                 }
//             },
//         });

//         return () => {
//             observerRef.current?.kill();
//         };
//     }, [isInView, itemWidth]);


//     // Update itemWidth on resize
//     useEffect(() => {
//         const updateWidth = () => setItemWidth(window.innerWidth + 240);
//         window.addEventListener("resize", updateWidth);
//         return () => window.removeEventListener("resize", updateWidth);
//     }, []);

//     // IntersectionObserver to detect if carousel is visible
//     useEffect(() => {
//         if (!containerRef.current) return;
//         const io = new IntersectionObserver(
//             ([entry]) => setIsInView(entry.isIntersecting),
//             { threshold: 0.9 }
//         );
//         io.observe(containerRef.current);
//         return () => io.disconnect();
//     }, []);

//     // Lock body scroll when carousel is in view
//     useEffect(() => {
//         if (containerRef.current) {
//             if (isInView) disableBodyScroll(containerRef.current, { allowTouchMove: () => true });
//             else enableBodyScroll(containerRef.current);
//         }
//         return () => clearAllBodyScrollLocks();
//     }, [isInView]);
//     return (
//         <div
//             ref={containerRef}
//             className="relative flex  h-[80vh] sm:h-[60vh]   w-screen flex-col items-center   md:hidden overflow-hidden"
//         >

//             <div className="relative w-full ">

//                 <div id="scrollable-container" className=" flex w-fit gap-[240px] px-[calc(50%-calc(505px/2))]">
//                     {timeLineData?.map((obj, index) => (
//                         <div
//                             key={index}
//                             className="card relative w-screen max-w-screen flex-shrink-0 px-4"
//                         >
//                             {index === 0 && (
//                                 <div className="absolute -bottom-7 left-[10px] flex origin-left items-center">
//                                     <p id="arrow" className=" h-[3px] min-w-[78px] rounded-tl-[10px] rounded-bl-[10px] bg-[white]" />
//                                     <Image src="/TimeLine/white.svg" alt="imag" width={20} height={20} />

//                                 </div>
//                             )}
//                             <div className=" text-white flex flex-col items-start gap-4 justify-start">
//                                 <div className="mt-4 w-full flex  flex-col items-center gap-y-5">
//                                     <div className="bg-[#DD723B] w-auto max-w-fit flex justify-center items-center px-5 py-3 rounded-full text-center  self-start">
//                                         <span className="text-[14px] sm:text-[16px]">{obj.year}</span>
//                                     </div>
//                                     <div className="w-full   rounded-lg shadow-md">

//                                         <Image
//                                             src={obj?.image}
//                                             alt={"image"}
//                                             width={246}
//                                             height={231}
//                                             className="w-full max-h-[246px] object-contain rounded-lg shadow-md"
//                                         />
//                                     </div>
//                                 </div>


//                                 <div className="w-full flex flex-col justify-start sm:justify-end gap-2 self-start sm:self-end text-white">
//                                     <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[20px] sm:leading-[24px]">
//                                         {obj.description}
//                                     </p>
//                                 </div>



//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className=" absolute -bottom-20 flex justify-center pt-4 mt-auto z-20 w-full text-white underline rounded-md   h-[52px] font-normal text-[18px] sm:text-[20px] cursor-pointer" onClick={moveToNextSection}>
//                     <span>skip</span>
//                 </div>
//             </div>

//         </div>
//     )
// }
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import timeLineData from "@/lib/data/TimeLineSectionData.json";
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from "body-scroll-lock-upgrade";

gsap.registerPlugin(Observer);

export function MobileCaroussel() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const observerRef = useRef<Observer | null>(null);
    const animatingRef = useRef(false);
    const indexRef = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const topSectionRef = useRef<HTMLElement | null>(null);
    
    // NEW: Last index memory and first visit tracking
    const lastIndexRef = useRef(0);
    const isFirstVisitRef = useRef(true);
    const lastScrollTime = useRef(0);
    const SCROLL_DELAY = 300; // milliseconds

    // Keep refs in sync with currentIndex
    useEffect(() => {
        indexRef.current = currentIndex;
        lastIndexRef.current = currentIndex; // Always update last index
    }, [currentIndex]);

    const updateIndex = (newIndex: number) => {
        const now = Date.now();
        if (now - lastScrollTime.current < SCROLL_DELAY) {
            return; // Ignore rapid scrolls
        }
        
        if (animatingRef.current) return;
        lastScrollTime.current = now;

        const clampedIndex = Math.max(0, Math.min(newIndex, timeLineData.length - 1));
        animatingRef.current = true;

        gsap.to("#scrollable-container", {
            x: -clampedIndex * itemWidth,
            duration: 1.2, // Increased from 0.7 to 1.2 seconds
            ease: "power4.out", // Changed from "linear" to smooth ease
            onComplete: () => { animatingRef.current = false },
        });

        gsap.to("#arrow", {
            width: clampedIndex === 0 ? 78 : clampedIndex * itemWidth + 70,
            duration: 1.3, // Increased from 0.8 to 1.3 seconds
            ease: "power4.out", // Changed from "power1.inOut" to smooth ease
        });
        
        setCurrentIndex(clampedIndex);
        indexRef.current = clampedIndex;
    };

    const moveToNextSection = () => {
        // Kill observer before exiting
        observerRef.current?.kill();
        observerRef.current = null;
        
        // Unlock body scroll
        clearAllBodyScrollLocks();
        
        setTimeout(() => {
            const nextSection = document.querySelector("#contact");
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 50);
    };

    const moveToPrevSection = () => {
        // Kill observer before exiting
        observerRef.current?.kill();
        observerRef.current = null;
        
        // Unlock body scroll
        clearAllBodyScrollLocks();
        
        setTimeout(() => {
            const nextSection = document.querySelector("#contact");
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 50);
    };

    // Set reference to top section on mount
    useEffect(() => {
        topSectionRef.current = document.querySelector("#audience");
    }, []);

    // GSAP Observer for wheel/touch navigation
    useEffect(() => {
        if (!containerRef.current || !isInView) {
            observerRef.current?.kill();
            return;
        }
        
        // Kill existing observer before creating new one
        observerRef.current?.kill();
        
        observerRef.current = Observer.create({
            target: containerRef.current,
            type: "touch,pointer",
            wheelSpeed: -2,
            preventDefault: true,
            tolerance: 10, // Increased from 10 to match desktop
            onUp: () => {
                const current = indexRef.current;
                const next = current + 1;
                
                if (next < timeLineData.length) {
                    updateIndex(next);
                } else {
                    console.log('Exiting to next section');
                    moveToNextSection();
                }
            },
            onDown: () => {
                const current = indexRef.current;
                
                if (current > 0) {
                    updateIndex(current - 1);
                } else {
                    console.log('Exiting to previous section');
                    observerRef.current?.kill();
                    observerRef.current = null;
                    
                    // Unlock scroll so page can move normally
                    enableBodyScroll(containerRef.current);
                    
                    if (topSectionRef.current) {
                        topSectionRef.current.scrollIntoView({ behavior: "smooth" });
                    } else {
                        // Fallback: scroll to top of page
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                }
            },
        });

        return () => {
            observerRef.current?.kill();
            observerRef.current = null;
        };
    }, [isInView, itemWidth]);

    // Update itemWidth on resize
    useEffect(() => {
        const updateWidth = () => setItemWidth(window.innerWidth + 240);
        updateWidth(); // Initial call
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // IntersectionObserver to detect if carousel is visible
    useEffect(() => {
        if (!containerRef.current) return;
        const io = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.9 }
        );
        io.observe(containerRef.current);
        return () => io.disconnect();
    }, []);

    // Restore position when entering section
    useEffect(() => {
        if (isInView) {
            console.log('Carousel activated');
            const targetIndex = isFirstVisitRef.current ? 0 : lastIndexRef.current;

            if (currentIndex !== targetIndex) {
                console.log(`Restoring to index: ${targetIndex}`);
                setCurrentIndex(targetIndex);
                indexRef.current = targetIndex;
                
                // Instantly position the carousel without animation
                gsap.set("#scrollable-container", { x: -(targetIndex * itemWidth) });
                gsap.set("#arrow", { width: targetIndex === 0 ? 78 : targetIndex * itemWidth + 70 });
            }
            
            // Mark that we've visited at least once
            isFirstVisitRef.current = false;
        }
    }, [isInView, itemWidth]);

    // Lock body scroll when carousel is in view
    useEffect(() => {
        if (containerRef.current) {
            if (isInView) {
                disableBodyScroll(containerRef.current, { allowTouchMove: () => true });
            } else {
                enableBodyScroll(containerRef.current);
            }
        }
        return () => clearAllBodyScrollLocks();
    }, [isInView]);

    return (
        <div
            ref={containerRef}
            className="relative flex h-[80vh] sm:h-[60vh] w-screen flex-col items-center md:hidden overflow-hidden"
                style={{ touchAction: 'none' }} // Add this

        >
            <div className="relative w-full">
                <div id="scrollable-container" className="flex w-fit gap-[240px] px-[calc(50%-calc(505px/2))]">
                    {timeLineData?.map((obj, index) => (
                        <div
                            key={index}
                            className="card relative w-screen max-w-screen flex-shrink-0 px-4"
                        >
                            {index === 0 && (
                                <div className="absolute -bottom-7 left-[10px] flex origin-left items-center">
                                    <p id="arrow" className="h-[3px] min-w-[78px] rounded-tl-[10px] rounded-bl-[10px] bg-[white]" />
                                    <Image src="/TimeLine/white.svg" alt="arrow" width={20} height={20} />
                                </div>
                            )}
                            <div className="text-white flex flex-col items-start gap-4 justify-start">
                                <div className="mt-4 w-full flex flex-col items-center gap-y-5">
                                    <div className="bg-[#DD723B] w-auto max-w-fit flex justify-center items-center px-5 py-3 rounded-full text-center self-start">
                                        <span className="text-[14px] sm:text-[16px]">{obj.year}</span>
                                    </div>
                                    <div className="w-full rounded-lg shadow-md">
                                        <Image
                                            src={obj?.image}
                                            alt={"timeline"}
                                            width={246}
                                            height={231}
                                            className="w-full max-h-[246px] object-contain rounded-lg shadow-md"
                                        />
                                    </div>
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
                <div className="absolute -bottom-20 flex justify-center pt-4 mt-auto z-20 w-full text-white underline rounded-md h-[52px] font-normal text-[18px] sm:text-[20px] cursor-pointer" onClick={moveToNextSection}>
                    <span>skip</span>
                </div>
            </div>
        </div>
    );
}
