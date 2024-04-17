import React from "react";
import "../../../styles/home.css";

function Home() {
  //state
  //comportements
  //render
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <img
          className="home-banner"
          src="./imagesource1.jpg"
          alt="falaises océan"
        />
        <div className="title-container">
          <h2 className="home__title">Chez vous, partout et ailleurs</h2>
        </div>
      </div>
      <div className="home-gallery">Gallery</div>
    </div>
  );
}

export default Home;
