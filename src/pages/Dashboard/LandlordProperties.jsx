import MainLayout from "../../layout/MainLayout";
import PropertyCard from "../../components/PropertyCard";
import { useProperties } from "../../context/PropertyContext";


// const mockProperties = [
//     {
//         title: "2 Bedroom Flat",
//         location: "Lekki Phase 1, Lagos",
//         price: "750000",
//         description: "Spacious and modern 2 bedroom apartment close to the express.",
//         image: "https://source.unsplash.com/400x300/?house",
//     },
//   {
//     title: "Mini Flat",
//     location: "Yaba, Lagos",
//     price: "450000",
//     description: "Affordable mini flat suitable for students or young workers.",
//     image: "https://source.unsplash.com/400x300/?apartment",
// },
// ];

function LandlordProperties() {
    const { properties } = useProperties();
    
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-6">My Properties</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties?.map((p, i) => <PropertyCard key={i} property={p} />)}
      </div>
    </MainLayout>
  );
}

export default LandlordProperties;
