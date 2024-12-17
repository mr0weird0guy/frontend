import React from "react";
import ListItems from "./listItems";

const ListContainer = ({ list = [] }) => {
  const listStyle = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
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
        </tbody>
      </table>
    </div>
  );
};

export default ListContainer;
