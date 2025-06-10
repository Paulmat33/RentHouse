import MainLayout from "../../layout/MainLayout";
import { Bell, UserCircle, DollarSign, AlertTriangle, XCircle } from "lucide-react";
import { useUser } from "../../context/UserContext";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend, ChartDataLabels);

function LandlordDashboard() {
  const { user } = useUser() || {};
  const username = user?.name || "Landlord";
  const role = user?.role || "landlord";

  // Bar chart data
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Monthly Income",
        data: [5000, 5200, 4800, 5300, 5500],
        backgroundColor: "#2563eb",
        
      },
      {
        label: "Monthly Expense",
        data: [2000, 2100, 1900, 2200, 2300],
        backgroundColor: "#dc2626",
        
      },
    ],
  };

  const barOptions = {
    indexAxis: "y", // <-- This makes the bar chart horizontal
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          padding: 30, // space around legend items
          boxWidth: 30, // optional: makes legend squares bigger
        },
        // Add padding to the legend container itself
        // Chart.js v4+ supports this:
        padding: {
          top: 30, // adds padding above the legend
        },
      },
      datalabels: {
        display: false,
        anchor: "end",
        align: "right",
        color: "#222",
        font: { weight: "bold" },
        formatter: (value) => `$${value}`,
      },
    },
    scales: {
      x: { beginAtZero: true },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  // Doughnut chart data
  const doughnutData = {
    labels: ["Maintenance", "Utilities", "Taxes", "Other"],
    datasets: [
      {
        data: [1200, 800, 400, 200],
        backgroundColor: ["#2563eb", "#f59e42", "#10b981", "#f43f5e"],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    cutout: "70%", // Reduce doughnut thickness
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "rect", // Square legend
          boxHeight: 30,      // <-- Increase legend item height (default is 12)
          boxWidth: 30,       // (optional) make the box wider too
          padding: 30,        // (optional) increase space between legend items
        },
      },
      datalabels: {
        display: false
      }
    },
  };

  return (
    <MainLayout>
      {/* Top Bar */}
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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Property */}
        <div className="bg-[#E6F0FF] rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-lg font-semibold text-gray-700 mb-2">Total Property</span>
          <span className="text-3xl font-bold text-[#000000] mb-1">20</span>
          <span className="text-sm text-gray-500">3 added today</span>
        </div>
        {/* Total Tenants */}
        <div className="bg-[#E6F0FF] rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-lg font-semibold text-gray-700 mb-2">Total Tenants</span>
          <span className="text-3xl font-bold text-[#000000] mb-1">15</span>
          <span className="text-sm text-[#388E3C]">Occupied Units</span>
        </div>
        {/* Total Income */}
        <div className="bg-[#E6F0FF] rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-lg font-semibold text-gray-700 mb-2">Total Income</span>
          <span className="text-3xl font-bold text-[#000000] mb-1">$5,000</span>
          <span className="text-sm text-[#F6C80D]">Net Income</span>
        </div>
      </div>

      {/* Charts Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Bar Chart */}
        <div className="bg-white rounded-lg shadow p-6 flex-1">
          <h2 className="text-xl font-bold mb-2">Revenue Overview</h2>
          <p className="text-gray-500 mb-4 text-sm">Report from Jan-25 - May-25</p>
          <Bar data={barData} options={barOptions} plugins={[ChartDataLabels]} />
        </div>
        {/* Doughnut Chart */}
        <div className="bg-white rounded-lg shadow p-6 flex-1 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Monthly Property Expenses</h2>
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
      </div>

       {/* Table Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8 font-inter">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold mb-4">Property Management</h2>
          <button className="text-[#000000] hover:underline">See More</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left font-semibold border border-gray-300">Property</th>
                <th className="px-4 py-2 text-left font-semibold border border-gray-300">Tenant</th>
                <th className="px-4 py-2 text-left font-semibold border border-gray-300">Rent Due</th>
                <th className="px-4 py-2 text-left font-semibold border border-gray-300">Status</th>
                <th className="px-4 py-2 text-left font-semibold border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300">36 Mariam  St.</td>
                <td className="px-4 py-2 border border-gray-300">Grace Steve</td>
                <td className="px-4 py-2 border border-gray-300">#800,000</td>
                <td className="px-4 py-2 border border-gray-300 flex items-center gap-1 text-green-600">
                  <DollarSign size={16} /> Paid
                </td>
                <td className="px-4 py-2 border border-gray-300">Message</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">11 Awo Lane.</td>
                <td className="px-4 py-2 border border-gray-300">Tunde Adeyemi</td>
                <td className="px-4 py-2 border border-gray-300">#500,000</td>
                <td className="px-4 py-2 border border-gray-300 flex items-center gap-1 text-yellow-600">
                  <AlertTriangle size={16} /> Late
                </td>
                <td className="px-4 py-2 border border-gray-300">Remind</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">3a Golden Rd</td>
                <td className="px-4 py-2 border border-gray-300">Vacant</td>
                <td className="px-4 py-2 border border-gray-300">-----</td>
                <td className="px-4 py-2 border border-gray-300 flex items-center gap-1 text-red-600">
                  <XCircle size={16} /> Vacant
                </td>
                <td className="px-4 py-2 border border-gray-300">Message</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}

export default LandlordDashboard;
