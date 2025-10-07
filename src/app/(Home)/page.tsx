"use client"
import AudienceSection from "@/Components/Audience/Audience";
import Contact from "@/Components/Contact/Contact";
import CountDown from "@/Components/CountDown/CountDown";
import TimelineGallery from "@/Components/VideoGallery/Gallery";
import ImpactCard from "@/Components/ImpactCard";
import VisionariesHero from "@/Components/Visionaries/Visionaries";
import HeroSection from "@/Components/HeroSection/Section1";
import TimeLineSection from "@/Components/TimeLine/TimeLineSection";
import Preview from "@/Components/ui/Demot";
export default function Home() {
  return (
    <div className="w-full h-full m-0 p-0 relative overflow-hidden">
      <HeroSection />
      <CountDown />
      <ImpactCard />
      <VisionariesHero />
      <AudienceSection />
      <TimeLineSection />
      <Contact />
      <TimelineGallery />
      {/* <Preview /> */}
    </div>
  );
}

