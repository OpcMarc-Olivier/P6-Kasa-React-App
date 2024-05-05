import React, { useEffect, useState } from "react";
import "./slidershow.css";
import datajson from "../../../assets/data.json";
import prevArrow from "../../../assets/icons/arrow-left.svg";
import nextArrow from "../../../assets/icons/arrow-right.svg";
import { useNavigate } from "react-router-dom";

function Slideshow({ homeId, dataHomeId }) {
  //state
  const [sliderState, setSliderState] = useState([]);
  const [slideClass, setSlideClass] = useState("slide");
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const lengthPic = sliderState.length;

  //   comportement;

  const handleNext = () => {
    setCurrent(current === lengthPic - 1 ? 0 : current + 1);
    setSlideClass("slide");
  };
  const handlePrev = () => {
    setCurrent(current === 0 ? lengthPic - 1 : current - 1);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundHome = data.find((data) => data.id === homeId);
        foundHome.pictures
          ? setSliderState(foundHome.pictures)
          : navigate("/*");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //render
  return (
    <div className="slideshow">
      {lengthPic > 1 && (
        <button className="btn" id="prev" onClick={handlePrev}>
          <img src={prevArrow} alt="" />
        </button>
      )}
      {lengthPic > 1 && (
        <button className="btn" id="next" onClick={handleNext}>
          <img src={nextArrow} alt="" />
        </button>
      )}
      <ul className="carroussel">
        {sliderState?.map(
          (data, i) =>
            i === current && (
              <li className={slideClass} key={i}>
                <img src={data} alt="" />
              </li>
            ),
        )}
      </ul>
      <span className="picture-rank">
        {current + 1} / {lengthPic}
      </span>
    </div>
  );
}

export default Slideshow;
