"use client"
import AudienceSection from "@/Components/Audience";
import Contact from "@/Components/Contact";
import CountDown from "@/Components/CountDown";
import TimelineGallery from "@/Components/Gallery";
import ImpactCard from "@/Components/ImpactCard";
import Timeline from "@/Components/Timeline";
import VisionariesHero from "@/Components/Visionaries";
import HeroSection from "@/Components/Section1";
import TimeLineSection from "@/Components/TimeLineSection";
import { Component } from "@/Components/ui/Demot";
// import ScrollHijackDemo from "@/Components/use";
export default function Home() {
  return (
    <div className="w-full h-full m-0 p-0 relative overflow-hidden">

      {/* Responsive decorative SVG background */}
      {/* <Component /> */}
      <HeroSection />
      <CountDown />
      <ImpactCard />
      <VisionariesHero />
      <AudienceSection />
      {/* <Timeline /> */}
    <TimeLineSection />
      <Contact />
      <TimelineGallery />
    </div>
  );
}

