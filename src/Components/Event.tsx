"use client";
import React from "react";
import { Sun } from "lucide-react";

const events = [
  { text: "A breathtaking musical production",svg:( <svg width="106" height="90" viewBox="0 0 106 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M105.915 20.4323C75.4332 12.9709 60.1421 11.4591 48.959 32.8697C45.7871 8.87375 34.2132 2.52241 0.932056 0.333676C-7.7894 32.9872 -5.00456 45.4201 13.3089 57.3796C-10.4918 60.6014 -16.7569 72.0944 -19.0858 104.895C15.4644 115.034 26.3234 110.634 37.4443 93.0155C41.5573 119.905 56.7053 122.497 85.8972 124.993C94.0484 93.2277 93.3508 79.1315 71.496 68.5193C98.623 64.6881 103.17 50.8952 105.915 20.4323Z" fill="#C8AD6E"/>
</svg>) },
  { text: "An interactive exhibit exploring the world of values",svg:(<svg width="154" height="110" viewBox="0 0 154 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="74.756" height="30.1336" transform="matrix(0.910304 0.413941 -0.413961 0.910295 7.47266 82.3828)" fill="#C8AD6E"/>
<rect width="74.756" height="30.1336" transform="matrix(0.910304 0.413941 -0.413961 0.910295 66.6562 59.9453)" fill="#C8AD6E"/>
<rect width="74.7546" height="30.1342" transform="matrix(0.413961 -0.910295 0.910304 0.413941 94.9297 105.578)" fill="#C8AD6E"/>
<rect width="74.7546" height="30.1342" transform="matrix(0.413961 -0.910295 0.910304 0.413941 35.7109 128.016)" fill="#C8AD6E"/>
</svg>
) },
  { text: "A celebration of 21 years of a global movement",svg:( <svg width="100" height="63" viewBox="0 0 100 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="78.6665" height="10.0514" transform="matrix(0.855558 -0.517708 0.517729 0.855544 0.0351562 41.3594)" fill="#C8AD6E"/>
<rect width="78.6665" height="10.0514" transform="matrix(0.855558 -0.517708 0.517729 0.855544 9.17578 56.4609)" fill="#C8AD6E"/>
<rect width="78.6665" height="10.0514" transform="matrix(0.855558 -0.517708 0.517729 0.855544 18.3203 71.5547)" fill="#C8AD6E"/>
<rect width="78.6665" height="10.0514" transform="matrix(0.855558 -0.517708 0.517729 0.855544 27.4531 86.6562)" fill="#C8AD6E"/>
</svg>
) },
  { text: "The unveiling of the next chapter together",svg:(<svg width="141" height="69" viewBox="0 0 141 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M102.493 6.47656L80.7783 31.7391L74.6982 0.601562H66.3019L59.3532 31.7391L39.3758 6.47656L32.4271 10.5891L42.2711 42.3141L11.5811 31.7391L7.23819 37.9078L29.2423 60.2328L0 66.9891L0.289528 74.6266L32.4271 81.0891L7.23819 103.708L11.5811 110.464L42.2711 99.3016L32.4271 130.733L39.3758 135.433L59.3532 110.464L66.3019 141.602H74.6982L80.7783 110.464L102.493 135.433L108.862 130.733L98.4394 99.3016L129.998 110.464L133.472 103.708L108.862 81.0891L141 74.6266V66.9891L108.862 60.2328L133.472 37.9078L129.419 31.4453L98.4394 42.3141L108.862 10.5891L102.493 6.47656Z" fill="#C8AD6E"/>
</svg>
) },
];

export default function EventSection() {
  return (
    <section className="w-full py-10 flex flex-col items-center bg-white px-4" >
      {/* Badge */}
      <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#293464] text-white font-medium mb-8 text-sm sm:text-base">
                    <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="16.8919" cy="10.7157" rx="7.78639" ry="7.78604" fill="#C8AD6E" />
                        <path d="M11.3198 1.14884L8.92157 3.93883L8.25005 0.5H7.32272L6.55528 3.93883L4.34887 1.14884L3.58142 1.60302L4.66864 5.10674L1.27908 3.93883L0.799424 4.62011L3.22967 7.08569L0 7.83185L0.031977 8.67534L3.58142 9.38906L0.799424 11.8871L1.27908 12.6332L4.66864 11.4005L3.58142 14.8717L4.34887 15.3908L6.55528 12.6332L7.32272 16.0721H8.25005L8.92157 12.6332L11.3198 15.3908L12.0233 14.8717L10.8722 11.4005L14.3577 12.6332L14.7414 11.8871L12.0233 9.38906L15.5728 8.67534V7.83185L12.0233 7.08569L14.7414 4.62011L14.2937 3.90639L10.8722 5.10674L12.0233 1.60302L11.3198 1.14884Z" fill="#F6F4EC" />
                    </svg>
        <span>One Day. A Lifetime of Impact</span>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {events.map((event, i) => (
          <EventCard key={i} text={event.text} svg={event.svg} />
        ))}
      </div>
    </section>
  );
}

function EventCard({ text,svg }: { text: string,svg:React.ReactNode}) {
  return (
    <div className="relative bg-[#FED543] rounded-2xl p-6 pb-0 sm:p-8 flex items-center justify-center text-center shadow-md h-[305px] sm:h-40 lg:h-44">
      <p className="text-gray-900 font-medium text-sm sm:text-base lg:text-lg leading-snug">
        {text}
      </p>
      {/* Decorative shape placeholder */}
      <div className="absolute bottom-5 left-2 opacity-30">
       
      {svg}
      </div>
    </div>
  );
}
