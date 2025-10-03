"use client";

import { useState } from "react";
import CardStackContainer from "@/Components/ui/card-stack";
import { cn } from "@/lib/utils";
import CardStackWheel from "./Demo";




// function CardStackDemo() {
//   return (
//     <div className="h-[40rem] flex items-center justify-center w-full">
//       <CardStack items={CARDS} />
//     </div>
//   );
// }

// Small utility to highlight the content of specific section of a testimonial content
const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
type Card = {
  title:string;
  image:string;
  gradient:string
};
export default function ImpactCard() {
  const [currentCard, setCurrentCard] = useState(0);

  const cards:Card[] = [
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
  ];
    // setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div
      className=" mt-5 min-h-screen flex-col flex items-center justify-center p-8 relative overflow-hidden w-full gap-y-20  "
    >
      <div className="absolute  left-8 bottom-5 h-[60%] hidden sm:block">
      <img src="/impactcard/bgprop.png" alt="" className="h-full" />
      </div>
         <div className="absolute  right-32 bottom-5 h-[60%] hidden sm:block">
      <img src="/impactcard/bgpropright1.png" alt="" className="h-full" />
      </div>
        
        
         <div className="w-full text-[12px] sm:text-[16px] ">
                    <button className="w-fit p-3 px-5 rounded-[100px] min-w-[167.68px] min-h-[43px] hover:scale-95 duration-500 bg-[#293464] text-white flex justify-center items-center gap-2 mx-auto mb-10">
                        <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="16.8919" cy="10.7157" rx="7.78639" ry="7.78604" fill="#C8AD6E" />
                            <path d="M11.3198 1.14884L8.92157 3.93883L8.25005 0.5H7.32272L6.55528 3.93883L4.34887 1.14884L3.58142 1.60302L4.66864 5.10674L1.27908 3.93883L0.799424 4.62011L3.22967 7.08569L0 7.83185L0.031977 8.67534L3.58142 9.38906L0.799424 11.8871L1.27908 12.6332L4.66864 11.4005L3.58142 14.8717L4.34887 15.3908L6.55528 12.6332L7.32272 16.0721H8.25005L8.92157 12.6332L11.3198 15.3908L12.0233 14.8717L10.8722 11.4005L14.3577 12.6332L14.7414 11.8871L12.0233 9.38906L15.5728 8.67534V7.83185L12.0233 7.08569L14.7414 4.62011L14.2937 3.90639L10.8722 5.10674L12.0233 1.60302L11.3198 1.14884Z" fill="#FED543" />
                        </svg>
                        <span>One Day. A Lifetime of Impact</span>
                    </button>
                    </div>

     <div className="w-full sm:w-[80%] h-[330px]  ">

     <CardStackContainer  />
     {/* <CardStackWheel /> */}

     </div>
  
 
    </div>
  );
}

