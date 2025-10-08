// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// type Card = {
//   title: string;
//   image: string;
//   gradient: string;
// };

// export default function CardStackContainer() {
//   const initialCards: Card[] = [
//     { title: "A breathtaking\nmusical production", image: "/impactCard/f.png", gradient: "bg-[#FED543]" },
//     { title: "An interactive exhibit\nexploring the world of values", image: "/impactCard/f.png", gradient: "bg-[#FED543]" },
//     { title: "A celebration of\n21 years of a global movement", image: "/impactCard/f.png", gradient: "bg-[#FED543]" },
//     { title: "The unveiling of\nthe next chapter together", image: "/impactCard/f.png", gradient: "bg-[#FED543]" },
//   ];

//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const [cards] = useState<Card[]>(initialCards);
//   const [visibleCardCount, setVisibleCardCount] = useState(1); // Start with 1 card visible
//   const [isInView, setIsInView] = useState(false);
  
//   const isTransitioningRef = useRef(false);
//   const lastScrollTimeRef = useRef(0);
//   const accumulatedDeltaRef = useRef(0);

//   const config = {
//     offset: 32,
//     scaleStep: 0.05,
//     rotationAngle: 5,
//     scrollThreshold: 100,
//     transitionDelay: 600,
//   };

//   // Monitor section visibility
//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsInView(entry.isIntersecting);
          
//           // Reset to 1 card when entering from top
//           if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
//             setVisibleCardCount(1);
//             accumulatedDeltaRef.current = 0;
//             isTransitioningRef.current = false;
//           }
//         });
//       },
//       { 
//         threshold: 0.7,
//       }
//     );

//     observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // Throttled wheel handler
//   useEffect(() => {
//     if (!isInView) return;

//     const handleWheel = (e: WheelEvent) => {
//       const now = Date.now();
//       const scrollingDown = e.deltaY > 0;
//       const scrollingUp = e.deltaY < 0;

//       // At first card (only 1 visible) scrolling up - allow natural scroll
//       if (visibleCardCount === 1 && scrollingUp) {
//         accumulatedDeltaRef.current = 0;
//         return;
//       }

//       // At last card (all 4 visible) scrolling down - allow natural scroll
//       if (visibleCardCount === cards.length && scrollingDown) {
//         accumulatedDeltaRef.current = 0;
//         return;
//       }

//       // Prevent default only when handling card transitions
//       e.preventDefault();

//       // If currently transitioning, ignore scroll
//       if (isTransitioningRef.current) {
//         return;
//       }

//       // Throttle rapid scroll events
//       if (now - lastScrollTimeRef.current < 50) {
//         return;
//       }

//       lastScrollTimeRef.current = now;

//       // Accumulate scroll delta
//       accumulatedDeltaRef.current += e.deltaY;

//       // Check if threshold reached
//       if (Math.abs(accumulatedDeltaRef.current) >= config.scrollThreshold) {
//         isTransitioningRef.current = true;

//         if (accumulatedDeltaRef.current > 0 && visibleCardCount < cards.length) {
//           // Scroll down - add next card to stack
//           setVisibleCardCount((prev) => prev + 1);
//         } else if (accumulatedDeltaRef.current < 0 && visibleCardCount > 1) {
//           // Scroll up - remove card from stack
//           setVisibleCardCount((prev) => prev - 1);
//         }

//         // Reset accumulated delta
//         accumulatedDeltaRef.current = 0;

//         // Allow next transition after delay
//         setTimeout(() => {
//           isTransitioningRef.current = false;
//         }, config.transitionDelay);
//       }
//     };

//     window.addEventListener("wheel", handleWheel, { passive: false });
//     return () => window.removeEventListener("wheel", handleWheel);
//   }, [isInView, visibleCardCount, cards.length, config.scrollThreshold, config.transitionDelay]);

//   // Touch handlers for mobile
//   const touchStartYRef = useRef(0);
//   const touchStartTimeRef = useRef(0);

