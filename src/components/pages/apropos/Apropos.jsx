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

  const collapsableContent = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos son conformes aux logements, et toutes les informations sont vérifiées régulièrment par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  ];

  //render
  return (
    <div>
      <Banner
        image={bannerProps.image}
        imageAlt={bannerProps.alt}
        imageTitle={bannerProps.title}
      />
      <Collapsable headLabel="Fiabilité">
        <p>{collapsableContent[0]}</p>
      </Collapsable>
      <Collapsable headLabel="Respect">
        <p>{collapsableContent[1]}</p>
      </Collapsable>
      <Collapsable headLabel="Service">
        <p>{collapsableContent[2]}</p>
      </Collapsable>
      <Collapsable headLabel="sécurité">
        <p>{collapsableContent[3]}</p>
      </Collapsable>
    </div>
  );
}

export default Apropos;
