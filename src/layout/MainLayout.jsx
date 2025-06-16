import { Link } from "react-router-dom";
import logo from "../assets/footerlogo.png";
import { Home, Users, Wallet, Plus, List, Eye, Wrench, Mail, Settings, UserCircle, Bell, ListCheckIcon } from "lucide-react";
import {jwtDecode} from "jwt-decode";

function MainLayout({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  let username = "";
  if (user?. fullName && user.fullName !== "User") {
    username = user.fullName;
  }else if (user?.name) {
    username = user.name;
  } else if (user?.access_token){
    try{
      const decoded =jwtDecode(user.access_token);
      username = decoded.email || "User"
    }catch (e) {
      username = "User";
    }
  }
  const role = user?.role ||user?.accountType || "landlord";

  // Landlord sidebar links
  const landlordLinks = (
    <>
      {/* Dashboard Heading */}
      <h1 className="text-[24px] font-bold mb-4">Dashboard</h1>
      <nav className="flex flex-col space-y-2 mb-8">
        <Link to="/dashboard/landlord/properties" className="flex items-center gap-2 hover:underline">
          <Home size={18} /> Property
        </Link>
        <Link to="/dashboard/landlord/tenants" className="flex items-center gap-2 hover:underline">
          <Users size={18} /> Tenants
        </Link>
        <Link to="/dashboard/landlord/finance" className="flex items-center gap-2 hover:underline">
          <Wallet size={18} /> Finance
        </Link>
      </nav>

      {/* Quick Links Heading */}
      <h2 className="text-[24px] font-bold mb-4 mt-8">Quick Links</h2>
      <nav className="flex flex-col space-y-2 mb-8">
        <Link to="/dashboard/landlord/add" className="flex items-center gap-2 hover:underline">
          <Plus size={18} /> Add Item
        </Link>
        <Link to="/dashboard/landlord/property-listing" className="flex items-center gap-2 hover:underline">
          <List size={18} /> Property List
        </Link>
        <Link to="/dashboard/landlord/view-listing" className="flex items-center gap-2 hover:">
          <Eye size={18} /> View List
        </Link>
      </nav>

      {/* Other Heading */}
      <h2 className="text-[24px] font-bold mb-4 mt-8">Other</h2>
      <nav className="flex flex-col space-y-2 mb-8">
        <Link to="/dashboard/landlord/maintenance" className="flex items-center gap-2 hover:underline">
          <Wrench size={18} /> Maintenance
        </Link>
        <Link to="/dashboard/landlord/messages" className="flex items-center gap-2 hover:underline">
          <Mail size={18} /> Messages
        </Link>
        <Link to="/dashboard/landlord/settings" className="flex items-center gap-2 hover:underline">
          <Settings size={18} /> Settings
        </Link>
      </nav>
    </>
  );

  const tenantLinks = (
    <>
      <h1 className="text-[20px] font-semibold mb-4">Tenant Dashboard</h1>
      <nav className="flex flex-col space-y-2 mb-8">
        <Link to="/dashboard/tenant/listing" className="flex items-center gap-2 hover:underline">
          <ListCheckIcon size={18} /> Listing
        </Link>
        <Link to="/dashboard/tenant/payments" className="flex items-center gap-2 hover:underline">
          <Wallet size={18} /> Payments
        </Link>
        <Link to="/dashboard/tenant/profile" className="flex items-center gap-2 hover:underline">
          <Users size={18} /> Profile
        </Link>
      </nav>

      <h2 className="text-[20px] font-semibold mb-4 mt-8">Quick Links</h2>
      <nav className="flex flex-col space-y-2 mb-8">
        <Link to="/dashboard/tenant/rent-receipt" className="flex items-center gap-2 hover:underline">
          <Plus size={18} /> Rent Receipt
        </Link>
        <Link to="/dashboard/tenant/rent-history" className="flex items-center gap-2 hover:underline">
          <List size={18} /> Rent History
        </Link>
        <Link to="/dashboard/tenant/maintenance" className="flex items-center gap-2 hover:underline">
          <Eye size={18} /> Maintenance Requests
        </Link>
      </nav>

      <h2 className="text-[20px] font-semibold mb-4 mt-8">Other</h2>
      <nav className="flex flex-col space-y-2 mb-8">
        <Link to="/dashboard/tenant/settings" className="flex items-center gap-2 hover:underline">
          <Settings size={18} /> Settings
        </Link>
        <Link to="/dashboard/tenant/messages" className="flex items-center gap-2 hover:underline">
          <Mail size={18} /> Messages
        </Link>
      </nav>
    </>
  );

  return (
    <div className="min-h-screen flex font-inter">
      <aside className="w-64 bg-[#4D0000] text-white p-6 h-screen fixed top-0 left-0 flex flex-col">
        <img src={logo} alt="RentHouse Logo" className="h-12 w-[100px] mb-6" />
        {/* Render links based on user role */}
        {role === "tenant"
          ? tenantLinks 
          : landlordLinks}
        {/* Logout */}
        <Link to="/" className="text-red-300 hover:underline">Logout</Link>
      </aside>
      
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto ml-64">
        {/* Search Bar and User Info */}
        <div className="flex items-center justify-between mb-8">
          {/* Search Bar */}
          <div className="flex items-center w-full max-w-md bg-white rounded-lg shadow px-2 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 py-2 outline-none bg-transparent"
            />
            <button className="bg-[#4D0000] text-white px-4 py-2 rounded-lg ml-2 hover:bg-[#6a1a1a]">
              Search
            </button>
          </div>
          {/* Right Side: Bell, User Pic, Username, Role */}
          <div className="flex items-center gap-4 ml-6">
            <Bell className="w-6 h-6 text-gray-600" />
            <UserCircle className="w-8 h-8 text-gray-600" />
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">{username}</span>
              <span className="text-xs text-gray-500 capitalize">{role}</span>
            </div>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
