import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


export default function Hero890() {
    const navigate = useNavigate();
  const imageUrl = [
    'https://images.pexels.com/photos/30972051/pexels-photo-30972051.jpeg',
    'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg',
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-secondary py-16 px-4 sm:px-8 lg:px-16 text-center">
      
      {/* Hero Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-accent mb-6">
        Unlock the World with TravelBooker
      </h1>

      {/* Hero Subtext */}
      <p className="text-lg sm:text-xl text-subText max-w-3xl mx-auto mb-12">
        Whether you're dreaming of sandy beaches, mountain adventures, or vibrant cities,
        TravelBooker helps make your perfect trip come true — stress-free, safe, and memorable.
      </p>

      {/* Image Grid */}
      <div className="grid ml-52 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
        {imageUrl.map((pic, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={pic}
              alt={`Travel Destination ${index + 1}`}
              className="w-full h-[280px] sm:h-[300px] md:h-[320px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <button
       onClick={() => navigate('/Tour')}
        className="mt-4 px-8 py-4 bg-accent text-primary font-semibold rounded hover:bg-accent-dark transition flex items-center gap-3 mx-auto text-lg">
        Explore Now
        <FontAwesomeIcon icon={faArrowRight} className="text-primary text-xl" />
      </button>
    </div>
  );
}
