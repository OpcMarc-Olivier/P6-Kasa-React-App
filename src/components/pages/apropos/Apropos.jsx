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
