import { useState } from "react";
import ContactModal from "./ContactModal"; // we’ll create this next

function PropertyCard({ property }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src={property.image} alt="Property" className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{property.title}</h3>
        <p className="text-gray-600">{property.location}</p>
        <p className="mt-2 font-semibold text-blue-600">₦{property.price}</p>
        <p className="text-sm mt-1 text-gray-500">{property.description}</p>

        <button
          onClick={() => setShowModal(true)}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Unlock Contact
        </button>
      </div>

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default PropertyCard;
