import MainLayout from "../../layout/MainLayout";

function TenantDashboard() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome, Tenant!</h1>
      <p className="text-gray-600">
        Browse and connect with verified landlords in your area.
      </p>
    </MainLayout>
  );
}

export default TenantDashboard;
