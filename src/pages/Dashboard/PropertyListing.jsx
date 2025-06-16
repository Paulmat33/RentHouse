import { useState } from "react";
// import { useProperties } from "../../context/PropertyContext";
import MainLayout from "../../layout/MainLayout";

function PropertyListing() {
  // const { properties, deleteProperty, updateProperty } = useProperties();
  const [carouselIndex, setCarouselIndex] = useState({});
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});

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

  const handleSave = (id) => {
    updateProperty(id, editForm);
    setEditId(null);
  };

  const handleDelete = (id) => {
    deleteProperty(id);
    // If you delete the property being edited, reset editId
    if (editId === id) setEditId(null);
  };

  return (
    <MainLayout>
      {/* Header Bar */}
      <div className="space-y-8">
        {properties.map((property) => {
          const isEditing = editId === property.id;
          return (
            <div key={property.id} className="border rounded-xl p-4 shadow bg-white w-[70%]">
              {/* Carousel */}
              {property.images && property.images.length > 0 && (
                <div className="relative w-full h-[600px] flex items-center justify-center mb-4">
                  <img
                    src={
                      typeof property.images[carouselIndex[property.id] || 0] === "string"
                        ? property.images[carouselIndex[property.id] || 0]
                        : URL.createObjectURL(property.images[carouselIndex[property.id] || 0])
                    }
                    alt="Property"
                    className="w-full h-[600px] object-cover rounded-xl"
                  />
                  {property.images.length > 1 && (
                    <>
                      <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow"
                        onClick={() => handlePrev(property.id, property.images.length)}
                      >
                        &#8592;
                      </button>
                      <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow"
                        onClick={() => handleNext(property.id, property.images.length)}
                      >
                        &#8594;
                      </button>
                    </>
                  )}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {property.images.map((_, idx) => (
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
                  <label className="block text-sm font-medium text-gray-700">Title</label>
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
                    <label className="block text-sm font-medium text-gray-700">Type</label>
                    <input
                      className="w-full p-2 border rounded"
                      name="type"
                      value={isEditing ? editForm.type : property.type}
                      onChange={isEditing ? handleEditChange : undefined}
                      readOnly={!isEditing}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                      className="w-full p-2 border rounded"
                      name="category"
                      value={isEditing ? editForm.category : property.category}
                      onChange={isEditing ? handleEditChange : undefined}
                      readOnly={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    className="w-full p-2 border rounded"
                    name="address"
                    value={isEditing ? editForm.address : property.address}
                    onChange={isEditing ? handleEditChange : undefined}
                    readOnly={!isEditing}
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                      className="w-full p-2 border rounded"
                      name="location"
                      value={isEditing ? editForm.location : property.location}
                      onChange={isEditing ? handleEditChange : undefined}
                      readOnly={!isEditing}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                      className="w-full p-2 border rounded"
                      name="price"
                      value={isEditing ? editForm.price : property.price}
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