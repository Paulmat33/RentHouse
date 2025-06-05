import { useState } from "react";
import { Heart, BedDouble, Toilet, UtensilsCrossed } from "lucide-react";
import house1 from "../assets/house-1.png";
import house2 from "../assets/house-2.png";
// import house3 from "../assets/house-3.png";

const dummyProperties = [
  {
    image: house1,
    town: "Ikeja",
    state: "Lagos",
    amount: "500,000",
    description: [
      { icon: <BedDouble size={18} className="inline mr-1" />, label: "1 Bed" },
      { icon: <Toilet size={18} className="inline mr-1" />, label: "2 Bth" },
      { icon: <UtensilsCrossed size={18} className="inline mr-1" />, label: "1 Kitchen" },
    ],
  },
  {
    image: house2,
    town: "Lekki",
    state: "Lagos",
    amount: "800,000",
    description: [
      { icon: <BedDouble size={18} className="inline mr-1" />, label: "2 Bed" },
      { icon: <Toilet size={18} className="inline mr-1" />, label: "3 Bth" },
      { icon: <UtensilsCrossed size={18} className="inline mr-1" />, label: "1 Kitchen" },
    ],
  },
  {
    image: house2,
    town: "Ojo",
    state: "Lagos",
    amount: "800,000",
    description: [
      { icon: <BedDouble size={18} className="inline mr-1" />, label: "5 Bed" },
      { icon: <Toilet size={18} className="inline mr-1" />, label: "3 Bth" },
      { icon: <UtensilsCrossed size={18} className="inline mr-1" />, label: "2 Kitchen" },
    ],
  },
  {
    image: house2,
    town: "Ojo",
    state: "Lagos",
    amount: "800,000",
    description: [
      { icon: <BedDouble size={18} className="inline mr-1" />, label: "5 Bed" },
      { icon: <Toilet size={18} className="inline mr-1" />, label: "3 Bth" },
      { icon: <UtensilsCrossed size={18} className="inline mr-1" />, label: "2 Kitchen" },
    ],
  },
  // Add more dummy properties as needed
];

function PropertyCard({ image, town, state, amount, description }) {
  const [loved, setLoved] = useState(false);

  return (
    <div className="bg-[#D9D9D9] rounded-lg shadow w-[250px]">
      <div>
        <img
          src={image}
          alt="Property"
          className="w-full h-[200px] object-fit rounded-md mb-3"
        />
      </div>
      <div className="px-2">
        <div className="text-lg text-[#000000] font-normal flex items-center justify-between mt-1 mb-4">
          {town}, {state}
          <span className="text-[#000000] font-bold text-xl">₦{amount}</span>
        </div>
        <div className="flex gap-2 text-[#000000] text-sm mb-4">
          {description.map((item, idx) => (
            <span key={idx} className="flex items-center gap-1">
              {item.icon}
              {item.label}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-1 mb-2">
          <button className="w-[70%] bg-[#4D0000] text-white py-2 rounded hover:bg-blue-700 transition">
            View Property
          </button>
          <button onClick={() => setLoved(!loved)} aria-label="Love" className="cursor-pointer">
            <Heart
              size={28}
              className={
                loved ? "stroke-red-500 fill-red-500" : "stroke-gray-400"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}

function PropertyToRent() {
  return (
    <>
      <h1 className="text-center font-bold text-[36px]">Property To Rent</h1>
      <div className="flex justify-end px-8">
        <button className="border-0 text-[#000000] text-[24px] font-bold underline cursor-pointer">
          See All
        </button>
      </div>
      <div className="flex gap-8 flex-wrap justify-center font-inter">
        {dummyProperties.map((property, idx) => (
          <PropertyCard key={idx} {...property} />
        ))}
      </div>
    </>
  );
}
export default PropertyToRent;
