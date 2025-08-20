// Carousel.jsx
import React, { useState, useEffect } from 'react';

// Slide data: each slide has a title and an image URL
const slides = [
  {
    title: "Trekking Tour",
    img: "/src/assets/carousel/i1.jpg",
  },
  {
    title: "Explore the City",
    img: "/src/assets/carousel/i2.jpg",
  },
  {
    title: " Mountain Adventures",
    img: "/src/assets/carousel/i3.jpg",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0); // Step 1: Track which slide is active

  // Step 2: Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length); // Move to next slide
    }, 3000); // every 3 seconds

    return () => clearInterval(interval); // cleanup when component unmounts
  }, []);

  return (
    <div className="relative w-[500px] h-[580px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0  flex items-center justify-center">
            <h2 className="text-white text-3xl mt-100px md:text-5xl font-bold">{slide.title}</h2>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
