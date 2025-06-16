import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandlordDashboard from "./pages/Dashboard/Landlord";
import TenantDashboard from "./pages/Dashboard/Tenant";
import AddProperty from "./pages/Dashboard/AddProperty";
import TenantProperties from "./pages/TenantProperties";
import PropertyListing from "./pages/Dashboard/PropertyListing";
import ViewListing from "./pages/Dashboard/ViewingList";
import Listing from "./pages/Listing";
import PropertyDetails from "./pages/PropertyDetails";
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
        {/* tenant routes */}
        <Route path="/dashboard/tenant" element={<TenantDashboard />} />
        <Route path="/dashboard/tenant/listing" element={<Listing />} />
        <Route path="/tenant/:id" element={<TenantProperties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        {/* <Route path="/dashboard/admin" element={<AdminDashboard />} /> */}
      </Routes>
     </Router>
  );
}

export default App;
