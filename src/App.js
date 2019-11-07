import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaGrid from "./components/NasaGrid.js";


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=VPPCpaaYtMz6dMSOIhKyWndX5U2ScVvC9vxEpdzU")
    .then(response => {
      console.log(response.data)
      setData(response.data)
    })
    .catch(err => {
      console.log("There is no data as of now. Retry later")
    })
  },[])
  return (
    <div className="App">
      <NasaGrid title={data.title} url={data.hdurl} explanation={data.explanation} date={data.date} />
    </div>
  );
}

export default App;
