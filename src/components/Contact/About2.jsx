import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About2() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4 sm:px-6 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white">About <span className="text-accent">Us</span></h2>
        <p className="mt-4 text-lg text-subText max-w-2xl mx-auto">
          We’re a dynamic group of individuals passionate about delivering unforgettable travel experiences.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000"
            alt="Travel about"
            className="rounded-xl w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-5">
          <h3 className="text-3xl font-semibold text-white">Elevate your trip with a travel expert</h3>
          <p className="text-subText">
            From hidden gems to iconic destinations, we curate and personalize travel plans just for you. Whether it’s your first visit or your fifth, we ensure each journey is better than the last.
          </p>

          <h4 className="text-lg font-medium text-gray-300">What we offer:</h4>
          <ul className="list-disc pl-5 text-subText space-y-1">
            <li>Custom itineraries and personal travel advisors</li>
            <li>Local expertise and 24/7 support</li>
            <li>Exclusive hotel, show, and restaurant recommendations</li>
          </ul>

          <button
            onClick={() => navigate('/aboutdetail')}
            className="mt-6 px-6 py-3 bg-accent text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            Start Here
          </button>
        </div>
      </div>
    </div>
  );
}
