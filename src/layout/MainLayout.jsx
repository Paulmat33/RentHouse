import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import logo from "../assets/footerlogo.png";
import { Home, Users, Wallet, Plus, List, Eye, Wrench, Mail, Settings } from "lucide-react";

function MainLayout({ children }) {
  const { user } = useUser(); // Make sure user has a 'role' property

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

  // Admin sidebar links (example, adjust routes as needed)
  const adminLinks = (
    <>
      <h1 className="text-[24px] font-bold mb-4">Admin Dashboard</h1>
      <nav className="flex flex-col space-y-2 mb-8">
        <Link to="/dashboard/admin/overview" className="flex items-center gap-2 hover:underline">
          <Home size={18} /> Overview
        </Link>
        <Link to="/dashboard/admin/users" className="flex items-center gap-2 hover:underline">
          <Users size={18} /> Users
        </Link>
        <Link to="/dashboard/admin/finance" className="flex items-center gap-2 hover:underline">
          <Wallet size={18} /> Finance
        </Link>
      </nav>

      <h2 className="text-[24px] font-bold mb-4 mt-8">Quick Links</h2>
      <nav className="flex flex-col space-y-2 mb-8">
        <Link to="/dashboard/admin/add-user" className="flex items-center gap-2 hover:underline">
          <Plus size={18} /> Add User
        </Link>
        <Link to="/dashboard/admin/user-list" className="flex items-center gap-2 hover:underline">
          <List size={18} /> User Listing
        </Link>
        <Link to="/dashboard/admin/activity" className="flex items-center gap-2 hover:underline">
          <Eye size={18} /> View Activity
        </Link>
      </nav>

      <h2 className="text-[24px] font-bold mb-4 mt-8">Other</h2>
      <nav className="flex flex-col space-y-2 mb-8">
        <Link to="/dashboard/admin/settings" className="flex items-center gap-2 hover:underline">
          <Settings size={18} /> Settings
        </Link>
        <Link to="/dashboard/admin/messages" className="flex items-center gap-2 hover:underline">
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
        {user?.role === "admin" ? adminLinks : landlordLinks}
        {/* Logout */}
        <Link to="/" className="text-red-300 hover:underline">Logout</Link>
      </aside>
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto ml-64">{children}</main>
    </div>
  );
}

export default MainLayout;
