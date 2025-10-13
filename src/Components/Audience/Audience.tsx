"use client";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/ui/accordion";
import ScrollTypingEffect from "../Common/ScrollTextFilling";
import { motion } from 'framer-motion';
import { useParallax } from "@/hooks/paralllelx";
import { useRotateScroll } from "@/hooks/useScrollRotate";
const audience = [
    {
        title: "Youth Mentors & Thought Leader",
        desc: "You aim to inspire and shape the next generation."
    },
    {
        title: "Parent",
        desc: "You believe in raising not just smart kids, but good humans."
    },
    {
        title: "Child Development Expert",
        desc: "You know growth is about the heart as much as the mind."
    },
    {
        title: "School Leader & Founder",
        desc: "You seek to bring value-based learning to your institutions."
    },
    {
        title: "Educator",
        desc: "You believe in raising not just smart kids, but good humans."
    }
];
      const moveToNextSection = () => {
        const nextSection = document.querySelector("#contact")
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" })
        }
    }
export default function AudienceSection() {
    const { ref, y } = useParallax({ speed: 0.2 })
    const { ref: leftChakraRef, y: chakray } = useParallax({ speed: 0.2 })
    const { ref: audRef1, rotate: audRotate1 } = useRotateScroll();
    const { ref: audRef2, rotate: audRotate2 } = useRotateScroll();
    const { ref: audRef3, rotate: audRotate3 } = useRotateScroll();

    return (
        <section
            id="audience"
            className="relative  w-full overflow-y-visible overflow-x-clip min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:h-[900px] xl:h-[996px]  sm:py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row lg:flex-wrap z-20 mt-28 mb-24 md:mb-0 "
            style={{
                background: "linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,.85)), url('/Eventbg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {/* Left Section - Badge and Heading */}
            <div className="relative w-full lg:w-[50%] max-w-4xl flex flex-col h-auto lg:h-[70%] justify-start items-start  sm:mb-8 gap-1 ">
                {/* Badge */}
                <div className="flex self-start gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-[#293464] text-white font-medium text-xs sm:text-sm mb-4 sm:mb-6 z-40">
                    <svg width="20" height="15" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[25px] sm:h-[19px]">
                        <ellipse cx="16.8919" cy="10.7157" rx="7.78639" ry="7.78604" fill="#C8AD6E" />
                        <path d="M11.3198 1.14884L8.92157 3.93883L8.25005 0.5H7.32272L6.55528 3.93883L4.34887 1.14884L3.58142 1.60302L4.66864 5.10674L1.27908 3.93883L0.799424 4.62011L3.22967 7.08569L0 7.83185L0.031977 8.67534L3.58142 9.38906L0.799424 11.8871L1.27908 12.6332L4.66864 11.4005L3.58142 14.8717L4.34887 15.3908L6.55528 12.6332L7.32272 16.0721H8.25005L8.92157 12.6332L11.3198 15.3908L12.0233 14.8717L10.8722 11.4005L14.3577 12.6332L14.7414 11.8871L12.0233 9.38906L15.5728 8.67534V7.83185L12.0233 7.08569L14.7414 4.62011L14.2937 3.90639L10.8722 5.10674L12.0233 1.60302L11.3198 1.14884Z" fill="#FED543" />
                    </svg>
                    <span className="text-sm sm:text-[16px] font-semibold">This is for you if you are a…</span>
                </div>

                {/* Heading */}
                <div className=" w-full  sm:w-[80%] h-full flex flex-col justify-start">
                    <div>
                        {/* 
                    <h2 className="font-[400] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                        Lorem typesetting
                    </h2>
                    <p className="text-[#22222266] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] mt-2">
                        industry. Lorem Ipsum
                    </p> */}
                        <ScrollTypingEffect
                            text="Lorem typesetting industry. Lorem Ipsum"
                            className="font-normal text-[26px] sm:text-[40px] md:text-[30px]  lg:text-[36px] xl:[40px] leading-tight  text-[#22222266] w-full " />
                    </div>
                    {/* Decorative Image - positioned differently on mobile */}
                    

<div className="mt-10 w-full sm:w-44 md:w-64 lg:w-[80%] xl:w-full h-full sm:h-[225px] md:h-[230px] min-w-44 flex items-end justify-center relative -z-10 self-center">

                        <motion.svg
                             className="opacity-70 sm:opacity-100 md:opacity-70 "
                            ref={ref}
                            style={{ y }}
                            width="300" height="300" viewBox="0 0 284 224" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <motion.path d="M155.842 223.932C147.145 208.637 143.986 200.623 153.818 191.31C140.391 193.278 135.192 188.01 128.91 170.398C145.182 160.69 152.313 160.286 161.57 168.328C159.659 154.999 164.897 149.859 182.228 143.575C192.992 160.652 192.284 167.183 184.487 175.881C199.619 173.977 203.339 181.748 209.16 197.108C193.279 206.373 185.57 208.158 176.497 197.999C178.59 213.215 171.849 217.782 155.842 223.932Z" fill="#1CB377" fillOpacity="0.7" ref={audRef2}
                                style={{ rotate: audRotate2 }}

                            />
                            <motion.path d="M119.232 112.779C115.693 117.054 118.109 123.557 123.581 124.485L181.035 134.222C186.506 135.15 190.93 129.806 188.998 124.603L168.704 69.9782C166.771 64.7758 159.931 63.6165 156.392 67.8915L119.232 112.779Z" fill="#0B5399" fillOpacity="0.7"
                                ref={audRef3}
                                style={{ rotate: audRotate3 }}
                            />
                            <mask id="mask0_208_82" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="129" height="127">
                                <rect width="96.1258" height="90.1627" transform="matrix(0.868119 0.496357 0.496357 -0.868119 0 79.1797)" fill="url(#pattern0_208_82)" />
                            </mask>

                            <circle cx="45.6598" cy="45.6598" r="45.6598" transform="matrix(0.868119 0.496357 0.496357 -0.868119 175.891 139.148)" fill="#B862A7" fillOpacity="0.7" />
                            <motion.path d="M117.866 176.276C120.528 148.865 100.466 124.486 73.0549 121.823C45.6441 119.161 21.2648 139.223 18.6022 166.634C15.9397 194.045 36.0021 218.424 63.4129 221.087C90.8238 223.749 115.203 203.687 117.866 176.276Z" fill="#C8AD6E" />
                        </motion.svg>
                        <motion.svg
                       
                            style={{ y: chakray }}
                            ref={leftChakraRef}


                            className="absolute left-5 xl:left-20 lg:left-20 -top-1 xl:-top-5 lg:-top-5 opacity-70 sm:opacity-100 md:opacity-70 "
                            width="140" height="140" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path opacity="0.9" d="M79.5051 5.5L62.8727 24.85L58.2156 1H51.7844L46.462 24.85L31.1602 5.5L25.8378 8.65L33.3778 32.95L9.87064 24.85L6.54415 29.575L23.3984 46.675L1 51.85L1.22177 57.7L25.8378 62.65L6.54415 79.975L9.87064 85.15L33.3778 76.6L25.8378 100.675L31.1602 104.275L46.462 85.15L51.7844 109H58.2156L62.8727 85.15L79.5051 104.275L84.384 100.675L76.4004 76.6L100.573 85.15L103.234 79.975L84.384 62.65L109 57.7V51.85L84.384 46.675L103.234 29.575L100.129 24.625L76.4004 32.95L84.384 8.65L79.5051 5.5Z" fill="#FED543"
                                ref={audRef1}
                                style={{ rotate: audRotate1 }}
                            />
                        </motion.svg>
                    </div>
                </div>

            </div>

            {/* Right Section - Audience List */}
            <div className="w-full lg:w-[50%] max-w-3xl space-y-4 sm:space-y-6 h-auto lg:h-[70%] flex flex-col justify-start z-20 ">
                <div className="">
                    <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                        {audience.map((item, i) => (

                            <AudienceItem key={i} {...item} idx={i} />
                        ))}
                    </Accordion>
                </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6  w-full flex justify-center h-auto lg:h-[30%] items-start ">
                <button className="bg-[#FED543] btn-hover   px-6 sm:px-8 py-2 sm:py-3 rounded-md shadow-md transition font-bold text-sm sm:text-base max-h-[52px]" onClick={moveToNextSection}>
                    Know More
                </button>
            </div>


        </section>
    );
}

function AudienceItem({
    title,
    desc,
    idx
}: {
    title: string;
    desc?: string;
    idx: number
}) {
    return (
        <AccordionItem value={`item-${idx}`} className=" border-b border-[#C8AD6E] pb-3 sm:pb-4 p-5 z-20" >
            <AccordionTrigger  className="
            flex items-center gap-x-5  hover:no-underline  [&[data-state=open]>div>p]:text-[#333333]   transition-all duration-700 ease-in-out
    [&[data-state=open]>div>p]:fontWeightAnimate [&[data-state=open]>div>p]:scale-[1.02] pb-0
              ">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M8.72279 0.5L6.87474 2.65L6.35729 0H5.64271L5.05134 2.65L3.35113 0.5L2.75975 0.85L3.59754 3.55L0.985626 2.65L0.616016 3.175L2.48871 5.075L0 5.65L0.0246407 6.3L2.75975 6.85L0.616016 8.775L0.985626 9.35L3.59754 8.4L2.75975 11.075L3.35113 11.475L5.05134 9.35L5.64271 12H6.35729L6.87474 9.35L8.72279 11.475L9.26489 11.075L8.37782 8.4L11.0637 9.35L11.3593 8.775L9.26489 6.85L12 6.3V5.65L9.26489 5.075L11.3593 3.175L11.0144 2.625L8.37782 3.55L9.26489 0.85L8.72279 0.5Z" fill="#C8AD6E" />
                </svg>
                <div className="flex-1 text-left">
                    <p className="   text-[#222222B2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] 
                font-normal
                    leading-tight  transition-all duration-700 ease-in-out">
                        {title}
                    </p>
                </div>
            </AccordionTrigger>
            {desc && (
                <AccordionContent className="pb-0 pt-0 pl-9 sm:pl-7 md:pl-8 lg:pl-9 xl:pl-9 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down transition-all duration-700 ease-in-out">
                    <p className="font-normal text-[16px] sm:text-base md:text-lg lg:text-xl xl:text-[24px] mt-1 leading-relaxed">
                        {desc}
                    </p>
                </AccordionContent>
            )}
        </AccordionItem>


    );
}


