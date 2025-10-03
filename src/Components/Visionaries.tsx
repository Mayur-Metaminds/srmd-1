import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images?: string[];
  className?: string;
}

import ScrollTypingEffect from "./ScrollTextFilling";

export function ImageStackk({
  images = ["/Visionaries/f1.jpg", "/Visionaries/f2.jpg", "/Visionaries/f3.jpg", "/Visionaries/f4.jpg", "/Visionaries/f5.jpg"],
  className = ""
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(Math.floor(images.length / 2));
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = (): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const handlePrev = (): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const handleSlideClick = (index: number): void => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const getResponsiveDimensions = () => {
    if (windowWidth < 640) {
      return {
        containerWidth: 280,
        containerHeight: 280,
        slideWidth: 160,
        slideHeight: 220,
        maxVisibleSlides: 2,
        spacing: 15,
        scale: 0.15
      };
    } else if (windowWidth < 768) {
      return {
        containerWidth: 320,
        containerHeight: 320,
        slideWidth: 180,
        slideHeight: 260,
        maxVisibleSlides: 2,
        spacing: 20,
        scale: 0.12
      };
    } else if (windowWidth < 1024) {
      return {
        containerWidth: 360,
        containerHeight: 360,
        slideWidth: 200,
        slideHeight: 280,
        maxVisibleSlides: 3,
        spacing: 25,
        scale: 0.1
      };
    } else {
      return {
        containerWidth: 400,
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
    let scale = 1 - absIndex * (dimensions.scale / 2);
    let opacity = 100;
    const translateX = diff * (dimensions.spacing + 10);
    const translateY = absIndex * (windowWidth < 640 ? 8 : 12);

    if (absIndex >= dimensions.maxVisibleSlides) {
      opacity = 100;
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
      <div
        className="relative mb-4 sm:mb-6"
        style={{
          width: dimensions.containerWidth,
          height: dimensions.containerHeight,
        }}
      >
        <img src="/visionaries1.png" alt="" className="absolute w-[224px] -bottom-13 h-[224px] -right-15 object-cover" />
        <img src="/Visionaries/bg.png" alt="" className="absolute w-[100px] h-[100px] -right-10 top-7 object-cover" />

        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="cursor-pointer flex absolute -left-6 sm:-left-8 md:-left-12 top-1/2 transform -translate-y-1/2 z-30 bg-[#1D2B53] hover:bg-[#1D2B53]/90 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center"
          type="button"
          aria-label="Previous slide"
        >
          <ChevronLeft size={windowWidth < 768 ? 18 : 24} />
        </button>

        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="cursor-pointer flex absolute -right-6 sm:-right-8 md:-right-12 top-1/2 transform -translate-y-1/2 z-30 bg-slate-700 hover:bg-slate-800 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center"
          type="button"
          aria-label="Next slide"
        >
          <ChevronRight size={windowWidth < 768 ? 18 : 24} />
        </button>

        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-xl sm:rounded-2xl shadow-lg overflow-hidden bg-gray-200 flex items-center justify-center p-1"
            style={getSlideStyle(index)}
            onClick={() => handleSlideClick(index)}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold rounded-xl sm:rounded-2xl overflow-hidden">
              <img src={src} alt="" className="w-full h-full" />
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}

export default function VisionariesHero() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        {/* Mobile Layout - Stack vertically */}
        <div className="lg:hidden flex flex-col space-y-6">
          {/* Header Badge */}
          <div className="inline-flex items-center space-x-2 bg-slate-800 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium w-fit">
            <svg width="20" height="15" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[25px] sm:h-[19px]">
              <ellipse cx="16.8919" cy="10.7157" rx="7.78639" ry="7.78604" fill="#C8AD6E" />
              <path d="M11.3198 1.14884L8.92157 3.93883L8.25005 0.5H7.32272L6.55528 3.93883L4.34887 1.14884L3.58142 1.60302L4.66864 5.10674L1.27908 3.93883L0.799424 4.62011L3.22967 7.08569L0 7.83185L0.031977 8.67534L3.58142 9.38906L0.799424 11.8871L1.27908 12.6332L4.66864 11.4005L3.58142 14.8717L4.34887 15.3908L6.55528 12.6332L7.32272 16.0721H8.25005L8.92157 12.6332L11.3198 15.3908L12.0233 14.8717L10.8722 11.4005L14.3577 12.6332L14.7414 11.8871L12.0233 9.38906L15.5728 8.67534V7.83185L12.0233 7.08569L14.7414 4.62011L14.2937 3.90639L10.8722 5.10674L12.0233 1.60302L11.3198 1.14884Z" fill="#F6F4EC" />
            </svg>
            <span>Meet the Visionaries</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 w-full">
            <ScrollTypingEffect
              text="From education pioneers to value-driven leaders - our speakers will inspire change and connection"
              className="text-[40px] sm:text-3xl font-[400] leading-[48px] text-[#33333366]"
            />
          </div>

          {/* Carousel */}
          <div className="w-full flex items-center justify-center py-4">
            <ImageStackk className="scale-75 sm:scale-90" />
          </div>

          {/* Description */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-medium">
              Lorem Ipsum
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* CTA Button */}
            <button className="text-base sm:text-lg min-w-[160px] sm:min-w-[184px] min-h-[38px] sm:min-h-[41px] bg-[#EFB744] text-[#222222] font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Pre-Register Now
            </button>
          </div>
        </div>

        {/* Desktop Layout - Grid container - 2 columns on large screens */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start min-h-[80vh]">
          
          {/* Left Content Section - spans 5 columns on large screens */}
          <div className="col-span-5 space-y-8">
            {/* Header Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium">
              <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="16.8919" cy="10.7157" rx="7.78639" ry="7.78604" fill="#C8AD6E" />
                <path d="M11.3198 1.14884L8.92157 3.93883L8.25005 0.5H7.32272L6.55528 3.93883L4.34887 1.14884L3.58142 1.60302L4.66864 5.10674L1.27908 3.93883L0.799424 4.62011L3.22967 7.08569L0 7.83185L0.031977 8.67534L3.58142 9.38906L0.799424 11.8871L1.27908 12.6332L4.66864 11.4005L3.58142 14.8717L4.34887 15.3908L6.55528 12.6332L7.32272 16.0721H8.25005L8.92157 12.6332L11.3198 15.3908L12.0233 14.8717L10.8722 11.4005L14.3577 12.6332L14.7414 11.8871L12.0233 9.38906L15.5728 8.67534V7.83185L12.0233 7.08569L14.7414 4.62011L14.2937 3.90639L10.8722 5.10674L12.0233 1.60302L11.3198 1.14884Z" fill="#F6F4EC" />
              </svg>
              <span>Meet the Visionaries</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 w-full">
              <ScrollTypingEffect
                text="From education pioneers to value-driven leaders - our speakers will inspire change and connection"
                className="text-[40px] font-medium leading-[48px] text-[#33333366]"
              />
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-3xl font-medium text-slate-[#222222] mt-10">
                Lorem Ipsum
              </h2>
              <p className="text-2xl leading-normal font-light max-w-2xl transition-colors duration-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              {/* CTA Button */}
              <button className="text-lg min-w-[184px] min-h-[41px] bg-[#EFB744] text-[#222222] font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Pre-Register Now
              </button>
            </div>
          </div>

          {/* Right Visual Section - spans 7 columns on large screens */}
          <div className="col-span-7 flex items-center justify-end">
            {/* Image Carousel Container with proper spacing */}
            <div className="w-full flex items-center justify-end">
              <ImageStackk className="scale-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}