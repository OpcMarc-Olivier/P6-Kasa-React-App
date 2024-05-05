import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slideshow from "../../generics/slideshow/Slideshow";
import "./logement.css";
import starGrey from "../../../assets/icons/star-solid-grey.svg";
import starRed from "../../../assets/icons/star-solid-red.svg";
import TagName from "../../generics/tagname/TagName";
import Collapsable from "../../generics/collapsable/Collapsable";
function Logement() {
  //state
  const [dataHomeId, setDataHomeId] = useState([]);
  const { homeId } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const stars = [];
  const arrTest = [1, 2, 3];

  //comportements
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(starRed);
      console.log("etoile rouge");
    } else {
      stars.push(starGrey);
      console.log("etoile grise");
    }
  }
  console.log(stars);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundHome = data.find((data) => data.id === homeId);
        foundHome ? setDataHomeId(foundHome) : navigate("/*");
        setRating(foundHome.rating);
        console.log(`rating: ${foundHome.rating}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //render
  return (
    <div className="logement">
      <Slideshow homeId={homeId} dataHomeId={dataHomeId} />
      <div className="home-content">
        <div className="home-header">
          <div className="home-header-section1">
            <div className="home-titles">
              <h1 className="home-title">{dataHomeId.title}</h1>
              <p>{dataHomeId.location}</p>
            </div>
            <div className="home-header-tags">
              <div className="tags-ctn">
                {dataHomeId.tags?.map((data, i) => (
                  <TagName tag={data} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="home-header-section2">
            <div className="home-thumb">
              <p>{dataHomeId.host?.name}</p>
              <div className="thumbnail">
                <img
                  src={dataHomeId.host?.picture}
                  alt={`portrait ${dataHomeId.host?.name}`}
                />
              </div>
            </div>
            <div className="rating">
              {stars.map((star, i) => (
                <img key={i} className="star" src={star} alt="étoile note" />
              ))}
            </div>
          </div>
        </div>
        <div className="home-infos">
          <Collapsable headLabel="Description">
            <p>{dataHomeId.description}</p>
          </Collapsable>
          <Collapsable headLabel="Équipements">
            <ul className="equipments-list">
              {dataHomeId.equipments?.map((data, i) => (
                <li key={i}>{data}</li>
              ))}
            </ul>
          </Collapsable>
        </div>
      </div>
    </div>
  );
}

export default Logement;
