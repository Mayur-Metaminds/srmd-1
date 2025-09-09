"use client"
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";
export default function VisionariesHero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-100 rounded-full opacity-50"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gray-100 rounded-full opacity-40"></div>
      
      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content Section */}
          <div className="space-y-8 lg:pr-8">
            {/* Header Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium">
                <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="16.8919" cy="10.7157" rx="7.78639" ry="7.78604" fill="#C8AD6E" />
                        <path d="M11.3198 1.14884L8.92157 3.93883L8.25005 0.5H7.32272L6.55528 3.93883L4.34887 1.14884L3.58142 1.60302L4.66864 5.10674L1.27908 3.93883L0.799424 4.62011L3.22967 7.08569L0 7.83185L0.031977 8.67534L3.58142 9.38906L0.799424 11.8871L1.27908 12.6332L4.66864 11.4005L3.58142 14.8717L4.34887 15.3908L6.55528 12.6332L7.32272 16.0721H8.25005L8.92157 12.6332L11.3198 15.3908L12.0233 14.8717L10.8722 11.4005L14.3577 12.6332L14.7414 11.8871L12.0233 9.38906L15.5728 8.67534V7.83185L12.0233 7.08569L14.7414 4.62011L14.2937 3.90639L10.8722 5.10674L12.0233 1.60302L11.3198 1.14884Z" fill="#F6F4EC" />
                    </svg>
              <span>Meet the Visionaries</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-[40px] l font-bold leading-tight">
                <span className="text-slate-800">From education pioneers to value-driven leaders - our speakers </span>
                <span className="text-gray-400">will inspire change and connection</span>
              </h1>
            </div>
            
            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
                Lorem Ipsum
              </h2>
              <p className="text-gray-600 text-[20px] leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
              
              {/* CTA Button */}
              <button className="text-[18px] min-w-[184px] min-h-[41px] bg-[#FED543] hover:bg-yellow-500 text-slate-800 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Pre-Register Now
              </button>
            </div>
          </div>
          
          {/* Right Visual Section */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-slate-700 hover:bg-slate-800 text-white p-3 rounded-full shadow-lg transition-all duration-200">
              <ChevronLeft size={24} />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-slate-700 hover:bg-slate-800 text-white p-3 rounded-full shadow-lg transition-all duration-200">
              <ChevronRight size={24} />
            </button>
            
            {/* Image Carousel Container */}
            <div className="relative h-96 lg:h-[500px] bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Background Images/Cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Background cards */}
                <div className="absolute left-8 top-8 w-20 lg:w-24 h-32 lg:h-40 bg-gradient-to-b from-gray-800 to-black rounded-lg transform rotate-12 opacity-80"></div>
                <div className="absolute left-16 top-12 w-16 lg:w-20 h-28 lg:h-36 bg-gradient-to-b from-amber-600 to-amber-800 rounded-lg transform -rotate-6 opacity-70"></div>
                <div className="absolute right-8 top-8 w-20 lg:w-24 h-32 lg:h-40 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg transform -rotate-12 opacity-60"></div>
                <div className="absolute right-16 top-12 w-16 lg:w-20 h-28 lg:h-36 bg-gradient-to-b from-amber-700 to-amber-900 rounded-lg transform rotate-6 opacity-50"></div>
              </div>
              
              {/* Main Speaker Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 lg:w-56 h-64 lg:h-80 bg-gradient-to-b from-gray-300 to-gray-500 rounded-xl shadow-xl overflow-hidden">
                  {/* Placeholder for speaker image */}
                  <div className="w-full h-full bg-gradient-to-b from-gray-400 to-gray-600 flex items-end justify-center">
                    <div className="w-32 h-32 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-full mb-8"></div>
                  </div>
                  
                  {/* Speaker overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          
            
   
          </div>
        </div>
      </div>
      
      {/* Additional decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-100/20 to-transparent rounded-full"></div>
    </div>
  );
};

export  function ImageStack() {
  const images = [
    "/mail.png",
    "/mappin.png",
    "/phone.png",
  ];

  return (
    <div className="w-full flex justify-center py-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,      // no rotation
          stretch: -50,   // controls side overlap
          depth: 150,     // depth distance
          modifier: 1,
          slideShadows: false,
        }}
        className="w-[90%] max-w-4xl"
        modules={[EffectCoverflow]}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="w-[250px] h-[350px]">
            <Image
              src={src}
              alt={`slide-${i}`}
              width={300}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}