import { Link } from "react-router-dom";
import logo from "../assets/rent-logo.png"; 

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 font-poppins">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        <img src={logo} alt="Logo" className="w-[77px] h-[60px] inline-block mr-2" />
      </Link>
      <div className="flex space-x-6 font-medium text-[20px] text-[#000000]">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link to="/properties" className="text-gray-700 hover:text-blue-600">
          Properties
        </Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-600">
          Services
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">
          About Us
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">
          Contact Us
        </Link>
      </div>
      <div className="space-x-4">
        <Link to="/login" className="bg-[#4D0000] text-white px-4 py-2 rounded hover:bg-[#5A0000] font-medium text-[20px]">
          Register
        </Link>
        <Link to="/signup" className="bg-[#00000080] text-[#000000] px-4 py-2 rounded font-medium text-[20px]">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
