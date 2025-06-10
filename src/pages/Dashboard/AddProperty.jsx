import MainLayout from "../../layout/MainLayout";
import { useState, useRef } from "react";
import { useProperties } from "../../context/PropertyContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function AddProperty() {
  const { addProperty } = useProperties();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    category: "",
    address: "",
    description: "",
    images: [],
  });
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFormData({ ...formData, images: Array.from(e.dataTransfer.files) });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You may need to handle file upload logic here
    addProperty(formData);
    navigate("/dashboard/landlord/properties");
  };

  return (
    <MainLayout>
      <button
        type="button"
        className="flex items-center mb-4 text-blue-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1" />
        Back
      </button>
      <h2 className="text-2xl font-bold mb-6">Add Property</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block mb-1 font-medium">Property Title</label>
          <input
            name="title"
            type="text"
            placeholder="Enter property title"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Property Type</label>
            <select
              name="type"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              {/* Add more types as needed */}
            </select>
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium">Property Category</label>
            <select
              name="category"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              <option value="rent">Rent</option>
              <option value="sale">Sale</option>
              {/* Add more categories as needed */}
            </select>
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium">Property Address</label>
          <input
            name="address"
            type="text"
            placeholder="Enter address"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Enter description"
            className="w-full p-2 border rounded"
            rows={3}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-medium">Upload Photos</label>
          <div
            className="w-full p-4 border-2 border-dashed rounded text-center cursor-pointer bg-gray-50"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current.click()}
          >
            Drag & drop your images here, or{" "}
            <span className="text-blue-600 underline">browse</span>
            <input
              ref={fileInputRef}
              type="file"
              name="images"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          {formData.images.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.images.map((file, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-200 px-2 py-1 rounded"
                >
                  {file.name}
                </span>
              ))}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </MainLayout>
  );
}

export default AddProperty;
