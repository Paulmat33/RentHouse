import MainLayout from "../../layout/MainLayout";
import { useState, useRef } from "react";
// import { createProperty } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { toast, ToastContainer } from "react-toastify";

function AddProperty() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    propertyType: "",
    rentalPrice: "",
    images: [],
    amenities: [],
    propertyAddress: "",
    propertyCategory: "",
  });
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => {
      const newImages = [...prev.images, ...files].slice(0, 5);
      if (newImages.length < prev.images.length + files.length) {
        toast.info("You can only upload up to 5 images.");
      }
      return { ...prev, images: newImages };
    });
  };

  // Drag and drop support
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );
    setFormData((prev) => {
      const newImages = [...prev.images, ...files].slice(0, 5);
      if (newImages.length < prev.images.length + files.length) {
        toast.info("You can only upload up to 5 images.");
      }
      return { ...prev, images: newImages };
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Remove image by index
  const handleRemoveImage = (idx) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== idx),
    }));
  };

  // Handle amenities as checkboxes
  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const amenities = checked
        ? [...prev.amenities, value]
        : prev.amenities.filter((a) => a !== value);
      return { ...prev, amenities };
    });
  };

  async function uploadImageToCloudinary(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "unsigned_preset"); // Replace with your preset

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dirb6q9wv/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const result = await response.json();
    return result.secure_url;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    if (formData.images.length < 1) {
      toast.error("Please select at least one photo.");
      setUploading(false);
      return;
    }
    if (formData.images.length > 5) {
      toast.error("You can only upload up to 5 images.");
      setUploading(false);
      return;
    }

    try {
      const photoUrls = await Promise.all(
        formData.images.slice(0, 5).map((file) => uploadImageToCloudinary(file))
      );

      if (!photoUrls.length) {
        toast.error("Image upload failed. Please try again.");
        setUploading(false);
        return;
      }

      // Build FormData
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("propertyType", formData.propertyType);
      data.append("rentalPrice", formData.rentalPrice);
      data.append("propertyAddress", formData.propertyAddress);
      data.append("propertyCategory", formData.propertyCategory);

      // Append each photo URL as a separate 'photos' field
      photoUrls.forEach((url) => data.append("photos", url));

      // Append each amenity as a separate 'amenities' field
      formData.amenities.forEach((a) => data.append("amenities", a));

      const user = JSON.parse(localStorage.getItem("user"));
      const token = user?.access_token;

      // If using fetch:
      await fetch("https://house-jrep.onrender.com/properties", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          // Do NOT set Content-Type, let browser set it for FormData
        },
        body: data,
      });

      setFormData({
        title: "",
        description: "",
        propertyType: "",
        rentalPrice: "",
        images: [],
        amenities: [],
        propertyAddress: "",
        propertyCategory: "",
      });
      toast.success("successful")
      // navigate("/dashboard/landlord/property-listing");
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Submission failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <MainLayout>
      <ToastContainer />
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
            className="w-full p-2 border rounded-xl"
            onChange={handleChange}
            value={formData.title}
            required
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-bold">Property Type</label>
            <select
              name="propertyType"
              className="w-full p-2 border rounded-xl"
              onChange={handleChange}
              value={formData.propertyType}
              required
            >
              <option value="">Select type</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Duplex">Duplex</option>
              <option value="3 Bedroom">3 Bedroom</option>
              {/* Add more types as needed */}
            </select>
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-bold">Property Category</label>
            <select
              name="propertyCategory"
              className="w-full p-2 border rounded-xl"
              onChange={handleChange}
              value={formData.propertyCategory}
              required
            >
              <option value="">Select category</option>
              <option value="rent">Rent</option>
              <option value="sale">Sale</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-bold">Price</label>
            <input
              name="rentalPrice"
              type="number"
              className="w-full p-2 border rounded-xl"
              onChange={handleChange}
              value={formData.rentalPrice}
              required
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-bold">Property Address</label>
          <input
            name="propertyAddress"
            type="text"
            className="w-full p-2 border rounded-xl"
            onChange={handleChange}
            value={formData.propertyAddress}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-bold">Description</label>
          <textarea
            name="description"
            className="w-full p-2 border rounded-xl h-[250px]"
            rows={3}
            onChange={handleChange}
            value={formData.description}
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-bold">Amenities</label>
          <div className="flex gap-4 flex-wrap">
            {["light", "water", "air-conditioning", "solar electricity"].map(
              (amenity) => (
                <label key={amenity} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    value={amenity}
                    checked={formData.amenities.includes(amenity)}
                    onChange={handleAmenityChange}
                  />
                  {amenity}
                </label>
              )
            )}
          </div>
        </div>
        <div>
          <label className="block mb-4 font-bold">
            Upload image(s) of the property
          </label>
          <div
            className="w-full p-4 border-2 border-[#000000D1] border-dashed rounded text-center cursor-pointer bg-[#D9D9D9] h-[200px] flex flex-col items-center justify-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => fileInputRef.current.click()}
          >
            <button
              type="button"
              className="bg-white text-[#4D0000] px-4 py-2 rounded shadow cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current.click();
              }}
            >
              Upload Photo
            </button>
            <span className="mt-2">
              Drag & drop or choose file to upload (max 5)
            </span>
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
                  <span className="text-xs text-center break-all">
                    {file.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#4D0000] text-white px-4 py-2 rounded cursor-pointer "
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Add Property"}
          </button>
        </div>
      </form>
    </MainLayout>
  );
}

export default AddProperty;