//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartYRef.current = e.touches[0].clientY;
//     touchStartTimeRef.current = Date.now();
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     if (!isInView || isTransitioningRef.current) return;

//     const touchEndY = e.changedTouches[0].clientY;
//     const diff = touchStartYRef.current - touchEndY;
//     const touchDuration = Date.now() - touchStartTimeRef.current;

//     // Quick swipe detection
//     if (touchDuration > 500) return;

//     // Swipe up (add next card)
//     if (diff > 50 && visibleCardCount < cards.length) {
//       isTransitioningRef.current = true;
//       setVisibleCardCount((prev) => prev + 1);
//       setTimeout(() => {
//         isTransitioningRef.current = false;
//       }, config.transitionDelay);
//     }
//     // Swipe down (remove card)
//     else if (diff < -50 && visibleCardCount > 1) {
//       isTransitioningRef.current = true;
//       setVisibleCardCount((prev) => prev - 1);
//       setTimeout(() => {
//         isTransitioningRef.current = false;
//       }, config.transitionDelay);
//     }
//   };

//   // Get cards to display based on visible count
//   const displayCards = cards.slice(0, visibleCardCount);

//   return (
//     <div 
//       ref={sectionRef}
//       className="w-full min-h-[80%] flex justify-center items-center relative py-5"
//     >
//       <div
//         className="relative w-full m:w-[70%] h-[500px] xl:h-[550px] flex items-center justify-center"
//         onTouchStart={handleTouchStart}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div className="relative w-full h-full">
//           <AnimatePresence mode="sync">
//             {displayCards.map((card, index) => {
//               // Calculate stack position (reverse order - last card on top visually)
//               const stackIndex = visibleCardCount - 1 - index;
//               const yOffset = -stackIndex * config.offset;
//               const scale = 1 - stackIndex * config.scaleStep;
//               const rotation = stackIndex % 2 === 0 
//                 ? -config.rotationAngle 
//                 : config.rotationAngle;
//               const zIndex = 1000 - stackIndex;

//               return (
//                 <motion.div
//                   key={`card-${index}`}
//                   initial={{ 
//                     y: -150, 
//                     scale: 0.85, 
//                     rotateZ: rotation * 2,
//                     opacity: 0 
//                   }}
//                   animate={{ 
//                     y: yOffset, 
//                     scale, 
//                     rotateZ: rotation,
//                     opacity: 1 
//                   }}
//                   exit={{ 
//                     y: 150, 
//                     scale: 0.85, 
//                     rotateZ: -rotation * 2,
//                     opacity: 0 
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 180,
//                     damping: 22,
//                     mass: 0.9,
//                   }}
//                   style={{
//                     zIndex,
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     translateX: '-50%',
//                     translateY: '-50%',
//                   }}
//                   className="h-48 sm:h-[260px] md:h-[260px] w-full sm:w-[90%] md:max-w-[60%]"
//                 >
//                   <CardContent card={card} isTop={stackIndex === 0} />
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Desktop vertical progress dots */}
//       <div className="hidden lg:flex absolute left-0 -translate-x-6 top-1/2 transform -translate-y-1/2">
//         <VerticalDots activeIndex={visibleCardCount - 1} cards={cards} />
//       </div>

//       {/* Mobile horizontal progress dots */}
//       <div className="lg:hidden absolute bottom-0 translate-y-10 w-full flex justify-center">
//         <HorizontalDots activeIndex={visibleCardCount - 1} cards={cards} />
//       </div>
//     </div>
//   );
// }

// /* ----- Card Content Component ----- */
// function CardContent({ card, isTop }: { card: Card; isTop: boolean }) {
//   return (
//     <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl h-full w-full overflow-hidden">
//       <div 
//         className="h-[120px] w-[200%] absolute text-[28px] z-10 -bottom-10" 
//         style={{ background: "linear-gradient(#293464B2), url('/countdownbg.jpg')" }}
//       />

