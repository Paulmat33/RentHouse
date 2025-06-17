import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import HowItWorks from "../components/HowItWorks";
import FindHomePrompt from "../components/FindHomePrompt";
import Reviews from "../components/Reviews"
import PropertyToRent from "../components/PropertyToRent"
import bg from "../assets/bg.png";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { useState } from "react";
import { MapPinIcon, HomeIcon, BuildingOfficeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const selectOptions = [
  { label: "Location", icon: <MapPinIcon className="w-5 h-5 mr-2 text-gray-500" />, options: ["Lagos", "Abuja", "Ibadan"] },
  { label: "Type", icon: <HomeIcon className="w-5 h-5 mr-2 text-gray-500" />, options: ["Apartment", "House", "Studio"] },
  { label: "Building", icon: <BuildingOfficeIcon className="w-5 h-5 mr-2 text-gray-500" />, options: ["Building A", "Building B", "Building C"] },
];


function Landing() {
    const [values, setValues] = useState(["", "", ""]);

  return (
    <>
      <Navbar />
       <section
      className="relative min-h-screen bg-[length:100%_100%] bg-no-repeat flex items-center justify-center px-6 py-12 mb-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black/60 p-8 rounded-lg max-w-[900px] text-center text-white w-full relative z-10">
        <h1 className="text-[50px] font-bold pb-1.5 font-poppins">
          Rent Directly From Owner!
        </h1>
        <p className="text-[25px] font-normal pb-[28.8px] font-poppins">
          Modern, Well-maintained Homes with Faster Responses and Direct Leasing. No Hidden Fees.
        </p>
        <Link to="/listing">
          <button className="bg-[#4D0000] text-white px-6 py-3 rounded hover:bg-[#5A0000] font-medium text-[20px] font-poppins">
            See Available Units
          </button>
        </Link>
      </div>
      {/* Absolute search bar */}
      <div className="absolute left-1/2 bottom-[-50px] -translate-x-1/2 mb-1 z-20 w-full flex justify-center">
        <div className="flex gap-4 bg-[#9CA3AF8A]  rounded-lg px-6 py-4 items-center ">
          {selectOptions.map((opt, idx) => (
            <div key={opt.label} className="flex items-center w-[200px] bg-white rounded px-2">
              <span>{opt.icon}</span>
              <select
                value={values[idx]}
                onChange={e => setValues(v => v.map((val, i) => i === idx ? e.target.value : val))}
                className="bg-transparent outline-none border-none w-full py-2 font-poppins text-black cursor-pointer"
              >
                <option value="">{opt.label}</option>
                {opt.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
          <button
  className="bg-black text-white p-3 rounded-lg shadow hover:bg-gray-900 transition flex items-center justify-center cursor-pointer"
>
  <MagnifyingGlassIcon className="w-6 h-6" />
</button>
        </div>
      </div>
    </section>
       <HowItWorks/>   
      <PropertyToRent/>
      <Reviews />
      <FindHomePrompt/>
      <Subscribe/>
      <Footer />
    </>
  );
}

export default Landing;
