import MainLayout from "../../layout/MainLayout";
import { useState, useRef } from "react";
import { createProperty } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid"; // Add this import at the top

function AddProperty() {
  // const { addProperty } = useProperties();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    rentalPrice: "",
    photos: [],
    category: "",
    address: "",
    location: "",
  });
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newFiles.filter(
        file => !prev.images.some(img => img.name === file.name && img.size === file.size)
      )],
    }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newFiles.filter(
        file => !prev.images.some(img => img.name === file.name && img.size === file.size)
      )],
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You may need to handle file upload logic here
    navigate("/dashboard/landlord/property-listing");
    setFormData({
    title: "",
    description: "",
    propertyType: "",
    rentalPrice: "",
    photos: [],
    category: "",
    address: "",
    location: "",
    });
  };

  // Add this function inside your AddProperty component
  const handleRemoveImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, idx) => idx !== index),
    }));
  };

  return (
    <MainLayout>
      <button
        type="button"
        className="flex items-center mb-4 text-[#000000] cursor-pointer"
        onClick={() => navigate("/dashboard/landlord")}
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1" />
      <h2 className="text-2xl font-bold">Add Property</h2>
      </button>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block mb-1 font-bold">Property Title</label>
          <input
            name="title"
            type="text"
            // placeholder="Enter property title"
            className="w-full p-2 border rounded-xl"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-bold">Property Type</label>
            <select
              name="type"
              className="w-full p-2 border rounded-xl"
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              {/* <option value="condo">Condo</option> */}
              {/* Add more types as needed */}
            </select>
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-bold">Property Category</label>
            <select
              name="category"
              className="w-full p-2 border rounded-xl"
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

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-bold">Location</label>
            <input
            name="location"
            type="text"
            // placeholder="Enter address"
            className="w-full p-2 border rounded-xl"
            onChange={handleChange}
            required
          />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-bold">Price</label>
           <input
            name="price"
            type="number"
            // placeholder="Enter address"
            className="w-full p-2 border rounded-xl"
            onChange={handleChange}
            required
          />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-bold">Property Address</label>
          <input
            name="address"
            type="text"
            // placeholder="Enter address"
            className="w-full p-2 border rounded-xl"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-bold">Description</label>
          <textarea
            name="description"
            // placeholder="Enter description"
            className="w-full p-2 border rounded-xl h-[250px]"
            rows={3}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-4 font-bold">Upload image(s) of the property</label>
          <div
            className="w-full p-4 border-2 border-[#000000D1] border-dashed rounded text-center cursor-pointer bg-[#D9D9D9] h-[200px] flex flex-col items-center justify-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current.click()}
          >
            <button
              type="button"
              className="bg-white text-[#4D0000] px-4 py-2 rounded shadow cursor-pointer"
              onClick={e => {
                e.stopPropagation();
                fileInputRef.current.click();
              }}
            >
              Upload Photo
            </button>
            <span className="mt-2">Drag & drop or choose file to upload</span>
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
            <div className="mt-4 flex flex-wrap gap-4">
              {formData.images.map((file, idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  <button
                    type="button"
                    className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow hover:bg-gray-200"
                    onClick={() => handleRemoveImage(idx)}
                    tabIndex={-1}
                  >
                    <XMarkIcon className="h-4 w-4 text-red-500" />
                  </button>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-24 h-24 object-cover rounded mb-1 border"
                  />
                  <span className="text-xs text-center break-all">{file.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Add Property Button Centered */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#4D0000] text-white px-4 py-2 rounded cursor-pointer "
          >
            Add Property
          </button>
        </div>
      </form>
    </MainLayout>
  );
}

export default AddProperty;
