import React, { useState } from "react";
import TourDetail from "./Practice.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


export default function PracticeCard() {
  const [selectedCategory, setSelectedCategory] = useState("Adventure");

  const filteredTours = TourDetail.filter(
    (tour) => tour.category === selectedCategory
  );

  return (
    <div className="bg-black  min-h-screen py-10 text-white">
      {/* Category Tabs */}
      <div className="flex justify-center mb-10 space-x-4">
        {["Adventure", "Treckking", "Beaches", "Heritages"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-orange-500 text-white shadow-md"
                : "bg-gray-700 text-gray-200 hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-[90%] md:w-[80%] mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {selectedCategory} Tours
        </h2>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-r from-primary to-secondary  rounded-xl shadow-lg group overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Link to={`/ShowItem/${product.id}`}>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-[220px] object-cover"
                />
              </Link>
                  <div className="absolute top-48 left-2 bg-black bg-opacity-50 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
    {product.duration}
  </div>

<div className="absolute top-2 right-2 bg-gradient-to-r from-orange-200 to-orange-400 text-black text-xs font-semibold px-2 py-1 rounded-md shadow-md inline-block">
  ⭐ {product.rating}
</div>


              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
<div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
  <FontAwesomeIcon icon={faLocationDot} className="text-red-500" />
  <span>{product.name}</span>
</div>
<p className="text-black">Lorem ipsum dolor sit amet consectetur .</p>
                <p
                  className={`text-base font-medium ${
                    product.isDiscount  ==="true" ? "text-red-500" : "text-gray-700"
                  }`}
                >
                 {product.price}/Person
                </p>


                <button
                                // <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-neutral-300 to-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:scale-95 dark:from-indigo-900 dark:to-stone-900">

                  className={`mt-4 w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    product.isAvailable ==="true"
                      ? "bg-gradient-to-r from-orange-200 to-orange-600 px-6 py-3 font-semibold text-white transition-all hover:scale-95 dark:from-orange-300 dark:to-orange-600"
                      : "bg-gray-400 text-white cursor-not-allowed"
                  }`}
                >
                  {product.isAvailable ==="true" ? "Book Now" : "Sold Out"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
