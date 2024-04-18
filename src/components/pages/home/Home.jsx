import React from "react";
import "../../../styles/home.css";
import { useState } from "react";
import data from "../../../assets/data.json";
import Card from "../../Card";
import Banner from "../../Banner";
function Home() {
  //state
  const [dataHome, setdataHome] = useState(data);

  const bannerProps = {
    image: "./imagesource1.jpg",
    alt: "Falaise océan",
    title: "Chez vous, partout et ailleurs",
  };
  //comportements
  //render
  return (
    <div className="home-wrapper">
      <Banner
        image={bannerProps.image}
        imageAlt={bannerProps.alt}
        imageTitle={bannerProps.title}
      />
      <ul className="home-gallery">
        {dataHome.map((data) => (
          <Card dataCard={data} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
