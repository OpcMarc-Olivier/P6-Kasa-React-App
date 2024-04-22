import React from "react";
import "../../../styles/home.css";
import { useState } from "react";
import data from "../../../assets/data.json";
import Card from "../../Card";
import Banner from "../../Banner";
import { useNavigate } from "react-router-dom";
function Home() {
  //state
  const [dataHome, setdataHome] = useState(data);
  const navigate = useNavigate();
  const bannerProps = {
    image: "./imagesource1.jpg",
    alt: "Falaise océan",
    title: "Chez vous, partout et ailleurs",
  };
  //comportements
  const handleClick = () => {
    navigate("/logement");
  };
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
          <Card key={data.id} onCardClick={handleClick} dataCard={data} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
