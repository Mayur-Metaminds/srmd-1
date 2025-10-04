/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import gsap from "gsap"
import { Observer } from "gsap/Observer"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(Observer)
}

interface TimelineItem {
  title: string
  date: string
  description: string
  image: string
}

interface ImprovedCarouselProps {
  items: TimelineItem[]
  isLoading?: boolean
}

export default function ImprovedCarousel({
  items,
  isLoading = false,
}: ImprovedCarouselProps) {
  const [itemWidth, setItemWidth] = useState(600)
  const [gap, setGap] = useState(190)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [isInView, setIsInView] = useState(false)
  
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const observerRef = useRef<Observer | null>(null)
  const scrollableRef = useRef<HTMLDivElement | null>(null)
  const arrowRef = useRef<HTMLParagraphElement | null>(null)

  const totalLength = items.length

  // Handle responsive dimensions
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setItemWidth(600)
        setGap(190)
      } else if (width >= 768) {
        setItemWidth(600)
        setGap(140)
      } else {
        setItemWidth(500)
        setGap(100)
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Navigate to specific card with GSAP
  const goToCard = useCallback(
    (newIndex: number) => {
      if (animating || !scrollableRef.current || !arrowRef.current) return
      
      const nextIndex = Math.max(0, Math.min(newIndex, totalLength - 1))
      if (nextIndex === currentIndex) return

      setAnimating(true)

      // Animate container
      gsap.to(scrollableRef.current, {
        x: -nextIndex * (itemWidth + gap),
        duration: 0.9,
        ease: "power2.inOut",
        onComplete: () => setAnimating(false),
      })

      // Animate arrow
      gsap.to(arrowRef.current, {
        width: nextIndex === 0 ? 78 : nextIndex * (itemWidth / (totalLength - 1)),
        duration: 0.9,
        ease: "power2.inOut",
      })

      setCurrentIndex(nextIndex)
    },
    [animating, currentIndex, totalLength, itemWidth, gap]
  )

  // Intersection Observer
  useEffect(() => {
    if (!sectionRef.current) return

    const io = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry?.isIntersecting ?? false)
      },
      { threshold: 0.5 }
    )

    io.observe(sectionRef.current)
    return () => io.disconnect()
  }, [])

  // GSAP Observer for scroll hijacking
  useEffect(() => {
    if (!isInView || !containerRef.current) {
      observerRef.current?.kill()
      return
    }

    observerRef.current = Observer.create({
      target: containerRef.current,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      tolerance: 10,
      preventDefault: true,
      onUp: () => {
        if (animating) return
        if (currentIndex < totalLength - 1) {
          goToCard(currentIndex + 1)
        } else {
          // At last card, allow normal scroll
          observerRef.current?.kill()
          document.body.style.overflow = ""
        }
      },
      onDown: () => {
        if (animating) return
        if (currentIndex > 0) {
          goToCard(currentIndex - 1)
        } else {
          // At first card, allow normal scroll
          observerRef.current?.kill()
          document.body.style.overflow = ""
        }
      },
    })

    return () => {
      observerRef.current?.kill()
    }
  }, [isInView, currentIndex, animating, totalLength, goToCard])

  // Keyboard navigation
  useEffect(() => {
    if (!isInView) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (animating) return
      if (e.key === "ArrowRight" && currentIndex < totalLength - 1) {
        e.preventDefault()
        goToCard(currentIndex + 1)
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        e.preventDefault()
        goToCard(currentIndex - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isInView, currentIndex, animating, totalLength, goToCard])

  // Body scroll lock
  useEffect(() => {
    if (isInView && currentIndex > 0 && currentIndex < totalLength - 1) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isInView, currentIndex, totalLength])

  // Skip to next section
  const skipToNext = () => {
    document.body.style.overflow = ""
    observerRef.current?.kill()
    const nextSection = document.querySelector("#after-carousel")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-screen flex flex-col items-center gap-6 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen py-10"
    >
      {/* Title */}
      {isLoading ? (
        <div className="h-16 w-64 bg-slate-700 animate-pulse rounded-lg" />
      ) : (
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">
          Our <span className="text-blue-400">Journey</span>
        </h1>
      )}

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[500px] lg:h-[600px] overflow-hidden"
      >
        {isLoading ? (
          <div className="flex gap-[190px] px-[calc(50%-300px)]">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="w-[600px] flex-shrink-0 space-y-8">
                <div className="h-8 w-32 bg-slate-700 animate-pulse rounded" />
                <div className="h-16 w-48 bg-slate-700 animate-pulse rounded" />
                <div className="h-64 w-full bg-slate-700 animate-pulse rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <div
            ref={scrollableRef}
            className="flex px-[calc(50%-300px)]"
            style={{ gap: `${gap}px` }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative transition-opacity duration-700"
                style={{
                  width: `${itemWidth}px`,
                  opacity: currentIndex < index ? 0 : 1,
                }}
              >
                {/* Arrow Indicator - Only on first card */}
                {index === 0 && (
                  <div className="absolute top-[162px] left-[102px] flex items-center z-10">
                    <p
                      ref={arrowRef}
                      className="h-[6px] min-w-[78px] rounded-tl-[10px] rounded-bl-[10px] bg-slate-400/70"
                    />
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      className="drop-shadow-lg"
                    >
                      <path
                        d="M21 9.6L6.6 17.9138L6.6 1.28616L21 9.6Z"
                        fill="#3B82F6"
                      />
                      <rect
                        x="4.67969"
                        y="0.960938"
                        width="17.28"
                        height="3.84"
                        transform="rotate(90 4.67969 0.960938)"
                        fill="#3B82F6"
                      />
                    </svg>
                  </div>
                )}

                {/* Card Content */}
                <div className="flex flex-col gap-6">
                  {/* date and Description */}
                  <div className="flex justify-between gap-6">
                    <div className="w-[250px]">
                      <p className="text-lg text-blue-400 mb-2 font-medium">
                        {item.title}
                      </p>
                      <h2 className="text-5xl lg:text-6xl font-bold text-blue-500">
                        {item.date}
                      </h2>
                    </div>
                    <div className="w-[300px] text-slate-300 leading-relaxed">
                      {item.description}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="mt-12">
                    <img
                      src={item.image}
                      alt={""}
                      className="w-full h-[280px] object-cover rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-3 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToCard(index)}
            disabled={animating}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-12 h-3 bg-blue-500"
                : "w-3 h-3 bg-slate-500 hover:bg-slate-400"
            } ${animating ? "opacity-50 cursor-not-allowed" : ""}`}
            aria-label={`Go to ${items[index]?.date}`}
          />
        ))}
      </div>

      {/* Skip Button */}
      {isInView && (
        <button
          onClick={skipToNext}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 font-medium"
        >
          Skip
        </button>
      )}

      {/* Counter */}
      <div className="text-slate-400 font-medium">
        {currentIndex + 1} / {totalLength}
      </div>
    </section>
  )
}