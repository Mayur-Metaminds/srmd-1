"use client";
import { Play } from "lucide-react";

export default function TimelineGallery() {
  const cards = [
    { title: "Lorem ipsum non", year: "2025" },
    { title: "Lorem ipsum non", year: "2025" },
    { title: "Lorem ipsum non", year: "2025" },
    { title: "Lorem ipsum non", year: "2025" },
    { title: "Lorem ipsum non", year: "2025" },
  ];

  return (
    <section className="relative w-full px-4 py-12 md:px-8 lg:px-16 bg-white">
      {/* Decorative Wave Background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-full h-full bg-[url('/yellow-wave.svg')] bg-cover bg-center opacity-90" />
      </div>

      {/* Top Text Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-block bg-[#1D2B53] text-white text-xs md:text-sm px-4 py-1 rounded-full mb-4">
          The Ripple Has Already Begun
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
          Witness the build-up. From practice rehearsals to sneak peeks at
          booths{" "}
          <span className="text-gray-400 font-normal">
            — this is your front-row seat to the movement.
          </span>
        </h2>
        <p className="mt-3 text-gray-600 font-medium text-sm md:text-base">
          @SRMD.Divinetouch #QuestForHappiness
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white shadow-sm rounded-lg overflow-hidden"
          >
            {/* Video Thumbnail */}
            <div className="w-full aspect-[4/5] bg-gray-200 flex items-center justify-center relative">
              <Play size={40} className="text-gray-500" />
            </div>

            {/* Caption */}
            <div className="flex justify-between w-full px-2 py-2 text-sm text-gray-700">
              <span>{card.title}</span>
              <span className="text-gray-500">{card.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
