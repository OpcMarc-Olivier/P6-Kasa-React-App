import React, { useEffect } from "react";
import "./home.css";
import { useState } from "react";
import Card from "../../generics/card/Card";
import Banner from "../../generics/banner/Banner";
import { useNavigate } from "react-router-dom";
function Home() {
  //state
  const [dataHome, setdataHome] = useState([]);
  const bannerProps = {
    image: "./imagesource1.jpg",
    alt: "Falaise océan",
    title: "Chez vous, partout et ailleurs",
  };
  //comportements
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate(`/logement/${data.id}`);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .then((data) => {
        setdataHome(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
