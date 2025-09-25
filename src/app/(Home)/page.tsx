"use client"
import AudienceSection from "@/Components/Audience";
import Contact from "@/Components/Contact";
import CountDown from "@/Components/CountDown";
import EventSection from "@/Components/Event";
import TimelineGallery from "@/Components/Gallery";
import HeroSection from "@/Components/Section1";
import VisionariesHero from "@/Components/Visionaries";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full m-0 p-0 relative">
      {/* Responsive decorative SVG background */}
      <HeroSection />
      {/* Component Sections */}
      <CountDown />
      <EventSection />
      <VisionariesHero />
      <AudienceSection />
      <Contact />
      <TimelineGallery />
    </div>
  );
}