//       <div
//         className={`bg-gradient-to-br ${card.gradient} w-full rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative h-full flex flex-col justify-between transition-all duration-300`}
//       >
//         {/* Card Image */}
//         <motion.div
//           animate={isTop ? { scale: [1, 1.05, 1] } : { scale: 1 }}
//           transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//           className="absolute top-4 right-4 sm:top-8 sm:right-8 md:top-12 md:right-12 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[140[x]] md:h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[180px] xl:h-[180px] rounded-full overflow-hidden   shadow-xl z-20"
//         >
//           <img src={card.image} alt="Card" className="w-full h-full object-cover" />
//         </motion.div>

//         {/* Card Title */}
//         <h2 className="text-base sm:text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] leading-tight font-normal whitespace-pre-line max-w-[60%] sm:max-w-[55%] text-center z-30">
//           {card.title}
//         </h2>
//       </div>

//       {/* SVG 1 - Top Left */}
//       <svg 
//         width="86" 
//         height="86" 
//         viewBox="0 0 49 52" 
//         fill="none" 
//         xmlns="http://www.w3.org/2000/svg" 
//         className="absolute -top-1.5 z-20 -left-5 w-10 h-10 sm:w-12 sm:h-10 md:w-12 md:h-12 xl:w-24 xl:h-24"
//       >
//         <path d="M48.556 12.974C37.3429 8.75868 31.6164 7.48971 26.4035 15.0953C26.2936 5.8565 22.1961 2.92254 9.68219 0.578198C4.89052 12.5569 5.38008 17.3957 11.7765 22.7619C2.60941 22.8997 -0.288147 26.9704 -2.66376 39.2957C9.96927 44.7112 14.2851 43.5377 19.3019 37.3665C19.6368 47.7449 25.2599 49.4167 36.21 51.6915C40.7451 40.0233 41.1224 34.6491 33.3224 29.6323C43.7779 29.415 46.1291 24.3944 48.556 12.974Z" fill="white" />
//       </svg>

//       {/* SVG 2 - Left Bottom */}
//       <svg 
//         width="63" 
//         height="63" 
//         viewBox="0 0 32 32" 
//         fill="none" 
//         xmlns="http://www.w3.org/2000/svg" 
//         className="absolute left-4 sm:left-8 md:left-12 lg:left-15 bottom-8 sm:bottom-10 md:bottom-12 z-20 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-[63px] xl:h-[63px]"
//       >
//         <path d="M20.1543 0.914526L16.6034 7.24892L13.9617 0.857507L12.1676 1.21951L12.0253 8.17266L6.66724 3.63582L5.35973 4.81419L8.83105 11.1689L1.81718 10.2324L1.15514 11.7378L6.81959 15.5595L0.862303 18.264L1.25346 19.8835L8.39935 19.8788L3.99211 25.7981L5.21142 27.0546L11.2881 23.3461L10.5397 30.4869L12.2272 31.1916L15.4195 24.9949L18.2468 31.3488L20.041 30.9868L19.9977 24.0711L25.7142 28.4703L26.8727 27.1914L23.2903 20.9244L30.5151 21.949L30.9662 20.3555L24.7323 16.5833L31.3209 13.8168L30.9916 12.1848L23.8331 12.1267L28.1292 6.29517L26.9845 5.089L20.8333 8.74715L21.6927 1.51867L20.1543 0.914526Z" stroke="white" strokeWidth="0.370485" />
//       </svg>

