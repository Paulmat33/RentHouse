import React from "react";
import { Link } from "react-router-dom"



function FindHomePrompt() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 font-poppins">
        Ready To Find Your New Home ?
      </h2>
      <p className="text-base md:text-lg text-center mb-8 text-[#222] font-poppins">
        Join thousands of happy tenants who found&nbsp;
        their perfect home
      </p>
      <div className="flex gap-6">
        <Link to="/signup">
        <button className="bg-[#4D0000] text-white font-bold text-lg px-8 py-3 rounded transition font-inter cursor-pointer">
          I’m a Tenant
        </button>
        </Link>
        <Link to="/signup">
        <button className="border-2 border-[#4D0000] text-[#4D0000] font-bold text-lg px-8 py-3 rounded transition  font-inter cursor-pointer ">
          I’m a Landlord
        </button>
        </Link>
      </div>
    </section>
  );
}
export default FindHomePrompt;