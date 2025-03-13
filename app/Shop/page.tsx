"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card.",
    Image: "/placeholder.jpg", // Replace with actual image
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card.",
    Image: "",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the third card.",
    Image: "",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the fourth card.",
    Image: "",
  },
];

export default function ScrollableCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Function to handle scrolling inside the screen
  const handleScroll = (event: WheelEvent) => {
    if (isScrolling) return; // Prevent rapid scrolling
    setIsScrolling(true);

    if (event.deltaY > 0 && currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }

    setTimeout(() => setIsScrolling(false), 600); // Delay between scrolls
  };

  // Add scroll listener when component mounts
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentIndex, isScrolling]);

  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={cards[currentIndex]?.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center"
        >
          {cards[currentIndex] && (
            <>
              {/* Background Image */}
              <Image
                src={cards[currentIndex].Image}
                alt="background"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />

              {/* Card Content */}
              <h2 className="text-4xl font-bold mt-4">
                {cards[currentIndex].title}
              </h2>
              <p className="text-gray-300 mt-2">
                {cards[currentIndex].description}
              </p>

              {/* Clickable Button */}
              <button className="relative z-[999] pointer-events-auto bg-lime-300 hover:scale-125 transition-transform duration-500 p-4 rounded-lg text-black font-bold mt-4">
                GroupBuy
              </button>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
