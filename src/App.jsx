import "./App.css";
import ListContainer from "./components/listcontainer";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get("http://localhost:8080/getAll");
        // console.log(res);
        setList(await res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAll();
  }, []);

  return (
    <div className="App">
      <ListContainer list={list} />
    </div>
  );
}

export default App;
