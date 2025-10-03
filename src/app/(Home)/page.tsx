"use client"
import AudienceSection from "@/Components/Audience";
import Contact from "@/Components/Contact";
import CountDown from "@/Components/CountDown";
import CardStack from "@/Components/Demo";
import CardStackDemo from "@/Components/Demo";
import EventSection from "@/Components/Event";
import TimelineGallery from "@/Components/Gallery";
import ImpactCard from "@/Components/ImpactCard";
import HeroSection from "@/Components/Section1";
import Timeline from "@/Components/Timeline";
import VisionariesHero from "@/Components/Visionaries";
import Image from "next/image";

import TimelineTrain from "@/Components/demo2";
export default function Home() {
  return (
    <div className="w-full h-full m-0 p-0 relative">
      
      {/* Responsive decorative SVG background */}
      <HeroSection />
      {/* Component Sections */}
      <CountDown />
      {/* <CardStackDemo /> */}
      {/* <CardStackWheel /> */}
      <ImpactCard />
      {/* <EventSection /> */}
      <VisionariesHero />
      <AudienceSection />
  {/* <TimelineTrain /> */}
            <Timeline />
      <Contact />
      
      <TimelineGallery />
    </div>
  );
}

