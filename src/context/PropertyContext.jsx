import { createContext, useState, useContext } from "react";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([
    {
      title: "2 Bedroom Flat",
      location: "Lekki Phase 1",
      price: "750000",
      description: "Modern 2 bedroom flat.",
      image: "https://source.unsplash.com/400x300/?house",
    },
  ]);

  const addProperty = (property) => setProperties((prev) => [property, ...prev]);

  return (
    <PropertyContext.Provider value={{ properties, addProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperties = () => useContext(PropertyContext);
