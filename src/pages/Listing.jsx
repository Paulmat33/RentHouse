import { Search, BedDouble, Bath, Ruler } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=600&q=80",
];

export default function Listing() {
  const [current, setCurrent] = useState(0);

  return (
    <MainLayout>
    <div className="p-8">
      {/* Top row: Filter h1 and More select */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="m-0 text-2xl font-bold">Filter</h1>
        <select className="border rounded px-3 py-2 font-semibold">
          <option>More</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>

      {/* Second row: Search input and Sort By select */}
      <div className="flex items-center justify-between mb-8">
        {/* Search Input 1 */}
        <div className="relative w-[70%]">
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-3 py-2 border rounded w-full font-semibold"
          />
          <span className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <Search className="w-4 h-4" />
          </span>
        </div>
        {/* Sort By select */}
        <select className="border rounded px-3 py-2 w-[20%] font-semibold">
          <option>Sort By</option>
          <option>Price</option>
          <option>Date</option>
        </select>
      </div>

      {/* Carousel Card */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="w-full max-w-md lg:max-w-[100%] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Carousel Image */}
          <div className="relative">
            <img
              src={images[current]}
              alt="Property"
              className="w-full h-56 object-cover"
            />
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full border border-white transition-all cursor-pointer ${
                    current === idx ? "bg-[#4D0000]" : "bg-white opacity-70"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Amount under image */}
          <div className="p-0 pt-2 bg-[#D9D9D9]">
            <span className="inline-block text-black pl-2 py-1 rounded text-sm font-semibold">
              ₦3,000,000 / annum
            </span>
            {/* Property Info */}

            <div className="text-lg font-bold mb-1 pl-2">
              4 Bedroom Duplex, Ikeja, Lagos
            </div>
            {/* Icons Row */}
            <div className="flex items-center gap-6 text-gray-600 text-sm mb-4 pl-2">
              <span className="flex items-center gap-1">
                <BedDouble className="w-4 h-4" /> 4bds
              </span>
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" /> 5
              </span>
              <span className="flex items-center gap-1">
                <Ruler className="w-4 h-4" /> 2500 sqft
              </span>
            </div>
            {/* View Property Button */}
            <Link to="/property/:id">
            <button className="w-full bg-[#4D0000] text-white py-2 rounded font-semibold transition cursor-pointer">
              View Property
            </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-md lg:max-w-[100%] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Carousel Image */}
          <div className="relative">
            <img
              src={images[current]}
              alt="Property"
              className="w-full h-56 object-cover"
            />
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full border border-white transition-all cursor-pointer ${
                    current === idx ? "bg-[#4D0000]" : "bg-white opacity-70"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Amount under image */}
          <div className="p-0 pt-2 bg-[#D9D9D9]">
            <span className="inline-block text-black pl-2 py-1 rounded text-sm font-semibold">
              ₦3,000,000 / annum
            </span>
            {/* Property Info */}

            <div className="text-lg font-bold mb-1 pl-2">
              4 Bedroom Duplex, Ikeja, Lagos
            </div>
            {/* Icons Row */}
            <div className="flex items-center gap-6 text-gray-600 text-sm mb-4 pl-2">
              <span className="flex items-center gap-1">
                <BedDouble className="w-4 h-4" /> 4bds
              </span>
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" /> 5
              </span>
              <span className="flex items-center gap-1">
                <Ruler className="w-4 h-4" /> 2500 sqft
              </span>
            </div>
            {/* View Property Button */}
            <Link to="/tenant/:id">
            <button className="w-full bg-[#4D0000] text-white py-2 rounded font-semibold transition cursor-pointer">
              View Property
            </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-md lg:max-w-[100%] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Carousel Image */}
          <div className="relative">
            <img
              src={images[current]}
              alt="Property"
              className="w-full h-56 object-cover"
            />
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full border border-white transition-all cursor-pointer ${
                    current === idx ? "bg-[#4D0000]" : "bg-white opacity-70"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Amount under image */}
          <div className="p-0 pt-2 bg-[#D9D9D9]">
            <span className="inline-block text-black pl-2 py-1 rounded text-sm font-semibold">
              ₦3,000,000 / annum
            </span>
            {/* Property Info */}

            <div className="text-lg font-bold mb-1 pl-2">
              4 Bedroom Duplex, Ikeja, Lagos
            </div>
            {/* Icons Row */}
            <div className="flex items-center gap-6 text-gray-600 text-sm mb-4 pl-2">
              <span className="flex items-center gap-1">
                <BedDouble className="w-4 h-4" /> 4bds
              </span>
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" /> 5
              </span>
              <span className="flex items-center gap-1">
                <Ruler className="w-4 h-4" /> 2500 sqft
              </span>
            </div>
            {/* View Property Button */}
            <Link to="/tenant/:id">
            <button className="w-full bg-[#4D0000] text-white py-2 rounded font-semibold transition cursor-pointer">
              View Property
            </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-md lg:max-w-[100%] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Carousel Image */}
          <div className="relative">
            <img
              src={images[current]}
              alt="Property"
              className="w-full h-56 object-cover"
            />
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full border border-white transition-all cursor-pointer ${
                    current === idx ? "bg-[#4D0000]" : "bg-white opacity-70"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Amount under image */}
          <div className="p-0 pt-2 bg-[#D9D9D9]">
            <span className="inline-block text-black pl-2 py-1 rounded text-sm font-semibold">
              ₦3,000,000 / annum
            </span>
            {/* Property Info */}

            <div className="text-lg font-bold mb-1 pl-2">
              4 Bedroom Duplex, Ikeja, Lagos
            </div>
            {/* Icons Row */}
            <div className="flex items-center gap-6 text-gray-600 text-sm mb-4 pl-2">
              <span className="flex items-center gap-1">
                <BedDouble className="w-4 h-4" /> 4bds
              </span>
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" /> 5
              </span>
              <span className="flex items-center gap-1">
                <Ruler className="w-4 h-4" /> 2500 sqft
              </span>
            </div>
            {/* View Property Button */}
            <Link to="/tenant/:id">
            <button className="w-full bg-[#4D0000] text-white py-2 rounded font-semibold transition cursor-pointer">
              View Property
            </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-md lg:max-w-[100%] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Carousel Image */}
          <div className="relative">
            <img
              src={images[current]}
              alt="Property"
              className="w-full h-56 object-cover"
            />
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full border border-white transition-all cursor-pointer ${
                    current === idx ? "bg-[#4D0000]" : "bg-white opacity-70"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Amount under image */}
          <div className="p-0 pt-2 bg-[#D9D9D9]">
            <span className="inline-block text-black pl-2 py-1 rounded text-sm font-semibold">
              ₦3,000,000 / annum
            </span>
            {/* Property Info */}

            <div className="text-lg font-bold mb-1 pl-2">
              4 Bedroom Duplex, Ikeja, Lagos
            </div>
            {/* Icons Row */}
            <div className="flex items-center gap-6 text-gray-600 text-sm mb-4 pl-2">
              <span className="flex items-center gap-1">
                <BedDouble className="w-4 h-4" /> 4bds
              </span>
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" /> 5
              </span>
              <span className="flex items-center gap-1">
                <Ruler className="w-4 h-4" /> 2500 sqft
              </span>
            </div>
            {/* View Property Button */}
            <Link to="/tenant/:id">
            <button className="w-full bg-[#4D0000] text-white py-2 rounded font-semibold transition cursor-pointer">
              View Property
            </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-md lg:max-w-[100%] bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Carousel Image */}
          <div className="relative">
            <img
              src={images[current]}
              alt="Property"
              className="w-full h-56 object-cover"
            />
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full border border-white transition-all cursor-pointer ${
                    current === idx ? "bg-[#4D0000]" : "bg-white opacity-70"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Amount under image */}
          <div className="p-0 pt-2 bg-[#D9D9D9]">
            <span className="inline-block text-black pl-2 py-1 rounded text-sm font-semibold">
              ₦3,000,000 / annum
            </span>
            {/* Property Info */}

            <div className="text-lg font-bold mb-1 pl-2">
              4 Bedroom Duplex, Ikeja, Lagos
            </div>
            {/* Icons Row */}
            <div className="flex items-center gap-6 text-gray-600 text-sm mb-4 pl-2">
              <span className="flex items-center gap-1">
                <BedDouble className="w-4 h-4" /> 4bds
              </span>
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" /> 5
              </span>
              <span className="flex items-center gap-1">
                <Ruler className="w-4 h-4" /> 2500 sqft
              </span>
            </div>
            {/* View Property Button */}
            <Link to="/tenant/:id">
            <button className="w-full bg-[#4D0000] text-white py-2 rounded font-semibold transition cursor-pointer">
              View Property
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}
