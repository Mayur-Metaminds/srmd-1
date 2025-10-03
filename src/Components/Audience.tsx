"use client";
import React from "react";
// import { Sun } from "lucide-react";
// import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
const audience = [
    {
        title: "Youth Mentors & Thought Leaders",
        desc: "You aim to inspire and shape the next generation through guidance, wisdom, and positive influence in their personal and professional development."
    },
    {
        title: "Parent",
        desc: "You're dedicated to nurturing your child's growth, providing support, and creating a loving environment that fosters their emotional, intellectual, and social development."
    },
    {
        title: "Child Development Expert",
        desc: "You specialize in understanding how children grow, learn, and develop, applying research-based strategies to support optimal outcomes in various developmental stages."
    },
    {
        title: "School Leader & Founder",
        desc: "You're responsible for creating educational vision, managing institutional growth, and ensuring quality learning environments that prepare students for future success."
    },
    {
        title: "Educator",
        desc: "You're passionate about teaching and learning, committed to helping students discover their potential while adapting innovative methods to meet diverse learning needs."
    }
];

export default function AudienceSection() {
    return (
        <section
            className="relative  w-full overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:h-[900px] xl:h-[996px] py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row lg:flex-wrap"
            style={{
                background: "linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,.85)), url('/Eventbg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {/* Left Section - Badge and Heading */}
            <div className="relative w-full lg:w-[50%] max-w-4xl flex flex-col h-auto lg:h-[70%] justify-start items-start mb-6 sm:mb-8 gap-1">
                {/* Badge */}
                <div className="flex self-start gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-[#293464] text-white font-medium text-xs sm:text-sm mb-4 sm:mb-6">
                    <svg width="20" height="15" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[25px] sm:h-[19px]">
                        <ellipse cx="16.8919" cy="10.7157" rx="7.78639" ry="7.78604" fill="#C8AD6E" />
                        <path d="M11.3198 1.14884L8.92157 3.93883L8.25005 0.5H7.32272L6.55528 3.93883L4.34887 1.14884L3.58142 1.60302L4.66864 5.10674L1.27908 3.93883L0.799424 4.62011L3.22967 7.08569L0 7.83185L0.031977 8.67534L3.58142 9.38906L0.799424 11.8871L1.27908 12.6332L4.66864 11.4005L3.58142 14.8717L4.34887 15.3908L6.55528 12.6332L7.32272 16.0721H8.25005L8.92157 12.6332L11.3198 15.3908L12.0233 14.8717L10.8722 11.4005L14.3577 12.6332L14.7414 11.8871L12.0233 9.38906L15.5728 8.67534V7.83185L12.0233 7.08569L14.7414 4.62011L14.2937 3.90639L10.8722 5.10674L12.0233 1.60302L11.3198 1.14884Z" fill="#F6F4EC" />
                    </svg>
                    <span className="text-sm sm:text-[16px]">This is for you if ...</span>
                </div>

                {/* Heading */}
                <div className="w-full  h-full flex flex-col justify-between">
                    <div>

                    <h2 className="font-[400] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                        Lorem typesetting
                    </h2>
                    <p className="text-[#22222266] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] mt-2">
                        industry. Lorem Ipsum
                    </p>
                    </div>
   {/* Decorative Image - positioned differently on mobile */}
                <div className=" sm:w-44 md:w-64 lg:w-[300px] xl:w-[300px] w-2/4 ">
                    <img src="/image.png" alt="Decorative element" className="w-full object-contain" />
                </div>
                </div>
             
            </div>

            {/* Right Section - Audience List */}
            <div className="w-full lg:w-[50%] max-w-3xl space-y-4 sm:space-y-6 h-auto lg:h-[70%] flex flex-col justify-start lg:justify-end sm:self-end sm:justify-end">
                <div className="">
                    <Accordion type="single" collapsible className="w-full">
                        {audience.map((item, i) => (

                            <AudienceItem key={i} {...item} idx={i} />
                        ))}
                    </Accordion>
                </div>
            </div>

            {/* CTA Button */}
            <div className="w-full flex justify-center h-auto lg:h-[30%] items-center mt-6 sm:mt-8 lg:mt-0">
                <button className="bg-[#FED543]  font-[400] px-6 sm:px-8 py-2 sm:py-3 rounded-md shadow-md transition text-sm sm:text-base">
                    Know More
                </button>
            </div>

      
        </section>
    );
}

// function AudienceItem({
//     title,
//     desc,
// }: {
//     title: string;
//     desc?: string;
// }) {
//     return (
//         <div className="border-b border-gray-200 pb-3 sm:pb-4">
//             <div className="flex items-start gap-2">
//                 <span className="text-yellow-500 text-base sm:text-lg flex-shrink-0 mt-1">•</span>
//                 <div className="flex-1">
//                     <p className="font-semibold text-gray-900 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] leading-tight">
//                         {title}
//                     </p>
//                     {desc && (
//                         <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mt-1 leading-relaxed">
//                             {desc}
//                         </p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

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
        <AccordionItem value={`item-${idx}`} className=" border-b border-[#C8AD6E] pb-3 sm:pb-4 p-5" >
            <AccordionTrigger  className="flex items-center gap-2  hover:no-underline p-3 [&[data-state=open]>div>span]:text-yellow-500 [&[data-state=open]]:font-semibold [&[data-state=close]]:font-[400]
             ">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path d="M8.72279 0.5L6.87474 2.65L6.35729 0H5.64271L5.05134 2.65L3.35113 0.5L2.75975 0.85L3.59754 3.55L0.985626 2.65L0.616016 3.175L2.48871 5.075L0 5.65L0.0246407 6.3L2.75975 6.85L0.616016 8.775L0.985626 9.35L3.59754 8.4L2.75975 11.075L3.35113 11.475L5.05134 9.35L5.64271 12H6.35729L6.87474 9.35L8.72279 11.475L9.26489 11.075L8.37782 8.4L11.0637 9.35L11.3593 8.775L9.26489 6.85L12 6.3V5.65L9.26489 5.075L11.3593 3.175L11.0144 2.625L8.37782 3.55L9.26489 0.85L8.72279 0.5Z" fill="#C8AD6E"/>
</svg>
                <div className="flex-1 text-left">
                    <p className=" text-[#333333] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] leading-tight  transition-all duration-500 ease-in-out">
                        {title}
                    </p>
                </div>
            </AccordionTrigger>
            {desc && (
                <AccordionContent  className="pb-0 pt-0 pl-6 sm:pl-7 md:pl-8 lg:pl-9 xl:pl-10 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down transition-all duration-700 ease-in-out">
                    <p className="text-[#333333] font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mt-1 leading-relaxed">
                        {desc}
                    </p>
                </AccordionContent>
            )}
        </AccordionItem>


    );
}
