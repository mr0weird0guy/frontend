import logo from "./logo.svg";
import "./App.css";
import ListContainer from "./components/listcontainer";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const fetchAll = async () => {
    try {
      const res = await axios.get("http://localhost:8080/getAll");
      setList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAll();
    console.log(list);
  }, []);

  return (
    <div className="App">
      <ListContainer list={list} />
    </div>
  );
}

export default App;
