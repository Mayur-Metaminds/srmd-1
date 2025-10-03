"use client"
import AudienceSection from "@/Components/Audience";
import Contact from "@/Components/Contact";
import CountDown from "@/Components/CountDown";
import TimelineGallery from "@/Components/Gallery";
import ImpactCard from "@/Components/ImpactCard";
import Timeline from "@/Components/Timeline";
import VisionariesHero from "@/Components/Visionaries";
import HeroSection from "@/Components/Section1";
export default function Home() {
  return (
    <div className="w-full h-full m-0 p-0 relative overflow-hidden">
      
      {/* Responsive decorative SVG background */}
      <HeroSection />
      <CountDown />
      <ImpactCard />
      <VisionariesHero />
      <AudienceSection />
            <Timeline />
      <Contact />
      
      <TimelineGallery />
    </div>
  );
}