//       {/* SVG 3 - Right Top */}
//       <svg 
//         width="27" 
//         height="26" 
//         viewBox="0 0 27 26" 
//         fill="none" 
//         xmlns="http://www.w3.org/2000/svg" 
//         className="absolute right-4 sm:right-8 md:right-12 lg:right-15 top-8 sm:top-6 md:top-8 xl:top-10 z-20 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-[46px] xl:h-[46px]"
//       >
//         <path d="M17.1473 0.862021L13.8989 3.86152L11.8564 0.864083L10.3205 1.17398L9.29425 5.42989L5.60171 3.19159L4.47524 4.16472L6.38205 8.73447L1.40568 8.61981L0.828163 9.85509L4.47419 12.5822L0.526668 15.1901L0.848176 16.5103L6.06924 17.1616L3.14179 21.3217L4.17377 22.3388L8.74732 20.457L8.69967 25.1015L10.136 25.6641L13.1396 21.7017L15.2783 25.7452L16.8142 25.4353L17.328 20.8566L21.6816 23.3345L22.6815 22.2804L20.9986 17.9851L25.835 17.9682L26.233 16.6625L22.4043 13.8657L26.5874 11.3169L26.3189 9.98594L21.4541 9.1562L23.9193 5.19595L22.9506 4.21938L18.4164 5.18752L18.457 1.34359L17.1473 0.862021Z" fill="#25335C" />
//       </svg>

//       {/* SVG 4 - Top Center-Right */}
//       <svg 
//         width="46" 
//         height="46" 
//         viewBox="0 0 22 22" 
//         fill="none" 
//         xmlns="http://www.w3.org/2000/svg" 
//         className="absolute top-8 sm:top-10 md:top-12 right-[30%] sm:right-[33%] z-20 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 xl:w-[46px] xl:h-[46px]"
//       >
//         <rect width="16.448" height="2.10161" transform="matrix(0.668053 -0.744113 0.74413 0.668034 0.420898 13.1836)" fill="white" />
//         <rect width="16.448" height="2.10161" transform="matrix(0.668053 -0.744113 0.74413 0.668034 3.16895 15.6445)" fill="white" />
//         <rect width="16.448" height="2.10161" transform="matrix(0.668053 -0.744113 0.74413 0.668034 5.91797 18.1055)" fill="white" />
//         <rect width="16.448" height="2.10161" transform="matrix(0.668053 -0.744113 0.74413 0.668034 8.66016 20.5742)" fill="white" />
//       </svg>
//     </div>
//   );
// }

// /* ----- Progress Indicators ----- */
// function VerticalDots({ activeIndex, cards }: { activeIndex: number; cards: Card[] }) {
//   return (
//     <div className="flex items-center justify-center">
//       <div className="flex flex-col items-center justify-around w-6 h-40 rounded-full border-2 border-[#FED543] p-7 gap-2">
//         {cards.map((_, index) => (
//           <motion.div
//             key={index}
//             animate={{
//               width: activeIndex === index ? 16 : 8,
//               height: activeIndex === index ? 16 : 8,
//               scale: activeIndex === index ? 1.25 : 1,
//             }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             className={`rounded-full transition-colors duration-300 ${
//               activeIndex === index ? "bg-blue-900" : "border border-gray-300 bg-white"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function HorizontalDots({ activeIndex, cards }: { activeIndex: number; cards: Card[] }) {
//   return (
//     <div className="flex items-center justify-center">
//       <div className="flex flex-row items-center justify-around h-10 w-40 rounded-full border-2 border-yellow-400 px-7 gap-2">
//         {cards.map((_, index) => (
//           <motion.div
//             key={index}
//             animate={{
//               width: activeIndex === index ? 16 : 4,
//               height: activeIndex === index ? 16 : 4,
//               scale: activeIndex === index ? 1.25 : 1,
//             }}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             className={`rounded-full transition-colors duration-300 ${
//               activeIndex === index ? "bg-[#293464]" : "border border-gray-300 bg-white"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Card = {
  title: string;
  image: string;
  gradient: string;
};

