import React from "react";
import "../styles/banner.css";
function Banner({ image, imageAlt, imageTitle }) {
  return (
    <div className="banner-container">
      <img className="banner-img" src={image} alt={imageAlt} />
      <div className="title-container">
        <h2 className="home__title">{imageTitle}</h2>
      </div>
    </div>
  );
}

export default Banner;
