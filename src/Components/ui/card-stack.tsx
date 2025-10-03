"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
type Card = {
  title: string;
  image: string;
  gradient: string;
};
export default function CardStackWheel() {
  // Dummy card data
  const initialCards = [
    {
      title: "A breathtaking\nmusical production",
      image:
        "/impactcard/f.png",
      gradient: "bg-[#FED543]",
    },
    {
      title: "An inspiring\ntheatre experience",
      image:
        "/impactcard/f.png",
      gradient: "bg-[#FED543]",
    },
    {
      title: "A memorable\ncultural journey",
      image:
        "/impactcard/f.png",
      gradient: "bg-[#FED543]",
    },
    {
      title: "A powerful\nartistic vision",
      image:
        "/impactcard/f.png",
      gradient: "bg-[#FED543]",
    },
    {
      title: "An unforgettable\nperformance",
      image:
        "/impactcard/f.png",
      gradient: "bg-[#FED543]",
    },
    {
      title: "A transformative\nexperience",
      image:
        "/impactcard/f.png",
      gradient: "bg-[#FED543]",
    },
  ];;

  const stackRef = useRef<HTMLDivElement>(null);
  const [cards, setCards] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // 👈 new state for visibility
  const direction = useRef<"up" | "down">("down");
  const [visibleCards, setVisibleCards] = useState<Card[]>([])
  const config = {
    offset: 32,
    scaleStep: 0.05,
    rotationAngle: 8,
    maxVisibleCards: 4,
    touchSensitivity: 50,
  };

  // useEffect(() => {
  //   if(currentIndex>=0 && currentIndex<cards.length){

  //     setVisibleCards((prev)=>{
  //       return([...prev,cards[currentIndex]])
  //     })
  //   }
  // }, [currentIndex])
  const nextCard = () => {
    if (currentIndex === cards.length - 1) return
    if (animating) return;
    setAnimating(true);

    setVisibleCards((prevCards) => {
      const newCards = [...prevCards];
      newCards.unshift(cards[currentIndex + 1]);
      return newCards;
    });


    setCurrentIndex((prev) => (prev + 1));
    setTimeout(() => setAnimating(false), 500);
  };

  const prevCard = () => {
    if (currentIndex <= 0) return;
    if (animating) return;
    setAnimating(true);


    setVisibleCards((prevCards) => {
      const newCards = [...prevCards];
      newCards.shift();
      return newCards;
    });

    setCurrentIndex((prev) => (prev - 1));
    setTimeout(() => setAnimating(false), 500);
  };


  // ✅ Intersection Observer
  useEffect(() => {
    if (!stackRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.5 } // trigger when 20% visible
    );
    observer.observe(stackRef.current);

    return () => {
      if (stackRef.current) {

        observer.unobserve(stackRef.current);


      }
    };
  }, []);

  // useEffect(() => {
  //   if (!isVisible) return;

  //   const handleWheel = (e: WheelEvent) => {
  //     if (animating) return;

  //     if (!isVisible) return
  //     e.preventDefault()
  //     if (currentIndex >= 0 && currentIndex < cards.length) {
  //       if ((visibleCards.length === cards.length) && (e.deltaY < -20)) {
  //         direction.current="up"
  //         prevCard()
  //         return
  //       }
  //       if ((visibleCards.length >= 0) && (e.deltaY > 20)) {

  //         direction.current="down"
  //         nextCard()
  //         return
  //       }
  //     }
  //   }

  //   window.addEventListener("wheel", handleWheel, { passive: false});

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //     // restore scroll on unmount
  //   };
  // }, [animating, currentIndex, isVisible]);



  // Keyboard navigation (only active if visible)
  // useEffect(() => {
  //   if (!isVisible) return; // 👈 stop if not visible
  //   const handleKey = (e: WheelEvent) => {
  //     if ((currentIndex === cards.length - 1) && (e.deltaY < -20)) {
  //       setCurrentIndex(0);
  //       setAnimating(true);
  //       return;
  //     }
  //   };
  //   window.addEventListener("wheel", handleKey);
  //   return () => window.removeEventListener("wheel", handleKey);
  // }, [currentIndex, isVisible]);

  // Touch swipe
  const touchStartYRef = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isVisible) return; // 👈 stop if not visible
    const diff = touchStartYRef.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) > config.touchSensitivity) {
      diff > 0 ? nextCard() : prevCard();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-around items-center gap-x-10 w-full relative h-full mb-10">
      <div className="hidden lg:block">
        <VerticalDots activeIndex={currentIndex} cards={cards} />
      </div>

      <div
        className="flex flex-col lg:flex-row justify-between items-center gap-x-32 w-full relative h-full"
        ref={stackRef} // 👈 attach observer
      >
        {/* Progress Dots */}
        {/* <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-transform duration-300 cursor-pointer ${i === currentIndex ? "bg-white scale-125" : "bg-white/30"
              }`}
            onClick={() => {
              if (i > currentIndex) {
                Array.from({ length: i - currentIndex }).forEach(() => nextCard());
              } else if (i < currentIndex) {
                Array.from({ length: currentIndex - i }).forEach(() => prevCard());
              }
            }}
          />
        ))}
      </div> */}

        {/* Card Stack */}
        <div className="relative xl:h-full lg:h-full h-60 sm:h-60 md:h-60 w-full flex items-center justify-center" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <AnimatePresence>
            {visibleCards.map((card, i) => {
              if (i >= config.maxVisibleCards) return null;

              const yOffset = i * config.offset;
              const scale = 1 - i * config.scaleStep;
              const rotation = i % 2 === 0 ? -config.rotationAngle : config.rotationAngle;
              const zIndex = cards.length - i;

              if (i === 0) {
                // Only animate the top card
                return (
                  <motion.div
                    key={card.title}
                    initial={{ y: direction.current === "down" ? -500 : 100, opacity: 0, rotateZ: rotation }}
                    animate={{ y: yOffset, scale, rotateZ: 0, opacity: 1 }}
                    exit={{ opacity: 0, y: direction.current === "down" ? 100 : -500 }}
                    transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                    className={`absolute sm:border-4 h-48 sm:h-56 md:h-60 w-full sm:w-[90%] rounded-2xl sm:rounded-3xl shadow-xl flex flex-col justify-between border-amber-300`}
                    style={{ zIndex, background: card.gradient }}
                  >
                    <CardContent card={card} />
                  </motion.div>
                );
              } else {
                // Other cards are static
                return (
                  <div
                    key={card.title + i}
                    className={`absolute sm:border-4 h-48 sm:h-56 md:h-60 w-full sm:w-[90%] rounded-2xl sm:rounded-3xl shadow-xl flex flex-col justify-between border-[#28365F]`}
                    style={{ zIndex, transform: `translateY(${yOffset}px) scale(${scale}) rotateZ(${rotation}deg)`, background: card.gradient }}
                  >
                    <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
                  </div>
                );
              }
            })}
          </AnimatePresence>

        </div>

        {/* Scroll Indicator
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
        <span className="text-xs">Scroll to explore</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div> */}
      </div>
      <div className="lg:hidden mt-6">
        <HorizontalDots activeIndex={currentIndex} cards={cards} />
      </div>
      {/* Desktop buttons - right side */}
      <div className="hidden lg:flex  flex-col  gap-3 z-20">
        <button
          onClick={prevCard}
          className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all shadow-lg cursor-pointer hover:scale-110"
        >
          <div className="w-0 h-0 border-l-[5px] md:border-l-[6px] border-l-transparent border-r-[5px] md:border-r-[6px] border-r-transparent border-b-[8px] md:border-b-[10px] border-b-gray-600"></div>
        </button>
        <button
          onClick={nextCard}
          className="w-10 h-10 md:w-12 md:h-12 bg-blue-900 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all shadow-lg cursor-pointer hover:scale-110"
        >
          <div className="w-0 h-0 border-l-[5px] md:border-l-[6px] border-l-transparent border-r-[5px] md:border-r-[6px] border-r-transparent border-t-[8px] md:border-t-[10px] border-t-white"></div>
        </button>
      </div>

      {/* Mobile buttons - bottom */}
      <div className="flex lg:hidden justify-center gap-4 mt-4 z-20">
        <button
          onClick={prevCard}
          className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all shadow-lg cursor-pointer active:scale-95"
        >
          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[8px] border-r-gray-600"></div>
        </button>
        <button
          onClick={nextCard}
          className="w-12 h-12 bg-blue-900 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all shadow-lg cursor-pointer active:scale-95"
        >
          {/* <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent "></div> */}
        </button>
      </div>
    </div>

  );
}
function CardContent({ card }: { card: any }) {
  return (
    <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl h-full w-full overflow-hidden">

      <div className="h-[120px] absolute text-[28px] z-10 w-full -bottom-10 rounded-t-3xl" style={{ background: "linear-gradient(#293464B2), url('/countdownbg.jpg')" }}></div>

      <div
        className={`bg-gradient-to-br ${card.gradient} w-full rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative h-full flex flex-col justify-between`}
      >

        {/* Card Image */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 md:top-12 md:right-12 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-xl z-20">
          <img src={card.image} alt="Card" className="w-full h-full object-cover" />
        </div>

        {/* Card Title */}
        <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-800 leading-tight whitespace-pre-line max-w-[60%] sm:max-w-[55%] text-center z-20">
          {card.title}
        </h2>

      </div>

      {/* SVG 1 - Top Left */}
      <svg width="86" height="86" viewBox="0 0 49 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-1.5 z-20 -left-5 w-10 h-10 sm:w-12 sm:h-10 md:w-12 md:h-12 xl:w-24 xl:h-24">
        <path d="M48.556 12.974C37.3429 8.75868 31.6164 7.48971 26.4035 15.0953C26.2936 5.8565 22.1961 2.92254 9.68219 0.578198C4.89052 12.5569 5.38008 17.3957 11.7765 22.7619C2.60941 22.8997 -0.288147 26.9704 -2.66376 39.2957C9.96927 44.7112 14.2851 43.5377 19.3019 37.3665C19.6368 47.7449 25.2599 49.4167 36.21 51.6915C40.7451 40.0233 41.1224 34.6491 33.3224 29.6323C43.7779 29.415 46.1291 24.3944 48.556 12.974Z" fill="white" />
      </svg>

      {/* SVG 2 - Left Bottom */}
      <svg width="63" height="63" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-4 sm:left-8 md:left-12 lg:left-15 bottom-8 sm:bottom-10 md:bottom-12 z-20 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-[63px] xl:h-[63px]">
        <path d="M20.1543 0.914526L16.6034 7.24892L13.9617 0.857507L12.1676 1.21951L12.0253 8.17266L6.66724 3.63582L5.35973 4.81419L8.83105 11.1689L1.81718 10.2324L1.15514 11.7378L6.81959 15.5595L0.862303 18.264L1.25346 19.8835L8.39935 19.8788L3.99211 25.7981L5.21142 27.0546L11.2881 23.3461L10.5397 30.4869L12.2272 31.1916L15.4195 24.9949L18.2468 31.3488L20.041 30.9868L19.9977 24.0711L25.7142 28.4703L26.8727 27.1914L23.2903 20.9244L30.5151 21.949L30.9662 20.3555L24.7323 16.5833L31.3209 13.8168L30.9916 12.1848L23.8331 12.1267L28.1292 6.29517L26.9845 5.089L20.8333 8.74715L21.6927 1.51867L20.1543 0.914526Z" stroke="white" strokeWidth="0.370485" />
      </svg>

      {/* SVG 3 - Right Top */}
      <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-4 sm:right-8 md:right-12 lg:right-15 top-8 sm:top-6 md:top-8 xl:top-10 z-20 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-[46px] xl:h-[46px]">
        <path d="M17.1473 0.862021L13.8989 3.86152L11.8564 0.864083L10.3205 1.17398L9.29425 5.42989L5.60171 3.19159L4.47524 4.16472L6.38205 8.73447L1.40568 8.61981L0.828163 9.85509L4.47419 12.5822L0.526668 15.1901L0.848176 16.5103L6.06924 17.1616L3.14179 21.3217L4.17377 22.3388L8.74732 20.457L8.69967 25.1015L10.136 25.6641L13.1396 21.7017L15.2783 25.7452L16.8142 25.4353L17.328 20.8566L21.6816 23.3345L22.6815 22.2804L20.9986 17.9851L25.835 17.9682L26.233 16.6625L22.4043 13.8657L26.5874 11.3169L26.3189 9.98594L21.4541 9.1562L23.9193 5.19595L22.9506 4.21938L18.4164 5.18752L18.457 1.34359L17.1473 0.862021Z" fill="#25335C" />
      </svg>

      {/* SVG 4 - Top Center-Right */}
      <svg width="46" height="46" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-8 sm:top-10 md:top-12 right-[30%] sm:right-[33%] z-20 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 xl:w-[46px] xl:h-[46px]">
        <rect width="16.448" height="2.10161" transform="matrix(0.668053 -0.744113 0.74413 0.668034 0.420898 13.1836)" fill="white" />
        <rect width="16.448" height="2.10161" transform="matrix(0.668053 -0.744113 0.74413 0.668034 3.16895 15.6445)" fill="white" />
        <rect width="16.448" height="2.10161" transform="matrix(0.668053 -0.744113 0.74413 0.668034 5.91797 18.1055)" fill="white" />
        <rect width="16.448" height="2.10161" transform="matrix(0.668053 -0.744113 0.74413 0.668034 8.66016 20.5742)" fill="white" />
      </svg>
    </div>
  );
}

function VerticalDots({ activeIndex = 0, cards }: { activeIndex?: number, cards: Card[] }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-around w-6 h-40 rounded-full border-2 border-yellow-400 p-7">
        {cards.map((i, index) => (
          <div
            key={index}
            className={`rounded-full transition-all duration-300 ${activeIndex === index
              ? "w-4 h-4 bg-blue-900 scale-125"
              : "w-2 h-2 border border-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

function HorizontalDots({ activeIndex = 0, cards }: { activeIndex?: number, cards: Card[] }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row items-center justify-around h-6 w-40 rounded-full border-2 border-yellow-400 px-7">
        {cards.map((i, index) => (
          <div
            key={index}
            className={`rounded-full transition-all duration-300 ${activeIndex === index
              ? "w-4 h-4 bg-blue-900 scale-125"
              : "w-2 h-2 border border-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

