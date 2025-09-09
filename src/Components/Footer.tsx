"use client"
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#293464] text-white py-16 px-8 w-[96%] m-auto rounded-3xl border-2">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Section - Mission Statement */}
                    <div className="space-y-6">
                        <h2 className="text-[32px] md:text-4xl font-bold leading-tight">
                            Creating a global community of purpose-driven children through value education and life skills
                        </h2>
                        <button className="text-[20px] bg-white text-slate-800 px-6 py-3 rounded-full flex items-center gap-2 font-medium hover:bg-gray-100 transition-colors">
                            Know More <ArrowRight className="w-7 h-7 p-1 bg-slate-800 text-white rounded-full" />
                        </button>
                    </div>

                    {/* Right Section - Social Media and Other Websites */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Social Media */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium">Social Media</h3>
                            <div className="space-y-4">
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                                    Instagram
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                                    LinkedIn
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                                    Facebook
                                </div>
                            </div>
                        </div>

                        {/* Other Websites */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium">Other Websites</h3>
                            <div className="space-y-4">
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                                    Shrimad Rajchandra Mission Dharampur
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                                    Shrimad Rajchandra Mission Dharampur
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                                    SRMD Yoga
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                                    SRMD Courses
                                </div>
                                <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                                    SRMD Youth
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Logo and Tagline */}
                <div className="mt-16 pt-8 border-t border-slate-700">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            {/* Logo flame icon */}
                          <Image alt="logo" src={"/footerlogo.png"} width={402} height={137} />
                               
                            </div>
                        </div>
                    </div>
                
                    
                </div>
            
        </footer>
    );
}