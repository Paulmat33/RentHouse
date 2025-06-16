import MainLayout from "../layout/MainLayout";
import PropertyCard from "../components/PropertyCard";
// import { useProperties } from "../context/PropertyContext";

function TenantProperties() {
  // const { properties } = useProperties();

  return (
    <MainLayout>
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Available Properties
        </h2>

        {properties.length === 0 ? (
          <p className="text-gray-600">
            No properties listed yet. Check back later!
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p, i) => (
              <PropertyCard key={i} property={p} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default TenantProperties;
