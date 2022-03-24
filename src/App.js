import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import MainPhoto from "./components/MainPhoto";
import Background from "./components/Background";
import MarsRoverPhoto from "./components/MarsRoverPhoto";
import MarsRoverInfo from "./components/MarsRoverInfo";


function App() {
  const [data, setData] = useState([]);
  const [marsData, setMarsData]= useState([]);
  


  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=n9Cus429g6jfhIKecHPnPywfpWuJ73pJ71UPvafz")
      .then(res => {
        //  console.log(res.data)
        setData(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=n9Cus429g6jfhIKecHPnPywfpWuJ73pJ71UPvafz")
      .then(res => {
         console.log(res.data.photos[0])
        setMarsData(res.data.photos[0])
        
      })
      .catch(err => console.error(err))
  }, [])
 

  return (
    <div className="App">
      {<Header headerTitle={data} date={data} />}
      {<MainPhoto mainPhoto={data} photoExp={data} />}
      {<MarsRoverInfo marsRover={marsData}/>}
      {<MarsRoverPhoto marsPhoto={marsData} />}
      
      {<Background />}
    </div>

  );
}

export default App;
