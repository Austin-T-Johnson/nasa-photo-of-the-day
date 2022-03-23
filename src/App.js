import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import MainPhoto from "./components/MainPhoto";


function App() {
  const [data, setdata] = useState([]);


  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        //  console.log(res.data)
        setdata(res.data)
      })
      .catch(err => console.error(err))
  }, [])


  return (
    <div className="App">
      {<Header headerTitle={data} date={data} />}
      {<MainPhoto mainPhoto={data} photoExp={data} />}
    </div>

  );
}

export default App;
