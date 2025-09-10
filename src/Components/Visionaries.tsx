import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images?: string[];
  className?: string;
}

export function ImageStackk({
  images = ["/mail.png", "/mappin.png", "/phone.png"],
  className = ""
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(Math.floor(images.length / 2));
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = (): void => {
    console.log("ds")
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const handlePrev = (): void => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const handleSlideClick = (index: number): void => {
    if (isTransitioning || index === currentIndex) return;

    setIsTransitioning(true);
    setCurrentIndex(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  // Responsive dimensions based on screen size
  const getResponsiveDimensions = () => {
    if (windowWidth < 640) { // sm
      return {
        containerWidth: 200,
        containerHeight: 280,
        slideWidth: 160,
        slideHeight: 220,
        maxVisibleSlides: 2,
        spacing: 15,
        scale: 0.15
      };
    } else if (windowWidth < 768) { // md
      return {
        containerWidth: 240,
        containerHeight: 320,
        slideWidth: 180,
        slideHeight: 260,
        maxVisibleSlides: 2,
        spacing: 20,
        scale: 0.12
      };
    } else if (windowWidth < 1024) { // lg
      return {
        containerWidth: 280,
        containerHeight: 360,
        slideWidth: 200,
        slideHeight: 280,
        maxVisibleSlides: 3,
        spacing: 25,
        scale: 0.1
      };
    } else { // xl and above
      return {
        containerWidth: 320,
        containerHeight: 400,
        slideWidth: 220,
        slideHeight: 300,
        maxVisibleSlides: 3,
        spacing: 30,
        scale: 0.1
      };
    }
  };

  const dimensions = getResponsiveDimensions();

  const getSlideStyle = (index: number): React.CSSProperties => {
    const diff = index - currentIndex;
    const absIndex = Math.abs(diff);

    const zIndex = images.length - absIndex;
    let scale = 1 - absIndex * dimensions.scale;
    let opacity = 1 - absIndex * 0.25;
    const translateX = diff * dimensions.spacing;
    const translateY = absIndex * (windowWidth < 640 ? 8 : 12);

    // Hide slides beyond max visible
    if (absIndex >= dimensions.maxVisibleSlides) {
      opacity = 0;
      scale = Math.max(0.6, scale);
    }

    return {
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      transform: `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
      zIndex,
      opacity,
      transition: isTransitioning ? 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
      cursor: index !== currentIndex ? 'pointer' : 'default',
      width: dimensions.slideWidth,
      height: dimensions.slideHeight,
    };
  };

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      {/* Main Carousel Container */}
      <div
        className="relative mb-4 sm:mb-6"
        style={{
          width: dimensions.containerWidth,
          height: dimensions.containerHeight,
        }}
      >
        {/* Navigation Arrows - Only show on larger screens */}
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className=" cursor-pointer hidden sm:flex absolute -left-8 md:-left-12 top-1/2 transform -translate-y-1/2 z-30 bg-[#1D2B53] hover:bg-[#1D2B53]/90 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center"
          type="button"
          aria-label="Previous slide"
        >
          <ChevronLeft size={windowWidth < 768 ? 18 : 24} />
        </button>

        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="cursor-pointer hidden sm:flex absolute -right-8 md:-right-12 top-1/2 transform -translate-y-1/2 z-30 bg-slate-700 hover:bg-slate-800 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center"
          type="button"
          aria-label="Next slide"
        >
          <ChevronRight size={windowWidth < 768 ? 18 : 24} />
        </button>

        {/* Slides */}
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-xl sm:rounded-2xl shadow-lg overflow-hidden bg-gray-200 flex items-center justify-center"
            style={getSlideStyle(index)}
            onClick={() => handleSlideClick(index)}
          >
            {/* Placeholder content - replace with actual images */}
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
              {/* <span className="text-sm sm:text-base lg:text-lg">
                Speaker {index + 1}
              </span> */}
              <img src={src} alt="" className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Navigation Buttons - Only show on mobile */}
      <div className="flex gap-3 mb-4 sm:hidden">
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="flex items-center justify-center px-4 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
          type="button"
        >
          <ChevronLeft size={16} className="mr-1" />
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="flex items-center justify-center px-4 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
          type="button"
        >
          Next
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-1.5 sm:gap-2 mb-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideClick(index)}
            disabled={isTransitioning}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${index === currentIndex
                ? 'bg-slate-700'
                : 'bg-gray-300 hover:bg-gray-400'
              } disabled:cursor-not-allowed`}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Current slide indicator - Hide on mobile to save space */}
      <div className="hidden sm:block text-xs sm:text-sm text-gray-600">
        {currentIndex + 1} of {images.length}
      </div>
    </div>
  );
}

// Updated VisionariesHero component to integrate better
export default function VisionariesHero() {
  return (
    <div className="relative  min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-100 rounded-full opacity-50"></div>
            <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gray-100 rounded-full opacity-40"></div> */}

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">

          {/* Left Content Section */}
          <div className="space-y-6 sm:space-y-8 lg:pr-8 order-2 lg:order-1">
            {/* Header Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              <svg width="20" height="15" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[25px] sm:h-[19px]">
                <ellipse cx="16.8919" cy="10.7157" rx="7.78639" ry="7.78604" fill="#C8AD6E" />
                <path d="M11.3198 1.14884L8.92157 3.93883L8.25005 0.5H7.32272L6.55528 3.93883L4.34887 1.14884L3.58142 1.60302L4.66864 5.10674L1.27908 3.93883L0.799424 4.62011L3.22967 7.08569L0 7.83185L0.031977 8.67534L3.58142 9.38906L0.799424 11.8871L1.27908 12.6332L4.66864 11.4005L3.58142 14.8717L4.34887 15.3908L6.55528 12.6332L7.32272 16.0721H8.25005L8.92157 12.6332L11.3198 15.3908L12.0233 14.8717L10.8722 11.4005L14.3577 12.6332L14.7414 11.8871L12.0233 9.38906L15.5728 8.67534V7.83185L12.0233 7.08569L14.7414 4.62011L14.2937 3.90639L10.8722 5.10674L12.0233 1.60302L11.3198 1.14884Z" fill="#F6F4EC" />
              </svg>
              <span>Meet the Visionaries</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight">
                <span className="text-slate-800">From education pioneers to value-driven leaders - our speakers </span>
                <span className="text-gray-400">will inspire change and connection</span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800">
                Lorem Ipsum
              </h2>
              <p className="text-gray-600 text-base sm:text-lg lg:text-[20px] leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>

              {/* CTA Button */}
              <button className="text-base sm:text-lg min-w-[160px] sm:min-w-[184px] min-h-[38px] sm:min-h-[41px] bg-[#FED543] hover:bg-yellow-500 text-slate-800 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Pre-Register Now
              </button>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="relative order-1 lg:order-2">
            {/* Image Carousel Container */}
            <div className="relative h-80 sm:h-96 lg:h-[500px] bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
              <ImageStackk className="scale-75 sm:scale-90 lg:scale-100" />
            </div>
          </div>
        </div>
      </div>

      {/* Additional decorative background elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-gradient-to-tr from-yellow-100/20 to-transparent rounded-full"></div>
    </div>
  );
}