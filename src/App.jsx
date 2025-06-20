import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandlordDashboard from "./pages/Dashboard/Landlord";
import AddProperty from "./pages/Dashboard/AddProperty";
import PropertyListing from "./pages/Dashboard/PropertyListing";
import ViewListing from "./pages/Dashboard/ViewingList";
import LandlordMessages from "./pages/Dashboard/LandlordMessages";
import Maintenance from "./pages/Dashboard/Maintenance";
import LandlordSettings from "./pages/Dashboard/LandlordSettings";
import Property from "./pages/Dashboard/Property";
import Tenant from "./pages/Dashboard/Tenant";
import Finance from "./pages/Dashboard/Finance";

// Tenant import
import TenantDashboard from "./pages/TenantDashboard/Tenant";
import TenantProperties from "./pages/TenantProperties";
import PropertyDetails from "./pages/PropertyDetails";
import Profile from "./pages/TenantDashboard/Profile";
import Listing from "./pages/TenantDashboard/Listing";
import Payment from "./pages/TenantDashboard/Payment"
import Receipt from "./pages/TenantDashboard/Receipt"
import History from "./pages/TenantDashboard/History"
import TenantMaintenance from "./pages/TenantDashboard/Maintenance"
import TenantSettings from "./pages/TenantDashboard/Settings"
import TenantMessages from "./pages/TenantDashboard/Messages"



// import TenantSignup from "./components/TenantSignup";
// import AdminDashboard from "./pages/Dashboard/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/tenant/signup" element={<TenantSignup />} /> */}
        <Route path="/dashboard/landlord" element={<LandlordDashboard />} />
        <Route path="/dashboard/landlord/property-listing" element={<PropertyListing />} />
        <Route path="/dashboard/landlord/addproperty" element={<AddProperty />} />
        <Route path="/dashboard/landlord/view-listing" element={<ViewListing />} />
        <Route path="/dashboard/landlord/messages" element={<LandlordMessages />} />
        <Route path="/dashboard/landlord/maintenance" element={<Maintenance />} />
        <Route path="/dashboard/landlord/settings" element={<LandlordSettings />} />
        <Route path="/dashboard/landlord/properties" element={<Property />} />
        <Route path="/dashboard/landlord/tenants" element={<Tenant />} />
        <Route path="/dashboard/landlord/finance" element={<Finance />} />
        {/* tenant routes */}
        <Route path="/dashboard/tenant" element={<TenantDashboard />} />
        <Route path="/dashboard/tenant/listing" element={<Listing />} />
        <Route path="/tenant/:id" element={<TenantProperties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/dashboard/tenant/profile" element={<Profile/>}/>
        <Route path="/dashboard/tenant/listing" element={<Listing/>}/>
        <Route path="/dashboard/tenant/payments" element={<Payment/>}/>
        <Route path="/dashboard/tenant/rent-receipt" element={<Receipt/>}/>
        <Route path="/dashboard/tenant/rent-history" element={<History/>}/>
        <Route path="/dashboard/tenant/maintenance" element={<TenantMaintenance/>}/>
        <Route path="/dashboard/tenant/settings" element={<TenantSettings/>}/>
        <Route path="/dashboard/tenant/messages" element={<TenantMessages/>}/>
        {/* <Route path="/dashboard/admin" element={<AdminDashboard />} /> */}
      </Routes>
     </Router>
  );
}

export default App;
