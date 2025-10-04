import { useEffect, useRef, useState, useCallback } from "react"

interface DemoItem {
  title: string
  year: string
  description: string
  image: string
}

interface DemoCarouselProps {
  items: DemoItem[]
  isLoading?: boolean
  itemWidth?: number
  gap?: number
  onSkip?: () => void
}

function DemoCarousel({
  items,
  isLoading = false,
  itemWidth = 600,
  gap = 140,
  onSkip,
}: DemoCarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [isInView, setIsInView] = useState(false)

  const totalLength = items.length

  // Move to specific card
  const updateIndex = useCallback((newIndex: number) => {
    if (animating) return
    
    const nextIndex = Math.max(0, Math.min(newIndex, totalLength - 1))
    
    if (nextIndex === currentIndex) return
    
    setAnimating(true)
    setCurrentIndex(nextIndex)

    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
      containerRef.current.style.transform = `translateX(-${nextIndex * (itemWidth + gap)}px)`
    }

    setTimeout(() => setAnimating(false), 800)
  }, [animating, currentIndex, totalLength, itemWidth, gap])

  // Manage body scroll based on carousel position
  const manageBodyScroll = useCallback(() => {
    // Lock scroll only when:
    // 1. Carousel is in view
    // 2. Not at first card (allow scroll in from top)
    // 3. Not at last card (allow scroll out to bottom)
    if (isInView && currentIndex > 0 && currentIndex < totalLength - 1) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isInView, currentIndex, totalLength])

  // Intersection Observer - detect when carousel enters viewport
  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.5 } // Trigger when 50% visible
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  // Wheel scroll handler
  useEffect(() => {
    if (!sectionRef.current) return

    const handleWheel = (e: WheelEvent) => {
      if (!isInView || animating) return

      const scrollingDown = e.deltaY > 20
      const scrollingUp = e.deltaY < -20

      if (scrollingDown && currentIndex < totalLength - 1) {
        // Can move forward in carousel
        e.preventDefault()
        updateIndex(currentIndex + 1)
      } else if (scrollingUp && currentIndex > 0) {
        // Can move backward in carousel
        e.preventDefault()
        updateIndex(currentIndex - 1)
      } else if (currentIndex > 0 && currentIndex < totalLength - 1) {
        // In middle of carousel - block all scroll
        e.preventDefault()
      }
      // At boundaries: allow natural page scroll
    }

    const section = sectionRef.current
    section.addEventListener("wheel", handleWheel, { passive: false })

    return () => section.removeEventListener("wheel", handleWheel)
  }, [isInView, currentIndex, animating, totalLength, updateIndex])

  // Touch handler for mobile swipe
  useEffect(() => {
    if (!sectionRef.current) return

    let touchStartX = 0
    let touchStartY = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isInView || animating) return

      const touchEndX = e.changedTouches[0].clientX
      const touchEndY = e.changedTouches[0].clientY
      
      const deltaX = touchStartX - touchEndX
      const deltaY = touchStartY - touchEndY

      // Only handle horizontal swipes (when horizontal movement > vertical)
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentIndex < totalLength - 1) {
          // Swipe left - move forward
          e.preventDefault()
          updateIndex(currentIndex + 1)
        } else if (deltaX < 0 && currentIndex > 0) {
          // Swipe right - move backward
          e.preventDefault()
          updateIndex(currentIndex - 1)
        }
      }
    }

    const section = sectionRef.current
    section.addEventListener("touchstart", handleTouchStart, { passive: false })
    section.addEventListener("touchend", handleTouchEnd, { passive: false })

    return () => {
      section.removeEventListener("touchstart", handleTouchStart)
      section.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isInView, currentIndex, animating, totalLength, updateIndex])

  // Update body scroll lock when position changes
  useEffect(() => {
    manageBodyScroll()
    
    return () => {
      document.body.style.overflow = ""
    }
  }, [manageBodyScroll])

  // Keyboard navigation
  useEffect(() => {
    if (!isInView) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (animating) return
      
      if (e.key === "ArrowRight" && currentIndex < totalLength - 1) {
        e.preventDefault()
        updateIndex(currentIndex + 1)
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        e.preventDefault()
        updateIndex(currentIndex - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isInView, currentIndex, animating, totalLength, updateIndex])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Top Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">Welcome</h1>
          <p className="text-2xl opacity-90">Scroll down to explore our journey</p>
          <div className="mt-8 animate-bounce">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Horizontal Carousel Section */}
      <section 
        ref={sectionRef}
        className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-slate-100"
      >
        {/* Progress Bar */}
        <div className="absolute top-8 left-8 right-8 h-1 bg-slate-300 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-300 ease-out"
            style={{ width: `${(currentIndex / (totalLength - 1)) * 100}%` }}
          />
        </div>

        <div className="text-center mb-8 px-4">
          <h2 className="text-4xl font-bold text-slate-800 mb-2">Our Journey</h2>
          <p className="text-slate-600">Use scroll wheel, arrow keys, or swipe to navigate</p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-screen overflow-hidden px-8">
          <div
            ref={containerRef}
            className="flex"
            style={{ gap: `${gap}px` }}
          >
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[400px] rounded-2xl bg-slate-300 animate-pulse flex-shrink-0 shadow-xl"
                    style={{ width: `${itemWidth}px` }}
                  />
                ))
              : items.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex-shrink-0 rounded-2xl bg-white shadow-xl p-8 transition-all duration-300 ${
                      index === currentIndex 
                        ? "scale-100 opacity-100" 
                        : "scale-95 opacity-60"
                    }`}
                    style={{ width: `${itemWidth}px` }}
                  >
                    <div className="mb-6">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-4">
                        <h3 className="text-3xl font-bold text-white">{item.year}</h3>
                      </div>
                      <p className="text-2xl font-bold text-slate-800">{item.title}</p>
                    </div>
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="relative overflow-hidden rounded-xl group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="mt-8 flex gap-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => updateIndex(index)}
              disabled={animating}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-12 h-3 bg-blue-600"
                  : "w-3 h-3 bg-slate-400 hover:bg-slate-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="mt-4 text-slate-600 font-medium">
          {currentIndex + 1} / {totalLength}
        </div>

        {onSkip && (
          <button
            onClick={onSkip}
            className="mt-6 rounded-full border-2 border-blue-600 bg-white px-8 py-3 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl"
          >
            Skip Timeline
          </button>
        )}

        {/* Navigation Hints */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between text-slate-400 text-sm">
          <div className={`transition-opacity ${currentIndex === 0 ? "opacity-0" : "opacity-100"}`}>
            ← Previous
          </div>
          <div className={`transition-opacity ${currentIndex === totalLength - 1 ? "opacity-0" : "opacity-100"}`}>
            Next →
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-700">
        <div className="text-center text-white px-4">
          <h2 className="text-6xl font-bold mb-4 drop-shadow-lg">The Future Awaits</h2>
          <p className="text-2xl opacity-90">Continue your journey...</p>
        </div>
      </section>
    </div>
  )
}

const demoItems: DemoItem[] = [
  {
    title: "The Beginning",
    year: "2020",
    description: "Our journey starts with a bold vision and a passionate team determined to revolutionize the industry. Every great story has a beginning.",
    image: "https://picsum.photos/id/1011/600/400",
  },
  {
    title: "First Milestone",
    year: "2021",
    description: "We achieved our first major breakthrough, reaching 10,000 users and receiving overwhelming positive feedback from the community.",
    image: "https://picsum.photos/id/1012/600/400",
  },
  {
    title: "Global Expansion",
    year: "2022",
    description: "Expanding our reach across continents with offices in 15 countries. Our vision becomes a global reality.",
    image: "https://picsum.photos/id/1013/600/400",
  },
  {
    title: "Industry Leader",
    year: "2023",
    description: "Recognized as the industry leader with multiple prestigious awards and over 1 million active users worldwide.",
    image: "https://picsum.photos/id/1015/600/400",
  },
  {
    title: "Innovation Era",
    year: "2024",
    description: "Launching groundbreaking AI-powered features that set new standards for the entire industry. The future is now.",
    image: "https://picsum.photos/id/1018/600/400",
  },
]

export default function Demo() {
  return (
    <DemoCarousel
      items={demoItems}
      isLoading={false}
      itemWidth={600}
      gap={140}
      onSkip={() => alert("Timeline skipped! 🚀")}
    />
  )
}