export default function CardStackContainer() {
  const initialCards: Card[] = [
    { title: "A breathtaking\nmusical production", image: "/impactCard/card/f1.jpg", gradient: "bg-[#FED543]" },
    { title: "An interactive exhibit\nexploring the world of values", image: "/impactCard/card/f2.jpg", gradient: "bg-[#FED543]" },
    { title: "A celebration of\n21 years of a global movement", image: "/impactCard/card/f3.jpg", gradient: "bg-[#FED543]" },
    { title: "The unveiling of\nthe next chapter together", image: "/impactCard/card/f4.jpg", gradient: "bg-[#FED543]" },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [cards] = useState<Card[]>(initialCards);
  const [visibleCardCount, setVisibleCardCount] = useState(1);
  const [isInView, setIsInView] = useState(false);
  
  const isTransitioningRef = useRef(false);
  const lastScrollTimeRef = useRef(0);
  const accumulatedDeltaRef = useRef(0);

  const config = {
    offset: 32,
    scaleStep: 0.05,
    rotationAngle: 5,
    scrollThreshold: 100,
    transitionDelay: 600,
  };

  // Navigation functions
  const nextCard = () => {
    if (visibleCardCount >= cards.length || isTransitioningRef.current) return;
    
    isTransitioningRef.current = true;
    setVisibleCardCount((prev) => prev + 1);
    accumulatedDeltaRef.current = 0;
    
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, config.transitionDelay);
  };

  const prevCard = () => {
    if (visibleCardCount <= 1 || isTransitioningRef.current) return;
    
    isTransitioningRef.current = true;
    setVisibleCardCount((prev) => prev - 1);
    accumulatedDeltaRef.current = 0;
    
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, config.transitionDelay);
  };

  // Monitor section visibility
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          
          if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
            setVisibleCardCount(1);
            accumulatedDeltaRef.current = 0;
            isTransitioningRef.current = false;
          }
        });
      },
      { threshold: 0.7 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Throttled wheel handler
  useEffect(() => {
    if (!isInView) return;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if (visibleCardCount === 1 && scrollingUp) {
        accumulatedDeltaRef.current = 0;
        return;
      }

      if (visibleCardCount === cards.length && scrollingDown) {
        accumulatedDeltaRef.current = 0;
        return;
      }

      e.preventDefault();

      if (isTransitioningRef.current) {
        return;
      }

      if (now - lastScrollTimeRef.current < 50) {
        return;
      }

      lastScrollTimeRef.current = now;
      accumulatedDeltaRef.current += e.deltaY;

      if (Math.abs(accumulatedDeltaRef.current) >= config.scrollThreshold) {
        isTransitioningRef.current = true;

        if (accumulatedDeltaRef.current > 0 && visibleCardCount < cards.length) {
          setVisibleCardCount((prev) => prev + 1);
        } else if (accumulatedDeltaRef.current < 0 && visibleCardCount > 1) {
          setVisibleCardCount((prev) => prev - 1);
        }

        accumulatedDeltaRef.current = 0;

        setTimeout(() => {
          isTransitioningRef.current = false;
        }, config.transitionDelay);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isInView, visibleCardCount, cards.length, config.scrollThreshold, config.transitionDelay]);

  // Touch handlers for mobile
  const touchStartYRef = useRef(0);
  const touchStartTimeRef = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
    touchStartTimeRef.current = Date.now();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isInView || isTransitioningRef.current) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartYRef.current - touchEndY;
    const touchDuration = Date.now() - touchStartTimeRef.current;

    if (touchDuration > 500) return;

    if (diff > 50 && visibleCardCount < cards.length) {
      isTransitioningRef.current = true;
      setVisibleCardCount((prev) => prev + 1);
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, config.transitionDelay);
    } else if (diff < -50 && visibleCardCount > 1) {
      isTransitioningRef.current = true;
      setVisibleCardCount((prev) => prev - 1);
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, config.transitionDelay);
    }
  };

  const displayCards = cards.slice(0, visibleCardCount);

  return (
    <div 
      ref={sectionRef}
      className="w-full min-h-[80%] flex justify-center items-center relative py-5"
    >
      <div
        className="relative w-[90%] m:w-[70%] h-[300px] xl:h-[550px] flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full">
          <AnimatePresence mode="sync">
            {displayCards.map((card, index) => {
              const stackIndex = visibleCardCount - 1 - index;
              const yOffset = -stackIndex * config.offset;
              const scale = 1 - stackIndex * config.scaleStep;
              const rotation = stackIndex % 2 === 0 
                ? -config.rotationAngle 
                : config.rotationAngle;
              const zIndex = 1000 - stackIndex;

              return (
                <motion.div
                  key={`card-${index}`}
                  initial={{ 
                    y: -150, 
                    scale: 0.85, 
                    rotateZ: rotation * 2,
                    opacity: 0 
                  }}
                  animate={{ 
                    y: yOffset, 
                    scale, 
                    rotateZ: rotation,
                    opacity: 1 
                  }}
                  exit={{ 
                    y: 150, 
                    scale: 0.85, 
                    rotateZ: -rotation * 2,
                    opacity: 0 
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                    mass: 0.9,
                  }}
                  style={{
                    zIndex,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    translateX: '-50%',
                    translateY: '-50%',
                  }}
                  className="h-[150px] max-h-[150px] md:max-h-[320px] sm:h-[220px] md:h-[260px] w-full sm:w-[90%] xl:max-w-[60%]"
                >
                  <CardContent card={card} isTop={stackIndex === 0} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop vertical progress dots */}
      <div className="hidden lg:flex absolute left-0 -translate-x-6 top-1/2 transform -translate-y-1/2">
        <VerticalDots activeIndex={visibleCardCount - 1} cards={cards} />
      </div>

      {/* Desktop Navigation Buttons - Right side */}
      <div className="hidden lg:flex absolute right-0 translate-x-6 top-1/2 transform -translate-y-1/2 flex-col gap-3 z-[1100]">
        {/* Previous Button (Up Triangle) */}
        <motion.button
          onClick={prevCard}
          disabled={visibleCardCount === 1}
          aria-label="Previous card"
          whileHover={{ scale: visibleCardCount === 1 ? 1 : 1.1 }}
          whileTap={{ scale: visibleCardCount === 1 ? 1 : 0.95 }}
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
            visibleCardCount === 1
              ? 'bg-gray-200 cursor-not-allowed opacity-50'
              : 'bg-gray-200 hover:bg-gray-300 cursor-pointer'
          }`}
        >
          {/* Up Triangle using CSS borders */}
          <div 
            className={`w-0 h-0 border-l-[5px] md:border-l-[6px] border-l-transparent border-r-[5px] md:border-r-[6px] border-r-transparent border-b-[8px] md:border-b-[10px] ${
              visibleCardCount === 1 ? 'border-b-gray-400' : 'border-b-gray-600'
            }`}
          />
        </motion.button>

        {/* Next Button (Down Triangle) */}
        <motion.button
          onClick={nextCard}
          disabled={visibleCardCount === cards.length}
          aria-label="Next card"
          whileHover={{ scale: visibleCardCount === cards.length ? 1 : 1.1 }}
          whileTap={{ scale: visibleCardCount === cards.length ? 1 : 0.95 }}
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
            visibleCardCount === cards.length
              ? 'bg-gray-200 cursor-not-allowed opacity-50'
              : 'bg-[#293464] hover:bg-[#1f2749] cursor-pointer'
          }`}
        >
          {/* Down Triangle using CSS borders */}
          <div className="w-0 h-0 border-l-[5px] md:border-l-[6px] border-l-transparent border-r-[5px] md:border-r-[6px] border-r-transparent border-t-[8px] md:border-t-[10px] border-t-white" />
        </motion.button>
      </div>

      {/* Mobile horizontal progress dots and buttons */}
      <div className="lg:hidden absolute bottom-0 translate-y-10 w-full flex justify-between items-center px-4">
      

        {/* Progress Dots */}
        <HorizontalDots activeIndex={visibleCardCount - 1} cards={cards} />
        <div className="flex gap-4">
          {/* Mobile Left Button */}
        <motion.button
          onClick={prevCard}
          disabled={visibleCardCount === 1}
          aria-label="Previous card"
          whileTap={{ scale: visibleCardCount === 1 ? 1 : 0.9 }}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
            visibleCardCount === 1
              ? 'bg-gray-200 cursor-not-allowed opacity-50'
              : 'bg-gray-200 active:bg-gray-300 cursor-pointer'
          }`}
        >
          {/* Left Triangle */}
          <div 
            className={`w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[8px] ${
              visibleCardCount === 1 ? 'border-r-gray-400' : 'border-r-gray-600'
            }`}
          />
        </motion.button>

        {/* Mobile Right Button */}
        <motion.button
          onClick={nextCard}
          disabled={visibleCardCount === cards.length}
          aria-label="Next card"
          whileTap={{ scale: visibleCardCount === cards.length ? 1 : 0.9 }}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${
            visibleCardCount === cards.length
              ? 'bg-gray-200 cursor-not-allowed opacity-50'
              : 'bg-[#293464] active:bg-[#1f2749] cursor-pointer'
          }`}
        >
          {/* Right Triangle */}
          {/* <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white" /> */}
        <div 
            className={`w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] ${
              visibleCardCount === 4 ? 'border-l-gray-600' : 'border-l-white'
            }`}
          />
        </motion.button>
        </div>
      </div>
    </div>
  );
}

