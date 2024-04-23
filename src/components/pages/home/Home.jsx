import React, { useEffect } from "react";
import "../../../styles/home.css";
import { useState } from "react";
import Card from "../../Card";
import Banner from "../../Banner";
import { useNavigate } from "react-router-dom";
function Home({ dataHome }) {
  const navigate = useNavigate();
  const bannerProps = {
    image: "./imagesource1.jpg",
    alt: "Falaise océan",
    title: "Chez vous, partout et ailleurs",
  };
  //comportements
  const handleClick = (data) => {
    navigate(`/logement/${data.id}`);
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
          <Card
            key={data.id}
            onCardClick={() => handleClick(data)}
            dataCard={data}
          />
        ))}
      </ul>
    </div>
  );
}

export default Home;
