import React, { useState } from "react";

const ListItems = ({ slno, data = {} }) => {
  const [editable, setEditable] = useState(true);
  const [name, setName] = useState(data["Name"]);
  const [prod, setProd] = useState(data["Productivity"]);
  const [coll, setColl] = useState(data["Collaboration"]);
  const [comm, setComm] = useState(data["Communication"]);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeProd = (e) => {
    setProd(e.target.value);
  };
  const changeColl = (e) => {
    setColl(e.target.value);
  };
  const changeComm = (e) => {
    setComm(e.target.value);
  };

  const edit = () => {
    setEditable((state) => !state);
  };

  const save = () => {
    setEditable((state) => !state);
  };

  const cancel = () => {
    setEditable((state) => !state);
  };

  const deleteRow = (data) => {
    // delete the row on confirmation
    if (window.confirm("Do you want to delete row?") === true) {
      console.log("Deleted");
    } else {
      console.log("Not Delete");
    }
    return;
  };

  return (
    <tr>
      <td>{slno}</td>
      <td>
        <input
          type="text"
          value={name}
          onChange={changeName}
          disabled={editable}
        />
      </td>
      <td>
        <input
          type="number"
          min={1}
          max={10}
          onChange={changeProd}
          value={prod}
          disabled={editable}
        />
      </td>
      <td>
        <input
          type="number"
          min={1}
          max={10}
          value={coll}
          onChange={changeColl}
          disabled={editable}
        />
      </td>
      <td>
        <input
          type="number"
          min={1}
          max={10}
          value={comm}
          onChange={changeComm}
          disabled={editable}
        />
      </td>
      <td>
        {(data["Productivity"] +
          data["Collaboration"] +
          data["Communication"]) /
          3}
      </td>
      <td>
        <button
          style={{ display: editable ? "block" : "none" }}
          visible={!editable}
          onClick={() => {
            edit();
          }}>
          Edit
        </button>

        <button
          style={{ display: editable ? "none" : "block" }}
          onClick={() => {
            save();
          }}>
          Save
        </button>
      </td>
      <td>
        <button
          style={{ display: editable ? "block" : "none" }}
          onClick={(data) => {
            deleteRow(data);
          }}>
          Delete
        </button>

        <button
          style={{ display: editable ? "none" : "block" }}
          visible={!editable}
          onClick={() => {
            cancel();
          }}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default ListItems;
