import React, { useState } from "react";
import Banner from "../../Banner";
import Collapsable from "../../Collapsable";

function Apropos() {
  //state
  const [bannerProps, setBannerProps] = useState({
    image: "./imagesource2.jpg",
    alt: "Falaise océan",
    title: "",
  });

  // const bannerProps = {
  //   image: "./imagesource1.jpg",
  //   alt: "Falaise océan",
  //   title: "Chez vous, partout et ailleurs",
  // };
  //comportements

  //render
  return (
    <div>
      <Banner
        image={bannerProps.image}
        imageAlt={bannerProps.alt}
        imageTitle={bannerProps.title}
      />
      <Collapsable />
    </div>
  );
}

export default Apropos;
