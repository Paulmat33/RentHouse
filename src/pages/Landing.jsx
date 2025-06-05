import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// import HowItWorks from "../components/HowItWorks";
import Reviews from "../components/Reviews"
import PropertyToRent from "../components/PropertyToRent"
import bg from "../assets/bg.png";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <section className="flex min-h-screen items-start justify-between px-6 py-12 ">
        <div className="max-w-[500px]">
          <h1 className="text-[50px] font-bold pb-1.5 font-poppins ">Rent Directly From Owner!</h1>
          <p className="text-[25px] font-normal pb-[28.8px] font-poppins ">Modern, Well maintained Homes with Faster Responses and Direct Leasing. No Hidden Fees</p>
          <button className="bg-[#4D0000] text-white px-6 py-3 rounded hover:bg-[#5A0000] font-medium text-[20px] font-poppins">
            <Link to="#">See Available Units</Link>
          </button>
        </div>

        <img src={bg} alt="Rent Directly from Owner" className="h-[500px] w-[55%] object-fit" />

      </section>

      <PropertyToRent/>
      <Reviews />
      <Subscribe/>
      <Footer />
    </>
  );
}

export default Landing;
