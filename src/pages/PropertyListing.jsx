import MainLayout from "../layout/MainLayout";
import { useEffect, useState } from "react";

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://house-jrep.onrender.com/properties")
      .then(res => res.json())
      .then(data => {
        setProperties(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <MainLayout>
      <div className="text-2xl font-bold mb-4">Property Listing</div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="space-y-4">
          {properties.map((property, idx) => (
            <li key={property.id || idx} className="border p-4 rounded">
              <div className="font-bold">{property.title}</div>
              <div>Type: {property.propertyType}</div>
              <div>Price: {property.rentalPrice}</div>
              <div>Description: {property.description}</div>
              <div>
                Amenities: {property.amenities && property.amenities.join(", ")}
              </div>
              <div className="flex gap-2 mt-2">
                {property.photos &&
                  property.photos.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt={`property-${i}`}
                      className="w-20 h-20 object-cover rounded"
                    />
                  ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </MainLayout>
  );
};

export default PropertyListing;
