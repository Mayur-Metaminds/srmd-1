"use client"
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="min-h-[400px] sm:min-h-[500px] lg:h-[553px] block relative overflow-hidden bg-[#293464] text-white py-6 sm:py-8 lg:py-10 w-[96%] m-auto rounded-xl sm:rounded-2xl lg:rounded-3xl border-2">
            <div className="w-full px-4 sm:px-8 lg:px-18 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                    {/* Left Section - Mission Statement */}
                    <div className="space-y-4 sm:space-y-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-4xl font-bold leading-tight">
                            Creating a global community of purpose-driven children through value education and life skills
                        </h2>
                        <button className="text-base sm:text-lg lg:text-[20px] bg-white text-slate-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 font-medium hover:bg-gray-100 transition-colors w-fit">
                            Know More 
                            <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 p-1 bg-slate-800 text-white rounded-full flex-shrink-0" />
                        </button>
                    </div>

                    {/* Right Section - Social Media and Other Websites */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        {/* Social Media */}
                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-lg sm:text-xl font-medium">Social Media</h3>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm sm:text-base">
                                    Instagram
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm sm:text-base">
                                    LinkedIn
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm sm:text-base">
                                    Facebook
                                </div>
                            </div>
                        </div>

                        {/* Other Websites */}
                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-lg sm:text-xl font-medium">Other Websites</h3>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm sm:text-base">
                                    Shrimad Rajchandra Mission Dharampur
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm sm:text-base">
                                    Shrimad Rajchandra Mission Dharampur
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm sm:text-base">
                                    SRMD Yoga
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm sm:text-base">
                                    SRMD Courses
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm sm:text-base">
                                    SRMD Youth
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Logo */}
                <div className="mt-8 sm:mt-12 lg:mt-16">
                    <div className="flex justify-start  sm:w-[88px]  lg:w-[402px]">
                        <Image 
                            alt="logo" 
                            src="/footerlogo.png" 
                            width={402} 
                            height={137}
                            className="w-full h-16 sm:h-[36px] lg:h-24 xl:h-[137px] max-w-full xl:object-cover md:object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            {/* Bottom right decoration - now visible on all devices */}
            <div className="absolute right-0 bottom-0 mr-1 sm:mr-2 lg:mr-3 mb-1 sm:mb-2 lg:mb-3">
                <img 
                    src="/footer-props.png" 
                    alt="Footer decoration" 
                    className="object-cover h-24 sm:h-32 md:h-48 lg:h-64 xl:max-h-[298px] w-auto opacity-80"
                />
            </div>
            
            {/* Top center star decoration */}
            <div className="absolute -top-20 sm:-top-32 lg:-top-40 w-full flex justify-center h-48 sm:h-72 lg:h-80 xl:h-[417px] pointer-events-none ">
                <img 
                    src="/footer-star.png" 
                    alt="Footer star decoration" 
                    className="w-[50%] sm:w-[45%] lg:w-[35%] h-full object-contain opacity-70 sm:opacity-80 lg:opacity-100"
                />
            </div>
        </footer>
    );
}