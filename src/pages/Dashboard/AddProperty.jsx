import MainLayout from "../../layout/MainLayout";
import { useState } from "react";
import { useProperties } from "../../context/PropertyContext";
import { useNavigate } from "react-router-dom";

function AddProperty() {
  const { addProperty } = useProperties();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProperty(formData);
    navigate("/dashboard/landlord/properties");
  };

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="location"
          type="text"
          placeholder="Location"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="image"
          type="url"
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded"
          rows={3}
          onChange={handleChange}
          required
        ></textarea>
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
