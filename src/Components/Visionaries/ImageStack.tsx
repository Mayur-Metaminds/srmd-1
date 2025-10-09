import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParallax } from '@/hooks/paralllelx';
interface CarouselProps {
    images?: string[];
    className?: string;
}

export default function ImageStackk({
    images = ["/Visionaries/f1.jpg", "/Visionaries/f2.jpg", "/Visionaries/f3.jpg", "/Visionaries/f4.jpg", "/Visionaries/f5.jpg"],
    className = ""
}: CarouselProps) {

    const { ref, y } = useParallax({ speed: 0.3 })
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

    const { ref: circleRef, y: circley } = useParallax({ speed: 0.3 })

    const [cardOrder, setCardOrder] = useState<string[]>(images);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const [transitionDirection, setTransitionDirection] = useState<'left' | 'right' | null>(null);
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
        setTransitionDirection('right');
        setTimeout(() => {
            setCardOrder((prevOrder) => {
                const newOrder = [...prevOrder];
                const lastCard = newOrder.pop()!;
                newOrder.unshift(lastCard);
                return newOrder;
            });
            setTransitionDirection(null);
            setIsTransitioning(false);
        }, 0);
    };

    const handlePrev = (): void => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTransitionDirection('left');
        setTimeout(() => {
            setCardOrder((prevOrder) => {
                const newOrder = [...prevOrder];
                const firstCard = newOrder.shift()!;
                newOrder.push(firstCard);
                return newOrder;
            });
            setTransitionDirection(null);
            setIsTransitioning(false);
        }, 0);
    };

    const handleSlideClick = (index: number): void => {
        const middleIndex = Math.floor(cardOrder.length / 2);
        if (isTransitioning || index === middleIndex) return;
        setIsTransitioning(true);

        const diff = index - middleIndex;
        setCardOrder((prevOrder) => {
            let newOrder = [...prevOrder];
            if (diff > 0) {
                for (let i = 0; i < diff; i++) {
                    const lastCard = newOrder.pop()!;
                    newOrder.unshift(lastCard);
                }
            } else {
                for (let i = 0; i < Math.abs(diff); i++) {
                    const firstCard = newOrder.shift()!;
                    newOrder.push(firstCard);
                }
            }
            return newOrder;
        });
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
        const totalCards = cardOrder.length;
        const middleIndex = Math.floor(totalCards / 2);
        const isCenter = index === middleIndex;

        let positionOffset = (index - middleIndex) * (dimensions.spacing + 10);

        if (transitionDirection) {
            const spacingUnit = dimensions.spacing + 10;
            const maxOffset = (middleIndex + 1) * spacingUnit;

            if (transitionDirection === "right") {
                // moving right → left
                if (index === 0) {
                    // the new card entering from right side
                    positionOffset = maxOffset;
                }
            } else if (transitionDirection === "left") {
                // moving left → right
                if (index === totalCards - 1) {
                    // the new card entering from left side
                    positionOffset = -maxOffset;
                }
            }
        }
      
        const distanceFromCenter = Math.abs(index - middleIndex);
        let scale = isCenter ? 1 : 1 - distanceFromCenter * (dimensions.scale / 2);
        let opacity = 100;
        const translateY = isCenter ? 0 : -distanceFromCenter * (windowWidth < 640 ? 8 : 12);
        const zIndex = totalCards - distanceFromCenter;

        
        if (distanceFromCenter >= dimensions.maxVisibleSlides) {
            opacity = 100;
            scale = Math.max(0.6, scale);
        }


        return {
            position: 'absolute' as const,
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translateX(${positionOffset}px) translateY(${translateY}px) scale(${scale})`,
            zIndex,
            opacity,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: index !== middleIndex ? 'pointer' : 'default',
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
                <motion.img
                    ref={ref}
                    style={{ y, rotate }}
                    src="/Visionaries/visionaries1.png"
                    alt=""
                    className="absolute w-[200px] -bottom-0 h-[224px] -right-15 object-cover -z-20"
                />

                <motion.img
                    style={{ y: circley }}
                    ref={circleRef}
                    src="/Visionaries/bg.png"
                    alt=""
                    className="absolute w-[100px] h-[100px] -right-10 top-7 object-cover -z-20"
                />

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

                {cardOrder.map((src, index) => (
                    <div
                        key={src}
                        className="rounded-xl sm:rounded-2xl shadow-lg overflow-hidden bg-gray-200 flex items-center justify-center p-1"
                        style={getSlideStyle(index)}
                        onClick={() => handleSlideClick(index)}
                    >
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold rounded-xl sm:rounded-2xl overflow-hidden">
                            <img src={src} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}