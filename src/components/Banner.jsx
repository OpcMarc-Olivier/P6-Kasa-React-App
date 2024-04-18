import React from "react";
import "../styles/banner.css";
function Banner() {
  return (
    <div className="banner-container">
      <img
        className="banner-img"
        src="./imagesource1.jpg"
        alt="falaises océan"
      />
      <div className="title-container">
        <h2 className="home__title">Chez vous, partout et ailleurs</h2>
      </div>
    </div>
  );
}

export default Banner;
