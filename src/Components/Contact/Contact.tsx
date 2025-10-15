import LocationCard from "@/Components/Contact/LocationCard";
import ContactInfo from '@/lib/data/ContactData.json'
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SnakeRevealBottom from "./BottomSnake";
import SnakeRevealTop from "./SnakeRevealTop";
interface ContactData {
    name: string;
    mobile: number | string;
    email: string;
    Address: string;
    city: string
    town: string
}
const AnimatedCard = ({ data }: { idx: number, data: ContactData }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            className="lg:w-[45%] xl:w-[45%] sm:w-full  min-h-[265px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "easeOut"
            }}
        >
            {/* Video Thumbnail */}

            <LocationCard ContactData={data} />
        </motion.div>
    );
};



export default function Contact() {
    const townSorting = (a: ContactData, b: ContactData) => {
        if (a.town < b.town) return -1;
        if (a.town > b.town) return 1;
        return 0;
    }
    const [data, setData] = useState<ContactData[]>(ContactInfo.sort(townSorting))
    const [visibleData, setVisibleData] = useState<ContactData[]>([])
    const visible = useRef(0)
    useEffect(() => {
        if (window.innerWidth > 768) {
            visible.current = 10
        }
        else {
            visible.current = 4
        }

        setVisibleData(data.slice(0, visible.current))
    }, [])

    const handleClick = (e: MouseEvent) => {
        console.log("AAA")
        const prevScroll = window.scrollY;
        e.preventDefault()
        const nextCount = window.innerWidth > 768 ? 10 : 2;
        const datas = data.slice(visibleData.length, visible.current + nextCount)
        setVisibleData((prev) => ([...prev, ...datas]))
        visible.current += nextCount
        requestAnimationFrame(() => {

            // Adjust scroll position so your view doesn't move
            window.scrollTo({
                top: prevScroll,
                behavior: "instant" as ScrollBehavior,
            });
        });
    }
    return (
        <>
            <div
                id="contact"
                className="flex justify-center mt-28 flex-col items-center relative overflow-x-clip overflow-y-visible -z-20 ">
                <SnakeRevealTop />

                <SnakeRevealBottom />

                {/* Content Layer */}
                <div className="relative z-10 w-full font-semibold text-[12px] sm:text-[16px] h-fit ">
                    <div className="w-fit py-2  rounded-[100px] min-w-[167.68px] min-h-[43px]  bg-[#293464] text-white flex justify-center items-center gap-2 mx-auto mb-10" >
                        <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="16.8919" cy="10.7157" rx="7.78639" ry="7.78604" fill="#C8AD6E" />
                            <path d="M11.3198 1.14884L8.92157 3.93883L8.25005 0.5H7.32272L6.55528 3.93883L4.34887 1.14884L3.58142 1.60302L4.66864 5.10674L1.27908 3.93883L0.799424 4.62011L3.22967 7.08569L0 7.83185L0.031977 8.67534L3.58142 9.38906L0.799424 11.8871L1.27908 12.6332L4.66864 11.4005L3.58142 14.8717L4.34887 15.3908L6.55528 12.6332L7.32272 16.0721H8.25005L8.92157 12.6332L11.3198 15.3908L12.0233 14.8717L10.8722 11.4005L14.3577 12.6332L14.7414 11.8871L12.0233 9.38906L15.5728 8.67534V7.83185L12.0233 7.08569L14.7414 4.62011L14.2937 3.90639L10.8722 5.10674L12.0233 1.60302L11.3198 1.14884Z" fill="#FED543" />
                        </svg>
                        <span>Contact us</span>
                    </div>

                    <div className="w-[95%] flex flex-wrap   justify-center gap-5  mx-auto ">

                        {visibleData.map((x, idx) =>

                            <AnimatedCard key={`${x.email}-${idx}`} idx={idx} data={x} />
                        )}
                    </div>
                    {
                        (visibleData.length !== data.length) && <div className="text-center mt-10">
                            <button className="btn-hover bg-[#BA8C2D] text-[#222222] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-md shadow-md transition text-sm sm:text-base max-h-[52px]" onClick={handleClick}>
                                Load More
                            </button>
                        </div>}
                </div>
            </div>
        </>
    )
}
