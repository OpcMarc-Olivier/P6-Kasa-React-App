import React from "react";
import "../../../styles/home.css";
import { useState } from "react";
import data from "../../../assets/data.json";
import Card from "../../Card";
import Banner from "../../Banner";
function Home() {
  //state
  const [dataHome, setdataHome] = useState(data);
  //comportements
  //render
  return (
    <div className="home-wrapper">
      <Banner />
      <ul className="home-gallery">
        {dataHome.map((data) => (
          <Card dataCard={data} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
