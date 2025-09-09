"use client";
import React from "react";
import { Sun } from "lucide-react";
import Image from "next/image";

const audience = [
  {
    title: "Youth Mentors & Thought Leaders",
    desc: "You aim to inspire and shape the next generation.",
  },
  { title: "Parent" },
  { title: "Child Development Expert" },
  { title: "School Leader & Founder" },
  { title: "Educator" },
];

export default function AudienceSection() {
  return (
    <section className="relative w-full  py-12 px-6 md:px-12 lg:px-20 flex flex-col items-center" style={{background:"linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,.85)), url('/Eventbg.png')"}} >
      {/* Badge */}
      <div className="flex items-start gap-2 px-4 py-1 rounded-full bg-indigo-900 text-white font-medium text-xs sm:text-sm mb-6">
        <Sun size={14} className="text-yellow-400" />
        <span>This is for you if ...</span>
      </div>

      {/* Heading */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Lorem typesetting
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            industry. Lorem Ipsum
          </p>
        </div>
      </div>

      {/* Audience List */}
      <div className="w-full max-w-3xl space-y-6">
        {audience.map((item, i) => (
          <AudienceItem key={i} {...item} />
        ))}
      </div>

      {/* Decorative Shapes */}
      <div className="absolute bottom-10 left-6 w-40 sm:w-48 lg:w-56">
        <Image
          src="/audience.png" // ✅ place your PNG in /public/shapes.png
          alt="Decorative Shapes"
          width={200}
          height={200}
        />
      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-md shadow-md transition">
          Know More
        </button>
      </div>
    </section>
  );
}

function AudienceItem({
  title,
  desc,
}: {
  title: string;
  desc?: string;
}) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <div className="flex items-start gap-2">
        <span className="text-yellow-500 text-lg">•</span>
        <div>
          <p className="font-semibold text-gray-900">{title}</p>
          {desc && <p className="text-gray-600 text-sm mt-1">{desc}</p>}
        </div>
      </div>
    </div>
  );
}
