import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-[#4D0000] text-white font-inter">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Navbar details (left) */}
        <div className="flex flex-col items-start gap-2 flex-1">
          <h3 className="text-xl font-bold mb-2">RentHouse</h3>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/properties" className="hover:underline">Properties</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
        {/* Social media icons (center) */}
        <div className="flex flex-row gap-6 justify-center flex-1">
          <Link to="#" aria-label="Facebook" className="hover:text-gray-300">
            <Facebook size={28} />
          </Link>
          <Link to="#" aria-label="Twitter" className="hover:text-gray-300">
            <Twitter size={28} />
          </Link>
          <Link to="#" aria-label="Instagram" className="hover:text-gray-300">
            <Instagram size={28} />
          </Link>
        </div>
        {/* Logo (right) */}
        <div className="flex flex-col items-end flex-1">
          <img src="/logo.png" alt="RentHouse Logo" className="w-24 h-auto mb-2" />
          <span className="font-bold text-lg">RentHouse</span>
        </div>
      </div>
      <hr className="border-t border-white opacity-30" />
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <span>&copy; {new Date().getFullYear()} RentHouse. All rights reserved.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;