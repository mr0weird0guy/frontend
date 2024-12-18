import axios from "axios";
import React, { useState } from "react";

const ListItems = ({
  slno,
  newrow,
  data = {},
  onCancel = () => {},
  onDelete = () => {},
}) => {
  const [editable, setEditable] = useState(newrow ? false : true);
  const [name, setName] = useState(data["name"]);
  const [prod, setProd] = useState(data["productivity"]);
  const [coll, setColl] = useState(data["collaboration"]);
  const [comm, setComm] = useState(data["communication"]);

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

  const edit = async () => {
    setEditable((state) => !state);
  };

  const save = async (e) => {
    e.preventDefault();
    if (
      name === undefined ||
      prod === undefined ||
      coll === undefined ||
      comm === undefined ||
      name === "" ||
      prod === "" ||
      coll === "" ||
      comm === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    try {
      if (newrow) {
        const addData = await axios.post("http://localhost:8080/add/", {
          name,
          prod,
          coll,
          comm,
        });
      } else {
        const updatedData = await axios.post(
          "http://localhost:8080/update/" + slno,
          { name, prod, coll, comm }
        );
      }
    } catch (error) {
      console.log(error);
    }
    setEditable((state) => !state);
  };

  const cancel = () => {
    if (newrow) {
      onCancel();
    }
    setEditable((state) => !state);
  };

  const deleteRow = async () => {
    // delete the row on confirmation
    if (window.confirm("Do you want to delete row?") === true) {
      const deleteData = await axios.get(
        "http://localhost:8080/delete/" + slno
      );
      onDelete(slno);
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
        {prod || coll || comm
          ? ((Number(prod) + Number(coll) + Number(comm)) / 3).toFixed(2)
          : 0}
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
          onClick={(e) => {
            save(e);
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
