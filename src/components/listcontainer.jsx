import React, { useState } from "react";
import ListItems from "./listItems";

const ListContainer = ({ list = [] }) => {
  const [adding, setAdding] = useState(false);
  const listStyle = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
  };

  const cancel = () => {
    setAdding(!adding);
  };

  const addRow = () => {
    console.log("Add Row");
    setAdding(!adding);
  };

  const deleteRow = (id) => {
    console.log(id);
    list = list.filter((item) => item.id !== id);
  };

  // console.log(list);

  return (
    <div>
      <h1>My List</h1>
      <table style={listStyle}>
        <tr>
          <th>Sl. No.</th>
          <th>Name</th>
          <th>Productivity</th>
          <th>Collaboration</th>
          <th>Communication</th>
          <th>Total Score</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tbody>
          {list.map((data, index) => (
            <ListItems key={index} slno={index + 1} data={data} />
          ))}
          {adding && (
            <ListItems
              key={adding}
              slno={list.length + 1}
              newrow={adding}
              onDelete={(id) => deleteRow(id)}
              onCancel={() => cancel()}
            />
          )}
        </tbody>
      </table>
      <button onClick={() => addRow()}>Add</button>
    </div>
  );
};

export default ListContainer;
