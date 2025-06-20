import { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../../layout/MainLayout";

const getProperties = async () => {
  const response = await axios.get('https://house-jrep.onrender.com/properties');
  return response.data;
};
const token = localStorage.getItem("access_token");

function PropertyListing() {
  const [properties, setProperties] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState({});
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});

  // useEffect(() => {
  //   getProperties()
  //     .then(setProperties)
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  useEffect(() => {
  getProperties()
    .then((data) => {
      console.log("Fetched properties:", data); 
      setProperties(data);
    })
    .catch((err) => {
      console.error(err);
    });
}, []);

  const handlePrev = (propertyId, imagesLength) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [propertyId]: prev[propertyId] > 0 ? prev[propertyId] - 1 : imagesLength - 1,
    }));
  };

  const handleNext = (propertyId, imagesLength) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [propertyId]: prev[propertyId] < imagesLength - 1 ? prev[propertyId] + 1 : 0,
    }));
  };

  const handleEdit = (property) => {
    setEditId(property.id);
    setEditForm({ ...property });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async (id) => {
    try {
      // Example: update only text fields, not images
      await axios.put(`https://house-jrep.onrender.com/properties/${id}`, editForm, {
        headers: {
          // Add Authorization if needed
          Authorization: `Bearer ${token}`,
        },
      });
      setEditId(null);
      // Refresh properties
      const updated = await getProperties();
      setProperties(updated);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://house-jrep.onrender.com/properties/${id}`, {
        headers: {
          // Add Authorization if needed
          Authorization: `Bearer ${token}`,
        },
      });
      setProperties((prev) => prev.filter((p) => p.id !== id));
      if (editId === id) setEditId(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        {properties.map((property) => {
          const isEditing = editId === property.id;
          return (
            <div key={property.id} className="border rounded-xl p-4 shadow bg-white w-[70%]">
              {/* Carousel */}
              {property.photos && property.photos.length > 0 && (
                <div className="relative w-full h-[400px] flex items-center justify-center mb-4">
                  <img
                    src={
                      typeof property.photos[carouselIndex[property.id] || 0] === "string"
                        ? property.photos[carouselIndex[property.id] || 0]
                        : URL.createObjectURL(property.photos[carouselIndex[property.id] || 0])
                    }
                    alt="Property"
                    className="w-full h-[400px] object-cover rounded-xl"
                  />
                  {property.photos.length > 1 && (
                    <>
                      <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow"
                        onClick={() => handlePrev(property.id, property.photos.length)}
                      >
                        &#8592;
                      </button>
                      <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow"
                        onClick={() => handleNext(property.id, property.photos.length)}
                      >
                        &#8594;
                      </button>
                    </>
                  )}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {property.photos.map((_, idx) => (
                      <span
                        key={idx}
                        className={`inline-block w-2 h-2 rounded-full ${idx === (carouselIndex[property.id] || 0) ? "bg-[#4D0000]" : "bg-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Details */}
              <form
                className="space-y-3 mb-4"
                onSubmit={e => {
                  e.preventDefault();
                  handleSave(property.id);
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">Property Title</label>
                  <input
                    className="w-full p-2 border rounded"
                    name="title"
                    value={isEditing ? editForm.title : property.title}
                    onChange={isEditing ? handleEditChange : undefined}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Property Type</label>
                    <input
                      className="w-full p-2 border rounded"
                      name="propertyType"
                      value={isEditing ? editForm.propertyType : property.propertyType}
                      onChange={isEditing ? handleEditChange : undefined}
                      readOnly={!isEditing}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Property Category</label>
                    <input
                      className="w-full p-2 border rounded"
                      name="propertyCategory"
                      value={isEditing ? editForm.propertyCategory : property.propertyCategory}
                      onChange={isEditing ? handleEditChange : undefined}
                      readOnly={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700"> Property Address</label>
                  <input
                    className="w-full p-2 border rounded"
                    name="propertyAddress"
                    value={isEditing ? editForm.propertyAddress : property.propertyAddress}
                    onChange={isEditing ? handleEditChange : undefined}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                      className="w-full p-2 border rounded"
                      name="rentalPrice"
                      value={isEditing ? editForm.rentalPrice : property.rentalPrice}
                      onChange={isEditing ? handleEditChange : undefined}
                      readOnly={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    className="w-full p-2 border rounded"
                    name="description"
                    value={isEditing ? editForm.description : property.description}
                    onChange={isEditing ? handleEditChange : undefined}
                    rows={3}
                    readOnly={!isEditing}
                  />
                </div>
                {/* Action Buttons */}
                <div className="flex gap-4">
                  {isEditing ? (
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="bg-[#4D0000] text-white px-4 py-2 rounded hover:bg-[#6d2222]"
                      onClick={() => handleEdit(property)}
                    >
                      Edit 
                    </button>
                  )}
                  <button
                    type="button"
                    className=" text-black px-4 py-2 rounded border "
                    onClick={() => handleDelete(property.id)}
                  >
                    Delete Property
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                      onClick={() => setEditId(null)}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
}

export default PropertyListing;