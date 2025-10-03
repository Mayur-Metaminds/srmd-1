import { useState } from "react";
import { motion } from "framer-motion";

const timelineData = [
  { date: "August 2025", image: "/TimeLine/image1.png", title: "Lorem Ipsum 1", description: "Lorem ipsum dolor sit amet..." },
  { date: "September 2025", image: "/TimeLine/image2.png", title: "Lorem Ipsum 2", description: "Sed ut perspiciatis unde..." },
  { date: "October 2025", image: "/TimeLine/image3.png", title: "Lorem Ipsum 3", description: "But I must explain..." },
  { date: "November 2025", image: "/TimeLine/image4.png", title: "Lorem Ipsum 4", description: "At vero eos et accusamus..." },
];

const TimelineCard = ({ item }:{item:any}) => (
  <div className="flex-shrink-0 w-[300px] p-3">
    <div className="bg-[#AF212B] px-4 py-2 rounded-full text-center text-white mb-3">{item.date}</div>
    <img src={item.image} alt="timeline" className="rounded-xl w-full h-[180px] object-cover mb-3" />
    <h1 className="text-lg font-semibold text-white mb-1">{item.title}</h1>
    <p className="text-white text-sm">{item.description}</p>
  </div>
);

const TimelineTrain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cardWidth = 300; // same as TimelineCard width
  const gap = 24; // Tailwind gap-6 = 24px

  const handleWheel = (e) => {
    if (isAnimating) return;

    if (e.deltaY > 0 && currentIndex < timelineData.length - 1) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => setIsAnimating(false), 500);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="w-full h-screen flex items-center overflow-hidden" onWheel={handleWheel}>
      <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * (cardWidth + gap)}px` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {timelineData.map((item, index) => (
          <TimelineCard key={index} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default TimelineTrain;
