"use client"
import AudienceSection from "@/Components/Audience/AudienceSection";
import Contact from "@/Components/Contact/Contact";
import CountDown from "@/Components/CountDown/CountDown";
import TimelineGallery from "@/Components/VideoGallery/Gallery";
import ImpactCard from "@/Components/ImpactCard/ImpactCard";
import HeroSection from "@/Components/HeroSection/HeroSection";
import TimeLineSection from "@/Components/TimeLine/TimeLineSection";

export default function Home() {
  return (
    <div className="w-full h-full m-0 p-0 relative overflow-hidden -z-50">
      <HeroSection />
      <CountDown />
      <ImpactCard />
      {/* <VisionariesHero /> */}
      <AudienceSection />
      <TimeLineSection />
      <Contact />
      <TimelineGallery />
  
    </div>
  );
}

