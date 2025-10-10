"use client"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion';
import Preview from "./GravityProp";
import { useEffect, useRef, useState } from "react";
export default function Footer() {
    const footerRef = useRef(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        if (!footerRef.current) return

        const io = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (entry && !isInView) {
                    console.log("TRUE",entry.isIntersecting)
                    setTimeout(()=> setIsInView(entry.isIntersecting),500)
                 
                   
                }
            },
            { threshold: 0.01 }
        )

        io.observe(footerRef.current)

        return () => io.disconnect()
    }, [])
    return (
        <footer ref={footerRef} className="min-h-[400px] sm:min-h-[500px] lg:h-[553px] block relative overflow-hidden bg-[#293464] text-white py-6 sm:py-8 lg:py-10 w-[96%] m-auto rounded-xl sm:rounded-2xl lg:rounded-3xl border-2">
            <div className="w-full px-4 sm:px-8 lg:px-18 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                    {/* Left Section - Mission Statement */}
                    <div className="space-y-4 sm:space-y-6">
                        <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-4xl font-bold leading-tight">
                            Creating a global community of purpose-driven children through value education and life skills
                        </h2>
                        <button className="text-base sm:text-lg lg:text-[20px] bg-white text-[#222222] px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 font-bold hover:bg-gray-100 transition-colors w-fit">
                            Know More
                            <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 p-1 bg-[#C8AD6E] text-white rounded-full flex-shrink-0" />
                        </button>
                    </div>

                    {/* Right Section - Social Media and Other Websites */}
                    <div className="flex gap-6 flex-col sm:flex-row sm:gap-10 justify-between z-30 ">
                        {/* Social Media */}
                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-lg sm:text-[24px] font-medium">Social Media</h3>
                            <div className=" text-[14px] sm:text-[20px] xl:text-[20px] md:text-[16px] flex flex-col gap-y-2">
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors ">
                                    Instagram
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                                    LinkedIn
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors ">
                                    Facebook
                                </div>
                            </div>
                        </div>

                        {/* Other Websites */}
                        <div className="space-y-2 sm:space-y-6">
                            <h3 className="text-lg sm:text-[24px] font-medium">Other Websites</h3>
                            <div className="text-[14px] sm:text-[20px] xl:text-[20px] md:text-[16px] font-normal flex flex-col gap-y-3">
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors  ">
                                    Shrimad Rajchandra Mission Dharampur
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors ">
                                    Shrimad Rajchandra Mission Dharampur
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors ">
                                    SRMD Yoga
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors ">
                                    SRMD Courses
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors ">
                                    SRMD Youth
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Logo */}
                <div className="mt-8 sm:mt-12 lg:mt-16">
                    <div className="flex justify-start  sm:w-[88px] md:w-[200px]  lg:w-[402px]">
                        <Image
                            alt="logo"
                            src="/footer/image.png"
                            width={333}
                            height={137}
                            className="w-[87px] xl:w-[333px] lg:w-[333px] sm:w-[87px] md:w-[200px] h-[36px] sm:h-[36px] lg:h-28 xl:h-[137px] md:h-20  xl:object-cover md:object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            {/* Bottom right decoration - now visible on all devices */}
           { <div className="absolute right-0 bottom-0 mr-1 sm:mr-2 lg:mr-3 mb-1 sm:mb-2 lg:mb-3">
                {/* <img
                    src="/footer/footer-props.png"
                    alt="Footer decoration"
                    className="object-cover h-24 sm:h-32 md:h-48 lg:h-64 xl:max-h-[298px] w-auto"
                    /> */}
                    

                    <Preview isInView={isInView} />
                    
            </div>}

            {/* Top center star decoration */}
            <div className="absolute -top-20 sm:-top-32 lg:-top-48 xl:-top-48 w-full flex justify-center h-48 sm:h-72 lg:h-80 xl:h-[417px] pointer-events-none ">
                {/* <img 
                    src="/footer-star.png" 
                    alt="Footer star decoration" 
                    className="w-[50%] sm:w-[45%] lg:w-[35%] h-full object-contain opacity-70 sm:opacity-80 lg:opacity-100"
                /> */}
                <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[50%] sm:w-[45%] lg:w-[35%] h-full object-contain opacity-30">
                    <path d="M11.3198 1.14884L8.92157 3.93883L8.25005 0.5H7.32272L6.55528 3.93883L4.34887 1.14884L3.58142 1.60302L4.66864 5.10674L1.27908 3.93883L0.799424 4.62011L3.22967 7.08569L0 7.83185L0.031977 8.67534L3.58142 9.38906L0.799424 11.8871L1.27908 12.6332L4.66864 11.4005L3.58142 14.8717L4.34887 15.3908L6.55528 12.6332L7.32272 16.0721H8.25005L8.92157 12.6332L11.3198 15.3908L12.0233 14.8717L10.8722 11.4005L14.3577 12.6332L14.7414 11.8871L12.0233 9.38906L15.5728 8.67534V7.83185L12.0233 7.08569L14.7414 4.62011L14.2937 3.90639L10.8722 5.10674L12.0233 1.60302L11.3198 1.14884Z" fill="#C7AC6E" />
                </motion.svg>

            </div>
        </footer>
    );
}