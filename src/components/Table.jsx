import React, { useState, useMemo } from "react";

const Table = ({ data = [{}], onClick, name }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedData = useMemo(() => {
    let filtered = data.filter((emp) =>
      Object.values(emp).some((val) =>
        val.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [data, searchTerm, sortConfig]);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleRowClick = (responceId) => {
    if (onClick) {
      onClick(responceId);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">{name} Table</h3>
      <input
        type="text"
        className="form-control mb-3"
        placeholder={"Search " + name + "..."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="table table-hover table-bordered">
        <thead className="table-light">
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                onClick={() => handleSort(key)}
                style={{ cursor: "pointer" }}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.length > 0 ? (
            sortedData.map((row, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(row)}
                style={{ cursor: "pointer" }}>
                {Object.values(row).map((val) => (
                  <td key={val}>{val}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No {name} found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
