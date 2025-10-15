"use client";
import ScrollTypingEffect from "../Common/ScrollTextFilling";
import { useEffect, useState } from "react";
import instagramReel from '@/lib/data/GalleryData.json'

type instaData={
  url: string
}
export default function TimelineGallery() {
  const [visibleData, setVisibleData] = useState<instaData[]>([])
  const visible = useRef(0)

  useEffect(() => {
    const width = window.innerWidth
    if (width > 768) {
      visible.current = 8
    }
    else {
      visible.current = 4
    }
    setVisibleData(instagramReel.slice(0, visible.current))
  }, [])
  const handleClick = (e: MouseEvent) => {
    const prevScroll = window.scrollY;
    e.preventDefault()
    const datas = instagramReel.slice(visibleData.length, visible.current + 2)
    visible.current += 2
    setVisibleData((prev) => ([...prev, ...datas]))


    requestAnimationFrame(() => {

      // Adjust scroll position so your view doesn't move
      window.scrollTo({
        top: prevScroll,
        behavior: "instant" as ScrollBehavior,
      });
    });
  }
  return (
    <div className="mt-24 relative w-full py-12  px-4 sm:px-6 md:px-12 lg:px-20 z-20">
      {/* Decorative Wave Background */}

      <SnakeReveal />
      {/* Top Text Section */}
      <div className="w-[90%] sm:w-full   mb-5 flex  items-start flex-col  ">
        <div className=" w-full lg:w-[22%] xl:w-[22%] md:w-[45%] max-w-4xl bg-[#1D2B53] text-white  text-[12px]  sm:text-[16px] font-semibold   py-3 rounded-full mb-4 flex  gap-x-1  sm:px-3 justify-center">
          <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="16.8919" cy="10.7157" rx="7.78639" ry="7.78604" fill="#BA8C2D" />
            <path d="M11.3198 1.14884L8.92157 3.93883L8.25005 0.5H7.32272L6.55528 3.93883L4.34887 1.14884L3.58142 1.60302L4.66864 5.10674L1.27908 3.93883L0.799424 4.62011L3.22967 7.08569L0 7.83185L0.031977 8.67534L3.58142 9.38906L0.799424 11.8871L1.27908 12.6332L4.66864 11.4005L3.58142 14.8717L4.34887 15.3908L6.55528 12.6332L7.32272 16.0721H8.25005L8.92157 12.6332L11.3198 15.3908L12.0233 14.8717L10.8722 11.4005L14.3577 12.6332L14.7414 11.8871L12.0233 9.38906L15.5728 8.67534V7.83185L12.0233 7.08569L14.7414 4.62011L14.2937 3.90639L10.8722 5.10674L12.0233 1.60302L11.3198 1.14884Z" fill="#FED543" />
          </svg>
          The Ripple Has Already Begun
        </div>
        <ScrollTypingEffect
          className="text-[26px] w-full md:w-full  xl:w-[70%] lg:w-[70%] sm:text-[40px] lg:text-[36px] md:text-[30px] xl:text-[40px]
           leading-[32px] sm:leading-tight text-[#33333366]"
          text={
            `Witness the build-up. From practice rehearsals to sneak peeks at
          booths   — this is your front-row seat to the movement.`
          }
        />
        <p className="mt-3 text-[16px] sm:text-[16px] lg:text-[32px] xl:text-[32px] md:text-[20px] text-[#000000]">
          @SRMD.Divinetouch #QuestForHappiness
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="flex flex-wrap gap-x-4  justify-center items-center  w-full z-10 pt-5 ">
        {visibleData.map((card, idx) => (
          <AnimatedCard card={card} idx={idx} key={`${card.url}-${idx}`} />
        ))}
      </div>
      {(visibleData.length !== instagramReel.length) && <div className="text-center mt-5 mb-16">
        <button className="btn-hover bg-[#BA8C2D] text-[#222222] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-md shadow-md  transition text-sm sm:text-base cursor-pointer  max-h-[52px]" onClick={handleClick}>
          Load More
        </button>
      </div>}
    </div>
  );
}
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LoaderCircle, Play } from 'lucide-react';
import SnakeReveal from "./SnakeProp";



const AnimatedCard: React.FC<AnimatedCardProps> = ({ card, idx }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const url = `${card.url.replace(/\/\?igsh=.*$/, "").replace(/\/$/, "")}/embed/?autoplay=1`
  const [play, setPlay] = useState(false)
  const marginClass = idx % 2 === 0 ? "mt-10" : "mb-20";
  return (
    <motion.div
      ref={ref}
      className={`w-full sm:w-[48%] lg:w-[31%] xl:w-[23%] break-inside-avoid mb-10 
        xl:${marginClass} lg:${marginClass} md:${marginClass}  
        bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden border-2 border-gray-300 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20  hover:border-blue-400`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.5,
        delay: idx * 0.1,
        ease: "easeOut"
      }}
    >
      {/* Video Thumbnail */}
      <div className="w-full relative overflow-hidden aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 group">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={url}
          title="Instagram Reel"
          frameBorder="0"
          scrolling="no"
          allow="autoplay;  encrypted-media;"
          allowFullScreen
          style={{ overflow: 'hidden' }}

        />

        {/* Play Button Overlay */}
        {/* {<div className="absolute inset-0 flex items-center justify-center  opacity-0 group-hover:opacity-100 transition-all duration-300" onClick={() => setPlay(true)}>
          <motion.div className="w-20 h-20  flex items-center justify-center  shadow-2xl transform group-hover:scale-110 transition-transform duration-300 "  >
            <Play
              className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16  overflow-hidden text-[white] "
              fill="#FFFFFF"

            />
          </motion.div>
        </div>} */}

      </div>
    </motion.div>
  );
};

// Usage in your parent component:
// <AnimatedCard card={card} idx={idx} />


interface AnimatedCardProps {
  card: instaData;
  idx: number;
}