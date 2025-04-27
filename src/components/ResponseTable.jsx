import React, { useState, useMemo } from "react";

const ResponceList = ({ responces = [], onClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedResponses = useMemo(() => {
    let filtered = responces.filter((emp) =>
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
  }, [responces, searchTerm, sortConfig]);

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
      <h3 className="mb-3">Response Table</h3>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search responces..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="table table-hover table-bordered">
        <thead className="table-light">
          <tr>
            <th
              onClick={() => handleSort("empId")}
              style={{ cursor: "pointer" }}>
              Emp ID
            </th>
            <th
              onClick={() => handleSort("empName")}
              style={{ cursor: "pointer" }}>
              Emp Name
            </th>
            <th
              onClick={() => handleSort("submitTime")}
              style={{ cursor: "pointer" }}>
              Submit Time
            </th>
            <th
              onClick={() => handleSort("totalScore")}
              style={{ cursor: "pointer" }}>
              Total Score
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedResponses.length > 0 ? (
            sortedResponses.map((employee, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(employee)}
                style={{ cursor: "pointer" }}>
                <td>{employee.empId}</td>
                <td>{employee.empName}</td>
                <td>{employee.submitTime}</td>
                <td>{employee.totalScore}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No responces found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResponceList;
