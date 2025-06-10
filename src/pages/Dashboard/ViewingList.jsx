import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { Link } from "react-router-dom";

const ViewingList = () => {
  const [filters, setFilters] = useState({
    date: "",
    name: "",
    itemName: "",
  });
  const [viewings, setViewings] = useState([]);


  const handleDelete = (idx) => {
    setViewings(viewings.filter((_, i) => i !== idx));
  };

  return (
    <MainLayout>
      {/* Filter section with select and search input */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", }}>
        <select
          name="filterType"
          value={filters.filterType || "date"}
          onChange={e => setFilters({ ...filters, filterType: e.target.value, search: "" })}
          className="border p-2 rounded"

        >
          <option value="date">Add Filter</option>
          <option value="date">Date</option>
          <option value="name">Name</option>
          <option value="itemName">Item Name</option>
        </select>
        <input
          type={filters.filterType === "date" ? "date" : "text"}
          name="search"
          value={filters.search || ""}
          onChange={e => setFilters({ ...filters, search: e.target.value })}
          placeholder={`Search by ${filters.filterType || "date"}`}
          className="border p-2 rounded"
        />
      </div>

      <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Date</th>
            <th>Viewing Request</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {viewings
            .filter((v) => {
              if (!filters.search) return true;
              const val = filters.search.toLowerCase();
              if (filters.filterType === "date") return v.date.includes(filters.search);
              if (filters.filterType === "name") return v.name.toLowerCase().includes(val);
              if (filters.filterType === "itemName") return v.itemName.toLowerCase().includes(val);
              return true;
            })
            .map((v, idx) => (
              <tr key={idx}>
                <td>{v.itemId}</td>
                <td>{v.itemName}</td>
                <td>{v.date}</td>
                <td>{v.viewingRequest}</td>
                <td>{v.name}</td>
                <td>
                  <button style={{ marginRight: "0.5rem" }}>View</button>
                  <button onClick={() => handleDelete(idx)}>Delete</button>
                </td>
              </tr>
            ))}
          {viewings.filter((v) => {
            if (!filters.search) return true;
            const val = filters.search.toLowerCase();
            if (filters.filterType === "date") return v.date.includes(filters.search);
            if (filters.filterType === "name") return v.name.toLowerCase().includes(val);
            if (filters.filterType === "itemName") return v.itemName.toLowerCase().includes(val);
            return true;
          }).length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", marginTop: "40px" }}>
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </MainLayout>
  );
};

export default ViewingList;