/* ----- Card Content Component ----- */
function CardContent({ card, isTop }: { card: Card; isTop: boolean }) {
  return (
    <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl h-full w-full overflow-hidden">
      <div 
        className=" h-[80px] md:h-[100px] lg:h-[120px] w-[200%] absolute text-[28px] z-10 -bottom-10" 
        style={{ background: "linear-gradient(#293464B2), url('/countdownbg.jpg')" }}
      />

      <div
        className={`bg-gradient-to-br ${card.gradient} w-full rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative h-full flex flex-col justify-between transition-all duration-300`}
      >
        {/* Card Image */}
        <motion.div
          animate={isTop ? { scale: [1, 1.05, 1] } : { scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-10 right-4 sm:top-16 sm:right-8 md:top-16 md:right-12 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[180px] xl:h-[180px] rounded-full overflow-hidden shadow-xl z-20"
        >
          <img src={card.image} alt="Card" className="w-full h-full object-cover" />
        </motion.div>

        {/* Card Title */}
        <h2 className="text-base sm:text-[16px] mt-4 md:mt-10 lg:mt-8 md:text-[24px] lg:text-[26px] 2xl:text-[28px] leading-tight font-normal whitespace-pre-line max-w-[60%] sm:max-w-[55%] text-center z-30">
          {card.title}
        </h2>
      </div>

      {/* SVG 1 - Top Left */}
      <svg 
        width="86" 
        height="86" 
        viewBox="0 0 49 52" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute -top-1.5 z-20 xl:-left-5 w-10 h-10 sm:w-12 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-24 xl:h-24"
      >
        <path d="M48.556 12.974C37.3429 8.75868 31.6164 7.48971 26.4035 15.0953C26.2936 5.8565 22.1961 2.92254 9.68219 0.578198C4.89052 12.5569 5.38008 17.3957 11.7765 22.7619C2.60941 22.8997 -0.288147 26.9704 -2.66376 39.2957C9.96927 44.7112 14.2851 43.5377 19.3019 37.3665C19.6368 47.7449 25.2599 49.4167 36.21 51.6915C40.7451 40.0233 41.1224 34.6491 33.3224 29.6323C43.7779 29.415 46.1291 24.3944 48.556 12.974Z" fill="white" />
      </svg>

      {/* SVG 2 - Left Bottom */}
      <svg 
        width="63" 
        height="63" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute left-4 sm:left-8 md:left-12 lg:left-15 bottom-8 sm:bottom-10 md:bottom-12 z-20 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-[63px] xl:h-[63px]"
      >
        <path d="M20.1543 0.914526L16.6034 7.24892L13.9617 0.857507L12.1676 1.21951L12.0253 8.17266L6.66724 3.63582L5.35973 4.81419L8.83105 11.1689L1.81718 10.2324L1.15514 11.7378L6.81959 15.5595L0.862303 18.264L1.25346 19.8835L8.39935 19.8788L3.99211 25.7981L5.21142 27.0546L11.2881 23.3461L10.5397 30.4869L12.2272 31.1916L15.4195 24.9949L18.2468 31.3488L20.041 30.9868L19.9977 24.0711L25.7142 28.4703L26.8727 27.1914L23.2903 20.9244L30.5151 21.949L30.9662 20.3555L24.7323 16.5833L31.3209 13.8168L30.9916 12.1848L23.8331 12.1267L28.1292 6.29517L26.9845 5.089L20.8333 8.74715L21.6927 1.51867L20.1543 0.914526Z" stroke="white" strokeWidth="0.370485" />
      </svg>

      {/* SVG 3 - Right Top */}
      <svg 
        width="27" 
        height="26" 
        viewBox="0 0 27 26" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute right-4 sm:right-8 md:right-12 lg:right-15 top-8 sm:top-6 md:top-8 xl:top-10 z-20 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-[46px] xl:h-[46px]"
      >
        <path d="M17.1473 0.862021L13.8989 3.86152L11.8564 0.864083L10.3205 1.17398L9.29425 5.42989L5.60171 3.19159L4.47524 4.16472L6.38205 8.73447L1.40568 8.61981L0.828163 9.85509L4.47419 12.5822L0.526668 15.1901L0.848176 16.5103L6.06924 17.1616L3.14179 21.3217L4.17377 22.3388L8.74732 20.457L8.69967 25.1015L10.136 25.6641L13.1396 21.7017L15.2783 25.7452L16.8142 25.4353L17.328 20.8566L21.6816 23.3345L22.6815 22.2804L20.9986 17.9851L25.835 17.9682L26.233 16.6625L22.4043 13.8657L26.5874 11.3169L26.3189 9.98594L21.4541 9.1562L23.9193 5.19595L22.9506 4.21938L18.4164 5.18752L18.457 1.34359L17.1473 0.862021Z" fill="#25335C" />
      </svg>

      {/* SVG 4 - Top Center-Right */}
      <svg 
        width="46" 
        height="46" 
        viewBox="0 0 22 22" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute top-8 sm:top-10 md:top-12 right-[30%] sm:right-[33%] z-20 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 xl:w-[46px] xl:h-[46px]"
      >
        <rect width="16.448" height="2.10161" transform="matrix(0.668053 -0.744113 0.74413 0.668034 0.420898 13.1836)" fill="white" />
        <rect width="16.448" height="2.10161" transform="matrix(0.668053 -0.744113 0.74413 0.668034 3.16895 15.6445)" fill="white" />
        <rect width="16.448" height="2.10161" transform="matrix(0.668053 -0.744113 0.74413 0.668034 5.91797 18.1055)" fill="white" />
        <rect width="16.448" height="2.10161" transform="matrix(0.668053 -0.744113 0.74413 0.668034 8.66016 20.5742)" fill="white" />
      </svg>
    </div>
  );
}

/* ----- Progress Indicators ----- */
function VerticalDots({ activeIndex, cards }: { activeIndex: number; cards: Card[] }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-around w-6 h-40 rounded-full border-2 border-[#FED543] p-7 gap-2">
        {cards.map((_, index) => (
          <motion.div
            key={index}
            animate={{
              width: activeIndex === index ? 16 : 8,
              height: activeIndex === index ? 16 : 8,
              scale: activeIndex === index ? 1.25 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`rounded-full transition-colors duration-300 ${
              activeIndex === index ? "bg-blue-900" : "border border-gray-300 bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function HorizontalDots({ activeIndex, cards }: { activeIndex: number; cards: Card[] }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row items-center justify-around h-10 w-40 rounded-full border-2 border-yellow-400 px-7 gap-2">
        {cards.map((_, index) => (
          <motion.div
            key={index}
            animate={{
              width: activeIndex === index ? 16 : 4,
              height: activeIndex === index ? 16 : 4,
              scale: activeIndex === index ? 1.25 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`rounded-full transition-colors duration-300 ${
              activeIndex === index ? "bg-[#293464]" : "border border-gray-300 bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
