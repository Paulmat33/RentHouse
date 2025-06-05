import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandlordDashboard from "./pages/Dashboard/Landlord";
import AddProperty from "./pages/Dashboard/AddProperty";
import LandlordProperties from "./pages/Dashboard/LandlordProperties";
import TenantProperties from "./pages/Dashboard/TenantProperties";
import TenantDashboard from "./pages/Dashboard/Tenant";
// import AdminDashboard from "./pages/Dashboard/Admin";
// import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/landlord" element={<LandlordDashboard />} />
        <Route path="/dashboard/landlord/properties" element={<LandlordProperties />} />
        <Route path="/dashboard/landlord/add" element={<AddProperty />} />
        <Route path="/dashboard/tenant/properties" element={<TenantProperties />} />
        <Route path="/dashboard/tenant" element={<TenantDashboard />} />
        {/* <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/property/:id" element={<PropertyDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
