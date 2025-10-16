"use client";
import React from "react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/Components/ui/accordion";

export function AudienceItem({
    title,
    desc,
    idx
}: {
    title: string;
    desc?: string;
    idx: number
}) {
    return (
        <AccordionItem value={`item-${idx}`} className=" border-b border-[#BA8C2D] pb-3 sm:pb-4 p-5 z-30" >
            <AccordionTrigger className="
            flex items-center gap-x-5  hover:no-underline  [&[data-state=open]>div>p]:text-[#333333]   transition-all duration-700 ease-in-out
    [&[data-state=open]>div>p]:font-bold [&[data-state=open]>div>p]:scale-[1.02] pb-0
              ">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M8.72279 0.5L6.87474 2.65L6.35729 0H5.64271L5.05134 2.65L3.35113 0.5L2.75975 0.85L3.59754 3.55L0.985626 2.65L0.616016 3.175L2.48871 5.075L0 5.65L0.0246407 6.3L2.75975 6.85L0.616016 8.775L0.985626 9.35L3.59754 8.4L2.75975 11.075L3.35113 11.475L5.05134 9.35L5.64271 12H6.35729L6.87474 9.35L8.72279 11.475L9.26489 11.075L8.37782 8.4L11.0637 9.35L11.3593 8.775L9.26489 6.85L12 6.3V5.65L9.26489 5.075L11.3593 3.175L11.0144 2.625L8.37782 3.55L9.26489 0.85L8.72279 0.5Z" fill="#BA8C2D" />
                </svg>
                <div className="flex-1 text-left">
                    <p className="   text-[#222222] text-lg sm:text-xl md:text-2xl lg:text-[28px]   
                font-normal
                    leading-tight "
                     style={{
                        fontVariationSettings: '"wght" 400',
                        transition: 'font-variation-settings 700ms ease-in-out, color 700ms ease-in-out, transform 700ms ease-in-out'
                      }}
                    >
                        {title}
                    </p>
                </div>
            </AccordionTrigger>
            {desc && (
                <AccordionContent className="pb-5 pt-0 pl-8 sm:pl-5 md:pl-6 lg:pl-8 xl:pl-8 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down transition-all duration-700 ease-in-out">
                    <p className="font-normal text-[16px] sm:text-base md:text-lg lg:[24px] mt-1 leading-relaxed z-30">
                        {desc}
                    </p>
                </AccordionContent>
            )}
        </AccordionItem>


    );
}