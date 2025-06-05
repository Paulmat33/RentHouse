import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext"; // we’ll create this next

function MainLayout({ children }) {
  const { user } = useUser(); // user.role = landlord | tenant | admin

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-blue-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-10">RentHouse</h2>
        <nav className="space-y-4">
          {user?.role === "landlord" && (
            <>
              <Link to="/dashboard/landlord">Dashboard</Link>
              <Link to="/dashboard/landlord/properties">My Properties</Link>
              <Link to="/dashboard/landlord/add">Add Property</Link>
            </>
          )}

          {user?.role === "tenant" && (
            <>
              <Link to="/dashboard/tenant">Dashboard</Link>
              <Link to="/dashboard/tenant/properties">Browse Properties</Link>
            </>
          )}

          <Link to="/" className="text-red-300">Logout</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">{children}</main>
    </div>
  );
}

export default MainLayout;












// import { Link } from "react-router-dom";

// function MainLayout({ children }) {
//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-700 text-white flex flex-col p-6">
//         <h2 className="text-2xl font-bold mb-10">RentHouse</h2>
//         <nav className="space-y-4">
//           {/* <Link to="/dashboard/landlord" className="hover:underline">Dashboard</Link>
//           <Link to="/dashboard/landlord/properties" className="hover:underline">My Properties</Link>
//           <Link to="/dashboard/landlord/add" className="hover:underline">Add Property</Link>
//           <Link to="/dashboard/landlord/interests" className="hover:underline">Interested Tenants</Link> */}
//           <Link to="/dashboard/tenant/properties" className="hover:underline">Browse Properties</Link>
//           <Link to="/" className="hover:underline text-red-300">Logout</Link>
//         </nav>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">{children}</main>
//     </div>
//   );
// }

// export default MainLayout;
