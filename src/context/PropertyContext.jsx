import React, { createContext, useContext, useState } from "react";

const PropertyContext = createContext();

export function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);

  const addProperty = (property) => {
    setProperties((prev) => [...prev, property]);
  };

  return (
    <PropertyContext.Provider value={{ properties, addProperty }}>
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperties() {
  return useContext(PropertyContext);
}
