import MainLayout from "../../layout/MainLayout";

function LandlordDashboard() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome, Landlord!</h1>
      <p className="text-gray-600">
        Here you can manage your properties, view tenant interest, and more.
      </p>
    </MainLayout>
  );
}

export default LandlordDashboard;
